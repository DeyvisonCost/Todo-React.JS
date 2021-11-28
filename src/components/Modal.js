import React from "react";
import Card from "./Card";

function Modal(props) {
  function inativeModal(e) {
    let target = e.target;
    if (target.id === "modal") {
      props.offModal();
    }
  }

  return (
    <div
      id="modal"
      onClick={inativeModal}
      className={props.show ? "modal" : "modal hideModal"}
    >
      <Card className="cardModal">{props.children}</Card>
    </div>
  );
}

export default Modal;
