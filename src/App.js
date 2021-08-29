import React from "react";
import {Route} from 'react-router-dom';
import axios from "axios";
import Card from "./components/Card/";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Home from "./pages/Home"
import Favourites from "./pages/Favourites";

const App = () => {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favourites, setFavourites] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");

  React.useEffect(() => {
    axios
      .get("https://60f309ee6d44f3001778888d.mockapi.io/items")
      .then((res) => {
        setItems(res.data);
      });
    axios
      .get("https://60f309ee6d44f3001778888d.mockapi.io/cart")
      .then((res) => {
        setCartItems(res.data);
      });
		axios
      .get("https://60f309ee6d44f3001778888d.mockapi.io/favourites")
      .then((res) => {
			setFavourites(res.data);
      });
  }, []);

  const onAddToFavourite = async (obj) => {
	 try {
		if(favourites.find((favObj) => favObj.id === obj.id)) {
			axios.delete(`https://60f309ee6d44f3001778888d.mockapi.io/favourites/${obj.id}`);
		} else {
			const {data}= await axios.post("https://60f309ee6d44f3001778888d.mockapi.io/favourites", obj);
			setFavourites((prev) => [...prev, data]);
		}
	 } catch (error) {
		 alert('Не удалось добавить в фавориты')
	 }
  }
  
  const onAddToCart = (obj) => {
    axios.post("https://60f309ee6d44f3001778888d.mockapi.io/cart", obj);
    setCartItems((prev) => [...prev, obj]);
  };
  const onRemoveItem = (id) => {
    axios.delete(`https://60f309ee6d44f3001778888d.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onSearch = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="wrapper">
      {cartOpened && (
        <Drawer
          items={cartItems}
          onClose={() => setCartOpened(false)}
          onRemove={onRemoveItem}
        />
      )}
      <Header onClickCart={() => setCartOpened(true)} />
		<Route path="/" exact> 
		<Home searchValue={searchValue}
		onSearch={onSearch}
		setSearchValue={setSearchValue}
		items={items}
		onAddToFavourite={onAddToFavourite}
		onAddToCart={onAddToCart}/>
		</Route>

		<Route path="/favourites" exact> 
		<Favourites items={favourites} onAddToFavourite={onAddToFavourite}/>
		</Route>
      
    </div>
  );
};

export default App;
