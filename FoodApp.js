import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => (
  <div className="header">
    <div className="logo">
      <img
        className="img-logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbUoW4aFJx8vSEPQ1m_ZXWTUYMmkadmI-qIQ&s"
        alt=""
      />
      <label className="title">MunchMate</label>
    </div>
    <div className="nav-items">
      <ul className="list">
        <li>Home</li>
        <li>About Us</li>
        <li>Offers</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
);
const RestaurantCard = (props) => {
    const {restaurantName, rating, deliveryIn, locality,food_img} = props;
    return(
    <div className="card">
        <div>
            <img className="card-img" src={food_img} alt="chickenTikka"/>
        </div>
        <div className="card-context">
            <h3>{restaurantName}</h3>
            <p>⭐{rating} • {deliveryIn} mins</p>
            <p>North Indian, Biryani, Tandoor</p>
            <p>{locality}</p>
        </div>
    </div>
    )
}

const Body = () => (
  <div className="body">
    <div className="search">
      <input type="text" placeholder="Search for food..." className="search-bar"/>
      <svg className="search-icon"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
      <button type="button" className="search-btn">Search</button>
    </div>
    <div className="restaurant-card">
    <RestaurantCard restaurantName="Adil Hotel"  rating="4.2" deliveryIn="20-25"  locality="Madhapur" food_img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/hpirtpy349a0zu7miw3p"/>
    <RestaurantCard restaurantName="Hotel Sai Nath" rating="4.3" deliveryIn="20-35" locality="Gachibowli" food_img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/o2b3arwx1ff04hsqify6"/>
    <RestaurantCard restaurantName="Sai Restaurant" rating="4.4" deliveryIn="30-35" locality="Kavuri Hills" food_img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/10/23/f849cb53-4caf-48a3-809c-b75d95681864_adc0bd0c-7a6d-47ed-a6ac-b9ce10e58952.JPG"/>
    <RestaurantCard restaurantName="KFC" rating="4.5" deliveryIn="30-40" locality="High-tech City" food_img="https://images.ctfassets.net/wtodlh47qxpt/2MisPscDV1k33qLnGwQ2il/14bdab6e4b9e25e1b91a8578df5097f2/CAT86"/>
    <RestaurantCard restaurantName="Bakelore" rating="4.6" deliveryIn="40-50" locality="Ameerpet" food_img="https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/6f709800bfe3098a6f51a2a59d17ea7a"/>
    <RestaurantCard restaurantName="Dominos" rating="4.7" deliveryIn="50-55" locality="Near Charminar" food_img="https://i.guim.co.uk/img/media/e1ab3d568b41352532192d240967e904720e4b28/0_151_6720_4032/master/6720.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=8b433e25a502dcbc305f7446312f3d33"/>
    <RestaurantCard restaurantName="Pizza Hut" rating="4.8" deliveryIn="40-45" locality="Jubliee Hills" food_img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT4w00b8dqCgb1YObVNmOnxk9jkreRWMV_tw&s"/>
    <RestaurantCard restaurantName="Bakery World" rating="3.9" deliveryIn="20" locality="Kondapur" food_img="https://fruitbasket.limepack.com/blog/wp-content/uploads/2024/06/assorted-pastries-arranged-in-dispaly.jpg"/>
    <RestaurantCard restaurantName="The Belgian Waffle Co." rating="3.8" deliveryIn="25-30" locality="KPHB" food_img="https://b.zmtcdn.com/data/pictures/chains/0/18621510/561b747d49821269819a3eaf8f118861.jpg?fit=around|960:500&crop=960:500;*,*"/>
    <RestaurantCard restaurantName="Burger King" rating="4.0" deliveryIn="35-40" locality="SR Nagar" food_img="https://www.livelaw.in/h-upload/2024/08/19/556384-burger-king.webp"/>
    </div>
  </div>
);
const App = () => (
  <>
    <Header />
    <Body />
  </>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
