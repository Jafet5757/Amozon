import React from "react";

export default function Search(props) {

  const searching = (e) => {
    const query = e.target.value.toString().toLowerCase();
    props.onsearch(query);
  }

  return (
    <div>
      <input type="text" onChange={searching}/>
    </div>
  );
}
