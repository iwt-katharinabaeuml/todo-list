import React, { useState, useEffect } from 'react';
import { ClockIcon } from '@heroicons/react/24/outline';
import './app.module.scss';

interface DropDownPriorityProps {
  sendValue: (key: string, value: string) => void;
}

interface DropDownPriorityState {
  priority: string;
  open: boolean;
  color: string;
  innerHTML: string | JSX.Element;
}

const DropDownPriority = (props: DropDownPriorityProps) => {
  const [state, setState] = useState({
    priority: '',
    open: false,
    color:
      'mr-2 w-full h-12 text-xl text-white bg-gradient-to-r from-gray-400 via-gray-600 to-gray-700 hover:bg-gradient-to-br shadow-lg font-medium rounded-lg hover:text-center',
    innerHTML: 'Priority',
  } as DropDownPriorityState);

  useEffect(() => {
    props.sendValue('priority', state.priority);
  }, [state]);

  const handleOpen = () => {
    setState({ ...state, open: !state.open });
  };

  const priorityChanging = (displayColor: string, displayPriority: string) => {
    setState({
      color:
        'mr-2 w-full h-12 text-xl text-white bg-gradient-to-r from-' +
        displayColor +
        '-400 via-' +
        displayColor +
        '-600 to-' +
        displayColor +
        '-700 hover:bg-gradient-to-br shadow-lg font-medium rounded-lg text-center',
      innerHTML: <ClockIcon className="mx-auto h-6" />,
      open: false,
      priority: displayPriority,
    });
  };

  return (
    <div className="w-1/6 dropdown z-50">
      <div className="from-green-400 via-green-600 to-green-700 from-red-400 via-red-600 to-red-700 from-yellow-400 via-yellow-600 to-yellow-700 from-gray-400 via-gray-600 to-gray-700 w-0 h-0"></div>
      <button id="handleOpen" onClick={handleOpen} className={state.color}>
        {state.innerHTML}
      </button>
      {state.open ? (
        <ul className="menu divide-y divide-white border-solid border-8 border-white rounded-md bg-white hover:cursor-pointer">
          <li className="menu-item">
            <button
              id="MenuOne"
              onClick={() => priorityChanging('red', '!!!')}
              className=" w-full  text-xl text-white  bg-red-600 hover:bg-red-500 shadow-lg font-medium rounded-lg  py-2 text-center"
            >
              <ClockIcon className="mx-auto h-6" />
            </button>
          </li>
          <li className="menu-item">
            <button
              onClick={() => priorityChanging('yellow', '!!')}
              className=" w-full text-xl text-white bg-yellow-400 hover:bg-yellow-300 shadow-lg font-medium rounded-lg py-2 text-center"
            >
              <ClockIcon className="mx-auto h-6" />
            </button>
          </li>
          <li className="menu-item">
            <button
              id="MenuThree"
              onClick={() => priorityChanging('green', '!')}
              className=" w-full text-xl text-white bg-green-500 hover:bg-green-400 shadow-lg font-medium rounded-lg py-2 text-center"
            >
              <ClockIcon className="mx-auto h-6" />
            </button>
          </li>
          <li className="menu-item">
            <button
              onClick={() => priorityChanging('gray', '')}
              className=" w-full text-xl text-white bg-gray-500 hover:bg-gray-400 shadow-lg font-medium rounded-lg py-2 text-center"
            >
              <ClockIcon className="mx-auto h-6" />
            </button>
          </li>
        </ul>
      ) : null}
    </div>
  );
};

export default DropDownPriority;
