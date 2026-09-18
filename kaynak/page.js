/* KULE İstanbul Cafe — menü çalışma zamanı (KÖK v2 tabanı). Globaller: STATE, SHELL, ICONS */
const ST = STATE;
const $ = id => document.getElementById(id);
const esc = s => String(s == null ? "" : s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const PH_DATA = "__DA" + "TA__", PH_SHELL = "__SH" + "ELL__";
const I_ZOOM='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4M11 8v6M8 11h6"/></svg>';

const T = {
 tr:{tag:"", ph:"Ürün, malzeme veya kategori ara…", bless:"Afiyet olsun", vat:"Fiyatlarımıza KDV dahildir.",
     alrg:"Nargile ürünleri 18 yaş altına servis edilmez.", ver:"Menü sürümü", zoom:"büyüt", none:"Bu filtrelerle eşleşen ürün yok.", flabel:"Alerjen içermesin",
     hit:n=>n+" ürün gösteriliyor", clear:"Filtreleri temizle", cats:"Kategoriler", more:"İçindekiler · Alerjenler",
     ing:"İçindekiler", all:"Alerjenler", noall:"Bildirilen alerjen yok", out:"Tükendi",
     kcal:"Besin değerleri", kcalU:"kcal", kcalN:"Porsiyon başına yaklaşık değerlerdir.",
     nEn:"Enerji", nPr:"Protein", nFa:"Yağ", nCa:"Karbonhidrat", nPor:"Porsiyon",
     sauces:"Soslar", strace:"Eser miktarda", aunk:"Bu ürünün içeriği günlük değişir — alerjen bilgisi için lütfen servis ekibimize danışın.", asrcl:"kaynak", decl:"Beyan", alcNo:"Alkol içermez", alcYes:"Alkol içerir", porkNo:"Domuz türevi içermez", porkYes:"Domuz türevi içerir",
     enote:"Besin değerleri porsiyon başına yaklaşık değerlerdir; tarif ve porsiyon farklılıklarına göre değişebilir.",
     dnote:"Ürünlerimizde alkol ve domuz türevi bileşen bulunmamaktadır.", dnote2:"Alkol veya domuz türevi bileşen içeren ürünler ürün detayında belirtilmiştir.",
     wa:"WhatsApp", ig:"Instagram", gg:"Google'da Bul", wamsg:"Merhaba, KULE İstanbul Cafe'ye menüden yazıyorum.", top:"Başa dön"},
 en:{tag:"", ph:"Search dishes, ingredients or categories…", bless:"Enjoy your meal", vat:"All prices include VAT.",
     alrg:"Shisha is not served to guests under 18.", ver:"Menu version", zoom:"enlarge", none:"No dishes match these filters.", flabel:"Exclude allergens",
     hit:n=>n+" dishes shown", clear:"Clear filters", cats:"Categories", more:"Ingredients · Allergens",
     ing:"Ingredients", all:"Allergens", noall:"No declared allergens", out:"Sold out",
     kcal:"Nutrition", kcalU:"kcal", kcalN:"Approximate values per portion.",
     nEn:"Energy", nPr:"Protein", nFa:"Fat", nCa:"Carbohydrate", nPor:"Portion",
     sauces:"Sauces", strace:"May contain traces", aunk:"This dish changes daily — please ask our team for allergen information.", asrcl:"from", decl:"Declaration", alcNo:"No alcohol", alcYes:"Contains alcohol", porkNo:"No pork derivatives", porkYes:"Contains pork derivatives",
     enote:"Nutrition values are approximate, per serving, and may vary with recipe and portion size.",
     dnote:"None of our products contain alcohol or pork-derived ingredients.", dnote2:"Products containing alcohol or pork derivatives are marked in the product details.",
     wa:"WhatsApp", ig:"Instagram", gg:"Find us on Google", wamsg:"Hello, I'm writing from the KULE İstanbul Cafe menu.", top:"Back to top"},
 ar:{tag:"", ph:"ابحث عن طبق أو مكوّن أو قسم…", bless:"بالهناء والشفاء", vat:"الأسعار شاملة ضريبة القيمة المضافة.",
     alrg:"لا تُقدَّم الشيشة لمن هم دون 18 عامًا.", ver:"إصدار القائمة", zoom:"تكبير", none:"لا توجد أطباق مطابقة لهذه الفلاتر.", flabel:"استبعاد مسببات الحساسية",
     hit:n=>"عرض "+n+" طبقًا", clear:"مسح الفلاتر", cats:"الأقسام", more:"المكوّنات · مسببات الحساسية",
     ing:"المكوّنات", all:"مسببات الحساسية", noall:"لا توجد مسببات حساسية مُعلنة", out:"نفد",
     kcal:"القيم الغذائية", kcalU:"سعرة", kcalN:"قيم تقريبية للحصة الواحدة.",
     nEn:"الطاقة", nPr:"بروتين", nFa:"دهون", nCa:"كربوهيدرات", nPor:"الحصة",
     sauces:"الصلصات", strace:"آثار محتملة", aunk:"يتغيّر هذا الطبق يوميًا — يُرجى سؤال فريق الخدمة عن مسببات الحساسية.", asrcl:"المصدر", decl:"البيان", alcNo:"خالٍ من الكحول", alcYes:"يحتوي على كحول", porkNo:"خالٍ من مشتقات لحم الخنزير", porkYes:"يحتوي على مشتقات لحم الخنزير",
     enote:"القيم الغذائية تقريبية لكل حصة وقد تختلف حسب الوصفة وحجم الحصة.",
     dnote:"لا تحتوي منتجاتنا على كحول أو مكوّنات مشتقة من لحم الخنزير.", dnote2:"المنتجات التي تحتوي على كحول أو مشتقات لحم الخنزير موضّحة في تفاصيل المنتج.",
     wa:"واتساب", ig:"إنستغرام", gg:"خرائط غوغل", wamsg:"مرحبًا، أكتب إليكم من قائمة كوله إسطنبول كافيه.", top:"العودة للأعلى"}
};

let lang = "tr";
try {
  const sv = localStorage.getItem("kule-lang");
  if (["tr","en","ar"].includes(sv)) lang = sv;
  else { const nl = (navigator.language||"tr").slice(0,2).toLowerCase(); lang = nl==="tr"?"tr":(nl==="ar"?"ar":"en"); }
} catch(e){}

const tx = o => (o && (o[lang] || o.tr || o.en)) || "";
const EX = new Set();
const LIVE = () => ST.sections.filter(s=>!s.off);
const USED = (()=>{ const u=new Set(); ST.sections.forEach(s=>{if(s.off)return; s.g.forEach(g=>{if(g.off)return; g.i.forEach(it=>{if(it.off)return; (it.a||[]).forEach(a=>u.add(a));});});}); return Object.keys(ST.alg).filter(k=>u.has(k)); })();
const kc = it => (it && it.kcal!==null && it.kcal!==undefined && it.kcal!=="") ? Number(it.kcal) : null;
const gr = v => (v===null||v===undefined||v==="") ? "" : Number(v).toLocaleString(lang==="tr"?"tr-TR":"en-US",{maximumFractionDigits:1})+" g";
const kcTxt = it => { const v=kc(it); return v===null?"":Number(v).toLocaleString(lang==="tr"?"tr-TR":"en-US")+" "+T[lang].kcalU; };
const money = p => Number(p||0).toLocaleString(lang==="tr"?"tr-TR":"en-US") + '<span class="cur"> ₺</span>';
const ICO = k => '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+(ICONS[k]||ICONS.plate)+'</svg>';
const CHEV = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 8l7 8 7-8"/></svg>';
const menuEl = $("menu"), railEl = $("rail"), qEl = $("q"), emptyEl = $("empty");

function applyBrand(){
  const b = ST.brand;
  document.documentElement.style.setProperty("--logo", 'url("'+ST.logo+'")');
  document.documentElement.style.setProperty("--logo-ar", ST.logoAr || "560/403");
  if(ST.emblem) document.documentElement.style.setProperty("--emblem", 'url("'+ST.emblem+'")');
  document.title = b.name + (lang==="tr"?" Menü":lang==="ar"?" — القائمة":" Menu");
  document.querySelectorAll(".silogo").forEach(im=>{ const src=ST.social&&ST.social[im.dataset.s]; if(src&&im.src!==src) im.src=src; });
}

function build(){
  const t = T[lang];
  document.documentElement.lang = lang;
  document.documentElement.dir = lang==="ar" ? "rtl" : "ltr";
  const SEC = ST.sections.filter(s=>!s.off);
  railEl.innerHTML = SEC.map(s=>'<button class="chip" type="button" data-go="'+s.id+'">'+esc(tx(s.title))+'</button>').join("");
  menuEl.innerHTML = SEC.map(s=>{
    const groups = s.g.filter(g=>!g.off).map(g=>{
      const items = g.i.filter(it=>!it.off).map(it=>{
        const nm = tx(it.name), ing = tx(it.ing);
        // içindekiler yazılmamış ve alerjeni de yoksa (kapalı ambalaj gazlı içecekler) bu blokları hiç gösterme
        const nodet = !ing && !(it.a||[]).length && !it.aunk;
        const key = [it.name.tr,it.name.en,it.name.ar,it.ing.tr,it.ing.en,it.ing.ar,g.title.tr,g.title.en,g.title.ar,s.title.tr,s.title.en,s.title.ar].join(" ").toLocaleLowerCase("tr");
        const chips = (it.a||[]).map(a=>{ const sr=(it.asrc&&it.asrc[a])?tx(it.asrc[a]):null;
          return '<div class="algrow"><span class="achip"><b>'+esc(a)+'</b>'+esc(tx(ST.alg[a]))+'</span>'
            +((sr&&sr.length)?'<span class="algsrc">'+esc(Array.isArray(sr)?sr.join(", "):sr)+'</span>':'')+'</div>';}).join("");
        const dim = (it.iw&&it.ih) ? ' width="'+it.iw+'" height="'+it.ih+'"' : '';
        const photo = it.img ? '<button type="button" class="photo" data-zoom="'+it.id+'" aria-label="'+esc(nm)+' — '+t.zoom+'"><img src="'+it.img+'" alt="'+esc(nm)+'"'+dim+' loading="lazy"><span class="zi">'+I_ZOOM+'</span></button>' : '';
        return '<div class="item'+(it.so?' so':'')+'" data-id="'+it.id+'" data-k="'+esc(key)+'" data-a="'+((it.a||[]).join(","))+'">'
          +'<button class="irow" type="button" aria-expanded="false" aria-controls="d-'+it.id+'">'
            +'<span class="thumb">'+(it.img?'<img src="'+it.img+'" alt="" loading="lazy">':ICO(it.ic))+'</span>'
            +'<span class="ibody">'
              +'<span class="line"><span class="nm">'+esc(nm)+(it.s?'<span class="badge">KULE</span>':'')+(it.so?'<span class="badge out">'+t.out+'</span>':'')+(kc(it)!==null?'<span class="badge kcal">'+esc(kcTxt(it))+'</span>':'')
              +'</span><span class="dots"></span><span class="pr">'+money(it.p)+'</span></span>'
              +((ing||(it.por&&tx(it.por)))?'<span class="desc">'+(it.por&&tx(it.por)?'<b class="pg">'+esc(tx(it.por))+'</b>'+(ing?' · ':''):'')+esc(ing)+'</span>':'')
              +'<span class="more">'+(nodet?t.kcal:t.more)+CHEV+'</span>'
            +'</span></button>'
          +'<div class="idet" id="d-'+it.id+'"><div><div class="idin">'+photo
            +(ing?'<div class="dblock"><h4>'+t.ing+'</h4><p>'+esc(ing)+'</p></div>':'')
            +(((it.sos||[]).filter(k=>ST.sauces&&ST.sauces[k])).length?'<div class="dblock"><h4>'+t.sauces+'</h4>'+(it.sos||[]).filter(k=>ST.sauces&&ST.sauces[k]).map(k=>{const sc=ST.sauces[k];
               return '<details class="sos"><summary class="sos-n">'+esc(tx(sc.name))+'<span class="sos-h">'+t.more+'</span>'+CHEV+'</summary><div class="sos-b">'
                 +'<p class="sos-i">'+esc(tx(sc.ing))+'</p>'
                 +((sc.a||[]).length?'<div class="achips">'+(sc.a||[]).map(x=>'<span class="achip"><b>'+esc(x)+'</b>'+esc(tx(ST.alg[x]))+'</span>').join("")+'</div>':'<p class="snone">'+t.noall+'</p>')
                 +(tx(sc.trace||{})?'<p class="sos-t">'+esc(tx(sc.trace))+'</p>':'')
                 +(tx(sc.note||{})?'<p class="sos-t">'+esc(tx(sc.note))+'</p>':'')+'</div></details>';}).join("")+'</div>':'')
            +(kc(it)!==null?'<div class="dblock"><h4>'+t.kcal+(it.por&&tx(it.por)?' <span class="pw">· '+esc(tx(it.por))+'</span>':'')+'</h4>'
              +'<table class="nut"><tbody>'
              +'<tr><th>'+t.nEn+'</th><td><b>'+esc(kcTxt(it))+'</b>'+(it.nut&&it.nut.kj?' <span class="kj">/ '+Number(it.nut.kj).toLocaleString(lang==="tr"?"tr-TR":"en-US")+' kJ</span>':'')+'</td></tr>'
              +(it.nut?'<tr><th>'+t.nPr+'</th><td>'+esc(gr(it.nut.p))+'</td></tr>'
                      +'<tr><th>'+t.nFa+'</th><td>'+esc(gr(it.nut.f))+'</td></tr>'
                      +'<tr><th>'+t.nCa+'</th><td>'+esc(gr(it.nut.c))+'</td></tr>':'')
              +'</tbody></table><p class="kcaln">'+t.kcalN+'</p></div>':'')
            +(nodet?'':'<div class="dblock"><h4>'+t.all+'</h4>'+(it.aunk?'<p class="snone">'+t.aunk+'</p>':(chips?'<div class="algrid">'+chips+'</div>':'<p class="snone">'+t.noall+'</p>'))+'</div>')
            +(s.id!=="nargile"?'<div class="dblock"><h4>'+t.decl+'</h4><div class="achips"><span class="achip dcl'+(it.alc?' warn':'')+'">'+(it.alc?t.alcYes:t.alcNo)+'</span><span class="achip dcl'+(it.pork?' warn':'')+'">'+(it.pork?t.porkYes:t.porkNo)+'</span></div></div>':'')
          +'</div></div></div></div>';
      }).join("");
      if(!items) return '';
      return '<div class="grp"><p class="grp-label">'+esc(tx(g.title))+'</p>'+(g.note&&tx(g.note)?'<p class="grp-note">'+esc(tx(g.note))+'</p>':'')+items+'</div>';
    }).join("");
    return '<section class="sec" id="sec-'+s.id+'" data-sec="'+s.id+'" style="--tint:var(--t'+s.t+');--tink:var(--k'+s.t+')">'
      +'<div class="sec-head"><h2 class="sec-title">'+esc(tx(s.title))+'</h2></div>'+(tx(s.sub)?'<p class="sec-sub">'+esc(tx(s.sub))+'</p>':'')+groups+'</section>';
  }).join("");

  $("fchips").innerHTML = USED.map(k=>'<button class="fchip" type="button" data-a="'+k+'" aria-pressed="'+(EX.has(k)?"true":"false")+'">'+esc(tx(ST.alg[k]))+'</button>').join("");

  const b = ST.brand;
  const wurl = "https://wa.me/"+b.wa+"?text="+encodeURIComponent(t.wamsg);
  ["wafab","wabtn2"].forEach(id=>{ $(id).href=wurl; $(id).setAttribute("aria-label",t.wa); });
  ["igfab","igbtn2"].forEach(id=>{ $(id).href=b.ig; $(id).setAttribute("aria-label",t.ig); $(id).hidden=!b.ig; });
  ["ggfab","ggbtn2"].forEach(id=>{ $(id).href=b.gg; $(id).setAttribute("aria-label",t.gg); $(id).hidden=!b.gg; });
  $("watext2").textContent=t.wa; $("igtext2").textContent=t.ig; $("ggtext2").textContent=t.gg;
  $("addr").textContent=tx(b.addr); $("addr2").textContent=tx(b.addr); $("addr").href=b.maps; $("addr2").href=b.maps;
  $("phone").textContent=b.phoneText; $("phone").href="tel:"+b.phoneTel; $("phone2").textContent=b.phoneText; $("phone2").href="tel:"+b.phoneTel;
  $("tagline").textContent=tx(b.tag); $("bless").textContent=t.bless; $("vat").textContent=t.vat; $("alrg").textContent=t.alrg; $("ver").textContent=verTxt(t.ver);
  if($("hours")) $("hours").textContent=b.hours?tx(b.hours):"";
  if($("enote")) $("enote").textContent=t.enote;
  if($("dnote")){ let flag=false; ST.sections.forEach(s=>{ if(s.off) return; s.g.forEach(g=>{ if(g.off) return; g.i.forEach(it=>{ if(!it.off&&(it.alc||it.pork)) flag=true; }); }); }); $("dnote").textContent=flag?t.dnote2:t.dnote; }
  $("flabel").textContent=t.flabel; $("clear").textContent=t.clear; $("totop").setAttribute("aria-label",t.top);
  qEl.placeholder=t.ph; qEl.setAttribute("aria-label",t.ph); emptyEl.textContent=t.none; railEl.setAttribute("aria-label",t.cats);
  document.querySelectorAll(".lang button").forEach(x=>x.setAttribute("aria-pressed",x.dataset.lang===lang?"true":"false"));
  applyBrand();
}

function filter(){
  const q = qEl.value.trim().toLocaleLowerCase("tr");
  let hits = 0;
  menuEl.querySelectorAll(".sec").forEach(sec=>{
    let sv=false;
    sec.querySelectorAll(".grp").forEach(grp=>{
      let gv=false;
      grp.querySelectorAll(".item").forEach(el=>{
        const al = el.dataset.a ? el.dataset.a.split(",") : [];
        const ok = (!q || el.dataset.k.includes(q)) && !al.some(a=>EX.has(a));
        el.hidden=!ok; if(ok){gv=true;hits++}
      });
      grp.hidden=!gv; if(gv)sv=true;
    });
    sec.hidden=!sv;
  });
  const active = q || EX.size;
  emptyEl.hidden = !(active && hits===0);
  $("hits").textContent = active ? T[lang].hit(hits) : "";
  $("clear").hidden = !active;
  $("pbtn").classList.toggle("has", EX.size>0); $("pdot").textContent=EX.size;
  spy();
}

let barH = 54;
function syncBar(){ const b=document.querySelector(".bar"); if(!b) return; const h=Math.round(b.getBoundingClientRect().height)||54; if(h!==barH){ barH=h; document.documentElement.style.setProperty("--barh", h+"px"); } }
window.addEventListener("resize", ()=>{ syncBar(); spy(); });
function spy(){
  syncBar();
  const y = window.scrollY+barH+2; let cur=null;
  const secs = menuEl.querySelectorAll(".sec");
  secs.forEach(s=>{ if(!s.hidden && s.offsetTop<=y) cur=s.dataset.sec; });
  if(!cur){ const f=[...secs].find(s=>!s.hidden); cur=f?f.dataset.sec:null; }
  [...railEl.children].forEach(c=>{
    const on = c.dataset.go===cur;
    if(on && c.getAttribute("aria-current")!=="true"){
      const target = c.offsetLeft - railEl.clientWidth/2 + c.clientWidth/2;
      railEl.scrollTo({left:target, behavior:"smooth"});
    }
    c.setAttribute("aria-current", on?"true":"false");
  });
  $("totop").classList.toggle("on", window.scrollY>700);
}

let toastT;
function toast(msg, ms){ const t=$("toast"); t.textContent=msg; t.classList.add("on"); clearTimeout(toastT); toastT=setTimeout(()=>t.classList.remove("on"), ms||2600); }

/* ---- olaylar ---- */
function lightbox(src, alt){
  const w=document.createElement("div"); w.className="lb"; w.setAttribute("role","dialog"); w.setAttribute("aria-modal","true"); w.setAttribute("aria-label",alt||"");
  w.innerHTML='<button type="button" class="lb-x" aria-label="Kapat">&times;</button>'
    +'<img src="'+src+'" alt="'+esc(alt||"")+'">'
    +(alt?'<p class="lb-c">'+esc(alt)+'</p>':'');
  const shut=()=>{ w.remove(); document.body.style.overflow=""; document.removeEventListener("keydown",esckey); };
  const esckey=ev=>{ if(ev.key==="Escape") shut(); };
  w.addEventListener("click", ev=>{ if(!ev.target.closest("img") || ev.target.closest(".lb-x")) shut(); });
  document.addEventListener("keydown", esckey);
  document.body.style.overflow="hidden";
  document.body.appendChild(w);
  requestAnimationFrame(()=>w.classList.add("on"));
  w.querySelector(".lb-x").focus();
}
menuEl.addEventListener("click", e=>{
  const z=e.target.closest("[data-zoom]");
  if(z){ e.preventDefault(); e.stopPropagation(); const im=z.querySelector("img"); if(im) lightbox(im.src, im.alt); return; }
  const btn=e.target.closest(".irow"); if(!btn) return;
  const item=btn.closest(".item"); const open=!item.classList.contains("open");
  item.classList.toggle("open",open); btn.setAttribute("aria-expanded",open?"true":"false");
});
railEl.addEventListener("click", e=>{ const b=e.target.closest("[data-go]"); if(!b) return; const el=$("sec-"+b.dataset.go); if(el) el.scrollIntoView({behavior:"smooth",block:"start"}); });
$("pbtn").addEventListener("click", ()=>{ const open=$("panel").hidden; $("panel").hidden=!open; $("pbtn").setAttribute("aria-expanded",open?"true":"false"); if(open){ window.scrollTo({top:0,behavior:"smooth"}); setTimeout(()=>qEl.focus(),240);} });
$("fchips").addEventListener("click", e=>{ const b=e.target.closest(".fchip"); if(!b) return; const a=b.dataset.a; EX.has(a)?EX.delete(a):EX.add(a); b.setAttribute("aria-pressed",EX.has(a)?"true":"false"); filter(); });
$("clear").addEventListener("click", ()=>{ EX.clear(); qEl.value=""; $("fchips").querySelectorAll(".fchip").forEach(c=>c.setAttribute("aria-pressed","false")); filter(); });
const ADMWORDS = ["yönetici","yonetici","admin","مدير","yöneti̇ci̇"];
qEl.addEventListener("input", ()=>{
  const v = qEl.value.trim().toLocaleLowerCase("tr");
  if (ADMWORDS.includes(v)) { qEl.value=""; qEl.blur(); filter(); askPin(); return; }
  filter();
});
$("totop").addEventListener("click", ()=>window.scrollTo({top:0,behavior:"smooth"}));
document.querySelectorAll(".lang button").forEach(b=>b.addEventListener("click", ()=>{
  if(b.dataset.lang===lang) return; lang=b.dataset.lang;
  try{ localStorage.setItem("kule-lang",lang) }catch(e){}
  const y=window.scrollY; build(); filter(); window.scrollTo(0,y);
}));
let tick=false; window.addEventListener("scroll", ()=>{ if(tick) return; tick=true; requestAnimationFrame(()=>{spy();tick=false}); }, {passive:true});

build(); filter();
try{ if(sessionStorage.getItem("kule-saved")){ sessionStorage.removeItem("kule-saved"); toast("Menü yayınlandı ✓", 3200); } }catch(e){}

/* ==========================================================================
   YÖNETİCİ PANELİ — mobil uyumlu, anlık yayın, yapı düzenleyici
   ========================================================================== */
const A = {open:false, dirty:false, tab:"items", live:true, modal:0, q:""};
const CANPUB = (function(){ try{ return typeof claude!=="undefined" && !!claude && typeof claude.use==="function"; }catch(e){ return false; } })();
try{ A.live = CANPUB && localStorage.getItem("kule-live") !== "0"; }catch(e){ A.live = CANPUB; }
if(!CANPUB) A.live = false;
const ALGKEYS = Object.keys(ST.alg);

function verTxt(label){
  const v = ST.pub;
  if(!v) return "";
  let d;
  try{ d = new Date(v); if(isNaN(d)) return ""; }catch(e){ return ""; }
  let s2;
  try{
    s2 = new Intl.DateTimeFormat("tr-TR",{timeZone:"Europe/Istanbul",day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"}).format(d);
  }catch(e){ s2 = d.toISOString().slice(0,16).replace("T"," "); }
  return label+": "+s2;
}
function renderDoc(state){
  const data  = JSON.stringify(state).replace(/<\//g,"<\\/");
  const shell = JSON.stringify(SHELL).replace(/<\//g,"<\\/");
  return SHELL.replace(PH_DATA, ()=>data).replace(PH_SHELL, ()=>shell);
}
const uid = p => p+"-"+Date.now().toString(36)+Math.floor(Math.random()*46656).toString(36);
const L3  = o => ({tr:(o&&o.tr)||"", en:(o&&o.en)||"", ar:(o&&o.ar)||""});

/* ---------- giriş ---------- */
function askPin(){
  if(document.querySelector(".pin")) return;
  const w=document.createElement("div"); w.className="pin";
  w.innerHTML='<div><h3>Yönetici girişi</h3><p>Menüyü düzenlemek için PIN girin.</p>'
    +'<input id="pinin" type="password" inputmode="numeric" autocomplete="off" maxlength="12">'
    +'<div class="err" id="pinerr"></div><div class="row"><button class="b" id="pincancel">Vazgeç</button><button class="b p" id="pinok">Giriş</button></div></div>';
  document.body.appendChild(w);
  const inp=w.querySelector("#pinin"); setTimeout(()=>inp.focus(),50);
  const tryPin=()=>{ if(inp.value===String(ST.brand.pin)){ w.remove(); try{sessionStorage.setItem("kule-adm","1")}catch(e){} openAdmin(); } else { w.querySelector("#pinerr").textContent="PIN hatalı"; inp.value=""; inp.focus(); } };
  w.querySelector("#pinok").addEventListener("click",tryPin);
  inp.addEventListener("keydown",e=>{ if(e.key==="Enter") tryPin(); if(e.key==="Escape") w.remove(); });
  w.querySelector("#pincancel").addEventListener("click",()=>{ w.remove(); clearHash(); });
}
function clearHash(){ if(location.hash==="#admin") history.replaceState(null,"",location.pathname+location.search); }

/* ---------- panel ---------- */
const TABS=[["items","Ürünler"],["struct","Yapı"],["settings","Ayarlar"],["help","Yardım"]];
function openAdmin(ui){
  if(A.open) return; A.open=true;
  if(location.hash!=="#admin") history.replaceState(null,"",location.pathname+location.search+"#admin");
  const w=document.createElement("div"); w.className="adm"; w.id="adm";
  w.innerHTML='<div class="adm-top"><h2>Yönetici Paneli</h2><button class="b s" id="admclose">Kapat</button></div>'
    +'<div class="adm-tabs">'+TABS.map(t=>'<button data-t="'+t[0]+'" aria-selected="'+(A.tab===t[0]?"true":"false")+'">'+t[1]+'</button>').join("")+'</div>'
    +'<div class="adm-body" id="admbody"></div>'
    +'<div class="adm-foot"><span class="st" id="admst">'+(CANPUB?"Değişiklik yok":"Değişiklik yok — bitince indirip sitenize yükleyin")+'</span>'
    +(CANPUB?'<label class="live"><button class="sw" id="admlive" type="button" role="switch" aria-checked="'+(A.live?"true":"false")+'"></button>Anlık yayın</label>':'')
    +'<button class="b p" id="admsave">'+(CANPUB?"Şimdi yayınla":"Kaydet ve index.html indir")+'</button></div>';
  document.body.appendChild(w);
  document.body.style.overflow="hidden";
  w.querySelector("#admclose").addEventListener("click", closeAdmin);
  w.querySelector(".adm-tabs").addEventListener("click", e=>{ const b=e.target.closest("[data-t]"); if(!b) return; A.tab=b.dataset.t;
    w.querySelectorAll(".adm-tabs button").forEach(x=>x.setAttribute("aria-selected",x===b?"true":"false")); renderAdmin(); });
  w.querySelector("#admsave").addEventListener("click", ()=>save(false));
  const lv=w.querySelector("#admlive"); if(lv) lv.addEventListener("click", e=>{
    A.live=!A.live; e.currentTarget.setAttribute("aria-checked",A.live?"true":"false");
    try{ localStorage.setItem("kule-live",A.live?"1":"0"); }catch(x){}
    if(A.live){ toast("Anlık yayın açık — her değişiklik hemen yayınlanır"); if(A.dirty) queuePublish(); }
    else toast("Anlık yayın kapalı — 'Şimdi yayınla' ile yayınlayın");
  });
  renderAdmin();
  if(ui && ui.sc) setTimeout(()=>{ const b=$("admbody"); if(b) b.scrollTop=ui.sc; },40);
}
function closeAdmin(){
  if(A.dirty && A.live){ flushPublish(); }
  const w=$("adm"); if(w) w.remove(); A.open=false; document.body.style.overflow=""; clearHash();
  const y=window.scrollY; build(); filter(); window.scrollTo(0,y);
  if(A.dirty && !A.live) toast("Yayınlanmamış değişiklik var — panelden 'Şimdi yayınla' deyin", 4000);
}

/* ---------- anlık yayın ---------- */
let pubT=null, publishing=false;
function markDirty(){
  A.dirty=true;
  const st=$("admst"), b=$("admsave"); if(b) b.disabled=false;
  if(A.live){ if(st) st.textContent="Değişiklik alındı — yayınlanıyor…"; queuePublish(); }
  else if(st) st.textContent = CANPUB ? "Yayınlanmamış değişiklik var" : "Kaydedilmemiş değişiklik var — aşağıdaki düğmeyle indirin";
}
function queuePublish(){ if(!A.live) return; clearTimeout(pubT); pubT=setTimeout(runPublish,1500); }
function runPublish(){ if(A.modal>0){ pubT=setTimeout(runPublish,700); return; } save(true); }
function flushPublish(){ clearTimeout(pubT); if(A.dirty) save(true); }

function renderAdmin(){
  const body=$("admbody"); if(!body) return;
  body.scrollTop=0;
  if(A.tab==="items")    return renderItems(body);
  if(A.tab==="struct")   return renderStructure(body);
  if(A.tab==="settings") return renderSettings(body);
  const nt = CANPUB
    ? '<div class="note">Değişiklikler <b>anlık yayın</b> açıkken saniyeler içinde canlı menüye geçer. QR kod hiç değişmez.</div>'
    : '<div class="note"><b>Menüyü nasıl güncellersiniz — 3 adım</b><br>'
      +'1. Burada düzenlemelerinizi yapın.<br>'
      +'2. Alttaki <b>“Kaydet ve index.html indir”</b> düğmesine basın.<br>'
      +'3. İnen dosyayı masaüstündeki <b>kule istanbul cafe qr kod</b> klasörüne koyun (klasörün kökündeki index.html\'in üzerine yazsın), sonra aynı klasördeki <b>YAYINLA.command</b> dosyasına çift tıklayın.<br><br>'
      +'Birkaç saniye sonra menü sitede güncellenir. <b>QR kod hiç değişmez.</b> Kontrol için: menüyü telefonda açıp en alttaki <b>“Menü sürümü”</b> tarihine bakın.</div>';
  const publine = CANPUB
    ? '<b>Anlık yayın:</b> açıkken her düzenleme ~1,5 saniye sonra kendiliğinden yayınlanır ve sayfa tazelenir; panel kaldığınız yerden açılır. Kapatırsanız "Şimdi yayınla" ile toplu yayınlarsınız.<br><br>'
    : '<b>Yayınlama:</b> bu adres sizin kendi siteniz olduğu için değişiklikler otomatik yayınlanmaz. Düzenlemeleriniz bitince bir kez indirip yükleyin (yukarıdaki 3 adım). Panelden çıkmadan istediğiniz kadar düzenleme yapabilirsiniz — hepsi tek dosyada iner.<br><br>';
  body.innerHTML=nt
    +'<p style="font-size:.9rem;line-height:1.65">'
    +'<b>Ürünler:</b> fiyat, <b>kalori</b>, ad (3 dil), içindekiler, alerjenler, fotoğraf, "tükendi" anahtarı, sıralama, başka gruba taşıma, pasife alma.<br><br>'
    +'<b>Yapı:</b> yeni bölüm ve grup açma, adlarını ve sırasını değiştirme, gizleme. Menüyü kendiniz büyütebilirsiniz.<br><br>'
    +'<b>Silme yok:</b> ürün, grup ve bölümler silinmez; "pasife al" / "gizle" dersiniz, müşteri menüsünden çıkar, panelde durur, istediğinizde geri açarsınız.<br><br>'
    +'<b>Besin değerleri:</b> kalori ürün adının yanında rozet olarak, detayda ise enerji (kcal/kJ), protein, yağ ve karbonhidrat tablosu olarak görünür. Porsiyon/gramaj yazarsanız (örn. "220 g antrikot") tablonun başlığında çıkar. Değerler bileşim üzerinden hesaplanmış yaklaşık değerlerdir; mutfağın ölçümleriyle buradan güncelleyin.<br><br>'
    +'<b>Alerjenler:</b> her alerjenin yanında onu doğuran malzemeler yazar (örn. "Gluten — burger köftesi, susamlı burger ekmeği"). Alerjenler içindekiler listesinden türetilir; içindekileri değiştirirseniz alerjen kutucuklarını da elle güncelleyin.<br><br><b>Sos kartları:</b> Sweet Chili, Cafe de Paris ve Demi Glace soslarının kendi içindekileri ve alerjenleri ürün detayında AYRI bir blokta görünür — ürünün içindekileriyle karışmaz. Ürün düzenleme ekranındaki kutucuklardan hangi sosun görüneceğini seçersiniz; sosun alerjeni ürünün alerjen listesine de kendiliğinden eklenir.<br><br><b>Beyan:</b> her üründe alkol ve domuz türevi beyanı vardır (varsayılan: içermez). Mevzuat gereği içeren ürünlerde "İçerir" seçin.<br><br><b>Ayarlar:</b> telefon, WhatsApp, Instagram, Google, adres, çalışma saati, slogan ve PIN.<br><br>'
    +publine
    +'<b>Fotoğraf:</b> telefondan seçilen fotoğraf otomatik küçültülür (en fazla 720 px).<br><br>'
    +'<b>Panele girmek için:</b> arama kutusuna <code>yönetici</code> yazın, ya da adresin sonuna <code>#admin</code> ekleyin, ya da üstteki ambleme uzun basın.</p>';
}

/* ---------- ürün listesi ---------- */
function renderItems(body){
  const q=(A.q||"").toLocaleLowerCase("tr");
  let h='<input class="adm-search" id="admq" placeholder="Ürün ara…" value="'+esc(A.q||"")+'">';
  ST.sections.forEach((s,si)=>{
    let sh='';
    s.g.forEach((g,gi)=>{
      const rows=g.i.map((it,ii)=>{
        if(q && !(it.name.tr+" "+it.name.en).toLocaleLowerCase("tr").includes(q)) return "";
        return '<div class="arow'+(it.so?' so':'')+(it.off?' off':'')+'" data-p="'+si+'.'+gi+'.'+ii+'"><div class="n">'+esc(it.name.tr)+(it.off?'<span class="tag">PASİF</span>':'')+'<small>'+esc(it.name.en)+(it.name.ar?' · '+esc(it.name.ar):'')+(it.kcal!==null&&it.kcal!==undefined?' · '+it.kcal+' kcal':'')+'</small></div>'
          +'<span class="p">'+Number(it.p).toLocaleString("tr-TR")+' ₺</span>'
          +'<button class="sw" role="switch" aria-checked="'+(it.so?"false":"true")+'" data-act="so" title="Mevcut / Tükendi"></button>'
          +'<button class="b s" data-act="edit">Düzenle</button></div>';
      }).join("");
      if(rows || !q) sh+='<div class="adm-grp"><span>'+esc(g.title.tr)+'</span><button class="b s" data-act="add" data-p="'+si+'.'+gi+'">+ Ürün</button></div>'+rows;
    });
    if(sh) h+='<div class="adm-sec">'+esc(s.title.tr)+'</div>'+sh;
  });
  body.innerHTML=h;
  const qi=$("admq"); qi.addEventListener("input",()=>{ A.q=qi.value; const pos=qi.selectionStart; renderItems(body); const n=$("admq"); n.focus(); n.setSelectionRange(pos,pos); });
  bindBody(body);
}
function bindBody(el){ if(el._bound) return; el._bound=1;
  el.addEventListener("click", e=>{ if(A.tab==="items") onItemsClick(e); else if(A.tab==="struct") onStructClick(e); }); }
function onItemsClick(e){
  const b=e.target.closest("[data-act]"); if(!b) return;
  const act=b.dataset.act;
  if(act==="add"){ const [si,gi]=b.dataset.p.split(".").map(Number); const g=ST.sections[si].g[gi];
    const it={id:uid(ST.sections[si].id), name:{tr:"",en:"",ar:""}, ing:{tr:"",en:"",ar:""}, p:0, kcal:null, nut:null, por:null, a:[], sos:[], ic:g.i[0]?g.i[0].ic:"plate", s:0, so:0, off:0, alc:0, pork:0, img:"", iw:null, ih:null};
    g.i.push(it); editItem(si,gi,g.i.length-1,true); return; }
  const row=b.closest(".arow"); if(!row) return;
  const [si,gi,ii]=row.dataset.p.split(".").map(Number); const it=ST.sections[si].g[gi].i[ii];
  if(act==="so"){ it.so=!it.so; row.classList.toggle("so",!!it.so); b.setAttribute("aria-checked",it.so?"false":"true"); markDirty(); }
  if(act==="edit") editItem(si,gi,ii);
}

/* ---------- yapı (bölüm & grup) ---------- */
function renderStructure(body){
  let h='<div class="note">Bölüm ve grup ekleyin, adlarını ve sırasını değiştirin. <b>Hiçbir şey silinmez</b> — "Gizle" dediğiniz bölüm/grup müşteri menüsünde görünmez, burada durur. Ürünler "Ürünler" sekmesinde.</div>';
  ST.sections.forEach((s,si)=>{
    let n=0; s.g.forEach(g=>n+=g.i.length);
    h+='<div class="str'+(s.off?' off':'')+'"><div class="h"><b>'+esc(s.title.tr)+' <small style="font-weight:600;color:var(--ink-3)">('+n+')</small>'+(s.off?'<span class="tag">PASİF</span>':'')+'</b>'
      +'<button class="b s ic" data-a="sup" data-i="'+si+'" aria-label="Yukarı taşı">▲</button>'
      +'<button class="b s ic" data-a="sdn" data-i="'+si+'" aria-label="Aşağı taşı">▼</button>'
      +'<button class="b s" data-a="sed" data-i="'+si+'">Adı</button>'
      +'<button class="b s'+(s.off?' p':'')+'" data-a="soff" data-i="'+si+'">'+(s.off?'Göster':'Gizle')+'</button></div><div class="gl">';
    s.g.forEach((g,gi)=>{
      h+='<div class="g"'+(g.off?' style="opacity:.5"':'')+'><span>'+esc(g.title.tr)+' <small>('+g.i.length+')</small>'+(g.off?'<span class="tag">PASİF</span>':'')+'</span>'
        +'<button class="b s ic" data-a="gup" data-i="'+si+'.'+gi+'" aria-label="Yukarı taşı">▲</button>'
        +'<button class="b s ic" data-a="gdn" data-i="'+si+'.'+gi+'" aria-label="Aşağı taşı">▼</button>'
        +'<button class="b s" data-a="ged" data-i="'+si+'.'+gi+'">Adı</button>'
        +'<button class="b s'+(g.off?' p':'')+'" data-a="goff" data-i="'+si+'.'+gi+'">'+(g.off?'Göster':'Gizle')+'</button></div>';
    });
    h+='<div class="g" style="border-top:1px solid var(--line)"><span></span><button class="b s" data-a="gadd" data-i="'+si+'">+ Grup ekle</button></div></div></div>';
  });
  h+='<button class="b p" data-a="sadd" type="button" style="width:100%">+ Yeni bölüm ekle</button>';
  body.innerHTML=h;
  bindBody(body);
}
function onStructClick(e){
  const b=e.target.closest("[data-a]"); if(!b) return;
  const a=b.dataset.a, p=(b.dataset.i||"").split(".").map(Number), si=p[0], gi=p[1];
  const S=ST.sections;
  const swap=(arr,i,j)=>{ if(j<0||j>=arr.length) return false; const t=arr[i]; arr[i]=arr[j]; arr[j]=t; return true; };
  if(a==="sup"){ if(swap(S,si,si-1)){ markDirty(); renderStructure($("admbody")); } return; }
  if(a==="sdn"){ if(swap(S,si,si+1)){ markDirty(); renderStructure($("admbody")); } return; }
  if(a==="gup"){ if(swap(S[si].g,gi,gi-1)){ markDirty(); renderStructure($("admbody")); } return; }
  if(a==="gdn"){ if(swap(S[si].g,gi,gi+1)){ markDirty(); renderStructure($("admbody")); } return; }
  if(a==="sed") return editTitle("s",si);
  if(a==="ged") return editTitle("g",si,gi);
  if(a==="sadd"){ S.push({id:uid("bolum"), t:(S.length%9)+1, off:0, title:{tr:"Yeni Bölüm",en:"New Section",ar:"قسم جديد"}, sub:{tr:"",en:"",ar:""}, g:[{off:0, title:{tr:"Yeni Grup",en:"New Group",ar:"مجموعة جديدة"}, note:null, i:[]}]});
    markDirty(); renderStructure($("admbody")); editTitle("s",S.length-1); return; }
  if(a==="gadd"){ S[si].g.push({off:0, title:{tr:"Yeni Grup",en:"New Group",ar:"مجموعة جديدة"}, note:null, i:[]});
    markDirty(); renderStructure($("admbody")); editTitle("g",si,S[si].g.length-1); return; }
  if(a==="soff"){ S[si].off=S[si].off?0:1; markDirty(); renderStructure($("admbody")); toast(S[si].off?"Bölüm gizlendi":"Bölüm gösteriliyor"); return; }
  if(a==="goff"){ const g=S[si].g[gi]; g.off=g.off?0:1; markDirty(); renderStructure($("admbody")); toast(g.off?"Grup gizlendi":"Grup gösteriliyor"); return; }
}
function confirmBox(msg, ok){
  const w=document.createElement("div"); w.className="pin";
  w.innerHTML='<div><h3>Emin misiniz?</h3><p style="margin-bottom:16px">'+esc(msg)+'</p><div class="row"><button class="b" data-x="n">Vazgeç</button><button class="b p d" data-x="y">Sil</button></div></div>';
  document.body.appendChild(w); A.modal++;
  w.addEventListener("click",e=>{ const b=e.target.closest("[data-x]"); if(!b) return; A.modal--; w.remove(); if(b.dataset.x==="y") ok(); });
}
function editTitle(kind, si, gi){
  const o = kind==="s" ? ST.sections[si] : ST.sections[si].g[gi];
  const isS = kind==="s";
  o.title=L3(o.title); if(isS) o.sub=L3(o.sub);
  const note = o.note ? L3(o.note) : {tr:"",en:"",ar:""};
  const m=document.createElement("div"); m.className="adm-modal"; A.modal++;
  m.innerHTML='<div class="adm-top"><h2>'+(isS?"Bölüm":"Grup")+' adı</h2><button class="b s" data-x="c">Geri</button></div><div class="adm-body">'
    +field("Ad (Türkçe)","t_tr",o.title.tr)+field("Name (English)","t_en",o.title.en)+field("الاسم (العربية)","t_ar",o.title.ar,{rtl:1})
    +(isS
      ? '<div class="note" style="margin-top:6px">Alt başlık, bölüm adının altında küçük yazıyla görünür (boş bırakılabilir).</div>'
        +field("Alt başlık (Türkçe)","t_str",o.sub.tr)+field("Subtitle (English)","t_sen",o.sub.en)+field("العنوان الفرعي","t_sar",o.sub.ar,{rtl:1})
      : '<div class="note" style="margin-top:6px">Grup notu, grup başlığının yanında görünür (boş bırakılabilir).</div>'
        +field("Not (Türkçe)","t_ntr",note.tr)+field("Note (English)","t_nen",note.en)+field("ملاحظة (العربية)","t_nar",note.ar,{rtl:1}))
    +'</div><div class="adm-foot"><span class="st"></span><button class="b" data-x="c">Vazgeç</button><button class="b p" data-x="ok">Uygula</button></div>';
  document.body.appendChild(m);
  m.addEventListener("click",e=>{
    const b=e.target.closest("[data-x]"); if(!b) return;
    if(b.dataset.x==="ok"){
      const tr=$("t_tr").value.trim(); if(!tr){ toast("Türkçe ad boş olamaz"); return; }
      o.title={tr:tr, en:$("t_en").value.trim()||tr, ar:$("t_ar").value.trim()||$("t_en").value.trim()||tr};
      if(isS){ o.sub={tr:$("t_str").value.trim(),en:$("t_sen").value.trim(),ar:$("t_sar").value.trim()}; }
      else { const n={tr:$("t_ntr").value.trim(),en:$("t_nen").value.trim(),ar:$("t_nar").value.trim()}; o.note=(n.tr||n.en||n.ar)?n:null; }
      markDirty();
    }
    A.modal--; m.remove(); renderStructure($("admbody"));
  });
}

/* ---------- ürün düzenleme ---------- */
function field(label,id,val,opts){ opts=opts||{}; return '<label class="f"><span>'+label+'</span>'+(opts.area?'<textarea id="'+id+'"'+(opts.rtl?' dir="rtl"':'')+'>'+esc(val)+'</textarea>':'<input id="'+id+'" type="'+(opts.type||"text")+'" value="'+esc(val)+'"'+(opts.rtl?' dir="rtl"':'')+(opts.attrs||'')+'>')+'</label>'; }

function editItem(si,gi,ii,isNew){
  let g=ST.sections[si].g[gi]; const it=g.i[ii];
  const opts=[]; ST.sections.forEach((s,a)=>s.g.forEach((gg,b)=>opts.push('<option value="'+a+'.'+b+'"'+(a===si&&b===gi?' selected':'')+'>'+esc(s.title.tr+" › "+gg.title.tr)+'</option>')));
  const m=document.createElement("div"); m.className="adm-modal"; m.id="admmodal"; A.modal++;
  m.innerHTML='<div class="adm-top"><h2>'+esc(it.name.tr||"Yeni ürün")+'</h2><button class="b s" id="mclose">Geri</button></div><div class="adm-body">'
    +'<div class="frow">'+field("Fiyat (₺)","f_p",it.p,{type:"number",attrs:' inputmode="numeric" min="0" step="1"'})
    +field("Kalori (kcal)","f_k",(it.kcal===null||it.kcal===undefined?"":it.kcal),{type:"number",attrs:' inputmode="numeric" min="0" step="1" placeholder="örn. 450"'})+'</div>'
    +'<div class="frow">'+field("Protein (g)","f_np",(it.nut&&it.nut.p!=null?it.nut.p:""),{type:"number",attrs:' inputmode="decimal" min="0" step="0.1"'})
    +field("Yağ (g)","f_nf",(it.nut&&it.nut.f!=null?it.nut.f:""),{type:"number",attrs:' inputmode="decimal" min="0" step="0.1"'})
    +field("Karbonhidrat (g)","f_nc",(it.nut&&it.nut.c!=null?it.nut.c:""),{type:"number",attrs:' inputmode="decimal" min="0" step="0.1"'})+'</div>'
    +field("Porsiyon / gramaj (TR)","f_ptr",(it.por?it.por.tr:""))
    +'<div class="frow">'+field("Portion (EN)","f_pen",(it.por?it.por.en:""))+field("الحصة (AR)","f_par",(it.por?it.por.ar:""),{rtl:1})+'</div>'
    +'<div class="note" style="margin-top:-4px">Kalori boş bırakılırsa menüde besin değeri yazmaz (nargilede olduğu gibi). kJ kendiliğinden hesaplanır. Porsiyon örn. "220 g antrikot" — boş bırakılabilir.</div>'
    +'<label class="f"><span>Görsel türü</span><select id="f_ic">'+Object.keys(ICONS).map(k=>'<option value="'+k+'"'+(k===it.ic?' selected':'')+'>'+k+'</option>').join("")+'</select></label>'
    +'<label class="f"><span>Bulunduğu grup</span><select id="f_grp">'+opts.join("")+'</select></label>'
    +field("Ürün adı (Türkçe)","f_ntr",it.name.tr)+field("Product name (English)","f_nen",it.name.en)+field("اسم المنتج (العربية)","f_nar",it.name.ar,{rtl:1})
    +field("İçindekiler (Türkçe)","f_itr",it.ing.tr,{area:1})+field("Ingredients (English)","f_ien",it.ing.en,{area:1})+field("المكوّنات (العربية)","f_iar",it.ing.ar,{area:1,rtl:1})
    +'<div class="f"><span>Alerjenler</span><div class="chk">'+ALGKEYS.map(k=>'<label class="'+((it.a||[]).includes(k)?'on':'')+'"><input type="checkbox" value="'+k+'"'+((it.a||[]).includes(k)?' checked':'')+'>'+esc(ST.alg[k].tr)+'</label>').join("")+'</div></div>'
    +(ST.sauces?'<div class="f"><span>Sos kartları (ürün detayında ayrı gösterilir)</span><div class="chk" id="f_soswrap">'+Object.keys(ST.sauces).map(k=>'<label class="'+((it.sos||[]).includes(k)?'on':'')+'"><input type="checkbox" data-sos value="'+k+'"'+((it.sos||[]).includes(k)?' checked':'')+'>'+esc(ST.sauces[k].name.tr)+'</label>').join("")+'</div></div>':'')
    +'<div class="frow"><label class="f"><span>Alkol</span><select id="f_alc"><option value="0"'+(!it.alc?' selected':'')+'>İçermez</option><option value="1"'+(it.alc?' selected':'')+'>İçerir</option></select></label>'
    +'<label class="f"><span>Domuz türevi</span><select id="f_pork"><option value="0"'+(!it.pork?' selected':'')+'>İçermez</option><option value="1"'+(it.pork?' selected':'')+'>İçerir</option></select></label></div>'
    +'<div class="frow"><label class="f"><span>KULE rozeti</span><select id="f_s"><option value="0"'+(!it.s?' selected':'')+'>Yok</option><option value="1"'+(it.s?' selected':'')+'>Var</option></select></label>'
    +'<label class="f"><span>Durum</span><select id="f_so"><option value="0"'+(!it.so?' selected':'')+'>Mevcut</option><option value="1"'+(it.so?' selected':'')+'>Tükendi</option></select></label></div>'
    +'<div class="f"><span>Fotoğraf</span>'+(it.img?'<img class="pv" id="f_pv" src="'+it.img+'">':'<div class="pv" id="f_pv" style="display:grid;place-items:center;color:var(--ink-3);font-size:.75rem">fotoğraf yok</div>')
    +'<input type="file" id="f_img" accept="image/*"> '+(it.img?'<button class="b s d" id="f_rm" type="button">Fotoğrafı kaldır</button>':'')+'</div>'
    +'<div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:10px"><button class="b s" id="f_up" type="button">▲ Yukarı taşı</button><button class="b s" id="f_dn" type="button">▼ Aşağı taşı</button>'
    +'<button class="b s'+(it.off?' p':' d')+'" id="f_off" type="button">'+(it.off?'✓ Yayına al':'Pasife al')+'</button></div>'
    +'<div class="note" style="margin-top:8px">Pasif ürün müşteri menüsünde <b>görünmez</b>, panelde durur; istediğinizde tek dokunuşla geri açarsınız. Ürünler silinmez.</div>'
    +'</div><div class="adm-foot"><span class="st"></span><button class="b" id="mcancel">Vazgeç</button><button class="b p" id="mok">Uygula</button></div>';
  document.body.appendChild(m);
  let newImg = it.img, newDim=null, removeImg=false, done=false;
  m.querySelector("#f_img").addEventListener("change", async e=>{ const f=e.target.files[0]; if(!f) return; try{ const sh=await shrink(f); newImg=sh.d; newDim={w:sh.w,h:sh.h}; removeImg=false; const pv=$("f_pv"); const img=document.createElement("img"); img.className="pv"; img.id="f_pv"; img.src=newImg; pv.replaceWith(img);}catch(err){ toast("Fotoğraf okunamadı"); } });
  const rm=m.querySelector("#f_rm"); if(rm) rm.addEventListener("click",()=>{ removeImg=true; newImg=""; $("f_pv").outerHTML='<div class="pv" id="f_pv" style="display:grid;place-items:center;color:var(--ink-3);font-size:.75rem">kaldırıldı</div>'; });
  m.querySelectorAll(".chk").forEach(c=>c.addEventListener("change", e=>{ const l=e.target.closest("label"); if(l) l.classList.toggle("on",e.target.checked); }));
  const shut=()=>{ if(done) return; done=true; A.modal--; m.remove(); renderAdmin(); };
  const cancel=()=>{ if(isNew){ const k=g.i.indexOf(it); if(k>=0) g.i.splice(k,1); } shut(); };
  m.querySelector("#mclose").addEventListener("click",cancel); m.querySelector("#mcancel").addEventListener("click",cancel);
  m.querySelector("#f_up").addEventListener("click",()=>{ if(ii>0){ [g.i[ii-1],g.i[ii]]=[g.i[ii],g.i[ii-1]]; ii--; markDirty(); toast("Yukarı taşındı"); } });
  m.querySelector("#f_dn").addEventListener("click",()=>{ if(ii<g.i.length-1){ [g.i[ii+1],g.i[ii]]=[g.i[ii],g.i[ii+1]]; ii++; markDirty(); toast("Aşağı taşındı"); } });
  m.querySelector("#f_off").addEventListener("click",()=>{ it.off=it.off?0:1; isNew=false; markDirty(); shut(); toast(it.off?"Ürün pasife alındı — menüde görünmüyor":"Ürün yayına alındı"); });
  m.querySelector("#mok").addEventListener("click",()=>{
    const nm=$("f_ntr").value.trim(); if(!nm){ toast("Türkçe ürün adı boş olamaz"); return; }
    it.p=Math.max(0,Math.round(Number($("f_p").value)||0)); it.ic=$("f_ic").value;
    const kv=String($("f_k").value).trim(); it.kcal = kv==="" ? null : Math.max(0,Math.round(Number(kv)||0));
    const nn=id=>{const v=String($(id).value).trim(); return v===""?null:Math.max(0,Math.round(Number(v)*10)/10);};
    it.nut = it.kcal===null ? null : {kcal:it.kcal, kj:Math.round(it.kcal*4.184), p:nn("f_np"), f:nn("f_nf"), c:nn("f_nc")};
    const ptr=$("f_ptr").value.trim();
    it.por = ptr ? {tr:ptr, en:$("f_pen").value.trim()||ptr, ar:$("f_par").value.trim()||$("f_pen").value.trim()||ptr} : null;
    it.name={tr:nm,en:$("f_nen").value.trim()||nm,ar:$("f_nar").value.trim()||$("f_nen").value.trim()||nm};
    it.ing={tr:$("f_itr").value.trim(),en:$("f_ien").value.trim(),ar:$("f_iar").value.trim()};
    it.a=[...m.querySelectorAll('.chk input:checked')].filter(x=>!x.hasAttribute("data-sos")).map(x=>x.value);
    it.sos=[...m.querySelectorAll('#f_soswrap input:checked')].map(x=>x.value);
    (it.sos||[]).forEach(k=>{ const sc=ST.sauces&&ST.sauces[k]; if(sc) (sc.a||[]).forEach(x=>{ if(!it.a.includes(x)) it.a.push(x);
      const d=(it.asrc=it.asrc||{})[x]||((it.asrc[x])={tr:[],en:[],ar:[]}); ["tr","en","ar"].forEach(L=>{ const nm=sc.name[L]; if(!d[L].includes(nm)) d[L].push(nm); }); }); });
    if(it.asrc) Object.keys(it.asrc).forEach(k=>{ if(!it.a.includes(k)) delete it.asrc[k]; });
    it.s=$("f_s").value==="1"?1:0; it.so=$("f_so").value==="1"?1:0;
    it.alc=$("f_alc").value==="1"?1:0; it.pork=$("f_pork").value==="1"?1:0;
    if(removeImg){ it.img=""; it.iw=null; it.ih=null; } else if(newImg){ it.img=newImg; if(newDim){ it.iw=newDim.w; it.ih=newDim.h; } }
    const [ns,ng]=$("f_grp").value.split(".").map(Number);
    if(ns!==si || ng!==gi){ g.i.splice(ii,1); ST.sections[ns].g[ng].i.push(it); toast("Ürün taşındı"); }
    isNew=false; markDirty(); shut();
  });
}

function shrink(file){
  return new Promise((res,rej)=>{
    const r=new FileReader(); r.onerror=rej;
    r.onload=()=>{ const im=new Image(); im.onerror=rej; im.onload=()=>{
      const MAX=720; let w=im.width,h=im.height; const k=Math.min(1,MAX/Math.max(w,h)); w=Math.round(w*k); h=Math.round(h*k);
      const c=document.createElement("canvas"); c.width=w; c.height=h; c.getContext("2d").drawImage(im,0,0,w,h);
      res({d:c.toDataURL("image/jpeg",0.72), w:w, h:h}); }; im.src=r.result; };
    r.readAsDataURL(file);
  });
}

/* ---------- ayarlar ---------- */
function renderSettings(body){
  const b=ST.brand;
  body.innerHTML='<div class="note">Bağlantı ve iletişim bilgileri. WhatsApp numarasını ülke koduyla, boşluksuz yazın (örn. 905xxxxxxxxx).</div>'
    +field("Telefon (görünen)","s_pt",b.phoneText)+field("Telefon (aranacak, +90…)","s_pl",b.phoneTel)
    +field("WhatsApp numarası","s_wa",b.wa,{attrs:' inputmode="numeric"'})+field("Instagram adresi","s_ig",b.ig)+field("Google bağlantısı (harita / yorumlar)","s_gg",b.gg)
    +field("Harita bağlantısı (adrese tıklayınca)","s_maps",b.maps)
    +field("Adres (Türkçe)","s_atr",b.addr.tr)+field("Address (English)","s_aen",b.addr.en)+field("العنوان (العربية)","s_aar",b.addr.ar,{rtl:1})
    +field("Çalışma saati (Türkçe — boş: görünmez)","s_htr",(b.hours||{}).tr||"")+field("Opening hours (English)","s_hen",(b.hours||{}).en||"")+field("ساعات العمل (العربية)","s_har",(b.hours||{}).ar||"",{rtl:1})
    +field("Slogan (Türkçe)","s_ttr",b.tag.tr)+field("Tagline (English)","s_ten",b.tag.en)+field("الشعار (العربية)","s_tar",b.tag.ar,{rtl:1})
    +field("Yönetici PIN","s_pin",b.pin,{attrs:' inputmode="numeric"'})
    +'<button class="b p" id="s_ok" type="button" style="width:100%">Ayarları uygula</button>';
  $("s_ok").addEventListener("click",()=>{
    b.phoneText=$("s_pt").value.trim(); b.phoneTel=$("s_pl").value.trim(); b.wa=$("s_wa").value.replace(/\D/g,"");
    b.ig=$("s_ig").value.trim(); b.gg=$("s_gg").value.trim(); b.maps=$("s_maps").value.trim();
    b.addr={tr:$("s_atr").value.trim(),en:$("s_aen").value.trim(),ar:$("s_aar").value.trim()};
    b.tag={tr:$("s_ttr").value.trim(),en:$("s_ten").value.trim(),ar:$("s_tar").value.trim()};
    b.hours={tr:$("s_htr").value.trim(),en:$("s_hen").value.trim(),ar:$("s_har").value.trim()};
    const pin=$("s_pin").value.trim(); if(pin) b.pin=pin;
    markDirty(); toast("Ayarlar uygulandı");
  });
}

/* ---------- yayınlama ---------- */
function keepUi(){
  try{
    sessionStorage.setItem("kule-adm","1"); sessionStorage.setItem("kule-saved","1");
    const b=$("admbody");
    sessionStorage.setItem("kule-ui", JSON.stringify({tab:A.tab, q:A.q||"", sc:b?b.scrollTop:0}));
  }catch(e){}
}
async function save(auto){
  if(publishing) return; publishing=true; clearTimeout(pubT);
  const st=$("admst"), btn=$("admsave"); if(btn) btn.disabled=true;
  if(st) st.textContent="Yayınlanıyor…";
  ST.pub = Date.now();
  const html=renderDoc(ST);
  const mb=(new Blob([html]).size/1048576);
  if(mb>14){ publishing=false; if(st) st.textContent="Sayfa çok büyük ("+mb.toFixed(1)+" MB) — bazı fotoğrafları kaldırın."; if(btn) btn.disabled=false; return; }
  if(!CANPUB){
    publishing=false; if(btn) btn.disabled=false;
    await download(html);
    A.dirty=false;
    if(st) st.innerHTML='İndirildi ✓ Şimdi: dosyayı masaüstündeki <b>kule istanbul cafe qr kod</b> klasörüne koyun (index.html\'in üzerine yazsın), sonra <b>YAYINLA.command</b>\'a çift tıklayın.';
    return;
  }
  let art=null;
  try{ if(typeof claude!=="undefined" && claude && claude.use) art=await claude.use("artifact"); }catch(e){}
  if(art){
    try{ keepUi(); await art.publish(html); if(st) st.textContent="Yayınlandı ✓ sayfa tazeleniyor…"; A.dirty=false; return; }
    catch(e){
      publishing=false; try{sessionStorage.removeItem("kule-saved")}catch(x){}
      const code=e&&e.code;
      if(code==="conflict"){ if(st) st.textContent="Başka bir sürüm yayınlanmış — sayfa tazeleniyor."; return; }
      if(st) st.textContent = (code==="not_writer"||code==="not_granted")
        ? "Bu hesabın yayınlama yetkisi yok. Dosyayı indirip sitenize yükleyin."
        : "Yayınlanamadı ("+(code||"hata")+"). Dosyayı indirebilirsiniz.";
    }
  } else { publishing=false; if(st) st.textContent="Bu adreste anlık yayın yok — güncel menüyü indirip sitenize yükleyin."; }
  if(btn && !$("admdl")){ const dl=document.createElement("button"); dl.className="b p"; dl.id="admdl"; dl.textContent="index.html indir";
    dl.addEventListener("click",()=>download(renderDoc(ST))); btn.after(dl); btn.disabled=false; }
}
async function download(html){
  let d=null; try{ if(typeof claude!=="undefined"&&claude&&claude.use) d=await claude.use("downloads"); }catch(e){}
  if(d){ try{ await d.save({filename:"index.html",data:html}); toast("İndirildi"); return; }catch(e){} }
  const a=document.createElement("a"); a.href=URL.createObjectURL(new Blob([html],{type:"text/html"})); a.download="index.html"; document.body.appendChild(a); a.click(); a.remove();
}

/* ---------- giriş yolları ---------- */
let lp; const logo=document.querySelector(".hero .logo");
logo.addEventListener("pointerdown",()=>{ lp=setTimeout(askPin,900); }); ["pointerup","pointerleave","pointercancel"].forEach(ev=>logo.addEventListener(ev,()=>clearTimeout(lp)));
(function(){
  let ok=false, saved=false, ui=null;
  try{
    ok=sessionStorage.getItem("kule-adm")==="1";
    saved=sessionStorage.getItem("kule-saved")==="1";
    ui=JSON.parse(sessionStorage.getItem("kule-ui")||"null");
    sessionStorage.removeItem("kule-saved");
  }catch(e){}
  if(location.hash!=="#admin") return;
  if(ok){ if(ui){ A.tab=ui.tab||"items"; A.q=ui.q||""; } openAdmin(ui); if(saved) toast("Yayınlandı ✓ menü güncellendi", 2200); }
  else askPin();
})();
window.addEventListener("hashchange",()=>{ if(location.hash==="#admin"&&!A.open){ let ok=false; try{ok=sessionStorage.getItem("kule-adm")==="1"}catch(e){} ok?openAdmin():askPin(); } });
window.addEventListener("beforeunload",()=>{ if(A.dirty && A.live) keepUi(); });
