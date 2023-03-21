import './app.module.scss';
import React, { useState, useReducer, useRef } from 'react';

import ButtonAdd from './buttonAdd';
import Description from './description';
import { Todo } from './models/todo.interface';
import ToDoList from './toDoList';
import DoneList from './doneList';
import DropDownPriority from './dropDownPriority';
import Datepicker from './datePicker';

function App() {
  const todos = Array<Todo>();

  const [data, setData] = useState(todos);
  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  const ref = useRef('');

  const setPriority = (reference: string) => {
    ref.current = reference;
  };

  const turnOffActive = (index: number) => {
    console.log('turnOffActive', index);
    data[index].active = false;
    setData(data);
    forceUpdate();
  };

  const turnOnActive = (index: number) => {
    console.log('turnOnActive', index);
    data[index].active = true;
    setData(data);
    forceUpdate();
  };

  const addToDo = () => {
    console.log('newTodo', newTodo);
    data.push(newTodo);
    setNewTodo({
      ...newTodo,
      active: true,
    });
    forceUpdate();
  };

  const newTodoDate = new Intl.DateTimeFormat('en-US').format(new Date());
  const [newTodo, setNewTodo] = useState({
    description: '',
    date: newTodoDate,
    priority: '',
    active: true,
  });

  const sendData = (key:string, value:string) => {
    setNewTodo({
      ...newTodo,
      [key]: value,
    });
    forceUpdate();
  };

  const sendInputValue = (value:string) => {
    setNewTodo({
      ...newTodo,
      description: value,
    });
    forceUpdate();
  };

  const sendDatePickerValue = (chosenDate:string) => {
    setNewTodo({
      ...newTodo,
      date: chosenDate,
    });
    forceUpdate();
  };
  console.log(newTodo.priority);
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
              <ToDoList todos={data} turnOffActive={turnOffActive} />
            </div>
            <h1 className="text-left text-gray-700 py-3 ml-8">Done</h1>
            <p className="border-t-4 border-gray-600 p-2 rounded mx-5"></p>
            <div>
              <DoneList todos={data} turnOnActive={turnOnActive} />
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;
