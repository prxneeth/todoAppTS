import "./App.css";
import InputField from "./components/custom/InputField";
import TodoDisplay from "./components/custom/TodoDisplay";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <>
      <Toaster />
      <div className=" sm:w-[50vw] mx-auto p-5">
        <InputField />
        <TodoDisplay />
      </div>
    </>
  );
}

export default App;
