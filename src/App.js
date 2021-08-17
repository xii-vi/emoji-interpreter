import "./styles.css";
import React, { useState } from "react";

const emojiDictionary = {
  "😀": "Happy",
  "❤️": "Heart",
  "💔": "Broken Heart",
  "😁": "Beaming face",
  "😂": "Laughing",
  "🤣": "Hard laughing",
  "😃": "Happy with big eyes",
  "😄": "Very happy",
  "😅": "Grinning face with sweat",
  "🥰": "Feeling loved and cared",
  "😘": "Kissing",
  "🤩": "Amused",
  "🤔": "Thinking",
  "😥": "Sad",
  "😣": "Stressed",
  "😴": "Sleepy",
  "😛": "Naughty",
  "🙄": "Rolling eyes",
  "🙈": "See-No-Evil Monkey",
  "🙉": "Hear-No-Evil Monkey",
  "🙊": "Speak-No-Evil Monkey",
  "💥": "Collision",
  "💫": "Dizzy",
  "💦": "Sweat Droplets",
  "💨": "Dashing Away",
  "🐵": "Monkey Face",
  "🐒": "Monkey",
  "🦍": "Gorilla",
  "🦧": "Orangutan",
  "🐶": "Dog Face",
  "🐕": "Dog",
  "🦮": "Guide Dog",
  "🐕‍🦺": "Service Dog",
  "🐩": "Poodle",
  "🐺": "Wolf",
  "🦊": "Fox",
  "🦝": "Raccoon",
  "🐱": "Cat Face",
  "🐑": "Ewe",
  "🐐": "Goat",
  "🐪": "Camel",
  "🐫": "Two-Hump Camel",
  "🦙": "Llama",
  "🦒": "Giraffe",
  "🦏": "Rhinoceros",
  "🦛": "Hippopotamus",
  "🐼": "Panda",
  "🦥": "Sloth",
  "🦦": "Otter",
  "🦨": "Skunk",
  "🦘": "Kangaroo",
  "🦡": "Badger",
  "🐾": "Paw Prints",
  "🦃": "Turkey",
  "🐔": "Chicken",
  "🐓": "Rooster",
  "🐣": "Hatching Chick",
  "🐤": "Baby Chick",
  "🐥": "Front-Facing Baby Chick",
  "🐦": "Bird",
  "🐧": "Penguin",
  "🦆": "Duck",
  "🦢": "Swan",
  "🦉": "Owl",
  "🦩": "Flamingo",
  "🦚": "Peacock",
  "🦜": "Parrot",
  "🐸": "Frog",
  "🐊": "Crocodile",
  "🐢": "Turtle",
  "🦎": "Lizard",
  "🐍": "Snake",
  "🐲": "Dragon Face",
  "🐉": "Dragon",
  "🦕": "Sauropod",
  "🦖": "T-Rex",
  "🐳": "Spouting Whale",
  "🐋": "Whale",
  "💐": "Bouquet",
  "🌸": "Cherry Blossom",
  "💮": "White Flower",
  "🌹": "Rose",
  "🥀": "Wilted Flower",
  "🌺": "Hibiscus",
  "🌻": "Sunflower",
  "🌼": "Blossom",
  "🌷": "Tulip",
  "🌱": "Seedling",
  "🌲": "Evergreen Tree",
  "🌳": "Deciduous Tree",
  "🌴": "Palm Tree",
  "🌵": "Cactus",
  "🌾": "Sheaf of Rice",
  "🌿": "Herb",
  "🍀": "Four Leaf Clover",
  "🌑": "New Moon",
  "🌒": "Waxing Crescent Moon",
  "🌓": "First Quarter Moon",
  "🌔": "Waxing Gibbous Moon",
  "🌕": "Full Moon",
  "🌖": "Waning Gibbous Moon",
  "🌗": "Last Quarter Moon",
  "🌘": "Waning Crescent Moon",
  "🌙": "Crescent Moon",
  "🌚": "New Moon Face",
  "🌛": "First Quarter Moon Face",
  "🌜": "Last Quarter Moon Face",
  "☀️": "Sun",
  "🌝": "Full Moon Face",
  "🌞": "Sun with Face",
  "⭐": "Star",
  "🌟": "Glowing Star"
};

var emojiWeKnow = Object.keys(emojiDictionary);

export default function App() {
  var [userInput, setUserInput] = useState("");

  function emojiHandler(event) {
    var userEntry = event.target.value;
    var meaning = emojiDictionary[userEntry];
    if (meaning === undefined) {
      meaning = "we dont have in our database";
    }
    setUserInput(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setUserInput(meaning);
  }
  return (
    <div className="App">
      <h1 style={{ paddingTop: "2rem" }}>Feelin' Good</h1>
      <input style={{ paddingTop: "2rem" }} onChange={emojiHandler}></input>

      <h3
        style={{
          fontFamily: "sans-serif",
          fontWeight: "bold",
          paddingTop: "2rem"
        }}
      >
        <em>{userInput} </em>
      </h3>

      <h2 style={{ paddingTop: "2rem" }}> emoji we know </h2>
      {emojiWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{
              fontSize: "2rem",
              padding: "0.5rem",
              cursor: "pointer"
            }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}

      <footer>
        <h4>
          Connect with me.
          <a href="https://miportafolio-casa.netlify.app"> My Portfolio </a>
          <div> ©2021 </div>
        </h4>
      </footer>
    </div>
  );
}
