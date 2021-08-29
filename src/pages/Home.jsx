import React from "react";
import Card from "../components/Card";

const Home = ({
  searchValue,
  onSearch,
  setSearchValue,
  items,
  onAddToFavourite,
  onAddToCart,
}) => {
  return (
    <div className="content">
      <div className="contentHeader">
        <h1 className="contentTitle">
          {searchValue ? `Поиск по запросу "${searchValue}"` : "Все кроссовки"}
        </h1>
        <div className="searchBlock">
          <img src="/img/input.png" alt="Search" />
          <input
            onChange={onSearch}
            value={searchValue}
            type="text"
            placeholder="Поиск..."
          />
          {searchValue && (
            <img
              className="remove-search"
              onClick={() => setSearchValue("")}
              src="/img/btn-remove.svg"
              alt="Close"
            />
          )}
        </div>
      </div>
      <div className="sneakers">
        {items
          .filter((item) =>
            item.title.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((item, index) => (
            <Card
              key={index}
              onClickFavourite={(obj) => onAddToFavourite(obj)}
              onPlus={(obj) => onAddToCart(obj)}
				{...item}
            />
          ))}
      </div>
    </div>
  );
};
export default Home;
