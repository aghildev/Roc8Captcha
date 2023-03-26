import React, { useState, useEffect } from "react";
import "../styles/SignupForm.css"
function Captcha() {
    const [captcha, setCaptcha] = useState(captchaGenerate());
    const [captchaInput, setCaptchaInput] = useState("")
    const [inputs, setInputs] = useState({});
    const [isValid, setIsValid] = useState(false);
    const [darkmode, setDarkmode] = useState(false);
    
   function handleDarkmode() {
        setDarkmode(!darkmode);
    }
   

    function captchaGenerate() {
        const characters = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let captcha = "";
        for (let i = 0; i < 6; i++) {
            captcha += characters[Math.floor(Math.random() * characters.length)];
        }
        return captcha;
    }


    function handleInput(event) {
        setCaptchaInput(event.target.value);
        setIsValid(event.target.value === captcha);
    }

    function handleRefresh() {
        setCaptcha(captchaGenerate());
        setCaptchaInput("");
        setIsValid(false);
    }


    const onchange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const onsubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
        if (isValid) {
            alert('form submited');
        } else {
           alert('invalid Captcha');
        }
    }
    return (
        <div className={darkmode? "dark_main_container" :"main_container" }>
            <div className="btn_container">
              {darkmode?<button onClick={handleDarkmode}>Light Mode</button> : <button onClick={handleDarkmode}>Dark Mode</button> }  
            </div>
            <div className={darkmode? "dark_form_container" :"form_container" }>
                <h1>Signup Form</h1>
                <form onSubmit={onsubmit}>

                    <label>*Enter your name:
                        <input type="text" onChange={onchange} name="username" required className="input_text" />
                    </label> <br /> <br />

                    <label>*Enter Email id:
                        <input type="email" onChange={onchange} name="mail" required className="input_text" />
                    </label> <br /> <br />

                    <label>Enter City:
                        <input type="text" onChange={onchange} name="city" className="input_text" />
                    </label> <br /> <br />

                    <label>*Enter Password:
                        <input type="password" onChange={onchange} name="password" required minLength={6} className="input_text" />
                    </label> <br /> <br />

                    <label>Enter Phone number:
                        <input type="tel" onChange={onchange} name="phone" className="input_text" />
                    </label> <br /> <br />

                    <label htmlFor="captcha">*Enter captcha:</label>
                    <input type="text" id="captcha" name="captcha" onChange={handleInput} className="input_text" required/><br />

                    <p>{captcha}</p><br />


                    <div className="submtBtn_container">
                        <button type="button" onClick={handleRefresh} className="submitBtn">Refresh</button>

                        <input type="submit" className="submitBtn" />
                    </div>
                </form>
            </div>
        
        </div>

    );
}
export default Captcha;