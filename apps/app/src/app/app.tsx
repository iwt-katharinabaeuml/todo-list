import './app.module.scss';
import React, { useState, useReducer, useRef, useEffect } from 'react';

import ButtonAdd from './buttonAdd';
import Description from './description';
import { Todo } from './models/todo.interface';
import ToDoList from './toDoList';
import DoneList from './doneList';
import DropDownPriority from './dropDownPriority';
import Datepicker from './datePicker';
import { DateTimeFormatOptions } from './models/dateTimeFormatOptions.interface';
import { Locales } from './models/locales.enum';

function App() {
  const [todos, setTodos] = useState(new Array<Todo>());
  // const [focusRing, setFocusRing] = useState(
  //   'h-full bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg  focus:border-gray-500 block w-5/12 ml-5 p-3'
  // );

  const [newTodo, setNewTodo] = useState({
    description: '',
    date: new Date().toString(),
    priority: '',
    active: true,
  });

  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  useEffect(() => {
    forceUpdate();
  }, [newTodo]);

  const dateTimeFormatOptions: DateTimeFormatOptions = {
    locale: Locales.de,
    options: {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    },
  };

  let inputDescriptionRef: React.RefObject<HTMLInputElement> | null = null;
  const setInputDescriptionRef = (ref: React.RefObject<HTMLInputElement>) => {
    inputDescriptionRef = ref;
  };

  const clearDescription = () => {
    inputDescriptionRef!.current!.value = '';
    setNewTodo({
      ...newTodo,
      description: '',
    });
  };

  const addToDo = () => {
    if (newTodo.description !== '') {
      setNewTodo({
        ...newTodo,
        active: true,
      });
      setTodos((prev) => [...prev, newTodo]);
      clearDescription();
    }
  };

  const sendData = (key: string, value: string) => {
    setNewTodo({
      ...newTodo,
      [key]: value,
    });
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
                // focusRing={focusRing}
                data-testid="inputfield"
                sendValue={sendData}
                setRef={setInputDescriptionRef}
              />
              <Datepicker data-testid="datepicker" sendValue={sendData} />

              <DropDownPriority
                data-testid="dropdownPriority"
                sendValue={sendData}
              />
              <ButtonAdd onClick={() => addToDo()} />
            </div>
            <h1 className="text-left text-gray-700 py-3 ml-8">To Dos</h1>
            <p className="border-t-4 border-gray-600 p-2 rounded mx-5"></p>
          </div>
          <div>
            <ToDoList
              todos={todos}
              dateTimeFormatOptions={dateTimeFormatOptions}
              setTodos={setTodos}
              forceUpdate={forceUpdate}
            />
          </div>
          <h1 className="text-left text-gray-700 py-3 ml-8">Done</h1>
          <p className="border-t-4 border-gray-600 p-2 rounded mx-5"></p>
          <div>
            <DoneList
              todos={todos}
              dateTimeFormatOptions={dateTimeFormatOptions}
              setTodos={setTodos}
              forceUpdate={forceUpdate}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
