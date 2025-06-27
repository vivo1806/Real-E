import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";

const Property = ({ property }) => {
  const { _id, title, description, price, owner, comments = [] } = property;
  const [newComment, setNewComment] = useState("");
  const [allComments, setAllComments] = useState(comments);
  const [loading, setLoading] = useState(false);
  const [showFriendsOnly, setShowFriendsOnly] = useState(false);

  // Format price with currency symbol
  const formattedPrice = `₹${price.toLocaleString()}`;

  // Fetch comments (all or only friends')

  const fetchComments = useCallback(async () => {
    try {
      const token = localStorage.getItem("token");
      const endpoint = showFriendsOnly
        ? `https://minor-project-kkof.onrender.com/properties/${_id}/comments/friends`
        : `https://minor-project-kkof.onrender.com/properties/${_id}`;

      const response = await axios.get(endpoint, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const commentsData = showFriendsOnly
        ? response.data
        : response.data.comments;
      setAllComments(commentsData);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  }, [_id, showFriendsOnly]);
  useEffect(() => {
    fetchComments();
  }, [fetchComments]);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `https://minor-project-kkof.onrender.com/properties/${_id}/comment`,
        { text: newComment },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      const addedComment = response.data[response.data.length - 1]; // Get the newly added comment

      setAllComments((prevComments) => [
        { ...addedComment, text: newComment },
        ...prevComments,
      ]);
      setNewComment("");
    } catch (error) {
      console.error("Error posting comment:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="property-card">
      <div className="property-card-content">
        <h2 className="property-card-title">{title}</h2>
        <p className="property-card-description">{description}</p>
        <p className="property-card-price">Price: {formattedPrice}</p>
        <p className="property-card-owner">
          Owner: {owner.name} (
          <a href={`mailto:${owner.email}`}>{owner.email}</a>)
        </p>

        {/* Comment Form */}
        <form onSubmit={handleCommentSubmit} className="comment-form">
          <input
            type="text"
            placeholder="Add a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="comment-input"
            disabled={loading}
          />
          <button type="submit" className="comment-button" disabled={loading}>
            {loading ? "Posting..." : "Post"}
          </button>
        </form>

        {/* Toggle: Show only friends' comments */}
        <div style={{ marginTop: "16px" }}>
          <label style={{ fontWeight: "bold", marginRight: "8px" }}>
            <input
              type="checkbox"
              checked={showFriendsOnly}
              onChange={() => setShowFriendsOnly((prev) => !prev)}
            />
            {" Show only friends' comments"}
          </label>
        </div>

        {/* Comments */}
        <div className="comments-section">
          <h4>Comments:</h4>
          {allComments.length === 0 ? (
            <p>No comments yet. Be the first to comment!</p>
          ) : (
            allComments.map((comment, index) => (
              <div key={index} className="comment-item">
                <strong>{comment.user?.name || "Unknown User"}:</strong>{" "}
                {comment.text}
              </div>
            ))
          )}
        </div>
      </div>

      <style>{`
        .property-card {
          background-color: #fff;
          border: 1px solid #ddd;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          margin: 16px;
          padding: 16px;
          max-width: 400px;
        }
        .property-card-title {
          font-size: 1.5em;
          margin-bottom: 8px;
          color: #333;
        }
        .property-card-description {
          color: #555;
          margin-bottom: 12px;
        }
        .property-card-price {
          font-weight: bold;
          color: #2e7d32;
          margin-bottom: 8px;
        }
        .property-card-owner {
          font-size: 0.9em;
          color: #666;
        }
        .property-card-owner a {
          color: #1a73e8;
          text-decoration: none;
        }
        .property-card-owner a:hover {
          text-decoration: underline;
        }
        .comment-form {
          margin-top: 12px;
          display: flex;
          gap: 8px;
        }
        .comment-input {
          flex: 1;
          padding: 8px;
          border-radius: 4px;
          border: 1px solid #ccc;
        }
        .comment-button {
          padding: 8px 16px;
          background-color: #1a73e8;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        .comment-button:hover {
          background-color: #155ab6;
        }
        .comments-section {
          margin-top: 16px;
          max-height: 200px;
          overflow-y: auto;
          padding-right: 8px;
        }
        .comments-section::-webkit-scrollbar {
          width: 6px;
        }
        .comments-section::-webkit-scrollbar-thumb {
          background-color: rgba(0, 0, 0, 0.2);
          border-radius: 4px;
        }
        .comment-item {
          background: #f9f9f9;
          padding: 8px;
          margin-bottom: 6px;
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
};

export default Property;
