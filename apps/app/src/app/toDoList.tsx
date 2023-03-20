import { Todo } from "./models/todo.interface";
import { useState } from "react";
// import './app.module.scss';

interface TodoListProps {
  todos: Array<Todo>;
  turnOffActive: (index: number) => void;
}

function ToDoList(props: TodoListProps) {
  const [data, setData] = useState(props.todos);

  const onCheckboxUpdate = (index: number) => {
    props.turnOffActive(index);
    console.log("turnOffAktive", index);
    console.log(data, "toDo-List rendered");
  };

  return (
    <div>
      <ul
        id="todo-list"
        className="list-none bg-yellow-400 divide-y
          rounded-lg m-5 z-index: -1" 
      >
        {data.map((todo, index) => {
          if (Boolean(todo.active) == true) {
            return (
              <li id={"item-" + index} key={"item-" + index} className="relative kat-list-item-cell">
                <div className="flex">
                  <input
                    onChange={() => onCheckboxUpdate(index)}
                    id={"default-checkbox-"+index}
                    type="checkbox"
                    className="todo-checkbox m-1"
                  />
                  <label
                    id={"label-"+index}
                    htmlFor="default-checkbox"
                    className="label relative whitespace-pre flex w-11/12 pr-2 "
                  >
                    {" "}
                    <div id={"item-priority-"+index} className="item-priority truncate text-black text-center border rounded border-solid border-yellow-100 bg-yellow-50 mx-5 w-8">
                      {todo.priority.toString()}
                    </div>
                    <p id={"item-description-"+index}className="{'item-description-'+index} item-description text-center absolute truncate w-10/12 mr-5">
                      {todo.description}
                    </p>
                  </label>
                  <div id={"item-date-"+index} className="item-date text-center absolute right-10 border rounded border-solid w-24  border-gray-700 hover:border-white invisible md:visible">
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

export default ToDoList;
