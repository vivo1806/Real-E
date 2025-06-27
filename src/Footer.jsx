import React from "react";
import onSubmit from "./Web3forms";
const Footer = () => {
    const [result, setResult] = React.useState("");
  
  return (
    <div className="footer" id="Footer">
      <div
        className="footer-content"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div className="estate" style={{ width: "33%" }}>
          <img
            src="https://estatedev.in/assets/logo_dark-BlEproOr.svg"
            alt="logo"
          />
          <p style={{ color: "#9ca3af" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text.
          </p>
        </div>
        <div
          className="company"
          style={{
            width: "20%",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <h3>Company</h3>
          <p><a href="#Header">Home</a></p>
          <p><a href="#About">About us</a> </p>
          <p><a href="#Contact">Contact</a> </p>
          <p><a href="#Footer">Privacy Policy</a></p>
        </div>
        <div className="subscribe">
          <h3>Subscribe to our newsletter</h3>
          <p>
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <form className="subscribe-form" onSubmit={(event)=>{onSubmit(event,"You are Subscribed successfully",setResult,"Subscribing...")}}>
            <input
              type="email"
              placeholder="Enter your email"
              className="subscribe-input"
            />
            <button className="subscribe-button">{result? result:"Subscribe"}</button>
          </form>
        </div>
      </div>
      <hr style={{ marginBlock:"40px"}} />
      <div className="copyright">
        {" "}
        Copyright 2024 © Ab5114. <span>All Right Reserved</span>.
      </div>
    </div>
  );
};

export default Footer;
