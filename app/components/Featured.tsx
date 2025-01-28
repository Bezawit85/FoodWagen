"use client";
import Image from "next/image";
import "../styles/featured.css";

const Featured = () => {
  return (
    <div className="products" id="products">
      <div className="products_title">
        <p className="mainTopic">Featured Products</p>
      </div>
      <div className="product_detail" id="section1">
        <div className="product_item">
          <Image
            src="/images/food.jpg"
            alt="food_logo"
            className="food_logo"
            height={420}
            width={130}
          />
        </div>
        <div className="product_item">
          <Image
            src="/images/food.jpg"
            alt="food_logo"
            className="food_logo"
            height={420}
            width={130}
          />
        </div>
        <div className="product_item">
          <Image
            src="/images/food.jpg"
            alt="food_logo"
            className="food_logo"
            height={420}
            width={130}
          />
        </div>
      </div>
    </div>
  );
};

export default Featured;
