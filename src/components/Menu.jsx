import { Link } from "react-router-dom";
import close from "../assets/close.png";
import { useState } from "react";

const Menu = () => {
  const [menuVisible, setMenuVisible] = useState(true);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };
  return (
    <div className="w-[349px] h-[797px] relative">
      {menuVisible && (
        <div>
          <div className="w-[349px] h-[797px] left-0 top-0 absolute bg-zinc-100" />
          <img
            className="w-[23px] h-[23px] left-[19px] top-[25px] absolute cursor-pointer"
            src={close}
            alt="Cerrar menú"
            onClick={() => {
              toggleMenu;
            }}
          />
          <div className="w-[23px] h-[23px] left-[19px] top-[25px] absolute" />
          <div className="w-[130px] h-[168px] left-[42px] top-[82px] absolute">
            <div className="left-0 top-[47px] absolute text-black text-xl font-medium">
              <Link to="/Store">PRODUCTS</Link>
            </div>
            <div className="left-0 top-[141px] absolute text-black text-xl font-medium">
              <Link to="/About">ABOUT US</Link>
            </div>
            <div className="left-0 top-[94px] absolute text-black text-xl font-medium">
              <Link to="/Contact">CONTACT US</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
