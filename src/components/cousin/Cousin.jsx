import Friend from "../friend/Friend";
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
                {name === 'Mohon' && <Friend></Friend>}
            </section>
        </div>
    );
};

export default Cousin;