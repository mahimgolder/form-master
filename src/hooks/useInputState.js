import { useState } from "react"

const useInputState = (initialValue = null) => {
    const [value, setValue] = useState(initialValue);
    
    // const handleChange = e => {
    //     setValue(e.target.value);
    // }
    const onChange = e => {
        setValue(e.target.value);
    }
    // return [value, onChange]
    return {
        value,
        onChange
    }
}

export default useInputState;