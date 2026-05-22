// ── Profiel ──
function getProfiel() {
  return JSON.parse(localStorage.getItem("profiel") || "{}");
}
function saveProfiel(p) {
  localStorage.setItem("profiel", JSON.stringify(p));
}

// ── Limieten berekenen (Mifflin-St Jeor formule) ──
function getLimieten() {
  const p = getProfiel();
  const geslacht = p.geslacht  || "man";
  const gewicht  = parseFloat(p.gewicht)  || 70;
  const lengte   = parseFloat(p.lengte)   || 175;
  const leeftijd = parseFloat(p.leeftijd) || 25;
  const doel     = p.doel      || "onderhoud";

  let bmr = geslacht === "man"
    ? 10 * gewicht + 6.25 * lengte - 5 * leeftijd + 5
    : 10 * gewicht + 6.25 * lengte - 5 * leeftijd - 161;

  let kcal = Math.round(bmr * 1.375);
  if (doel === "afvallen") kcal = Math.round(kcal * 0.85);
  if (doel === "aankomen") kcal = Math.round(kcal * 1.15);

  return {
    kcal,
    water:      Math.round(gewicht * 0.033 * 10) / 10,
    slaap:      8,
    activiteit: 30,
  };
}

// ── Datum van vandaag als sleutel ──
function vandaag() {
  return new Date().toISOString().slice(0, 10); // bijv. "2025-05-20"
}

// ── Dagdata ophalen en opslaan ──
function getDagData(datum) {
  const key = "dag_" + (datum || vandaag());
  return JSON.parse(localStorage.getItem(key) || JSON.stringify({
    maaltijden:   [],
    water:        0,
    slaap:        0,
    activiteiten: [],
    activiteit:   0,
  }));
}
function saveDagData(data, datum) {
  localStorage.setItem("dag_" + (datum || vandaag()), JSON.stringify(data));
}

// ── Totalen van vandaag ──
function getTotalen() {
  const d = getDagData();
  return {
    kcal:        d.maaltijden.reduce((s, m) => s + (m.kcal || 0), 0),
    water:       d.water,
    slaap:       d.slaap,
    activiteit:  d.activiteit || 0,
    maaltijden:  d.maaltijden,
    activiteiten: d.activiteiten || [],
  };
}

// ── Afgelopen N dagen ophalen (voor stats) ──
function getLaatsteDagen(n) {
  const dagen = [];
  for (let i = n - 1; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const datum = d.toISOString().slice(0, 10);
    const data  = getDagData(datum);
    dagen.push({
      datum,
      label: d.toLocaleDateString("nl-NL", { weekday: "short", day: "numeric" }),
      kcal:  data.maaltijden.reduce((s, m) => s + (m.kcal || 0), 0),
      water: data.water,
      slaap: data.slaap,
      activiteit: data.activiteit || 0,
    });
  }
  return dagen;
}

// ── Dark mode toepassen bij laden ──
if (localStorage.getItem("darkMode") === "true") {
  document.body.classList.add("dark");
}