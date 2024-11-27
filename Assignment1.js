import React from "react";
import ReactDOM from "react-dom/client";

//ReactElement
const header = React.createElement("div", { className: "title" }, [
  React.createElement("h1", {}, "Inside h1 tag"),
  React.createElement("h2", {}, "Inside h2 tag"),
  React.createElement("h3", {}, "Inside h3 tag"),
]);

const title = "title";
//Using JSX

const ReactElement = (
  <div className="title">
    <h1>H1</h1>
    <h2>H2</h2>
    <h3>H3</h3>
  </div>
);

const Title = () => (
  <div>
    <h1 className="title">Title 😎</h1>
  </div>
);
//Using Functionalcomponent
const TitleComponent = () => (
  <div className={title}>
    {/* Component Composition */}
    <Title />
    <Title></Title>
    {Title()}
    <h1>F1</h1>
    <h2>F2</h2>
    <h3>F3</h3>
  </div>
);

const HeaderComponent = () => (
  <div className="container">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr6r4MWb1LDn4TIhIKVGsL8-12S8i69mWd8g&s" alt="logo" className="logo"/>
    <input type="text" placeholder="Search ..." className="searchBar"/>
    <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"alt="user" className="user"/>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent />);
