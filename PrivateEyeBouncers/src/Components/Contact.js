import React,{useEffect} from "react";
import ContactCss from "./css/Contact.module.css";
import indexCss from '../index.module.css'
import { useLocation } from "react-router-dom";

export default function Contact() {
  const location = useLocation();

  return (
    <div className={ContactCss.contact}>
      <div style={location.pathname =="/contact" ? {marginTop:"5rem"}:{}} className="heading">
        {location.pathname != '/contact' && <>
        <h3>Contact Us</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p></>}
        {location.pathname == '/contact' && <>
        <h3 style={{fontSize:"2rem"}}>Feel free to contact us for any questions and doubts​</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p></>}

      </div>
      <div style={location.pathname == "/contact" ? {width:"90%"}:{}} className={ContactCss.contactForm}>
        <div className={ContactCss.formLeft}>
          <div className={ContactCss.formLeftText}>
            <h4>Request Info</h4>
            <p>
              Nunc urna porttitor quis ullamcorper id sed pellentesque risus
              consequat.
            </p>
            <p>
              Massa nunc, nibh vel volutpat vestibulum accumsan ultrices diam
              elementum in ultrices pharetra, consequat..
            </p>
          </div>
        </div>
        <div className={ContactCss.formRight}>
          <form className={ContactCss.form}>
            <div className={`${indexCss.flex} ${indexCss.column} ${indexCss.w90}  ${indexCss.my1Half}`}>
              <label htmlFor="Name">Name</label>
              <input
                className={indexCss.lightGrey}
                id="Name"
                type="text"
                placeholder="Name"
              />
            </div>
            <div className={`${indexCss.flex} ${indexCss.column} ${indexCss.w90}  ${indexCss.my1Half}`}>
              <label htmlFor="Email">Email</label>
              <input
                className={indexCss.lightGrey}
                id="email"
                type="email"
                placeholder="Email"
              />
            </div>

            <div className={`${indexCss.flex} ${indexCss.column} ${indexCss.w90}  ${indexCss.my1Half}`}>
              <label htmlFor="Company">Company</label>
              <input
                className={indexCss.lightGrey}
                id="Company"
                type="text"
                placeholder="Company Name"
              />
            </div>
            <div className={`${indexCss.flex} ${indexCss.column} ${indexCss.w90}  ${indexCss.my1Half}`}>
              <label htmlFor="Message">Message</label>
              <textarea
                className={indexCss.lightGrey}
                id="Message"
                placeholder="Message"
              ></textarea>
            </div>
            <div className={`${indexCss.flex} ${indexCss.column} ${indexCss.w90}  ${indexCss.my1Half}`}>
              <input id={ContactCss.submit} type="submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
