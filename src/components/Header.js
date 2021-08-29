import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <header>
		 <Link to="/">
      <div className="headerLeft">
        <img width={40} height={40} src="/img/logo.png" />
        <div className="headerInfo">
          <h3>React Sneakers</h3>
          <p>Магазин лучших кроссовок</p>
        </div>
      </div>
		 </Link>
      <ul className="headerRight">
        <li className="headerCart" onClick={props.onClickCart}>
          <img width={18} height={18} src="img/Group.svg" />
          <span>1205 руб.</span>
        </li>
        <li className="headerFavourite">
          <Link to="/favourites">
            <img width={18} height={18} src="img/heart.svg" alt="Любимые" />
          </Link>
        </li>
        <li className="headerUser">
          <img width={18} height={18} src="img/Union.svg" />
        </li>
      </ul>
    </header>
  );
};

export default Header;
