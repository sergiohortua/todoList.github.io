import React from "react";
import { TodoCounter } from "../components/TodoCounter";
import { TodoSearch } from "../components/TodoSearch";
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";
import { CreateTodoButton } from "../components/CreateTodoButton";
import { TodoContext } from "../TodoContext";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import "../styles/Root.css";

const AppUI = (props) => {
  const { error, loading, searchedTodos, completeTodo, deleteTodo, openModal } =
    React.useContext(TodoContext);
  return (
    <React.Fragment>
      <div className="root">
        <TodoCounter />
        <TodoSearch />
        <TodoList>
          {error && <p>ERROR</p>}
          {loading && <p>Cargando...</p>}
          {!loading && !searchedTodos.length && <p>Crea tu primer TODO</p>}

          {searchedTodos.map((item) => (
            <TodoItem
              key={item.text}
              {...item}
              onComplete={() => completeTodo(item.text)}
              onDelete={() => deleteTodo(item.text)}
            />
          ))}
        </TodoList>
        {openModal && <Modal><TodoForm/></Modal>}
        <CreateTodoButton />
      </div>
    </React.Fragment>
  );
};
export { AppUI };
