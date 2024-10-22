import { useRef } from "react";

const ExampleComponent = () => {
    const countRef = useRef(0); // countRef persists across renders

    const incrementRef = () => {
        countRef.current++; // Updating the ref value doesn't cause a re-render
        console.log('Ref count:', countRef.current);
    };

    return (
        <div>
            <p>Ref count: {countRef.current}</p>
            <button onClick={incrementRef}>Increment Ref</button>
        </div>
    );
};
export default ExampleComponent;