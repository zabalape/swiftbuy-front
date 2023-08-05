const SearchBar = () => {
    return (
      <div className="w-72 h-14 pl-4 pr-36 py-3.5 bg-zinc-100 rounded-lg relative">
        <div className="w-6 h-6 absolute top-1/2 transform -translate-y-1/2 left-4">
          {/* Aquí puedes poner tu icono de búsqueda si lo deseas */}
        </div>
        <input
          onChange={console.log('change')}
          type="text"
          className="text-black text-opacity-60 text-base font-normal outline-none border-none w-full h-full pl-10 bg-transparent"
          placeholder="Search anything"
        />
        
      </div>
    );
  };
  
  export default SearchBar;
  