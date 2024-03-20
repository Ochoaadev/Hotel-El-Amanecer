import { useState } from 'react';
import { RiSearchLine } from "react-icons/ri";
import { BsSliders } from "react-icons/bs"
import FilterList from './FilterList';
import debounce from '../../hooks/debounce';

const Search = ({ setSearchValue, onFilterChange }) => {
  const [mostrarFiltros, setMostrarFiltros] = useState(false);

  // Función para manejar los cambios en el input con debounce
  const handleSearchChange = debounce((value) => {
    setSearchValue(value);
    console.log(value);
  }, 500);

  const handleChangeInput = (e) => {
    const inputValue = e.target.value;

    handleSearchChange(inputValue);
  }

  return (
    <div className="flex items-center justify-center flex-col px-9 gap-4 my-4 w-full">
      <h2 className="font-bold text-2xl">Buscar</h2>
      <div className="flex max-w-screen-sm xl:max-w-screen-lg w-[80vw]">
        <div className="flex py-2 px-4 items-center border w-19/20 border-gray-300 rounded-2xl shadow-lg">
          <input
            type="text"
            className="border border-transparent w-full outline-none focus:ring-0"
            onChange={handleChangeInput}
          />
          <RiSearchLine />
        </div>
        <button onClick={() => setMostrarFiltros(!mostrarFiltros)} className="p-4 border-gray-300 rounded-2xl">
          <BsSliders />
        </button>
      </div>
      <div className={`${mostrarFiltros ? 'block' : 'hidden'} `}>
        <FilterList
          onFilterChange={onFilterChange}
        />
      </div>
    </div>
  );
}

export default Search;
