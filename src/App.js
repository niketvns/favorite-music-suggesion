import React from "react";
import "./styles.css";
import { useState } from "react";

const music = {
  classical: [
    {
      name: "Channa Mereya",
      rating: "4.5 / 5",
      singer: "Arijit Singh"
    },
    {
      name: "Tu Hi Ho",
      rating: "4 / 5",
      singer: "Arijit Singh"
    },
    {
      name: "Sanwar De Khudara",
      rating: "4.8 / 5",
      singer: "Rahat Fateh Ali Khan"
    }
  ],

  pop: [
    {
      name: "Dheeme Dheeme",
      rating: "3.5 / 5",
      singer: "Toni Kakar"
    },
    {
      name: "Hawa Banke",
      rating: "3.8 / 5",
      singer: "Darshan Raval"
    }
  ],
  rock: [
    {
      name: "Zinda",
      rating: "4.5 / 5",
      singer: "Farhan Akhtar"
    },
    {
      name: "Kabira",
      rating: "4.3 / 5",
      singer: "Tochi Raina, Rekha Bhardwaj"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("classical");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> 🎶 Music Suggesion </h1>
      <p style={{ fontSize: "smaller" }}>
        Checkout my favorite musics. Select a genre to get started
      </p>

      <div>
        {Object.keys(music).map((genre) => (
          <button onClick={() => genreClickHandler(genre)}>{genre}</button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {music[selectedGenre].map((song) => (
            <li
              key={song.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              <div style={{ fontSize: "larger" }}> {song.name} </div>
              <div style={{ fontSize: "smaller" }}>Singer - {song.singer}</div>
              <div style={{ fontSize: "smaller" }}>rating - {song.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
