import Brother from "../brother/Brother";
import Sister from "../sister/Sister";
import MySelf from "../mySelf/MySelf";

const Father = ({asset}) => {
    return (
        <div>
            <h2>Father</h2>
            <section className="flex">
                <MySelf asset={asset}></MySelf>
                <Brother></Brother>
                <Sister></Sister>
            </section>
        </div>
    );
};

export default Father;