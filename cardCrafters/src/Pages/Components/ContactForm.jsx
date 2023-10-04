import React, { useState, useEffect } from "react";
import ContactFormCss from "./Css/ContactForm.module.css";
function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let url = "http://127.0.0.1:8000/contact/";

      await fetch(url, {
        method: "POST",
        contentType: "application/json",
        body: JSON.stringify({
          Name: name,
          Email: email,
          Message: message,
        }),
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className={`${ContactFormCss.formOuter} flex center column`}>
      <h3 className="active">Contact Form</h3>
      <div className={`${ContactFormCss.form} flex center`}>
        <form onSubmit={handleSubmit} className={`flex column`}>
          <h4 className="active">Get in touch</h4>
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
            type="text"
            placeholder="Name"
          />
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            type="email"
            placeholder="Email"
          />
          <textarea
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            value={message}
            placeholder="Message"
          />
          <button>Send Message</button>
        </form>
        <div className={`${ContactFormCss.ContactDetails} flex column`}>
          <h4>Contact</h4>
          <div style={{ margin: "2rem 0" }}>
            <div className={`${ContactFormCss.Email} flex`}>
              <span class={`material-symbols-outlined white`}>mail</span>
              <p>info@cardcraftershub.com</p>
            </div>
            <div className={`${ContactFormCss.Phone} flex`}>
              <span class={`material-symbols-outlined white`}>phone</span>
              <p>+1-555-123-4567.</p>
            </div>
            <div className={`${ContactFormCss.Location} flex`}>
              <span  class={`material-symbols-outlined white`}>
                location_on
              </span>
              <p>[Your Physical Address] [City, State, ZIP]</p>
            </div>
          </div>
          <div className={`${ContactFormCss.businessDetails}`}>
            <h5>Business Hours:</h5>
            <p>Monday - Friday: 9:00 AM - 6:00 PM (EST)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
