import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";

const html = readFileSync("index.html", "utf8");
const references = [
  ...html.matchAll(/(?:src|href)="(\/grace-lk\/[^\"]+)"/g),
].map((match) => match[1]);

assert.ok(references.length);

for (const reference of references) {
  assert.ok(existsSync(reference.replace("/grace-lk/", "")), reference);
}

const data = JSON.parse(readFileSync("emulation/demo-data.json", "utf8"));

assert.equal(data.supports.length, 40);
assert.equal(data["mechanism-supports"].length, 17);
assert.equal(data["catalog-price-cells"].length, 32);

for (const support of data.supports) {
  assert.ok(existsSync(support.imageDataUrl.replace(/^\//, "")));
}

assert.equal(readFileSync("404.html", "utf8"), html);

process.stdout.write(
  JSON.stringify({
    references: references.length,
    supports: data.supports.length,
    mechanismSupports: data["mechanism-supports"].length,
    prices: data["catalog-price-cells"].length,
  }),
);
