import React from "react";
import styles from "./Card.module.scss";

const Card = ({id, onClickFavourite, imageUrl, title, price, onPlus, favourited}) => {
  const [isAdded, setAdded] = React.useState(true);
  const [isFavourite, setIsFavourite] = React.useState(!favourited);
  const onClickPlus = () => {
    onPlus({ imageUrl, title, price });
    setAdded(!isAdded);
  };

  const onFavourite = () => {
	  onClickFavourite({id, imageUrl, title, price });
	  setIsFavourite(!isFavourite)
  }

  

  return (
    <div className={styles.card}>
      <div onClick={onClickFavourite} className={styles.favourite}>
        <img onClick={onFavourite} src={isFavourite ? "img/liked.svg" : "img/heart-unliked.svg"}  alt="Unliked"/>
      </div>
      <img width={132} height={112} src={imageUrl} alt="Sneakers" />
      <h5>{title}</h5>
      <div className={styles.cardBottom}>
        <div className={styles.cardPrice}>
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>
        <img
          className={styles.plus}
          onClick={onClickPlus}
          src={isAdded ? "img/plus.svg" : "img/check.svg"}
          alt="Plus"
        />
      </div>
    </div>
  );
};

export default Card;
