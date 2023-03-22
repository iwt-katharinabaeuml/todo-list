import { Todo } from './models/todo.interface';
import { useState } from 'react';
import { TrashIcon } from '@heroicons/react/24/outline';
import { Locales } from './models/locales.enum';
import { DateTimeFormatOptions } from './models/dateTimeFormatOptions.interface';
// import './app.module.scss';

interface TodoListProps {
  todos: Todo[];
  dateTimeFormatOptions: DateTimeFormatOptions;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  forceUpdate: () => void;
}

function ToDoList(props: TodoListProps) {
  const onClickTrash = (event: EventTarget & SVGSVGElement) => {
    const index = parseInt(event.getAttribute('data-id')!);
    const todos = [...props.todos];
    const removedElement = todos.splice(index, 1);
    props.setTodos(todos);
    props.forceUpdate();
  };

  const onCheckboxUpdate = (index: number) => {
    props.todos[index].active = false;
    props.setTodos(props.todos);
    console.log('turnOffActive', index, props.todos);
    props.forceUpdate();
  };

  return (
    <div>
      <ul
        id="todo-list"
        className="list-none bg-yellow-400 divide-y
          rounded-lg m-5 z-index: -1"
      >
        {props.todos.map((todo, index) => {
          if (Boolean(todo.active) == true) {
            return (
              <li
                id={'item-' + index}
                key={'item-' + index}
                className="relative kat-list-item-cell"
              >
                <div className="flex">
                  <input
                    onChange={() => onCheckboxUpdate(index)}
                    id={'default-checkbox-' + index}
                    type="checkbox"
                    className="todo-checkbox m-1 cursor-pointer"
                  />
                  <label
                    id={'label-' + index}
                    htmlFor="default-checkbox"
                    className="label relative whitespace-pre flex w-11/12 pr-2 "
                  >
                    {' '}
                    <div
                      id={'item-priority-' + index}
                      className="item-priority truncate h-7 text-black text-center border rounded border-solid border-yellow-100 bg-yellow-50 mx-5 w-8"
                    >
                      {todo.priority.toString()}
                    </div>
                    <p
                      id={'item-description-' + index}
                      className="{'item-description-'+index} item-description text-center absolute truncate w-10/12 mr-5"
                    >
                      {todo.description}
                    </p>{' '}
                    <div
                      id={'item-date-' + index}
                      className="absolute item-date text-center right-10 border rounded border-solid w-24  border-gray-700 hover:border-white invisible md:visible"
                    >
                      {new Intl.DateTimeFormat(
                        props.dateTimeFormatOptions.locale,
                        props.dateTimeFormatOptions.options
                      ).format(new Date(todo.date))}
                    </div>
                  </label>
                </div>{' '}
                <div className="absolute right-10 bottom-6">
                  <div>
                    <TrashIcon
                      data-id={index}
                      id="trashIcon"
                      className=" h-6 w-6 z-10 cursor-pointer "
                      onClick={(e) => onClickTrash(e.currentTarget)}
                    />
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

export default ToDoList;
