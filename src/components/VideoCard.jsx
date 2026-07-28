import { useState, useRef } from 'react';

function Icon({ name }) {
  const paths = {
    dots: 'M12 16.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zm0-2.25c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm0-5.25c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z',
  };
  return (
    <svg viewBox="0 0 24 24" className="yt-icon" aria-hidden="true">
      <path d={paths[name]} />
    </svg>
  );
}

export default function VideoCard({ video }) {
  const [hovering, setHovering] = useState(false);
  const [previewProgress, setPreviewProgress] = useState(0);
  const hoverTimer = useRef(null);
  const animFrame = useRef(null);
  const startTime = useRef(0);

  const startPreview = () => {
    hoverTimer.current = setTimeout(() => {
      setHovering(true);
      startTime.current = performance.now();
      const animate = (now) => {
        const elapsed = (now - startTime.current) % 4000;
        setPreviewProgress(elapsed / 4000);
        animFrame.current = requestAnimationFrame(animate);
      };
      animFrame.current = requestAnimationFrame(animate);
    }, 600);
  };

  const stopPreview = () => {
    clearTimeout(hoverTimer.current);
    if (animFrame.current) cancelAnimationFrame(animFrame.current);
    setHovering(false);
    setPreviewProgress(0);
  };

  return (
    <div
      className="video-card"
      onMouseEnter={startPreview}
      onMouseLeave={stopPreview}
    >
      <div className="video-thumb-wrap">
        <img
          src={video.thumbnail}
          alt={video.title}
          className={`video-thumb ${hovering ? 'previewing' : ''}`}
          loading="lazy"
        />
        {hovering && (
          <div className="video-preview-overlay">
            <div
              className="preview-zoom"
              style={{ transform: `scale(${1.08 + previewProgress * 0.12}) translateX(${(previewProgress - 0.5) * 8}px)` }}
            >
              <img src={video.thumbnail} alt="" />
            </div>
            <div className="preview-scanline" style={{ left: `${previewProgress * 100}%` }} />
            <div className="preview-progress-bar">
              <div className="preview-progress-fill" style={{ width: `${previewProgress * 100}%` }} />
            </div>
            <div className="preview-badge">Keep hovering to preview</div>
          </div>
        )}
        <span className="video-duration">{video.duration}</span>
      </div>

      <div className="video-info">
        <img src={video.channelAvatar} alt="" className="channel-avatar" />
        <div className="video-meta">
          <h3 className="video-title">{video.title}</h3>
          <p className="video-channel">{video.channel}</p>
          <p className="video-stats">{video.views} • {video.uploaded}</p>
        </div>
        <button className="video-dots" aria-label="More options">
          <Icon name="dots" />
        </button>
      </div>
    </div>
  );
}
