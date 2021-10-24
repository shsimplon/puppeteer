const puppeteer = require("puppeteer");
const nodemailer = require("nodemailer");

require("dotenv").config();
const url = "https://instagram.com";

/////////////////function qui se joue toute seule
(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: "networkidle2" });

  //accept coockie
  await page.click(".aOOlW.bIiDR");

  //login
  await page.type("._2hvTZ.pexuQ.zyHYP", "mily0742009@gmail.com", {
    delay: 100,
  });

  await page.type("[name=password]", process.env.INSTA_PASS, {
    delay: 100,
  });

  //accept connecter

  await page.click(".qF0y9.Igw0E.IwRSH.eGOV_._4EzTm.bkEs3.CovQj.jKUp7.DhRcB");

  //register identifiant
  await page.waitForSelector(".cmbtv>button", { visible: true });
  await page.click(".cmbtv>button");

  //accept notfication
  await page.waitForSelector(".HoLwm", { visible: true });

  await page.click(".HoLwm");
  debugger;
  //   await browser.close();
})();
