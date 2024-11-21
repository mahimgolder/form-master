import { useState } from "react";

const StatefulForm = () => {

    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState('')

    const handleSubmit = e => {
        e.preventDefault();

        if(password.length < 6){
            setError("password has must be 6 carecter or longer")
        }
        else{
            setError('');
            console.log(name, email, password);
        }
        
    }

    const handleEmailChange = e => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }

    const handleNameChange = e => {
        setName(e.target.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>SympleFrom .jsx</h1>
                Text:
                <input 
                    onChange={handleNameChange}
                className="to-blue-400 bg-transparent border-2 m-10" type="text" name="name" />
                <br />
                Email:
                <input 
                    onChange={handleEmailChange}
                className="bg-transparent border-2 m-10" type="email" name="email" id="" />
                <br />
                Password:
                <input 
                    onChange={handlePasswordChange}
                className="bg-transparent border-2 m-10" type="password" name="password"/>
                <br />
                <input className="border-2 active:bg-white active:text-black" type="submit" value="Submit" />
            </form>
            {
                error && <p>{error}</p>
            }
        </div>
    );
};

export default StatefulForm;