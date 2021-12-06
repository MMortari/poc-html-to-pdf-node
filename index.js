const htmlPdf = require("html-pdf");
const { readFileSync } = require("fs");

const type = "complex";

async function create() {
  const file = readFileSync(`./${type}/index.html`);

  const html = file.toString("utf-8");

  createPDF(html);

  console.log("PDF criado com sucesso");
}

create();

async function createPDF(html) {
  var options = { format: "Letter" };

  return new Promise((res, rej) => {
    htmlPdf
      .create(html, options)
      .toFile(`./pdf/${type}.pdf`, function (err, data) {
        if (err) return rej(err);

        res(data);
      });
  });
}
