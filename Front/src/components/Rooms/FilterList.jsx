export default function FilterList({ onFilterChange }) { 
  const filtros = ['Tipo', 'Descripcion', 'Comodidades', 'Rating'];

  const handleFilterChange = (filter) => {
    onFilterChange(filter);
  };

  return (
    <div className="flex flex-wrap">
      {filtros.map((filter) => (
        <label key={filter} className="mr-4 mb-2 flex items-center">
          <input
            type="radio"
            value={filter}
            onChange={() => handleFilterChange(filter)}
            className="mr-1"
          />
          {filter}
        </label>
      ))}
    </div>
  );
}
