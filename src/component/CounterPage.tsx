import { useState } from "react";

const CounterPage = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <h1>
             Now count is {count}.
            </h1>
            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>
        </div>
    )
};

export default CounterPage