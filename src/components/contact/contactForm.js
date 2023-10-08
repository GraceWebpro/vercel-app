import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';


function ContactForm() {
  const form = useRef();



  const sendEmail = (e) => {
    e.preventDefault();

    const serviceID = 'react_contact_details';
    const templateID = 'react_contact_form';
    const userID = 'U5S2HNPvKBIfdlfvG';

    emailjs
      .sendForm(
        serviceID,
        templateID,
        form.current,
        userID
      )
      .then(
        (result) => {
          alert('message sent successfully...');
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form className='cf' ref={form} onSubmit={sendEmail}>        <div className='half left cf'>
          <input type='text' placeholder='Name' name='user_name' />
          <input type='email' placeholder='Email address' name='user_email' />
        </div>
        <div className='half right cf'>
          <textarea name='message' type='text' placeholder='Message'></textarea>
        </div>
        <input type='submit' value='Submit' id='input-submit' />
      </form>
    
  );
}

export default ContactForm;
