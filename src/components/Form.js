import React, {useState} from "react";

const Form = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [text, setText] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleInput = (e) => {
        setText(e.target.value);
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={text} onChange={handleInput} />
                <input type="email" value={email} onChange={handleEmail} />
                <input type="password" value={password} onChange={handlePassword} />
                <button type="submit">Submit</button>
            </form>
            {isSubmitting ? <p>Thank you for submitting</p> : null};
        </div>
    )
};


export default Form;
