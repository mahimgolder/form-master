import Aunty from "../aunty/Aunty";
import Father from "../father/Father";
import './GrandPa.css';
import Uncle from "../uncle/Uncle";

const Grandpa = () => {
    return (
        <div className="grandPa">
            <h1>GrandPa</h1>
            <section className="flex">
                <Father></Father>
                <Uncle></Uncle>
                <Aunty></Aunty>
            </section>
        </div>
    );
};

export default Grandpa;