import React from "react";
import './Contact.css';
import { useState } from "react";

export default function Contact() {

    const [mailerState, setMailerState] = useState({
        name: "",
        email: "",
        message: ""
    });

    function handleStateChange(e) {
        setMailerState((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    }

    const submitEmail = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:3001/send", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ mailerState }),
        })
          .then((res) => res.json())
          .then(async (res) => {
            const resData = await res;
            console.log(resData);
            if (resData.status === "success") {
              alert("Message Sent");
            } else if (resData.status === "fail") {
              alert("Message failed to send");
            }
          })
          .then(() => {
            setMailerState({
              email: "",
              name: "",
              message: "",
            });
          });
      };


    return (
        <div className="contactWrapper section" id="contact">
            <h2>CONTACT</h2>
            <hr></hr>
            <div className="contact-form-container">
                <form onSubmit={submitEmail}>
                    <input type="text" name="name" placeholder="Name" onChange={handleStateChange} value={mailerState.name} required/>
                    <input type="email" name="email" placeholder="E-mail" onChange={handleStateChange} value={mailerState.email} required/>
                    <input type="text" placeholder="Subject" required/>
                    <textarea placeholder="Message" name="message" onChange={handleStateChange} value={mailerState.message} required/>
                    <input type="submit" value="SEND"/>
                </form>
            </div>
        </div>
    )
}