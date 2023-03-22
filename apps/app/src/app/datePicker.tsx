import './datePicker.scss';
import React, { useEffect, useRef, useState } from 'react';

interface DatePickerProps {
  sendValue: (date: string) => void;
}

function DatePicker(props: DatePickerProps) {
  const [value, setValue] = useState('');

  const handleValueChange = (newValue: string) => {
    console.log('newValue:', newValue);
    setValue(newValue);
  };

  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    props.sendValue(value);
    ref.current?.setAttribute('value', value.toString());
    console.log(value?.toString());
  }, [value]);

  return (
    <input
      id="datepicker"
      className="mx-2 rounded-lg cursor-pointer bg-gray-50 border-gray-300 "
      placeholder="date"
      ref={ref}
      type="date"
      onChange={(e) => handleValueChange(e.currentTarget.value)}
    ></input>
  );
}

export default DatePicker;
