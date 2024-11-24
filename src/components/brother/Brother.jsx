import { useContext } from "react";
import { MoneyContext } from "../grandPa/GrandPa";

const Brother = () => {

    const [money] =useContext(MoneyContext)
    return (
        <div>
            <h1>Brother</h1>
            <p>GrandPa: {money}</p>
        </div>
    );
};

export default Brother;