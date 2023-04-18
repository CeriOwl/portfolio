import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { Toaster, toast } from 'sonner'
import { render } from '@testing-library/react';

export default function Contact() {
    const emailRegex = /^([a-z0-9]+(?:[._-][a-z0-9]+)*)@([a-z0-9]+(?:[.-][a-z0-9]+)*\.[a-z]{2,})$/i;
    const nameRegex = /^(?![\s.]+$)[a-zA-Z\s.]*$/i;


    const [emailStatus, setEmailStatus] = useState("")
    const [nameStatus, setNameStatus] = useState("");

    const form = useRef();

    const sendEmail = (e) => {
        if (emailRegex.test(emailStatus) && nameRegex.test(nameStatus)) {
            e.preventDefault();
            emailjs.sendForm('service_w8fon7l', 'template_nj5dxbp', form.current, 'H9eNP4Mml4F8N0orc')
                .then((result) => {
                    toast.success('Email sended! 😁');
                    e.target.reset();
                }, (error) => {
                    toast.error('Error sending the email! 😥');
                    e.target.reset();
                });
        }else{
            toast.error('Error with your info! 😦')
            e.preventDefault();
        }
    };

    return (
        <section className='contact' id='contact'>
            <div>
                <h2>Contact me</h2>
                <form ref={form} onSubmit={sendEmail}>
                    <div className='container-email-name'>
                        <div>
                            <label htmlFor="email">email:</label>
                            <input required type='email' name='email' id='email' placeholder='robert.de.niro@gmail.com' onChange={e => { setEmailStatus(e.target.value) }} />
                        </div>
                        <div>
                            <label htmlFor="name">name:</label>
                            <input required type="text" name="name" id="name" placeholder='Robert De Niro' onChange={e => { setNameStatus(e.target.value) }} />
                        </div>
                    </div>
                    <div className='container-message'>
                        <label htmlFor="message">message:</label>
                        <textarea required name="message" id="message" cols="30" rows="5" placeholder="Hey! Alejandro, I'm..."></textarea>
                    </div>
                    <div className='container-buttons'>
                        <button type="submit">Send</button>
                        <button type="reset">Reset</button>
                    </div>
                </form>
            </div>
            <Toaster richColors />
        </section>
    )
}
