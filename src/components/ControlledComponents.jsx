import { useState } from "react";

const ControlledComponents = () => {
    const [val, setVal] = useState({ name: "" });
    const preventSubmit = (event) => event.preventDefault();
    return (
        <div className="" action="" onSubmit={preventSubmit}>
            <form >
                <input onChange={(event) => setVal({ name: event.target.value })} type="text" placeholder="name" />
                <input type="submit" className="px-2 py-3 bg-blue-400 text-white text-xs rounded-full" />
            </form>
            <h1>You typed: {val.name}</h1>
        </div>
    );
};

export default ControlledComponents;
