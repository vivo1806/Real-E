//Header.jsx
import headerImg from "./assets/header_img.png"; // Import the image
import NavBar from "./NavBar";
import { motion } from "framer-motion";
export default function Header() {
  return (
    <>
      <div
        id="Header"
        style={{
          backgroundImage: `url(${headerImg})`,
          width: "100%",
          height: "100vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",  
          justifyContent: " center",
          alignItems: "center",
        }}
      >
        {/* Content of the header */}

        <NavBar/>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1.5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", padding: "16px" }}
        >
          <h1
            style={{
              fontSize: "clamp(2rem, 8vw, 82px)",
              fontWeight: 600,
              maxWidth: "48rem",
              color: "white",
              textAlign: "center",
            }}
          >
            Explore homes that fit your dreams
          </h1>
          <div style={{ marginTop: "40px" }}>
            <a href="#Project" className="project-btn">
              Projects
            </a>
            <a
              href="#Contact"
              className="contact-btn"
              style={{ marginLeft: "24px", display: "inline-block" }}
            >
              Contact-Us
            </a>
          </div>
        </motion.div>
      </div>
      
    </>
  );
}
