import React from "react";

const Scroll = (props) => {
  return (
    <div
      styles={{
        overflowY: "scroll",
        boder: "1px solid black",
        height: "500px",
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
