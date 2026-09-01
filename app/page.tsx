'use client';

import { useEffect, useRef, useState } from 'react';

const copy = {
  de: {
    chapters:['Begrenzung','Lösen','Kontext','Salon','Unternehmen','Atelier','Erkenntnis'], skip:'Direkt zur Experience', subtitle:'Bewegung aus Stoff', sources:'Quellen', sound:['Sound aus','Sound an'],
    heroEye:['Emilie Flöge · Modeschöpferin','Wien, um 1900'], heroTitle:['Wie viel','Raum','gibt dir','deine Kleidung?'], heroIntro:'Emilie Flöge war eine Wiener Modeschöpferin und Unternehmerin. Entdecke, wie sie Kleidung neu dachte: als Gestaltung, die dem Körper mehr Bewegungsfreiheit geben kann – und als Grundlage eines selbstständig geführten Modeunternehmens.', begin:'Experience beginnen', cursor:'Bewege den Cursor',
    portalEye:'Immersive Modegeschichte · Emilie Flöge', portalTitle:'Bewegung aus Stoff', portalEnter:'In die Experience eintauchen', portalCredit:'Emilie Flöge und Gustav Klimt am Attersee, 1909 · Fotograf unbekannt · Wien Museum, Inv. 157541 · CC0',
    actFirst:'Vom Stoff zur Idee.', releaseTitle:['Wie Weite','Bewegung schafft.'], releaseIntro:'Ein Zugband zieht den Stoff am Körper zusammen. Greife den Ring und ziehe ihn nach rechts, um die Raffung zu lösen.', pull:'ziehen', threadEnds:['GREIFEN','ÖFFNEN'], bindings:['Zugband'], releaseStatus:['Die Raffung hält den Stoff eng.','Die ersten Falten öffnen sich.','Die Silhouette gewinnt sichtbar an Weite.','Die Raffung ist gelöst. Stoff und Körper können sich frei bewegen.'], solved:'Der Stoff atmet', what:'Was ist gerade passiert?',
    contextEye:'Wien · Um 1900', contextBridge:'Mit dem Lösen der Raffung hast du Flöges gestalterischen Gedanken nachvollzogen: Kleidung kann dem Körper Bewegungsraum zurückgeben.', contextTitle:['Was war neu an','Flöges Idee','vom Kleid?'], contextLead:'Eng geschnürte Kleidung prägte das modische Körperbild. Neue, weiter geschnittene Formen machten Kleidung zu einem Feld gestalterischer und gesellschaftlicher Veränderung.', facts:[['1874–1952','Emilie Flöge wurde 1874 in Wien geboren und starb dort 1952. Das Belvedere führt sie als Unternehmerin und dem Modedesign zugehörig.','Belvedere Archiv','https://dev-archiv.belvedere.at/kuenstler/20685/fl%C3%B6ge_emilie'],['Salon Schwestern Flöge','Ein erhaltenes Kleidungsstück des Salons, um 1905 datiert und mit „Salon Schwestern Flöge“ bezeichnet, befindet sich im Wien Museum.','Wien Museum Sammlung','https://sammlung.wienmuseum.at/en/object/697417-taille/'],['Wiener Werkstätte','Das Wien Museum beschreibt den von Emilie Flöge geführten Salon als Drehscheibe für den Verkauf von Schmuck der Wiener Werkstätte.','Wien Museum','https://www.wienmuseum.at/glanzstuecke_emilie_floege']], notMuse:['Historisch greifbar:','Modeschöpferin und Unternehmerin.'], art:['Formstudie','nach Motiven der Wiener Werkstätte'], portraitAlt:'Künstlerisch abstrahierte Illustration von Emilie Flöge', sourceWord:'Quelle',
    salonEye:'Eine räumliche Annäherung', salonTitle:['Salon','Schwestern Flöge'], salonIntro:'Tritt ein und entdecke den Salon als Entwurfsraum, Geschäft und kulturellen Treffpunkt.', salonEnter:'Salon betreten', salonExplore:'Drei Spuren im Raum', salonHint:'Wähle ein Objekt und sieh, was es über Flöges Arbeit erzählt.', salonStations:[['Stofftisch','Stoff entfalten'],['Schneiderpuppe','Schnitt öffnen'],['Geschäftstisch','Salon organisieren']], salonInsightEye:'Im Detail', salonInsights:[['Wie Stoff Bewegung formt','Eine Stoffbahn entfaltet sich. An ihrem Fall wird sichtbar, wie stark Gewicht und Oberfläche die Bewegung eines Kleides prägen.','Material formt Bewegung.'],['Freiheit beginnt im Schnitt','Die Schnittflächen rücken auseinander und geben der Silhouette mehr Weite. So entsteht Bewegungsraum, ohne dass das Kleid seine klare Form verliert.','Weite ist eine gestalterische Entscheidung.'],['Atelier und Unternehmen zugleich','Auftragsbuch, Briefe und Stoffproben zeigen, was hinter dem Entwurf steht: Beratung, Planung und kaufmännische Entscheidungen.','Der Salon verband Gestaltung und Geschäft.']], salonDone:'Du hast alle drei Bereiche entdeckt.', salonContinue:'Weiter zu Flöge als Unternehmerin',
    businessEye:'Schwestern Flöge · Wien', businessTitle:['Gestalten heißt auch','entscheiden.'], businessLead:'Der Modesalon war zugleich Entwurfsraum, Geschäft und kultureller Treffpunkt. Die folgenden Perspektiven zeigen, welche Entscheidungen Modegestaltung als professionelle Praxis verlangt.', businessTasks:[['Silhouette','Form, Proportion und Bewegungsraum zu einer gestalterischen Haltung verbinden.'],['Material','Qualität, Wirkung und Herkunft von Textilien beurteilen und für eine Kollektion auswählen.'],['Salonführung','Kundinnen beraten, Mitarbeiterinnen koordinieren und wirtschaftliche Entscheidungen treffen.']], businessResult:['Die Silhouette übersetzt eine Haltung in Form – und bestimmt unmittelbar den Bewegungsraum.','Gewicht, Fall und Oberfläche geben dem Material seine Wirkung und bestimmen seinen Gebrauch.','Als Unternehmerin kümmerte sich Flöge um Kundinnen, Mitarbeiterinnen und die wirtschaftlichen Entscheidungen ihres Salons.'], businessLearning:'Flöge führte ihren Modesalon als eigenständige Gestalterin und Unternehmerin.', chooseTask:'Drei Perspektiven auf den Salon', reveal:'Perspektive', turnAgain:'Karte schließen', continueAtelier:'Zum digitalen Modeatelier',
    experiment:'Dein Modeatelier', design:['Eröffne dein eigenes','Modeatelier.'], notLook:'Entscheide über Silhouette, Stoff und Muster. Beobachte, wie jede Gestaltung den Bewegungsraum des Kleides verändert.', actions:['gehen','arbeiten','tanzen'], labels:['Weite','Gewicht','Schichten'], mobility:'Bewegungsraum', constrained:'begrenzt', free:'frei', evaluation:[['Bewegung eingeschränkt','Die Silhouette reagiert noch schwer. Mehr Weite oder weniger Gewicht würde den Bewegungsradius vergrößern.'],['Bewegung möglich','Der Körper gewinnt Spielraum; der Stoff reagiert bereits auf die Bewegung.'],['Bewegung im Fluss','Weite, Gewicht und Schichten unterstützen die gewählte Bewegung.']], achieved:'Die Silhouette folgt dem Körper.', archive:'Studie abschließen',
    finalEye:'Schnitt, Stoff und Selbstständigkeit', finalTitle:'Kleidung bestimmt mit, wie frei sich ein Körper bewegen kann.', finalBody:'Emilie Flöges Arbeit verbindet Modegestaltung mit professioneller und unternehmerischer Eigenständigkeit.', quote:'Flöges Arbeit verbindet Gestaltung, Bewegungsfreiheit und unternehmerische Selbstständigkeit.', again:'Experience erneut beginnen', prototype:'Prototyp · Arbeitsfassung 01', basis:'Historische Grundlage: Wien Museum und Belvedere · Illustration: künstlerische Interpretation'
  },
  en: {
    chapters:['Restriction','Release','Context','Salon','Enterprise','Studio','Insight'], skip:'Skip to the experience', subtitle:'Movement through fabric', sources:'Sources', sound:['Sound off','Sound on'],
    heroEye:['Emilie Flöge · Fashion designer','Vienna, around 1900'], heroTitle:['How much','space','does your','clothing allow?'], heroIntro:'Emilie Flöge was a Viennese fashion designer and entrepreneur. Discover how she rethought clothing: as design that could give the body greater freedom of movement – and as the foundation of an independently run fashion business.', begin:'Begin experience', cursor:'Move the cursor',
    portalEye:'An immersive fashion story · Emilie Flöge', portalTitle:'Movement through fabric', portalEnter:'Enter the experience', portalCredit:'Emilie Flöge and Gustav Klimt at Lake Attersee, 1909 · Photographer unknown · Wien Museum, inv. 157541 · CC0',
    actFirst:'From fabric to idea.', releaseTitle:['How width','creates movement.'], releaseIntro:'A drawstring pulls the fabric close around the body. Grab the ring and pull it to the right to release the gathering.', pull:'pull', threadEnds:['GRAB','OPEN'], bindings:['Drawstring'], releaseStatus:['The gathering holds the fabric tightly.','The first folds begin to open.','The silhouette visibly gains width.','The gathering is released. Fabric and body can move freely.'], solved:'The fabric breathes', what:'What just happened?',
    contextEye:'Vienna · Around 1900', contextBridge:'By releasing the gathering, you traced Flöge’s design principle: clothing can restore room for the body to move.', contextTitle:['What was new about','Flöge’s idea','of dress?'], contextLead:'Tightly laced clothing shaped the fashionable body. New, looser forms turned dress into a field of design and social change.', facts:[['1874–1952','Emilie Flöge was born in Vienna in 1874 and died there in 1952. The Belvedere records her as an entrepreneur associated with fashion design.','Belvedere Archive','https://dev-archiv.belvedere.at/kuenstler/20685/fl%C3%B6ge_emilie'],['Schwestern Flöge salon','A surviving garment by the salon, dated around 1905 and marked “Salon Schwestern Flöge”, is held by the Wien Museum.','Wien Museum Collection','https://sammlung.wienmuseum.at/en/object/697417-taille/'],['Wiener Werkstätte','The Wien Museum describes the salon run by Emilie Flöge as a hub for sales of Wiener Werkstätte jewellery.','Wien Museum','https://www.wienmuseum.at/glanzstuecke_emilie_floege']], notMuse:['Historically tangible:','fashion designer and entrepreneur.'], art:['Study in form','after Wiener Werkstätte motifs'], portraitAlt:'Artistically abstracted illustration of Emilie Flöge', sourceWord:'Source',
    salonEye:'A spatial approach', salonTitle:['Salon','Schwestern Flöge'], salonIntro:'Step inside and discover the salon as a design space, business, and cultural meeting point.', salonEnter:'Enter the salon', salonExplore:'Three traces in the room', salonHint:'Choose an object and see what it reveals about Flöge’s work.', salonStations:[['Fabric table','Unfold the fabric'],['Dress form','Open the cut'],['Business desk','Run the salon']], salonInsightEye:'In detail', salonInsights:[['How fabric shapes movement','A length of fabric unfolds. Its drape reveals how strongly weight and surface influence the movement of a dress.','Material shapes movement.'],['Freedom begins with the cut','The pattern pieces move apart and give the silhouette greater width. The body gains room without the dress losing its clarity of form.','Width is a design decision.'],['Studio and business at once','An order book, letters, and fabric samples reveal what stood behind each design: consultation, planning, and commercial decisions.','The salon brought design and business together.']], salonDone:'You have discovered all three areas.', salonContinue:'Continue to Flöge as an entrepreneur',
    businessEye:'Schwestern Flöge · Vienna', businessTitle:['Design also means','deciding.'], businessLead:'The fashion salon was simultaneously a design studio, a business, and a cultural meeting point. These perspectives show the decisions that shape fashion as a professional practice.', businessTasks:[['Silhouette','Connect form, proportion, and range of movement into a coherent design position.'],['Material','Assess the quality, effect, and origin of textiles and select them for a collection.'],['Running the salon','Advise clients, coordinate employees, and make commercial decisions.']], businessResult:['The silhouette translates a position into form – and directly determines range of movement.','Weight, drape, and surface give a material its effect and determine how it can be used.','As an entrepreneur, Flöge looked after clients, employees, and the commercial decisions of her salon.'], businessLearning:'Flöge ran her fashion salon as an independent designer and entrepreneur.', chooseTask:'Three perspectives on the salon', reveal:'Perspective', turnAgain:'Close card', continueAtelier:'Continue to the digital fashion studio',
    experiment:'Your fashion atelier', design:['Open your own','fashion atelier.'], notLook:'Choose the silhouette, fabric, and pattern. See how every design decision changes the dress’s freedom of movement.', actions:['walking','working','dancing'], labels:['Width','Weight','Layers'], mobility:'Range of movement', constrained:'restricted', free:'free', evaluation:[['Movement restricted','The silhouette still responds heavily. Greater width or less weight would increase its range.'],['Movement possible','The body gains room, and the fabric begins to respond to the movement.'],['Movement in flow','Width, weight, and layers support the selected movement.']], achieved:'The silhouette follows the body.', archive:'Complete the study',
    finalEye:'Cut, fabric, and independence', finalTitle:'Clothing helps determine how freely a body can move.', finalBody:'Emilie Flöge’s work connects fashion design with professional and entrepreneurial independence.', quote:'Flöge’s work connects design, freedom of movement, and entrepreneurial independence.', again:'Begin the experience again', prototype:'Prototype · Working version 01', basis:'Historical basis: Wien Museum and Belvedere · Illustration: artistic interpretation'
  },
  fr: {
    chapters:['Contrainte','Libération','Contexte','Salon','Entreprise','Atelier','Regard'], skip:'Accéder directement à l’expérience', subtitle:'Le mouvement par l’étoffe', sources:'Sources', sound:['Son désactivé','Son activé'],
    heroEye:['Emilie Flöge · Créatrice de mode','Vienne, vers 1900'], heroTitle:['Quel','espace','vos vêtements','vous accordent-ils ?'], heroIntro:'Emilie Flöge était une créatrice de mode et entrepreneuse viennoise. Découvrez comment elle a repensé le vêtement : comme une création capable d’offrir davantage de liberté au corps et comme le fondement d’une maison de couture indépendante.', begin:'Commencer l’expérience', cursor:'Déplacez le curseur',
    portalEye:'Une histoire immersive de la mode · Emilie Flöge', portalTitle:'Le mouvement par l’étoffe', portalEnter:'Entrer dans l’expérience', portalCredit:'Emilie Flöge et Gustav Klimt sur l’Attersee, 1909 · Photographe inconnu · Wien Museum, inv. 157541 · CC0',
    actFirst:'De l’étoffe à l’idée.', releaseTitle:['Quand l’ampleur','crée le mouvement.'], releaseIntro:'Un cordon resserre l’étoffe autour du corps. Saisissez l’anneau et tirez-le vers la droite pour libérer le tissu.', pull:'tirer', threadEnds:['SAISIR','OUVRIR'], bindings:['Cordon'], releaseStatus:['Le tissu froncé maintient le corps à l’étroit.','Les premiers plis commencent à s’ouvrir.','La silhouette gagne visiblement en ampleur.','Le tissu est libéré. L’étoffe et le corps peuvent désormais bouger librement.'], solved:'Le tissu respire', what:'Que vient-il de se passer ?',
    contextEye:'Vienne · Vers 1900', contextBridge:'En libérant le tissu, vous avez suivi l’une des idées centrales de Flöge : le vêtement peut rendre au corps son espace de mouvement.', contextTitle:['Qu’y avait-il de nouveau dans','l’idée du vêtement','selon Flöge ?'], contextLead:'Les vêtements étroitement lacés façonnaient alors le corps à la mode. De nouvelles formes plus amples ont fait du vêtement un terrain de transformation esthétique et sociale.', facts:[['1874–1952','Emilie Flöge est née à Vienne en 1874 et y est morte en 1952. Le Belvedere la répertorie comme entrepreneuse liée à la création de mode.','Archives du Belvedere','https://dev-archiv.belvedere.at/kuenstler/20685/fl%C3%B6ge_emilie'],['Salon Schwestern Flöge','Un vêtement conservé du salon, daté des environs de 1905 et portant la mention « Salon Schwestern Flöge », appartient aux collections du Wien Museum.','Collection du Wien Museum','https://sammlung.wienmuseum.at/en/object/697417-taille/'],['Wiener Werkstätte','Le Wien Museum décrit le salon dirigé par Emilie Flöge comme un lieu central pour la vente de bijoux de la Wiener Werkstätte.','Wien Museum','https://www.wienmuseum.at/glanzstuecke_emilie_floege']], notMuse:['Un fait historique :','créatrice de mode et entrepreneuse.'], art:['Étude de formes','d’après des motifs de la Wiener Werkstätte'], portraitAlt:'Illustration artistique et abstraite d’Emilie Flöge', sourceWord:'Source',
    salonEye:'Une approche spatiale', salonTitle:['Salon','Schwestern Flöge'], salonIntro:'Entrez et découvrez le salon comme lieu de création, entreprise et espace de rencontres culturelles.', salonEnter:'Entrer dans le salon', salonExplore:'Trois traces dans l’espace', salonHint:'Choisissez un objet et découvrez ce qu’il révèle du travail de Flöge.', salonStations:[['Table des étoffes','Déployer le tissu'],['Mannequin','Ouvrir la coupe'],['Bureau','Organiser le salon']], salonInsightEye:'En détail', salonInsights:[['Quand l’étoffe façonne le mouvement','Une pièce de tissu se déploie. Son tombé révèle combien le poids et la surface influencent le mouvement d’une robe.','La matière façonne le mouvement.'],['La liberté commence par la coupe','Les pièces du patron s’écartent et donnent davantage d’ampleur à la silhouette. Le corps gagne de l’espace sans que le vêtement perde la clarté de sa forme.','L’ampleur est une décision de création.'],['Atelier et entreprise à la fois','Un carnet de commandes, des lettres et des échantillons révèlent l’envers de chaque création : conseil, planification et décisions commerciales.','Le salon réunissait création et entreprise.']], salonDone:'Vous avez découvert les trois espaces.', salonContinue:'Découvrir Flöge entrepreneuse',
    businessEye:'Schwestern Flöge · Vienne', businessTitle:['Créer, c’est aussi','décider.'], businessLead:'Le salon de mode était à la fois atelier de création, entreprise et lieu de rencontres culturelles. Ces trois perspectives montrent les décisions qui façonnent la mode comme pratique professionnelle.', businessTasks:[['Silhouette','Associer forme, proportion et liberté de mouvement dans une intention cohérente.'],['Matière','Évaluer la qualité, l’effet et l’origine des étoffes pour composer une collection.'],['Direction du salon','Conseiller les clientes, coordonner les employées et prendre des décisions économiques.']], businessResult:['La silhouette traduit une intention en forme et détermine directement l’espace accordé au mouvement.','Le poids, le tombé et la surface donnent à la matière son effet et déterminent son usage.','En tant qu’entrepreneuse, Flöge s’occupait des clientes, des employées et des décisions économiques de son salon.'], businessLearning:'Flöge dirigeait son salon comme créatrice et entrepreneuse indépendante.', chooseTask:'Trois perspectives sur le salon', reveal:'Perspective', turnAgain:'Refermer la carte', continueAtelier:'Vers l’atelier de mode numérique',
    experiment:'Votre atelier de mode', design:['Ouvrez votre propre','atelier de mode.'], notLook:'Choisissez la silhouette, l’étoffe et le motif. Observez comment chaque décision transforme la liberté de mouvement de la robe.', actions:['marcher','travailler','danser'], labels:['Ampleur','Poids','Épaisseurs'], mobility:'Liberté de mouvement', constrained:'limitée', free:'libre', evaluation:[['Mouvement limité','La silhouette reste pesante. Davantage d’ampleur ou moins de poids élargirait le mouvement.'],['Mouvement possible','Le corps gagne de l’espace et l’étoffe commence à accompagner ses gestes.'],['Mouvement fluide','L’ampleur, le poids et les épaisseurs accompagnent le mouvement choisi.']], achieved:'La silhouette accompagne le corps.', archive:'Achever l’étude',
    finalEye:'Coupe, étoffe et indépendance', finalTitle:'Le vêtement participe à la liberté de mouvement du corps.', finalBody:'Le travail d’Emilie Flöge associe création de mode, autonomie professionnelle et indépendance entrepreneuriale.', quote:'Le travail de Flöge relie création, liberté de mouvement et indépendance entrepreneuriale.', again:'Recommencer l’expérience', prototype:'Prototype · Version de travail 01', basis:'Fondement historique : Wien Museum et Belvedere · Illustration : interprétation artistique'
  }
} as const;

const extraCopy = {
  de:{reduce:'Bewegung reduzieren',restore:'Volle Bewegung',volume:'Lautstärke',releaseLess:'enger',releaseMore:'ganz lösen',signatureEye:'Schritt 2 · Muster gestalten',signatureTitle:'Entwirf den Stoff für deine Silhouette',signatureBody:'Kombiniere ein oder mehrere Motive und wähle Rhythmus und Akzent. Jede Entscheidung verändert das Muster sofort – direkt auf dem Kleid und in der Stoffprobe.',signatureClear:'Muster neu beginnen',signatureGenerate:'Muster übernehmen',motif:'Motive',intentions:['Rechteck','Punkt','Linie'],statement:'Rhythmus',rhythms:['Ruhig','Versetzt','Dynamisch'],accent:'Farbakzent',accents:['Rost','Gold','Smaragd'],resultEye:'Dein eigener Entwurf',resultTitle:'Muster in Bewegung',download:'Entwurf herunterladen',share:'Entwurf online teilen',shared:'Link kopiert',resultThought:'Du hast Schnitt und Oberfläche zusammen gestaltet: Das Muster prägt die Wirkung des Kleides, die Silhouette bestimmt seinen Bewegungsraum.',soundSalon:'Türglocke, sich öffnende Türen und leises Stoffrascheln.',soundFabric:'Das Rascheln verändert sich mit der Stoffbewegung.',soundFreedom:'Der Klang öffnet sich und wird heller.',notes:'Quellen, Rechte und Projektangaben',goal:'Vermittlungsziel',goalText:'Emilie Flöges Gestaltung als Verbindung von Bewegungsfreiheit, professioneller Praxis und unternehmerischer Eigenständigkeit erfahrbar machen.',rights:'Bildrechte und Lizenzen',rightsText:'Historisches Einstiegsfoto: Wien Museum, Inv. 157541, CC0. Weitere historische Angaben: Wien Museum und Belvedere. Abstrakte Figuren und Muster sind künstlerische Interpretationen, keine historischen Rekonstruktionen.',credits:'Konzept, Gestaltung und Entwicklung',creditsText:'Konzept, visuelle Gestaltung und redaktionelle Ausarbeitung: Isabella Kohout · Interaktive Entwicklung: gemeinsam mit OpenAI Codex.',version:'Versionsstand',versionText:'Interaktiver Prototyp · Version 03 · August 2026',historical:'Historisches Objekt / Interpretation',historicalText:'Quellenbelegte Informationen und Inventarnummern sind ausdrücklich gekennzeichnet. Alle übrigen Figuren, Räume, Klänge und Bewegungen sind gestalterische Interpretationen.'},
  en:{reduce:'Reduce motion',restore:'Full motion',volume:'Volume',releaseLess:'tighten',releaseMore:'release fully',signatureEye:'Step 2 · Design a pattern',signatureTitle:'Create the fabric for your silhouette',signatureBody:'Combine one or more motifs, then choose a rhythm and accent. Every decision changes the pattern immediately—on the dress and in the fabric sample.',signatureClear:'Start pattern again',signatureGenerate:'Apply pattern',motif:'Motifs',intentions:['Rectangle','Dot','Line'],statement:'Rhythm',rhythms:['Calm','Offset','Dynamic'],accent:'Colour accent',accents:['Rust','Gold','Emerald'],resultEye:'Your own design',resultTitle:'Pattern in motion',download:'Download design',share:'Share design online',shared:'Link copied',resultThought:'You designed cut and surface together: the pattern shapes the dress’s effect, while the silhouette determines its freedom of movement.',soundSalon:'A doorbell, opening doors, and quiet fabric rustling.',soundFabric:'The rustling changes with the movement of the fabric.',soundFreedom:'The sound opens up and becomes lighter.',notes:'Sources, rights, and project information',goal:'Interpretive objective',goalText:'To make Emilie Flöge’s design tangible as a connection between freedom of movement, professional practice, and entrepreneurial independence.',rights:'Image rights and licences',rightsText:'Historical opening photograph: Wien Museum, inv. 157541, CC0. Further historical information: Wien Museum and Belvedere. Abstract figures and patterns are artistic interpretations, not historical reconstructions.',credits:'Concept, design, and development',creditsText:'Concept, visual design, and editorial direction: Isabella Kohout · Interactive development: created with OpenAI Codex.',version:'Version',versionText:'Interactive prototype · Version 03 · August 2026',historical:'Historical object / interpretation',historicalText:'Source-based information and inventory numbers are explicitly identified. All other figures, spaces, sounds, and movements are artistic interpretations.'},
  fr:{reduce:'Réduire les mouvements',restore:'Mouvements complets',volume:'Volume',releaseLess:'resserrer',releaseMore:'libérer entièrement',signatureEye:'Étape 2 · Créer un motif',signatureTitle:'Imaginez l’étoffe de votre silhouette',signatureBody:'Combinez un ou plusieurs motifs, puis choisissez un rythme et un accent. Chaque décision transforme immédiatement le dessin, sur la robe et dans l’échantillon.',signatureClear:'Recommencer le motif',signatureGenerate:'Appliquer le motif',motif:'Motifs',intentions:['Rectangle','Point','Ligne'],statement:'Rythme',rhythms:['Calme','Décalé','Dynamique'],accent:'Accent coloré',accents:['Rouille','Or','Émeraude'],resultEye:'Votre propre création',resultTitle:'Motif en mouvement',download:'Télécharger la création',share:'Partager la création',shared:'Lien copié',resultThought:'Vous avez conçu ensemble coupe et surface : le motif façonne l’effet de la robe, tandis que la silhouette détermine sa liberté de mouvement.',soundSalon:'Une clochette, des portes qui s’ouvrent et un léger bruissement d’étoffe.',soundFabric:'Le bruissement change avec le mouvement du tissu.',soundFreedom:'Le son s’ouvre et devient plus léger.',notes:'Sources, droits et informations sur le projet',goal:'Objectif de médiation',goalText:'Faire découvrir la création d’Emilie Flöge comme un lien entre liberté de mouvement, pratique professionnelle et indépendance entrepreneuriale.',rights:'Droits des images et licences',rightsText:'Photographie historique d’ouverture : Wien Museum, inv. 157541, CC0. Autres informations historiques : Wien Museum et Belvedere. Les figures et motifs abstraits sont des interprétations artistiques, non des reconstitutions.',credits:'Concept, création et développement',creditsText:'Concept, direction visuelle et rédaction : Isabella Kohout · Développement interactif : réalisé avec OpenAI Codex.',version:'Version',versionText:'Prototype interactif · Version 03 · août 2026',historical:'Objet historique / interprétation',historicalText:'Les informations documentées et les numéros d’inventaire sont clairement signalés. Les autres figures, espaces, sons et mouvements relèvent d’une interprétation artistique.'}
} as const;

const atelierSteps={de:'Schritt 1 · Silhouette und Bewegung einstellen',en:'Step 1 · Set silhouette and movement',fr:'Étape 1 · Régler la silhouette et le mouvement'} as const;
const blankPatternCopy={de:'Wähle mindestens ein Motiv',en:'Choose at least one motif',fr:'Choisissez au moins un motif'} as const;
const supplementalCopy={
  de:{portalIntro:'Emilie Flöge (1874–1952) war Modeschöpferin und Unternehmerin im Wien der Moderne. Diese interaktive Experience folgt ihrer Idee, Kleidung als Gestaltung von Bewegung, Selbstständigkeit und gesellschaftlichem Wandel zu betrachten.',portalEnter:'Flöges Welt entdecken',heroContinue:'Flöges Idee erkunden',back:'Zurück zum Anfang',contextExpansion:'Weiter geschnittene Kleider veränderten mehr als die äußere Form: Schnitt, Stoff und Gewicht bestimmten, wie selbstverständlich sich ein Körper bewegen konnte.',contextBiography:'1904 eröffnete Emilie Flöge gemeinsam mit ihren Schwestern Pauline und Helene den Modesalon „Schwestern Flöge“. Als Gestalterin und Unternehmerin verband sie dort Entwurf, Kundinnenberatung und wirtschaftliche Verantwortung – der nächste Raum führt in ihren Salon.',salonHint:'Wähle, was dich interessiert, und sammle deine Eindrücke zu Stoff, Schnitt und unternehmerischer Arbeit.',businessFocus:'Was wäre dein Schwerpunkt?',creationTitle:'Deine eigene Kreation',creationNote:'Dein Entwurf verbindet Silhouette, Bewegung und ein selbst gestaltetes Muster.'},
  en:{portalIntro:'Emilie Flöge (1874–1952) was a fashion designer and entrepreneur in modern Vienna. This interactive experience follows her approach to clothing as a way of shaping movement, independence, and social change.',portalEnter:'Discover Flöge’s world',heroContinue:'Explore Flöge’s idea',back:'Back to the beginning',contextExpansion:'Looser dresses changed more than outward appearance: cut, fabric, and weight determined how naturally a body could move.',contextBiography:'In 1904, Emilie Flöge opened the Schwestern Flöge fashion salon with her sisters Pauline and Helene. As a designer and entrepreneur, she brought together design, client consultation, and commercial responsibility—the next space leads into her salon.',salonHint:'Choose what interests you and collect impressions of fabric, cut, and entrepreneurial work.',businessFocus:'What would your focus be?',creationTitle:'Your own creation',creationNote:'Your design brings together silhouette, movement, and a pattern of your own.'},
  fr:{portalIntro:'Emilie Flöge (1874–1952) était créatrice de mode et entrepreneuse dans la Vienne moderne. Cette expérience interactive suit sa manière d’envisager le vêtement comme une forme donnée au mouvement, à l’autonomie et au changement social.',portalEnter:'Découvrir l’univers de Flöge',heroContinue:'Explorer l’idée de Flöge',back:'Retour au début',contextExpansion:'Les robes plus amples transformaient davantage que l’apparence : la coupe, l’étoffe et le poids déterminaient la liberté avec laquelle un corps pouvait bouger.',contextBiography:'En 1904, Emilie Flöge ouvre avec ses sœurs Pauline et Helene le salon de mode « Schwestern Flöge ». Créatrice et entrepreneuse, elle y réunit conception, conseil aux clientes et responsabilité économique — l’espace suivant nous mène dans son salon.',salonHint:'Choisissez ce qui vous intéresse et rassemblez vos impressions sur l’étoffe, la coupe et le travail entrepreneurial.',businessFocus:'Quel serait votre domaine de prédilection ?',creationTitle:'Votre propre création',creationNote:'Votre création réunit silhouette, mouvement et motif personnel.'}
} as const;
const projectLinkCopy={de:'Alle Projekte',en:'See all projects',fr:'Voir tous les projets'} as const;
const sceneIds=['experience','loesen','einordnen','salon','unternehmen','anwenden','perspektive'] as const;

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
  const [lang, setLang] = useState<'de'|'en'|'fr'>(() => {
    if (typeof window === 'undefined') return 'de';
    const requested = new URLSearchParams(window.location.search).get('lang');
    return requested === 'en' || requested === 'fr' ? requested : 'de';
  });
  const [soundOn, setSoundOn] = useState(false);
  const [businessChoice, setBusinessChoice] = useState<number | null>(null);
  const [salonEntered, setSalonEntered] = useState(false);
  const [salonDiscoveries, setSalonDiscoveries] = useState<boolean[]>([false,false,false]);
  const [activeSalonStation, setActiveSalonStation] = useState<number | null>(null);
  const [reducedMotion,setReducedMotion]=useState(false);
  const [volume,setVolume]=useState(.65);
  const [soundDescription,setSoundDescription]=useState('');
  const [intention,setIntention]=useState<number[]>([]);
  const [patternRhythm,setPatternRhythm]=useState(0);
  const [patternAccent,setPatternAccent]=useState(0);
  const [shareStatus,setShareStatus]=useState('');
  const c = copy[lang];
  const x = extraCopy[lang];
  const s = supplementalCopy[lang];
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

  useEffect(()=>{
    if(!entered)return;
    const hash=`#${sceneIds[chapter]}`;
    if(window.location.hash!==hash)window.history.pushState({chapter},'',hash);
  },[chapter,entered]);

  useEffect(()=>{
    const restoreFromHistory=()=>{
      const id=window.location.hash.slice(1);
      const index=sceneIds.indexOf(id as typeof sceneIds[number]);
      if(index<0){setEntered(false);window.scrollTo({top:0,behavior:'auto'});return}
      setEntered(true);setChapter(index);
      window.requestAnimationFrame(()=>document.getElementById(id)?.scrollIntoView({behavior:'auto'}));
    };
    window.addEventListener('popstate',restoreFromHistory);
    return()=>window.removeEventListener('popstate',restoreFromHistory);
  },[]);

  useEffect(() => {
    document.documentElement.lang = lang;
    const url = new URL(window.location.href);
    if (lang === 'de') url.searchParams.delete('lang');
    else url.searchParams.set('lang', lang);
    window.history.replaceState(window.history.state, '', url);
  }, [lang]);
  useEffect(()=>{try{const raw=new URLSearchParams(window.location.search).get('study');if(!raw)return;const saved=JSON.parse(atob(raw));if(['gehen','arbeiten','tanzen'].includes(saved.a))setAction(saved.a);setShape({width:+saved.w,weight:+saved.g,layers:+saved.l});const savedMotifs=Array.isArray(saved.i)?saved.i.filter((item:unknown)=>Number.isInteger(item)&&Number(item)>=0&&Number(item)<=2):Number.isFinite(+saved.i)?(+saved.i===3?[0,1,2]:+saved.i>=0&&+saved.i<=2?[+saved.i]:[]):[];setIntention([...new Set<number>(savedMotifs)]);setPatternRhythm(Math.max(0,Math.min(2,+saved.r||0)));setPatternAccent(Math.max(0,Math.min(2,+saved.k||0)))}catch{}},[]);
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

  const motifLabel=intention.map(item=>x.intentions[item]).join(' + ');
  const studyCanvas=async()=>{const canvas=document.createElement('canvas');canvas.width=1200;canvas.height=1500;const g=canvas.getContext('2d')!;g.fillStyle='#e8dfcf';g.fillRect(0,0,1200,1500);g.fillStyle='#17100e';g.fillRect(70,70,1060,1360);g.fillStyle='#e8dfcf';g.font='34px Josefin Sans';g.fillText('EMILIE · BEWEGUNG AUS STOFF',120,145);g.font='72px Della Respira';g.fillText(s.creationTitle,120,250);g.fillStyle='#a54e31';g.fillRect(120,300,960,5);const img=await loadPatternFigure();drawPatternedFigure(g,img,{x:275,y:330,w:650,h:720},intention,patternRhythm,patternAccent);g.fillStyle='#e8dfcf';g.font='34px Josefin Sans';g.fillText(`${c.actions[['gehen','arbeiten','tanzen'].indexOf(action)]} · ${mobility}% ${c.mobility}`,120,1090);g.font='25px Josefin Sans';g.fillText(`${c.labels[0]} ${shape.width}  ·  ${c.labels[1]} ${shape.weight}  ·  ${c.labels[2]} ${shape.layers}`,120,1150);g.font='29px Della Respira';wrapCanvasText(g,`${motifLabel} · ${x.rhythms[patternRhythm]} · ${x.accents[patternAccent]}`,120,1240,900,42);g.font='23px Josefin Sans';g.fillStyle='#e8dfcf';wrapCanvasText(g,s.creationNote,120,1320,900,34);g.font='19px Josefin Sans';g.fillStyle='#bda98c';g.fillText('Historische Inspiration: Emilie Flöge · Künstlerischer Entwurf',120,1400);return canvas};
  const downloadStudy=async()=>{const canvas=await studyCanvas();canvas.toBlob(blob=>{if(!blob)return;const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download='emilie-eigener-entwurf.png';document.body.appendChild(a);a.click();a.remove();window.setTimeout(()=>URL.revokeObjectURL(url),1500)},'image/png')};
  const shareStudy=async()=>{const payload=btoa(JSON.stringify({a:action,w:shape.width,g:shape.weight,l:shape.layers,i:intention,r:patternRhythm,k:patternAccent}));const url=new URL(window.location.href);url.searchParams.set('study',payload);url.hash='anwenden';const pattern=intention.length?`${motifLabel} · ${x.rhythms[patternRhythm]} · ${x.accents[patternAccent]}`:blankPatternCopy[lang];try{if(navigator.share)await navigator.share({title:x.resultTitle,text:pattern,url:url.toString()});else{await navigator.clipboard.writeText(url.toString());setShareStatus(x.shared)}}catch{} };

  return (
    <main className={`experience-shell chapter-${chapter} ${entered?'has-entered':''} ${released ? 'is-released' : ''} ${reducedMotion?'reduce-motion':''}`}>
      <section className={`museum-portal ${entered?'is-entered':''}`} aria-hidden={entered}>
        <div className="portal-image"><img src="./visuals/emilie-floege-1909.jpg" alt=""/><i/><i/><i/></div>
        <div className="portal-language" role="group" aria-label="Language / Sprache / Langue"><button type="button" aria-pressed={lang==='de'} onClick={()=>setLang('de')}>DE</button><span>/</span><button type="button" aria-pressed={lang==='en'} onClick={()=>setLang('en')}>EN</button><span>/</span><button type="button" aria-pressed={lang==='fr'} onClick={()=>setLang('fr')}>FR</button></div>
        <div className="portal-copy"><p>{c.portalEye}</p><h1>{c.portalTitle}</h1><p className="portal-intro">{s.portalIntro}</p><button type="button" onClick={()=>{setEntered(true);salonEntrance()}}><span>{s.portalEnter}</span><i aria-hidden="true">→</i></button></div>
        <a className="portal-credit" href="https://sammlung.wienmuseum.at/objekt/305884-gustav-klimt-1862-1918-und-emilie-floege-1874-1952-in-einem-boot-auf-dem-attersee/" target="_blank" rel="noreferrer">{c.portalCredit}</a>
      </section>
      <a className="skip-link" href="#experience">{c.skip}</a>
      <header className="masthead">
        <a className="wordmark" href="#experience"><span>EMILIE</span><small>{c.subtitle}</small></a>
        <div className="chapter-mark" aria-live="polite"><span>0{chapter + 1}</span><i /><small>07 · {c.chapters[chapter]}</small></div>
        <nav className="experience-links" aria-label={lang==='de'?'Experience-Navigation':lang==='fr'?'Navigation de l’expérience':'Experience navigation'}>
          <button className="return-start" type="button" onClick={()=>{window.history.pushState({portal:true},'',window.location.pathname+window.location.search);setEntered(false);window.scrollTo({top:0,behavior:'smooth'})}}><span aria-hidden="true">←</span>{s.back}</button>
          <a className="all-projects" href="https://salonformat.github.io/salon-format-portfolio/">{projectLinkCopy[lang]}<span aria-hidden="true">↗</span></a>
        </nav>
        <div className="header-tools"><div className="language-switch" role="group" aria-label="Language / Sprache / Langue"><button type="button" aria-pressed={lang==='de'} onClick={()=>setLang('de')}>DE</button><span>/</span><button type="button" aria-pressed={lang==='en'} onClick={()=>setLang('en')}>EN</button><span>/</span><button type="button" aria-pressed={lang==='fr'} onClick={()=>setLang('fr')}>FR</button></div><button className="motion-toggle" type="button" aria-pressed={reducedMotion} onClick={()=>setReducedMotion(v=>!v)}>{reducedMotion?x.restore:x.reduce}</button><button className="sound-toggle" type="button" aria-pressed={soundOn} onClick={toggleSound}><span className="sound-lines" aria-hidden="true"><i/><i/><i/></span>{c.sound[soundOn?1:0]}</button>{soundOn&&<label className="volume-control"><span>{x.volume}</span><input type="range" min="0" max="1" step="0.05" value={volume} onChange={e=>setVolume(+e.target.value)}/></label>}<a className="sound-control" href="#sources">{c.sources}</a></div>
      </header>
      <p className="sr-only" aria-live="polite">{soundDescription}</p>

      <section className="hero scene" id="experience" ref={stageRef} aria-labelledby="hero-title">
        <PatternField />
        <div className="hero-copy">
          <p className="eyebrow"><span>{c.heroEye[0]}</span><span>{c.heroEye[1]}</span></p>
          <h1 id="hero-title"><span>{c.heroTitle[0]}</span><em>{c.heroTitle[1]}</em><span>{c.heroTitle[2]}</span><strong>{c.heroTitle[3]}</strong></h1>
          <p className="intro">{c.heroIntro}</p>
          <button className="enter-button" type="button" onClick={() => { setReleased(true); if(soundOn) salonEntrance(); document.querySelector('#loesen')?.scrollIntoView({ behavior:'smooth' }); }}><span>{s.heroContinue}</span><i aria-hidden="true">→</i></button>
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
          <h2 id="context-title">{c.contextTitle[0]} <em>{c.contextTitle[1]}</em> {c.contextTitle[2]}</h2>
          <p className="context-lead">{c.contextLead}</p>
          <p className="context-expansion">{s.contextExpansion}</p>
          <div className="fact-grid">
            {c.facts.map((fact)=><article key={fact[0]}><strong>{fact[0]}</strong><p>{fact[1]}</p><a href={fact[3]} target="_blank" rel="noreferrer">{c.sourceWord}: {fact[2]} <span>→</span></a></article>)}
          </div>
          <div className="context-to-salon"><p>{c.contextBridge}</p><p>{s.contextBiography}</p></div>
          <p className="not-muse"><span>{c.notMuse[0]}</span> {c.notMuse[1]}</p>
          <button className="continue-cue context-continue" type="button" onClick={() => document.querySelector('#salon')?.scrollIntoView({behavior:'smooth'})}>{c.chapters[3]} <span>↓</span></button>
        </div>
      </section>

      <section className={`salon-scene scene ${salonEntered?'is-inside':'is-outside'} ${salonDiscoveries.every(Boolean)?'is-complete':''} ${activeSalonStation!==null?`has-active-station active-station-${activeSalonStation}`:''}`} id="salon" aria-labelledby="salon-title">
        <div className="scene-index light"><span>04</span><i/><small>{c.chapters[3]}</small></div>
        <div className="salon-facade" aria-hidden={salonEntered}><div className="salon-sign"><small>WIEN</small><strong>SCHWESTERN<br/>FLÖGE</strong><i/></div><div className="salon-door left-door"><span/></div><div className="salon-door right-door"><span/></div><button className="salon-door-trigger" type="button" aria-label={c.salonEnter} onClick={()=>{setSalonEntered(true);salonEntrance()}}><i/><span>{c.salonEnter}</span></button></div>
        <div className="salon-copy"><p className="eyebrow">{c.salonEye}</p><h2 id="salon-title">{c.salonTitle[0]} <em>{c.salonTitle[1]}</em></h2><p>{salonEntered?s.salonHint:c.salonIntro}</p>{!salonEntered&&<button type="button" onClick={()=>{setSalonEntered(true);salonEntrance()}}>{c.salonEnter}<span>→</span></button>}</div>
        <div className="salon-room" onPointerMove={event=>{const rect=event.currentTarget.getBoundingClientRect();event.currentTarget.style.setProperty('--room-x',`${((event.clientX-rect.left)/rect.width-.5)*2}`);event.currentTarget.style.setProperty('--room-y',`${((event.clientY-rect.top)/rect.height-.5)*2}`)}}>
          <div className="salon-depth" aria-hidden="true"><i className="salon-ceiling"/><i className="salon-floor"/><i className="salon-wall left-wall"/><i className="salon-wall right-wall"/><div className="salon-window"><i/><i/><i/></div><div className="salon-chandelier"><i/><i/><i/></div></div>
          <p className="salon-progress">{c.salonExplore} · {salonDiscoveries.filter(Boolean).length}/3</p>
          <div className="salon-stations">
            {c.salonStations.map((station,index)=><button key={station[0]} type="button" className={`salon-station station-${index} ${salonDiscoveries[index]?'is-found':''} ${activeSalonStation===index?'is-active':''}`} aria-pressed={activeSalonStation===index} onClick={()=>{setActiveSalonStation(index);setSalonDiscoveries(items=>items.map((item,i)=>i===index?true:item)); if(index===0)noiseGesture(.8,.04,1700);if(index===1){soundPulse(190,.5);openAir()}if(index===2)businessRhythm()}}><span className="station-object" aria-hidden="true">{index===0?<><i/><i/><i/></>:index===1?<img src="./visuals/schneiderpuppe-atelier.png" alt=""/>:<><i/><i/><b/></>}</span><span className="station-label"><small>0{index+1}</small><strong>{station[0]}</strong><em>{station[1]}</em></span></button>)}
          </div>
          {activeSalonStation!==null&&<aside className="salon-insight" aria-live="polite"><button type="button" className="salon-insight-close" aria-label={lang==='de'?'Detail schließen':lang==='fr'?'Fermer le détail':'Close detail'} onClick={()=>setActiveSalonStation(null)}>×</button><small>{c.salonInsightEye} · 0{activeSalonStation+1}</small><h3>{c.salonInsights[activeSalonStation][0]}</h3><p>{c.salonInsights[activeSalonStation][1]}</p><strong>{c.salonInsights[activeSalonStation][2]}</strong></aside>}
          {salonDiscoveries.every(Boolean)&&<div className="salon-complete" aria-live="polite"><strong>{c.salonDone}</strong><button type="button" onClick={()=>document.querySelector('#unternehmen')?.scrollIntoView({behavior:'smooth'})}>{c.salonContinue}<span>→</span></button></div>}
        </div>
      </section>

      <section className={`business-scene scene ${businessChoice!==null?'has-choice':''} ${businessChoice!==null?`choice-${businessChoice}`:''}`} id="unternehmen" aria-labelledby="business-title">
        <div className="scene-index"><span>05</span><i /><small>{c.chapters[4]}</small></div>
        <div className="decision-atmosphere" aria-hidden="true">{Array.from({length:15},(_,i)=><i key={i}/>)}</div>
        <div className="business-copy"><p className="eyebrow">{c.businessEye}</p><h2 id="business-title">{c.businessTitle[0]} <em>{c.businessTitle[1]}</em></h2><p className="business-lead">{c.businessLead}</p><p className="business-focus">{s.businessFocus}</p><p className="task-prompt">{c.chooseTask}</p><div className="business-tasks">{c.businessTasks.map((task,index)=><button type="button" className={businessChoice===index?'is-flipped':''} key={task[0]} aria-label={`${task[0]}: ${businessChoice===index?c.businessResult[index]:task[1]}`} aria-pressed={businessChoice===index} onClick={()=>{setBusinessChoice(businessChoice===index?null:index);businessRhythm()}}><span className="card-inner"><span className="card-face card-front"><i>0{index+1}</i><strong>{task[0]}</strong><small>{task[1]}</small><b aria-hidden="true">+</b></span><span className="card-face card-back"><i>{c.reveal}</i><strong>{c.businessResult[index]}</strong><small>{c.turnAgain}</small><b aria-hidden="true">×</b></span></span></button>)}</div>{businessChoice!==null&&<div className="business-answer" aria-live="polite"><strong>{c.businessLearning}</strong><button className="continue-cue" type="button" onClick={()=>document.querySelector('#anwenden')?.scrollIntoView({behavior:'smooth'})}>{c.continueAtelier}<span>↓</span></button></div>}</div>
      </section>

      <section className="atelier-scene scene" id="anwenden" aria-labelledby="atelier-title">
        <div className="scene-index"><span>06</span><i /><small>{c.chapters[5]}</small></div>
        <div className="atelier-left">
          <header className="atelier-head"><p className="eyebrow">{c.experiment}</p><h2 id="atelier-title">{c.design[0]} <em>{c.design[1]}</em></h2><p>{c.notLook}</p></header>
          <form className="controls" onSubmit={(event)=>event.preventDefault()}>
            <p className="control-step">{atelierSteps[lang]}</p>
            <label><span><strong>{c.labels[0]}</strong><small>{shape.width}</small></span><input aria-label={c.labels[0]} type="range" min="32" max="82" value={shape.width} onChange={e=>{const value=+e.target.value;setShape({...shape,width:value});fabricSound(value,'width')}}/></label>
            <label><span><strong>{c.labels[1]}</strong><small>{shape.weight}</small></span><input aria-label={c.labels[1]} type="range" min="10" max="90" value={shape.weight} onChange={e=>{const value=+e.target.value;setShape({...shape,weight:value});fabricSound(value,'weight')}}/></label>
            <label><span><strong>{c.labels[2]}</strong><small>{shape.layers}</small></span><input aria-label={c.labels[2]} type="range" min="1" max="5" value={shape.layers} onChange={e=>{const value=+e.target.value;setShape({...shape,layers:value});fabricSound(value*18,'layers')}}/></label>
            <p className={`design-feedback evaluation-${mobility < 45 ? 'low' : mobility < 70 ? 'mid' : 'high'}`} aria-live="polite"><strong>{c.evaluation[mobility < 45 ? 0 : mobility < 70 ? 1 : 2][0]}</strong><span>{c.evaluation[mobility < 45 ? 0 : mobility < 70 ? 1 : 2][1]}</span></p>
          </form>
        </div>
        <div className="garment-lab">
          <div className={`lab-figure action-${action} ${mobility>=70?'is-achieved':''}`} style={{ '--dress-width':`${shape.width}%`, '--figure-scale':.92 + (shape.width-55)/360, '--weight-filter':1.08-shape.weight/360, '--motion-speed':`${1.35 + shape.weight/26}s`, '--motion-range':`${4 + mobility*.13}px`, '--motion-range-neg':`${-4-mobility*.13}px`, '--motion-lift-neg':`${-2-mobility*.09}px`, '--dance-angle':`${2+mobility*.025}deg`, '--dance-angle-neg':`${-2-mobility*.025}deg`, '--mobility':`${mobility}%`, '--layers':shape.layers, '--flutter-angle':`${1+mobility*.055+(90-shape.weight)*.045}deg`, '--flutter-shift':`${2+mobility*.1+(90-shape.weight)*.06}px` } as React.CSSProperties}>
            <div className="motion-boundary" aria-hidden="true"/><div className="lab-character clean-design-character" onPointerMove={event=>{const rect=event.currentTarget.getBoundingClientRect();touchFabric((event.clientX-rect.left)/rect.width,.65)}} onWheel={event=>touchFabric((event.clientX-event.currentTarget.getBoundingClientRect().left)/event.currentTarget.getBoundingClientRect().width,.9)}><StudyPreview shape={shape} intention={intention} rhythm={patternRhythm} accent={patternAccent} action={action} transparent/><div className="skirt-flutter" aria-hidden="true"><StudyPreview shape={shape} intention={intention} rhythm={patternRhythm} accent={patternAccent} action={action} transparent/></div></div><i className="floor-line" />
            <div className="achievement-burst" aria-hidden="true">{Array.from({length:10},(_,i)=><i key={i}/>)}</div><p className="achievement-label">{c.achieved}</p><div className="mobility-gauge"><span>{c.mobility}</span><div><i/></div><small>{mobility < 45 ? c.constrained : c.free} · {mobility}%</small></div>
          </div>
          <div className="motion-word" aria-hidden="true">{c.actions[['gehen','arbeiten','tanzen'].indexOf(action)]}</div>
        </div>
        <aside className="atelier-right">
          <div className="action-picker" role="group" aria-label={c.notLook}>{(['gehen','arbeiten','tanzen'] as const).map((item,index) => <button type="button" key={item} aria-pressed={action === item} onClick={() => { setAction(item); if(item==='gehen') outsideVienna(); else if(item==='arbeiten') businessRhythm(); else { soundPulse(232,.55); noiseGesture(.72,.034,1800); } }}>{c.actions[index]}</button>)}</div>
          <StudyIdentity intention={intention} setIntention={setIntention} rhythm={patternRhythm} setRhythm={setPatternRhythm} accent={patternAccent} setAccent={setPatternAccent} shape={shape} action={action} labels={x} onDownload={downloadStudy} onShare={shareStudy} shareStatus={shareStatus}/>
        </aside>
      </section>

      <section className="final-scene atelier-result-scene scene" id="perspektive" aria-labelledby="final-title">
        <PatternField />
        <div className="scene-index"><span>07</span><i /><small>{c.chapters[6]}</small></div>
        <div className="network" aria-hidden="true">{Array.from({length:17},(_,i)=><i key={i}/>)}</div>
        <div className="final-copy">
          <p className="eyebrow">{c.finalEye}</p>
          <h2 id="final-title">{c.finalTitle}</h2>
          <p>{c.finalBody}</p>
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

function StudyIdentity({intention,setIntention,rhythm,setRhythm,accent,setAccent,shape,action,labels,onDownload,onShare,shareStatus}:{intention:number[];setIntention:(v:number[])=>void;rhythm:number;setRhythm:(v:number)=>void;accent:number;setAccent:(v:number)=>void;shape:{width:number;weight:number;layers:number};action:'gehen'|'arbeiten'|'tanzen';labels:typeof extraCopy.de|typeof extraCopy.en|typeof extraCopy.fr;onDownload:()=>void;onShare:()=>void;shareStatus:string}){const locale=labels.intentions[0]==='Rechteck'?'de':labels.intentions[0]==='Rectangle'?'en':'fr',motifLabel=intention.map(item=>labels.intentions[item]).join(' + '),toggleMotif=(motif:number)=>setIntention(intention.includes(motif)?intention.filter(item=>item!==motif):[...intention,motif].sort());return <fieldset className="signature-maker identity-maker"><legend>{labels.signatureEye}</legend><h3>{labels.signatureTitle}</h3><p>{labels.signatureBody}</p><div className="pattern-workbench"><div className="pattern-choices"><span>1 · {labels.motif}</span><div className="intention-picker">{labels.intentions.map((item,i)=><button key={item} type="button" aria-pressed={intention.includes(i)} onClick={()=>toggleMotif(i)}><i className={`motif-icon motif-icon-${i}`} aria-hidden="true"/>{item}</button>)}</div><span>2 · {labels.statement}</span><div className="intention-picker">{labels.rhythms.map((item,i)=><button key={item} type="button" aria-pressed={rhythm===i} onClick={()=>setRhythm(i)} disabled={!intention.length}>{item}</button>)}</div><span>3 · {labels.accent}</span><div className="intention-picker accent-picker">{labels.accents.map((item,i)=><button key={item} type="button" aria-pressed={accent===i} onClick={()=>setAccent(i)} disabled={!intention.length}><i className={`accent-dot accent-dot-${i}`} aria-hidden="true"/>{item}</button>)}</div></div></div><p className="pattern-connection">{intention.length?<strong>{motifLabel} · {labels.rhythms[rhythm]} · {labels.accents[accent]}</strong>:blankPatternCopy[locale]}</p><div className="pattern-actions atelier-direct-actions"><button className="pattern-apply" type="button" disabled={!intention.length} onClick={onDownload}>{labels.download}</button><button type="button" disabled={!intention.length} onClick={onShare}>{labels.share}</button><button className="identity-reset" type="button" onClick={()=>{setIntention([]);setRhythm(0);setAccent(0)}}>{labels.signatureClear}</button></div><small className="atelier-share-status" aria-live="polite">{shareStatus}</small></fieldset>}

function loadPatternFigure(){return new Promise<HTMLImageElement>((resolve,reject)=>{const img=new Image();img.onload=()=>resolve(img);img.onerror=reject;img.src='./visuals/emilie-figure-white-transparent.png'})}

function drawPatternedFigure(g:CanvasRenderingContext2D,img:HTMLImageElement,box:{x:number;y:number;w:number;h:number},motifs:number[],rhythm:number,accent:number){const off=document.createElement('canvas');off.width=Math.max(1,Math.round(box.w));off.height=Math.max(1,Math.round(box.h));const o=off.getContext('2d')!;const scale=Math.min(off.width/img.naturalWidth,off.height/img.naturalHeight);const dw=img.naturalWidth*scale,dh=img.naturalHeight*scale,dx=(off.width-dw)/2,dy=(off.height-dh)/2;o.drawImage(img,dx,dy,dw,dh);if(motifs.length){const pixels=o.getImageData(0,0,off.width,off.height),data=pixels.data,colors=[[165,78,49],[196,152,88],[47,102,83]],color=colors[accent],cell=Math.max(14,[62,45,32][rhythm]*off.width/500),mark=Math.max(4,cell*.42);for(let y=0;y<off.height;y++){for(let x=0;x<off.width;x++){const p=(y*off.width+x)*4,r=data[p],green=data[p+1],b=data[p+2],a=data[p+3];const neutralWhite=a>20&&r>224&&green>219&&b>202&&Math.abs(r-green)<25&&Math.abs(green-b)<32;if(!neutralWhite)continue;const fx=x%cell,fy=y%cell,square=fx<mark&&fy<mark,circle=Math.hypot(fx-cell/2,fy-cell/2)<mark*.72,stripe=Math.abs((fx+fy)%cell-cell/2)<Math.max(3,cell*.12),hit=(motifs.includes(0)&&square)||(motifs.includes(1)&&circle)||(motifs.includes(2)&&stripe);if(hit){data[p]=color[0];data[p+1]=color[1];data[p+2]=color[2]}}}o.putImageData(pixels,0,0)}g.drawImage(off,box.x,box.y,box.w,box.h)}

function StudyPreview({shape,intention,rhythm,accent,action='gehen',transparent=false}:{shape:{width:number;weight:number;layers:number};intention:number[];rhythm:number;accent:number;action?:'gehen'|'arbeiten'|'tanzen';transparent?:boolean}){const ref=useRef<HTMLCanvasElement>(null);useEffect(()=>{let active=true,frame=0;const canvas=ref.current;if(!canvas)return;const paint=()=>{cancelAnimationFrame(frame);frame=requestAnimationFrame(()=>{if(!active)return;const ratio=window.devicePixelRatio||1,r=canvas.getBoundingClientRect(),width=Math.max(1,Math.round(r.width*ratio)),height=Math.max(1,Math.round(r.height*ratio));if(canvas.width!==width)canvas.width=width;if(canvas.height!==height)canvas.height=height;const g=canvas.getContext('2d');if(!g)return;g.clearRect(0,0,width,height);if(!transparent){g.fillStyle='#201512';g.fillRect(0,0,width,height)}loadPatternFigure().then(img=>{if(!active)return;g.clearRect(0,0,width,height);if(!transparent){g.fillStyle='#201512';g.fillRect(0,0,width,height)}drawPatternedFigure(g,img,{x:0,y:0,w:width,h:height},intention,rhythm,accent)})})};paint();const observer=new ResizeObserver(paint);observer.observe(canvas);return()=>{active=false;cancelAnimationFrame(frame);observer.disconnect()}},[shape,intention,rhythm,accent,action,transparent]);return <canvas className="study-preview" ref={ref} role="img" aria-label="Pattern and silhouette preview"/>}

function TextileFigure({progress,alt,bindings,onFabricMove,releaseControl}:{progress:number;alt:string;bindings?:readonly string[];onFabricMove?:(position?:number,intensity?:number)=>void;releaseControl?:{trackRef:React.RefObject<HTMLDivElement|null>;label:string;start:string;end:string;pull:string;onDrag:(x:number)=>void;onKey:(direction:number)=>void}}){
  return <div className={`textile-portrait ${bindings ? 'has-restraints' : ''} ${progress >= 96 ? 'is-fully-free' : progress < 18 ? 'is-constrained' : 'is-releasing'}`} style={{'--freedom':progress/100} as React.CSSProperties} onPointerMove={event=>{const rect=event.currentTarget.getBoundingClientRect();onFabricMove?.((event.clientX-rect.left)/rect.width,.55)}} onWheel={event=>{const rect=event.currentTarget.getBoundingClientRect();onFabricMove?.((event.clientX-rect.left)/rect.width,.92)}}>
    <div className="portrait-halo" aria-hidden="true"/><img className="figure-illustration" src="./visuals/emilie-figure-abstract.png" alt={alt}/>{bindings&&<img className="release-skirt" src="./visuals/emilie-figure-abstract.png" alt="" aria-hidden="true"/>}
    {bindings && <div className="gather-pleats" aria-hidden="true">{Array.from({length:7},(_,index)=><i key={index}/>)}</div>}
    {releaseControl&&<div className="figure-release-control" ref={releaseControl.trackRef}><span className="release-control-label">{releaseControl.label}</span><small className="control-start">{releaseControl.start}</small><small className="control-end">{releaseControl.end}</small><i className="control-line" style={{'--pull':`${progress}%`} as React.CSSProperties}/><button type="button" className="figure-release-ring" style={{left:`${progress}%`}} onPointerDown={event=>{event.currentTarget.setPointerCapture(event.pointerId);releaseControl.onDrag(event.clientX)}} onPointerMove={event=>{if(event.currentTarget.hasPointerCapture(event.pointerId))releaseControl.onDrag(event.clientX)}} onKeyDown={event=>{if(event.key==='ArrowRight')releaseControl.onKey(1);if(event.key==='ArrowLeft')releaseControl.onKey(-1)}} role="slider" aria-label={`${releaseControl.pull}, ${Math.round(progress)}%`} aria-valuenow={Math.round(progress)} aria-valuemin={0} aria-valuemax={100}><i/><span>{releaseControl.pull}</span></button></div>}
    {bindings && <><div className="freedom-ribbons" aria-hidden="true">{Array.from({length:12},(_,index)=><i key={index}/>)}</div><div className="freedom-waves" aria-hidden="true"><i/><i/><i/></div></>}
  </div>;
}
