import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const Onboarding = () => {
  return (
    <div>
      <SearchBar />
      <h1>Bienvenido al Onboarding</h1>
      <Link to="/home">
        <button>Ir a Home</button>
      </Link>
      <Link to="/store">
        <button>Ir a Store</button>
      </Link>
    </div>
  );
};

export default Onboarding;
