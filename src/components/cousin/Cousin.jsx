import Special from "../special/Special";

const Cousin = ({name, asset}) => {
    return (
        <div>
            <h1>cousin</h1>
            <p>{name}</p>
            <section>
                {
                    asset && <Special>{asset}</Special>
                }
            </section>
        </div>
    );
};

export default Cousin;