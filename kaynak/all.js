// tek adımda: sayfayı üret -> sözdizimi kontrolü
const fs = require("fs");
const { execFileSync } = require("child_process");
execFileSync(process.execPath, ["build.js"], { stdio: "inherit" });
const h = fs.readFileSync("menu.html", "utf8");
let pos = 0, i = 0;
while (true) {
  const a = h.indexOf("<script>", pos); if (a < 0) break;
  const b = h.indexOf("</script>", a);
  fs.writeFileSync("/tmp/_c" + i + ".js", h.slice(a + 8, b));
  execFileSync(process.execPath, ["--check", "/tmp/_c" + i + ".js"]);
  pos = b + 9; i++;
}
console.log("JS sözdizimi OK (" + i + " blok)");
