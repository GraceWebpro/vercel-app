import './contact.css'
import React, { useState } from 'react';
import axios from 'axios'


const Contact = () => {
    const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform form validation here

    // Log the form data to the console (for demonstration purposes)
    console.log(formData);

    // Send the form data to your server using Axios
    axios
      .post('/api/contact', formData)
      .then((response) => {
        console.log('Form data sent successfully:', response.data);
        // Clear the form
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      })
      .catch((error) => {
        console.error('Error sending form data:', error);
      });

    // Clear the form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  };

    return (
        <div className="" id="contact">
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
						<form>
                        <iframe title="A Contact Form" width="100%" height="auto" src="https://d2b30406.sibforms.com/serve/MUIFAOerp56TXtFu0YUFZ7DDAojR0fTzDi_-ozBbaA1Gh_TF0jUOMRO1RXVq7iL08fklRLjUXkTvQj2PotiBYp6q8FYHQ1djDX1ASJIOBK7bbWQgB8AR1vbKdmB0I663Uam4u5vqOyYdRHpE-2tWhnWLFU64sJ658jIPZxy2-OEkA9RfgnGH2jkShcaOx9bFAfKC4uhcqLlScTLg" frameBorder="0" scrolling="no" allowFullScreen style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', maxWidth: '100v' }}></iframe>
                    </form>
                    </div>
                </div>

 {/*               <form>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>

                    <div class="form-group">
                        <label for="exampleFormControlSelect1">Example select</label>
                        <select class="form-control" id="exampleFormControlSelect1">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Example textarea</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                                        <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>

*/}                <form role="form" id="contactForm" method="POST" action="https://d2b30406.sibforms.com/serve/MUIFAEOvgptA1in3Xc22aY45zqqrH-iNiDZfyVk0jLyV0VmYZpPTRV6WifuZ32VdWyUlci3OhxmprTBA5Crypy5Xo2_a1tkCSXIKPlqT6MRMWBCiu_jdekB5UFAEpqN49y0zi5nco53CA2HFacg619G-moGcA6GHHB_J1F3x1pLdV1KFRv6c-CbyVLyMike5-37_z4EmFxrGW3s3">
							<div className="row">
								<div className="col-md-6 col-sm-6">
									<div className="form-group">
										<label for="name">Name</label>
										<input type="text" className="form-control" id="name" name="LASTNAME" autoComplete="off" />
									</div>
									<div className="form-group">
										<label for="email">Email</label>
										<input type="email" className="form-control" id="email" name="EMAIL" autoComplete="off"  />
									</div>
									<div className="form-group">
										<label for="phone">Phone No</label>
										<input type="text" className="form-control" id="phone" name="SMS" autocomplete="off"  />
									</div>

                                </div>
								<div className="col-md-6 col-sm-6">
									<div className="form-group">
										<label for="message">Message</label>
										<textarea className="form-control" id="message" name="FIRSTNAME" autocomplete="off" rows="9" placeholder="Enter message"></textarea>
									</div>
								</div>
							</div>
							<div className="text-center">
								<button type="submit" className="btn btn-lg btn-primary">Send Message</button>
							</div>
						</form>
								

{/*
<div className="sib-form" style="text-align: center;
         background-color: #EFF2F7;                                           ">
  <div id="sib-form-container" className="sib-form-container">
    <div id="sib-container" className="sib-container--large sib-container--vertical" style="text-align:center; background-color:rgba(255,255,255,1); max-width:540px; border-radius:3px; border-width:1px; border-color:#cacfd5; border-style:solid;">
      <form id="sib-form" method="POST" action="https://d2b30406.sibforms.com/serve/MUIFAEOvgptA1in3Xc22aY45zqqrH-iNiDZfyVk0jLyV0VmYZpPTRV6WifuZ32VdWyUlci3OhxmprTBA5Crypy5Xo2_a1tkCSXIKPlqT6MRMWBCiu_jdekB5UFAEpqN49y0zi5nco53CA2HFacg619G-moGcA6GHHB_J1F3x1pLdV1KFRv6c-CbyVLyMike5-37_z4EmFxrGW3s3">
        <div style="padding: 8px 0;">
          <div className="sib-input sib-form-block">
            <div className="form__entry entry_block">
              <div className="form__label-row ">
                <label className="entry__label" style="font-weight: 700; text-align:left; font-size:16px; text-align:left; font-weight:700; font-family:&quot;Helvetica&quot;, sans-serif; color:#3c4858;" htmlFor="LASTNAME" data-required="*">Name</label>

                <div className="entry__field">
                  <input className="input " maxlength="200" type="text" id="LASTNAME" name="LASTNAME" autoComplete="off" data-required="true" required />
                </div>
              </div>

              <label className="entry__error entry__error--primary" style="font-size:16px; text-align:left; font-family:&quot;Helvetica&quot;, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:3px; border-color:#ff4949;">
              </label>
            </div>
          </div>
        </div>
        <div style="padding: 8px 0;">
          <div className="sib-input sib-form-block">
            <div className="form__entry entry_block">
              <div className="form__label-row ">
                <label className="entry__label" style="font-weight: 700; text-align:left; font-size:16px; text-align:left; font-weight:700; font-family:&quot;Helvetica&quot;, sans-serif; color:#3c4858;" for="EMAIL" data-required="*">Email</label>

                <div class="entry__field">
                  <input className="input " type="text" id="EMAIL" name="EMAIL" autoComplete="off" data-required="true" required />
                </div>
              </div>

              <label className="entry__error entry__error--primary" style="font-size:16px; text-align:left; font-family:&quot;Helvetica&quot;, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:3px; border-color:#ff4949;">
              </label>
            </div>
          </div>
        </div>
        <form role="form" id="contactForm" method="post">
							<div class="row">
								<div class="col-md-6 col-sm-6">
									<div class="form-group">
										<label for="name">Name</label>
										<input type="text" class="form-control" id="name" name="name" placeholder="Enter name">
									</div>
									<div class="form-group">
										<label for="email">Email</label>
										<input type="email" class="form-control" id="email" name="email" placeholder="Enter email">
									</div>
									<div class="form-group">
										<label for="phone">Phone</label>
										<input type="text" class="form-control" id="phone" name="phone" placeholder="Enter phone">
									</div>
								</div>
								<div class="col-md-6 col-sm-6">
									<div class="form-group">
										<label for="message">Message</label>
										<textarea class="form-control" id="message" name="message" rows="9" placeholder="Enter message"></textarea>
									</div>
								</div>
							</div>
							<div class="text-center">
								<button type="submit" class="btn btn-lg btn-theme">Send Message</button>
							</div>
						</form>
        <div style={{ padding: '8px 0'}}>
          <div className="sib-input sib-form-block">
            <div className="form__entry entry_block">
              <div className="form__label-row ">
                <label className="entry__label" htmlFor="FIRSTNAME" data-required="*">Message</label>

                <div className="entry__field">
                  <textarea rows="2" className="input " maxLength="500" id="FIRSTNAME" name="FIRSTNAME" autoComplete="off" data-required="true" required></textarea>
                </div>
              </div>

              <label className="entry__error entry__error--primary" >
              </label>
            </div>
          </div>
        </div>
        <div style={{ padding: '8px 0'}}>
          <div className="sib-form-block" style={{ textAlign: 'center' }}>
            <button className="sib-form-block__button sib-form-block__button-with-loader" form="sib-form" type="submit">
              <svg className="icon clickable__icon progress-indicator__icon sib-hide-loader-icon" viewBox="0 0 512 512">
                <path d="M460.116 373.846l-20.823-12.022c-5.541-3.199-7.54-10.159-4.663-15.874 30.137-59.886 28.343-131.652-5.386-189.946-33.641-58.394-94.896-95.833-161.827-99.676C261.028 55.961 256 50.751 256 44.352V20.309c0-6.904 5.808-12.337 12.703-11.982 83.556 4.306 160.163 50.864 202.11 123.677 42.063 72.696 44.079 162.316 6.031 236.832-3.14 6.148-10.75 8.461-16.728 5.01z" />
              </svg>
              Send Message
            </button>
          </div>
        </div>
        <input type="text" name="email_address_check" value="" className="input--hidden" />
        <input type="hidden" name="locale" value="en" />
        <input type="hidden" name="html_type" value="simple" />
      </form>
    </div>
  </div>
</div>
*/}
	
        </div>
			
    )
}

export default Contact

{/*
                    <iframe title="Contact form" src="https://d2b30406.sibforms.com/serve/MUIFAOerp56TXtFu0YUFZ7DDAojR0fTzDi_-ozBbaA1Gh_TF0jUOMRO1RXVq7iL08fklRLjUXkTvQj2PotiBYp6q8FYHQ1djDX1ASJIOBK7bbWQgB8AR1vbKdmB0I663Uam4u5vqOyYdRHpE-2tWhnWLFU64sJ658jIPZxy2-OEkA9RfgnGH2jkShcaOx9bFAfKC4uhcqLlScTLg" frameBorder="0" scrolling="auto" allowFullScreen style="display: block;margin-left: auto;margin-right: auto;max-width: 100%;"></iframe>


<!-- Begin Brevo Form -->
<!-- START - We recommend to place the below code in head tag of your website html  -->
<style>
  @font-face {
    font-display: block;
    font-family: Roboto;
    src: url(https://assets.brevo.com/font/Roboto/Latin/normal/normal/7529907e9eaf8ebb5220c5f9850e3811.woff2) format("woff2"), url(https://assets.brevo.com/font/Roboto/Latin/normal/normal/25c678feafdc175a70922a116c9be3e7.woff) format("woff")
  }

  @font-face {
    font-display: fallback;
    font-family: Roboto;
    font-weight: 600;
    src: url(https://assets.brevo.com/font/Roboto/Latin/medium/normal/6e9caeeafb1f3491be3e32744bc30440.woff2) format("woff2"), url(https://assets.brevo.com/font/Roboto/Latin/medium/normal/71501f0d8d5aa95960f6475d5487d4c2.woff) format("woff")
  }

  @font-face {
    font-display: fallback;
    font-family: Roboto;
    font-weight: 700;
    src: url(https://assets.brevo.com/font/Roboto/Latin/bold/normal/3ef7cf158f310cf752d5ad08cd0e7e60.woff2) format("woff2"), url(https://assets.brevo.com/font/Roboto/Latin/bold/normal/ece3a1d82f18b60bcce0211725c476aa.woff) format("woff")
  }

  #sib-container input:-ms-input-placeholder {
    text-align: left;
    font-family: "Helvetica", sans-serif;
    color: #c0ccda;
  }

  #sib-container input::placeholder {
    text-align: left;
    font-family: "Helvetica", sans-serif;
    color: #c0ccda;
  }
</style>
<link rel="stylesheet" href="https://sibforms.com/forms/end-form/build/sib-styles.css">
<!--  END - We recommend to place the above code in head tag of your website html -->

<!-- START - We recommend to place the below code where you want the form in your website html  -->
<div class="sib-form" style="text-align: center;
         background-color: #EFF2F7;                                           ">
  <div id="sib-form-container" class="sib-form-container">
    <div id="sib-container" class="sib-container--large sib-container--vertical" style="text-align:center; background-color:rgba(255,255,255,1); max-width:540px; border-radius:3px; border-width:1px; border-color:#cacfd5; border-style:solid;">
      <form id="sib-form" method="POST" action="https://d2b30406.sibforms.com/serve/MUIFAEOvgptA1in3Xc22aY45zqqrH-iNiDZfyVk0jLyV0VmYZpPTRV6WifuZ32VdWyUlci3OhxmprTBA5Crypy5Xo2_a1tkCSXIKPlqT6MRMWBCiu_jdekB5UFAEpqN49y0zi5nco53CA2HFacg619G-moGcA6GHHB_J1F3x1pLdV1KFRv6c-CbyVLyMike5-37_z4EmFxrGW3s3">
        <div style="padding: 8px 0;">
          <div class="sib-input sib-form-block">
            <div class="form__entry entry_block">
              <div class="form__label-row ">
                <label class="entry__label" style="font-weight: 700; text-align:left; font-size:16px; text-align:left; font-weight:700; font-family:&quot;Helvetica&quot;, sans-serif; color:#3c4858;" for="LASTNAME" data-required="*">Name</label>

                <div class="entry__field">
                  <input class="input " maxlength="200" type="text" id="LASTNAME" name="LASTNAME" autocomplete="off" data-required="true" required />
                </div>
              </div>

              <label class="entry__error entry__error--primary" style="font-size:16px; text-align:left; font-family:&quot;Helvetica&quot;, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:3px; border-color:#ff4949;">
              </label>
            </div>
          </div>
        </div>
        <div style="padding: 8px 0;">
          <div class="sib-input sib-form-block">
            <div class="form__entry entry_block">
              <div class="form__label-row ">
                <label class="entry__label" style="font-weight: 700; text-align:left; font-size:16px; text-align:left; font-weight:700; font-family:&quot;Helvetica&quot;, sans-serif; color:#3c4858;" for="EMAIL" data-required="*">Email</label>

                <div class="entry__field">
                  <input class="input " type="text" id="EMAIL" name="EMAIL" autocomplete="off" data-required="true" required />
                </div>
              </div>

              <label class="entry__error entry__error--primary" style="font-size:16px; text-align:left; font-family:&quot;Helvetica&quot;, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:3px; border-color:#ff4949;">
              </label>
            </div>
          </div>
        </div>
        <div style="padding: 8px 0;">
          <div class="sib-sms-field sib-form-block">
            <div class="form__entry entry_block">
              <div class="form__label-row ">
                <label class="entry__label" style="font-weight: 700; text-align:left; font-size:16px; text-align:left; font-weight:700; font-family:&quot;Helvetica&quot;, sans-serif; color:#3c4858;" for="SMS" data-required="*">Phone No</label>

                <div class="sib-sms-input-wrapper" style="direction:ltr">
                  <div class="sib-sms-input" data-placeholder="SMS" data-required="1" data-country-code="NG" data-whatsapp-country-code="NG" data-value="" data-whatsappvalue="" data-attributename="SMS">
                    <div class="entry__field">
                      <select class="input" name="SMS__COUNTRY_CODE" data-required="true">
                        <option value="+93">
                          +93 AF
                        </option>
                        <option value="+358">
                          +358 AX
                        </option>
                        <option value="+355">
                          +355 AL
                        </option>
                        <option value="+213">
                          +213 DZ
                        </option>
                        <option value="+1684">
                          +1684 AS
                        </option>
                        <option value="+376">
                          +376 AD
                        </option>
                        <option value="+244">
                          +244 AO
                        </option>
                        <option value="+1264">
                          +1264 AI
                        </option>
                        <option value="+672">
                          +672 AQ
                        </option>
                        <option value="+1268">
                          +1268 AG
                        </option>
                        <option value="+54">
                          +54 AR
                        </option>
                        <option value="+374">
                          +374 AM
                        </option>
                        <option value="+297">
                          +297 AW
                        </option>
                        <option value="+61">
                          +61 AU
                        </option>
                        <option value="+43">
                          +43 AT
                        </option>
                        <option value="+994">
                          +994 AZ
                        </option>
                        <option value="+1242">
                          +1242 BS
                        </option>
                        <option value="+973">
                          +973 BH
                        </option>
                        <option value="+880">
                          +880 BD
                        </option>
                        <option value="+1246">
                          +1246 BB
                        </option>
                        <option value="+375">
                          +375 BY
                        </option>
                        <option value="+32">
                          +32 BE
                        </option>
                        <option value="+501">
                          +501 BZ
                        </option>
                        <option value="+229">
                          +229 BJ
                        </option>
                        <option value="+1441">
                          +1441 BM
                        </option>
                        <option value="+975">
                          +975 BT
                        </option>
                        <option value="+591">
                          +591 BO
                        </option>
                        <option value="+599">
                          +599 BQ
                        </option>
                        <option value="+387">
                          +387 BA
                        </option>
                        <option value="+267">
                          +267 BW
                        </option>
                        <option value="+47">
                          +47 BV
                        </option>
                        <option value="+55">
                          +55 BR
                        </option>
                        <option value="+246">
                          +246 IO
                        </option>
                        <option value="+673">
                          +673 BN
                        </option>
                        <option value="+359">
                          +359 BG
                        </option>
                        <option value="+226">
                          +226 BF
                        </option>
                        <option value="+257">
                          +257 BI
                        </option>
                        <option value="+855">
                          +855 KH
                        </option>
                        <option value="+237">
                          +237 CM
                        </option>
                        <option value="+1">
                          +1 CA
                        </option>
                        <option value="+238">
                          +238 CV
                        </option>
                        <option value="+1345">
                          +1345 KY
                        </option>
                        <option value="+236">
                          +236 CF
                        </option>
                        <option value="+235">
                          +235 TD
                        </option>
                        <option value="+56">
                          +56 CL
                        </option>
                        <option value="+86">
                          +86 CN
                        </option>
                        <option value="+61">
                          +61 CX
                        </option>
                        <option value="+61">
                          +61 CC
                        </option>
                        <option value="+57">
                          +57 CO
                        </option>
                        <option value="+269">
                          +269 KM
                        </option>
                        <option value="+242">
                          +242 CG
                        </option>
                        <option value="+243">
                          +243 CD
                        </option>
                        <option value="+682">
                          +682 CK
                        </option>
                        <option value="+506">
                          +506 CR
                        </option>
                        <option value="+225">
                          +225 CI
                        </option>
                        <option value="+385">
                          +385 HR
                        </option>
                        <option value="+53">
                          +53 CU
                        </option>
                        <option value="+599">
                          +599 CW
                        </option>
                        <option value="+357">
                          +357 CY
                        </option>
                        <option value="+420">
                          +420 CZ
                        </option>
                        <option value="+45">
                          +45 DK
                        </option>
                        <option value="+253">
                          +253 DJ
                        </option>
                        <option value="+1767">
                          +1767 DM
                        </option>
                        <option value="+1809">
                          +1809 DO
                        </option>
                        <option value="+1829">
                          +1829 DO
                        </option>
                        <option value="+1849">
                          +1849 DO
                        </option>
                        <option value="+593">
                          +593 EC
                        </option>
                        <option value="+20">
                          +20 EG
                        </option>
                        <option value="+503">
                          +503 SV
                        </option>
                        <option value="+240">
                          +240 GQ
                        </option>
                        <option value="+291">
                          +291 ER
                        </option>
                        <option value="+372">
                          +372 EE
                        </option>
                        <option value="+251">
                          +251 ET
                        </option>
                        <option value="+500">
                          +500 FK
                        </option>
                        <option value="+298">
                          +298 FO
                        </option>
                        <option value="+679">
                          +679 FJ
                        </option>
                        <option value="+358">
                          +358 FI
                        </option>
                        <option value="+33">
                          +33 FR
                        </option>
                        <option value="+594">
                          +594 GF
                        </option>
                        <option value="+689">
                          +689 PF
                        </option>
                        <option value="+262">
                          +262 TF
                        </option>
                        <option value="+241">
                          +241 GA
                        </option>
                        <option value="+220">
                          +220 GM
                        </option>
                        <option value="+995">
                          +995 GE
                        </option>
                        <option value="+49">
                          +49 DE
                        </option>
                        <option value="+233">
                          +233 GH
                        </option>
                        <option value="+350">
                          +350 GI
                        </option>
                        <option value="+30">
                          +30 GR
                        </option>
                        <option value="+299">
                          +299 GL
                        </option>
                        <option value="+1473">
                          +1473 GD
                        </option>
                        <option value="+590">
                          +590 GP
                        </option>
                        <option value="+1671">
                          +1671 GU
                        </option>
                        <option value="+502">
                          +502 GT
                        </option>
                        <option value="+44">
                          +44 GG
                        </option>
                        <option value="+224">
                          +224 GN
                        </option>
                        <option value="+245">
                          +245 GW
                        </option>
                        <option value="+592">
                          +592 GY
                        </option>
                        <option value="+509">
                          +509 HT
                        </option>
                        <option value="+672">
                          +672 HM
                        </option>
                        <option value="+379">
                          +379 VA
                        </option>
                        <option value="+504">
                          +504 HN
                        </option>
                        <option value="+852">
                          +852 HK
                        </option>
                        <option value="+36">
                          +36 HU
                        </option>
                        <option value="+354">
                          +354 IS
                        </option>
                        <option value="+91">
                          +91 IN
                        </option>
                        <option value="+62">
                          +62 ID
                        </option>
                        <option value="+98">
                          +98 IR
                        </option>
                        <option value="+964">
                          +964 IQ
                        </option>
                        <option value="+353">
                          +353 IE
                        </option>
                        <option value="+44">
                          +44 IM
                        </option>
                        <option value="+972">
                          +972 IL
                        </option>
                        <option value="+39">
                          +39 IT
                        </option>
                        <option value="+1876">
                          +1876 JM
                        </option>
                        <option value="+81">
                          +81 JP
                        </option>
                        <option value="+44">
                          +44 JE
                        </option>
                        <option value="+962">
                          +962 JO
                        </option>
                        <option value="+7">
                          +7 KZ
                        </option>
                        <option value="+254">
                          +254 KE
                        </option>
                        <option value="+686">
                          +686 KI
                        </option>
                        <option value="+850">
                          +850 KP
                        </option>
                        <option value="+82">
                          +82 KR
                        </option>
                        <option value="+965">
                          +965 KW
                        </option>
                        <option value="+996">
                          +996 KG
                        </option>
                        <option value="+856">
                          +856 LA
                        </option>
                        <option value="+371">
                          +371 LV
                        </option>
                        <option value="+961">
                          +961 LB
                        </option>
                        <option value="+266">
                          +266 LS
                        </option>
                        <option value="+231">
                          +231 LR
                        </option>
                        <option value="+218">
                          +218 LY
                        </option>
                        <option value="+423">
                          +423 LI
                        </option>
                        <option value="+370">
                          +370 LT
                        </option>
                        <option value="+352">
                          +352 LU
                        </option>
                        <option value="+853">
                          +853 MO
                        </option>
                        <option value="+389">
                          +389 MK
                        </option>
                        <option value="+261">
                          +261 MG
                        </option>
                        <option value="+265">
                          +265 MW
                        </option>
                        <option value="+60">
                          +60 MY
                        </option>
                        <option value="+960">
                          +960 MV
                        </option>
                        <option value="+223">
                          +223 ML
                        </option>
                        <option value="+356">
                          +356 MT
                        </option>
                        <option value="+692">
                          +692 MH
                        </option>
                        <option value="+596">
                          +596 MQ
                        </option>
                        <option value="+222">
                          +222 MR
                        </option>
                        <option value="+230">
                          +230 MU
                        </option>
                        <option value="+262">
                          +262 YT
                        </option>
                        <option value="+52">
                          +52 MX
                        </option>
                        <option value="+691">
                          +691 FM
                        </option>
                        <option value="+373">
                          +373 MD
                        </option>
                        <option value="+377">
                          +377 MC
                        </option>
                        <option value="+976">
                          +976 MN
                        </option>
                        <option value="+382">
                          +382 ME
                        </option>
                        <option value="+1664">
                          +1664 MS
                        </option>
                        <option value="+212">
                          +212 MA
                        </option>
                        <option value="+258">
                          +258 MZ
                        </option>
                        <option value="+95">
                          +95 MM
                        </option>
                        <option value="+264">
                          +264 NA
                        </option>
                        <option value="+674">
                          +674 NR
                        </option>
                        <option value="+977">
                          +977 NP
                        </option>
                        <option value="+31">
                          +31 NL
                        </option>
                        <option value="+687">
                          +687 NC
                        </option>
                        <option value="+64">
                          +64 NZ
                        </option>
                        <option value="+505">
                          +505 NI
                        </option>
                        <option value="+227">
                          +227 NE
                        </option>
                        <option value="+234">
                          +234 NG
                        </option>
                        <option value="+683">
                          +683 NU
                        </option>
                        <option value="+672">
                          +672 NF
                        </option>
                        <option value="+1670">
                          +1670 MP
                        </option>
                        <option value="+47">
                          +47 NO
                        </option>
                        <option value="+968">
                          +968 OM
                        </option>
                        <option value="+92">
                          +92 PK
                        </option>
                        <option value="+680">
                          +680 PW
                        </option>
                        <option value="+970">
                          +970 PS
                        </option>
                        <option value="+507">
                          +507 PA
                        </option>
                        <option value="+675">
                          +675 PG
                        </option>
                        <option value="+595">
                          +595 PY
                        </option>
                        <option value="+51">
                          +51 PE
                        </option>
                        <option value="+63">
                          +63 PH
                        </option>
                        <option value="+64">
                          +64 PN
                        </option>
                        <option value="+48">
                          +48 PL
                        </option>
                        <option value="+351">
                          +351 PT
                        </option>
                        <option value="+1787">
                          +1787 PR
                        </option>
                        <option value="+974">
                          +974 QA
                        </option>
                        <option value="+383">
                          +383 XK
                        </option>
                        <option value="+262">
                          +262 RE
                        </option>
                        <option value="+40">
                          +40 RO
                        </option>
                        <option value="+7">
                          +7 RU
                        </option>
                        <option value="+250">
                          +250 RW
                        </option>
                        <option value="+590">
                          +590 BL
                        </option>
                        <option value="+290">
                          +290 SH
                        </option>
                        <option value="+1869">
                          +1869 KN
                        </option>
                        <option value="+1758">
                          +1758 LC
                        </option>
                        <option value="+590">
                          +590 MF
                        </option>
                        <option value="+508">
                          +508 PM
                        </option>
                        <option value="+1784">
                          +1784 VC
                        </option>
                        <option value="+685">
                          +685 WS
                        </option>
                        <option value="+378">
                          +378 SM
                        </option>
                        <option value="+239">
                          +239 ST
                        </option>
                        <option value="+966">
                          +966 SA
                        </option>
                        <option value="+221">
                          +221 SN
                        </option>
                        <option value="+381">
                          +381 RS
                        </option>
                        <option value="+248">
                          +248 SC
                        </option>
                        <option value="+232">
                          +232 SL
                        </option>
                        <option value="+65">
                          +65 SG
                        </option>
                        <option value="+1721">
                          +1721 SX
                        </option>
                        <option value="+421">
                          +421 SK
                        </option>
                        <option value="+386">
                          +386 SI
                        </option>
                        <option value="+677">
                          +677 SB
                        </option>
                        <option value="+252">
                          +252 SO
                        </option>
                        <option value="+27">
                          +27 ZA
                        </option>
                        <option value="+500">
                          +500 GS
                        </option>
                        <option value="+211">
                          +211 SS
                        </option>
                        <option value="+34">
                          +34 ES
                        </option>
                        <option value="+94">
                          +94 LK
                        </option>
                        <option value="+249">
                          +249 SD
                        </option>
                        <option value="+597">
                          +597 SR
                        </option>
                        <option value="+47">
                          +47 SJ
                        </option>
                        <option value="+268">
                          +268 SZ
                        </option>
                        <option value="+46">
                          +46 SE
                        </option>
                        <option value="+41">
                          +41 CH
                        </option>
                        <option value="+963">
                          +963 SY
                        </option>
                        <option value="+886">
                          +886 TW
                        </option>
                        <option value="+992">
                          +992 TJ
                        </option>
                        <option value="+255">
                          +255 TZ
                        </option>
                        <option value="+66">
                          +66 TH
                        </option>
                        <option value="+670">
                          +670 TL
                        </option>
                        <option value="+228">
                          +228 TG
                        </option>
                        <option value="+690">
                          +690 TK
                        </option>
                        <option value="+676">
                          +676 TO
                        </option>
                        <option value="+1868">
                          +1868 TT
                        </option>
                        <option value="+216">
                          +216 TN
                        </option>
                        <option value="+90">
                          +90 TR
                        </option>
                        <option value="+993">
                          +993 TM
                        </option>
                        <option value="+1649">
                          +1649 TC
                        </option>
                        <option value="+688">
                          +688 TV
                        </option>
                        <option value="+256">
                          +256 UG
                        </option>
                        <option value="+380">
                          +380 UA
                        </option>
                        <option value="+971">
                          +971 AE
                        </option>
                        <option value="+44">
                          +44 GB
                        </option>
                        <option value="+1">
                          +1 US
                        </option>
                        <option value="+246">
                          +246 UM
                        </option>
                        <option value="+598">
                          +598 UY
                        </option>
                        <option value="+998">
                          +998 UZ
                        </option>
                        <option value="+678">
                          +678 VU
                        </option>
                        <option value="+58">
                          +58 VE
                        </option>
                        <option value="+84">
                          +84 VN
                        </option>
                        <option value="+1284">
                          +1284 VG
                        </option>
                        <option value="+1340">
                          +1340 VI
                        </option>
                        <option value="+681">
                          +681 WF
                        </option>
                        <option value="+212">
                          +212 EH
                        </option>
                        <option value="+967">
                          +967 YE
                        </option>
                        <option value="+260">
                          +260 ZM
                        </option>
                        <option value="+263">
                          +263 ZW
                        </option>
                      </select>
                    </div>
                    <div class="entry__field" style="width: 100%">
                      <input type="tel" type="text" class="input" id="SMS" name="SMS" autocomplete="off" placeholder="SMS" data-required="true" required />
                    </div>
                  </div>
                  <div class="sib-sms-tooltip">
                    <div class="sib-sms-tooltip__box">
                      The SMS field must contain between 6 and 19 digits and include the country code without using +/0 (e.g. 1xxxxxxxxxx for the United States)
                    </div>
                    <span class="sib-sms-tooltip__icon">?</span>
                  </div>
                </div>
              </div>

              <label class="entry__error entry__error--primary" style="font-size:16px; text-align:left; font-family:&quot;Helvetica&quot;, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:3px; border-color:#ff4949;">
              </label>
              <label class="entry__error entry__error--secondary" style="font-size:16px; text-align:left; font-family:&quot;Helvetica&quot;, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:3px; border-color:#ff4949;">
              </label>
            </div>
          </div>
        </div>
        <div style="padding: 8px 0;">
          <div class="sib-input sib-form-block">
            <div class="form__entry entry_block">
              <div class="form__label-row ">
                <label class="entry__label" style="font-weight: 700; text-align:left; font-size:16px; text-align:left; font-weight:700; font-family:&quot;Helvetica&quot;, sans-serif; color:#3c4858;" for="FIRSTNAME" data-required="*">Message</label>

                <div class="entry__field">
                  <textarea rows="2" class="input " maxlength="500" id="FIRSTNAME" name="FIRSTNAME" autocomplete="off" data-required="true" required></textarea>
                </div>
              </div>

              <label class="entry__error entry__error--primary" style="font-size:16px; text-align:left; font-family:&quot;Helvetica&quot;, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:3px; border-color:#ff4949;">
              </label>
            </div>
          </div>
        </div>
        <div style="padding: 8px 0;">
          <div class="sib-form-block" style="text-align: center">
            <button class="sib-form-block__button sib-form-block__button-with-loader" style="font-size:16px; text-align:center; font-weight:700; font-family:&quot;Helvetica&quot;, sans-serif; color:#FFFFFF; background-color:#1320f5; border-radius:3px; border-width:0px;" form="sib-form" type="submit">
              <svg class="icon clickable__icon progress-indicator__icon sib-hide-loader-icon" viewBox="0 0 512 512">
                <path d="M460.116 373.846l-20.823-12.022c-5.541-3.199-7.54-10.159-4.663-15.874 30.137-59.886 28.343-131.652-5.386-189.946-33.641-58.394-94.896-95.833-161.827-99.676C261.028 55.961 256 50.751 256 44.352V20.309c0-6.904 5.808-12.337 12.703-11.982 83.556 4.306 160.163 50.864 202.11 123.677 42.063 72.696 44.079 162.316 6.031 236.832-3.14 6.148-10.75 8.461-16.728 5.01z" />
              </svg>
              Send Message
            </button>
          </div>
        </div>
        <input type="text" name="email_address_check" value="" class="input--hidden">
        <input type="hidden" name="locale" value="en">
        <input type="hidden" name="html_type" value="simple">
      </form>
    </div>
  </div>
</div>
<!-- END - We recommend to place the below code where you want the form in your website html  -->
<!-- End Brevo Form -->
*/}