import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import RightSide from "./components/RightSide";
import Sidebar from "./components/Sidebar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-black text-white/70 py-10 px-20 min-h-screen">
      <Header />
      <div className="bg-white/50 w-full h-[2px] mt-8"></div>
      <div className="grid grid-cols-12 gap-12">
        <Sidebar />
        <RightSide />
      </div>
    </div>
  );
}

export default App;
