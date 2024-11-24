import Aunty from "../aunty/Aunty";
import Father from "../father/Father";
import './GrandPa.css';
import Uncle from "../uncle/Uncle";
import { createContext } from "react";


const AssetContext = createContext('gold')

const Grandpa = () => {

    const asset = 'diamond';
    return (
        <div className="grandPa">
            <h1>GrandPa</h1>
            <AssetContext.Provider value="gold">
                <section className="flex">
                    <Father asset={asset}></Father>
                    <Uncle asset={asset}></Uncle>
                    <Aunty></Aunty>
                </section>
            </AssetContext.Provider>
        </div>
    );
};

export default Grandpa;

/**
 *  1. Create a context and expore it 
 *  2. Add provider for the context with a value
 * */ 