import React from 'react'

export default function Contact() {
    return (
        <section className='contact' id='contact'>
            <div>
                <h2>Contact me</h2>
                <form>
                    <div className='container-email-name'>
                        <div>
                            <label htmlFor="email">email:</label>
                            <input type='email' name='email' id='email' placeholder='robert.de.niro@gmail.com' /></div>
                        <div>
                            <label htmlFor="name">name:</label>
                            <input type="text" name="name" id="name" placeholder='Robert De Niro' />
                        </div>
                    </div>
                    <div className='container-message'>
                        <label htmlFor="message">message:</label>
                        <textarea name="message" id="message" cols="30" rows="5" placeholder="Hey! Alejandro, I'm..."></textarea>
                    </div>
                    <div className='container-buttons'>
                        <button type="submit">Send</button>
                        <button type="reset">Reset</button>
                    </div>
                </form>
            </div>
        </section>
    )
}
