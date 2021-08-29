import React from "react";
import Card from "../components/Card"

const Favourites = ({
  items, onAddToFavourite
}) => {
  return (
    <div className="content">
      <div className="contentHeader">
        <h1 className="contentTitle">
         Тут закладки
        </h1>
       
      </div>
      <div className="sneakers">
		{items.map((item, index) => (
            <Card
				key={index}
				  favourited = {true}
				  onClickFavourite ={onAddToFavourite}
				  {...item}
            />
          ))}
      </div>
    </div>
  );
};
export default Favourites;
