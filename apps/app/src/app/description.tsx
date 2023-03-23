import React, { useRef } from 'react';
import './app.module.scss';
import './description.scss';

interface DescriptionProps {
  sendValue: (key: string, value: string) => void;
  // focusRing: string;
  setRef: (ref: React.RefObject<HTMLInputElement>) => void;
}

function Description(props: DescriptionProps) {
  const onKeyUpHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    props.sendValue('description', (event.target as HTMLInputElement).value);
    if ((event.target as HTMLInputElement).value == '') {
      ref.current?.classList.add('empty');    
    } else {
      ref.current?.classList.remove('empty');
    }
  };
  // Referenz bauen
  const ref = useRef<HTMLInputElement>(null);
  props.setRef(ref);

  return (
    <input
      ref={ref}
      type="text"
      id="description"
      className='h-full bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:border-gray-500 block w-5/12 ml-5 p-3'
      placeholder="new To Do"
      required
      onKeyUp={(event) => onKeyUpHandler(event)}
      maxLength={45}
    ></input>
  );
}

export default Description;
