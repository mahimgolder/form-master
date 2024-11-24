
const ReuseableForm = ({formTitle, handleSubmit, children, submitBtnText = 'Submit'}) => {

   const handleLocalSubmit = e => {
    e.preventDefault();
    const data = {
        name: e.target.name.value,
        email: e.target.email.value,
        password: e.target.password.value
    }
    handleSubmit(data)
   }
    
    return (
        <div>
        
            <form onSubmit={handleLocalSubmit}>
                <h1 className="text-2xl">{children}</h1>
                Text:
                <input 
                className="to-blue-400 bg-transparent border-2 m-10" type="text" name="name" required/>
                <br />
                Email:
                <input 
                className="bg-transparent border-2 m-10" type="email" name="email" id="" required/>
                <br />
                Password:
                <input 
                className="bg-transparent border-2 m-10" type="password" name="password" required/>
                <br />
                <input  className="border-2 active:bg-white active:text-black" type="submit" value={submitBtnText} />
            </form>
        </div>
    );
};

export default ReuseableForm;