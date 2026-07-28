import { useState, useEffect, useMemo } from 'react';
import TopBar from './components/TopBar';
import Sidebar from './components/Sidebar';
import VideoGrid from './components/VideoGrid';
import CategoryChips from './components/CategoryChips';
import { videos, categories } from './data/videos';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('yt-dark');
    if (saved !== null) return saved === 'true';
    return true;
  });
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    localStorage.setItem('yt-dark', String(darkMode));
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const handleMenuClick = () => {
    if (window.innerWidth <= 1024) {
      setMobileSidebarOpen((v) => !v);
    } else {
      setSidebarCollapsed((v) => !v);
    }
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredVideos = useMemo(() => {
    let result = videos;
    if (activeCategory !== 'All') {
      result = result.filter((v) => v.category === activeCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (v) =>
          v.title.toLowerCase().includes(q) ||
          v.channel.toLowerCase().includes(q)
      );
    }
    return result;
  }, [activeCategory, searchQuery]);

  return (
    <div className="app">
      <TopBar
        onMenuClick={handleMenuClick}
        onSearch={handleSearch}
        darkMode={darkMode}
        onToggleDark={() => setDarkMode((v) => !v)}
      />
      <div className="app-body">
        <Sidebar
          collapsed={sidebarCollapsed}
          mobileOpen={mobileSidebarOpen}
          onClose={() => setMobileSidebarOpen(false)}
        />
        <main className="content">
          <CategoryChips
            categories={categories}
            active={activeCategory}
            onSelect={setActiveCategory}
          />
          <VideoGrid videos={filteredVideos} />
        </main>
      </div>
    </div>
  );
}

export default App;
