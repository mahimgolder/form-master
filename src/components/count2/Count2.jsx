import useCounter from "../../hooks/useCounter";

const Count2 = () => {
const [counter, handleIncrease, handleDicrease] = useCounter(7)  
    
    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={handleIncrease} className="mr-12 border-2 active:bg-slate-900 active:text-white">increase</button>
            <button onClick={handleDicrease} className="border-2 active:bg-stone-900 active: text-white">Dicrease</button>
        </div>
    );
};

export default Count2;