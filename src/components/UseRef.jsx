import { useRef } from "react";

const UseRef = () => {
  const name = useRef(null);
  const age = useRef(null);
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(name.current.value, age.current.value)
  }
  return (
    <div >
      <form action="" onSubmit={handleSubmit}>
        <input ref={name} placeholder="name" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        <input ref={age} placeholder="age" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 mt-2 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        <input type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 m-3 dark:hover:bg-blue-700 dark:focus:ring-blue-800" /></form>
      
    </div>);
};

export default UseRef
