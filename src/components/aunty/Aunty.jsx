import Cousin from "../cousin/Cousin";

const Aunty = () => {
    return (
        <div>
            <h2>Aunty.jsx</h2>
            <section className="flex">
                <Cousin name={"momen"}></Cousin>
                <Cousin name={'Mohon'}></Cousin>
            </section>
        </div>
    );
};

export default Aunty;