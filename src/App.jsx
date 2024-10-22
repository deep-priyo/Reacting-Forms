import ControlledComponents from "./components/ControlledComponents";
import ExampleComponent from "./components/ExampleComponent";
import ReactHookForm from "./components/ReactHookForm";
import UseRef from "./components/useRef";

const App = () => {
  return (
    <div className=" bg-zinc-400 flex flex-col items-center justify-center h-screen text-center bg-gray-100">
      {/* <h1 className="text-orange-600 text-4xl font-bold mb-5">useRef Example</h1>
      <UseRef />
      <h1 className="text-orange-600 text-4xl font-bold mt-10 mb-5">Controlled Components</h1>
      <ControlledComponents /> */}
      <h1 className="text-orange-600 text-4xl font-bold mt-10 mb-5">React Hook Form</h1>
      <ReactHookForm />
    </div>
  );
};

export default App;
