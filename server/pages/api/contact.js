"use strict";
(() => {
var exports = {};
exports.id = 91;
exports.ids = [91];
exports.modules = {

/***/ 5184:
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ 9855:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
const nodemailer = __webpack_require__(5184);
// const email = process.env.EMAIL;
// const pass = process.env.EMAIL_PASS;
async function handler(req, res) {
    if (req.method === "POST") {
        const { email, naslov, text, ime, tip, date, broj } = req.body;
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "andrijadj96@gmail.com",
                pass: "jvylptuuooehcqpo"
            }
        });
        const mailOptions = {
            from: email,
            to: "andrijadj96@gmail.com",
            subject: naslov,
            html: `<h1>${ime} ${tip}</h1>
      <p>${text}</p>
      <p>${date}</p>
      <p>${broj} ljudi</p>
      from <a href="mailto:${email}">${email}</a>
      `
        };
        const mailOptionss = {
            from: "andrijadj96@gmail.com",
            to: email,
            subject: naslov,
            html: `  <body style="background-color: #ffcfa6; width: 100%">
      <h1
        id="pound"
        style="
          font-size: 10vh;
          top: 5%;
          left: 50%;
          transform: translateX(-50%);
          position: absolute;
          margin: 0;
          margin-bottom: 5%;
          letter-spacing: 1vw;
          filter: drop-shadow(0.4vw -0.4vw 0px #ff8870);
        "
      >
        POUND
      </h1>
      <img src="../../public/logo.svg" alt="" id="logo" />
      <h1
        style="
          width: 50%;
          text-align: center;
  
          margin-block: 15% 2.5%;
        "
      >
        Po<span>š</span>tovani,
      </h1>
      <p>
        Primili smo va<span>š</span>u poruku, i <span>ž</span>elimo da vas
        obavestimo da <span>ć</span>emo u najkra<span>ć</span>em roku da
        odgovorimo na nju!
      </p>
    </body> 
      `
        };
        try {
            await transporter.sendMail({
                ...mailOptions
            });
            await transporter.sendMail({
                ...mailOptionss
            });
            return res.json({
                status: "success"
            });
        } catch (error) {
            return res.status(400).json({
                message: error.message
            });
        }
    }
    return res.writeHead(302, "Bad request", {
        Location: "/"
    }).end();
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(9855));
module.exports = __webpack_exports__;

})();