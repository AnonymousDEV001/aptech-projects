import React from 'react'
import FooterCss from './Css/Footer.module.css'
import NavbarCss from './Css/Navbar.module.css'

function Footer() {
  return (
    <div class={FooterCss.footer}>
    <footer>
      <div class={FooterCss.footerUp}>
        <div class="flex column">
          <div class={`flex ${FooterCss.logo} ${NavbarCss.logo}`}>
            <img src="logo.svg" alt="" />
            <p>Card Crafters</p>
          </div>
          <div class={FooterCss.contactInfo}>
            <p>Email Address: info@cardcraftershub.com</p>
            <p>Phone Number: +1-555-123-4567</p>
            <p>Mailing Address: [Your Physical Address]</p>
          </div>
        </div>
        <div class={FooterCss.footerNav}>
          <p style={{marginBottom:" 0.5rem",fontSize:"1.1rem"}}>
            Navigation Links
          </p>
          <p>Home</p>
          <p>About Us</p>
          <p>Events</p>
          <p>Shop</p>
          <p>Contact Us</p>
          <p>FAQs</p>
          <p>Blog (if applicable)</p>
          <p>Privacy Policy</p>
          <p>Terms and Conditions</p>
        </div>
        <div class={FooterCss.footerNav}>
        <p style={{marginBottom:" 0.5rem",fontSize:"1.1rem"}}>
            Social Media Links
          </p>
          <p>Instagram</p>
          <p>Facebook</p>
          <p>Google</p>
        </div>
        <div class={FooterCss.footerNav}>
        <p style={{marginBottom:" 0.5rem",fontSize:"1.1rem"}}>
            Customer Service:
          </p>
          <p>Returns and Exchanges</p>
          <p>Shipping Information</p>
          <p>Frequently Asked Questions</p>
          <p>Contact Us</p>
        </div>
      </div>
      <div class={FooterCss.footerBottom}>
        <p>© 2023 CardCrafters All rights reserved.</p>
      </div>
    </footer>
  </div>
  )
}

export default Footer
