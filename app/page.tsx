'use client';

import { useEffect, useRef, useState } from 'react';

const copy = {
  de: {
    chapters:['Begrenzung','Lösen','Kontext','Salon','Unternehmen','Atelier','Erkenntnis'], skip:'Direkt zur Experience', subtitle:'Bewegung aus Stoff', sources:'Quellen', sound:['Sound aus','Sound an'],
    heroEye:['Emilie Flöge · Modeschöpferin','Wien, um 1900'], heroTitle:['Wie viel','Raum','gibt dir','deine Kleidung?'], heroIntro:'Entdecke, wie Emilie Flöge Kleidung neu dachte: als Gestaltung, die dem Körper mehr Bewegungsfreiheit geben kann – und als Grundlage eines selbstständig geführten Modeunternehmens.', begin:'Experience beginnen', cursor:'Bewege den Cursor',
    portalEye:'Immersive Modegeschichte · Emilie Flöge', portalTitle:'Bewegung aus Stoff', portalEnter:'In die Experience eintauchen', portalCredit:'Emilie Flöge und Gustav Klimt am Attersee, 1909 · Fotograf unbekannt · Wien Museum, Inv. 157541 · CC0',
    actFirst:'Erst handeln. Dann verstehen.', releaseTitle:['Eine Raffung.','Mehr Raum.'], releaseIntro:'Ein Zugband rafft den Stoff eng am Körper. Greife den Ring und ziehe ihn nach rechts, um die Raffung zu lösen.', pull:'ziehen', threadEnds:['GREIFEN','ÖFFNEN'], bindings:['Zugband'], releaseStatus:['Die Raffung hält den Stoff eng.','Die ersten Falten öffnen sich.','Die Silhouette gewinnt sichtbar an Weite.','Die Raffung ist gelöst. Stoff und Körper können sich frei bewegen.'], solved:'Der Stoff atmet', what:'Was ist gerade passiert?',
    contextEye:'Wien · Um 1900', contextBridge:'Mit dem Lösen der Raffung hast du Flöges gestalterischen Gedanken nachvollzogen: Kleidung kann dem Körper Bewegungsraum zurückgeben.', contextTitle:['Warum war diese','Freiheit','um 1900 relevant?'], contextLead:'Eng geschnürte Kleidung prägte das modische Körperbild. Neue, weiter geschnittene Formen machten Kleidung zu einem Feld gestalterischer und gesellschaftlicher Veränderung.', facts:[['1874–1952','Emilie Flöge wurde 1874 in Wien geboren und starb dort 1952. Das Belvedere führt sie als Unternehmerin und dem Modedesign zugehörig.','Belvedere Archiv','https://dev-archiv.belvedere.at/kuenstler/20685/fl%C3%B6ge_emilie'],['Salon Schwestern Flöge','Ein erhaltenes Kleidungsstück des Salons, um 1905 datiert und mit „Salon Schwestern Flöge“ bezeichnet, befindet sich im Wien Museum.','Wien Museum Sammlung','https://sammlung.wienmuseum.at/en/object/697417-taille/'],['Wiener Werkstätte','Das Wien Museum beschreibt den von Emilie Flöge geführten Salon als Drehscheibe für den Verkauf von Schmuck der Wiener Werkstätte.','Wien Museum','https://www.wienmuseum.at/glanzstuecke_emilie_floege']], notMuse:['Historisch greifbar:','Modeschöpferin und Unternehmerin.'], art:['Formstudie','nach Motiven der Wiener Werkstätte'], portraitAlt:'Künstlerisch abstrahierte Illustration von Emilie Flöge', sourceWord:'Quelle',
    salonEye:'Eine räumliche Annäherung', salonTitle:['Salon','Schwestern Flöge'], salonIntro:'Tritt ein und entdecke den Salon als Entwurfsraum, Geschäft und kulturellen Treffpunkt.', salonEnter:'Salon betreten', salonExplore:'Drei Spuren im Raum', salonHint:'Wähle ein Objekt und sieh, was es über Flöges Arbeit erzählt.', salonStations:[['Stofftisch','Stoff entfalten'],['Schneiderpuppe','Schnitt öffnen'],['Geschäftstisch','Salon organisieren']], salonInsightEye:'Im Detail', salonInsights:[['Wie Stoff Bewegung formt','Eine Stoffbahn entfaltet sich. An ihrem Fall wird sichtbar, wie stark Gewicht und Oberfläche die Bewegung eines Kleides prägen.','Material formt Bewegung.'],['Freiheit beginnt im Schnitt','Die Schnittflächen rücken auseinander und geben der Silhouette mehr Weite. So entsteht Bewegungsraum, ohne dass das Kleid seine klare Form verliert.','Weite ist eine gestalterische Entscheidung.'],['Atelier und Unternehmen zugleich','Auftragsbuch, Briefe und Stoffproben zeigen, was hinter dem Entwurf steht: Beratung, Planung und kaufmännische Entscheidungen.','Der Salon verband Gestaltung und Geschäft.']], salonDone:'Du hast alle drei Bereiche entdeckt.', salonContinue:'Weiter zu Flöge als Unternehmerin',
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
    salonEye:'A spatial approach', salonTitle:['Salon','Schwestern Flöge'], salonIntro:'Step inside and discover the salon as a design space, business, and cultural meeting point.', salonEnter:'Enter the salon', salonExplore:'Three traces in the room', salonHint:'Choose an object and see what it reveals about Flöge’s work.', salonStations:[['Fabric table','Unfold the fabric'],['Dress form','Open the cut'],['Business desk','Run the salon']], salonInsightEye:'In detail', salonInsights:[['How fabric shapes movement','A length of fabric unfolds. Its drape reveals how strongly weight and surface influence the movement of a dress.','Material shapes movement.'],['Freedom begins with the cut','The pattern pieces move apart and give the silhouette greater width. The body gains room without the dress losing its clarity of form.','Width is a design decision.'],['Studio and business at once','An order book, letters, and fabric samples reveal what stood behind each design: consultation, planning, and commercial decisions.','The salon brought design and business together.']], salonDone:'You have discovered all three areas.', salonContinue:'Continue to Flöge as an entrepreneur',
    businessEye:'Schwestern Flöge · Vienna', businessTitle:['Design also means','deciding.'], businessLead:'The fashion salon was simultaneously a design studio, a business, and a cultural meeting point. These perspectives show the decisions that shape fashion as a professional practice.', businessTasks:[['Silhouette','Connect form, proportion, and range of movement into a coherent design position.'],['Material','Assess the quality, effect, and origin of textiles and select them for a collection.'],['Salon practice','Coordinate commissions, consultation, and collaboration in daily operations.']], businessResult:['The silhouette translates a position into form – and directly determines range of movement.','Material is not decoration: weight, drape, and surface determine effect and use.','Design does not happen in isolation. It connects clients, employees, and commercial decisions.'], businessLearning:'Flöge’s position therefore cannot be reduced to that of a muse: her fashion salon was an independent professional and entrepreneurial practice.', chooseTask:'Three perspectives on the salon', reveal:'Perspective', turnAgain:'Close card', continueAtelier:'Continue to the digital fashion studio',
    experiment:'Digital fashion studio', design:['Clothing in','motion.'], notLook:'Examine how width, weight, and layers alter the body’s range of movement.', actions:['walking','working','dancing'], labels:['Width','Weight','Layers'], mobility:'Range of movement', constrained:'restricted', free:'free', evaluation:[['Movement restricted','The silhouette still responds heavily. Greater width or less weight would increase its range.'],['Movement possible','The body already has room, but the fabric does not yet follow every movement.'],['Movement in flow','Width, weight, and layers support the selected movement.']], achieved:'The silhouette follows the body.', archive:'Complete the study',
    finalEye:'What this experience makes visible', finalTitle:'Clothing helps determine how freely a body can move.', finalBody:'Emilie Flöge’s work connects fashion design with professional and entrepreneurial independence.', quote:'“Cut, material, and weight change more than a silhouette – they change its range of movement.”', again:'Begin the experience again', prototype:'Prototype · Working version 01', basis:'Historical basis: Wien Museum and Belvedere · Illustration: artistic interpretation'
  },
  fr: {
    chapters:['Contrainte','Libération','Contexte','Salon','Entreprise','Atelier','Regard'], skip:'Accéder directement à l’expérience', subtitle:'Le mouvement par l’étoffe', sources:'Sources', sound:['Son désactivé','Son activé'],
    heroEye:['Emilie Flöge · Créatrice de mode','Vienne, vers 1900'], heroTitle:['Quel','espace','vos vêtements','vous accordent-ils ?'], heroIntro:'Découvrez comment Emilie Flöge a repensé le vêtement : une création capable d’offrir davantage de liberté au corps, mais aussi le fondement d’une maison de couture dirigée en toute indépendance.', begin:'Commencer l’expérience', cursor:'Déplacez le curseur',
    portalEye:'Une histoire immersive de la mode · Emilie Flöge', portalTitle:'Le mouvement par l’étoffe', portalEnter:'Entrer dans l’expérience', portalCredit:'Emilie Flöge et Gustav Klimt sur l’Attersee, 1909 · Photographe inconnu · Wien Museum, inv. 157541 · CC0',
    actFirst:'Agir d’abord. Comprendre ensuite.', releaseTitle:['Un tissu froncé.','Plus d’espace.'], releaseIntro:'Un cordon resserre l’étoffe autour du corps. Saisissez l’anneau et tirez-le vers la droite pour libérer le tissu.', pull:'tirer', threadEnds:['SAISIR','OUVRIR'], bindings:['Cordon'], releaseStatus:['Le tissu froncé maintient le corps à l’étroit.','Les premiers plis commencent à s’ouvrir.','La silhouette gagne visiblement en ampleur.','Le tissu est libéré. L’étoffe et le corps peuvent désormais bouger librement.'], solved:'Le tissu respire', what:'Que vient-il de se passer ?',
    contextEye:'Vienne · Vers 1900', contextBridge:'En libérant le tissu, vous avez suivi l’une des idées centrales de Flöge : le vêtement peut rendre au corps son espace de mouvement.', contextTitle:['Pourquoi cette','liberté','comptait-elle vers 1900 ?'], contextLead:'Les vêtements étroitement lacés façonnaient alors le corps à la mode. De nouvelles formes plus amples ont fait du vêtement un terrain de transformation esthétique et sociale.', facts:[['1874–1952','Emilie Flöge est née à Vienne en 1874 et y est morte en 1952. Le Belvedere la répertorie comme entrepreneuse liée à la création de mode.','Archives du Belvedere','https://dev-archiv.belvedere.at/kuenstler/20685/fl%C3%B6ge_emilie'],['Salon Schwestern Flöge','Un vêtement conservé du salon, daté des environs de 1905 et portant la mention « Salon Schwestern Flöge », appartient aux collections du Wien Museum.','Collection du Wien Museum','https://sammlung.wienmuseum.at/en/object/697417-taille/'],['Wiener Werkstätte','Le Wien Museum décrit le salon dirigé par Emilie Flöge comme un lieu central pour la vente de bijoux de la Wiener Werkstätte.','Wien Museum','https://www.wienmuseum.at/glanzstuecke_emilie_floege']], notMuse:['Un fait historique :','créatrice de mode et entrepreneuse.'], art:['Étude de formes','d’après des motifs de la Wiener Werkstätte'], portraitAlt:'Illustration artistique et abstraite d’Emilie Flöge', sourceWord:'Source',
    salonEye:'Une approche spatiale', salonTitle:['Salon','Schwestern Flöge'], salonIntro:'Entrez et découvrez le salon comme lieu de création, entreprise et espace de rencontres culturelles.', salonEnter:'Entrer dans le salon', salonExplore:'Trois traces dans l’espace', salonHint:'Choisissez un objet et découvrez ce qu’il révèle du travail de Flöge.', salonStations:[['Table des étoffes','Déployer le tissu'],['Mannequin','Ouvrir la coupe'],['Bureau','Organiser le salon']], salonInsightEye:'En détail', salonInsights:[['Quand l’étoffe façonne le mouvement','Une pièce de tissu se déploie. Son tombé révèle combien le poids et la surface influencent le mouvement d’une robe.','La matière façonne le mouvement.'],['La liberté commence par la coupe','Les pièces du patron s’écartent et donnent davantage d’ampleur à la silhouette. Le corps gagne de l’espace sans que le vêtement perde la clarté de sa forme.','L’ampleur est une décision de création.'],['Atelier et entreprise à la fois','Un carnet de commandes, des lettres et des échantillons révèlent l’envers de chaque création : conseil, planification et décisions commerciales.','Le salon réunissait création et entreprise.']], salonDone:'Vous avez découvert les trois espaces.', salonContinue:'Découvrir Flöge entrepreneuse',
    businessEye:'Schwestern Flöge · Vienne', businessTitle:['Créer, c’est aussi','décider.'], businessLead:'Le salon de mode était à la fois atelier de création, entreprise et lieu de rencontres culturelles. Ces trois perspectives montrent les décisions qui façonnent la mode comme pratique professionnelle.', businessTasks:[['Silhouette','Associer forme, proportion et liberté de mouvement dans une intention cohérente.'],['Matière','Évaluer la qualité, l’effet et l’origine des étoffes pour composer une collection.'],['Pratique du salon','Coordonner commandes, conseils et collaborations au quotidien.']], businessResult:['La silhouette traduit une intention en forme et détermine directement l’espace accordé au mouvement.','La matière n’est pas un décor : son poids, son tombé et sa surface déterminent l’effet et l’usage.','La création ne naît pas dans l’isolement. Elle relie clientes, collaboratrices et décisions économiques.'], businessLearning:'La place de Flöge ne peut donc être réduite à celle d’une muse : son salon constituait une pratique professionnelle et entrepreneuriale autonome.', chooseTask:'Trois perspectives sur le salon', reveal:'Perspective', turnAgain:'Refermer la carte', continueAtelier:'Vers l’atelier de mode numérique',
    experiment:'Atelier de mode numérique', design:['Le vêtement en','mouvement.'], notLook:'Observez comment l’ampleur, le poids et les épaisseurs transforment la liberté du corps.', actions:['marcher','travailler','danser'], labels:['Ampleur','Poids','Épaisseurs'], mobility:'Liberté de mouvement', constrained:'limitée', free:'libre', evaluation:[['Mouvement limité','La silhouette reste pesante. Davantage d’ampleur ou moins de poids élargirait le mouvement.'],['Mouvement possible','Le corps dispose déjà d’un peu d’espace, mais l’étoffe ne suit pas encore chacun de ses gestes.'],['Mouvement fluide','L’ampleur, le poids et les épaisseurs accompagnent le mouvement choisi.']], achieved:'La silhouette accompagne le corps.', archive:'Achever l’étude',
    finalEye:'Ce que cette expérience rend visible', finalTitle:'Le vêtement participe à la liberté de mouvement du corps.', finalBody:'Le travail d’Emilie Flöge associe création de mode, autonomie professionnelle et indépendance entrepreneuriale.', quote:'« La coupe, la matière et le poids ne transforment pas seulement une silhouette, mais aussi son espace de mouvement. »', again:'Recommencer l’expérience', prototype:'Prototype · Version de travail 01', basis:'Fondement historique : Wien Museum et Belvedere · Illustration : interprétation artistique'
  }
} as const;

const extraCopy = {
  de:{reduce:'Bewegung reduzieren',restore:'Volle Bewegung',volume:'Lautstärke',releaseLess:'enger',releaseMore:'ganz lösen',signatureEye:'Schritt 2 · Muster gestalten',signatureTitle:'Entwirf den Stoff für deine Silhouette',signatureBody:'Wähle Motiv, Rhythmus und Akzent. Jede Entscheidung verändert das Muster sofort – direkt auf dem Kleid und in der Stoffprobe.',signatureClear:'Muster neu beginnen',signatureGenerate:'Muster übernehmen',intentions:['Quadrat','Kreis','Linie'],statement:'Rhythmus',rhythms:['Ruhig','Versetzt','Dynamisch'],accent:'Farbakzent',accents:['Rost','Gold','Smaragd'],preview:'Live auf dem Kleid',resultEye:'Deine persönliche Stoffstudie',resultTitle:'Muster in Bewegung',download:'Stoffstudie herunterladen',share:'Entwurf online teilen',shared:'Link kopiert',resultThought:'Du hast Schnitt und Oberfläche zusammen gestaltet: Das Muster prägt die Wirkung des Kleides, die Silhouette bestimmt seinen Bewegungsraum.',soundSalon:'Türglocke, sich öffnende Türen und leises Stoffrascheln.',soundFabric:'Das Rascheln verändert sich mit der Stoffbewegung.',soundFreedom:'Der Klang öffnet sich und wird heller.',notes:'Quellen, Rechte und Projektangaben',goal:'Vermittlungsziel',goalText:'Emilie Flöges Gestaltung als Verbindung von Bewegungsfreiheit, professioneller Praxis und unternehmerischer Eigenständigkeit erfahrbar machen.',rights:'Bildrechte und Lizenzen',rightsText:'Historisches Einstiegsfoto: Wien Museum, Inv. 157541, CC0. Weitere historische Angaben: Wien Museum und Belvedere. Abstrakte Figuren und Muster sind künstlerische Interpretationen, keine historischen Rekonstruktionen.',credits:'Konzept, Gestaltung und Entwicklung',creditsText:'Konzept, visuelle Gestaltung und redaktionelle Ausarbeitung: Isabella Kohout · Interaktive Entwicklung: gemeinsam mit OpenAI Codex.',version:'Versionsstand',versionText:'Interaktiver Prototyp · Version 03 · August 2026',historical:'Historisches Objekt / Interpretation',historicalText:'Quellenbelegte Informationen und Inventarnummern sind ausdrücklich gekennzeichnet. Alle übrigen Figuren, Räume, Klänge und Bewegungen sind gestalterische Interpretationen.'},
  en:{reduce:'Reduce motion',restore:'Full motion',volume:'Volume',releaseLess:'tighten',releaseMore:'release fully',signatureEye:'Step 2 · Design a pattern',signatureTitle:'Create the fabric for your silhouette',signatureBody:'Choose a motif, rhythm, and accent. Every decision changes the pattern immediately—on the dress and in the fabric sample.',signatureClear:'Start pattern again',signatureGenerate:'Apply pattern',intentions:['Square','Circle','Line'],statement:'Rhythm',rhythms:['Calm','Offset','Dynamic'],accent:'Colour accent',accents:['Rust','Gold','Emerald'],preview:'Live on the dress',resultEye:'Your personal fabric study',resultTitle:'Pattern in motion',download:'Download fabric study',share:'Share design online',shared:'Link copied',resultThought:'You designed cut and surface together: the pattern shapes the dress’s effect, while the silhouette determines its freedom of movement.',soundSalon:'A doorbell, opening doors, and quiet fabric rustling.',soundFabric:'The rustling changes with the movement of the fabric.',soundFreedom:'The sound opens up and becomes lighter.',notes:'Sources, rights, and project information',goal:'Interpretive objective',goalText:'To make Emilie Flöge’s design tangible as a connection between freedom of movement, professional practice, and entrepreneurial independence.',rights:'Image rights and licences',rightsText:'Historical opening photograph: Wien Museum, inv. 157541, CC0. Further historical information: Wien Museum and Belvedere. Abstract figures and patterns are artistic interpretations, not historical reconstructions.',credits:'Concept, design, and development',creditsText:'Concept, visual design, and editorial direction: Isabella Kohout · Interactive development: created with OpenAI Codex.',version:'Version',versionText:'Interactive prototype · Version 03 · August 2026',historical:'Historical object / interpretation',historicalText:'Source-based information and inventory numbers are explicitly identified. All other figures, spaces, sounds, and movements are artistic interpretations.'},
  fr:{reduce:'Réduire les mouvements',restore:'Mouvements complets',volume:'Volume',releaseLess:'resserrer',releaseMore:'libérer entièrement',signatureEye:'Étape 2 · Créer un motif',signatureTitle:'Imaginez l’étoffe de votre silhouette',signatureBody:'Choisissez un motif, un rythme et un accent. Chaque décision transforme immédiatement le dessin, sur la robe et dans l’échantillon.',signatureClear:'Recommencer le motif',signatureGenerate:'Appliquer le motif',intentions:['Carré','Cercle','Ligne'],statement:'Rythme',rhythms:['Calme','Décalé','Dynamique'],accent:'Accent coloré',accents:['Rouille','Or','Émeraude'],preview:'En direct sur la robe',resultEye:'Votre étude textile personnelle',resultTitle:'Motif en mouvement',download:'Télécharger l’étude textile',share:'Partager la création',shared:'Lien copié',resultThought:'Vous avez conçu ensemble coupe et surface : le motif façonne l’effet de la robe, tandis que la silhouette détermine sa liberté de mouvement.',soundSalon:'Une clochette, des portes qui s’ouvrent et un léger bruissement d’étoffe.',soundFabric:'Le bruissement change avec le mouvement du tissu.',soundFreedom:'Le son s’ouvre et devient plus léger.',notes:'Sources, droits et informations sur le projet',goal:'Objectif de médiation',goalText:'Faire découvrir la création d’Emilie Flöge comme un lien entre liberté de mouvement, pratique professionnelle et indépendance entrepreneuriale.',rights:'Droits des images et licences',rightsText:'Photographie historique d’ouverture : Wien Museum, inv. 157541, CC0. Autres informations historiques : Wien Museum et Belvedere. Les figures et motifs abstraits sont des interprétations artistiques, non des reconstitutions.',credits:'Concept, création et développement',creditsText:'Concept, direction visuelle et rédaction : Isabella Kohout · Développement interactif : réalisé avec OpenAI Codex.',version:'Version',versionText:'Prototype interactif · Version 03 · août 2026',historical:'Objet historique / interprétation',historicalText:'Les informations documentées et les numéros d’inventaire sont clairement signalés. Les autres figures, espaces, sons et mouvements relèvent d’une interprétation artistique.'}
} as const;

const atelierSteps={de:'Schritt 1 · Silhouette und Bewegung einstellen',en:'Step 1 · Set silhouette and movement',fr:'Étape 1 · Régler la silhouette et le mouvement'} as const;
const blankPatternCopy={de:'Noch kein Muster · Wähle zuerst ein Motiv',en:'No pattern yet · Choose a motif first',fr:'Aucun motif · Choisissez d’abord une forme'} as const;

export default function Home() {
  const stageRef = useRef<HTMLElement>(null);
  const threadTrackRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<AudioContext | null>(null);
  const ambientRef = useRef<{osc: OscillatorNode; gain: GainNode} | null>(null);
  const masterGainRef = useRef<GainNode | null>(null);
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
  const [lang, setLang] = useState<'de'|'en'|'fr'>('de');
  const [soundOn, setSoundOn] = useState(false);
  const [businessChoice, setBusinessChoice] = useState<number | null>(null);
  const [salonEntered, setSalonEntered] = useState(false);
  const [salonDiscoveries, setSalonDiscoveries] = useState<boolean[]>([false,false,false]);
  const [activeSalonStation, setActiveSalonStation] = useState<number | null>(null);
  const [reducedMotion,setReducedMotion]=useState(false);
  const [volume,setVolume]=useState(.65);
  const [soundDescription,setSoundDescription]=useState('');
  const [intention,setIntention]=useState(-1);
  const [patternRhythm,setPatternRhythm]=useState(0);
  const [patternAccent,setPatternAccent]=useState(0);
  const [shareStatus,setShareStatus]=useState('');
  const c = copy[lang];
  const x = extraCopy[lang];
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
  useEffect(()=>{try{const raw=new URLSearchParams(window.location.search).get('study');if(!raw)return;const saved=JSON.parse(atob(raw));if(['gehen','arbeiten','tanzen'].includes(saved.a))setAction(saved.a);setShape({width:+saved.w,weight:+saved.g,layers:+saved.l});setIntention(Math.max(-1,Math.min(2,Number.isFinite(+saved.i)?+saved.i:-1)));setPatternRhythm(Math.max(0,Math.min(2,+saved.r||0)));setPatternAccent(Math.max(0,Math.min(2,+saved.k||0)))}catch{}},[]);
  useEffect(()=>{const media=window.matchMedia('(prefers-reduced-motion: reduce)');setReducedMotion(media.matches);const change=()=>setReducedMotion(media.matches);media.addEventListener('change',change);return()=>media.removeEventListener('change',change)},[]);
  useEffect(()=>{if(masterGainRef.current)masterGainRef.current.gain.value=volume},[volume]);

  useEffect(()=>{ if(mobility>=70&&!atelierAchievedSoundRef.current){atelierAchievedSoundRef.current=true;if(soundOn)openAir()} if(mobility<62)atelierAchievedSoundRef.current=false; },[mobility,soundOn]);

  useEffect(() => () => { audioRef.current?.close(); }, []);

  const soundPulse = (frequency: number, duration = .28) => {
    const ctx = audioRef.current;
    if (!ctx || ctx.state !== 'running') return;
    const osc = ctx.createOscillator(); const gain = ctx.createGain();
    osc.type = 'sine'; osc.frequency.setValueAtTime(frequency, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(frequency * .72, ctx.currentTime + duration);
    gain.gain.setValueAtTime(.0001, ctx.currentTime); gain.gain.exponentialRampToValueAtTime(.095, ctx.currentTime + .025); gain.gain.exponentialRampToValueAtTime(.0001, ctx.currentTime + duration);
    osc.connect(gain).connect(masterGainRef.current ?? ctx.destination); osc.start(); osc.stop(ctx.currentTime + duration + .02);
  };

  const noiseGesture = (duration=.3, volume=.035, frequency=1200) => {
    const ctx=audioRef.current; if(!ctx || ctx.state!=='running') return;
    const buffer=ctx.createBuffer(1,Math.ceil(ctx.sampleRate*duration),ctx.sampleRate); const data=buffer.getChannelData(0);
    for(let i=0;i<data.length;i++) data[i]=(Math.random()*2-1)*(1-i/data.length);
    const source=ctx.createBufferSource(); const filter=ctx.createBiquadFilter(); const gain=ctx.createGain();
    filter.type='bandpass'; filter.frequency.value=frequency; filter.Q.value=.8; gain.gain.value=volume;
    source.buffer=buffer; source.connect(filter).connect(gain).connect(masterGainRef.current ?? ctx.destination); source.start();
  };

  const salonEntrance = () => { setSoundDescription(x.soundSalon);soundPulse(880,.7); window.setTimeout(()=>soundPulse(1320,.45),110); window.setTimeout(()=>noiseGesture(.8,.028,520),380); window.setTimeout(()=>noiseGesture(1.1,.018,1450),760); };
  const businessRhythm = () => { [0,110,245,540,690].forEach((delay,index)=>window.setTimeout(()=>soundPulse(index===3?96:480+index*35,.07),delay)); window.setTimeout(()=>noiseGesture(.55,.018,900),330); };
  const outsideVienna = () => { [0,340,720].forEach((delay,index)=>window.setTimeout(()=>soundPulse(82+index*7,.18),delay)); noiseGesture(1.5,.014,380); };
  const openAir = () => { setSoundDescription(x.soundFreedom);[196,294,392].forEach((frequency,index)=>window.setTimeout(()=>soundPulse(frequency,1.6-index*.18),index*110)); noiseGesture(1.25,.026,2300); };

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
    let master=masterGainRef.current;if(!master){master=ctx.createGain();master.connect(ctx.destination);masterGainRef.current=master}master.gain.value=volume;const osc = ctx.createOscillator(); const gain = ctx.createGain(); osc.type='triangle'; osc.frequency.value=146; gain.gain.value=.028; osc.connect(gain).connect(master); osc.start(); ambientRef.current={osc,gain}; setSoundOn(true); soundPulse(220,.5);
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
  const touchFabric = (position=.5, intensity=.55) => { const now=performance.now(); if(now-fabricGestureRef.current<85)return; fabricGestureRef.current=now; setSoundDescription(x.soundFabric); noiseGesture(.13+intensity*.14,.012+intensity*.022,650+position*1900); };

  const studyCanvas=()=>{const canvas=document.createElement('canvas');canvas.width=1200;canvas.height=1500;const g=canvas.getContext('2d')!;g.fillStyle='#e8dfcf';g.fillRect(0,0,1200,1500);g.fillStyle='#17100e';g.fillRect(70,70,1060,1360);g.fillStyle='#e8dfcf';g.font='34px Josefin Sans';g.fillText('EMILIE · BEWEGUNG AUS STOFF',120,145);g.font='72px Della Respira';g.fillText(x.resultTitle,120,250);g.fillStyle='#a54e31';g.fillRect(120,300,960,5);drawStudyArtwork(g,{x:150,y:330,w:900,h:700},shape,intention,patternRhythm,patternAccent,action);g.fillStyle='#e8dfcf';g.font='34px Josefin Sans';g.fillText(`${c.actions[['gehen','arbeiten','tanzen'].indexOf(action)]} · ${mobility}% ${c.mobility}`,120,1090);g.font='25px Josefin Sans';g.fillText(`${c.labels[0]} ${shape.width}  ·  ${c.labels[1]} ${shape.weight}  ·  ${c.labels[2]} ${shape.layers}`,120,1150);g.font='29px Della Respira';wrapCanvasText(g,`${x.intentions[intention]} · ${x.rhythms[patternRhythm]} · ${x.accents[patternAccent]}`,120,1240,900,42);g.font='19px Josefin Sans';g.fillStyle='#bda98c';g.fillText('Historische Inspiration: Emilie Flöge · Künstlerische Stoffstudie',120,1390);return canvas};
  const downloadStudy=()=>{const canvas=studyCanvas();canvas.toBlob(blob=>{if(!blob)return;const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download='emilie-bewegungsstudie.png';document.body.appendChild(a);a.click();a.remove();window.setTimeout(()=>URL.revokeObjectURL(url),1500)},'image/png')};
  const shareStudy=async()=>{const payload=btoa(JSON.stringify({a:action,w:shape.width,g:shape.weight,l:shape.layers,i:intention,r:patternRhythm,k:patternAccent}));const url=new URL(window.location.href);url.searchParams.set('study',payload);url.hash='perspektive';const pattern=intention>=0?`${x.intentions[intention]} · ${x.rhythms[patternRhythm]} · ${x.accents[patternAccent]}`:blankPatternCopy[lang];try{if(navigator.share)await navigator.share({title:x.resultTitle,text:pattern,url:url.toString()});else{await navigator.clipboard.writeText(url.toString());setShareStatus(x.shared)}}catch{} };

  return (
    <main className={`experience-shell chapter-${chapter} ${entered?'has-entered':''} ${released ? 'is-released' : ''} ${reducedMotion?'reduce-motion':''}`}>
      <section className={`museum-portal ${entered?'is-entered':''}`} aria-hidden={entered}>
        <div className="portal-image"><img src="./visuals/emilie-floege-1909.jpg" alt=""/><i/><i/><i/></div>
        <div className="portal-language" role="group" aria-label="Language / Sprache / Langue"><button type="button" aria-pressed={lang==='de'} onClick={()=>setLang('de')}>DE</button><span>/</span><button type="button" aria-pressed={lang==='en'} onClick={()=>setLang('en')}>EN</button><span>/</span><button type="button" aria-pressed={lang==='fr'} onClick={()=>setLang('fr')}>FR</button></div>
        <div className="portal-copy"><p>{c.portalEye}</p><h1>{c.portalTitle}</h1><button type="button" onClick={()=>{setEntered(true);salonEntrance()}}><span>{c.portalEnter}</span><i aria-hidden="true">→</i></button></div>
        <a className="portal-credit" href="https://sammlung.wienmuseum.at/objekt/305884-gustav-klimt-1862-1918-und-emilie-floege-1874-1952-in-einem-boot-auf-dem-attersee/" target="_blank" rel="noreferrer">{c.portalCredit}</a>
      </section>
      <a className="skip-link" href="#experience">{c.skip}</a>
      <header className="masthead">
        <a className="wordmark" href="#experience"><span>EMILIE</span><small>{c.subtitle}</small></a>
        <div className="chapter-mark" aria-live="polite"><span>0{chapter + 1}</span><i /><small>07 · {c.chapters[chapter]}</small></div>
        <div className="header-tools"><div className="language-switch" role="group" aria-label="Language / Sprache / Langue"><button type="button" aria-pressed={lang==='de'} onClick={()=>setLang('de')}>DE</button><span>/</span><button type="button" aria-pressed={lang==='en'} onClick={()=>setLang('en')}>EN</button><span>/</span><button type="button" aria-pressed={lang==='fr'} onClick={()=>setLang('fr')}>FR</button></div><button className="motion-toggle" type="button" aria-pressed={reducedMotion} onClick={()=>setReducedMotion(v=>!v)}>{reducedMotion?x.restore:x.reduce}</button><button className="sound-toggle" type="button" aria-pressed={soundOn} onClick={toggleSound}><span className="sound-lines" aria-hidden="true"><i/><i/><i/></span>{c.sound[soundOn?1:0]}</button>{soundOn&&<label className="volume-control"><span>{x.volume}</span><input type="range" min="0" max="1" step="0.05" value={volume} onChange={e=>setVolume(+e.target.value)}/></label>}<a className="sound-control" href="#sources">{c.sources}</a></div>
      </header>
      <p className="sr-only" aria-live="polite">{soundDescription}</p>

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
          <div className="release-alternatives" aria-label={c.bindings[0]}><button type="button" onClick={()=>setThread(v=>Math.max(0,v-10))}>− {x.releaseLess}</button><button type="button" onClick={()=>{setThread(100);openAir()}}>+ {x.releaseMore}</button></div>
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

      <section className={`salon-scene scene ${salonEntered?'is-inside':'is-outside'} ${salonDiscoveries.every(Boolean)?'is-complete':''} ${activeSalonStation!==null?`has-active-station active-station-${activeSalonStation}`:''}`} id="salon" aria-labelledby="salon-title">
        <div className="scene-index light"><span>04</span><i/><small>{c.chapters[3]}</small></div>
        <div className="salon-facade" aria-hidden={salonEntered}><div className="salon-sign"><small>WIEN</small><strong>SCHWESTERN<br/>FLÖGE</strong><i/></div><div className="salon-door left-door"><span/></div><div className="salon-door right-door"><span/></div><button className="salon-door-trigger" type="button" aria-label={c.salonEnter} onClick={()=>{setSalonEntered(true);salonEntrance()}}><i/><span>{c.salonEnter}</span></button></div>
        <div className="salon-copy"><p className="eyebrow">{c.salonEye}</p><h2 id="salon-title">{c.salonTitle[0]} <em>{c.salonTitle[1]}</em></h2><p>{salonEntered?c.salonHint:c.salonIntro}</p>{!salonEntered&&<button type="button" onClick={()=>{setSalonEntered(true);salonEntrance()}}>{c.salonEnter}<span>→</span></button>}</div>
        <div className="salon-room" onPointerMove={event=>{const rect=event.currentTarget.getBoundingClientRect();event.currentTarget.style.setProperty('--room-x',`${((event.clientX-rect.left)/rect.width-.5)*2}`);event.currentTarget.style.setProperty('--room-y',`${((event.clientY-rect.top)/rect.height-.5)*2}`)}}>
          <div className="salon-depth" aria-hidden="true"><i className="salon-ceiling"/><i className="salon-floor"/><i className="salon-wall left-wall"/><i className="salon-wall right-wall"/><div className="salon-window"><i/><i/><i/></div><div className="salon-chandelier"><i/><i/><i/></div></div>
          <p className="salon-progress">{c.salonExplore} · {salonDiscoveries.filter(Boolean).length}/3</p>
          <div className="salon-stations">
            {c.salonStations.map((station,index)=><button key={station[0]} type="button" className={`salon-station station-${index} ${salonDiscoveries[index]?'is-found':''} ${activeSalonStation===index?'is-active':''}`} aria-pressed={activeSalonStation===index} onClick={()=>{setActiveSalonStation(index);setSalonDiscoveries(items=>items.map((item,i)=>i===index?true:item)); if(index===0)noiseGesture(.8,.04,1700);if(index===1){soundPulse(190,.5);openAir()}if(index===2)businessRhythm()}}><span className="station-object" aria-hidden="true">{index===0?<><i/><i/><i/></>:index===1?<><i/><b/></>:<><i/><i/><b/></>}</span><span className="station-label"><small>0{index+1}</small><strong>{station[0]}</strong><em>{station[1]}</em></span></button>)}
          </div>
          {activeSalonStation!==null&&<aside className="salon-insight" aria-live="polite"><button type="button" className="salon-insight-close" aria-label={lang==='de'?'Detail schließen':lang==='fr'?'Fermer le détail':'Close detail'} onClick={()=>setActiveSalonStation(null)}>×</button><small>{c.salonInsightEye} · 0{activeSalonStation+1}</small><h3>{c.salonInsights[activeSalonStation][0]}</h3><p>{c.salonInsights[activeSalonStation][1]}</p><strong>{c.salonInsights[activeSalonStation][2]}</strong></aside>}
          {salonDiscoveries.every(Boolean)&&<div className="salon-complete" aria-live="polite"><strong>{c.salonDone}</strong><button type="button" onClick={()=>document.querySelector('#unternehmen')?.scrollIntoView({behavior:'smooth'})}>{c.salonContinue}<span>→</span></button></div>}
        </div>
      </section>

      <section className={`business-scene scene ${businessChoice!==null?'has-choice':''} ${businessChoice!==null?`choice-${businessChoice}`:''}`} id="unternehmen" aria-labelledby="business-title">
        <div className="scene-index"><span>05</span><i /><small>{c.chapters[4]}</small></div>
        <div className="decision-atmosphere" aria-hidden="true">{Array.from({length:15},(_,i)=><i key={i}/>)}</div>
        <div className="business-copy"><p className="eyebrow">{c.businessEye}</p><h2 id="business-title">{c.businessTitle[0]} <em>{c.businessTitle[1]}</em></h2><p className="business-lead">{c.businessLead}</p><p className="task-prompt">{c.chooseTask}</p><div className="business-tasks">{c.businessTasks.map((task,index)=><button type="button" className={businessChoice===index?'is-flipped':''} key={task[0]} aria-label={`${task[0]}: ${businessChoice===index?c.businessResult[index]:task[1]}`} aria-pressed={businessChoice===index} onClick={()=>{setBusinessChoice(businessChoice===index?null:index);businessRhythm()}}><span className="card-inner"><span className="card-face card-front"><i>0{index+1}</i><strong>{task[0]}</strong><small>{task[1]}</small><b aria-hidden="true">+</b></span><span className="card-face card-back"><i>{c.reveal}</i><strong>{c.businessResult[index]}</strong><small>{c.turnAgain}</small><b aria-hidden="true">×</b></span></span></button>)}</div>{businessChoice!==null&&<div className="business-answer" aria-live="polite"><strong>{c.businessLearning}</strong><button className="continue-cue" type="button" onClick={()=>document.querySelector('#anwenden')?.scrollIntoView({behavior:'smooth'})}>{c.continueAtelier}<span>↓</span></button></div>}</div>
      </section>

      <section className="atelier-scene scene" id="anwenden" aria-labelledby="atelier-title">
        <div className="scene-index"><span>06</span><i /><small>{c.chapters[5]}</small></div>
        <header className="atelier-head"><p className="eyebrow">{c.experiment}</p><h2 id="atelier-title">{c.design[0]} <em>{c.design[1]}</em></h2><p>{c.notLook}</p></header>
        <div className="action-picker" role="group" aria-label={c.notLook}>{(['gehen','arbeiten','tanzen'] as const).map((item,index) => <button type="button" key={item} aria-pressed={action === item} onClick={() => { setAction(item); if(item==='gehen') outsideVienna(); else if(item==='arbeiten') businessRhythm(); else { soundPulse(232,.55); noiseGesture(.72,.034,1800); } }}>{c.actions[index]}</button>)}</div>
        <div className="garment-lab">
          <div className={`lab-figure action-${action} ${mobility>=70?'is-achieved':''}`} style={{ '--dress-width':`${shape.width}%`, '--figure-scale':.92 + (shape.width-55)/360, '--weight-filter':1.08-shape.weight/360, '--motion-speed':`${1.35 + shape.weight/26}s`, '--motion-range':`${4 + mobility*.13}px`, '--motion-range-neg':`${-4-mobility*.13}px`, '--motion-lift-neg':`${-2-mobility*.09}px`, '--dance-angle':`${2+mobility*.025}deg`, '--dance-angle-neg':`${-2-mobility*.025}deg`, '--mobility':`${mobility}%`, '--layers':shape.layers } as React.CSSProperties}>
            <div className="motion-boundary" aria-hidden="true"/><div className="lab-character clean-design-character" onPointerMove={event=>{const rect=event.currentTarget.getBoundingClientRect();touchFabric((event.clientX-rect.left)/rect.width,.65)}} onWheel={event=>touchFabric((event.clientX-event.currentTarget.getBoundingClientRect().left)/event.currentTarget.getBoundingClientRect().width,.9)}><StudyPreview shape={shape} intention={intention} rhythm={patternRhythm} accent={patternAccent} action={action} transparent/><span className="pattern-live-label">{x.preview}</span></div><i className="floor-line" />
            <div className="achievement-burst" aria-hidden="true">{Array.from({length:10},(_,i)=><i key={i}/>)}</div><p className="achievement-label">{c.achieved}</p><div className="mobility-gauge"><span>{c.mobility}</span><div><i/></div><small>{mobility < 45 ? c.constrained : c.free} · {mobility}%</small></div>
          </div>
          <div className="motion-word" aria-hidden="true">{c.actions[['gehen','arbeiten','tanzen'].indexOf(action)]}</div>
        </div>
        <form className="controls" onSubmit={(event)=>event.preventDefault()}>
          <p className="control-step">{atelierSteps[lang]}</p>
          <label><span><strong>{c.labels[0]}</strong><small>{shape.width}</small></span><input aria-label={c.labels[0]} type="range" min="32" max="82" value={shape.width} onChange={e=>{const value=+e.target.value;setShape({...shape,width:value});fabricSound(value,'width')}}/></label>
          <label><span><strong>{c.labels[1]}</strong><small>{shape.weight}</small></span><input aria-label={c.labels[1]} type="range" min="10" max="90" value={shape.weight} onChange={e=>{const value=+e.target.value;setShape({...shape,weight:value});fabricSound(value,'weight')}}/></label>
          <label><span><strong>{c.labels[2]}</strong><small>{shape.layers}</small></span><input aria-label={c.labels[2]} type="range" min="1" max="5" value={shape.layers} onChange={e=>{const value=+e.target.value;setShape({...shape,layers:value});fabricSound(value*18,'layers')}}/></label>
          <p className={`design-feedback evaluation-${mobility < 45 ? 'low' : mobility < 70 ? 'mid' : 'high'}`} aria-live="polite"><strong>{c.evaluation[mobility < 45 ? 0 : mobility < 70 ? 1 : 2][0]}</strong><span>{c.evaluation[mobility < 45 ? 0 : mobility < 70 ? 1 : 2][1]}</span></p>
          <StudyIdentity intention={intention} setIntention={setIntention} rhythm={patternRhythm} setRhythm={setPatternRhythm} accent={patternAccent} setAccent={setPatternAccent} shape={shape} action={action} labels={x}/>
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
          <div className="personal-study"><p className="eyebrow">{x.resultEye}</p><h3>{x.resultTitle}</h3><StudyPreview shape={shape} intention={intention} rhythm={patternRhythm} accent={patternAccent} action={action}/><p><strong>{c.actions[['gehen','arbeiten','tanzen'].indexOf(action)]}</strong> · {mobility}% {c.mobility}</p><p>{intention>=0?<><strong>{x.intentions[intention]}</strong> · {x.rhythms[patternRhythm]} · {x.accents[patternAccent]}</>:blankPatternCopy[lang]}</p><p>{x.resultThought}</p><div><button type="button" onClick={downloadStudy} disabled={intention<0}>{x.download}</button><button type="button" onClick={shareStudy} disabled={intention<0}>{x.share}</button></div><small aria-live="polite">{shareStatus}</small></div>
          <a className="enter-button" href="#experience"><span>{c.again}</span><i>↑</i></a>
        </div>
        <footer id="sources"><p>{c.prototype}</p><p>{c.basis}</p><details className="museum-notes"><summary>{x.notes}</summary><div><article><strong>{x.goal}</strong><p>{x.goalText}</p></article><article><strong>{x.rights}</strong><p>{x.rightsText}</p></article><article><strong>{x.historical}</strong><p>{x.historicalText}</p></article><article><strong>{x.credits}</strong><p>{x.creditsText}</p></article><article><strong>{x.version}</strong><p>{x.versionText}</p></article></div></details></footer>
      </section>
    </main>
  );
}

function PatternField(){ return <div className="pattern-field" aria-hidden="true">{Array.from({length:24},(_,i)=><i key={i}/>)}</div>; }

function wrapCanvasText(ctx:CanvasRenderingContext2D,text:string,x:number,y:number,max:number,lineHeight:number){const words=text.split(' ');let line='';for(const word of words){const test=line+word+' ';if(ctx.measureText(test).width>max&&line){ctx.fillText(line,x,y);line=word+' ';y+=lineHeight}else line=test}ctx.fillText(line,x,y)}

function drawStudyArtwork(g:CanvasRenderingContext2D,box:{x:number;y:number;w:number;h:number},shape:{width:number;weight:number;layers:number},motif:number,rhythm:number,accent:number,action:'gehen'|'arbeiten'|'tanzen'='gehen',transparent=false){
  g.save();g.translate(box.x,box.y);
  const cx=box.w/2,dressW=box.w*(.3+(shape.width-32)/150),ink='#17100e',paper=transparent?'#fffdf8':'#e8dfcf',color=['#a54e31','#c49858','#2f6653'][accent];
  if(!transparent){g.fillStyle='#201512';g.fillRect(0,0,box.w,box.h)}
  g.strokeStyle=transparent?'rgba(23,16,14,.18)':'rgba(232,223,207,.22)';g.lineWidth=1;g.beginPath();g.moveTo(box.w*.12,box.h*.91);g.lineTo(box.w*.88,box.h*.91);g.stroke();
  const pose=action==='tanzen'?1:action==='arbeiten'?-1:0;
  g.strokeStyle=transparent?ink:paper;g.lineCap='round';g.lineWidth=Math.max(5,box.w*.008);
  g.beginPath();g.moveTo(cx,box.h*.27);g.quadraticCurveTo(cx-box.w*.08*pose,box.h*.47,cx-box.w*.12*pose,box.h*.68);g.stroke();
  g.beginPath();g.moveTo(cx,box.h*.32);g.lineTo(cx-box.w*(.14+.04*pose),box.h*(.5-.04*pose));g.moveTo(cx,box.h*.32);g.lineTo(cx+box.w*(.14+.04*pose),box.h*(.5+.04*pose));g.stroke();
  g.beginPath();g.moveTo(cx-box.w*.035,box.h*.78);g.lineTo(cx-box.w*(.08+.03*pose),box.h*.91);g.moveTo(cx+box.w*.035,box.h*.78);g.lineTo(cx+box.w*(.08+.03*pose),box.h*.91);g.stroke();
  g.fillStyle=transparent?'#8a6b58':paper;g.beginPath();g.ellipse(cx,box.h*.16,box.h*.052,box.h*.067,-.08,0,Math.PI*2);g.fill();g.fillStyle=ink;g.beginPath();g.arc(cx-box.h*.008,box.h*.137,box.h*.054,Math.PI,Math.PI*2);g.fill();
  g.fillStyle=paper;g.beginPath();g.moveTo(cx-dressW*.13,box.h*.25);g.quadraticCurveTo(cx-dressW*.45,box.h*.48,cx-dressW/2,box.h*.84);g.quadraticCurveTo(cx,box.h*(.91+shape.weight/3000),cx+dressW/2,box.h*.84);g.quadraticCurveTo(cx+dressW*.45,box.h*.48,cx+dressW*.13,box.h*.25);g.closePath();g.fill();
  if(motif>=0){g.save();g.clip();g.fillStyle=color;g.strokeStyle=color;const step=[78,58,42][rhythm]*box.w/900;for(let y=box.h*.29,row=0;y<box.h*.88;y+=step,row++){for(let x=cx-dressW/2+(rhythm===1&&row%2?step/2:0);x<cx+dressW/2;x+=step){const size=(11+shape.layers*1.6)*box.w/900;if(motif===0)g.fillRect(x-size/2,y-size/2,size,size);else if(motif===1){g.beginPath();g.arc(x,y,size/2,0,Math.PI*2);g.fill()}else if(motif===2){g.lineWidth=Math.max(2,box.w*.005);g.beginPath();g.moveTo(x-size,y+size);g.lineTo(x+size,y-size);g.stroke()}}}g.restore()}
  g.strokeStyle=ink;g.lineWidth=Math.max(2,box.w*.003);g.stroke();
  if(!transparent){g.fillStyle=paper;g.font=`${Math.max(11,box.w*.018)}px Josefin Sans`;g.textAlign='center';g.fillText(action.toUpperCase(),cx,box.h*.965)}
  g.restore();
}

function StudyIdentity({intention,setIntention,rhythm,setRhythm,accent,setAccent,shape,action,labels}:{intention:number;setIntention:(v:number)=>void;rhythm:number;setRhythm:(v:number)=>void;accent:number;setAccent:(v:number)=>void;shape:{width:number;weight:number;layers:number};action:'gehen'|'arbeiten'|'tanzen';labels:typeof extraCopy.de|typeof extraCopy.en|typeof extraCopy.fr}){const locale=labels.intentions[0]==='Quadrat'?'de':labels.intentions[0]==='Square'?'en':'fr';return <fieldset className="signature-maker identity-maker"><legend>{labels.signatureEye}</legend><h3>{labels.signatureTitle}</h3><p>{labels.signatureBody}</p><div className="pattern-workbench"><StudyPreview shape={shape} intention={intention} rhythm={rhythm} accent={accent} action={action}/><div className="pattern-choices"><span>1 · Motiv</span><div className="intention-picker">{labels.intentions.map((item,i)=><button key={item} type="button" aria-pressed={intention===i} onClick={()=>setIntention(i)}><i className={`motif-icon motif-icon-${i}`} aria-hidden="true"/>{item}</button>)}</div><span>2 · {labels.statement}</span><div className="intention-picker">{labels.rhythms.map((item,i)=><button key={item} type="button" aria-pressed={rhythm===i} onClick={()=>setRhythm(i)} disabled={intention<0}>{item}</button>)}</div><span>3 · {labels.accent}</span><div className="intention-picker accent-picker">{labels.accents.map((item,i)=><button key={item} type="button" aria-pressed={accent===i} onClick={()=>setAccent(i)} disabled={intention<0}><i className={`accent-dot accent-dot-${i}`} aria-hidden="true"/>{item}</button>)}</div></div></div><p className="pattern-connection">{intention>=0?<>{labels.preview}: <strong>{labels.intentions[intention]} · {labels.rhythms[rhythm]} · {labels.accents[accent]}</strong></>:blankPatternCopy[locale]}</p><div className="pattern-actions"><button className="pattern-apply" type="button" disabled={intention<0} onClick={()=>document.querySelector('#perspektive')?.scrollIntoView({behavior:'smooth'})}>{labels.signatureGenerate} →</button><button className="identity-reset" type="button" onClick={()=>{setIntention(-1);setRhythm(0);setAccent(0)}}>{labels.signatureClear}</button></div></fieldset>}

function StudyPreview({shape,intention,rhythm,accent,action='gehen',transparent=false}:{shape:{width:number;weight:number;layers:number};intention:number;rhythm:number;accent:number;action?:'gehen'|'arbeiten'|'tanzen';transparent?:boolean}){const ref=useRef<HTMLCanvasElement>(null);useEffect(()=>{const canvas=ref.current;if(!canvas)return;const ratio=window.devicePixelRatio||1;const r=canvas.getBoundingClientRect();canvas.width=r.width*ratio;canvas.height=r.height*ratio;const g=canvas.getContext('2d');if(!g)return;g.scale(ratio,ratio);drawStudyArtwork(g,{x:0,y:0,w:r.width,h:r.height},shape,intention,rhythm,accent,action,transparent)},[shape,intention,rhythm,accent,action,transparent]);return <canvas className="study-preview" ref={ref} role="img" aria-label="Pattern and silhouette preview"/>}

function TextileFigure({progress,alt,bindings,onFabricMove,releaseControl}:{progress:number;alt:string;bindings?:readonly string[];onFabricMove?:(position?:number,intensity?:number)=>void;releaseControl?:{trackRef:React.RefObject<HTMLDivElement|null>;label:string;start:string;end:string;pull:string;onDrag:(x:number)=>void;onKey:(direction:number)=>void}}){
  return <div className={`textile-portrait ${bindings ? 'has-restraints' : ''} ${progress >= 96 ? 'is-fully-free' : progress < 18 ? 'is-constrained' : 'is-releasing'}`} style={{'--freedom':progress/100} as React.CSSProperties} onPointerMove={event=>{const rect=event.currentTarget.getBoundingClientRect();onFabricMove?.((event.clientX-rect.left)/rect.width,.55)}} onWheel={event=>{const rect=event.currentTarget.getBoundingClientRect();onFabricMove?.((event.clientX-rect.left)/rect.width,.92)}}>
    <div className="portrait-halo" aria-hidden="true"/><img className="figure-illustration" src="./visuals/emilie-figure-abstract.png" alt={alt}/>{bindings&&<img className="release-skirt" src="./visuals/emilie-figure-abstract.png" alt="" aria-hidden="true"/>}
    {bindings && <div className="gather-pleats" aria-hidden="true">{Array.from({length:7},(_,index)=><i key={index}/>)}</div>}
    {releaseControl&&<div className="figure-release-control" ref={releaseControl.trackRef}><span className="release-control-label">{releaseControl.label}</span><small className="control-start">{releaseControl.start}</small><small className="control-end">{releaseControl.end}</small><i className="control-line" style={{'--pull':`${progress}%`} as React.CSSProperties}/><button type="button" className="figure-release-ring" style={{left:`${progress}%`}} onPointerDown={event=>{event.currentTarget.setPointerCapture(event.pointerId);releaseControl.onDrag(event.clientX)}} onPointerMove={event=>{if(event.currentTarget.hasPointerCapture(event.pointerId))releaseControl.onDrag(event.clientX)}} onKeyDown={event=>{if(event.key==='ArrowRight')releaseControl.onKey(1);if(event.key==='ArrowLeft')releaseControl.onKey(-1)}} role="slider" aria-label={`${releaseControl.pull}, ${Math.round(progress)}%`} aria-valuenow={Math.round(progress)} aria-valuemin={0} aria-valuemax={100}><i/><span>{releaseControl.pull}</span></button></div>}
    {bindings && <><div className="freedom-ribbons" aria-hidden="true">{Array.from({length:12},(_,index)=><i key={index}/>)}</div><div className="freedom-waves" aria-hidden="true"><i/><i/><i/></div></>}
  </div>;
}
