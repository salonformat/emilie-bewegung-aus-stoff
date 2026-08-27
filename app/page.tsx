'use client';

import { useEffect, useRef, useState } from 'react';

const copy = {
  de: {
    chapters:['Begrenzung','Lösen','Einordnen','Anwenden','Perspektive'], skip:'Direkt zur Experience', subtitle:'Bewegung aus Stoff', sources:'Quellen', sound:['Sound aus','Sound an'],
    heroEye:['Emilie Flöge · Modeschöpferin','Wien, um 1900'], heroTitle:['Wie viel','Raum','gibt dir','deine Kleidung?'], heroIntro:'Begegne Emilie Flöge als Gestalterin und Unternehmerin. Bewege dich durch Stoff, Schnitt und eine Geschichte von Kleidung als Möglichkeit.', begin:'Experience beginnen', cursor:'Bewege den Cursor',
    actFirst:'Erst handeln. Dann verstehen.', releaseTitle:['Ein Faden.','Mehr Raum.'], releaseIntro:'Die drei Bänder halten Schultern, Taille und Schritt eng. Greife den kleinen Ring und ziehe ihn vollständig nach rechts.', pull:'ziehen', threadEnds:['GREIFEN','LÖSEN'], releaseStatus:['Die Haltung bleibt eng.','Die Schultern gewinnen Raum.','Der Schritt wird weiter.','Die Bindungen sind gelöst. Der Körper kann sich frei bewegen.'], solved:'Der Stoff atmet', what:'Was ist gerade passiert?',
    contextEye:'Wien · Um 1900', contextTitle:['Kleidung wurde zum','Schauplatz','gesellschaftlicher Veränderung.'], contextLead:'Reform- und Künstlerkleider stellten das eng geschnürte, körperlich begrenzende Modeideal infrage.', proven:'Belegt', caution:'Mit Vorsicht', facts:[['Modeschöpferin','Emilie Flöge war ausgebildete Schneiderin und Mitinhaberin des Salons Schwestern Flöge.'],['Unternehmerin','Sie reiste, sammelte Textilien und führte mit ihren Schwestern ein Unternehmen mit zahlreichen Mitarbeiterinnen.'],['Reformmode','Ihr Verhältnis zu Reform- und Künstlerkleidern ist relevant, konkrete Entwürfe sind jedoch oft nicht eindeutig belegt.']], notMuse:['Nicht nur Motiv.','Gestalterin. Sammlerin. Entscheiderin.'], art:['Künstlerische Interpretation','nach historischen Bildquellen'], portraitAlt:'Künstlerisch abstrahierte Illustration von Emilie Flöge in einem weiten Reformkleid',
    experiment:'Dein textiles Experiment', design:['Entwirf für','Bewegung.'], notLook:'Nicht für einen Look. Für eine Handlung.', actions:['gehen','arbeiten','tanzen'], labels:['Weite','Gewicht','Schichten'], feedback:['Deine Form gibt beim','viel Raum.','Mehr Gewicht macht die Bewegung träger.','Verändere die Parameter und beobachte die Silhouette.'], archive:'Form ins Archiv geben',
    finalEye:'Ein anderer Blick bleibt', finalTitle:'Emilie Flöge war nicht nur ein Motiv der Wiener Moderne.', finalBody:'Sie gestaltete, sammelte, reiste, entschied und führte gemeinsam mit ihren Schwestern ein Unternehmen.', quote:'„Kleidung verändert nicht nur, wie wir aussehen. Sie verändert, wie wir uns bewegen können.“', again:'Noch einmal erleben', prototype:'Prototyp · Arbeitsfassung 01', basis:'Historische Grundlage: Wien Museum und MAK · Illustration: künstlerische Interpretation'
  },
  en: {
    chapters:['Restriction','Release','Context','Apply','Perspective'], skip:'Skip to the experience', subtitle:'Movement through fabric', sources:'Sources', sound:['Sound off','Sound on'],
    heroEye:['Emilie Flöge · Fashion designer','Vienna, around 1900'], heroTitle:['How much','space','does your','clothing allow?'], heroIntro:'Meet Emilie Flöge as a designer and entrepreneur. Move through fabric, cut, and a story of clothing as possibility.', begin:'Begin experience', cursor:'Move the cursor',
    actFirst:'Act first. Then understand.', releaseTitle:['One thread.','More space.'], releaseIntro:'Three bands hold the shoulders, waist, and stride tightly. Grab the small ring and pull it fully to the right.', pull:'pull', threadEnds:['GRAB','RELEASE'], releaseStatus:['The posture remains constrained.','The shoulders gain space.','The stride becomes wider.','The bindings are released. The body can move freely.'], solved:'The fabric breathes', what:'What just happened?',
    contextEye:'Vienna · Around 1900', contextTitle:['Clothing became a','stage','for social change.'], contextLead:'Reform and artist dresses challenged the tightly laced ideal of fashion that restricted the body.', proven:'Documented', caution:'Use with caution', facts:[['Fashion designer','Emilie Flöge was a trained dressmaker and co-owner of the Schwestern Flöge salon.'],['Entrepreneur','She travelled, collected textiles, and ran a company with her sisters that employed numerous women.'],['Reform fashion','Her connection to reform and artist dresses is relevant, but specific designs often cannot be attributed with certainty.']], notMuse:['More than a motif.','Designer. Collector. Decision-maker.'], art:['Artistic interpretation','based on historical images'], portraitAlt:'Artistically abstracted illustration of Emilie Flöge in a loose reform dress',
    experiment:'Your textile experiment', design:['Design for','movement.'], notLook:'Not for a look. For an action.', actions:['walking','working','dancing'], labels:['Width','Weight','Layers'], feedback:['Your form allows plenty of space for','.', 'More weight makes movement slower.','Change the parameters and observe the silhouette.'], archive:'Add form to the archive',
    finalEye:'A different perspective remains', finalTitle:'Emilie Flöge was more than a motif of Viennese Modernism.', finalBody:'She designed, collected, travelled, made decisions, and ran a business together with her sisters.', quote:'“Clothing changes more than how we look. It changes how we are able to move.”', again:'Experience it again', prototype:'Prototype · Working version 01', basis:'Historical basis: Wien Museum and MAK · Illustration: artistic interpretation'
  }
} as const;

export default function Home() {
  const stageRef = useRef<HTMLElement>(null);
  const threadTrackRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<AudioContext | null>(null);
  const ambientRef = useRef<{osc: OscillatorNode; gain: GainNode} | null>(null);
  const soundStepRef = useRef(0);
  const [released, setReleased] = useState(false);
  const [thread, setThread] = useState(0);
  const [chapter, setChapter] = useState(0);
  const [shape, setShape] = useState({ width: 55, weight: 42, layers: 3 });
  const [action, setAction] = useState<'gehen' | 'arbeiten' | 'tanzen'>('gehen');
  const [lang, setLang] = useState<'de'|'en'>('de');
  const [soundOn, setSoundOn] = useState(false);
  const c = copy[lang];

  useEffect(() => {
    const onScroll = () => setChapter(Math.min(4, Math.round(window.scrollY / Math.max(window.innerHeight, 1))));
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { document.documentElement.lang = lang; }, [lang]);

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
    const step = Math.floor(next / 25);
    if (step > soundStepRef.current) { soundPulse(130 + step * 38, .22 + step * .06); soundStepRef.current = step; }
    if (next < 10) soundStepRef.current = 0;
    setThread(next);
  };

  return (
    <main className={`experience-shell ${released ? 'is-released' : ''}`}>
      <a className="skip-link" href="#experience">{c.skip}</a>
      <header className="masthead">
        <a className="wordmark" href="#experience"><span>EMILIE</span><small>{c.subtitle}</small></a>
        <div className="chapter-mark" aria-live="polite"><span>0{chapter + 1}</span><i /><small>05 · {c.chapters[chapter]}</small></div>
        <div className="header-tools"><div className="language-switch" role="group" aria-label="Language / Sprache"><button type="button" aria-pressed={lang==='de'} onClick={()=>setLang('de')}>DE</button><span>/</span><button type="button" aria-pressed={lang==='en'} onClick={()=>setLang('en')}>EN</button></div><button className="sound-toggle" type="button" aria-pressed={soundOn} onClick={toggleSound}><span className="sound-lines" aria-hidden="true"><i/><i/><i/></span>{c.sound[soundOn?1:0]}</button><a className="sound-control" href="#sources">{c.sources}</a></div>
      </header>

      <section className="hero scene" id="experience" ref={stageRef} aria-labelledby="hero-title">
        <PatternField />
        <div className="hero-copy">
          <p className="eyebrow"><span>{c.heroEye[0]}</span><span>{c.heroEye[1]}</span></p>
          <h1 id="hero-title"><span>{c.heroTitle[0]}</span><em>{c.heroTitle[1]}</em><span>{c.heroTitle[2]}</span><strong>{c.heroTitle[3]}</strong></h1>
          <p className="intro">{c.heroIntro}</p>
          <button className="enter-button" type="button" onClick={() => { setReleased(true); document.querySelector('#loesen')?.scrollIntoView({ behavior:'smooth' }); }}><span>{c.begin}</span><i aria-hidden="true">↘</i></button>
        </div>
        <TextileFigure progress={released ? 100 : 0} note={c.cursor} alt={c.portraitAlt} />
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
              onKeyDown={(event) => { if(event.key==='ArrowRight') setThread(v=>Math.min(100,v+10)); if(event.key==='ArrowLeft') setThread(v=>Math.max(0,v-10)); }}
              aria-label={`${c.pull}, ${Math.round(thread)}%`} aria-valuenow={Math.round(thread)} aria-valuemin={0} aria-valuemax={100} role="slider"><i /><span>{c.pull}</span></button>
          </div>
          <p className="release-status" aria-live="polite">{thread < 34 ? c.releaseStatus[0] : thread < 68 ? c.releaseStatus[1] : thread < 98 ? c.releaseStatus[2] : c.releaseStatus[3]}</p>
        </div>
        <TextileFigure progress={thread} note={thread < 100 ? `${Math.round(thread)}%` : c.solved} alt={c.portraitAlt} />
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
        </div>
      </section>

      <section className="atelier-scene scene" id="anwenden" aria-labelledby="atelier-title">
        <div className="scene-index"><span>04</span><i /><small>{c.chapters[3]}</small></div>
        <header className="atelier-head"><p className="eyebrow">{c.experiment}</p><h2 id="atelier-title">{c.design[0]} <em>{c.design[1]}</em></h2><p>{c.notLook}</p></header>
        <div className="action-picker" role="group" aria-label={c.notLook}>{(['gehen','arbeiten','tanzen'] as const).map((item,index) => <button type="button" key={item} aria-pressed={action === item} onClick={() => { setAction(item); soundPulse([112,174,232][index],.38); }}>{c.actions[index]}</button>)}</div>
        <div className="garment-lab">
          <div className={`lab-figure action-${action}`} style={{ '--dress-width':`${shape.width}%`, '--figure-scale':.78 + shape.width/230, '--weight-filter':1.08-shape.weight/360, '--motion-speed':`${3.1 + shape.weight/38}s`, '--layers':shape.layers } as React.CSSProperties}>
            <div className="lab-character">{Array.from({length:shape.layers},(_,i)=><img className="garment-echo" style={{'--echo':i+1} as React.CSSProperties} key={i} src="./visuals/emilie-figure-abstract.png" alt="" aria-hidden="true"/>)}<img className="lab-character-main" src="./visuals/emilie-figure-abstract.png" alt={c.portraitAlt}/></div><i className="floor-line" />
          </div>
          <div className="motion-word" aria-hidden="true">{c.actions[['gehen','arbeiten','tanzen'].indexOf(action)]}</div>
        </div>
        <form className="controls" onSubmit={(event)=>event.preventDefault()}>
          <label><span><strong>{c.labels[0]}</strong><small>{shape.width}</small></span><input aria-label={c.labels[0]} type="range" min="32" max="82" value={shape.width} onChange={e=>setShape({...shape,width:+e.target.value})}/></label>
          <label><span><strong>{c.labels[1]}</strong><small>{shape.weight}</small></span><input aria-label={c.labels[1]} type="range" min="10" max="90" value={shape.weight} onChange={e=>setShape({...shape,weight:+e.target.value})}/></label>
          <label><span><strong>{c.labels[2]}</strong><small>{shape.layers}</small></span><input aria-label={c.labels[2]} type="range" min="1" max="5" value={shape.layers} onChange={e=>setShape({...shape,layers:+e.target.value})}/></label>
          <p className="design-feedback">{shape.width > 60 && shape.weight < 55 ? `${c.feedback[0]} ${c.actions[['gehen','arbeiten','tanzen'].indexOf(action)]}${c.feedback[1]}` : shape.weight > 65 ? c.feedback[2] : c.feedback[3]}</p>
          <button type="button" className="continue-cue" onClick={()=>document.querySelector('#perspektive')?.scrollIntoView({behavior:'smooth'})}>{c.archive} <span>↓</span></button>
        </form>
      </section>

      <section className="final-scene scene" id="perspektive" aria-labelledby="final-title">
        <PatternField />
        <div className="scene-index"><span>05</span><i /><small>{c.chapters[4]}</small></div>
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

function TextileFigure({progress,note,alt}:{progress:number;note:string;alt:string}){
  return <div className="textile-portrait" style={{'--freedom':progress/100} as React.CSSProperties}>
    <div className="portrait-halo" aria-hidden="true"/><img className="figure-illustration" src="./visuals/emilie-figure-abstract.png" alt={alt}/>
    <div className="figure-bindings" aria-hidden="true"><i/><i/><i/></div>
    <p className="drag-note"><span>{note}</span><i/></p>
  </div>;
}
