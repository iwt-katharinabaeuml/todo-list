import './app.module.scss';
import React, { useState, useReducer, useRef, useEffect } from 'react';

import ButtonAdd from './buttonAdd';
import Description from './description';
import { Todo } from './models/todo.interface';
import ToDoList from './toDoList';
import DoneList from './doneList';
import DropDownPriority from './dropDownPriority';
import Datepicker from './datePicker';

function App() {
  const [todos, setTodos] = useState(new Array<Todo>());
  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  const ref = useRef('');

  const setPriority = (reference: string) => {
    ref.current = reference;
  };

  const addToDo = () => {
    console.log('newTodo', newTodo);
    setNewTodo({
      ...newTodo,
      active: true,
    });
    setTodos((prev) => [...prev, newTodo]);
    forceUpdate();
  };

  const newTodoDate = new Intl.DateTimeFormat('en-US').format(new Date());
  const [newTodo, setNewTodo] = useState({
    description: '',
    date: newTodoDate,
    priority: '',
    active: true,
  });

  const sendData = (key: string, value: string) => {
    setNewTodo({
      ...newTodo,
      [key]: value,
    });
    forceUpdate();
  };

  const sendInputValue = (value: string) => {
    setNewTodo({
      ...newTodo,
      description: value,
    });
    forceUpdate();
  };

  const sendDatePickerValue = (chosenDate: string) => {
    setNewTodo({
      ...newTodo,
      date: chosenDate,
    });
    forceUpdate();
  };
  
  return (
    <div className="container mx-auto w-auto">
      <div className="App">
        <div className="md:container mx-auto bg-gray-100 rounded-lg">
          <h1 id="header" className="text-gray-700 text-center text-xl p-8">
            MY TO DOs
          </h1>
          <div className="flex-auto">
            <div className="flex md:container mx-auto h-12 order-last">
              <Description
                data-testid="inputfield"
                sendValue={sendInputValue}
              />
              <Datepicker
                data-testid="datepicker"
                sendValue={sendDatePickerValue}
              />

              <DropDownPriority
                data-testid="dropdownPriority"
                sendValue={sendData}
                setPriority={setPriority}
              />
              <ButtonAdd onClick={() => addToDo()} />
            </div>
            <h1 className="text-left text-gray-700 py-3 ml-8">To Dos</h1>
            <p className="border-t-4 border-gray-600 p-2 rounded mx-5"></p>
          </div>
          <div>
            <ToDoList todos={todos} setTodos={setTodos} forceUpdate={forceUpdate} />
          </div>
          <h1 className="text-left text-gray-700 py-3 ml-8">Done</h1>
          <p className="border-t-4 border-gray-600 p-2 rounded mx-5"></p>
          <div>
            <DoneList todos={todos} setTodos={setTodos} forceUpdate={forceUpdate} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
