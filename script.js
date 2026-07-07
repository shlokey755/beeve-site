document.getElementById('year').textContent = new Date().getFullYear();

/* ---- mobile nav ---- */
const navToggle = document.getElementById('navToggle');
const header = document.getElementById('siteHeader');
navToggle.addEventListener('click', () => {
  const open = header.classList.toggle('open');
  navToggle.classList.toggle('active', open);
  navToggle.setAttribute('aria-expanded', open);
});
document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => {
    header.classList.remove('open');
    navToggle.classList.remove('active');
  });
});

/* ---- service tabs ---- */
const tabBtns = document.querySelectorAll('.tab-btn');
tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    tabBtns.forEach(b => { b.classList.remove('active'); b.setAttribute('aria-selected','false'); });
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    btn.setAttribute('aria-selected','true');
    document.getElementById(btn.dataset.tab).classList.add('active');
  });
});

/* ---- data-driven grids ---- */
const products = [
  "Wired GPS Tracking Devices","Wireless GPS Tracking Devices","OBD GPS Tracking Devices",
  "Electric Vehicle (EV) GPS Trackers","Smart Wheel Lock GPS Trackers","Smart Container GPS Locks",
  "Asset Tracking Devices","Battery Management System (BMS) IoT Trackers","Fuel Monitoring Systems",
  "AI-Powered GPS Dashcams (ADAS & DMS)","RFID & Smart Access Control Solutions",
  "Temperature & Humidity Monitoring Solutions","Cold Chain Monitoring Systems",
  "BLE (Bluetooth Low Energy) Sensors","Cargo & Fleet Monitoring Solutions",
  "Personal Safety & SOS Tracking Devices","School Bus Tracking Systems",
  "Fleet Management Solutions","Vehicle Immobilization & Remote Engine Control",
  "AI-Based Video Telematics Solutions"
];
const productGrid = document.getElementById('productGrid');
productGrid.innerHTML = products.map((p,i) => `
  <div class="product-card">
    <div class="idx">${String(i+1).padStart(2,'0')}</div>
    <h4>${p}</h4>
  </div>`).join('');

const tech = [
  ["4G LTE, NB-IoT & LTE Cat-M1","Cellular communication technologies"],
  ["GPS, GLONASS, Galileo & BeiDou","Multi-constellation satellite positioning"],
  ["Bluetooth Low Energy 5.0","Short-range wireless connectivity"],
  ["OBD-II Integration","On-board diagnostics for vehicles"],
  ["LoRaWAN","Long-range IoT communication"],
  ["CAN Bus & CAN FD","Vehicle data communication"],
  ["UART, RS232 & RS485","Embedded communication protocols"],
  ["AI-Powered Analytics","Predictive intelligence at scale"],
  ["Cloud Computing & IoT Platforms","Scalable connected infrastructure"],
  ["Real-Time GPS & Telematics","Live location and vehicle data"],
  ["BMS Integration","Battery management system connectivity"],
  ["RFID, NFC & Smart ID","Identification technologies"],
  ["Embedded Systems","Microcontroller development"],
  ["Edge Computing","Intelligent on-device automation"],
  ["REST APIs","Third-party system integration"],
  ["Android, iOS & Web Apps","Cross-platform applications"],
  ["Data Security & Encryption","Secure cloud infrastructure"],
  ["OTA Firmware Updates","Remote device updates"],
  ["IoT Device Management","Remote monitoring at scale"],
  ["BI Dashboards","Advanced reporting & analytics"]
];
document.getElementById('techGrid').innerHTML = tech.map(([t,d]) => `
  <div class="tech-item"><b>${t}</b>${d}</div>`).join('');

const industries = [
  "Transportation & Logistics","Electric Vehicles (EVs)","Agriculture & Precision Farming",
  "Forestry & Agricultural Machinery","Construction & Infrastructure","Mining & Heavy Equipment",
  "Oil & Gas","Manufacturing & Industrial Automation","Medical Equipment & Healthcare",
  "Hospitals & Diagnostic Centers","Defence & Homeland Security","Government & Smart City Projects",
  "Educational Institutions & School Transport","Rental & Leasing Fleet Management",
  "Banking & Financial Institutions","Retail & Supply Chain Management",
  "Warehousing & Cold Chain Logistics","Renewable Energy & Solar Projects",
  "Electronic Waste Management","Ports, Shipping & Container Logistics"
];
document.getElementById('industryGrid').innerHTML = industries.map(i => `
  <div class="industry-card">${i}</div>`).join('');

/* ---- contact form (client-side only, no backend wired up) ---- */
const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');
form.addEventListener('submit', e => {
  e.preventDefault();
  status.textContent = 'Thank you — your message has been noted. Our team will reach out shortly.';
  form.reset();
});

/* ---- reveal on scroll ---- */
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver(entries => {
  entries.forEach(en => { if (en.isIntersecting) en.target.classList.add('in'); });
}, { threshold: 0.15 });
revealEls.forEach(el => io.observe(el));

/* ---- header bg on scroll + back to top ---- */
const toTop = document.getElementById('toTop');
window.addEventListener('scroll', () => {
  toTop.classList.toggle('show', window.scrollY > 500);
});
toTop.addEventListener('click', () => window.scrollTo({ top:0, behavior:'smooth' }));
