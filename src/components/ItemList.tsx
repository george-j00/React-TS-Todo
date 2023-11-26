import { ReactType } from "../types/utils";
import Button from "./Button";

type ItemList = {
  items: string[];
  setItems: ReactType<string[]>;
};
const ItemList = ({ items, setItems }: ItemList) => {
  const handleDelete = (deleteItem: string) => {
    setItems((prev) => prev.filter((item) => item !== deleteItem));
  };

  return (
    <>
      {items.map((item) => (
        <div className="w-full mt-5">
            <div className="flex w-full justify-between gap-8">
          <h1>{item}</h1>
          <Button
            key={item}
            className={"bg-red-600 text-white p-1 px-3 rounded-lg"}
            onClick={() => handleDelete(item)}
          >
            Delete
          </Button>
        </div>
        </div>
      ))}
    </>
  );
};

export default ItemList;
