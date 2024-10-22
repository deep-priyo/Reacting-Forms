import ControlledComponents from "./components/ControlledComponents";
import ExampleComponent from "./components/ExampleComponent";
import UseRef from "./components/useRef";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-gray-100">
      <h1 className="text-orange-600 text-4xl font-bold mb-5">useRef Example</h1>
      <UseRef />
      <h1 className="text-orange-600 text-4xl font-bold mt-10 mb-5">Controlled Components</h1>
      <ControlledComponents />
    </div>
  );
};

export default App;
