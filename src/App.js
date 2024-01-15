import React from "react";
import Text from "./components/Text";
import Boxes from "./components/Boxes";
import Card from "./components/Card";
import Avatar from "./components/Avatar";
import Counter from "./components/Counter";

const App = () => {
  let stylesArr = [
    { width: "300px", height: "150px", backgroundColor: "red" },
    { width: "350px", height: "200px", backgroundColor: "green" },
    { width: "320px", height: "180px", backgroundColor: "blue" },
  ];
  return (
    <div>
      <Text />
      {stylesArr.map((elem, index) => {
        return (
          <Boxes
            key={"width-" + index}
            width={elem.width}
            height={elem.height}
            color={elem.backgroundColor}
          />
        );
      })}
      <Card>
        <Avatar />
      </Card>
      <Counter />
    </div>
  );
};

export default App;
