import React, { useState } from 'react';
import { Todo } from './models/todo.interface';
import './app.module.scss';

interface DoneListProps {
  todos: Array<Todo>;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  forceUpdate: () => void;
}

function DoneList(props: DoneListProps) {
  const onCheckboxUpdate = (index: number) => {
    props.todos[index].active = true;
    props.setTodos(props.todos);
    props.forceUpdate();
  };

  return (
    <div>
      <ul
        id="donelist"
        className="list-none bg-gray-300 divide-y
          rounded-lg m-5"
      >
        {props.todos.map((todo, index) => {
          if (Boolean(todo.active) == false) {
            return (
              <li key={'item-' + index} className="relative kat-list-item-cell">
                <div className="flex items-center">
                  <input
                    onChange={() => onCheckboxUpdate(index)}
                    id={'done-checkbox-' + index}
                    type="checkbox"
                    checked
                    className="done-checkbox m-1"
                  />
                  <label
                    htmlFor="default-checkbox"
                    className=" relative  flex w-11/12 pr-2"
                  >
                    <div
                      id={'item-priority-done-' + index}
                      className="mx-5 w-8 h-7 text-p-1 text-black whitespace-pre text-center border rounded border-solid border-gray-100 bg-gray-50 "
                    >
                      {todo.priority.toString()}
                    </div>

                    <p
                      id={'item-description-done-' + index}
                      className="absolute text-center truncate w-10/12 mr-5"
                    >
                      {todo.description}
                    </p>
                  </label>

                  <div
                    id={'item-date-done-' + index}
                    className="absolute right-10 border text-center rounded border-solid w-24 border-gray-700 hover:border-white invisible md:visible"
                  >
                    {todo.date.toString()}
                  </div>
                </div>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
}

export default DoneList;
