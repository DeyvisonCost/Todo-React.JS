import React from "react";
import "../TList.css";
import Card from "./Card";

function FeitoImg(props) {
  if (props.feito) {
    return <img alt="feito" src="./assets/sign.png"></img>;
  } else {
    return <img alt="não feito" src="./assets/tick.png"></img>;
  }
}

function ListItem(props) {
  return (
    <li>
      <Card className={props.item.feito ? "feito item" : "item"}>
        {props.item.text}
        <div>
          <button
            onClick={() => {
              props.itemFeito(props.item);
            }}
          >
            <FeitoImg feito={props.item.feito}></FeitoImg>
          </button>
          <button
            onClick={() => {
              props.itemDeleted(props.item);
            }}
          >
            <img alt="delete" src="./assets/cancel.png"></img>
          </button>
        </div>
      </Card>
    </li>
  );
}

export default ListItem;
