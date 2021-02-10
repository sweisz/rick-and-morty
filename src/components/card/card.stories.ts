import "./card.css";
import { createCard } from "./card";
import { createElement } from "../../utils/createElement";
import {
  getCharacter,
  getCharacterCount,
  getCharacters,
} from "../../utils/api";

export default {
  title: "Components/Card",
  parameters: { layout: "centered" },
};

export const Rick = () =>
  createCard({
    imgSrc: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    name: "Rick Sanchenz",
    status: "Alive",
    species: "Human",
    origin: { name: "Earth (C-137)" },
  });

export const Multiple = () => {
  const characters = [
    {
      imgSrc: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      name: "Rick Sanchenz",
      status: "Alive",
      species: "Human",
      origin: { name: "Earth (C-137)" },
    },
    {
      imgSrc: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
      name: "Morty Smith",
      status: "Dead",
      species: "Human",
      origin: { name: "Earth (C-137)" },
    },
  ];

  const container = createElement("article", {
    className: "container",
    childs: characters.map((character) => createCard(character)),
  });

  return container;
};

export const CharacterFromAPI = (args, { loaded: { character } }) => {
  return createCard(character);
};

CharacterFromAPI.loaders = [
  async () => ({
    character: await getCharacter(128),
  }),
];

export const CharactersFromAPI = (args, { loaded: { characters } }) => {
  const container = createElement("article", {
    className: "container",
    childs: characters.map((character) => createCard(character)),
  });
  return container;
};
CharactersFromAPI.loaders = [
  async () => ({
    characters: await getCharacters(),
  }),
];

export const RandomCharacter = () => {
  const randomButton = createElement("button", {
    innerText: "Load random character",
    onclick: async () => {
      // Verify each step (alert, console.log)
      // 1) generate random character id
      const characterCount = await getCharacterCount();

      const random = Math.floor(Math.random() * characterCount) + 1;
      console.log({ random, characterCount });

      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_number_between_two_values
      // 2) getCharacter from API
      const character = await getCharacter(random);
      console.log({ character });

      // 3) create card
      const randomCharacterCard = createCard(character);

      // 4) append card
      // container.append(randomCharacterCard);
      // 5) make sure to only display one character
      // parentNode.replaceChild(newNode, oldNode);

      container.replaceChild(randomCharacterCard, container.lastChild);

      // 6) feel awesome 🐱‍👤
    },
  });

  const container = createElement("div", {
    className: "container",
    childs: [randomButton, createElement("div", {})],
  });
  return container;
};
