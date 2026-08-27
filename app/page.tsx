'use client';

import { useEffect, useRef, useState } from 'react';

const copy = {
  de: {
    chapters:['Begrenzung','Lösen','Einordnen','Unternehmen','Anwenden','Perspektive'], skip:'Direkt zur Experience', subtitle:'Bewegung aus Stoff', sources:'Quellen', sound:['Sound aus','Sound an'],
    heroEye:['Emilie Flöge · Modeschöpferin','Wien, um 1900'], heroTitle:['Wie viel','Raum','gibt dir','deine Kleidung?'], heroIntro:'Entdecke, wie Emilie Flöge Kleidung neu dachte: als Gestaltung, die dem Körper mehr Bewegungsfreiheit geben kann – und als Grundlage eines selbstständig geführten Modeunternehmens.', begin:'Experience beginnen', cursor:'Bewege den Cursor',
    actFirst:'Erst handeln. Dann verstehen.', releaseTitle:['Eine Raffung.','Mehr Raum.'], releaseIntro:'Ein Zugband rafft den Stoff eng am Körper. Greife den Ring und ziehe ihn nach rechts, um die Raffung zu lösen.', pull:'ziehen', threadEnds:['GREIFEN','ÖFFNEN'], bindings:['Zugband'], releaseStatus:['Die Raffung hält den Stoff eng.','Die ersten Falten öffnen sich.','Die Silhouette gewinnt sichtbar an Weite.','Die Raffung ist gelöst. Stoff und Körper können sich frei bewegen.'], solved:'Der Stoff atmet', what:'Was ist gerade passiert?',
    contextEye:'Wien · Um 1900', contextTitle:['Kleidung wurde zum','Schauplatz','gesellschaftlicher Veränderung.'], contextLead:'Reform- und Künstlerkleider stellten das eng geschnürte, körperlich begrenzende Modeideal infrage.', proven:'Belegt', caution:'Mit Vorsicht', facts:[['Modeschöpferin','Emilie Flöge war ausgebildete Schneiderin und Mitinhaberin des Salons Schwestern Flöge.'],['Unternehmerin','Sie reiste, sammelte Textilien und führte mit ihren Schwestern ein Unternehmen mit zahlreichen Mitarbeiterinnen.'],['Reformmode','Ihr Verhältnis zu Reform- und Künstlerkleidern ist relevant, konkrete Entwürfe sind jedoch oft nicht eindeutig belegt.']], notMuse:['Nicht nur Motiv.','Gestalterin. Sammlerin. Entscheiderin.'], art:['Künstlerische Interpretation','nach historischen Bildquellen'], portraitAlt:'Künstlerisch abstrahierte Illustration von Emilie Flöge in einem weiten Reformkleid',
    businessEye:'Schwestern Flöge · Wien', businessTitle:['Gestalten hieß auch','entscheiden.'], businessLead:'Emilie Flöge führte den Modesalon gemeinsam mit ihren Schwestern Helene und Pauline. Wähle eine Aufgabe aus ihrem Arbeitsalltag und entdecke, was hinter einem Kleid noch alles stand.', businessTasks:[['Entwurf','Eine neue Silhouette entwickeln – mit Blick auf Stoff, Kundin und Bewegungsfreiheit.'],['Einkauf','Textilien auswählen, Qualität beurteilen und internationale Einflüsse in den Salon bringen.'],['Salon führen','Aufträge koordinieren, Kundinnen beraten und Verantwortung für Mitarbeiterinnen übernehmen.']], businessResult:['Du verbindest Gestaltung mit praktischen Entscheidungen.','Du handelst als Einkäuferin und Kuratorin von Material und Ideen.','Du machst sichtbar: Flöge war nicht nur Gestalterin, sondern Unternehmerin.'], businessLearning:'Flöges Arbeit bestand nicht nur aus Entwerfen. Kreativität, wirtschaftliche Entscheidungen und Führung gehörten zusammen.', chooseTask:'Wähle eine Aufgabe', continueAtelier:'Weiter ins digitale Modeatelier',
    experiment:'Digitales Modeatelier', design:['Entwirf für','Bewegung.'], notLook:'Wähle eine Bewegung. Verändere dann den Schnitt.', actions:['gehen','arbeiten','tanzen'], labels:['Weite','Gewicht','Schichten'], mobility:'Bewegungsraum', constrained:'begrenzt', free:'frei', evaluation:[['Noch zu eng','Öffne die Weite oder mache das Kleid leichter. So bekommt der Körper mehr Platz.'],['Fast frei','Mehr Bewegung ist schon möglich. Eine kleine Anpassung kann den Unterschied machen.'],['Bewegung frei','Gut gestaltet: Das Kleid folgt der Bewegung, statt sie zu bremsen.']], achieved:'Geschafft: Das Kleid bewegt sich mit dem Körper.', archive:'Form ins Archiv geben',
    finalEye:'Ein anderer Blick bleibt', finalTitle:'Emilie Flöge war nicht nur ein Motiv der Wiener Moderne.', finalBody:'Sie gestaltete, sammelte, reiste, entschied und führte gemeinsam mit ihren Schwestern ein Unternehmen.', quote:'„Kleidung verändert nicht nur, wie wir aussehen. Sie verändert, wie wir uns bewegen können.“', again:'Noch einmal erleben', prototype:'Prototyp · Arbeitsfassung 01', basis:'Historische Grundlage: Wien Museum und MAK · Illustration: künstlerische Interpretation'
  },
  en: {
    chapters:['Restriction','Release','Context','Enterprise','Apply','Perspective'], skip:'Skip to the experience', subtitle:'Movement through fabric', sources:'Sources', sound:['Sound off','Sound on'],
    heroEye:['Emilie Flöge · Fashion designer','Vienna, around 1900'], heroTitle:['How much','space','does your','clothing allow?'], heroIntro:'Discover how Emilie Flöge rethought clothing: as design that could give the body greater freedom of movement – and as the foundation of an independently run fashion business.', begin:'Begin experience', cursor:'Move the cursor',
    actFirst:'Act first. Then understand.', releaseTitle:['One gathering.','More space.'], releaseIntro:'A drawstring gathers the fabric tightly around the body. Grab the ring and pull it to the right to release the gathering.', pull:'pull', threadEnds:['GRAB','OPEN'], bindings:['Drawstring'], releaseStatus:['The gathering holds the fabric tightly.','The first folds begin to open.','The silhouette visibly gains width.','The gathering is released. Fabric and body can move freely.'], solved:'The fabric breathes', what:'What just happened?',
    contextEye:'Vienna · Around 1900', contextTitle:['Clothing became a','stage','for social change.'], contextLead:'Reform and artist dresses challenged the tightly laced ideal of fashion that restricted the body.', proven:'Documented', caution:'Use with caution', facts:[['Fashion designer','Emilie Flöge was a trained dressmaker and co-owner of the Schwestern Flöge salon.'],['Entrepreneur','She travelled, collected textiles, and ran a company with her sisters that employed numerous women.'],['Reform fashion','Her connection to reform and artist dresses is relevant, but specific designs often cannot be attributed with certainty.']], notMuse:['More than a motif.','Designer. Collector. Decision-maker.'], art:['Artistic interpretation','based on historical images'], portraitAlt:'Artistically abstracted illustration of Emilie Flöge in a loose reform dress',
    businessEye:'Schwestern Flöge · Vienna', businessTitle:['Design also meant','deciding.'], businessLead:'Emilie Flöge ran the fashion salon together with her sisters Helene and Pauline. Choose a task from her working day and discover everything that stood behind a dress.', businessTasks:[['Design','Develop a new silhouette with fabric, client, and freedom of movement in mind.'],['Sourcing','Select textiles, judge quality, and bring international influences into the salon.'],['Run the salon','Coordinate commissions, advise clients, and take responsibility for employees.']], businessResult:['You connect creative design with practical decisions.','You act as a buyer and curator of materials and ideas.','You make it visible: Flöge was not only a designer, but an entrepreneur.'], businessLearning:'Flöge’s work extended beyond designing. Creativity, commercial decisions, and leadership belonged together.', chooseTask:'Choose a task', continueAtelier:'Continue to the digital fashion studio',
    experiment:'Digital fashion studio', design:['Design for','movement.'], notLook:'Choose a movement. Then change the cut.', actions:['walking','working','dancing'], labels:['Width','Weight','Layers'], mobility:'Range of movement', constrained:'restricted', free:'free', evaluation:[['Still too tight','Increase the width or make the dress lighter. This gives the body more room.'],['Almost free','More movement is already possible. One small adjustment can make the difference.'],['Movement released','Well designed: the dress follows the movement instead of slowing it down.']], achieved:'Achieved: the dress moves with the body.', archive:'Add form to the archive',
    finalEye:'A different perspective remains', finalTitle:'Emilie Flöge was more than a motif of Viennese Modernism.', finalBody:'She designed, collected, travelled, made decisions, and ran a business together with her sisters.', quote:'“Clothing changes more than how we look. It changes how we are able to move.”', again:'Experience it again', prototype:'Prototype · Working version 01', basis:'Historical basis: Wien Museum and MAK · Illustration: artistic interpretation'
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
  const [thread, setThread] = useState(0);
  const [chapter, setChapter] = useState(0);
  const [shape, setShape] = useState({ width: 55, weight: 42, layers: 3 });
  const [action, setAction] = useState<'gehen' | 'arbeiten' | 'tanzen'>('gehen');
  const [lang, setLang] = useState<'de'|'en'>('de');
  const [soundOn, setSoundOn] = useState(false);
  const [businessChoice, setBusinessChoice] = useState<number | null>(null);
  const c = copy[lang];
  const actionFactor = action === 'tanzen' ? .88 : action === 'arbeiten' ? .96 : 1;
  const mobility = Math.round(Math.max(8, Math.min(100, (18 + (shape.width - 32) * 1.08 + (90 - shape.weight) * .36 - (shape.layers - 1) * 4) * actionFactor)));

  useEffect(() => {
    const onScroll = () => {
      const scenes=[...document.querySelectorAll<HTMLElement>('.scene')]; const center=window.innerHeight*.5;
      const active=scenes.findIndex(scene=>{const rect=scene.getBoundingClientRect();return rect.top<=center&&rect.bottom>center});
      if(active>=0) setChapter(Math.min(5,active));
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
    const frequencies=[118,104,82,148,174,196]; const levels=[.024,.027,.014,.018,.022,.013]; const types:OscillatorType[]=['triangle','sine','sine','triangle','triangle','sine'];
    ambient.osc.type=types[chapter]; ambient.osc.frequency.cancelScheduledValues(ctx.currentTime); ambient.osc.frequency.linearRampToValueAtTime(frequencies[chapter],ctx.currentTime+1.2); ambient.gain.gain.cancelScheduledValues(ctx.currentTime); ambient.gain.gain.linearRampToValueAtTime(levels[chapter],ctx.currentTime+1.2);
    if(sceneSoundRef.current===chapter)return; sceneSoundRef.current=chapter;
    if(chapter===1)noiseGesture(.55,.018,850); if(chapter===2)noiseGesture(.75,.012,620); if(chapter===3)businessRhythm(); if(chapter===4)noiseGesture(.65,.022,1650); if(chapter===5)openAir();
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
    <main className={`experience-shell ${released ? 'is-released' : ''}`}>
      <a className="skip-link" href="#experience">{c.skip}</a>
      <header className="masthead">
        <a className="wordmark" href="#experience"><span>EMILIE</span><small>{c.subtitle}</small></a>
        <div className="chapter-mark" aria-live="polite"><span>0{chapter + 1}</span><i /><small>06 · {c.chapters[chapter]}</small></div>
        <div className="header-tools"><div className="language-switch" role="group" aria-label="Language / Sprache"><button type="button" aria-pressed={lang==='de'} onClick={()=>setLang('de')}>DE</button><span>/</span><button type="button" aria-pressed={lang==='en'} onClick={()=>setLang('en')}>EN</button></div><button className="sound-toggle" type="button" aria-pressed={soundOn} onClick={toggleSound}><span className="sound-lines" aria-hidden="true"><i/><i/><i/></span>{c.sound[soundOn?1:0]}</button><a className="sound-control" href="#sources">{c.sources}</a></div>
      </header>

      <section className="hero scene" id="experience" ref={stageRef} aria-labelledby="hero-title">
        <PatternField />
        <div className="hero-copy">
          <p className="eyebrow"><span>{c.heroEye[0]}</span><span>{c.heroEye[1]}</span></p>
          <h1 id="hero-title"><span>{c.heroTitle[0]}</span><em>{c.heroTitle[1]}</em><span>{c.heroTitle[2]}</span><strong>{c.heroTitle[3]}</strong></h1>
          <p className="intro">{c.heroIntro}</p>
          <button className="enter-button" type="button" onClick={() => { setReleased(true); if(soundOn) salonEntrance(); document.querySelector('#loesen')?.scrollIntoView({ behavior:'smooth' }); }}><span>{c.begin}</span><i aria-hidden="true">↘</i></button>
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
          <div className="thread-track" ref={threadTrackRef}>
            <small className="thread-start">{c.threadEnds[0]}</small><small className="thread-end">{c.threadEnds[1]}</small>
            <span className="thread-line" style={{ '--pull': `${thread}%` } as React.CSSProperties} />
            <button className="thread-handle" type="button"
              style={{ left:`${thread}%` }}
              onPointerDown={(event) => { event.currentTarget.setPointerCapture(event.pointerId); dragThread(event.clientX); }}
              onPointerMove={(event) => { if (event.currentTarget.hasPointerCapture(event.pointerId)) dragThread(event.clientX); }}
              onKeyDown={(event) => { if(event.key==='ArrowRight') setThread(v=>{const next=Math.min(100,v+10);if(next>96&&!freedomSoundRef.current){freedomSoundRef.current=true;openAir()}return next}); if(event.key==='ArrowLeft') setThread(v=>{const next=Math.max(0,v-10);if(next<70)freedomSoundRef.current=false;return next}); }}
              aria-label={`${c.pull}, ${Math.round(thread)}%`} aria-valuenow={Math.round(thread)} aria-valuemin={0} aria-valuemax={100} role="slider"><i /><span>{c.pull}</span></button>
          </div>
          <p className="release-status" aria-live="polite">{thread < 34 ? c.releaseStatus[0] : thread < 68 ? c.releaseStatus[1] : thread < 98 ? c.releaseStatus[2] : c.releaseStatus[3]}</p>
        </div>
        <TextileFigure progress={thread} alt={c.portraitAlt} bindings={c.bindings} onFabricMove={touchFabric} />
        {thread >= 100 && <button className="continue-cue" type="button" onClick={() => document.querySelector('#einordnen')?.scrollIntoView({behavior:'smooth'})}>{c.what} <span>↓</span></button>}
      </section>

      <section className="context-scene scene" id="einordnen" aria-labelledby="context-title">
        <div className="scene-index light"><span>03</span><i /><small>{c.chapters[2]}</small></div>
        <div className="portrait-panel">
          <div className="portrait-orbit" aria-hidden="true"><i /><i /><i /></div>
          <img src="./visuals/emilie-portrait.png" alt={c.portraitAlt} />
          <p>{c.art[0]}<br/><span>{c.art[1]}</span></p>
        </div>
        <div className="context-copy">
          <p className="eyebrow">{c.contextEye}</p>
          <h2 id="context-title">{c.contextTitle[0]} <em>{c.contextTitle[1]}</em> {c.contextTitle[2]}</h2>
          <p className="context-lead">{c.contextLead}</p>
          <div className="fact-grid">
            {c.facts.map((fact,index)=><article key={fact[0]}><small>{index===2?c.caution:c.proven}</small><strong>{fact[0]}</strong><p>{fact[1]}</p></article>)}
          </div>
          <p className="not-muse"><span>{c.notMuse[0]}</span> {c.notMuse[1]}</p>
          <button className="continue-cue context-continue" type="button" onClick={() => document.querySelector('#unternehmen')?.scrollIntoView({behavior:'smooth'})}>{c.chapters[3]} <span>↓</span></button>
        </div>
      </section>

      <section className="business-scene scene" id="unternehmen" aria-labelledby="business-title">
        <div className="scene-index"><span>04</span><i /><small>{c.chapters[3]}</small></div>
        <div className="business-copy"><p className="eyebrow">{c.businessEye}</p><h2 id="business-title">{c.businessTitle[0]} <em>{c.businessTitle[1]}</em></h2><p className="business-lead">{c.businessLead}</p><p className="task-prompt">{c.chooseTask}</p><div className="business-tasks">{c.businessTasks.map((task,index)=><button type="button" key={task[0]} aria-pressed={businessChoice===index} onClick={()=>{setBusinessChoice(index);businessRhythm()}}><span>0{index+1}</span><strong>{task[0]}</strong><small>{task[1]}</small></button>)}</div>{businessChoice!==null&&<div className="business-answer" aria-live="polite"><strong>{c.businessResult[businessChoice]}</strong><p>{c.businessLearning}</p><button className="continue-cue" type="button" onClick={()=>document.querySelector('#anwenden')?.scrollIntoView({behavior:'smooth'})}>{c.continueAtelier}<span>↓</span></button></div>}</div>
      </section>

      <section className="atelier-scene scene" id="anwenden" aria-labelledby="atelier-title">
        <div className="scene-index"><span>05</span><i /><small>{c.chapters[4]}</small></div>
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
        <div className="scene-index"><span>06</span><i /><small>{c.chapters[5]}</small></div>
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

function TextileFigure({progress,alt,bindings,onFabricMove}:{progress:number;alt:string;bindings?:readonly string[];onFabricMove?:(position?:number,intensity?:number)=>void}){
  return <div className={`textile-portrait ${bindings ? 'has-restraints' : ''} ${progress >= 96 ? 'is-fully-free' : progress < 18 ? 'is-constrained' : 'is-releasing'}`} style={{'--freedom':progress/100} as React.CSSProperties} onPointerMove={event=>{const rect=event.currentTarget.getBoundingClientRect();onFabricMove?.((event.clientX-rect.left)/rect.width,.55)}} onWheel={event=>{const rect=event.currentTarget.getBoundingClientRect();onFabricMove?.((event.clientX-rect.left)/rect.width,.92)}}>
    <div className="portrait-halo" aria-hidden="true"/><img className="figure-illustration" src="./visuals/emilie-figure-abstract.png" alt={alt}/>
    {bindings && <><div className="gather-pleats" aria-hidden="true">{Array.from({length:7},(_,index)=><i key={index}/>)}</div><div className="figure-bindings" aria-hidden="true">{bindings.map((label,index)=><i key={label} style={{'--binding':index,'--open':progress > 92 ? 1 : 0} as React.CSSProperties}><span>{label}</span><b/></i>)}</div></>}
    {bindings && <div className="freedom-ribbons" aria-hidden="true">{Array.from({length:8},(_,index)=><i key={index}/>)}</div>}
  </div>;
}
