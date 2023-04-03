const letters =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

function randomIndex(letters) {
  return Math.floor(Math.random() * letters.length);
}

function shortenURL(len) {
  let shortText = [];
  for (let i = 0; i < len; i++) {
    let Index = randomIndex(letters);
    shortText += letters[Index];
  }
  return shortText;
}

module.exports = shortenURL;
