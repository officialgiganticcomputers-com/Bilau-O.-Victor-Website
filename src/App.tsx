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
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="voices" element={<VoicesPage />} />
          <Route path="music" element={<MusicPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </Router>
  );
}
