import { useState } from "react";

function App() {
  const [color, setColor] = useState("white");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div
          className="flexed flex flex-wrap justify-center rounded-full inset-x-0 gap-5 py-4"
          style={{ backgroundColor: "white" }}
        >
          <button
            onClick={() => setColor("red")}
            className="text-white px-8 h-19 rounded-full"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>

          <button
            onClick={() => setColor("blue")}
            className="text-white px-8 h-19 rounded-full shadow-lg"
            style={{ backgroundColor: "blue", gap: 4 }}
          >
            Blue
          </button>

          <button
            onClick={() => setColor("olive")}
            className="text-white px-8 h-19 rounded-full"
            style={{ backgroundColor: "olive" }}
          >
            Olive
          </button>

          <button
            onClick={() => setColor("green")}
            className="text-white px-8 h-19 rounded-full"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>

          <button
            onClick={() => setColor("yellow")}
            className="text-black px-8 h-19 rounded-full"
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>

          <button
            onClick={() => setColor("gray")}
            className="text-white px-8 h-19 rounded-full"
            style={{ backgroundColor: "gray" }}
          >
            Gray
          </button>

          <button
            onClick={() => setColor("pink")}
            className="text-white px-8 h-19 rounded-full"
            style={{ backgroundColor: "pink" }}
          >
            Pink
          </button>

          <button
            onClick={() => setColor("purple")}
            className="text-white px-8 h-19 rounded-full"
            style={{ backgroundColor: "purple" }}
          >
            Purple
          </button>

          <button
            onClick={() => setColor("lavender")}
            className="text-black px-8 h-19 rounded-full"
            style={{ backgroundColor: "lavender" }}
          >
            Lavender
          </button>

          <button
            onClick={() => setColor("white")}
            className="text-black px-8 h-19 rounded-full"
            style={{ backgroundColor: "white" }}
          >
            White
          </button>

          <button
            onClick={() => setColor("black")}
            className="text-white px-8 h-19 rounded-full"
            style={{ backgroundColor: "black" }}
          >
            Black
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
