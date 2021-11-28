import React from "react";
import "../TList.css";
import ListItem from "./ListItem";

function List(props) {
  return (
    <ul>
      {props.addItemList.map((item) => (
        <ListItem
          key={item.id}
          item={item}
          itemFeito={props.itemFeito}
          itemDeleted={props.itemDeleted}
        ></ListItem>
      ))}
    </ul>
  );
}

export default List;
