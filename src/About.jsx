import React from 'react'
import { motion } from "framer-motion";


const About = () => {
  return (
    <div className="about" id="About">
      <h1 style={{ fontWeight: "700", textAlign: "center" }}>
        About{" "}
        <span
          style={{
            textDecoration: "1px underline ",
            textUnderlineOffset: "4px",
            fontWeight: "400",
          }}
        >
          Our Brand
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
        Passionate About Properties, Dedicated to Your Vision{" "}
      </p>
      <motion.div
        initial={{ opacity: 0, x: 200 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="about-content"
      >
        <img
          src="https://estatedev.in/assets/brand_img-DEuaOSfY.png"
          alt=""
          style={
            {
              // width: "38%",
            }
          }
        />
        <div className="about-text">
          <p
            style={{
              color: "#4B5563",
              lineHeight: "1.5",
            }}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi
            reiciendis iure quasi dolorum non doloribus aliquid aut dolores
            exercitationem vel amet magnam nobis dolor culpa neque ad quas, hic
            ducimus.
          </p>
          <p style={{ color: "#4b5563", margin: "40px 0", lineHeight: "1.5" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ipsa
            neque consequatur? Vero facere totam nobis nihil, sit corrupti ad
            consectetur, aliquid sequi quod hic, nostrum ex autem dolore
            quisquam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Distinctio, possimus voluptatem, autem beatae placeat, provident
            soluta quos eum quidem at et deleniti sint aliquid molestiae ipsum
            cum ipsa eius odit!
          </p>

          <button className="contact-btn"> Learn more</button>
        </div>
      </motion.div>
    </div>
  );
}

export default About
