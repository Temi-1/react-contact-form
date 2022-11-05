import React from 'react'

export default function Contact() {
  return (
    <div className="contact-page">
        <h1 className="contact-heading">Contact Me</h1>
        <p className="contact-text">Hi there, contact me to ask me about anything you have in mind.</p>
        <form className="contact-form">
            <div>
                <label for="first_name">First Name</label>
                <input type="text" id="first_name" name="firstname" placeholder="Enter your first name"></input>
            </div>
            <div>
                <label for="last_name">Last Name</label>
                <input type="text" id="last_name" name="lastname" placeholder="Enter your last name"></input>
            </div>
            <div>
                <label for="email">Email</label>
                <input type="email" id="email" name="email" placeholder="yourname@email.com"></input>
            </div>
            <div>
                <label for="message">Message</label>
                <textarea id="message" name="message" placeholder="Send me a message and I'll reply you as soon as possible..."></textarea>
            </div>
            <input type="submit" id="btn_submit" value="Send Message"></input>
        </form>
    </div>
  )
}
