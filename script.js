// ===== SAURAV PORTFOLIO =====
const CFG = {
    role: ["performance", "clean UI / UX", "accessibility", "scalability", "real impact"],
    skills: ["C++", "Python", "Java", "JavaScript", "HTML", "CSS", "React", "Node.js", "SQL", "Git", "GitHub", "Data Structures", "Algorithms", "OOP", "DBMS", "Operating Systems"],
    term: ["$ whoami", "saurav — CSE student", "$ cat goals.txt", "land a role at a top tech company", "$ ls projects/", "lantern/  fareradar/  your-next-big-thing/", "$ echo $STATUS", "building, solving, shipping_"],
    projects: [
        { n: "Lantern", d: "A portal connecting students, colleges and industries: internships, hackathons, performance dashboards and an AI hiring filter.", t: ["C++", "Dashboard", "AI filter"], u: "#" },
        { n: "FareRadar", d: "Price alert tracker comparing Uber, Ola, Rapido and food-delivery apps in real time through a minimal browser extension.", t: ["Extension", "Backend", "Database"], u: "#" },
        { n: "Your next project", d: "Digital Library", t: ["Python", "CSS"], u: "#" }
    ],
    stats: [["Projects", 5], ["LeetCode solved", 2], ["Commits", 10], ["Certifications", 2]],
    lc: { total: 150, easy: 80, med: 60, hard: 10, max: 3000 },
    heat: null,
    proof: { Achievements: ["Hackathon finalist — SIH 2026 FINALLIST IN COLLEGE ", "College rank / award — Coming Soon", "Open-source contribution — Coming Soon"], Certifications: ["Cloud fundamentals — Coming Soon", "Data structures course — Coming Soon", "Web development — Coming Soon"], Patents: ["Patent title / filing no. — Coming Soon"] },
    principles: [["Latest tech", "Modern tools for modern problems."], ["Responsive", "Flawless on every screen."], ["Performance", "Fast by default."], ["Beautiful UI", "Clean, minimal, intentional."], ["Great UX", "Usable before pretty."]],
    journey: [["B.Tech CSE", "GURU GOVIND SINGH INDIA UNIVERSITY", "2026 - Present"], ["Projects & Hackathons", "Self-driven", "2026 - Present"], ["Internship", "Code-Alpha", "sept 2026-oct 2026"], ["Placement prep", "DSA + Core CS", "Ongoing"]],
    links: [["GitHub", "https://github.com/kumarsauravgupta"], ["LinkedIn", "https://www.linkedin.com/in/saurav-kumar-669256301/?isSelfProfile=true"], ["LeetCode", "https://leetcode.com/u/saurav81026/"], ["Email", "saurav.krstudent@gmail.com"]]
};
// ===== ENGINE =====
const $ = s => document.querySelector(s), R = (a, f) => a.map(f).join("");
$("#mq").innerHTML = R([...CFG.skills, ...CFG.skills], s => `<span>— ${s}</span>`);
$("#pj").innerHTML = R(CFG.projects, (p, i) => `<a class="card rv" style="--d:${i * .1}s" href="${p.u}"><h3>${p.n} ↗</h3><p>${p.d}</p>${R(p.t, t => `<span class="tag">${t}</span>`)}</a>`);
$("#st").innerHTML = R(CFG.stats, (s, i) => `<div class="stat rv" style="--d:${i * .1}s"><b data-to="${s[1]}">0</b><span>${s[0]}</span></div>`);
$("#pf").innerHTML = R(Object.entries(CFG.proof), ([k, v], i) => `<div class="card rv" style="--d:${i * .1}s"><h3>${k}</h3><ul>${R(v, x => `<li>${x}</li>`)}</ul></div>`);
$("#pn").innerHTML = R(CFG.principles, (p, i) => `<div class="card rv" style="--d:${i * .08}s"><h3>${p[0]}</h3><p>${p[1]}</p></div>`);
$("#jr").innerHTML = R(CFG.journey, j => `<div class="vc"><div class="chip"></div><div><small>${j[2]}</small><b>${j[0]}</b><br><small style="margin-top:4px">${j[1]}</small></div></div>`);
$("#ln").innerHTML = R(CFG.links, l => `<a class="btn" target="_blank" rel="noopener" href="${l[1]}">${l[0]} ↗</a>`);
// bars + ring
const L = CFG.lc; $("#bars").innerHTML = R([["Easy", L.easy, 80], ["Medium", L.med, 60], ["Hard", L.hard, 30]], b => `<div><small><span>${b[0]}</span><span>${b[1]}</span></small><u><i data-w="${Math.min(100, b[1] / b[2] * 100)}"></i></u></div>`);
// heatmap

/* ===== LIVE GITHUB CONTRIBUTION HEATMAP ===== */

const GITHUB_USERNAME = "kumarsauravgupta";

const heatmap = document.querySelector("#hm");

// Create a contribution counter above the heatmap.
const totalEl = document.createElement("p");
totalEl.id = "gh-total";
totalEl.textContent = "Loading GitHub contributions...";

heatmap.parentElement.insertBefore(totalEl, heatmap);

async function loadGitHubHeatmap() {
    try {
        const url =
            `const GITHUB_USERNAME = "kumarsauravgupta";`;

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("GitHub contribution API request failed");
        }

        const data = await response.json();

        if (!Array.isArray(data.contributions)) {
            throw new Error("Invalid contribution data");
        }

        const days = data.contributions;

        // Display the real total for the last year.
        const total =
            data.total?.lastYear ??
            days.reduce((sum, day) => sum + day.count, 0);

        totalEl.textContent =
            `${total.toLocaleString()} contributions in the last year`;

        // Render real contribution data instead of random squares.
        heatmap.innerHTML = days.map((day, index) => {
            const level = Math.max(0, Math.min(4, day.level));

            return `
                <i
                    style="
                        --c: ${Math.floor(index / 7)};
                        background: var(--g${level});
                    "
                    title="${day.count} contributions on ${day.date}"
                    aria-label="${day.count} contributions on ${day.date}"
                ></i>
            `;
        }).join("");

        heatmap.classList.add("in");

    } catch (error) {
        console.error("GitHub heatmap error:", error);

        totalEl.textContent =
            "Unable to load contributions. Please try again later.";
    }
}

// Load immediately when the page opens.
loadGitHubHeatmap();

// Refresh the displayed data every 30 minutes.
setInterval(loadGitHubHeatmap, 30 * 60 * 1000);

// rotating word
let ri = 0; setInterval(() => { ri = (ri + 1) % CFG.role.length; const e = $("#rot"); e.style.animation = "none"; e.offsetWidth; e.style.animation = ""; e.textContent = CFG.role[ri] }, 2200);
// terminal typing
let started = false; function typeTerm() { if (started) return; started = true; const out = $("#term"); let li = 0, ci = 0, txt = ""; const tick = () => { if (li >= CFG.term.length) { out.innerHTML = txt.replace(/^(\$ .*)$/gm, '<span class="c">$1</span>') + '<span class="cur"></span>'; return } const ln = CFG.term[li]; txt += ln[ci++] || ""; if (ci > ln.length) { txt += "\n"; li++; ci = 0 } out.innerHTML = txt.replace(/^(\$ .*)$/gm, '<span class="c">$1</span>') + '<span class="cur"></span>'; setTimeout(tick, ln.startsWith("$") ? 55 : 18) }; tick() }
// observers
const io = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return; const t = e.target; t.classList.add("in");
    t.querySelectorAll("[data-to]").forEach(c => count(c));
    if (t.querySelector("#term")) typeTerm();
    if (t.querySelector("#rv")) { $("#rv").style.strokeDashoffset = 377 * (1 - Math.min(1, L.total / L.max * 8)); count($("#lt"), L.total); document.querySelectorAll("[data-w]").forEach(b => b.style.width = b.dataset.w + "%") }
    if (t.classList.contains("rv") && t.querySelector(".hm")) $("#hm").classList.add("in");
    io.unobserve(t)
}), { threshold: .2 });
function count(el, to) { to = to ?? +el.dataset.to; const s = performance.now(); const f = n => { const p = Math.min(1, (n - s) / 1400); el.textContent = Math.round(to * (1 - Math.pow(1 - p, 3))); if (p < 1) requestAnimationFrame(f) }; requestAnimationFrame(f) }
document.querySelectorAll(".rv,.stat").forEach(e => io.observe(e));
// glow, tilt, progress
addEventListener("pointermove", e => { document.documentElement.style.setProperty("--x", e.clientX + "px"); document.documentElement.style.setProperty("--y", e.clientY + "px") });
document.querySelectorAll(".card").forEach(c => { c.addEventListener("pointermove", e => { const r = c.getBoundingClientRect(), x = e.clientX - r.left, y = e.clientY - r.top; c.style.setProperty("--mx", x + "px"); c.style.setProperty("--my", y + "px"); c.style.transform = `perspective(700px) rotateX(${(.5 - y / r.height) * 6}deg) rotateY(${(x / r.width - .5) * 6}deg) translateY(-3px)` }); c.addEventListener("pointerleave", () => c.style.transform = "") });
addEventListener("scroll", () => { $("#bar").style.width = scrollY / (document.documentElement.scrollHeight - innerHeight) * 100 + "%" }, { passive: true });
$("#th").onclick = e => { e.preventDefault(); const d = document.documentElement, dark = getComputedStyle(d).getPropertyValue("--bg").trim() === "#0b0b0e"; d.dataset.theme = dark ? "light" : "dark" };
// name scramble
const nm = $("#nm"), orig = nm.textContent, ch = "01<>/{}#"; let k = 0; const sc = setInterval(() => { nm.textContent = orig.split("").map((c, i) => i < k ? c : ch[Math.floor(Math.random() * ch.length)]).join(""); if (k++ > orig.length) clearInterval(sc) }, 90);
