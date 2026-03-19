import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import Markdown from 'react-markdown';
import { collection, addDoc, updateDoc, serverTimestamp } from 'firebase/firestore';
import { db, handleFirestoreError, OperationType } from '../firebase';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

interface Message {
  role: 'user' | 'model';
  text: string;
}

export default function ChatAgent() {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Hi! I'm Bilau's AI assistant. How can I help you today? You can ask me about his services, media systems consultation, or how to book a speaking engagement." }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize chat session
  const chatRef = useRef<any>(null);

  useEffect(() => {
    chatRef.current = ai.chats.create({
      model: "gemini-3-flash-preview",
      config: {
        systemInstruction: `You are a helpful AI assistant for Bilau Oluwatobi Victor, an ICT expert, Media Systems Architect, and African Media Director for the Global School of Ministry. 
Your goal is to answer frequently asked questions about his services, consultations, and expertise.
Keep your answers concise, professional, and friendly.
Services include:
- Media Systems Consultation (audio, video, lighting, broadcast for churches and organizations)
- ICT Expertise (network infrastructure, cloud solutions)
- Digital Ministry Strategy
- Speaking Engagements and Workshops
If a user wants to book a consultation or contact him directly, encourage them to use the contact form on this page or email contact@oluwatobibilau.com.
Do not make up pricing. State that pricing depends on the scope of the project and they should reach out for a custom quote.`,
      }
    });
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      if (!chatRef.current) return;
      
      let docRef: any = null;
      try {
        docRef = await addDoc(collection(db, 'queries'), {
          question: userMsg,
          createdAt: serverTimestamp()
        });
      } catch (dbError) {
        handleFirestoreError(dbError, OperationType.CREATE, 'queries');
      }

      const response = await chatRef.current.sendMessage({ message: userMsg });
      const responseText = response.text || "I'm sorry, I couldn't process that request.";
      
      setMessages(prev => [...prev, { role: 'model', text: responseText }]);

      if (docRef) {
        try {
          await updateDoc(docRef, {
            response: responseText
          });
        } catch (dbError) {
          handleFirestoreError(dbError, OperationType.UPDATE, `queries/${docRef.id}`);
        }
      }
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "Sorry, I'm having trouble connecting right now. Please try again later or use the contact form." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col h-[450px]">
      <div className="bg-slate-900 text-white p-4 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center shadow-inner">
          <i className="ph-fill ph-robot text-xl"></i>
        </div>
        <div>
          <h3 className="font-bold text-sm">AI Assistant</h3>
          <p className="text-xs text-slate-300 font-light">Ask about services & consultations</p>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
              msg.role === 'user' 
                ? 'bg-blue-600 text-white rounded-tr-sm shadow-sm' 
                : 'bg-white border border-slate-200 text-slate-700 rounded-tl-sm shadow-sm'
            }`}>
              {msg.role === 'model' ? (
                <div className="prose prose-sm prose-slate max-w-none prose-p:my-1 prose-ul:my-1 prose-li:my-0">
                  <Markdown>{msg.text}</Markdown>
                </div>
              ) : (
                msg.text
              )}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white border border-slate-200 text-slate-500 rounded-2xl rounded-tl-sm px-4 py-3 text-sm shadow-sm flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></div>
              <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSend} className="p-3 bg-white border-t border-slate-200 flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your question..."
          className="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-slate-50 text-sm"
          disabled={isLoading}
        />
        <button 
          type="submit" 
          disabled={!input.trim() || isLoading}
          className="w-11 h-11 rounded-xl bg-slate-900 text-white flex items-center justify-center hover:bg-slate-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
        >
          <i className="ph-bold ph-paper-plane-right"></i>
        </button>
      </form>
    </div>
  );
}
