import "./App.css";
import React, { useEffect, useState } from "react";
import IProduct from "./models/Product";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./redux/store";
import { addCount } from "./redux/reducers";
import { useContext } from "react";
function App() {
  const [data, setData] = useState<IProduct[]>([]);

  const [input, setInput] = useState<string>();
  const [toggle, setToggle] = useState(false);
  const [total, setTotal] = useState<number>(0);
  const dispatch = useDispatch<AppDispatch>();
  const handleSubmit = (d: IProduct) => {
    setTotal(total + d.price);
  };
  const tot = useSelector((state: RootState) => state);
  let filteredData = data.filter(
    (d) => d.title.includes(input ?? "") || d.style.includes(input ?? "")
  );
  useEffect(() => {
    if (data.length === 0)
      fetch("https://cybernet.az/demo.php")
        .then((dt) => dt.json())
        .then((d: IProduct[]) => {
          setData(d);
        });
  }, []);
  return (
    <div className={toggle ? "black" : "App"}>
      <p>Total price: {total.toFixed(1)}</p>
      <hr />
      <button onClick={() => setToggle(!toggle)}>Change theme</button>
      <br />
      <input
        type={"text"}
        value={input}
        onChange={(e) => {
          setInput(e.target.value as string);
        }}
        placeholder={"Search"}
      />
      <h2>Products</h2>

      {filteredData.map((d) => (
        <div>
          <hr />
          <p>
            <span className="Product">Title:</span> {d.title}
          </p>
          <p>
            <span className="Product">Style:</span> {d.style}
          </p>
          <p>
            <span className="Product">Price: {d.price}</span>
          </p>
          <p>
            <span className="Product">Description:</span> {d.description}
          </p>
          <p>
            <span className="Product">Free shipping:</span>{" "}
            {d.isFreeShipping ?? "Yes"}
          </p>
          <button onClick={() => handleSubmit(d)}>Add</button>
        </div>
      ))}
    </div>
  );
}

export default App;
