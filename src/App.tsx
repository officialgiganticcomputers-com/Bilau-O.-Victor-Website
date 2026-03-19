import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import ICTExpertisePage from './pages/ICTExpertisePage';
import MediaSystemsPage from './pages/MediaSystemsPage';
import GalleryPage from './pages/GalleryPage';
import VoicesPage from './pages/VoicesPage';
import MusicPage from './pages/MusicPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import BlogPostVMix from './pages/BlogPostVMix';
import BlogPostFutureMinistry from './pages/BlogPostFutureMinistry';
import BlogPostFaithInnovation from './pages/BlogPostFaithInnovation';
import BlogPostDigitalStrategy from './pages/BlogPostDigitalStrategy';
import BlogPostCultureExcellence from './pages/BlogPostCultureExcellence';
import BlogPostMediaInfrastructure from './pages/BlogPostMediaInfrastructure';
import BlogPostMobileStreaming from './pages/BlogPostMobileStreaming';
import BlogPostAcousticSpaces from './pages/BlogPostAcousticSpaces';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="ict-expertise" element={<ICTExpertisePage />} />
          <Route path="media-systems" element={<MediaSystemsPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="blog/mastering-vmix-live-production" element={<BlogPostVMix />} />
          <Route path="blog/the-future-of-digital-ministry-in-africa" element={<BlogPostFutureMinistry />} />
          <Route path="blog/the-intersection-of-faith-and-innovation" element={<BlogPostFaithInnovation />} />
          <Route path="blog/why-every-leader-needs-a-digital-strategy" element={<BlogPostDigitalStrategy />} />
          <Route path="blog/cultivating-a-culture-of-excellence-in-your-media-team" element={<BlogPostCultureExcellence />} />
          <Route path="blog/building-resilient-media-infrastructure-mega-churches" element={<BlogPostMediaInfrastructure />} />
          <Route path="blog/essential-gear-for-mobile-live-streaming" element={<BlogPostMobileStreaming />} />
          <Route path="blog/designing-acoustic-spaces-for-modern-worship" element={<BlogPostAcousticSpaces />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="voices" element={<VoicesPage />} />
          <Route path="music" element={<MusicPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </Router>
  );
}
