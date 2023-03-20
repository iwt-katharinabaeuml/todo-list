interface ButtonAddProps {
  onClick?: () => void;
}

function ButtonAdd(props: ButtonAddProps) {
  const buttonClick = () => {
    if (props.onClick) props.onClick();
  };
  return (
    <div className="flex-1 w-1/6 h-full pr-5 pl-2">
      <button
        data-testid="buttonAdd"
        id="add_button"
        onClick={buttonClick}
        type="button"
        className="  w-full h-12 text-l text-white
         bg-gradient-to-r from-purple-400 via-purple-600 to-purple-700 hover:bg-gradient-to-br shadow-lg font-medium rounded-lg hover:text-center focus:ring-gray-500 focus:border-gray-500"
      >
        ADD
      </button>
    </div>
  );
}

export default ButtonAdd;
