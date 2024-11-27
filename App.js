import React from "react";
import ReactDOM from "react-dom/client";

//ReactElement
const jsxHeading = <h1 className="heading">Namaste React from JSX 🚀</h1>;
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);

const a = 100;
//ReactComponent
const Title = () => (
  <div>
    <h1 className="title">Title 😎</h1>
  </div>
);
//Component Composition
const HeaderComponent = () => (
  <div>
    <Title />
    <Title></Title>
    {Title()}
    <h1 className="heading">Namaste React from Component 🚀</h1>
    <h3>
      {/*ReactElement inside ReactComponent */}
      {jsxHeading}
    </h3>
  </div>
);
root.render(<HeaderComponent />);
