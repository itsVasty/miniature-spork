import VideoCard from './VideoCard';

export default function VideoGrid({ videos }) {
  if (!videos || videos.length === 0) {
    return (
      <div className="no-results">
        <div className="no-results-icon">
          <svg viewBox="0 0 24 24" width="64" height="64" aria-hidden="true">
            <path fill="currentColor" d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.36 16 10c0-3.31-2.69-6-6-6S4 6.69 4 10s2.69 6 6 6c1.36 0 2.59-.59 3.73-1.71l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
          </svg>
        </div>
        <h2>No results found</h2>
        <p>Try different keywords or remove search filters.</p>
      </div>
    );
  }

  return (
    <div className="video-grid">
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
}
