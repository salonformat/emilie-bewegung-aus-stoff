'use client';

import { useEffect, useRef, useState } from 'react';

const copy = {
  de: {
    chapters:['Begrenzung','Lösen','Kontext','Salon','Unternehmen','Atelier','Erkenntnis'], skip:'Direkt zur Experience', subtitle:'Bewegung aus Stoff', sources:'Quellen', sound:['Sound aus','Sound an'],
    heroEye:['Emilie Flöge · Modeschöpferin','Wien, um 1900'], heroTitle:['Wie viel','Raum','gibt dir','deine Kleidung?'], heroIntro:'Entdecke, wie Emilie Flöge Kleidung neu dachte: als Gestaltung, die dem Körper mehr Bewegungsfreiheit geben kann – und als Grundlage eines selbstständig geführten Modeunternehmens.', begin:'Experience beginnen', cursor:'Bewege den Cursor',
    portalEye:'Immersive Modegeschichte · Emilie Flöge', portalTitle:'Bewegung aus Stoff', portalEnter:'In die Experience eintauchen', portalCredit:'Emilie Flöge und Gustav Klimt am Attersee, 1909 · Fotograf unbekannt · Wien Museum, Inv. 157541 · CC0',
    actFirst:'Erst handeln. Dann verstehen.', releaseTitle:['Eine Raffung.','Mehr Raum.'], releaseIntro:'Ein Zugband rafft den Stoff eng am Körper. Greife den Ring und ziehe ihn nach rechts, um die Raffung zu lösen.', pull:'ziehen', threadEnds:['GREIFEN','ÖFFNEN'], bindings:['Zugband'], releaseStatus:['Die Raffung hält den Stoff eng.','Die ersten Falten öffnen sich.','Die Silhouette gewinnt sichtbar an Weite.','Die Raffung ist gelöst. Stoff und Körper können sich frei bewegen.'], solved:'Der Stoff atmet', what:'Was ist gerade passiert?',
    contextEye:'Wien · Um 1900', contextBridge:'Mit dem Lösen der Raffung hast du Flöges gestalterischen Gedanken nachvollzogen: Kleidung kann dem Körper Bewegungsraum zurückgeben.', contextTitle:['Warum war diese','Freiheit','um 1900 relevant?'], contextLead:'Eng geschnürte Kleidung prägte das modische Körperbild. Neue, weiter geschnittene Formen machten Kleidung zu einem Feld gestalterischer und gesellschaftlicher Veränderung.', facts:[['1874–1952','Emilie Flöge wurde 1874 in Wien geboren und starb dort 1952. Das Belvedere führt sie als Unternehmerin und dem Modedesign zugehörig.','Belvedere Archiv','https://dev-archiv.belvedere.at/kuenstler/20685/fl%C3%B6ge_emilie'],['Salon Schwestern Flöge','Ein erhaltenes Kleidungsstück des Salons, um 1905 datiert und mit „Salon Schwestern Flöge“ bezeichnet, befindet sich im Wien Museum.','Wien Museum Sammlung','https://sammlung.wienmuseum.at/en/object/697417-taille/'],['Wiener Werkstätte','Das Wien Museum beschreibt den von Emilie Flöge geführten Salon als Drehscheibe für den Verkauf von Schmuck der Wiener Werkstätte.','Wien Museum','https://www.wienmuseum.at/glanzstuecke_emilie_floege']], notMuse:['Historisch greifbar:','Modeschöpferin und Unternehmerin.'], art:['Formstudie','nach Motiven der Wiener Werkstätte'], portraitAlt:'Künstlerisch abstrahierte Illustration von Emilie Flöge', sourceWord:'Quelle',
    salonEye:'Eine räumliche Annäherung', salonTitle:['Salon','Schwestern Flöge'], salonIntro:'Tritt ein und entdecke den Salon als Entwurfsraum, Geschäft und kulturellen Treffpunkt.', salonEnter:'Salon betreten', salonExplore:'Drei Spuren im Raum', salonHint:'Berühre die Objekte und erschließe Flöges Arbeitswelt.', salonStations:[['Stofftisch','Material wurde betrachtet, berührt und nach Fall, Gewicht und Wirkung ausgewählt.'],['Schneiderpuppe','Schnitt und Weite übersetzten eine gestalterische Haltung in eine bewegliche Silhouette.'],['Geschäftstisch','Entwurf war zugleich professionelle Praxis: Beratung, Aufträge und Organisation gehörten zum Salon.']], salonDone:'Der Raum ist erschlossen.', salonContinue:'Zur unternehmerischen Praxis',
    businessEye:'Schwestern Flöge · Wien', businessTitle:['Gestalten heißt auch','entscheiden.'], businessLead:'Der Modesalon war zugleich Entwurfsraum, Geschäft und kultureller Treffpunkt. Die folgenden Perspektiven zeigen, welche Entscheidungen Modegestaltung als professionelle Praxis verlangt.', businessTasks:[['Silhouette','Form, Proportion und Bewegungsraum zu einer gestalterischen Haltung verbinden.'],['Material','Qualität, Wirkung und Herkunft von Textilien beurteilen und für eine Kollektion auswählen.'],['Salonpraxis','Aufträge, Beratung und Zusammenarbeit im laufenden Betrieb koordinieren.']], businessResult:['Die Silhouette übersetzt eine Haltung in Form – und bestimmt unmittelbar den Bewegungsraum.','Material ist keine Dekoration: Gewicht, Fall und Oberfläche entscheiden über Wirkung und Gebrauch.','Gestaltung entsteht nicht isoliert. Sie verbindet Kundinnen, Mitarbeiterinnen und wirtschaftliche Entscheidungen.'], businessLearning:'Flöges Position lässt sich deshalb nicht auf die Rolle einer Muse reduzieren: Ihr Modesalon war eine eigenständige professionelle und unternehmerische Praxis.', chooseTask:'Drei Perspektiven auf den Salon', reveal:'Perspektive', turnAgain:'Karte schließen', continueAtelier:'Zum digitalen Modeatelier',
    experiment:'Digitales Modeatelier', design:['Kleidung in','Bewegung.'], notLook:'Untersuche, wie Weite, Gewicht und Schichten den Bewegungsraum verändern.', actions:['gehen','arbeiten','tanzen'], labels:['Weite','Gewicht','Schichten'], mobility:'Bewegungsraum', constrained:'begrenzt', free:'frei', evaluation:[['Bewegung eingeschränkt','Die Silhouette reagiert noch schwer. Mehr Weite oder weniger Gewicht würde den Bewegungsradius vergrößern.'],['Bewegung möglich','Der Körper hat bereits Spielraum, doch der Stoff folgt noch nicht jeder Bewegung.'],['Bewegung im Fluss','Weite, Gewicht und Schichten unterstützen die gewählte Bewegung.']], achieved:'Die Silhouette folgt dem Körper.', archive:'Studie abschließen',
    finalEye:'Was diese Experience sichtbar macht', finalTitle:'Kleidung bestimmt mit, wie frei sich ein Körper bewegen kann.', finalBody:'Emilie Flöges Arbeit verbindet Modegestaltung mit professioneller und unternehmerischer Eigenständigkeit.', quote:'„Schnitt, Material und Gewicht verändern nicht nur eine Silhouette – sondern auch ihren Bewegungsraum.“', again:'Experience erneut beginnen', prototype:'Prototyp · Arbeitsfassung 01', basis:'Historische Grundlage: Wien Museum und Belvedere · Illustration: künstlerische Interpretation'
  },
  en: {
    chapters:['Restriction','Release','Context','Salon','Enterprise','Studio','Insight'], skip:'Skip to the experience', subtitle:'Movement through fabric', sources:'Sources', sound:['Sound off','Sound on'],
    heroEye:['Emilie Flöge · Fashion designer','Vienna, around 1900'], heroTitle:['How much','space','does your','clothing allow?'], heroIntro:'Discover how Emilie Flöge rethought clothing: as design that could give the body greater freedom of movement – and as the foundation of an independently run fashion business.', begin:'Begin experience', cursor:'Move the cursor',
    portalEye:'An immersive fashion story · Emilie Flöge', portalTitle:'Movement through fabric', portalEnter:'Enter the experience', portalCredit:'Emilie Flöge and Gustav Klimt at Lake Attersee, 1909 · Photographer unknown · Wien Museum, inv. 157541 · CC0',
    actFirst:'Act first. Then understand.', releaseTitle:['One gathering.','More space.'], releaseIntro:'A drawstring gathers the fabric tightly around the body. Grab the ring and pull it to the right to release the gathering.', pull:'pull', threadEnds:['GRAB','OPEN'], bindings:['Drawstring'], releaseStatus:['The gathering holds the fabric tightly.','The first folds begin to open.','The silhouette visibly gains width.','The gathering is released. Fabric and body can move freely.'], solved:'The fabric breathes', what:'What just happened?',
    contextEye:'Vienna · Around 1900', contextBridge:'By releasing the gathering, you traced Flöge’s design principle: clothing can restore room for the body to move.', contextTitle:['Why did this','freedom','matter around 1900?'], contextLead:'Tightly laced clothing shaped the fashionable body. New, looser forms turned dress into a field of design and social change.', facts:[['1874–1952','Emilie Flöge was born in Vienna in 1874 and died there in 1952. The Belvedere records her as an entrepreneur associated with fashion design.','Belvedere Archive','https://dev-archiv.belvedere.at/kuenstler/20685/fl%C3%B6ge_emilie'],['Schwestern Flöge salon','A surviving garment by the salon, dated around 1905 and marked “Salon Schwestern Flöge”, is held by the Wien Museum.','Wien Museum Collection','https://sammlung.wienmuseum.at/en/object/697417-taille/'],['Wiener Werkstätte','The Wien Museum describes the salon run by Emilie Flöge as a hub for sales of Wiener Werkstätte jewellery.','Wien Museum','https://www.wienmuseum.at/glanzstuecke_emilie_floege']], notMuse:['Historically tangible:','fashion designer and entrepreneur.'], art:['Study in form','after Wiener Werkstätte motifs'], portraitAlt:'Artistically abstracted illustration of Emilie Flöge', sourceWord:'Source',
    salonEye:'A spatial approach', salonTitle:['Salon','Schwestern Flöge'], salonIntro:'Step inside and discover the salon as a design space, business, and cultural meeting point.', salonEnter:'Enter the salon', salonExplore:'Three traces in the room', salonHint:'Touch the objects to uncover Flöge’s working world.', salonStations:[['Fabric table','Materials were viewed and touched, then selected for drape, weight, and effect.'],['Dress form','Cut and width translated a design position into a moving silhouette.'],['Business desk','Design was also professional practice: consultation, commissions, and organisation shaped the salon.']], salonDone:'The room has opened up.', salonContinue:'Continue to entrepreneurial practice',
    businessEye:'Schwestern Flöge · Vienna', businessTitle:['Design also means','deciding.'], businessLead:'The fashion salon was simultaneously a design studio, a business, and a cultural meeting point. These perspectives show the decisions that shape fashion as a professional practice.', businessTasks:[['Silhouette','Connect form, proportion, and range of movement into a coherent design position.'],['Material','Assess the quality, effect, and origin of textiles and select them for a collection.'],['Salon practice','Coordinate commissions, consultation, and collaboration in daily operations.']], businessResult:['The silhouette translates a position into form – and directly determines range of movement.','Material is not decoration: weight, drape, and surface determine effect and use.','Design does not happen in isolation. It connects clients, employees, and commercial decisions.'], businessLearning:'Flöge’s position therefore cannot be reduced to that of a muse: her fashion salon was an independent professional and entrepreneurial practice.', chooseTask:'Three perspectives on the salon', reveal:'Perspective', turnAgain:'Close card', continueAtelier:'Continue to the digital fashion studio',
    experiment:'Digital fashion studio', design:['Clothing in','motion.'], notLook:'Examine how width, weight, and layers alter the body’s range of movement.', actions:['walking','working','dancing'], labels:['Width','Weight','Layers'], mobility:'Range of movement', constrained:'restricted', free:'free', evaluation:[['Movement restricted','The silhouette still responds heavily. Greater width or less weight would increase its range.'],['Movement possible','The body already has room, but the fabric does not yet follow every movement.'],['Movement in flow','Width, weight, and layers support the selected movement.']], achieved:'The silhouette follows the body.', archive:'Complete the study',
    finalEye:'What this experience makes visible', finalTitle:'Clothing helps determine how freely a body can move.', finalBody:'Emilie Flöge’s work connects fashion design with professional and entrepreneurial independence.', quote:'“Cut, material, and weight change more than a silhouette – they change its range of movement.”', again:'Begin the experience again', prototype:'Prototype · Working version 01', basis:'Historical basis: Wien Museum and Belvedere · Illustration: artistic interpretation'
  }
} as const;

export default function Home() {
  const stageRef = useRef<HTMLElement>(null);
  const threadTrackRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<AudioContext | null>(null);
  const ambientRef = useRef<{osc: OscillatorNode; gain: GainNode} | null>(null);
  const soundStepRef = useRef(0);
  const freedomSoundRef = useRef(false);
  const atelierAchievedSoundRef = useRef(false);
  const sceneSoundRef = useRef(-1);
  const fabricGestureRef = useRef(0);
  const [released, setReleased] = useState(false);
  const [entered, setEntered] = useState(false);
  const [thread, setThread] = useState(0);
  const [chapter, setChapter] = useState(0);
  const [shape, setShape] = useState({ width: 55, weight: 42, layers: 3 });
  const [action, setAction] = useState<'gehen' | 'arbeiten' | 'tanzen'>('gehen');
  const [lang, setLang] = useState<'de'|'en'>('de');
  const [soundOn, setSoundOn] = useState(false);
  const [businessChoice, setBusinessChoice] = useState<number | null>(null);
  const [salonEntered, setSalonEntered] = useState(false);
  const [salonDiscoveries, setSalonDiscoveries] = useState<boolean[]>([false,false,false]);
  const c = copy[lang];
  const actionFactor = action === 'tanzen' ? .88 : action === 'arbeiten' ? .96 : 1;
  const mobility = Math.round(Math.max(8, Math.min(100, (18 + (shape.width - 32) * 1.08 + (90 - shape.weight) * .36 - (shape.layers - 1) * 4) * actionFactor)));

  useEffect(() => {
    const onScroll = () => {
      const scenes=[...document.querySelectorAll<HTMLElement>('.scene')]; const center=window.innerHeight*.5;
      const active=scenes.findIndex(scene=>{const rect=scene.getBoundingClientRect();return rect.top<=center&&rect.bottom>center});
      if(active>=0) setChapter(Math.min(6,active));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { document.documentElement.lang = lang; }, [lang]);

  useEffect(()=>{ if(mobility>=70&&!atelierAchievedSoundRef.current){atelierAchievedSoundRef.current=true;if(soundOn)openAir()} if(mobility<62)atelierAchievedSoundRef.current=false; },[mobility,soundOn]);

  useEffect(() => () => { audioRef.current?.close(); }, []);

  const soundPulse = (frequency: number, duration = .28) => {
    const ctx = audioRef.current;
    if (!ctx || ctx.state !== 'running') return;
    const osc = ctx.createOscillator(); const gain = ctx.createGain();
    osc.type = 'sine'; osc.frequency.setValueAtTime(frequency, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(frequency * .72, ctx.currentTime + duration);
    gain.gain.setValueAtTime(.0001, ctx.currentTime); gain.gain.exponentialRampToValueAtTime(.095, ctx.currentTime + .025); gain.gain.exponentialRampToValueAtTime(.0001, ctx.currentTime + duration);
    osc.connect(gain).connect(ctx.destination); osc.start(); osc.stop(ctx.currentTime + duration + .02);
  };

  const noiseGesture = (duration=.3, volume=.035, frequency=1200) => {
    const ctx=audioRef.current; if(!ctx || ctx.state!=='running') return;
    const buffer=ctx.createBuffer(1,Math.ceil(ctx.sampleRate*duration),ctx.sampleRate); const data=buffer.getChannelData(0);
    for(let i=0;i<data.length;i++) data[i]=(Math.random()*2-1)*(1-i/data.length);
    const source=ctx.createBufferSource(); const filter=ctx.createBiquadFilter(); const gain=ctx.createGain();
    filter.type='bandpass'; filter.frequency.value=frequency; filter.Q.value=.8; gain.gain.value=volume;
    source.buffer=buffer; source.connect(filter).connect(gain).connect(ctx.destination); source.start();
  };

  const salonEntrance = () => { soundPulse(880,.7); window.setTimeout(()=>soundPulse(1320,.45),110); window.setTimeout(()=>noiseGesture(.8,.028,520),380); window.setTimeout(()=>noiseGesture(1.1,.018,1450),760); };
  const businessRhythm = () => { [0,110,245,540,690].forEach((delay,index)=>window.setTimeout(()=>soundPulse(index===3?96:480+index*35,.07),delay)); window.setTimeout(()=>noiseGesture(.55,.018,900),330); };
  const outsideVienna = () => { [0,340,720].forEach((delay,index)=>window.setTimeout(()=>soundPulse(82+index*7,.18),delay)); noiseGesture(1.5,.014,380); };
  const openAir = () => { [196,294,392].forEach((frequency,index)=>window.setTimeout(()=>soundPulse(frequency,1.6-index*.18),index*110)); noiseGesture(1.25,.026,2300); };

  useEffect(()=>{
    const ctx=audioRef.current; const ambient=ambientRef.current; if(!soundOn||!ctx||!ambient)return;
    const frequencies=[118,104,82,136,148,174,196]; const levels=[.024,.027,.014,.024,.018,.022,.013]; const types:OscillatorType[]=['triangle','sine','sine','triangle','triangle','triangle','sine'];
    ambient.osc.type=types[chapter]; ambient.osc.frequency.cancelScheduledValues(ctx.currentTime); ambient.osc.frequency.linearRampToValueAtTime(frequencies[chapter],ctx.currentTime+1.2); ambient.gain.gain.cancelScheduledValues(ctx.currentTime); ambient.gain.gain.linearRampToValueAtTime(levels[chapter],ctx.currentTime+1.2);
    if(sceneSoundRef.current===chapter)return; sceneSoundRef.current=chapter;
    if(chapter===1)noiseGesture(.55,.018,850); if(chapter===2)noiseGesture(.75,.012,620); if(chapter===3)salonEntrance(); if(chapter===4)businessRhythm(); if(chapter===5)noiseGesture(.65,.022,1650); if(chapter===6)openAir();
  },[chapter,soundOn]);

  const toggleSound = async () => {
    if (soundOn) { ambientRef.current?.osc.stop(); ambientRef.current = null; setSoundOn(false); return; }
    const ctx = audioRef.current ?? new AudioContext(); audioRef.current = ctx; await ctx.resume();
    const osc = ctx.createOscillator(); const gain = ctx.createGain(); osc.type='triangle'; osc.frequency.value=146; gain.gain.value=.028; osc.connect(gain).connect(ctx.destination); osc.start(); ambientRef.current={osc,gain}; setSoundOn(true); soundPulse(220,.5);
  };

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const move = (event: PointerEvent) => {
      const rect = stage.getBoundingClientRect();
      stage.style.setProperty('--mx', `${(event.clientX - rect.left) / rect.width}`);
      stage.style.setProperty('--my', `${(event.clientY - rect.top) / rect.height}`);
    };
    stage.addEventListener('pointermove', move);
    return () => stage.removeEventListener('pointermove', move);
  }, []);

  const dragThread = (clientX: number) => {
    const track = threadTrackRef.current;
    if (!track) return;
    const rect = track.getBoundingClientRect();
    const next = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));
    const now=performance.now(); if(now-fabricGestureRef.current>70){fabricGestureRef.current=now;noiseGesture(.16,.018+next/5200,720+next*15)}
    const step = Math.floor(next / 25);
    if (step > soundStepRef.current) { soundPulse(130 + step * 38, .22 + step * .06); soundStepRef.current = step; }
    if (next < 10) soundStepRef.current = 0;
    if(next > 96 && !freedomSoundRef.current){ freedomSoundRef.current=true; openAir(); }
    if(next < 70) freedomSoundRef.current=false;
    setThread(next);
  };

  const fabricSound = (value:number, material:'width'|'weight'|'layers') => noiseGesture(.18+value/420,.018+value/5000,material==='weight'?520:material==='layers'?1050:1900);
  const touchFabric = (position=.5, intensity=.55) => { const now=performance.now(); if(now-fabricGestureRef.current<85)return; fabricGestureRef.current=now; noiseGesture(.13+intensity*.14,.012+intensity*.022,650+position*1900); };

  return (
    <main className={`experience-shell chapter-${chapter} ${entered?'has-entered':''} ${released ? 'is-released' : ''}`}>
      <section className={`museum-portal ${entered?'is-entered':''}`} aria-hidden={entered}>
        <div className="portal-image"><img src="./visuals/emilie-floege-1909.jpg" alt=""/><i/><i/><i/></div>
        <div className="portal-language" role="group" aria-label="Language / Sprache"><button type="button" aria-pressed={lang==='de'} onClick={()=>setLang('de')}>DE</button><span>/</span><button type="button" aria-pressed={lang==='en'} onClick={()=>setLang('en')}>EN</button></div>
        <div className="portal-copy"><p>{c.portalEye}</p><h1>{c.portalTitle}</h1><button type="button" onClick={()=>{setEntered(true);salonEntrance()}}><span>{c.portalEnter}</span><i aria-hidden="true">→</i></button></div>
        <a className="portal-credit" href="https://sammlung.wienmuseum.at/objekt/305884-gustav-klimt-1862-1918-und-emilie-floege-1874-1952-in-einem-boot-auf-dem-attersee/" target="_blank" rel="noreferrer">{c.portalCredit}</a>
      </section>
      <a className="skip-link" href="#experience">{c.skip}</a>
      <header className="masthead">
        <a className="wordmark" href="#experience"><span>EMILIE</span><small>{c.subtitle}</small></a>
        <div className="chapter-mark" aria-live="polite"><span>0{chapter + 1}</span><i /><small>07 · {c.chapters[chapter]}</small></div>
        <div className="header-tools"><div className="language-switch" role="group" aria-label="Language / Sprache"><button type="button" aria-pressed={lang==='de'} onClick={()=>setLang('de')}>DE</button><span>/</span><button type="button" aria-pressed={lang==='en'} onClick={()=>setLang('en')}>EN</button></div><button className="sound-toggle" type="button" aria-pressed={soundOn} onClick={toggleSound}><span className="sound-lines" aria-hidden="true"><i/><i/><i/></span>{c.sound[soundOn?1:0]}</button><a className="sound-control" href="#sources">{c.sources}</a></div>
      </header>

      <section className="hero scene" id="experience" ref={stageRef} aria-labelledby="hero-title">
        <PatternField />
        <div className="hero-copy">
          <p className="eyebrow"><span>{c.heroEye[0]}</span><span>{c.heroEye[1]}</span></p>
          <h1 id="hero-title"><span>{c.heroTitle[0]}</span><em>{c.heroTitle[1]}</em><span>{c.heroTitle[2]}</span><strong>{c.heroTitle[3]}</strong></h1>
          <p className="intro">{c.heroIntro}</p>
          <button className="enter-button" type="button" onClick={() => { setReleased(true); if(soundOn) salonEntrance(); document.querySelector('#loesen')?.scrollIntoView({ behavior:'smooth' }); }}><span>{c.begin}</span><i aria-hidden="true">→</i></button>
        </div>
        <TextileFigure progress={100} alt={c.portraitAlt} onFabricMove={touchFabric} />
        <div className="edition-note" aria-hidden="true"><span>Digital study</span><strong>№ 01</strong></div>
      </section>

      <section className={`release-scene scene ${thread >= 100 ? 'is-open' : ''}`} id="loesen" aria-labelledby="release-title">
        <div className="scene-index"><span>02</span><i /><small>{c.chapters[1]}</small></div>
        <div className="release-copy">
          <p className="eyebrow">{c.actFirst}</p>
          <h2 id="release-title">{c.releaseTitle[0]}<br/><em>{c.releaseTitle[1]}</em></h2>
          <p>{c.releaseIntro}</p>
          <p className="release-status" aria-live="polite">{thread < 34 ? c.releaseStatus[0] : thread < 68 ? c.releaseStatus[1] : thread < 98 ? c.releaseStatus[2] : c.releaseStatus[3]}</p>
        </div>
        <TextileFigure progress={thread} alt={c.portraitAlt} bindings={c.bindings} onFabricMove={touchFabric} releaseControl={{trackRef:threadTrackRef,label:c.bindings[0],start:c.threadEnds[0],end:c.threadEnds[1],pull:c.pull,onDrag:dragThread,onKey:(direction)=>setThread(v=>{const next=Math.max(0,Math.min(100,v+direction*10));if(next>96&&!freedomSoundRef.current){freedomSoundRef.current=true;openAir()}if(next<70)freedomSoundRef.current=false;return next})}} />
        {thread >= 100 && <button className="continue-cue" type="button" onClick={() => document.querySelector('#einordnen')?.scrollIntoView({behavior:'smooth'})}>{c.what} <span>↓</span></button>}
      </section>

      <section className="context-scene scene" id="einordnen" aria-labelledby="context-title">
        <div className="scene-index light"><span>03</span><i /><small>{c.chapters[2]}</small></div>
        <div className="portrait-panel">
          <div className="portrait-orbit" aria-hidden="true"><i /><i /><i /></div>
          <div className="context-pattern-composition" aria-hidden="true">{Array.from({length:18},(_,i)=><i key={i}/>)}</div>
          <p>{c.art[0]}<br/><span>{c.art[1]}</span></p>
        </div>
        <div className="context-copy">
          <p className="eyebrow">{c.contextEye}</p>
          <p className="context-bridge">{c.contextBridge}</p>
          <h2 id="context-title">{c.contextTitle[0]} <em>{c.contextTitle[1]}</em> {c.contextTitle[2]}</h2>
          <p className="context-lead">{c.contextLead}</p>
          <div className="fact-grid">
            {c.facts.map((fact)=><article key={fact[0]}><strong>{fact[0]}</strong><p>{fact[1]}</p><a href={fact[3]} target="_blank" rel="noreferrer">{c.sourceWord}: {fact[2]} <span>→</span></a></article>)}
          </div>
          <p className="not-muse"><span>{c.notMuse[0]}</span> {c.notMuse[1]}</p>
          <button className="continue-cue context-continue" type="button" onClick={() => document.querySelector('#salon')?.scrollIntoView({behavior:'smooth'})}>{c.chapters[3]} <span>↓</span></button>
        </div>
      </section>

      <section className={`salon-scene scene ${salonEntered?'is-inside':'is-outside'} ${salonDiscoveries.every(Boolean)?'is-complete':''}`} id="salon" aria-labelledby="salon-title">
        <div className="scene-index light"><span>04</span><i/><small>{c.chapters[3]}</small></div>
        <div className="salon-facade" aria-hidden={salonEntered}><div className="salon-sign"><small>WIEN</small><strong>SCHWESTERN<br/>FLÖGE</strong><i/></div><div className="salon-door left-door"><span/></div><div className="salon-door right-door"><span/></div></div>
        <div className="salon-copy"><p className="eyebrow">{c.salonEye}</p><h2 id="salon-title">{c.salonTitle[0]} <em>{c.salonTitle[1]}</em></h2><p>{salonEntered?c.salonHint:c.salonIntro}</p>{!salonEntered&&<button type="button" onClick={()=>{setSalonEntered(true);salonEntrance()}}>{c.salonEnter}<span>→</span></button>}</div>
        <div className="salon-room" onPointerMove={event=>{const rect=event.currentTarget.getBoundingClientRect();event.currentTarget.style.setProperty('--room-x',`${((event.clientX-rect.left)/rect.width-.5)*2}`);event.currentTarget.style.setProperty('--room-y',`${((event.clientY-rect.top)/rect.height-.5)*2}`)}}>
          <div className="salon-depth" aria-hidden="true"><i className="salon-ceiling"/><i className="salon-floor"/><i className="salon-wall left-wall"/><i className="salon-wall right-wall"/><div className="salon-window"><i/><i/><i/></div><div className="salon-chandelier"><i/><i/><i/></div></div>
          <p className="salon-progress">{c.salonExplore} · {salonDiscoveries.filter(Boolean).length}/3</p>
          <div className="salon-stations">
            {c.salonStations.map((station,index)=><button key={station[0]} type="button" className={`salon-station station-${index} ${salonDiscoveries[index]?'is-found':''}`} aria-pressed={salonDiscoveries[index]} onClick={()=>{setSalonDiscoveries(items=>items.map((item,i)=>i===index?true:item)); if(index===0)noiseGesture(.8,.04,1700);if(index===1){soundPulse(190,.5);openAir()}if(index===2)businessRhythm()}}><span className="station-object" aria-hidden="true">{index===0?<><i/><i/><i/></>:index===1?<><i/><b/></>:<><i/><i/><b/></>}</span><span className="station-label"><small>0{index+1}</small><strong>{station[0]}</strong><em>{station[1]}</em></span></button>)}
          </div>
          {salonDiscoveries.every(Boolean)&&<div className="salon-complete" aria-live="polite"><strong>{c.salonDone}</strong><button type="button" onClick={()=>document.querySelector('#unternehmen')?.scrollIntoView({behavior:'smooth'})}>{c.salonContinue}<span>→</span></button></div>}
        </div>
      </section>

      <section className={`business-scene scene ${businessChoice!==null?'has-choice':''} ${businessChoice!==null?`choice-${businessChoice}`:''}`} id="unternehmen" aria-labelledby="business-title">
        <div className="scene-index"><span>05</span><i /><small>{c.chapters[4]}</small></div>
        <div className="decision-atmosphere" aria-hidden="true">{Array.from({length:15},(_,i)=><i key={i}/>)}</div>
        <div className="business-copy"><p className="eyebrow">{c.businessEye}</p><h2 id="business-title">{c.businessTitle[0]} <em>{c.businessTitle[1]}</em></h2><p className="business-lead">{c.businessLead}</p><p className="task-prompt">{c.chooseTask}</p><div className="business-tasks">{c.businessTasks.map((task,index)=><button type="button" className={businessChoice===index?'is-flipped':''} key={task[0]} aria-pressed={businessChoice===index} onClick={()=>{setBusinessChoice(businessChoice===index?null:index);businessRhythm()}}><span className="card-inner"><span className="card-face card-front"><i>0{index+1}</i><strong>{task[0]}</strong><small>{task[1]}</small><b aria-hidden="true">+</b></span><span className="card-face card-back"><i>{c.reveal}</i><strong>{c.businessResult[index]}</strong><small>{c.turnAgain}</small><b aria-hidden="true">×</b></span></span></button>)}</div>{businessChoice!==null&&<div className="business-answer" aria-live="polite"><strong>{c.businessLearning}</strong><button className="continue-cue" type="button" onClick={()=>document.querySelector('#anwenden')?.scrollIntoView({behavior:'smooth'})}>{c.continueAtelier}<span>↓</span></button></div>}</div>
      </section>

      <section className="atelier-scene scene" id="anwenden" aria-labelledby="atelier-title">
        <div className="scene-index"><span>06</span><i /><small>{c.chapters[5]}</small></div>
        <header className="atelier-head"><p className="eyebrow">{c.experiment}</p><h2 id="atelier-title">{c.design[0]} <em>{c.design[1]}</em></h2><p>{c.notLook}</p></header>
        <div className="action-picker" role="group" aria-label={c.notLook}>{(['gehen','arbeiten','tanzen'] as const).map((item,index) => <button type="button" key={item} aria-pressed={action === item} onClick={() => { setAction(item); if(item==='gehen') outsideVienna(); else if(item==='arbeiten') businessRhythm(); else { soundPulse(232,.55); noiseGesture(.72,.034,1800); } }}>{c.actions[index]}</button>)}</div>
        <div className="garment-lab">
          <div className={`lab-figure action-${action} ${mobility>=70?'is-achieved':''}`} style={{ '--dress-width':`${shape.width}%`, '--figure-scale':.92 + (shape.width-55)/360, '--weight-filter':1.08-shape.weight/360, '--motion-speed':`${1.35 + shape.weight/26}s`, '--motion-range':`${4 + mobility*.13}px`, '--motion-range-neg':`${-4-mobility*.13}px`, '--motion-lift-neg':`${-2-mobility*.09}px`, '--dance-angle':`${2+mobility*.025}deg`, '--dance-angle-neg':`${-2-mobility*.025}deg`, '--mobility':`${mobility}%`, '--layers':shape.layers } as React.CSSProperties}>
            <div className="motion-boundary" aria-hidden="true"/><div className="lab-character" onPointerMove={event=>{const rect=event.currentTarget.getBoundingClientRect();touchFabric((event.clientX-rect.left)/rect.width,.65)}} onWheel={event=>touchFabric((event.clientX-event.currentTarget.getBoundingClientRect().left)/event.currentTarget.getBoundingClientRect().width,.9)}><div className="silhouette-envelope" aria-hidden="true">{Array.from({length:shape.layers},(_,i)=><i style={{'--layer':i} as React.CSSProperties} key={i}/>)}</div><img className="lab-character-main" src="./visuals/emilie-figure-abstract.png" alt={c.portraitAlt}/><img className="figure-motion figure-motion-upper" src="./visuals/emilie-figure-abstract.png" alt="" aria-hidden="true"/><img className="figure-motion figure-motion-skirt" src="./visuals/emilie-figure-abstract.png" alt="" aria-hidden="true"/></div><i className="floor-line" />
            <div className="achievement-burst" aria-hidden="true">{Array.from({length:10},(_,i)=><i key={i}/>)}</div><p className="achievement-label">{c.achieved}</p><div className="mobility-gauge"><span>{c.mobility}</span><div><i/></div><small>{mobility < 45 ? c.constrained : c.free} · {mobility}%</small></div>
          </div>
          <div className="motion-word" aria-hidden="true">{c.actions[['gehen','arbeiten','tanzen'].indexOf(action)]}</div>
        </div>
        <form className="controls" onSubmit={(event)=>event.preventDefault()}>
          <label><span><strong>{c.labels[0]}</strong><small>{shape.width}</small></span><input aria-label={c.labels[0]} type="range" min="32" max="82" value={shape.width} onChange={e=>{const value=+e.target.value;setShape({...shape,width:value});fabricSound(value,'width')}}/></label>
          <label><span><strong>{c.labels[1]}</strong><small>{shape.weight}</small></span><input aria-label={c.labels[1]} type="range" min="10" max="90" value={shape.weight} onChange={e=>{const value=+e.target.value;setShape({...shape,weight:value});fabricSound(value,'weight')}}/></label>
          <label><span><strong>{c.labels[2]}</strong><small>{shape.layers}</small></span><input aria-label={c.labels[2]} type="range" min="1" max="5" value={shape.layers} onChange={e=>{const value=+e.target.value;setShape({...shape,layers:value});fabricSound(value*18,'layers')}}/></label>
          <p className={`design-feedback evaluation-${mobility < 45 ? 'low' : mobility < 70 ? 'mid' : 'high'}`} aria-live="polite"><strong>{c.evaluation[mobility < 45 ? 0 : mobility < 70 ? 1 : 2][0]}</strong><span>{c.evaluation[mobility < 45 ? 0 : mobility < 70 ? 1 : 2][1]}</span></p>
          <button type="button" className="continue-cue" onClick={()=>document.querySelector('#perspektive')?.scrollIntoView({behavior:'smooth'})}>{c.archive} <span>↓</span></button>
        </form>
      </section>

      <section className="final-scene scene" id="perspektive" aria-labelledby="final-title">
        <PatternField />
        <div className="scene-index"><span>07</span><i /><small>{c.chapters[6]}</small></div>
        <div className="network" aria-hidden="true">{Array.from({length:17},(_,i)=><i key={i}/>)}</div>
        <div className="final-copy">
          <p className="eyebrow">{c.finalEye}</p>
          <h2 id="final-title">{c.finalTitle}</h2>
          <p>{c.finalBody}</p>
          <blockquote>{c.quote}</blockquote>
          <a className="enter-button" href="#experience"><span>{c.again}</span><i>↑</i></a>
        </div>
        <footer id="sources"><p>{c.prototype}</p><p>{c.basis}</p></footer>
      </section>
    </main>
  );
}

function PatternField(){ return <div className="pattern-field" aria-hidden="true">{Array.from({length:24},(_,i)=><i key={i}/>)}</div>; }

function TextileFigure({progress,alt,bindings,onFabricMove,releaseControl}:{progress:number;alt:string;bindings?:readonly string[];onFabricMove?:(position?:number,intensity?:number)=>void;releaseControl?:{trackRef:React.RefObject<HTMLDivElement|null>;label:string;start:string;end:string;pull:string;onDrag:(x:number)=>void;onKey:(direction:number)=>void}}){
  return <div className={`textile-portrait ${bindings ? 'has-restraints' : ''} ${progress >= 96 ? 'is-fully-free' : progress < 18 ? 'is-constrained' : 'is-releasing'}`} style={{'--freedom':progress/100} as React.CSSProperties} onPointerMove={event=>{const rect=event.currentTarget.getBoundingClientRect();onFabricMove?.((event.clientX-rect.left)/rect.width,.55)}} onWheel={event=>{const rect=event.currentTarget.getBoundingClientRect();onFabricMove?.((event.clientX-rect.left)/rect.width,.92)}}>
    <div className="portrait-halo" aria-hidden="true"/><img className="figure-illustration" src="./visuals/emilie-figure-abstract.png" alt={alt}/>{bindings&&<img className="release-skirt" src="./visuals/emilie-figure-abstract.png" alt="" aria-hidden="true"/>}
    {bindings && <div className="gather-pleats" aria-hidden="true">{Array.from({length:7},(_,index)=><i key={index}/>)}</div>}
    {releaseControl&&<div className="figure-release-control" ref={releaseControl.trackRef}><span className="release-control-label">{releaseControl.label}</span><small className="control-start">{releaseControl.start}</small><small className="control-end">{releaseControl.end}</small><i className="control-line" style={{'--pull':`${progress}%`} as React.CSSProperties}/><button type="button" className="figure-release-ring" style={{left:`${progress}%`}} onPointerDown={event=>{event.currentTarget.setPointerCapture(event.pointerId);releaseControl.onDrag(event.clientX)}} onPointerMove={event=>{if(event.currentTarget.hasPointerCapture(event.pointerId))releaseControl.onDrag(event.clientX)}} onKeyDown={event=>{if(event.key==='ArrowRight')releaseControl.onKey(1);if(event.key==='ArrowLeft')releaseControl.onKey(-1)}} role="slider" aria-label={`${releaseControl.pull}, ${Math.round(progress)}%`} aria-valuenow={Math.round(progress)} aria-valuemin={0} aria-valuemax={100}><i/><span>{releaseControl.pull}</span></button></div>}
    {bindings && <><div className="freedom-ribbons" aria-hidden="true">{Array.from({length:12},(_,index)=><i key={index}/>)}</div><div className="freedom-waves" aria-hidden="true"><i/><i/><i/></div></>}
  </div>;
}
