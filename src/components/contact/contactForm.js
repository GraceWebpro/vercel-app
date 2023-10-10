import React, { useRef, useEffect } from 'react'
import emailjs from '@emailjs/browser';
import intlTelInput from 'intl-tel-input';
import 'intl-tel-input/build/css/intlTelInput.css';


function ContactForm() {
  const form = useRef();

    //const inputRef = document.querySelector("#phone");
    //intlTelInput(inputRef, {
    //    utilsScript: "build/js/utils.js"
    //})

    const inputRef = useRef(null);

    useEffect(() => {
        const input = inputRef.current;
        const iti = intlTelInput(input, {
            initialCountry: 'ng',
            separateDialCode: true,
        });
    }, []);


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
      <div>
        <form className='container-fluid' ref={form} onSubmit={sendEmail}>
            <div className='row'>
                <div className='col-md-6'>
                    <div className="form-group">
                        <label for="exampleInputEmail1" className='text-secondary'>Name</label>
                        <input type="text" name='user_name' className="form-control bg-black-50" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1" className='text-secondary'>Email</label>
                        <input type="email" name='user_email' className="form-control bg-black-50" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="form-group phone">
                        <input ref={inputRef} type='tel' name='phone' placeholder='(908) 011-9222' className="form-control w-100 bg-black-50" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                </div>
                <div className='col-md-6'>
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1" className='text-muted'>Message</label>
                        <textarea class="form-control bg-black-50" id="exampleFormControlTextarea1" rows="3" name='message'></textarea>
                    </div>
                </div>
            </div>

            <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
    </div>
    
  );
}

export default ContactForm;
