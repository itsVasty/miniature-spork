export default function CategoryChips({ categories, active, onSelect }) {
  return (
    <div className="chips-row">
      {categories.map((cat) => (
        <button
          key={cat}
          className={`chip ${active === cat ? 'active' : ''}`}
          onClick={() => onSelect(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
