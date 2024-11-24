import Aunty from "../aunty/Aunty";
import Father from "../father/Father";
import './GrandPa.css';
import Uncle from "../uncle/Uncle";
import { createContext, useState } from "react";


export const AssetContext = createContext("gold");
export const MoneyContext = createContext(1000);

const GrandPa = () => {
    const [money, setMoney] = useState(1000);
    const asset = 'diamond';
    return (
        <div className="grandPa">
            <h1>GrandPa</h1>
            <p>{money}</p>
            <MoneyContext.Provider value={[money, setMoney]}>
                <AssetContext.Provider value="gold">
                    <section className="flex">
                        <Father asset={asset}></Father>
                        <Uncle asset={asset}></Uncle>
                        <Aunty></Aunty>
                    </section>
                </AssetContext.Provider>
            </MoneyContext.Provider>
        </div>
    );
};

export default GrandPa;

/**
 *  1. Create a context and expore it 
 *  2. Add provider for the context with a value. value could be anything
 *  3. useContext to access value in the context API
 * */ 