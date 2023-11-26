import React, { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import Button from "./components/Button";
import ItemList from "./components/ItemList";

function App() {
  const [inputValue, setInputValue] = useState<string>("");
  const [items, setItems] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setItems((prev) => [...prev, inputValue]);
    setInputValue("");
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <Input inputValue={inputValue} setInputValue={setInputValue} />
            <Button className={"bg-black text-white p-1 px-3 rounded-lg"}>
              App
            </Button>
          </div>
        </form>
        <div>
          <ItemList items={items} setItems={setItems}/>
        </div>
      </div>
    </>
  );
}

export default App;
