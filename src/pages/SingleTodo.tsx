import { Todo } from "./Style";
import { ImCross } from "react-icons/im";
import { FaEdit } from "react-icons/fa";
import { useState,useEffect } from "react";
import {useRef} from 'react'

type SingleTodoType = {
  todo: Todo;
  todos: Array<Todo>;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo = ({ setTodos, todo, todos }: SingleTodoType) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState(todo.todo);
  const [done, setDone] = useState(true);
  // todo delete functions here
  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  // todo edit function here
  const handleEdit = (id: number) => {
    if (!edit && !todo.isComplete) {
      setEdit(!edit);
    }
  };
  // handle update function here
  const handleUpdate = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    todo.todo = editTodo;
    setEdit(!edit);
  };
  const inputRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    inputRef.current?.focus()
  },[edit])
  return (
    <div className="flex justify-center items-center">
      <form className="w-10/12" action="" onSubmit={(e) => handleUpdate(e)}>
        <div
          id="alert-border-4"
          className="flex p-4 mb-4 justify-between bg-yellow-100 border-t-4 border-yellow-500 dark:bg-yellow-200"
          role="alert"
        >
          <svg
            className="flex-shrink-0 w-5 h-5 text-yellow-700"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clipRule="evenodd"
            ></path>
          </svg>
          {edit ? (
            <input
              ref={inputRef}
              className="bg-white border-none text-black"
              type="text"
              value={editTodo}
              onChange={(e) => setEditTodo(e.target.value)}
            />
          ) : (
            <div className="ml-3 text-sm font-medium text-yellow-700">
              {todo.todo}
            </div>
          )}
          <div className="space-x-5">
            <button
              onClick={() => handleEdit(todo.id)}
              type="button"
              className="ml-auto -mx-1.5 -my-1.5 bg-yellow-100 dark:bg-yellow-200 text-gray-500 rounded-lg focus:ring-2 focus:ring-yellow-400 p-1.5 hover:bg-yellow-200 dark:hover:bg-yellow-300 inline-flex h-8 w-8"
              data-dismiss-target="#alert-border-4"
              aria-label="Close"
            >
              <FaEdit />
            </button>
            <button
              onClick={() => handleDelete(todo.id)}
              type="button"
              className="ml-auto -mx-1.5 -my-1.5 bg-yellow-100 dark:bg-yellow-200 text-gray-500 rounded-lg focus:ring-2 focus:ring-yellow-400 p-1.5 hover:bg-yellow-200 dark:hover:bg-yellow-300 inline-flex h-8 w-8"
              data-dismiss-target="#alert-border-4"
              aria-label="Close"
            >
              <ImCross />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SingleTodo;
