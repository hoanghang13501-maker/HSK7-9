/* =====================================================================
   split.js – Giao diện thi 2 cột (bài đọc trái / trả lời phải)
   Phải nạp SAU script chính của index.html
   ===================================================================== */
(function(){

/* ---------- CSS ---------- */
const st = document.createElement("style");
st.textContent = `
body.xm-wide .wrap{max-width:1500px}
.xm-top{background:var(--card);border:1px solid var(--line);border-radius:12px;padding:8px 12px;margin-bottom:10px}
.xm-row{display:flex;flex-wrap:wrap;gap:4px;align-items:center}
.xm-row .btn{padding:6px 11px;font-size:14px;margin:2px}
.xm-title{font-weight:700;margin-right:auto}
.xm-navs{display:flex;flex-wrap:wrap;gap:4px;margin-top:6px;max-height:70px;overflow:auto}
.xm-n{min-width:34px;height:28px;border:1px solid var(--line);border-radius:6px;background:var(--card);cursor:pointer;font-size:12px;color:var(--text)}
.xm-n.done{background:var(--accent-soft);border-color:var(--accent);color:var(--accent-dark)}
.xm-n.flag{box-shadow:inset 0 -4px 0 var(--warn)}
.xm-n.cur{outline:2px solid var(--accent);outline-offset:1px}
.xm-n.ok{background:var(--ok-soft);border-color:var(--ok);color:#2f5e3d}
.xm-n.no{background:var(--no-soft);border-color:var(--no);color:#7d3530}
.xm-legend{font-size:12px;color:var(--muted);margin-top:4px}
.xm-legend i{display:inline-block;width:12px;height:12px;border-radius:3px;margin:0 3px -2px 8px;border:1px solid var(--line)}
.xm-split{display:grid;grid-template-columns:var(--lw,50%) 1fr;gap:12px;height:70vh}
.xm-left,.xm-right{overflow:auto;border:1px solid var(--line);border-radius:12px;padding:14px 18px;background:var(--card)}
.xm-left{background:#fbfaf7}
.xm-ph{font-weight:700;color:var(--accent-dark);border-bottom:1px solid var(--line);padding-bottom:6px;margin-bottom:8px;position:sticky;top:-14px;background:inherit;z-index:1}
.xm-txt{white-space:pre-wrap;line-height:2;font-size:var(--fs,17px)}
.xm-right .card{margin:10px 0;font-size:var(--fs,17px)}
.xm-right .opt{font-size:var(--fs,17px)}
.xm-p,.xm-g{display:none}.xm-p.on,.xm-g.on{display:block}
.xm-flag{float:right;border:0;background:none;color:var(--muted);cursor:pointer;font-size:13px;padding:2px 6px}
.xm-flag.on{color:#a06d00;font-weight:700}
@media(max-width:900px){
 .xm-split{grid-template-columns:1fr;height:auto!important}
 .xm-left{max-height:45vh}
 .xm-right{overflow:visible}
}`;
document.head.appendChild(st);

/* ---------- Cài đặt hiển thị (lưu lại) ---------- */
const FSK = "hsk79_fs", LWK = "hsk79_lw";
let fs = +localStorage.getItem(FSK) || 17;
let lw = +localStorage.getItem(LWK) || 50;
function applyVars(el){ if(!el) return; el.style.setProperty("--fs", fs+"px"); el.style.setProperty("--lw", lw+"%"); }
function fit(){
  const s = document.querySelector(".xm-split"); if(!s) return;
  if(innerWidth <= 900){ s.style.height = ""; return; }
  s.style.height = Math.max(380, innerHeight - s.getBoundingClientRect().top - 14) + "px";
}
window.addEventListener("resize", fit);
window.xmFont = function(d){
  fs = Math.min(24, Math.max(13, fs+d)); localStorage.setItem(FSK, fs);
  document.querySelectorAll(".xm,.xm-lesson").forEach(applyVars);
};
window.xmWidth = function(){
  lw = lw===50 ? 60 : lw===60 ? 40 : 50; localStorage.setItem(LWK, lw);
  document.querySelectorAll(".xm,.xm-lesson").forEach(applyVars);
};
const passOf = k => (typeof PASS!=="undefined" && PASS[k]) || "";

/* Rời màn hình thi thì trả lại độ rộng bình thường */
const _go = go;
go = function(t){ document.body.classList.remove("xm-wide"); _go(t); };

/* ---------- Ô câu hỏi (giữ nguyên id để phần chấm điểm cũ hoạt động) ---------- */
function qBox(i){
  const q = EX.list[i];
  let h = `<div class="card" id="c${i}"><button class="xm-flag" id="fl${i}" onclick="xmFlag(${i})">⚑ Đánh dấu</button><b>${q.n}. ${br(q.q)}</b>`;
  if(q.t==="mcf") h += q.opts.map((o,k)=>`<label class="opt" id="o${i}_${k}"><input type="radio" name="r${i}" onchange="EX.ans[${i}]=${k}"> ${LET[k]}. ${o}</label>`).join("");
  else if(q.t==="type") h += `<input class="t" id="a${i}" placeholder="Gõ chữ Hán, tối đa 10 chữ" oninput="EX.ans[${i}]=this.value">`;
  else h += `<input class="t" id="a${i}" maxlength="10" placeholder="VD: BDGFE" oninput="EX.ans[${i}]=this.value">`;
  if(q.ctx) h += `<details id="d${i}"><summary>📄 Gợi ý: câu then chốt</summary><div class="ctx">${q.ctx}</div></details>`;
  return h + `<div class="fb2" id="f${i}"></div></div>`;
}

/* ---------- Màn hình làm đề 2 cột ---------- */
drawExam = function(){
  const L = EX.list; EX.flag = EX.flag || {};
  const mins = Math.ceil(L.filter(q=>q.t==="mcf").length*1.3 + L.filter(q=>q.t==="type").length*1.2 + L.filter(q=>q.t==="letters").length*6);
  const G = [], gi = {};
  L.forEach((q,i)=>{
    const k = q.set+"-"+(q.gs||parseInt(q.g));
    if(!(k in gi)){ gi[k] = G.length; G.push({k, title:NM(q.set)+" · "+q.g, items:[]}); }
    G[gi[k]].items.push(i);
  });
  EX.G = G; EX.cur = 0;

  const left = G.map((g,j)=>{
    const t = passOf(g.k);
    return `<div class="xm-p" data-j="${j}"><div class="xm-ph">📄 ${g.title}</div>` +
      (t ? `<div class="xm-txt">${t}</div>`
         : `<div class="tip">Chưa có toàn văn bài này trong passages.js – hãy mở PDF đề bên cạnh. Ở mỗi câu bên phải vẫn có “📄 Gợi ý” (câu then chốt).</div>`) + `</div>`;
  }).join("");
  const right = G.map((g,j)=>`<div class="xm-g" data-j="${j}"><div class="xm-ph">✏️ ${g.title}</div>${g.items.map(qBox).join("")}</div>`).join("");
  const nav = L.map((q,i)=>`<button class="xm-n" id="n${i}" title="${NM(q.set)} · Câu ${q.n}" onclick="xmGo(${i})">${q.n}</button>`).join("");

  app.innerHTML = `<div class="xm">
   <div class="xm-top">
    <div class="xm-row">
     <span class="xm-title">${EX.label} <small style="font-weight:normal">· ${L.length} câu · gợi ý ${mins} phút</small></span>
     <button class="btn y" onclick="startTimer(${mins})">⏱ ${mins}'</button>
     <button class="btn w" onclick="xmFont(-1)">A−</button><button class="btn w" onclick="xmFont(1)">A+</button>
     <button class="btn w" onclick="xmWidth()" title="Đổi độ rộng 2 cột">⇔</button>
     <button class="btn w" id="xmPrev" onclick="xmShow(EX.cur-1)">◀ Bài trước</button>
     <b id="xmPage"></b>
     <button class="btn w" id="xmNext" onclick="xmShow(EX.cur+1)">Bài sau ▶</button>
     <button class="btn g" id="sub" onclick="submitExam()">✅ Nộp bài</button>
     <button class="btn w" onclick="if(EX.done||confirm('Thoát? Bài chưa nộp sẽ không được lưu.'))go('bn')">✖</button>
    </div>
    <div class="xm-navs">${nav}</div>
    <div class="xm-legend"><i style="background:var(--accent-soft);border-color:var(--accent)"></i>Đã làm
     <i style="box-shadow:inset 0 -4px 0 var(--warn)"></i>Đánh dấu
     <i style="background:var(--ok-soft)"></i>Đúng <i style="background:var(--no-soft)"></i>Sai · Phím ← → để chuyển bài</div>
   </div>
   <div class="xm-split"><div class="xm-left" id="xmL">${left}</div><div class="xm-right" id="xmR">${right}</div></div>
   <div id="res"></div>
  </div>`;

  const R = document.getElementById("xmR");
  R.addEventListener("input", xmNav); R.addEventListener("change", xmNav);
  applyVars(document.querySelector(".xm"));
  document.body.classList.add("xm-wide");
  xmShow(0);
  setTimeout(fit, 0);
};

window.xmShow = function(j){
  if(!EX || !EX.G) return;
  j = Math.max(0, Math.min(EX.G.length-1, j)); EX.cur = j;
  document.querySelectorAll(".xm-p,.xm-g").forEach(e=>e.classList.toggle("on", +e.dataset.j===j));
  ["xmL","xmR"].forEach(id=>{ const e=document.getElementById(id); if(e) e.scrollTop=0; });
  document.getElementById("xmPage").textContent = `Bài ${j+1}/${EX.G.length}`;
  document.getElementById("xmPrev").disabled = j===0;
  document.getElementById("xmNext").disabled = j===EX.G.length-1;
  xmNav();
};
window.xmGo = function(i){
  const j = EX.G.findIndex(g=>g.items.includes(i));
  if(j!==EX.cur) xmShow(j);
  setTimeout(()=>{ const c=document.getElementById("c"+i); if(c) c.scrollIntoView({block:"start", behavior:"smooth"}); }, 30);
};
window.xmNav = function(){
  if(!EX || !EX.list || !EX.G) return;
  const cur = EX.G[EX.cur].items;
  EX.list.forEach((q,i)=>{
    const b = document.getElementById("n"+i); if(!b) return;
    const a = EX.ans[i];
    b.className = "xm-n" + (a!==undefined && a!=="" ? " done" : "") + (EX.flag[i] ? " flag" : "") +
      (cur.includes(i) ? " cur" : "") + (EX.done ? (exOk(i) ? " ok" : " no") : "");
  });
};
window.xmFlag = function(i){
  EX.flag[i] = !EX.flag[i];
  const b = document.getElementById("fl"+i);
  if(b){ b.classList.toggle("on", EX.flag[i]); b.textContent = EX.flag[i] ? "⚑ Đã đánh dấu" : "⚑ Đánh dấu"; }
  xmNav();
};

/* Sau khi nộp bài / tự chấm lại → tô màu bảng số câu */
const _sub = submitExam;  submitExam = function(){ _sub(); if(EX && EX.done) xmNav(); };
const _ovr = exOvr;       exOvr = function(i,v){ _ovr(i,v); xmNav(); };

/* Phím ← → chuyển bài (không áp dụng khi đang gõ chữ) */
document.addEventListener("keydown", e=>{
  if(!document.querySelector(".xm") || /INPUT|TEXTAREA|SELECT/.test(e.target.tagName)) return;
  if(e.key==="ArrowRight") xmShow(EX.cur+1);
  if(e.key==="ArrowLeft")  xmShow(EX.cur-1);
});

/* ---------- Chế độ luyện từng câu: có bài đọc thì chia 2 cột ---------- */
const _rq = renderQ;
renderQ = function(){
  _rq();
  const p = app.querySelector("details.card");
  const txt = p && p.querySelector("div");
  if(!txt){ document.body.classList.remove("xm-wide"); return; }
  const split = document.createElement("div"); split.className = "xm-split xm-lesson";
  const L = document.createElement("div"); L.className = "xm-left";
  L.innerHTML = `<div class="xm-ph">📄 Bài đọc</div><div class="xm-txt">${txt.innerHTML}</div>`;
  const R = document.createElement("div"); R.className = "xm-right";
  while(p.nextSibling) R.appendChild(p.nextSibling);
  p.replaceWith(split); split.append(L, R);
  applyVars(split);
  document.body.classList.add("xm-wide");
  setTimeout(fit, 0);
};

})();
