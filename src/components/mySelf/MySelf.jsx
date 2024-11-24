import Special from "../special/Special";

const MySelf = ({asset}) => {
    return (
        <div>
            <h1>MySelf.jsx</h1>
            <section className="flex">
                <Special asset={asset}></Special>
            </section>
        </div>
    );
};

export default MySelf;