import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const [showMobileMenu, setMenu] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const username = localStorage.getItem("username");

  const handleLinkClick = () => {
    setMenu(false);
  };

  const handleLogout = async () => {
    try {
      if (token) {
        await fetch("http://localhost:5022/users/logout", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
      }
      localStorage.removeItem("token");
      localStorage.removeItem("username");
      alert("You have been logged out.");
      navigate("/login");
    } catch (err) {
      console.error("Logout failed", err);
      localStorage.removeItem("token");
      localStorage.removeItem("username");
      navigate("/login");
    }
  };

  return (
    <div
      id="Navbar"
      style={{ position: "absolute", top: "0", left: "0", width: "100%" }}
    >
      <div className="navbar container">
        <img src="/logo.svg" alt="Company logo" />

        <ul className="nav-links">
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#Project">Projects</a>
          </li>
          <li>
            <a href="#Contact">Contact us</a>
          </li>
        </ul>

        {/* Desktop Auth Buttons */}
        <div className="auth-buttons desktop-only">
          {token ? (
            <>
              <div className="welcome-text">Welcome, {username}</div>
              <Link to="/addfriend">
                <button className="auth-button">Add Friend</button>
              </Link>
              <button className="auth-button" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/signup">
                <button className="auth-button">Sign Up</button>
              </Link>
              <Link to="/login">
                <button className="auth-button">Login</button>
              </Link>
            </>
          )}
        </div>

        {/* Hamburger */}
        <div
          className="hamburger-menu"
          onClick={() => setMenu(!showMobileMenu)}
        >
          <img
            src="/mobile-nav-logo.svg"
            alt="Hamburger Menu"
            style={{ width: "30px", height: "30px", cursor: "pointer" }}
          />
        </div>
      </div>

      {/* Mobile Menu */}
      {showMobileMenu && (
        <div className="mobile-nav-link">
          <div
            style={{
              padding: "24px",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <img
              src="/close-icon.svg"
              alt="Close Menu"
              onClick={() => setMenu(false)}
              style={{ cursor: "pointer" }}
            />
          </div>
          <ul>
            <li>
              <a href="#Home" onClick={handleLinkClick}>
                Home
              </a>
            </li>
            <li>
              <a href="#About" onClick={handleLinkClick}>
                About
              </a>
            </li>
            <li>
              <a href="#Project" onClick={handleLinkClick}>
                Projects
              </a>
            </li>
            <li>
              <a href="#Contact" onClick={handleLinkClick}>
                Contact us
              </a>
            </li>
          </ul>
          <div className="mobile-auth-buttons">
            {token ? (
              <>
                <div className="welcome-text">Welcome, {username}</div>
                <Link to="/addfriend" onClick={handleLinkClick}>
                  <button className="auth-button">Add Friend</button>
                </Link>
                <button
                  className="auth-button"
                  onClick={() => {
                    handleLogout();
                    setMenu(false);
                  }}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/signup" onClick={handleLinkClick}>
                  <button className="auth-button">Sign Up</button>
                </Link>
                <Link to="/login" onClick={handleLinkClick}>
                  <button className="auth-button">Login</button>
                </Link>
              </>
            )}
          </div>
        </div>
      )}

      <style>{`
        .navbar.container {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
          padding: 20px;
        }

        .nav-links {
          list-style: none;
          display: flex;
          gap: 20px;
          margin: 0;
          padding: 0;
        }

        .nav-links li a {
          text-decoration: none;
          color: #333;
          font-weight: 500;
        }

        .auth-buttons {
          display: flex;
          gap: 10px;
          align-items: center;
        }

        .auth-button {
          padding: 8px 16px;
          background-color: #236ae5d5;
          border: none;
          color: white;
          cursor: pointer;
          border-radius: 4px;
          font-weight: bold;
          transition: background-color 0.3s ease;
        }

        .auth-button:hover {
          background-color: rgba(19, 100, 231, 0.882);
        }

        .welcome-text {
          color: #333;
          font-weight: bold;
          padding: 6px 12px;
          background-color: #f0f0f0;
          border-radius: 4px;
        }

        .hamburger-menu {
          display: none;
        }

        .mobile-nav-link {
          display: none;
        }

        .desktop-only {
          display: flex;
        }

        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }

          .desktop-only {
            display: none;
          }

          .hamburger-menu {
            display: block;
          }

          .mobile-nav-link {
            position: absolute;
            top: 60px;
            right: 0;
            background: white;
            width: 100%;
            display: block;
            z-index: 1000;
            padding: 0 20px 20px 20px;
          }

          .mobile-nav-link ul {
            list-style: none;
            padding: 0;
            margin: 0;
          }

          .mobile-nav-link ul li {
            margin: 20px 0;
          }

          .mobile-nav-link ul li a {
            text-decoration: none;
            font-size: 18px;
            color: #333;
          }

          .mobile-auth-buttons {
            display: flex;
            flex-direction: column;
            gap: 12px;
            margin-top: 20px;
          }

          .mobile-auth-buttons .auth-button,
          .mobile-auth-buttons .welcome-text {
            width: 100%;
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
};

export default NavBar;
