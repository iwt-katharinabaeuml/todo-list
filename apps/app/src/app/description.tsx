import React from 'react';
import './app.module.scss';

interface DescriptionProps {
  sendValue: (value: string) => void;
}

function Description(props: DescriptionProps) {
  const onKeyUpHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {   
    props.sendValue((event.target as HTMLInputElement).value);
  }

  return (
    <input    
      type="text"
      id="description"
      className="h-full bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-400 focus:border-gray-500 block w-5/12 ml-5 p-3"
      placeholder="new To Do"
      required
      onKeyUp={(event) => onKeyUpHandler(event)}
    ></input>
  );
}

export default Description;
