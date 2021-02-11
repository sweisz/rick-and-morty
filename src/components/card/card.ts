import { createElement } from "../../utils/createElement";

/**
<article class="card">
  <div class="card__inner">
    <div class="card__front">
      <img class="card__portrait" src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="">
      <div class="card__info">
        <h2 class="info__name">Rick Sanchenz</h2>
        <p>🥳🎉 - Alive</p>
        <p class="info__species">Human</p><p class="info__origin">Earth (C-137)</p>
      </div>
    </div>
    <div class="card__back">
      <p>Location TBA</p>
    </div>
  </div>
</article>
 */

export function createCard({ imgSrc, name, status, species, origin }) {
  return createElement("div", {
    className: "card",
    childs: [
      createElement("div", {
        className: "card__inner",
        childs: [
          createElement("div", {
            className: "card__front",
            childs: [
              createElement("img", {
                className: "card__portrait",
                src: imgSrc,
              }),
              createElement("h2", {
                className: "card__name",
                innerText: name,
              }),
              createElement("p", {
                className: "card__status",
                innerText: `${status === "Alive" ? "🤡" : "💀"} - ${status}`,
              }),
              createElement("p", {
                className: "card__species",
                innerText: species,
              }),
              createElement("p", {
                className: "card__origin",
                innerText: origin.name,
              }),
            ],
          }),
          createElement("div", {
            className: "card__back",
            childs: [
              createElement("p", {
                innerHTML: "Dark Side of the Character.",
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
