import { useEffect, useRef, useState } from "react";

const RefForm = () => {

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const [error, setError] = useState('');

    useEffect(() => {
        nameRef.current.focus()
    },[])


    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(e)
        if(passwordRef.current.value.length < 8){
            setError('password must be 8 carecters');
        }
        else{
            setError('');
            console.log(nameRef.current.value);
            console.log(emailRef.current.value);
            console.log(passwordRef.current.value)
        }
    }

    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>SympleFrom .jsx</h1>
                Text:
                <input 
                    ref={nameRef}
                className="to-blue-400 bg-transparent border-2 m-10" type="text" name="name" required/>
                <br />
                Email:
                <input 
                    ref={emailRef}
                    defaultValue={'mahimgolder@gmail.com'}
                className="bg-transparent border-2 m-10" type="email" name="email" id="" required/>
                <br />
                Password:
                <input 
                    ref={passwordRef}
                className="bg-transparent border-2 m-10" type="password" name="password" required/>
                <br />
                <small>className={error}</small>
                <br />
                <input className="border-2 active:bg-white active:text-black" type="submit" value="Submit" />
            </form>
        
        </div>
    );
};

export default RefForm;