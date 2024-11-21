
const SympleForm = () => {

    const handleSubmit = e => {
        e.preventDefault()
        console.log("form submited")
        console.log(e.target.name.value)
        console.log(e.target.email.value)
        console.log(e.target.phone.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>SympleFrom .jsx</h1>
                <input className="to-blue-400 text-black" type="text" name="name" />
                <br />
                <input className="text-black" type="email" name="email" id="" />
                <br />
                <input className="text-black" type="text" name="phone"/>
                <br />
                <input className="bg-blue-400" type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SympleForm;