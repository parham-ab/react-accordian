import { useState } from "react";
// fake-data
import { data } from "./data";
// icons
import { BsChevronDown } from "react-icons/bs";

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
            <div className="accordion-header" onClick={() => toggler(index)}>
              <h3>{item.question}</h3>
              <div>
                {selected === index ? (
                  <BsChevronDown className="rotate-down" />
                ) : (
                  <BsChevronDown className="rotate-up" />
                )}
              </div>
            </div>
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