import React from "react";
 import { motion } from "framer-motion";
import onSubmit from "./Web3forms";


const Contact = () => {
  const [result, setResult] = React.useState("");

  

  return (
    <>
      
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="contact"
        id="Contact"
      >
        <h1 style={{ fontWeight: "700",textAlign:"center" }}>
          Contact{" "}
          <span
            style={{
              textDecoration: "1px underline ",
              textUnderlineOffset: "4px",
              fontWeight: "400",
            }}
          >
            With Us
          </span>
        </h1>
        <p
          style={{
            marginTop: "8px",
            marginBottom: "42px",
            color: "gray",
            maxWidth: "20rem",
            textAlign: "center",
          }}
        >
          Ready to Make a Move? Let’s Build Your Future Together{" "}
        </p>
        <form
          className="contact-content"
          onSubmit={(event) => {
            onSubmit(event, "Form submitted successfully",setResult,"Sending...");
          }}
        >
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
            <div className="input-content">
              <p>Your Name</p>
              <input placeholder="Your Name" type="text"></input>
            </div>
            <div className="input-content  ">
              <p> Your Email</p>
              <input placeholder="Your Email" type="email"></input>
            </div>
          </div>
          <div style={{ marginBlock: "24px" }}>
            {" "}
            <p>Message</p>
            <textarea
              placeholder="Message"
              style={{ height: "12rem " }}
            ></textarea>
          </div>
          <button className="send-msg">
            {" "}
            {result ? result : "Send Message"}
          </button>
        </form>
      </motion.div>
      
    </>
  );
};

export default Contact;
