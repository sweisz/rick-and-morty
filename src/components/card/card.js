import { createElement } from "../../utils/createElement";

export function createCard({ imgSrc, name, species, origin }) {
  return createElement("div", {
    className: "card",
    children: [
      createElement("img", {
        className: "card__portrait",
        src: imgSrc,
      }),
      createElement("h2", {
        className: "card__name",
        innerText: name,
      }),
      createElement("p", {
        className: "card__species",
        innerText: species,
      }),
      createElement("p", {
        className: "card__origin",
        innerText: origin,
      }),
    ],
  });
}
