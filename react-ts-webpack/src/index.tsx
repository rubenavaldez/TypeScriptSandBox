/** @format */

import { disconnect } from "process";
import React, { Fragment, useState } from "react";
import ReactDom from "react-dom";
// set type Form eleme
//settings a type requires an existing type
type FormElem = React.FormEvent<HTMLFormElement>;

//creates a new type
interface ITodo {
  text: string;
  complete: boolean;
}

export default function App(): JSX.Element {
  const [value, setValue] = useState<string>("");
  const [todos, setTodos] = useState<ITodo[]>([]);

  const handleSubmit = (e: FormElem): void => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };
  // debugger
  const addTodo = (text: string): void => {
    const newTodos: ITodo[] = [...todos, { text, complete: false }];
    setTodos(newTodos);
  };

  const completeTodo = (index: number): void => {
    const newTodos: ITodo[] = [...todos];
    //if complete = false switch to true
    newTodos[index].complete = !newTodos[index].complete;
    setTodos(newTodos);
  };
  const removeTodo = (index: number): void => {
    const removeTodo: ITodo[] = [...todos];

    removeTodo.splice(index, 1);

    setTodos(removeTodo);
  };
  //1:17:18
  // console.log(todos)
  return (
    <Fragment>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          required
        ></input>
        <button type="submit">Add Todo</button>
      </form>
      <section>
        {todos.map((todo: ITodo, index: number): any => {
          return (
            <Fragment key={index}>
              <div
                style={{ textDecoration: todo.complete ? "line-through" : "" }}
              >
                {todo.text}
              </div>
              <button type="button" onClick={() => completeTodo(index)}>
                {todo.complete ? "Incomplete" : "Complete"}{" "}
              </button>
              <button type="button" onClick={() => removeTodo(index)}>
                Delete{" "}
              </button>
            </Fragment>
          );
        })}
      </section>
    </Fragment>
  );
}

const root = document.getElementById("app-root");

ReactDom.render(<App />, root);
