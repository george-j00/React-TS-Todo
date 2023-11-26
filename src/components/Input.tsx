import { ReactType } from "../types/utils";

type Input ={
    inputValue: string;
    setInputValue:ReactType<string> ;
}

const Input = ({inputValue , setInputValue} : Input ) => {
  return (
    <>
      <div className="flex ">
        <input
          className="bg-blue-50 p-3 rounded-l-lg"
          type="text"
          name=""
          id=""
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
    </>
  );
};

export default Input;
