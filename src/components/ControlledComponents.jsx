import { useState } from "react";

const ControlledComponents = () => {
    const [val, setVal] = useState({ name: "" });
    const preventSubmit = (event) => event.preventDefault();
    return (
        <div className="" action="" onSubmit={preventSubmit}>
            <form >
                <input onChange={(event) => setVal({ name: event.target.value })} type="text" placeholder="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 mt-2 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                <input type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 m-3 dark:hover:bg-blue-700 dark:focus:ring-blue-800" />
            </form>
            <h1 className="font-semibold">You typed:
                <span className="font-light text-teal-600	">{val.name}</span></h1>
        </div>
    );
};

export default ControlledComponents;
