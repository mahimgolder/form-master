import Cousin from "../cousin/Cousin";

const Uncle = () => {
    return (
        <div>
            <h2>uncle.jsx</h2>
            <Cousin></Cousin>
            <section className="flex">
                <Cousin name={'kayesh'}></Cousin>
                <Cousin name={'nahid'}></Cousin>
            </section>
        </div>
    );
};

export default Uncle;