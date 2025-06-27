import React, { useState, useEffect } from "react";
import axios from "axios";
import Property from "./Property";
import Loading from "./Loading";

const RealEstate = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchDummyData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://minor-project-kkof.onrender.com/properties`,
        );
        console.log(response);
        setProperties(response.data); // ✅ important fix here!
      } catch (err) {
        console.error("Failed to fetch dummy properties:", err);
        setError("Unable to load dummy properties.");
      } finally {
        setLoading(false);
      }
    };

    fetchDummyData();
  }, []);

  return (
    <>
      <div className="real-estate-container">
        <h1 className="heading">Properties</h1>

        {error && (
          <div
            className="error-message"
            style={{ color: "red", textAlign: "center", marginTop: "10px" }}
          >
            {error}
          </div>
        )}

        <div className="properties-container">
          {loading ? (
            <div className="loader">
              <Loading />
            </div>
          ) : (
            properties.map((property) => (
              <Property key={property._id} property={property} />
            ))
          )}
        </div>
      </div>

      <style jsx>{`
        .real-estate-container {
          padding: 20px;
          background: #f9f9f9;
          min-height: 100vh;
        }

        .heading {
          text-align: center;
          margin-bottom: 20px;
          font-size: 32px;
          font-family: "Poppins", sans-serif;
          color: #333;
        }

        .properties-container {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          justify-content: center;
        }

        .loader {
          text-align: center;
          margin-top: 50px;
        }
      `}</style>
    </>
  );
};

export default RealEstate;
