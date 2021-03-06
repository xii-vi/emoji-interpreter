import "./styles.css";
import React, { useState } from "react";

const emojiDictionary = {
  "ð": "Happy",
  "âĪïļ": "Heart",
  "ð": "Broken Heart",
  "ð": "Beaming face",
  "ð": "Laughing",
  "ðĪĢ": "Hard laughing",
  "ð": "Happy with big eyes",
  "ð": "Very happy",
  "ð": "Grinning face with sweat",
  "ðĨ°": "Feeling loved and cared",
  "ð": "Kissing",
  "ðĪĐ": "Amused",
  "ðĪ": "Thinking",
  "ðĨ": "Sad",
  "ðĢ": "Stressed",
  "ðī": "Sleepy",
  "ð": "Naughty",
  "ð": "Rolling eyes",
  "ð": "See-No-Evil Monkey",
  "ð": "Hear-No-Evil Monkey",
  "ð": "Speak-No-Evil Monkey",
  "ðĨ": "Collision",
  "ðŦ": "Dizzy",
  "ðĶ": "Sweat Droplets",
  "ðĻ": "Dashing Away",
  "ðĩ": "Monkey Face",
  "ð": "Monkey",
  "ðĶ": "Gorilla",
  "ðĶ§": "Orangutan",
  "ðķ": "Dog Face",
  "ð": "Dog",
  "ðĶŪ": "Guide Dog",
  "ðâðĶš": "Service Dog",
  "ðĐ": "Poodle",
  "ðš": "Wolf",
  "ðĶ": "Fox",
  "ðĶ": "Raccoon",
  "ðą": "Cat Face",
  "ð": "Ewe",
  "ð": "Goat",
  "ðŠ": "Camel",
  "ðŦ": "Two-Hump Camel",
  "ðĶ": "Llama",
  "ðĶ": "Giraffe",
  "ðĶ": "Rhinoceros",
  "ðĶ": "Hippopotamus",
  "ðž": "Panda",
  "ðĶĨ": "Sloth",
  "ðĶĶ": "Otter",
  "ðĶĻ": "Skunk",
  "ðĶ": "Kangaroo",
  "ðĶĄ": "Badger",
  "ðū": "Paw Prints",
  "ðĶ": "Turkey",
  "ð": "Chicken",
  "ð": "Rooster",
  "ðĢ": "Hatching Chick",
  "ðĪ": "Baby Chick",
  "ðĨ": "Front-Facing Baby Chick",
  "ðĶ": "Bird",
  "ð§": "Penguin",
  "ðĶ": "Duck",
  "ðĶĒ": "Swan",
  "ðĶ": "Owl",
  "ðĶĐ": "Flamingo",
  "ðĶ": "Peacock",
  "ðĶ": "Parrot",
  "ðļ": "Frog",
  "ð": "Crocodile",
  "ðĒ": "Turtle",
  "ðĶ": "Lizard",
  "ð": "Snake",
  "ðē": "Dragon Face",
  "ð": "Dragon",
  "ðĶ": "Sauropod",
  "ðĶ": "T-Rex",
  "ðģ": "Spouting Whale",
  "ð": "Whale",
  "ð": "Bouquet",
  "ðļ": "Cherry Blossom",
  "ðŪ": "White Flower",
  "ðđ": "Rose",
  "ðĨ": "Wilted Flower",
  "ðš": "Hibiscus",
  "ðŧ": "Sunflower",
  "ðž": "Blossom",
  "ð·": "Tulip",
  "ðą": "Seedling",
  "ðē": "Evergreen Tree",
  "ðģ": "Deciduous Tree",
  "ðī": "Palm Tree",
  "ðĩ": "Cactus",
  "ðū": "Sheaf of Rice",
  "ðŋ": "Herb",
  "ð": "Four Leaf Clover",
  "ð": "New Moon",
  "ð": "Waxing Crescent Moon",
  "ð": "First Quarter Moon",
  "ð": "Waxing Gibbous Moon",
  "ð": "Full Moon",
  "ð": "Waning Gibbous Moon",
  "ð": "Last Quarter Moon",
  "ð": "Waning Crescent Moon",
  "ð": "Crescent Moon",
  "ð": "New Moon Face",
  "ð": "First Quarter Moon Face",
  "ð": "Last Quarter Moon Face",
  "âïļ": "Sun",
  "ð": "Full Moon Face",
  "ð": "Sun with Face",
  "â­": "Star",
  "ð": "Glowing Star"
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
          <div> ÂĐ2021 </div>
        </h4>
      </footer>
    </div>
  );
}
