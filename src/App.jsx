import React, { useEffect, useState } from 'react';

const TRIP = 'https://www.muchbetteradventures.com/products/10806-adventures-winter-adventure-finnish-lapland/';
// Externally hosted editorial images are illustrative. They are not represented as MBA-owned assets.
const IM = {
  hero: 'https://www.thetravellab.nl/wp-content/uploads/shutterstock_2517729111-1600x873.jpg',
  husky: 'https://wa-uploads.profitroom.com/wildernesshotelmuotoka1/885x617/17320920972411_wilderneshotelmuotkahuskytour011.jpg',
  dogDetail: 'https://yvettheworld.com/wp-content/uploads/2024/03/VideoCapture_20240310-123503-01-800x800.webp',
  snowmobile: 'https://images.ctfassets.net/m5us57n7qfgl/pRVdzPpuWbdZkLXjt7PSP/35b43200c2f31b51133e18f7bea98eca/Snowmobile_Pyha__Finland__NLV.jpg',
  reindeer: 'https://laplandvibes.com/images/vibes/cabinReindeer.webp',
  aurora: 'https://www.au-bord-du-quai.fr/assets/articles/laponie-hero.webp',
  night: 'https://images.musement.com/cover/0112/73/thumb_11172802_cover_header.jpeg?fit=crop&h=630&q=95&w=1200',
  cabin: 'https://images.ctfassets.net/6xuvngqqn06x/7KDPL4kFsmbuzg7bORm4g9/560e0c1cb7012fab0157a7542323c4f8/Mountains__Fjords___Norwegian_Coastal_Voyage__2_.png',
  group: 'https://laplandvibes.com/images/vibes/huskyExpedition.webp',
};

function Photo({ src, alt, className = '', priority = false }) {
  const [failed, setFailed] = useState(false);
  return <div className={`photo ${className} ${failed ? 'photo--failed' : ''}`}>
    {!failed && <img src={src} alt={alt} loading={priority ? 'eager' : 'lazy'} fetchPriority={priority ? 'high' : undefined} decoding="async" onError={() => setFailed(true)} />}
    {failed && <span className="photo-fallback" aria-label="Image currently unavailable">ARCTIC WILDERNESS <span>—</span> FINLAND</span>}
  </div>;
}
function CTA({ children='Explore dates & prices', light=false, outline=false, className='' }) {
  return <a className={`cta ${light?'cta--light':''} ${outline?'cta--outline':''} ${className}`} href={TRIP} target="_blank" rel="noopener noreferrer">{children}<span aria-hidden="true">↗</span></a>;
}
const activities = [
  { n:'01', heading:'Meet your husky team.', desc:"Set off on a two-hour husky sledding adventure across the snowy fells. It's a proper Arctic classic, and a rather good way to see the wilderness.", image: IM.husky, alt:'Husky sled team travelling along a snowy forest trail' },
  { n:'02', heading:'Take the scenic route.', desc:'Ride an electric snowmobile through Lapland’s winter landscape before visiting Kopara Reindeer Park.', image:IM.snowmobile, alt:'Electric snowmobiles on a snowy trail in Pyhä, Finland' },
  { n:'03', heading:'Find your feet in the snow.', desc:'Explore Pyhä-Luosto National Park on a guided snowshoe hike, with a campfire lunch to warm you up along the way.', image:IM.reindeer, alt:'Reindeer among the snowy trees of Finnish Lapland' },
  { n:'04', heading:'Look up. Stay a while.', desc:"Head out on a guided night hike in search of the Northern Lights, with photography tips to help you capture the moment. Seeing them isn't guaranteed, of course, but the Arctic night is worth experiencing either way.", image:IM.aurora, alt:'Northern Lights illuminating a snowy Finnish forest' },
  { n:'05', heading:'Embrace the Finnish way to warm up.', desc:"Take the plunge into an icy lake, then settle into a traditional Finnish sauna. It's a rather different kind of spa day.", image:IM.night, alt:'Warmly lit Arctic cabin beneath the aurora' },
];
const days = [
  {d:'01', title:'Arrive in the Arctic', copy:'Meet your local guides, settle into your woodland cabin and get acquainted with the wilderness. If conditions allow, head out on a guided night hike in search of the Northern Lights.', tag:'ARRIVAL · WELCOME DINNER', photo:IM.aurora, alt:'Snow-covered forest beneath the Northern Lights'},
  {d:'02', title:'Snowmobiles and reindeer', copy:'Ride an electric snowmobile through the winter landscape, then visit Kopara Reindeer Park. After a day outdoors, return to your cosy cabin for dinner.',tag:'ELECTRIC SNOWMOBILES · REINDEER',photo:IM.snowmobile,alt:'Travellers riding electric snowmobiles in Finnish Lapland'},
  {d:'03', title:'Snowshoes, sauna and an icy plunge',copy:'Explore Pyhä-Luosto National Park on a guided snowshoe hike, stopping for lunch around a campfire. Later, experience a traditional Finnish sauna and ice dip before settling into your aurora cabin or sky-view suite.',tag:'NATIONAL PARK · FINNISH SAUNA',photo:IM.reindeer,alt:'Winter landscape with reindeer in Finnish Lapland'},
  {d:'04', title:'Go husky sledding',copy:'Take the reins for a two-hour husky sledding experience across the snowy fells. Make the most of your final day in Lapland before gathering for a farewell dinner.',tag:'HUSKY SLEDDING · FAREWELL DINNER',photo:IM.husky,alt:'Huskies pulling a sled across the snow'},
  {d:'05',title:'One last Arctic morning',copy:"Enjoy breakfast before your transfer to Rovaniemi Airport. Five days ago, this was a trip you were thinking about. Now you'll have the stories to show for it.",tag:'BREAKFAST · DEPARTURE',photo:IM.night,alt:'Cabin in the snowy Arctic night'}
];
const faqs = [
  ['Can I join if I’m travelling solo?',"Absolutely. The trip is designed to be solo-friendly, with a small group of fellow travellers who share a love of the outdoors. You don't need to arrive with your own crew."],
  ['Do I need lots of winter adventure experience?','No. This is a Level 1 trip, suitable for people with basic fitness. You should be happy being outdoors in very cold conditions, and come prepared with the right clothing.'],
  ['Will I definitely see the Northern Lights?',"Nobody can promise that. The guides will take you out in search of them, but sightings depend on conditions beyond anyone's control."],
  ['Are flights included?','No. Flights to and from Finland are booked separately. Airport transfers and transport during the trip are included as detailed on the official listing.'],
  ['Where can I check dates and prices?','Head to the official trip page for current departures, prices, availability and full booking information.']
];
function Header({ scrolled }) {
  const [menu,setMenu] = useState(false);
  const close = () => setMenu(false);
  return <header className={`site-header ${scrolled?'site-header--solid':''}`}>
    <a className="brand" href="#top" onClick={close} aria-label="Back to top"><span className="brand-symbol" aria-hidden="true">✳</span><span className="brand-type">much better<br/><strong>adventures.</strong></span></a>
    <button className="menu-toggle" onClick={()=>setMenu(!menu)} aria-expanded={menu} aria-controls="nav-links" aria-label={menu?'Close menu':'Open menu'}>{menu?'Close ✕':'Menu ☰'}</button>
    <nav id="nav-links" className={menu?'nav-open':''} aria-label="Page navigation"><a href="#experiences" onClick={close}>The adventure</a><a href="#itinerary" onClick={close}>Itinerary</a><a href="#stays" onClick={close}>Where you'll stay</a><a href="#details" onClick={close}>Trip details</a><CTA className="nav-book">See dates <span className="sr-only">and prices</span></CTA></nav>
  </header>;
}
function FAQ() { const [active,setActive] = useState(0); return <div className="faq-list">{faqs.map(([q,a],i)=><div className="faq-item" key={q}><h3><button id={`faq-b-${i}`} type="button" aria-expanded={active===i} aria-controls={`faq-a-${i}`} onClick={()=>setActive(active===i?-1:i)}><span>{q}</span><span className="faq-plus" aria-hidden="true">{active===i?'−':'+'}</span></button></h3><div id={`faq-a-${i}`} role="region" aria-labelledby={`faq-b-${i}`} hidden={active!==i}><p>{a}</p></div></div>)}</div> }
export default function App(){
  const [scrolled,setScrolled] = useState(false);
  useEffect(()=>{const update=()=>setScrolled(window.scrollY>window.innerHeight*.86);update();window.addEventListener('scroll',update,{passive:true});return ()=>window.removeEventListener('scroll',update)},[]);
  useEffect(()=>{const els=document.querySelectorAll('.reveal');if(!('IntersectionObserver' in window))return;const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('shown');obs.unobserve(e.target)}}),{threshold:.07});els.forEach(e=>obs.observe(e));return()=>obs.disconnect()},[]);
  return <>
    <Header scrolled={scrolled}/>
    <main>
      <section id="top" className="hero">
        <Photo src={IM.hero} priority alt="Husky sled team crossing a snow-covered Lapland landscape under the Northern Lights" className="hero-photo" />
        <div className="hero-shade" />
        <div className="hero-content wrap"><p className="eyebrow eyebrow--light">FINLAND <span>✳</span> 4 NIGHTS <span>✳</span> LEVEL 1</p><h1><span className="hero-explore">EXPLORE</span><span className="hero-lapland">FINNISH<br/>LAPLAND<span className="period">.</span></span></h1><div className="hero-bottom"><div><h2>A little Arctic wilderness.<br/>A lot to write home about.</h2><p>Husky sledding through snowy forests, nights beneath the Northern Lights and a glass-roofed cabin to come back to. Four nights in Finnish Lapland, with expert local guides and a small group of fellow adventurers.</p><p>No need to wait until everyone's free. Your next adventure starts here.</p><CTA light>EXPLORE DATES & PRICES</CTA></div><p className="hero-side">4 NIGHTS&nbsp; / &nbsp;SMALL GROUPS&nbsp; / &nbsp;SOLO-FRIENDLY&nbsp; / &nbsp;EXPERT LOCAL GUIDES</p></div></div>
        <a className="scroll-cue" href="#intro">SCROLL TO EXPLORE <span>↓</span></a>
        <p className="hero-corner">66° NORTH / THE ARCTIC CIRCLE</p>
      </section>

      <section id="intro" className="intro section-light"><div className="wrap intro-grid"><div className="intro-left reveal"><p className="eyebrow">01 / THE CALL OF THE NORTH</p><h2>A winter<br/>wonderland, <em>minus</em><br/>the window shopping.</h2><div className="intro-small">NOT YOUR AVERAGE WINTER GETAWAY <span>↗</span></div></div><div className="intro-right reveal"><p className="lead">This is your chance to get out into the Arctic wilderness, not just admire it from a distance.</p><p>Follow huskies across snowy trails, explore the forest by electric snowmobile and pull on your snowshoes for a wander through Pyhä-Luosto National Park. Then swap the cold for a traditional Finnish sauna, with an ice dip for the brave.</p><p>And when night falls, look up. The Northern Lights might just put on a show.</p><Photo src={IM.reindeer} alt="Reindeer beside a warm cabin in a snowy Finnish landscape" className="intro-photo"/></div></div></section>

      <section id="experiences" className="experiences section-light"><div className="wrap"><div className="section-top reveal"><p className="eyebrow">02 / MAKE THE MOST OF EVERY MOMENT</p><h2>Out here, every day<br/>is <em>worth a story.</em></h2><p>FIVE WAYS TO GET STUCK INTO THE WILDERNESS</p></div><div className="activities-grid">{activities.map((a,i)=><article key={a.n} className={`activity activity-${i+1} reveal`}><Photo src={a.image} alt={a.alt} className="activity-photo"/><div className="activity-text"><span className="item-n">{a.n} / 05</span><h3>{a.heading}</h3><p>{a.desc}</p></div></article>)}</div><div className="center-cta reveal"><CTA>FIND YOUR LAPLAND ADVENTURE</CTA></div></div></section>

      <section className="people-section"><div className="people-visual"><Photo src={IM.group} alt="Small husky adventure group preparing for a journey through snowy Lapland" /></div><div className="people-copy"><p className="eyebrow eyebrow--light">03 / BETTER TOGETHER</p><h2>You don't need a group chat full of <em>confirmed plans.</em></h2><p>Getting everyone together for a trip can be harder than the trip itself. So why keep putting your adventures on hold?</p><p>Much Better Adventures brings together small groups of people who want to get outside, explore somewhere new and make the most of their time away. Your local guides take care of the adventure, so you can spend less time sorting the details and more time enjoying where you are.</p><p>Come on your own, bring a friend, or join somewhere in between. You'll have plenty to share by the time you're heading home.</p><p>And those friends you've been trying to organise a trip with? There's always another adventure to plan.</p><CTA light>FIND YOUR LAPLAND DEPARTURE</CTA></div></section>

      <section id="itinerary" className="itinerary section-light"><div className="wrap"><div className="itinerary-heading reveal"><p className="eyebrow">04 / THE JOURNEY</p><p className="overline">FIVE DAYS. FOUR NIGHTS. ONE ARCTIC ADVENTURE.</p><h2>Here's how your Lapland<br/><em>adventure unfolds.</em></h2></div><div className="journey">{days.map((day,i)=><article key={day.d} className={`day day-${i+1} reveal`}><div className="day-index"><span>DAY</span><strong>{day.d}</strong></div><div className="day-info"><p className="day-tag">{day.tag}</p><h3>{day.title}</h3><p>{day.copy}</p></div><Photo src={day.photo} alt={day.alt} className="day-photo"/></article>)}</div><p className="itinerary-note">* Activities and Northern Lights sightings are subject to conditions. Check the official trip page for the full itinerary and departure details.</p><div className="center-cta"><CTA>SEE THE FULL ITINERARY & DATES</CTA></div></div></section>

      <section id="stays" className="stays"><div className="stay-main"><Photo src={IM.cabin} alt="Glass-roofed-style cabin beneath Northern Lights in a snowy Lapland setting"/></div><div className="stay-copy"><p className="eyebrow">05 / AFTER THE ADVENTURE</p><h2>Snowy forests outside.<br/><em>A sky full of stars above.</em></h2><p>You'll spend two nights in a cosy woodland cabin, followed by two nights in a glass-roofed aurora cabin or sky-view suite, depending on availability.</p><p>It's the sort of place that makes staying in feel like part of the adventure. Especially when the sky above you might have a surprise or two.</p><div className="stay-key"><div><strong>02</strong><span>NIGHTS IN A WOODLAND CABIN</span></div><div><strong>02</strong><span>NIGHTS IN AN AURORA CABIN OR SKY-VIEW SUITE*</span></div></div><small>* Cabin or suite allocation depends on availability.</small></div><div className="stay-secondary"><Photo src={IM.night} alt="Winter cabin glowing warmly under the Northern Lights" /></div></section>

      <section id="details" className="details section-light"><div className="wrap"><p className="eyebrow">06 / THE GOOD-TO-KNOW STUFF</p><div className="facts" aria-label="Trip facts"><div><span>DESTINATION</span><strong>Finland</strong></div><div><span>DURATION</span><strong>4 nights</strong></div><div><span>DIFFICULTY</span><strong>Level 1</strong></div><div><span>THE CREW</span><strong>Solo-friendly</strong></div><div><span>GROUP SIZE</span><strong>Max 14</strong></div></div><div className="details-grid"><div><h2>We've sorted<br/>the details.<br/><em>You bring the<br/>warm layers.</em></h2><p>Your four-night adventure includes:</p><CTA>CHECK DATES, PRICES & FULL DETAILS</CTA></div><div className="includes"><p className="list-heading">THE GOOD STUFF / INCLUDED</p>{['Four nights’ accommodation.','All breakfasts, lunches and dinners.','Expert local, English-speaking guides.','Husky sledding, electric snowmobiling, snowshoeing, the reindeer park visit, and the sauna and ice-dip experience.','Transfers throughout the itinerary, including airport transfers.','Activity equipment.'].map(x=><div className="include-item" key={x}><span aria-hidden="true">✓</span><p>{x}</p></div>)}<div className="excluded"><p className="list-heading">NOT INCLUDED</p><p>Flights to and from Finland, compulsory travel insurance, tips, personal expenses and optional extras are not included.</p></div><div className="cold-note"><strong>A note on the cold</strong><p>This is a Level 1 adventure, suitable for people with basic fitness. You should be comfortable spending time outdoors in Arctic winter conditions, with appropriate warm clothing. Check the official trip details and kit list before booking.</p></div></div></div></div></section>

      <section id="faq" className="faq section-light"><div className="wrap faq-grid"><div><p className="eyebrow">07 / ANY QUESTIONS?</p><h2>Good to<br/><em>know.</em></h2><p>Everything you need to know before answering the call of the Arctic.</p></div><FAQ/></div></section>

      <section className="final-cta"><Photo src={IM.aurora} alt="Northern Lights lighting up a husky sled trail in a snowy forest"/><div className="final-overlay"/><div className="final-inner wrap"><p className="eyebrow eyebrow--light">THE ARCTIC IS WAITING</p><h2>Your friends can<br/>come next time.<br/><em>Lapland is calling.</em></h2><p>Four nights in the Arctic. Husky sleds, snowy trails, sauna sessions and new people to share the adventure with.</p><p>You could keep waiting for everyone's calendars to line up. Or you could make this the winter you finally go.</p><CTA light>EXPLORE FINNISH LAPLAND</CTA></div></section>
    </main>
    <footer className="footer"><div className="wrap footer-grid"><div><a className="brand footer-brand" href="#top"><span className="brand-symbol" aria-hidden="true">✳</span><span className="brand-type">much better<br/><strong>adventures.</strong></span></a><p className="footer-motto">DO WILD THINGS.</p></div><div className="footer-links"><a href="#experiences">Adventure highlights</a><a href="#itinerary">Five-day itinerary</a><a href="#stays">Where you'll stay</a><a href="#details">Trip details</a><a href="#faq">FAQs</a></div><div className="footer-action"><p>THE NEXT GREAT STORY STARTS OUT THERE.</p><CTA light>EXPLORE DATES & PRICES</CTA></div></div><div className="wrap footer-bottom"><p>Independent speculative portfolio campaign. Not the official Much Better Adventures website.</p><a href="https://www.muchbetteradventures.com/" target="_blank" rel="noopener noreferrer">Visit the official MBA website ↗</a></div></footer>
    <div className={`sticky-cta ${scrolled?'sticky-cta--visible':''}`} aria-hidden={!scrolled}><span>FINNISH LAPLAND <small>4 NIGHTS · LEVEL 1</small></span><CTA>VIEW DATES & PRICES</CTA></div>
  </>;
}
