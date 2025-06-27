import React from 'react'
 import profileImg1 from "./assets/profile_img_1-zaNAVS_M.png";
 import profileImg2 from "./assets/profile_img_2-dUNED7vt.png";
 import profileImg3 from "./assets/profile_img_3-JahKdPEp.png";
import svgIcon from "./assets/svgicon.svg";
import { motion } from "framer-motion";




const Testimonials = () => {
  return (
    <div style={{ overflow: "hidden" }}>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="testimonial"
        id="Testimonials"
      >
        <h1 style={{ fontWeight: "700", textAlign: "center" }}>
          Customer{" "}
          <span
            style={{
              textDecoration: "1px underline ",
              textUnderlineOffset: "4px",
              fontWeight: "400",
            }}
          >
            Testimonials
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
          Crafting Spaces, Building Legacies—Explore Our Portfolion{" "}
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "32px",
            flexWrap: "wrap",
          }}
        >
          <div className="t-card shadow-lg">
            <img src={profileImg1} alt="profileImg" />
            <h3>Donald Jackman</h3>
            <p
              style={{
                color: "#6b7280",
                fontSize: "14px",
                marginBottom: "16px",
              }}
            >
              Marketing Manager
            </p>
            <div className="rating">
              <img src={svgIcon} alt="stars" />
              <img src={svgIcon} alt="stars" />
              <img src={svgIcon} alt="stars" />
              <img src={svgIcon} alt="stars" />
              <img src={svgIcon} alt="stars" />
            </div>

            <p style={{ color: "#4b5563", lineHeight: "1.5" }}>
              From the very first meeting, they understood my vision and helped
              me find the perfect property. Their attention to detail and
              commitment to client satisfaction is unmatched
            </p>
          </div>
          <div className="t-card shadow-lg">
            <img src={profileImg2} alt="profile Image" />
            <h3>Richard Nelson</h3>
            <p
              style={{
                color: "#6b7280",
                fontSize: "14px",
                marginBottom: "16px",
              }}
            >
              UI/UX Designer
            </p>
            <div className="rating">
              <img src={svgIcon} alt="starsstars" />
              <img src={svgIcon} alt="starsstars" />
              <img src={svgIcon} alt="starsstars" />
              <img src={svgIcon} alt="starsstars" />
              <img src={svgIcon} alt="starsstars" />
            </div>
            <p style={{ color: "#4b5563", lineHeight: "1.5" }}>
              From the very first meeting, they understood my vision and helped
              me find the perfect property. Their attention to detail and
              commitment to client satisfaction is unmatched.
            </p>
          </div>
          <div className="t-card shadow-lg">
            <img src={profileImg3} alt="profile Image" />
            <h3>James Washington</h3>
            <p
              style={{
                color: "#6b7280",
                fontSize: "14px",
                marginBottom: "16px",
              }}
            >
              Co-Founder
            </p>
            <div className="rating">
              <img src={svgIcon} alt="stars" />
              <img src={svgIcon} alt="stars" />
              <img src={svgIcon} alt="stars" />
              <img src={svgIcon} alt="stars" />
              <img src={svgIcon} alt="stars" />
            </div>
            <p style={{ color: "#4b5563", lineHeight: "1.5" }}>
              From the very first meeting, they understood my vision and helped
              me find the perfect property. Their attention to detail and
              commitment to client satisfaction is unmatched.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Testimonials
