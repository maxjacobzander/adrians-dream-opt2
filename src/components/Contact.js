import React from 'react';
import emailjs from 'emailjs-com';
import styled from 'styled-components';

const Contact = () => {
    const ContactWrapper = styled.div`
        background: #a3d1e7;
        height: auto;
        width: 100%;
        margin-top: -65px;
        font-size: 20px;
        padding-bottom: 30px;
    `

    const ContactHeader = styled.h1`
        font-family: turbinado-pro, sans-serif;
        font-weight: 700;
        font-style: normal;
        text-align: center;
        color: #1a3959;
        font-size: 6rem;
    `

    const ContactBlurb = styled.h3`
        width: 80%;
        align-items: center;
        text-align: center;
        margin: auto;
        font-family: factoria, serif;
        font-weight: 300;
        font-style: normal;
        line-height: 2;
        color: #1a3959;
        margin-top: -20px;
        margin-bottom: 20px;
    `

    const ContactForm = styled.div`
        width: 80%;
        font-family: factoria, serif;
        font-weight: 300;
        font-style: normal;
        margin: auto;
        input[type=text] {
            width: 60%;
            padding: 12px 20px;
            margin: 8px 0;
            box-sizing: border-box;
            font-family: factoria, serif;
            font-weight: 300;
            font-style: normal;
            font-size: 1rem;
            @media screen and (max-width: 960px) {
                width: auto;
            }
        }
        textarea[type=text] {
            width: 60%;
            height: 100px;
            padding: 12px 20px;
            margin: 8px 0;
            box-sizing: border-box;
            font-family: factoria, serif;
            font-weight: 300;
            font-style: normal;
            font-size: 1rem;
            @media screen and (max-width: 960px) {
                width: auto;
            }
        }
        input[type=submit] {
            width: 20%;
            padding: 12px 20px;
            margin: 8px 0;
            box-sizing: border-box;
            font-family: turbinado-pro, sans-serif;
            font-weight: 700;
            font-style: bold;
            font-size: 1.3rem;
            @media screen and (max-width: 960px) {
                width: auto;
            }
        }
    `

    function sendEmail(e) {
      e.preventDefault();
    
      emailjs.sendForm(process.env.REACT_APP_ENV_SERVICE_ID, process.env.REACT_APP_ENV_TEMPLATE_ID, e.target, process.env.REACT_APP_ENV_USER_ID)
        .then((result) => {
            console.log(result.text);  alert("Message sent successfully!");
        }, (error) => {
            console.log(error.text); alert("Failed."+error);
        });
        e.target.reset()
    }
    
    return (
        <ContactWrapper>
        <br />
          <ContactHeader>
          get in touch
          </ContactHeader>
          <ContactBlurb>
              To get in touch with us about purchasing any of our products, discuss scheduling a workshop, or to ask any others questions, please fill out the form below!
          </ContactBlurb>
            <ContactForm>
                <form onSubmit={sendEmail}>
                    <input type="text" placeholder="Name (Required)" name="name" required />
                    <br />
                    <input type="text" placeholder="Email (Required)" name="email" required />
                    <br />
                    <textarea type="text" placeholder="Your Message (Required)" name="message" required />
                    <br />
                    <input type="submit" value="Send Message" />
                </form>
            </ContactForm>
        </ContactWrapper>
    );
}

export default Contact;