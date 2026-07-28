import { useState } from 'react';

function Icon({ name, className = '' }) {
  const paths = {
    menu: 'M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z',
    search: 'M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.36 16 10c0-3.31-2.69-6-6-6S4 6.69 4 10s2.69 6 6 6c1.36 0 2.59-.59 3.73-1.71l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z',
    mic: 'M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5-3c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-2.08c3.39-.49 6-3.39 6-6.92h-2z',
    video: 'M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z',
    bell: 'M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5S10.5 3.17 10.5 4v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z',
    upload: 'M14 13v8h-2v-8H4l8-8 8 8h-6z',
    moon: 'M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z',
    sun: 'M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zM11 20v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zM19.42 18.01c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41l-1.06-1.06c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l1.06 1.06zM18.36 7.05c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06zM4.58 18.36l1.06-1.06c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0z',
  };
  return (
    <svg viewBox="0 0 24 24" className={`yt-icon ${className}`} aria-hidden="true">
      <path d={paths[name]} />
    </svg>
  );
}

export default function TopBar({ onMenuClick, onSearch, darkMode, onToggleDark }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <header className="topbar">
      <div className="topbar-left">
        <button className="icon-btn" onClick={onMenuClick} aria-label="Menu">
          <Icon name="menu" />
        </button>
        <div className="logo">
          <svg viewBox="0 0 28 20" className="logo-icon" aria-hidden="true">
            <path d="M27.4 3.1c-.3-1.2-1.3-2.2-2.5-2.5C22.7 0 14 0 14 0S5.3 0 3.1.6C1.9.9.9 1.9.6 3.1 0 5.3 0 10 0 10s0 4.7.6 6.9c.3 1.2 1.3 2.2 2.5 2.5C5.3 20 14 20 14 20s8.7 0 10.9-.6c1.2-.3 2.2-1.3 2.5-2.5C28 14.7 28 10 28 10s0-4.7-.6-6.9z" fill="#FF0000" />
            <path d="M11.2 14.3 18.5 10l-7.3-4.3v8.6z" fill="#fff" />
          </svg>
          <span className="logo-text">FakeTube<sub className="logo-country">ZA</sub></span>
        </div>
      </div>

      <div className="topbar-center">
        <form className="search-box" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search"
          />
          <button type="submit" className="search-btn" aria-label="Search">
            <Icon name="search" />
          </button>
        </form>
        <button className="icon-btn mic-btn" aria-label="Voice search">
          <Icon name="mic" />
        </button>
      </div>

      <div className="topbar-right">
        <button className="icon-btn hide-mobile" aria-label="Create">
          <Icon name="video" />
        </button>
        <button className="icon-btn hide-mobile" aria-label="Notifications">
          <Icon name="bell" />
        </button>
        <button className="icon-btn" onClick={onToggleDark} aria-label="Toggle dark mode">
          <Icon name={darkMode ? 'sun' : 'moon'} />
        </button>
        <div className="avatar" aria-label="Account">U</div>
      </div>
    </header>
  );
}
