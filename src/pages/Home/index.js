import { useState, useEffect } from "react";
import { DatabaseAPI } from "../../apis/Database";

export default function Main() {
  const [items, setItems] = useState([]);

  async function getItems() {
    try {
      const { data } = await DatabaseAPI.getItems();
      if (data.results) {
        const items = data.results;
        setItems(items);
      }
    } catch (error) {
      console.error("error", error);
    }
  }

  useEffect(() => {
    getItems();
  }, []);
  return (
    <div>
      {items.map((item) => {
        return <div>{item}</div>;
      })}
    </div>
  );
}
