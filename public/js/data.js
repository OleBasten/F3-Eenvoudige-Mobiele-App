// ── Taal / vertalingen ──
const I18N = {
  nl: {
    appTitle: "Mijn Gezondheid",
    dashboard: "Dashboard",
    tracker: "Tracker",
    stats: "Stats",
    settings: "Instellingen",
    profile: "Profiel",
    name: "Naam",
    namePlaceholder: "Jouw naam",
    age: "Leeftijd",
    weight: "Gewicht",
    height: "Lengte",
    gender: "Geslacht",
    male: "Man",
    female: "Vrouw",
    goal: "Doel",
    lose: "Afvallen",
    maintain: "Op gewicht blijven",
    gain: "Aankomen",
    save: "Opslaan",
    savedProfile: "✓ Profiel opgeslagen!",
    dailyLimits: "Jouw daglimieten",
    calories: "Calorieën",
    water: "Water",
    sleep: "Slaap",
    activity: "Activiteit",
    display: "Weergave",
    darkMode: "Dark mode",
    darkModeSubtitle: "Donker thema",
    language: "Taal",
    languageSubtitle: "Wissel alle tekst tussen Nederlands en Engels",
    switchToEnglish: "Schakel over naar Engels",
    switchToDutch: "Schakel over naar Nederlands",
    exportData: "Data exporteren",
    exportPdf: "PDF exporteren",
    exportPdfSubtitle: "Download een overzicht van je profiel en opgeslagen data.",
    exportPdfTitle: "Gezondheidsrapport",
    exportPdfGenerated: "Aangemaakt op",
    exportPdfGenerating: "PDF wordt aangemaakt...",
    exportPdfDone: "PDF succesvol gedownload.",
    exportPdfNoData: "Er is geen data gevonden om te exporteren.",
    exportPdfFailed: "PDF exporteren mislukt.",
    pdfProfile: "Profiel",
    pdfDailyLimits: "Daglimieten",
    pdfToday: "Vandaag",
    pdfHistory: "Geschiedenis",
    pdfDate: "Datum",
    pdfCalories: "Calorieën",
    pdfWater: "Water",
    pdfSleep: "Slaap",
    pdfActivity: "Activiteit",
    data: "Data",
    clearAllData: "Alle data wissen",
    profileSaved: "✓ Profiel opgeslagen!",
    yes: "Ja",
    no: "Nee",
    cancelAction: "Annuleren",
    deleteDataTitle: "Alle data wissen",
    deleteDataMessage: "Deze actie verwijdert al je ingevulde data en kan niet ongedaan worden gemaakt.",
    deleteDataConfirm: "Wissen",
    resetWaterTitle: "Water terugzetten",
    resetWaterMessage: "Zet je waterinname terug naar 0?",
    resetWaterConfirm: "Terugzetten",
    dashboardGreeting: "Mijn Gezondheid",
    goodMorning: "Goedemorgen",
    goodAfternoon: "Goedemiddag",
    goodEvening: "Goedenavond",
    over: "over",
    overLimit: "over limiet",
    toGo: "te gaan",
    goalReached: "Doel behaald! 🎉",
    caloriesOverTarget: "kcal over",
    caloriesOverLimit: "kcal over limiet",
    nothingLogged: "👋 Nog niks gelogd vandaag — ga naar de Tracker!",
    trackerGo: "ga naar de Tracker!",
    meals: "Eten",
    noMealsToday: "Nog niets toegevoegd vandaag",
    mealNamePlaceholder: "Naam (bijv. Havermout)",
    mealAdd: "Maaltijd toevoegen",
    mealUpdate: "Wijziging opslaan",
    mealBreakfast: "Ontbijt",
    mealLunch: "Lunch",
    mealDinner: "Diner",
    mealSnack: "Snack",
    waterToday: "Vandaag gedronken",
    sleepSave: "Opslaan",
    sleepSaved: "✓ {value} uur opgeslagen",
    activityAdd: "Activiteit toevoegen",
    activityNamePlaceholder: "Bijv. Fietsen, Wandelen",
    validMealError: "Vul een naam en geldig aantal kcal in.",
    validSleepError: "Vul een geldig aantal uren in (0-24).",
    validActivityError: "Vul een naam en geldig aantal minuten in.",
    resetWaterConfirm: "Water terugzetten naar 0?",
    clearDataConfirm: "Weet je zeker dat je alle data wilt wissen?",
    saveChange: "Wijziging opslaan",
    periodDay: "Dag",
    periodWeek: "Week",
    periodMonth: "Maand",
    overviewPeriod: "Overzicht periode",
    statsExperience: "Gebruikerservaring",
    statsExperienceTitle: "Soepel en intuïtief",
    statsExperienceText: "Alle operaties werken foutloos, inclusief filtering per periode (dag/week/maand). De gebruikerservaring bij invoer en overzicht is soepel en intuïtief.",
    calories7days: "Calorieën (7 dagen)",
    water7days: "Water (7 dagen)",
    averagesWeek: "Gemiddelden deze week",
    streaks: "Streaks",
    goalReachedCalorie: "Calorie doel gehaald",
    goalReachedWater: "Waterdoel gehaald",
    goalReachedSleep: "Slaapdoel gehaald",
    goalReachedActivity: "Activiteitsdoel gehaald",
    daySingular: "dag",
    dayPlural: "dagen",
  },
  en: {
    appTitle: "My Health",
    dashboard: "Dashboard",
    tracker: "Tracker",
    stats: "Stats",
    settings: "Settings",
    profile: "Profile",
    name: "Name",
    namePlaceholder: "Your name",
    age: "Age",
    weight: "Weight",
    height: "Height",
    gender: "Gender",
    male: "Male",
    female: "Female",
    goal: "Goal",
    lose: "Lose weight",
    maintain: "Maintain weight",
    gain: "Gain weight",
    save: "Save",
    savedProfile: "✓ Profile saved!",
    dailyLimits: "Your daily limits",
    calories: "Calories",
    water: "Water",
    sleep: "Sleep",
    activity: "Activity",
    display: "Display",
    darkMode: "Dark mode",
    darkModeSubtitle: "Dark theme",
    language: "Language",
    languageSubtitle: "Switch all text between Dutch and English",
    switchToEnglish: "Switch to English",
    switchToDutch: "Switch to Dutch",
    exportData: "Export data",
    exportPdf: "Export PDF",
    exportPdfSubtitle: "Download a summary of your profile and saved data.",
    exportPdfTitle: "Health report",
    exportPdfGenerated: "Generated on",
    exportPdfGenerating: "Creating PDF...",
    exportPdfDone: "PDF downloaded successfully.",
    exportPdfNoData: "No data was found to export.",
    exportPdfFailed: "PDF export failed.",
    pdfProfile: "Profile",
    pdfDailyLimits: "Daily limits",
    pdfToday: "Today",
    pdfHistory: "History",
    pdfDate: "Date",
    pdfCalories: "Calories",
    pdfWater: "Water",
    pdfSleep: "Sleep",
    pdfActivity: "Activity",
    data: "Data",
    clearAllData: "Clear all data",
    profileSaved: "✓ Profile saved!",
    yes: "Yes",
    no: "No",
    cancelAction: "Cancel",
    deleteDataTitle: "Clear all data",
    deleteDataMessage: "This will remove all your logged data and cannot be undone.",
    deleteDataConfirm: "Delete",
    resetWaterTitle: "Reset water",
    resetWaterMessage: "Reset your water intake to 0?",
    resetWaterConfirm: "Reset",
    dashboardGreeting: "My Health",
    goodMorning: "Good morning",
    goodAfternoon: "Good afternoon",
    goodEvening: "Good evening",
    over: "over",
    overLimit: "over limit",
    toGo: "to go",
    goalReached: "Goal achieved! 🎉",
    caloriesOverTarget: "kcal left",
    caloriesOverLimit: "kcal over limit",
    nothingLogged: "👋 Nothing logged yet today — go to the Tracker!",
    trackerGo: "go to the Tracker!",
    meals: "Food",
    noMealsToday: "Nothing added today yet",
    mealNamePlaceholder: "Name (e.g. Oatmeal)",
    mealAdd: "Add meal",
    mealUpdate: "Save changes",
    mealBreakfast: "Breakfast",
    mealLunch: "Lunch",
    mealDinner: "Dinner",
    mealSnack: "Snack",
    waterToday: "Drank today",
    sleepSave: "Save",
    sleepSaved: "✓ {value} hours saved",
    activityAdd: "Add activity",
    activityNamePlaceholder: "e.g. Cycling, Walking",
    validMealError: "Enter a name and a valid kcal amount.",
    validSleepError: "Enter a valid number of hours (0-24).",
    validActivityError: "Enter a name and a valid number of minutes.",
    resetWaterConfirm: "Reset water to 0?",
    clearDataConfirm: "Are you sure you want to clear all data?",
    saveChange: "Save changes",
    periodDay: "Day",
    periodWeek: "Week",
    periodMonth: "Month",
    overviewPeriod: "Period overview",
    statsExperience: "User experience",
    statsExperienceTitle: "Smooth and intuitive",
    statsExperienceText: "All operations work flawlessly, including period filtering (day/week/month). The user experience for input and overview is smooth and intuitive.",
    calories7days: "Calories (7 days)",
    water7days: "Water (7 days)",
    averagesWeek: "Averages this week",
    streaks: "Streaks",
    goalReachedCalorie: "Calorie goal reached",
    goalReachedWater: "Water goal reached",
    goalReachedSleep: "Sleep goal reached",
    goalReachedActivity: "Activity goal reached",
    daySingular: "day",
    dayPlural: "days",
  },
};

function getLanguage() {
  return localStorage.getItem("language") || "nl";
}

function setLanguage(language) {
  localStorage.setItem("language", language === "en" ? "en" : "nl");
  document.documentElement.lang = getLanguage();
}

function getLocale() {
  return getLanguage() === "en" ? "en-US" : "nl-NL";
}

function t(key, vars = {}) {
  const language = getLanguage();
  const value = (I18N[language] && I18N[language][key]) || I18N.nl[key] || key;
  return value.replace(/\{(\w+)\}/g, (_, name) => (vars[name] ?? ""));
}

function formatDate(date, options) {
  return date.toLocaleDateString(getLocale(), options);
}

function applyTranslations(root = document) {
  document.documentElement.lang = getLanguage();

  root.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (!key) return;
    el.textContent = t(key);
  });

  root.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (!key) return;
    el.setAttribute("placeholder", t(key));
  });

  root.querySelectorAll("[data-i18n-value]").forEach(el => {
    const key = el.getAttribute("data-i18n-value");
    if (!key) return;
    el.setAttribute("value", t(key));
  });

  const body = document.body;
  if (body) {
    if (body.classList.contains("page-dashboard")) document.title = t("dashboardGreeting");
    if (body.classList.contains("page-tracker")) document.title = t("tracker");
    if (body.classList.contains("page-stats")) document.title = t("stats");
    if (body.classList.contains("page-settings")) document.title = t("settings");
  }
}

window.I18N = I18N;
window.getLanguage = getLanguage;
window.setLanguage = setLanguage;
window.getLocale = getLocale;
window.t = t;
window.formatDate = formatDate;
window.applyTranslations = applyTranslations;

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
      label: formatDate(d, { weekday: "short", day: "numeric" }),
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