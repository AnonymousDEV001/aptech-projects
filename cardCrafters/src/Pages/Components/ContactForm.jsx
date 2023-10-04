import React from "react";
import ContactFormCss from "./Css/ContactForm.module.css";
function ContactForm() {
  return (
    <div className={`${ContactFormCss.formOuter} flex center column`}>
      <h3 className="active">Contact Form</h3>
      <div className={`${ContactFormCss.form} flex center`}>
        <form className={`flex column`}>
          <h4 className="active">Get in touch</h4>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message" />
          <button>Send Message</button>
        </form>
        <div className={`${ContactFormCss.ContactDetails} flex column`}>
          <h4>Contact</h4>
          <div style={{margin:"2rem 0"}}>
            <div className={`${ContactFormCss.Email} flex`}>
              <span class={ContactFormCss.materialSymbolsOutlined}>mail</span>
              <p>info@cardcraftershub.com</p>
            </div>
            <div className={`${ContactFormCss.Phone} flex`}>
              <span class={ContactFormCss.materialSymbolsOutlined}>phone</span>
              <p>+1-555-123-4567.</p>
            </div>
            <div className={`${ContactFormCss.Location} flex`}>
              <span class={ContactFormCss.materialSymbolsOutlined}>
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
