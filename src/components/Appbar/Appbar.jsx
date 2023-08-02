import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import {saveIcon, homeIcon, cartIcon, userIcon} from './assets/icons';
import { switchSelector } from '../../store/slices/appBarSlice';
import { useDispatch, useSelector } from 'react-redux';
const Appbar = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const currentPath = location.pathname;
  const appbar = useSelector((state) => state.appbar)
  
  const selected = (selec) => { dispatch(switchSelector(selec))}
  return (
    <div className="fixed bottom-0 left-0 bg-white border-t border-gray-200 h-16 w-full flex items-center z-10">
      <div className="ml-10 space-x-2 flex  justify-between  w-full">
        {/* Botón de Inicio */}
        <Link to={currentPath === "/" ? "/home" : "/"} className="flex items-center w-1/4" onClick={() => selected('home')}>
        {homeIcon(appbar.home)}
        </Link>

        {/* Botón de Guardado */}
        <Link to="/store" className="flex items-center w-1/4" onClick={() => selected('save')}>
          {saveIcon(appbar.save)}
        </Link>

        {/* Botón de Tienda */}
        <Link to="/cart" className="flex items-center w-1/4" onClick={() => selected('cart')}>
        {cartIcon(appbar.cart)}
        </Link>

        {/* Botón de Usuario */}
        <Link to="/user" className="flex items-center w-1/4" onClick={() => selected('user')}>
          {userIcon(appbar.user)}
        </Link>
      </div>
    </div>
  );
};

export default Appbar;
