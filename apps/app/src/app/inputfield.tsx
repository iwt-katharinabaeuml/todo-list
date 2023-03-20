import styles from './app.module.scss';

interface InputfieldProps {
  sendValue: (value: string) => void;
}

function Inputfield(props: InputfieldProps) {
  const onKeyUpHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {   
    props.sendValue((event.target as HTMLInputElement).value);
  }

  return (
    <input
    data-testid="inputfield"
      type="text"
      id="inputfield"
      className="h-full bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-5/12 ml-5 p-3"
      placeholder="new To Do"
      required
      onKeyUp={(event) => onKeyUpHandler(event)}
    ></input>
  );
}

export default Inputfield;
