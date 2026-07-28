function Icon({ name, className = '' }) {
  const paths = {
    home: 'M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0L5.97 11.13c-.35.3-.13.87.33.87H8v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z',
    shorts: 'M10 9.197V14.803L15.5 12 10 9.197M17.77 8.283C17.27 6.918 16.082 5.73 14.717 5.23C13.717 4.917 12.835 4.895 12 5.145C11.165 4.895 10.283 4.917 9.283 5.23C7.918 5.73 6.73 6.918 6.23 8.283C5.917 9.283 5.895 10.165 6.145 11C5.895 11.835 5.917 12.717 6.23 13.717C6.73 15.082 7.918 16.27 9.283 16.77C10.283 17.083 11.165 17.105 12 16.855C12.835 17.105 13.717 17.083 14.717 16.77C16.082 16.27 17.27 15.082 17.77 13.717C18.083 12.717 18.105 11.835 17.855 11C18.105 10.165 18.083 9.283 17.77 8.283Z',
    subs: 'M20 8H4V6h16v2zm-2-6H6v2h12V2zm4 10v8c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2v-8c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2zm-6 4l-6-3.27v6.53L16 16z',
    library: 'M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 10l-5 3V11l5 3z',
    history: 'M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z',
    liked: 'M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.97 7 8.48 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z',
    clock: 'M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z',
    settings: 'M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z',
    flag: 'M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z',
    help: 'M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z',
    feedback: 'M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z',
  };
  return (
    <svg viewBox="0 0 24 24" className={`yt-icon ${className}`} aria-hidden="true">
      <path d={paths[name]} />
    </svg>
  );
}

const mainItems = [
  { icon: 'home', label: 'Home' },
  { icon: 'shorts', label: 'Shorts' },
  { icon: 'subs', label: 'Subscriptions' },
];

const libraryItems = [
  { icon: 'library', label: 'Library' },
  { icon: 'history', label: 'History' },
  { icon: 'liked', label: 'Liked videos' },
  { icon: 'clock', label: 'Watch later' },
];

const subChannels = [
  { name: 'Lo-fi Beats', avatar: 'https://i.pravatar.cc/100?img=1' },
  { name: 'Tech Insights', avatar: 'https://i.pravatar.cc/100?img=33' },
  { name: 'Wanderlust Travel', avatar: 'https://i.pravatar.cc/100?img=5' },
  { name: "Chef's Table", avatar: 'https://i.pravatar.cc/100?img=7' },
  { name: 'GameSphere', avatar: 'https://i.pravatar.cc/100?img=15' },
  { name: 'CodeCraft', avatar: 'https://i.pravatar.cc/100?img=30' },
];

const exploreItems = [
  { icon: 'flag', label: 'Report history' },
  { icon: 'help', label: 'Help' },
  { icon: 'feedback', label: 'Send feedback' },
];

export default function Sidebar({ collapsed, mobileOpen, onClose }) {
  return (
    <>
      {mobileOpen && <div className="sidebar-overlay" onClick={onClose} />}
      <aside className={`sidebar ${collapsed ? 'collapsed' : ''} ${mobileOpen ? 'mobile-open' : ''}`}>
        <nav className="sidebar-section">
          {mainItems.map((item) => (
            <a key={item.label} href="#" className="sidebar-item" title={item.label}>
              <Icon name={item.icon} />
              <span className="sidebar-label">{item.label}</span>
            </a>
          ))}
        </nav>

        <hr className="sidebar-divider" />

        <div className="sidebar-section">
          <div className="sidebar-heading">You</div>
          {libraryItems.map((item) => (
            <a key={item.label} href="#" className="sidebar-item" title={item.label}>
              <Icon name={item.icon} />
              <span className="sidebar-label">{item.label}</span>
            </a>
          ))}
        </div>

        <hr className="sidebar-divider" />

        <div className="sidebar-section">
          <div className="sidebar-heading">Subscriptions</div>
          {subChannels.map((ch) => (
            <a key={ch.name} href="#" className="sidebar-item" title={ch.name}>
              <img src={ch.avatar} alt="" className="sidebar-avatar" />
              <span className="sidebar-label">{ch.name}</span>
            </a>
          ))}
        </div>

        <hr className="sidebar-divider" />

        <div className="sidebar-section">
          {exploreItems.map((item) => (
            <a key={item.label} href="#" className="sidebar-item" title={item.label}>
              <Icon name={item.icon} />
              <span className="sidebar-label">{item.label}</span>
            </a>
          ))}
        </div>

        <div className="sidebar-footer">
          <p>© 2024 FakeTube Inc.</p>
          <p>This is a student project clone.</p>
        </div>
      </aside>
    </>
  );
}
