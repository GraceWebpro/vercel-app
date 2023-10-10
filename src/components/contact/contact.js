import './contact.css'
import React, { useState } from 'react';
import axios from 'axios'
import ContactForm from './contactForm'


const Contact = () => {
   

    return (
        <div className="contact pad bg-black text-light" id="contact">
				<div className="container-fluid">
					<div className="default-heading">
						<h2>Contact Us</h2>
					</div>
					<div className="row">	
						<div className="col-md-4 col-sm-4">
							<div className="contact-item ">
								<i className="fa fa-street-view"></i>
								<span className="contact-details">#30/67, 5th Street, Mega Market Circle, New Delhi - 625001</span>
							</div>
						</div>
						<div className="col-md-4 col-sm-4">
							<div className="contact-item ">
								<i className="fa fa-wifi"></i>
								<span className="contact-details">music.site@melodi.com</span>
							</div>
						</div>
						<div className="col-md-4 col-sm-4">
							<div className="contact-item ">
								<i className="fa fa-phone"></i>
								<span className="contact-details">555 555 5555</span>
							</div>
						</div>
					</div>
					{/*<!-- form content -->*/}
					<div className="form-content ">
						<p>Do you have any idea in your mind? Drop us a line.</p>
						<ContactForm />
                    </div>
                </div>

              
	
        </div>
			
    )
}

export default Contact

