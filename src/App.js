import { useState } from "react";
import { data } from "./data";

const App = () => {
  const [selected, setSelected] = useState(null);

  const toggler = (id) => {
    if (selected === id) {
      return setSelected(null);
    }
    setSelected(id);
  };

  return (
    <div className="container">
      {data.map((item, index) => (
        <div key={item.question}>
          <h3>{item.question}</h3>
          <button onClick={() => toggler(index)}>
            {selected === index ? "-" : "+"}
          </button>
          <p>{item.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default App;
