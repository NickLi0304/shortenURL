const express = require("express");
const router = express.Router();
const shortenURL = require("../../utils/shortenURL");
const URL = require("../../models/URL");

router.get("/", (req, res) => {
  res.render("index");
});

router.post("/", (req, res) => {
  const url = req.body.url.trim();
  const fullUrl = `${req.protocol}://${req.get("host")}${req.originalUrl}`;

  //find url in DB
  URL.findOne({ originalURL: url })
    .lean()
    .then((data) => {
      if (data) {
        let returnUrl = `${req.protocol}://${req.get("host")}${
          req.originalUrl
        }${data.shortURL}`;
        return res.render("success", { url: returnUrl });
      } else {
        //save url to DB because url can not find in DB
        const shortURL = shortenURL(5);
        let returnUrl = `${req.protocol}://${req.get("host")}${
          req.originalUrl
        }${shortURL}`;
        URL.create({ originalURL: url, shortURL: shortURL })
          .then(() => {
            return res.render("success", { url: returnUrl });
          })
          .catch((error) => console.error(error));
      }
    })
    .catch((error) => console.error(error));
});

router.get("/:shortURL", (req, res) => {
  const shortenURL = req.params.shortURL;
  URL.findOne({ shortURL: shortenURL })
    .then((data) => {
      if (data) {
        return res.redirect(data.originalURL);
      } else {
        return res.render("error");
      }
    })
    .catch((error) => console.log(error));
});
module.exports = router;
