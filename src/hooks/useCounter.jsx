import { useState } from "react";

const useCounter = (initialValue = 0) => {

    const [counter, setCounter] = useState(initialValue);

    const handleIncrease = () => {
        setCounter(counter + 1)
    }
    const handleDicrease = () => {
        setCounter(counter -1)
    }
    return [counter, handleIncrease, handleDicrease];
};

export default useCounter;