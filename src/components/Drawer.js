import React from "react";

const Drawer = ({ onClose, items = [], onCloseCartItem, onRemove }) => {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="drawer__title">
          Корзина
          <img
            className="remove-btn"
            onClick={onClose}
            src="/img/btn-remove.svg"
            alt="Close"
          />
        </h2>
        <div className="items">
		  {items.map((obj) => (
            <div className="drawer__cart-item">
              <img width={80} height={70} src={obj.imageUrl} alt="Sneakers" />
              <div>
                <p>{obj.title}</p>
                <b>{obj.price}</b>
              </div>
              <img
                className="remove-btn"
                onClick={() => onRemove(obj.id)}
                src="/img/btn-remove.svg"
                alt="Remove"
              />
            </div>
          ))}
          {items.length > 0 ? (
            <div className="cartTotalBlock">
              <ul>
                <li>
                  <span>Итого:</span>
                  <div></div>
                  <b>21 498 руб.</b>
                </li>
                <li>
                  <span>Налог 5%:</span>
                  <div></div>
                  <b>1074 руб.</b>
                </li>
              </ul>
              <button className="greenBtn">
                Оформить заказ <img src="/img/arrow.svg" alt="ArrowBtn" />
              </button>
            </div>
				
          ) : (
            <div className="drawer__empty">
              <img src="./img/box.png" alt="" />
              <h4 className="drawer_empty-title">Корзина пустая</h4>
              <p className="drawer__empty-text">
                Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
              </p>
              <button onClick={onClose} className="greenBtn">
                <img  src="./img/arrow-left.svg" alt="Back" /> Вернуться назад
              </button>
            </div>
          )}

          
        </div>
      </div>
    </div>
  );
};

export default Drawer;
