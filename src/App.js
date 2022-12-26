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
      <div className="accordion">
        {data.map((item, index) => (
          <div key={item.question} className="item">
            <h3>{item.question}</h3>
            <button onClick={() => toggler(index)}>
              {selected === index ? "-" : "+"}
            </button>
            <div className={selected === index ? "content show" : "content"}>
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
