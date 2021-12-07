const htmlPdf = require("html-pdf");
const { readFileSync, writeFileSync } = require("fs");

const type = "complex";

async function create() {
  const file = readFileSync(`./${type}/index.html`);

  const html = file.toString("utf-8");

  await createPDF(html);

  console.log("PDF criado com sucesso");
}

create();

async function createPDF(html) {
  const file = await new Promise((res, rej) => {
    htmlPdf.create(html, { format: "A4" }).toBuffer(function (err, data) {
      if (err) return rej(err);

      res(data);
    });
  });

  writeFileSync(`./pdf/${type}.pdf`, file);
}
