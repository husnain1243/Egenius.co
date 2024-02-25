import { useState } from "react";
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom'; 
import emailjs from '@emailjs/browser';

import axios from "axios"

export const ContactUsForm = () => {
    const form = useRef();
    const navigate = useNavigate();

    const initialUser = {
        FirstName: 'John',
        LastName: 'doe',
        Phone: '033323423232',
        Email: 'test@gmail.com',
        Message:"Related Message"
    };
    const [formdata, setFormData] = useState(initialUser);
    const [Fname, setFName] = useState(formdata.FirstName);
    const [Lname, setLName] = useState(formdata.LastName);
    const [Phone, setPhoneNumber] = useState(formdata.Phone);
    const [Email, setEmail] = useState(formdata.Email);
    const [Message, setMessage] = useState(formdata.Message);


    const SendMailFromEmail = async (event) => {
        event.preventDefault();
        const mailToLink = `mailto:${Email}?subject=${encodeURIComponent(Fname)}&body=${encodeURIComponent(Message)}`;
        window.location.href = mailToLink;

    };

    const handleSubmit = async (event)=> {
        event.preventDefault();

        setFormData({ DFName: Fname, DLName: Lname , DPhone: Phone , DEmail: Email , DMessage: Message});
        let InputFormData = {
            Fname,Lname,Phone,Email,Message
        }
        console.log(InputFormData)   

        const formData = new FormData();
        formData.append('from', 'husnainmohammad16@gmail.com');
        formData.append('to', Email);
        formData.append('subject', Fname);
        formData.append('text', Message);

        try {
            await axios.post(`https://api.mailgun.net/v3/abchaudary.me/messages`, FormData, {
              auth: {
                username: 'test_relay@abchaudary.me',
                password: '(z[hXqz9fNq~'
              },
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            });
            alert('Email sent successfully');
            // navigate('/Form-Submited');
          } catch (error) {
            console.error(error);
            alert('Failed to send email');
            // navigate('/contact-us');
          }
    };

    const sendEmail = (e) => {
        e.preventDefault();
    
        // emailjs
        //   .sendForm('service_fn3vix4', 'template_uz9z7nr', form.current, {
        //     publicKey: '-bWN5Fc81jOgMZsJs',
        //   })
        //   .then(
        //     () => {
        //       console.log('SUCCESS!');
        //     },
        //     (error) => {
        //       console.log('FAILED...', error.text);
        //     },
        //   );

        emailjs.sendForm('service_fn3vix4', 'template_uz9z7nr', form.current, '-bWN5Fc81jOgMZsJs')
            .then((result) => {
                console.log(result.text);
                navigate('/Form-Submited');
            }, (error) => {
                console.log(error.text);
            });
      };

    return(
        <div className="contact-wrap w-100 p-md-5 p-4 rounded login-box">
            {/* <form  id="contactForm"  onSubmit={handleSubmit} > */}
            <form ref={form} onSubmit={sendEmail}>
                <div className="row">

                    <div className="col-md-6">
                        <div className="form-group ">
                            <label htmlFor="FName" className="text-white">First NAME</label>
                            <input
                                type="text"
                                placeholder="First Name" 
                                className="form-control mb-2" id="FName"
                                value={Fname}
                                name="First_Name"
                                autoComplete="Don"
                                onChange={(e) => setFName(e.target.value)}
                            />
                        </div>
                    </div>
                    
                    <div className="col-md-6 mb-3">
                        <div className="form-group">
                            <label htmlFor="LName" className="text-white">Last Name</label>
                            <input
                                type="text"
                                placeholder="Last Name" 
                                className="form-control mb-2" id="LName"
                                value={Lname}
                                name="Last_Name"
                                autoComplete="Jon"
                                onChange={(e) => setLName(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="col-md-12 mb-3">
                        <div className="form-group">
                            <label htmlFor="phone" className="text-white">Phone Number</label>
                                <input
                                type="phone"
                                placeholder="***********" 
                                className="form-control mb-2" id="phone"
                                value={Phone}
                                name="phone"
                                autoComplete="***********"
                                onChange={(e) => setPhoneNumber(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="col-md-12 mb-3">
                        <div className="form-group">
                            <label htmlFor="email" className="text-white">Email</label>
                                <input
                                type="email"
                                placeholder="test@gmail.com" 
                                className="form-control mb-2" 
                                id="email"
                                value={Email}
                                name="email"
                                autoComplete="test@gmail.com"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="col-md-12 mb-5">
                        <div className="form-group">
                            <label htmlFor="message" className="text-white">MESSAGE</label>
                            <textarea
                                type="text"
                                placeholder="Enter Message" 
                                value={Message}
                                name="message"
                                className="form-control mb-2" id="message" cols="30" rows="6"
                                onChange={(e) => setMessage(e.target.value)}
                            ></textarea>
                        </div>
                    </div>

                    <div className="col-md-12">
                        <div className="form-group d-flex justify-content-center">
                            <button type="submit" className="w-75 bg-transparent border-0">
                                <a className="d-block py-3 text-center w-75 m-auto">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    Submit
                                </a>
                            </button>
                            <div className="submitting sf-hidden"></div>
                        </div>
                    </div>

                </div>
               
            </form>
        </div>
    )
};