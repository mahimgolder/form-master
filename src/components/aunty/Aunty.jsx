import { useContext } from "react";
import Cousin from "../cousin/Cousin";
import { MoneyContext } from "../grandPa/GrandPa";


const Aunty = () => {
    

    const [money, setMoney] = useContext(MoneyContext)
    return (
        <div>
            <h2>Aunty.jsx</h2>
            <section className="flex">
                <Cousin name={"momen"}></Cousin>
                <Cousin name={'Mohon'}></Cousin>
            </section>
            <p>money: {money}</p>
            <button className="border-2 rounded-lg" onClick={() => setMoney(money + 1000)}>Add 1000 TK</button>
            <button className="border-2 rounded-lg" onClick={() => setMoney(0)}>Add 1000 TK</button>

        </div>
    );
};

export default Aunty;