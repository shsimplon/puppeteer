const puppeteer = require("puppeteer");
const nodemailer = require("nodemailer");

require("dotenv").config;
const url =
  "https://www.amazon.fr/SAMSUNG-Galaxy-Lite-10-4pouce-64GB/dp/B087JWBYW8/ref=sr_1_5?crid=1VXISYI1LEAHA&dchild=1&keywords=tablette+samsung&qid=1634766677&sr=8-5";

/////////////////function qui se joue toute seule
(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: "networkidle2" });
  /////instructions

  /************************viewport************/ //
  await page.setViewport({ width: 1280, height: 8000 });

  ///////***************pdf****************/////
  //   await page.pdf({
  //     path: "page.pdf",
  //     format: "A4",
  //   });

  /////*************image**************$ */

  //   await page.screenshot({
  //     path: "image.png",
  //   });

  ///*****************get html(body**************) */

  //   let bodyHtml = await page.evaluate(() => document.body.innerHTML);
  //   console.log(bodyHtml);

  /////********************chercher la balise */

  let data = await page.evaluate(() => {
    return document.querySelector("#price_inside_buybox").innerText;
  });

  let newData = await data.substring(0, 3);

  console.log("le prix est de  " + newData);
  //   if (parseInt(newData) < 317) {
  //     sendNotification(newData);
  //}

  ///////******envoyer par mail si y a un changement */

  //   async function sendNotification(price) {
  //     let transporter = nodemailer.createTransport({
  //       service: "gmail",
  //       auth: {
  //         user: process.env.EMAIL,
  //         pass: process.env.MAIL_PASS,
  //         type: "OAuth2",
  //       },
  //     });

  //     let info = await transporter
  //       .sendMail({
  //         from: '"tablette amazon" <mily0742009@gmail.com>',
  //         to: "mily0742009@gmail.com",
  //         subject: "Prix sous les " + price + "€",
  //         html: "Le prix de la tour est de " + price + "€",
  //       })
  //       .then(() => console.log("Message envoyé"));
  //   }
  //   await browser.close();
})();
