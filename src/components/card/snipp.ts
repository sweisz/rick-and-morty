const random = Math.round(Math.random() * 6670 + 1);
console.log({ random });

const character = await getCharacter(random);
console.log({ character });

const randomCharacterCard = createCard(character);
container.append(randomCharacterCard);
