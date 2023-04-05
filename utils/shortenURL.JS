const letters =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

function sample(array) {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
}
function shortenURL(len) {
  let shortText = [];
  for (let i = 0; i < len; i++) {
    shortText += sample(letters.split(""));
  }
  return shortText;
}

module.exports = shortenURL;
