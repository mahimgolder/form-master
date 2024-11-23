import useInputState from "../../hooks/useInputState";

const HookForm = () => {

    // const [name, handleNameChange] = useInputState('rojoni hooked')
    const emailState = useInputState('mahimgolder@gmail.com ')

    const handleSubmit = (e) => {
        console.log("form data", emailState.value )
        e.preventDefault()
    }
    return (
        <div>
             <form onSubmit={handleSubmit}>
                <h1>SympleFrom .jsx</h1>
                {/* Text:
                <input 
                    value={name}
                    onChange={handleNameChange}
                className="to-blue-400 bg-transparent border-2 m-10" type="text" name="name" required/> */}
                <br />
                Email:
                <input 
                    {...emailState}
                className="bg-transparent border-2 m-10" type="email" name="email" id="" required/>
                <br />
                Password:
                <input 
                className="bg-transparent border-2 m-10" type="password" name="password" required/>
                <br />
                <input className="border-2 active:bg-white active:text-black" type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;