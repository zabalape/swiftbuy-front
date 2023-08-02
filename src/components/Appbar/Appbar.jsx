

import "./style.css";

const Appbar = () => {
  return (
    <div className="frame-wrapper">
      <div className="div">
        <div className="frame-2">
          <div className="icon-instance-node" />
          <div className="home">Home</div>
        </div>
        <div className="frame-2">
          <img className="icon-instance-node" alt="Activity heart" src="activity-heart.svg" />
          <div className="text-wrapper">Saved</div>
        </div>
        <div className="frame-2">
          <div className="icon-instance-node" opacity="0.6" />
          <div className="text-wrapper">Cart</div>
        </div>
     
      </div>
    </div>
  );
};

export default Appbar;