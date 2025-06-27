import React, { useState, useEffect } from "react";

const AddFriend = () => {
  const [username, setUsername] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [friends, setFriends] = useState([]);

  const userToken = localStorage.getItem("token");

  const fetchFriends = async () => {
    if (!userToken) return;

    try {
      const response = await fetch(
        "https://minor-project-kkof.onrender.com/users/me/friends",
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        },
      );

      if (response.ok) {
        const data = await response.json();
        setFriends(data);
      } else {
        setStatus("⚠️ Failed to fetch friend list.");
      }
    } catch (error) {
      console.error("Error fetching friends:", error);
      setStatus("⚠️ Something went wrong while fetching friends.");
    }
  };

  useEffect(() => {
    fetchFriends();
  }, []);

  const handleSendRequest = async () => {
    const trimmedUsername = username.trim();

    if (!trimmedUsername) {
      setStatus("⚠️ Please enter a username.");
      return;
    }

    if (!userToken) {
      setStatus("⚠️ You must be logged in to add a friend.");
      return;
    }

    try {
      setLoading(true);
      const response = await fetch(
        "http://localhost:5022/users/addFriendByUsername",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userToken}`,
          },
          body: JSON.stringify({ username: trimmedUsername }),
        },
      );

      const data = await response.json();

      if (response.ok) {
        setStatus(`✅ Friend added: ${trimmedUsername}`);
        setUsername("");
        fetchFriends(); // Refresh friend list
      } else {
        setStatus(`❌ ${data.error}`);
      }
    } catch (error) {
      console.error("Error adding friend:", error);
      setStatus("❌ Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Add a Friend</h2>
        <input
          type="text"
          placeholder="Enter friend's username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={styles.input}
        />
        <button
          onClick={handleSendRequest}
          style={styles.button}
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Friend Request"}
        </button>
        {status && <p style={styles.status}>{status}</p>}
        <hr style={styles.divider} />
        <h3 style={styles.subheading}>Your Friends</h3>
        <ul style={styles.friendList}>
          {friends.length > 0 ? (
            <ul style={styles.friendList}>
              {friends.map((friend) => (
                <li key={friend._id} style={styles.friendItem}>
                  🧑 {friend.name}
                </li>
              ))}
            </ul>
          ) : (
            <p style={styles.noFriends}>You have no friends yet 😔</p>
          )}
        </ul>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#f4f7fc",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
  },
  card: {
    backgroundColor: "#ffffff",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    width: "100%",
    maxWidth: "450px",
    textAlign: "center",
  },
  heading: {
    marginBottom: "20px",
    fontSize: "24px",
    color: "#333",
    fontWeight: "600",
  },
  input: {
    padding: "12px",
    width: "100%",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "16px",
    marginBottom: "15px",
    outline: "none",
  },
  button: {
    width: "100%",
    padding: "12px",
    fontSize: "16px",
    backgroundColor: "#236ae5",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "background-color 0.3s",
  },
  status: {
    marginTop: "15px",
    color: "#555",
    fontWeight: "500",
  },
  divider: {
    margin: "20px 0",
    border: "none",
    height: "1px",
    backgroundColor: "#eee",
  },
  subheading: {
    fontSize: "20px",
    fontWeight: "600",
    color: "#444",
    marginBottom: "10px",
  },
  friendList: {
    listStyleType: "none",
    padding: 0,
    marginTop: "10px",
    textAlign: "left",
  },
  friendItem: {
    padding: "8px 12px",
    backgroundColor: "#f0f4ff",
    borderRadius: "6px",
    marginBottom: "8px",
    fontSize: "15px",
  },
  noFriends: {
    color: "#888",
    fontStyle: "italic",
  },
};

export default AddFriend;
