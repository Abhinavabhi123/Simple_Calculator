import { useState } from "react";
import "./index.css";

export default function App() {
  const [value, setValue] = useState("");

  return (
    <div className="container ">
      <div className="calculator">
        <form>
          <div className={`${value.length > 9 ? "large_text" : ""} display`}>
            <input type="text" readOnly value={value} />
          </div>
          <div>
            <input type="button" value="AC" onClick={() => setValue("")} />
            <input
              type="button"
              value="DE"
              readOnly
              onClick={() => setValue(value.slice(0, -1))}
            />
            <input
              type="button"
              value="."
              readOnly
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              type="button"
              value="/"
              readOnly
              onClick={(e) => setValue(value + e.target.value)}
            />
          </div>
          <div>
            <input
              type="button"
              value="7"
              readOnly
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              type="button"
              value="8"
              readOnly
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              type="button"
              value="9"
              readOnly
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              type="button"
              value="*"
              readOnly
              onClick={(e) => setValue(value + e.target.value)}
            />
          </div>
          <div>
            <input
              type="button"
              value="4"
              readOnly
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              type="button"
              value="5"
              readOnly
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              type="button"
              value="6"
              readOnly
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              type="button"
              value="+"
              readOnly
              onClick={(e) => setValue(value + e.target.value)}
            />
          </div>
          <div>
            <input
              type="button"
              value="1"
              readOnly
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              type="button"
              value="2"
              readOnly
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              type="button"
              value="3"
              readOnly
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              type="button"
              value="-"
              readOnly
              onClick={(e) => setValue(value + e.target.value)}
            />
          </div>
          <div>
            <input
              type="button"
              value="00"
              readOnly
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              type="button"
              value="0"
              readOnly
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input type="button" value="=" readOnly className="equal" />
          </div>
        </form>
      </div>
    </div>
  );
}
