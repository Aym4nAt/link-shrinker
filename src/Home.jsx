import React, { useState } from "react";

function Home() {
  const [longUrl, setLongUrl] = useState("");
  const [shortCode, setShortCode] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const handleShorten = () => {
    if (!longUrl || !shortCode) {
      alert("Please fill both fields");
      return;
    }

    setShortUrl(`https://cpt405.co/${shortCode}`);
  };

  return (
    <div style={{ width: "60%", margin: "40px auto", textAlign: "left" }}>
      <h2 style={{ textAlign: "center" }}>Link Shrinker</h2>

      <label>Long URL:</label>
      <input
        type="text"
        value={longUrl}
        onChange={(e) => setLongUrl(e.target.value)}
        style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
      />

      <label>Enter short code:</label>
      <input
        type="text"
        value={shortCode}
        onChange={(e) => setShortCode(e.target.value)}
        style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
      />

      <button
        onClick={handleShorten}
        style={{
          padding: "8px 16px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          cursor: "pointer"
        }}
      >
        Shorten
      </button>

      {shortUrl && (
        <div style={{ marginTop: "20px", fontWeight: "bold" }}>
          Short URL:{" "}
          <a href={shortUrl} target="_blank">
            {shortUrl}
          </a>
        </div>
      )}
    </div>
  );
}

export default Home;
