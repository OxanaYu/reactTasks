import React, { useState } from "react";

const Text = () => {
  const [mytext, setMytext] = useState("hi");

  const changeInput = (e) => {
    setMytext(e.target.value);
  };
  return (
    <div>
      <p>Здесь будет изменяться текст: {mytext}</p>
      <input
        className="inputwithValue"
        value={mytext}
        type="text"
        onInput={changeInput}
      />
    </div>
  );
};

export default Text;
