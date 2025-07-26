type FilterBarProps = {
  filters: string[];
  selected: string[];
  onToggle: (tag: string) => void;
  label: string;
  className?: string;
  activeClass?: string;
};

const FilterBar = ({ filters, selected, onToggle, label, className = "", activeClass = "active" }: FilterBarProps) => {
  return (

      <div className={`filter-container ${className}`}>
        <h3 className="filter-label">{label}</h3>
        <div className="filter-buttons">
          <button
            onClick={() => onToggle("ALLE")}
            className={`filter-button ${selected.includes("ALLE") ? activeClass : ""}`}
          >
            ALLE
          </button>
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => onToggle(filter)}
              className={`filter-button ${selected.includes(filter) ? activeClass : ""}`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

  );
};

export default FilterBar;