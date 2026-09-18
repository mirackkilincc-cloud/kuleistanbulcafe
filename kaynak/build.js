// KULE İstanbul Cafe — menü derleyici: kule-data.js + page.css + page.js + fotoğraflar -> menu.html (Claude artifact) ve site/index.html (bağımsız site)
const fs = require("fs");
const DATA = require("./kule-data.js");
const ICONS = require("./icons.js");
const NUT = require("./nut.js");
const { SAUCES, SOS_MAP } = require("./soslar.js");
const ALG_DERIVED = JSON.parse(fs.readFileSync("alerjen.json","utf8"));   // alerjen-kural.py üretir
const SOCIAL = JSON.parse(fs.readFileSync("social.json","utf8"));
const PHOTOS = JSON.parse(fs.readFileSync("photos.json","utf8"));
const CSS = fs.readFileSync("page.css","utf8");
const JS  = fs.readFileSync("page.js","utf8");
const LOGO_MASK = fs.readFileSync("logo-mask.b64","utf8").trim();
const LOGO_FULL = fs.readFileSync("logo-full.b64","utf8").trim();
const EMBLEM = fs.readFileSync("emblem.b64","utf8").trim();
const EMBLEM_MIME = fs.readFileSync("emblem-mime.txt","utf8").trim();
const [LW,LH] = fs.readFileSync("logo-size.txt","utf8").trim().split(" ").map(Number);

const ALG_ORDER = ["G","M","Y","B","K","S","SS","N","F","H","C","SO","MO","L"];

/* ---------- durum (sayfaya gömülen tek veri nesnesi) ---------- */
let noPhoto = [], noKcal = [];
const sections = DATA.map((s,si)=>({
  id:s.id, t:si+1, off:0,
  title:{tr:s.tr, en:s.en, ar:s.ar},
  sub:{tr:s.str, en:s.sen, ar:s.sar},
  g:s.g.map((g,gi)=>({
    off:0, title:{tr:g.tr, en:g.en, ar:g.ar},
    note:g.note?{tr:g.note, en:g.noteEn, ar:g.noteAr||g.noteEn}:null,
    i:g.i.map((it,ii)=>{
      const [n,ne,na,p,ing,inge,inga,a,ic,img] = it;
      if(img && !PHOTOS[img]) noPhoto.push(n+" -> "+img);
      const sos = SOS_MAP[n] || [];
      sos.forEach(k=>{ if(!SAUCES[k]) throw new Error("Tanımsız sos: "+k+" ("+n+")"); });
      // alerjenler içindekilerden kural tabanlı türetilir (alerjen-kural.py)
      const id = s.id+"-"+(gi+1)+"-"+(ii+1);
      const der = ALG_DERIVED[id];
      if(!der) throw new Error("Alerjen türetilemedi: "+id+" ("+n+") — önce: python3 alerjen-kural.py");
      let alg = der.a.slice();
      const asrc = JSON.parse(JSON.stringify(der.src||{}));
      sos.forEach(k=>{                                    // sos kartlarının kesin alerjenleri de ürüne işlenir
        (SAUCES[k].a||[]).forEach(x=>{
          if(!alg.includes(x)) alg.push(x);
          const d = asrc[x] || (asrc[x]={tr:[],en:[],ar:[]});
          // aynı malzeme zaten içindekilerden geldiyse sos adını tekrar yazma ("barbekü sos" ↔ "Barbekü Sos")
          const STOP = new Set(["sos","sosu","sauce","et","meat","صوص","للحوم"]);
          const nrm = z => z.toLocaleLowerCase("tr").replace(/[^\p{L}\p{N}]+/gu," ")
                            .split(" ").filter(w=>w && !STOP.has(w)).join(" ");
          ["tr","en","ar"].forEach(L=>{ const nm=SAUCES[k].name[L]; if(!d[L].some(v=>nrm(v)===nrm(nm))) d[L].push(nm); });
        });
      });
      alg.sort((x,y)=>ALG_ORDER.indexOf(x)-ALG_ORDER.indexOf(y));
      let kcal = null, nut = null;
      if(s.id!=="nargile"){ const v = NUT[n]; if(!v){ noKcal.push(n); } else { kcal=v[0]; nut={kcal:v[0], kj:Math.round(v[0]*4.184), p:v[1], f:v[2], c:v[3]}; } }
      return {
        id:s.id+"-"+(gi+1)+"-"+(ii+1),
        name:{tr:n, en:ne, ar:na},
        ing:{tr:ing||"", en:inge||"", ar:inga||inge||""},
        p, a:alg, asrc, aunk:(a===null?1:0), ic, s:0, so:0, off:0, sos,
        kcal, nut, por:null, alc:0, pork:0,
        img: img && PHOTOS[img] ? PHOTOS[img] : "", iw: (img && PHOTOS[img]) ? 640 : null, ih: (img && PHOTOS[img]) ? 480 : null
      };
    })
  }))
}));
if(noPhoto.length) console.log("FOTOĞRAF BULUNAMADI:", noPhoto.join(", "));
if(noKcal.length) console.log("KCAL EKSİK:", noKcal.join(", "));

const ALG = {
 G:{tr:"Gluten",en:"Gluten",ar:"غلوتين"}, M:{tr:"Süt",en:"Milk",ar:"حليب"}, Y:{tr:"Yumurta",en:"Egg",ar:"بيض"}, B:{tr:"Balık",en:"Fish",ar:"سمك"},
 K:{tr:"Kabuklu deniz ürünleri",en:"Crustaceans",ar:"قشريات"}, S:{tr:"Soya",en:"Soy",ar:"صويا"}, SS:{tr:"Susam",en:"Sesame",ar:"سمسم"},
 N:{tr:"Sert kabuklu yemişler",en:"Tree nuts",ar:"مكسرات"}, F:{tr:"Yer fıstığı",en:"Peanuts",ar:"فول سوداني"}, H:{tr:"Hardal",en:"Mustard",ar:"خردل"},
 C:{tr:"Kereviz",en:"Celery",ar:"كرفس"}, SO:{tr:"Sülfit",en:"Sulphites",ar:"كبريتيت"}, MO:{tr:"Yumuşakçalar",en:"Molluscs",ar:"رخويات"}, L:{tr:"Acı bakla",en:"Lupin",ar:"ترمس"}
};

const ADDR_TR = "Garipçe, Rumeli Feneri Yolu No:4359, 34450 Sarıyer/İstanbul";
const STATE = {
  v:5,
  brand:{
    name:"KULE İstanbul Cafe",
    tag:{tr:"Boğaz'ın en güzel manzarasında", en:"With the finest view of the Bosphorus", ar:"مع أجمل إطلالة على البوسفور"},
    phoneText:"0541 551 71 61", phoneTel:"+905415517161", wa:"905415517161",
    ig:"https://www.instagram.com/kuleistanbulcafe/",
    gg:"https://www.google.com/maps/search/?api=1&query="+encodeURIComponent("Kule İstanbul Cafe, Garipçe, Rumeli Feneri Yolu No:4359, Sarıyer, İstanbul"),
    maps:"https://www.google.com/maps/search/?api=1&query="+encodeURIComponent("Kule İstanbul Cafe, Garipçe, Rumeli Feneri Yolu No:4359, Sarıyer, İstanbul"),
    addr:{tr:ADDR_TR, en:"Rumeli Feneri Yolu No:4359, Garipçe, 34450 Sarıyer/İstanbul", ar:"غاريبتشه، طريق روملي فنري رقم 4359، 34450 صاريير / إسطنبول"},
    hours:{tr:"", en:"", ar:""},
    pin:"7161"
  },
  logo:"data:image/png;base64,"+LOGO_MASK, logoFull:"data:image/png;base64,"+LOGO_FULL, logoAr:LW+"/"+LH,
  emblem:"data:"+EMBLEM_MIME+";base64,"+EMBLEM,
  social:SOCIAL,
  alg:ALG, sauces:SAUCES, sections, pub: Date.now()
};

/* ---------- simgeler ---------- */
const I_WA = '<img class="silogo" data-s="wa" alt="">';
const I_IG = '<img class="silogo" data-s="ig" alt="">';
const I_GG = '<img class="silogo" data-s="gg" alt="">';
const I_UP='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 19V5"/><path d="M5 12l7-7 7 7"/></svg>';
const I_SEARCH='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/></svg>';
const ORN='<svg class="orn" viewBox="0 0 120 14" fill="none" stroke="currentColor" stroke-width="1.1" stroke-linecap="round" aria-hidden="true"><path d="M2 7h38M80 7h38"/><path d="M48 7c3-5 8-5 12 0 4-5 9-5 12 0-3 5-8 5-12 0-4 5-9 5-12 0z"/><circle cx="60" cy="7" r="1.3" fill="currentColor"/></svg>';

/* ---------- gövde ---------- */
const BODY = `
<header class="hero"><div class="wrap">
  <div class="logo" role="img" aria-label="KULE İstanbul Cafe amblemi"></div>
  ${ORN}
  <p class="tagline" id="tagline"></p>
  <p class="meta"><a id="addr" href="#" target="_blank" rel="noopener"></a></p>
  <p class="meta phone"><a id="phone" href="#"></a></p>
  <p class="hours" id="hours"></p>
</div></header>
<div class="bar"><div class="bar-in">
  <div class="tools">
    <button class="iconbtn" id="pbtn" aria-expanded="false" aria-controls="panel" aria-label="Ara ve filtrele">${I_SEARCH}<span class="dot" id="pdot">0</span></button>
    <div class="lang" role="group" aria-label="Dil / Language / اللغة">
      <button type="button" data-lang="tr" aria-pressed="true">TR</button><button type="button" data-lang="en" aria-pressed="false">EN</button><button type="button" data-lang="ar" aria-pressed="false">AR</button>
    </div>
  </div>
  <nav class="rail" id="rail" aria-label="Kategoriler"></nav>
</div></div>
<div class="panel" id="panel" hidden><div class="wrap">
  <input id="q" type="search" autocomplete="off" enterkeyhint="search">
  <p class="flabel" id="flabel"></p><div class="fchips" id="fchips"></div>
  <div class="hits"><span id="hits"></span><button class="clear" id="clear" hidden></button></div>
</div></div>
<main class="wrap" id="menu"></main>
<p class="empty wrap" id="empty" hidden></p>
<footer class="foot wrap">
  <div class="logo" role="img" aria-label="KULE İstanbul Cafe"></div>
  <p class="bless" id="bless"></p>
  <p class="fline"><a id="addr2" href="#" target="_blank" rel="noopener"></a></p>
  <p class="fline"><a id="phone2" href="#"></a></p>
  <div class="socials">
    <a class="sbtn wa" id="wabtn2" href="#" target="_blank" rel="noopener">${I_WA}<span id="watext2"></span></a>
    <a class="sbtn ig" id="igbtn2" href="#" target="_blank" rel="noopener">${I_IG}<span id="igtext2"></span></a>
    <a class="sbtn gg" id="ggbtn2" href="#" target="_blank" rel="noopener">${I_GG}<span id="ggtext2"></span></a>
  </div>
  <p class="fsmall" id="vat"></p><p class="fsmall" id="alrg"></p><p class="fsmall" id="enote"></p><p class="fsmall" id="dnote"></p><p class="fsmall ver" id="ver"></p>
</footer>
<div class="fabs">
  <button class="fab top" id="totop" type="button">${I_UP}</button>
  <a class="fab call" id="callfab" href="#"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg></a>
  <a class="fab wa" id="wafab" href="#" target="_blank" rel="noopener">${I_WA}</a>
  <a class="fab ig" id="igfab" href="#" target="_blank" rel="noopener">${I_IG}</a>
  <a class="fab gg" id="ggfab" href="#" target="_blank" rel="noopener">${I_GG}</a>
</div>
<div class="toast" id="toast" role="status" aria-live="polite"></div>
<script>const ICONS=${JSON.stringify(ICONS)};const STATE=__DATA__;const SHELL=__SHELL__;</script>
<script>${JS}</script>`;

const FONTS = '<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>'
 + '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500;1,600&family=Montserrat:wght@400;500;600;700;800&family=Amiri:ital,wght@0,400;0,700;1,400&family=Tajawal:wght@400;500;700;800&display=swap">';
const TITLE = '<title>KULE İstanbul Cafe Menü</title>';
const STYLE = '<style>'+CSS+'</style>';

// Tam belge şablonu (sayfanın kendini yeniden yayınlarken kullandığı) — yer tutucular: __DATA__, __SHELL__
const FULL = '<!doctype html><html lang="tr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"><meta name="theme-color" content="#FAF8F3">'
 + TITLE + FONTS + STYLE + '</head><body>' + BODY + '</body></html>';
// Artifact aracı için içerik (iskeleti platform ekler)
const CONTENT = TITLE + FONTS + STYLE + BODY;

function render(tpl, state){
  const data  = JSON.stringify(state).replace(/<\//g,"<\\/");
  const shell = JSON.stringify(FULL).replace(/<\//g,"<\\/");
  return tpl.replace("__DATA__",()=>data).replace("__SHELL__",()=>shell);
}
fs.writeFileSync("menu.html", render(CONTENT, STATE));
fs.mkdirSync("site",{recursive:true});
fs.writeFileSync("site/index.html", render(FULL, STATE));
fs.writeFileSync("state.json", JSON.stringify(STATE,null,1));
let n=0, ph=0; sections.forEach(s=>s.g.forEach(g=>g.i.forEach(it=>{n++; if(it.img) ph++;})));
console.log("menu.html:", (fs.statSync("menu.html").size/1024).toFixed(0)+" KB | site/index.html:", (fs.statSync("site/index.html").size/1024).toFixed(0)+" KB | ürün:", n, "| fotoğraflı:", ph);
