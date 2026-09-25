"use client";

import { useEffect, useRef, useState } from "react";

const booking = "https://www.booking.com/hotel/hr/apartments-rosetta-zara.hr.html";
const apartments = [
  { name: "Jednosobni apartman", type: "CLASSIC", size: "40 m²", rooms: "1 spavaća soba", tone: "sand", description: "Vaš mali predah od svakodnevice. Prostor za jutarnju kavu, sporo buđenje i sve one trenutke između istraživanja grada." },
  { name: "Deluxe jednosobni", type: "DELUXE", size: "50 m²", rooms: "1 spavaća soba", tone: "blue", description: "Malo više prostora za vaš ritam. Udoban dnevni boravak i zasebna spavaća soba za opušten boravak u Zadru." },
  { name: "Deluxe dvosobni", type: "DELUXE PLUS", size: "64 m²", rooms: "2 spavaće sobe", tone: "olive", description: "Prostor za zajedničke uspomene. Dvije spavaće sobe i dnevni boravak za druženje nakon dana provedenog u gradu." },
  { name: "Superior jednosobni", type: "SUPERIOR", size: "Superior", rooms: "1 spavaća soba", tone: "rose", description: "Osjećaj vlastitog kutka na Mediteranu. Udobnost apartmana i sloboda da svaki dan provedete baš onako kako želite." },
];
function Arrow() { return <span aria-hidden="true">↗</span>; }
function Rosette({ className = "" }) {
  return <svg className={className} viewBox="0 0 100 100" fill="none" aria-hidden="true">{Array.from({ length: 8 }, (_, i) => <ellipse key={i} cx="50" cy="30" rx="10" ry="23" stroke="currentColor" strokeWidth="1.4" transform={`rotate(${i * 45} 50 50)`} />)}<circle cx="50" cy="50" r="8" stroke="currentColor" strokeWidth="1.4" /></svg>;
}
function Placeholder({ tone = "sand", label, className = "" }) {
  return <div className={`photo-placeholder ${tone} ${className}`} role="img" aria-label={`Mjesto za fotografiju: ${label}`}><div className="scene"><div className="scene-sun" /><div className="scene-arch" /><div className="scene-horizon" /><div className="scene-floor" /></div><span className="placeholder-tag">ROSETTA ZARA · {label}</span><span className="placeholder-note">Mjesto za fotografiju</span></div>;
}
export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const dialog = useRef(null);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 72);
    update(); window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  useEffect(() => {
    if (selected) { dialog.current.showModal(); const previous = document.body.style.overflow; document.body.style.overflow = "hidden"; return () => { document.body.style.overflow = previous; }; }
  }, [selected]);
  const closeMenu = () => setMenuOpen(false);
  return <>
    <a className="skip-link" href="#main">Preskoči na sadržaj</a>
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <a className="brand" href="#" aria-label="Rosetta Zara početna"><Rosette /><span>rosetta<span className="brand-sub">ZARA APARTMENTS</span></span></a>
      <div className={`nav-dock ${menuOpen ? "menu-open" : ""}`}>
        <div className="glass-panel" />
        <button className="menu-toggle" aria-expanded={menuOpen} aria-controls="main-navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? "Zatvori −" : "Izbornik +"}</button>
        <nav id="main-navigation" aria-label="Glavna navigacija"><a href="#o-nama" onClick={closeMenu}>O nama</a><a href="#apartmani" onClick={closeMenu}>Apartmani</a><a href="#galerija" onClick={closeMenu}>Galerija</a><a href="#lokacija" onClick={closeMenu}>Zadar</a></nav>
        <a className="button nav-cta" href="#rezervacija" onClick={closeMenu}>Rezervirajte <span className="desktop-word">boravak</span><Arrow /></a>
      </div>
    </header>
    <main id="main">
      <section className="hero" aria-labelledby="hero-heading">
        <div className="hero-topline"><span className="eyebrow"><i /> ZADAR, HRVATSKA</span><span className="hero-coordinate">44°06′ N &nbsp; 15°14′ E</span></div>
        <div className="hero-heading"><h1 id="hero-heading">Manje žurbe.<br />Više <em>Mediterana.</em></h1><div className="hero-intro"><p>Vaš vlastiti kutak u Zadru.<br />Za duga jutra, sunčane dane<br />i odmor u vašem ritmu.</p><a href="#apartmani" className="text-link">Pronađite svoj apartman <Arrow /></a></div></div>
        <div className="hero-visual"><Placeholder tone="coast" label="ATMOSFERA & EKSTERIJER" /><div className="hero-caption"><span>Raspakirajte se.<br /><em>Ostatak može pričekati.</em></span><a href="#o-nama" aria-label="Otkrijte Rosetta Zara apartmane">↓</a></div><div className="sun-seal"><Rosette /><span>A LITTLE MORE<br />DOLCE FAR NIENTE</span></div></div>
        <div className="hero-bottom"><span>APARTMANI S MEDITERANSKIM OSJEĆAJEM</span><span>Vaš odmor počinje ovdje. <span aria-hidden="true">↘</span></span></div>
      </section>
      <section className="about section-wrap" id="o-nama"><div><span className="eyebrow">01 / DOBRO DOŠLI U ROSETTU</span><Rosette className="about-rosette" /></div><div><h2>Negdje između<br />grada i <em>laganog života.</em></h2><div className="about-copy"><p>Najljepši dio putovanja? Onaj trenutak kada se osjećate kao kod kuće. Rosetta Zara je vaše mjesto za predah, jutarnju kavu i planove koji ne moraju imati raspored.</p><p>Smjestite se u jedan od naših apartmana, pronađite svoj ritam i upoznajte Zadar. Mi smo tu da vaš boravak bude jednostavan i ugodan.</p></div></div></section>
      <div className="amenities section-wrap">{[["P", "Privatni parking"], ["⌁", "Besplatan Wi-Fi"], ["❋", "Klimatizirani prostori"], ["⌂", "Opremljena kuhinja"], ["☼", "Terase i balkoni"]].map(([icon, text]) => <div key={text}><span aria-hidden="true">{icon}</span>{text}</div>)}</div>
      <section className="apartments section-wrap" id="apartmani"><div className="section-heading"><div><span className="eyebrow">02 / PRONAĐITE SVOJ PROSTOR</span><h2>Četiri načina da<br />se osjećate <em>kao doma.</em></h2></div><p>Za putovanja udvoje ili zajedničke dane.<br />Odaberite prostor koji vam odgovara.</p></div><div className="apartment-grid">{apartments.map((apt, index) => <button className="apartment-card" key={apt.type} onClick={() => setSelected(apt)} aria-label={`Pogledajte ${apt.name}`}><div className="card-visual"><Placeholder tone={apt.tone} label={apt.type} /><span className="card-number">0{index + 1}</span><span className="card-view">Istražite apartman <Arrow /></span></div><div className="card-info"><div><h3>{apt.name}</h3><p>{apt.size} <span>·</span> {apt.rooms}</p></div><span className="circle-arrow"><Arrow /></span></div></button>)}</div></section>
      <section className="slow-section"><div className="slow-copy"><span className="eyebrow">MALI TRENUTCI. VELIKI ODMOR.</span><h2>Ovdje je jedini plan<br /><em>uživati polako.</em></h2><p>Kava koja se ne pije s nogu. Još jedno poglavlje knjige. Večer koja traje malo duže. Napravite mjesta za ono što vam nedostaje.</p><a href="#rezervacija" className="button light-button">Vrijeme je za vaš odmor <Arrow /></a></div><div className="slow-art"><Rosette /><span>take it<br /><em>slow.</em></span><small>ZADAR STATE OF MIND</small></div></section>
      <section className="gallery section-wrap" id="galerija"><div className="section-heading"><div><span className="eyebrow">03 / OSJETITE ATMOSFERU</span><h2>Detalji koji čine <em>boravak.</em></h2></div><span className="gallery-note">Mali pogled u vaš sljedeći odmor.</span></div><div className="gallery-grid"><Placeholder tone="sand" label="DNEVNI BORAVAK" /><Placeholder tone="rose" label="TRENUTCI ODMORA" /><Placeholder tone="blue" label="TERASA & DETALJI" /></div></section>
      <section className="location section-wrap" id="lokacija"><div className="location-art"><Placeholder tone="coast" label="ZADAR & OKOLICA" /><div className="location-label"><span>Adriatic coast</span><strong>Zadar.</strong><small>DALMATIA, CROATIA</small></div></div><div className="location-copy"><span className="eyebrow">04 / GRAD KOJI SE PAMTI</span><h2>Sunce, more.<br />I malo <em>Zadra.</em></h2><p>Izgubite se u ulicama staroga grada, poslušajte more i dočekajte večer uz obalu. Vratite se u svoj apartman — sutra vas čeka još jedan dan za istraživanje.</p><div className="distances"><div><strong>2,4 <small>km</small></strong><span>Plaža Kolovare</span></div><div><strong>9 <small>km</small></strong><span>Zračna luka Zadar</span></div></div><a className="text-link" href="https://www.google.com/maps/search/?api=1&query=Zagrebacka+cesta+22+Zadar+Croatia" target="_blank" rel="noreferrer">Zagrebačka cesta 22, Zadar <Arrow /></a><small className="distance-note">Navedene udaljenosti su približne.</small></div></section>
      <section className="faq section-wrap"><div><span className="eyebrow">DOBRO JE ZNATI</span><h2>Za bezbrižan <em>dolazak.</em></h2></div><div className="faq-list">{[["Je li dostupan parking?", "Da, gostima je na raspolaganju besplatan privatni parking u sklopu objekta."], ["Mogu li kuhati u apartmanu?", "Apartmani imaju opremljene kuhinje. Detaljnu opremu odabrane jedinice provjerite prilikom rezervacije."], ["Kako provjeriti cijene i dostupnost?", "Aktualne cijene, slobodne termine, kapacitet i uvjete boravka možete provjeriti putem našeg profila na Bookingu." ]].map(([q,a]) => <details key={q}><summary>{q}<span aria-hidden="true">+</span></summary><p>{a}</p></details>)}</div></section>
      <section className="reservation" id="rezervacija"><Rosette /><span className="eyebrow">VAŠ MEDITERANSKI PREDAH</span><h2>Neki dani zaslužuju<br /><em>promjenu adrese.</em></h2><p>Neka vaša sljedeća bude Rosetta Zara.</p><a className="button" href={booking} target="_blank" rel="noreferrer">Provjerite dostupnost <Arrow /></a><small>Termini i rezervacije putem Booking.com-a</small></section>
    </main>
    <footer className="section-wrap"><a className="brand" href="#"><Rosette /><span>rosetta<span className="brand-sub">ZARA APARTMENTS</span></span></a><p>Zagrebačka cesta 22<br />23000 Zadar, Hrvatska</p><a href={booking} target="_blank" rel="noreferrer">Pronađite nas na Bookingu <Arrow /></a><div className="footer-bottom"><span>© {new Date().getFullYear()} Rosetta Zara</span><span>Pomalo. Na zadarski način.</span></div></footer>
    <dialog ref={dialog} onClose={() => setSelected(null)} onClick={(event) => { if(event.target === event.currentTarget) dialog.current.close(); }} aria-labelledby="apartment-title">{selected && <><button className="dialog-close" autoFocus onClick={() => dialog.current.close()} aria-label="Zatvori detalje">×</button><Placeholder tone={selected.tone} label={selected.type} /><div className="dialog-content"><span className="eyebrow">ROSETTA ZARA / {selected.type}</span><h2 id="apartment-title">{selected.name}</h2><p className="dialog-meta">{selected.size} · {selected.rooms}</p><p>{selected.description}</p><p className="dialog-features">Kuhinja · Klima · Privatna kupaonica · Parking</p><a href={booking} className="button" target="_blank" rel="noreferrer">Provjerite termine i detalje <Arrow /></a></div></>}</dialog>
  </>;
}
