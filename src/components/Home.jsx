import Navbar from "./NavBar";
import SearchBar from "./SearchBar/Searchbar";

const Home = () => {
  return (
    <div className="flex flex-col">
    <Navbar className="w-6 h-6 relative flex-col justify-start items-start flex z-50" />
    <SearchBar className="mt-6" />
  </div>
  );
};

export default Home;
