import React, { useEffect, useState } from "react";
import List from "./components/List";
import TodoForm from "./components/TodoForm";
import "./TList.css";
import Item from "./components/Item";
import Modal from "./components/Modal";

const ITENS_SALVOS = "itensSalvos";

function Todo() {
  const [showModal, setShowModal] = useState(false);
  const [addItemList, setAddItemList] = useState([]);

  useEffect(() => {
    let itensSalvos = JSON.parse(localStorage.getItem(ITENS_SALVOS));
    if (itensSalvos) {
      setAddItemList(itensSalvos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(ITENS_SALVOS, JSON.stringify(addItemList));
  }, [addItemList]);

  function onAddItem(text) {
    let item = new Item(text);

    setAddItemList([...addItemList, item]);
    offModal();
  }

  function itemDeleted(item) {
    let filteredItems = addItemList.filter((it) => it.id !== item.id);

    setAddItemList(filteredItems);
  }

  function itemFeito(item) {
    let updatedItems = addItemList.map((it) => {
      if (it.id === item.id) {
        it.feito = !it.feito;
      }
      return it;
    });
    setAddItemList(updatedItems);
  }
  function offModal() {
    setShowModal(false);
  }

  return (
    <>
      <div className="container">
        <header>
          <h1>Hello!</h1>
          <button
            className="addButton"
            onClick={() => {
              setShowModal(true);
            }}
          >
            +
          </button>
        </header>
        {/* <TodoForm onAddItem={onAddItem}></TodoForm> */}
        <List
          itemFeito={itemFeito}
          itemDeleted={itemDeleted}
          addItemList={addItemList}
        ></List>
        <Modal show={showModal} offModal={offModal}>
          <TodoForm onAddItem={onAddItem}></TodoForm>
        </Modal>
      </div>
    </>
  );
}

export default Todo;
