import React from "react";
import Item from "./Item";

export default function List(props) {
  console.log(props);
  return (
    <div className="list">
      {props.items.map((item) => (
        <Item title={item.title} image={item.image} stars={item.rating} onremove={props.onremove} id={item.id}/>
      ))}

    </div>
  );
}
