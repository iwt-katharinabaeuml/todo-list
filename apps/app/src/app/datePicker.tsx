import './datePicker.scss';
import DatePicker from 'tailwind-datepicker-react';
import { useEffect, useState } from "react";

interface DatePickerProps {
  sendValue: (date: string) => void;
}

function Datepicker(props: DatePickerProps) {
  const [state, setState] = useState({
    date: new Date()
  });

  useEffect(() => {
    const date = new Intl.DateTimeFormat('en-US').format(state.date);

    props.sendValue(date);
    console.log(date);
  }, [state]);


const [show, setShow] = useState<boolean>(false)
	const options = {
		autoHide: true,
		todayBtn: true,
		clearBtn: true,
		theme: {
			background: "",
			todayBtn: "",
			clearBtn: "",
			icons: "",
			text: "",
			disabledText: "",
			input: "",
			inputIcon: "",
			selected: "",
		},
	}

  return (
    <div id="datepicker" className='mx-2'>
      <DatePicker show={show} onChange={(e) => setState({ date: e })} setShow={(state) => setShow(state)} options={options} classNames="h-12 text-gray-900 block w-full px-2.5" />     
      </div>
  );
};

export default Datepicker
