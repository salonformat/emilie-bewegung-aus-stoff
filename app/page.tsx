'use client';

import { useEffect, useRef, useState } from 'react';

const chapters = ['Begrenzung', 'Lösen', 'Einordnen', 'Anwenden', 'Perspektive'];

export default function Home() {
  const stageRef = useRef<HTMLElement>(null);
  const threadTrackRef = useRef<HTMLDivElement>(null);
  const [released, setReleased] = useState(false);
  const [thread, setThread] = useState(0);
  const [chapter, setChapter] = useState(0);
  const [shape, setShape] = useState({ width: 55, weight: 42, layers: 3 });
  const [action, setAction] = useState<'gehen' | 'arbeiten' | 'tanzen'>('gehen');

  useEffect(() => {
    const onScroll = () => setChapter(Math.min(4, Math.round(window.scrollY / Math.max(window.innerHeight, 1))));
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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
    setThread(Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100)));
  };

  return (
    <main className={`experience-shell ${released ? 'is-released' : ''}`}>
      <a className="skip-link" href="#experience">Direkt zur Experience</a>
      <header className="masthead">
        <a className="wordmark" href="#experience"><span>EMILIE</span><small>Bewegung aus Stoff</small></a>
        <div className="chapter-mark" aria-live="polite"><span>0{chapter + 1}</span><i /><small>05 · {chapters[chapter]}</small></div>
        <a className="sound-control" href="#sources"><span className="sound-lines" aria-hidden="true"><i /><i /><i /></span>Quellen</a>
      </header>

      <section className="hero scene" id="experience" ref={stageRef} aria-labelledby="hero-title">
        <PatternField />
        <div className="hero-copy">
          <p className="eyebrow"><span>Eine textile Begegnung</span><span>Wien, um 1900</span></p>
          <h1 id="hero-title"><span>Wie viel</span><em>Raum</em><span>gibt dir</span><strong>deine Kleidung?</strong></h1>
          <p className="intro">Bewege dich durch Stoff, Schnitt und die Geschichte einer Frau, die Mode als Möglichkeit verstand.</p>
          <button className="enter-button" type="button" onClick={() => { setReleased(true); document.querySelector('#loesen')?.scrollIntoView({ behavior:'smooth' }); }}><span>Experience beginnen</span><i aria-hidden="true">↘</i></button>
        </div>
        <TextileFigure progress={released ? 100 : 0} note="Bewege den Cursor" />
        <div className="edition-note" aria-hidden="true"><span>Digital study</span><strong>№ 01</strong></div>
      </section>

      <section className={`release-scene scene ${thread >= 100 ? 'is-open' : ''}`} id="loesen" aria-labelledby="release-title">
        <div className="scene-index"><span>02</span><i /><small>Lösen</small></div>
        <div className="release-copy">
          <p className="eyebrow">Erst handeln. Dann verstehen.</p>
          <h2 id="release-title">Ein Faden.<br/><em>Mehr Raum.</em></h2>
          <p>Die Bänder halten Schultern, Taille und Schritt eng. Halte den Griff und ziehe ihn nach rechts.</p>
          <div className="thread-track" ref={threadTrackRef}>
            <span className="thread-line" style={{ '--pull': `${thread}%` } as React.CSSProperties} />
            <button className="thread-handle" type="button"
              style={{ left:`${thread}%` }}
              onPointerDown={(event) => { event.currentTarget.setPointerCapture(event.pointerId); dragThread(event.clientX); }}
              onPointerMove={(event) => { if (event.currentTarget.hasPointerCapture(event.pointerId)) dragThread(event.clientX); }}
              onKeyDown={(event) => { if(event.key==='ArrowRight') setThread(v=>Math.min(100,v+10)); if(event.key==='ArrowLeft') setThread(v=>Math.max(0,v-10)); }}
              aria-label={`Faden ziehen, ${Math.round(thread)} Prozent gelöst`} aria-valuenow={Math.round(thread)} aria-valuemin={0} aria-valuemax={100} role="slider"><i /><span>ziehen</span></button>
          </div>
          <p className="release-status" aria-live="polite">{thread < 34 ? 'Die Haltung bleibt eng.' : thread < 68 ? 'Die Schultern gewinnen Raum.' : thread < 98 ? 'Der Schritt wird weiter.' : 'Die Bindungen sind gelöst. Der Körper kann sich frei bewegen.'}</p>
        </div>
        <TextileFigure progress={thread} note={thread < 100 ? `${thread}% gelöst` : 'Der Stoff atmet'} />
        {thread >= 100 && <button className="continue-cue" type="button" onClick={() => document.querySelector('#einordnen')?.scrollIntoView({behavior:'smooth'})}>Was ist gerade passiert? <span>↓</span></button>}
      </section>

      <section className="context-scene scene" id="einordnen" aria-labelledby="context-title">
        <div className="scene-index light"><span>03</span><i /><small>Einordnen</small></div>
        <div className="portrait-panel">
          <div className="portrait-orbit" aria-hidden="true"><i /><i /><i /></div>
          <img src="/visuals/emilie-portrait.png" alt="Künstlerisch abstrahierte Illustration von Emilie Flöge in einem weiten Reformkleid" />
          <p>Künstlerische Interpretation<br/><span>nach historischen Bildquellen</span></p>
        </div>
        <div className="context-copy">
          <p className="eyebrow">Wien · Um 1900</p>
          <h2 id="context-title">Kleidung wurde zum <em>Schauplatz</em> gesellschaftlicher Veränderung.</h2>
          <p className="context-lead">Reform- und Künstlerkleider stellten das eng geschnürte, körperlich begrenzende Modeideal infrage.</p>
          <div className="fact-grid">
            <article><small>Belegt</small><strong>Modeschöpferin</strong><p>Emilie Flöge war ausgebildete Schneiderin und Mitinhaberin des Salons Schwestern Flöge.</p></article>
            <article><small>Belegt</small><strong>Unternehmerin</strong><p>Sie reiste, sammelte Textilien und führte mit ihren Schwestern ein Unternehmen mit zahlreichen Mitarbeiterinnen.</p></article>
            <article><small>Mit Vorsicht</small><strong>Reformmode</strong><p>Ihr Verhältnis zu Reform- und Künstlerkleidern ist relevant, konkrete Entwürfe sind jedoch oft nicht eindeutig belegt.</p></article>
          </div>
          <p className="not-muse"><span>Nicht nur Motiv.</span> Gestalterin. Sammlerin. Entscheiderin.</p>
        </div>
      </section>

      <section className="atelier-scene scene" id="anwenden" aria-labelledby="atelier-title">
        <div className="scene-index"><span>04</span><i /><small>Anwenden</small></div>
        <header className="atelier-head"><p className="eyebrow">Dein textiles Experiment</p><h2 id="atelier-title">Entwirf für <em>Bewegung.</em></h2><p>Nicht für einen Look. Für eine Handlung.</p></header>
        <div className="action-picker" role="group" aria-label="Handlung wählen">{(['gehen','arbeiten','tanzen'] as const).map(item => <button type="button" key={item} aria-pressed={action === item} onClick={() => setAction(item)}>{item}</button>)}</div>
        <div className="garment-lab">
          <div className={`lab-figure action-${action}`} style={{ '--dress-width':`${shape.width}%`, '--dress-weight':shape.weight, '--layers':shape.layers } as React.CSSProperties}>
            <div className="lab-body"><i className="lab-head"/><i className="lab-torso"/><i className="lab-arm arm-left"/><i className="lab-arm arm-right"/><i className="lab-leg leg-left"/><i className="lab-leg leg-right"/></div>
            <div className="lab-dress">{Array.from({length:shape.layers},(_,i)=><span key={i}/>)}</div><i className="floor-line" />
          </div>
          <div className="motion-word" aria-hidden="true">{action}</div>
        </div>
        <form className="controls" onSubmit={(event)=>event.preventDefault()}>
          <label><span><strong>Weite</strong><small>{shape.width}</small></span><input type="range" min="32" max="82" value={shape.width} onChange={e=>setShape({...shape,width:+e.target.value})}/></label>
          <label><span><strong>Gewicht</strong><small>{shape.weight}</small></span><input type="range" min="10" max="90" value={shape.weight} onChange={e=>setShape({...shape,weight:+e.target.value})}/></label>
          <label><span><strong>Schichten</strong><small>{shape.layers}</small></span><input type="range" min="1" max="5" value={shape.layers} onChange={e=>setShape({...shape,layers:+e.target.value})}/></label>
          <p className="design-feedback">{shape.width > 60 && shape.weight < 55 ? `Deine Form gibt beim ${action} viel Raum.` : shape.weight > 65 ? 'Mehr Gewicht macht die Bewegung träger.' : 'Verändere die Parameter und beobachte die Silhouette.'}</p>
          <button type="button" className="continue-cue" onClick={()=>document.querySelector('#perspektive')?.scrollIntoView({behavior:'smooth'})}>Form ins Archiv geben <span>↓</span></button>
        </form>
      </section>

      <section className="final-scene scene" id="perspektive" aria-labelledby="final-title">
        <PatternField />
        <div className="scene-index"><span>05</span><i /><small>Perspektive</small></div>
        <div className="network" aria-hidden="true">{Array.from({length:17},(_,i)=><i key={i}/>)}</div>
        <div className="final-copy">
          <p className="eyebrow">Ein anderer Blick bleibt</p>
          <h2 id="final-title">Emilie Flöge war nicht nur ein Motiv der Wiener Moderne.</h2>
          <p>Sie gestaltete, sammelte, reiste, entschied und führte gemeinsam mit ihren Schwestern ein Unternehmen.</p>
          <blockquote>„Kleidung verändert nicht nur, wie wir aussehen. Sie verändert, wie wir uns bewegen können.“</blockquote>
          <a className="enter-button" href="#experience"><span>Noch einmal erleben</span><i>↑</i></a>
        </div>
        <footer id="sources"><p>Prototyp · Arbeitsfassung 01</p><p>Historische Grundlage: Wien Museum und MAK · Illustration: künstlerische Interpretation</p></footer>
      </section>
    </main>
  );
}

function PatternField(){ return <div className="pattern-field" aria-hidden="true">{Array.from({length:24},(_,i)=><i key={i}/>)}</div>; }

function TextileFigure({progress,note}:{progress:number;note:string}){
  return <div className="textile-portrait" style={{'--freedom':progress/100} as React.CSSProperties} aria-label="Abstrakte textile Silhouette einer Frau">
    <div className="portrait-halo" aria-hidden="true"/><div className="portrait-head" aria-hidden="true"><i/></div>
    <div className="figure-body" aria-hidden="true"><i className="body-line"/><i className="figure-arm arm-a"/><i className="figure-arm arm-b"/><i className="figure-leg leg-a"/><i className="figure-leg leg-b"/></div>
    <div className="portrait-dress" aria-hidden="true"><span className="seam seam-one"/><span className="seam seam-two"/><span className="bind bind-one"/><span className="bind bind-two"/><span className="bind bind-three"/><div className="dress-pattern">{Array.from({length:18},(_,i)=><i key={i}/>)}</div></div>
    <p className="drag-note"><span>{note}</span><i/></p>
  </div>;
}
