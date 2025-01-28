import Image from "next/image";
import React from "react";
import "../styles/home.css";

const HomePage = () => {
  return (
    <div className="w-full overflow-hidden relative">
      <div className='home'>
        <div className="leftPanel">
          <h1 className="title">Are you starving?</h1>
        </div>
        <div className="rightPanel">
        <Image
            src="/images/food.jpg"
            className="fooder"
            alt="fooder"
            width={100}
            height={100}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
