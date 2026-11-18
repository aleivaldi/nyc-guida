export default {
 "id": "sat",
 "weekday": 6,
 "title": "Parco, dinosauri e pattini",
 "vinnieMorning": "Buongiorno, squadra. Oggi giriamo tra statue di bronzo, ossa giganti e ghiaccio: posti perfetti per nascondere pezzi di chiave, e io li conosco tutti dall'alto. Voi avete solo le gambe e un genitore col telefono. Ci vediamo al parco, se arrivate.",
 "stops": [
  {
   "id": "cp",
   "name": "Central Park dalla 72ª",
   "kind": "key",
   "start": "08:45",
   "durationMin": 75,
   "cost": "Gratis",
   "pos": [
    40.77574,
    -73.97522
   ],
   "radiusM": 450,
   "cover": {
    "img": "img/cp.webp",
    "credit": "Jakub Hałun, CC BY 4.0, via Wikimedia Commons"
   },
   "hook": "Un'ora e un quarto di parco prima che si riempia: un mosaico regalato da Napoli, un angelo, un ponte di ghisa e una statua su cui si può salire.",
   "story": "Sembra un bosco rimasto lì per caso, ma è quasi tutto costruito: laghi e colline sono stati scavati e modellati a mano dal 1858, dove prima c'erano paludi e baracche. Il mosaico con la scritta Imagine, a Strawberry Fields, l'ha regalato la città di Napoli: è copiato da un mosaico antico di Pompei. La signora dei piccioni di Mamma ho riperso l'aereo dava da mangiare ai suoi uccelli in fondo a questo parco. Vinnie giura che era sua zia.",
   "look": [
    "Appena entrati dalla 72ª, a pochi passi a destra del sentiero: il cerchio di mosaico bianco e nero con la scritta Imagine. Spesso qualcuno ci lascia fiori.",
    "Sulla terrazza di Bethesda, al centro della fontana: l'angelo di bronzo con le ali aperte. Poi scendete le scale e alzate gli occhi nel portico: il soffitto è fatto di migliaia di piastrelle colorate.",
    "Dal centro del Bow Bridge, guardate verso ovest: sopra gli alberi spuntano le due torri del San Remo e, più a sinistra, i tetti a punta del Dakota."
   ],
   "tips": [
    {
     "text": "Dall'hotel: metro C da 42 St–Port Authority a 72 St (Central Park West), circa 15 minuti. Uscite e attraversate: l'ingresso del parco è davanti a voi.",
     "when": "always"
    },
    {
     "text": "Giro consigliato: Strawberry Fields, Bethesda, Alice, poi indietro al Bow Bridge e fuori sulla 77ª. Finite a 5 minuti dal museo invece che dall'altra parte del parco.",
     "when": "arrive"
    },
    {
     "text": "In ritardo: saltate Alice. Da Bethesda andate dritti al Bow Bridge (5 minuti a ovest lungo il lago) e uscite sulla 77ª.",
     "when": "late"
    },
    {
     "text": "Bagni: alla Loeb Boathouse (sulla riva est del lago) e al chiosco Kerbs Boathouse sul laghetto delle barchette, vicino ad Alice. Quelli di Bethesda d'inverno sono spesso chiusi.",
     "when": "always"
    },
    {
     "text": "Se piove: Strawberry Fields, poi il portico coperto di Bethesda (ci si ripara e spesso c'è un musicista), Bow Bridge e via verso il museo.",
     "when": "rain"
    },
    {
     "text": "Panchine con vista: sulla terrazza di Bethesda, rivolte verso il lago. Il sabato mattina il viale è pieno di runner: tenete i bambini sul marciapiede.",
     "when": "tired"
    }
   ],
   "steps": [
    {
     "id": "cp-straw",
     "title": "Strawberry Fields",
     "where": "Ingresso di Central Park West all'altezza della 72ª, dentro di pochi passi.",
     "look": [
      "Il mosaico Imagine, a terra: è una copia di un mosaico di Pompei, regalata da Napoli.",
      "Dall'altra parte della strada, il palazzo scuro con i tetti a punta e i balconi: il Dakota, dove abitava John Lennon.",
      "Le panchine intorno: ognuna ha una targhetta con una dedica. Fate leggere ai bambini la più strana."
     ],
     "tips": [
      "La mattina presto c'è poca gente: è il momento per la foto dall'alto del mosaico.",
      "Dal mosaico seguite il sentiero che scende verso est (verso il centro del parco): in 7 minuti siete a Bethesda."
     ]
    },
    {
     "id": "cp-bethesda",
     "title": "Terrazza e fontana di Bethesda",
     "where": "Al centro del parco, all'altezza della 72ª, affacciata sul lago.",
     "look": [
      "L'angelo della fontana.",
      "Il portico sotto la scala con il soffitto di piastrelle.",
      "Il lago con le barche, dietro la fontana."
     ],
     "tips": [
      "Kevin di Mamma ho riperso l'aereo scappa dai due ladri proprio qui.",
      "Nella Come d'incanto la principessa Giselle canta e balla tra questa fontana e il Bow Bridge."
     ],
     "steps": [
      {
       "id": "cp-bethesda-arcade",
       "title": "Il portico",
       "where": "Scendete la grande scala dalla strada: il portico è sotto, prima della fontana.",
       "look": [
        "Alzate gli occhi: il soffitto è fatto di quasi 16.000 piastrelle colorate, restaurate una per una.",
        "Le colonne e gli archi: qui il suono rimbomba, e i musicisti lo sanno."
       ],
       "tips": [
        "Si sta all'asciutto anche se piove."
       ]
      },
      {
       "id": "cp-bethesda-angel",
       "title": "L'angelo",
       "where": "Al centro della fontana, sulla piazza davanti al lago.",
       "look": [
        "L'angelo tiene un giglio in una mano e benedice l'acqua con l'altra.",
        "Sotto di lui, quattro angioletti: sono la salute, la purezza, la temperanza e la pace."
       ],
       "tips": [
        "L'ha scolpito Emma Stebbins: fu la prima donna a cui New York affidò una grande opera pubblica."
       ],
       "options": [
        {
         "label": "Se avete poco tempo",
         "text": "Foto all'angelo e via verso il Bow Bridge, a ovest lungo la riva."
        }
       ]
      }
     ]
    },
    {
     "id": "cp-alice",
     "title": "Alice nel paese delle meraviglie",
     "where": "Lato est, sul laghetto delle barchette (Conservatory Water), all'estremità nord. Da Bethesda: 8 minuti verso est passando dietro la Loeb Boathouse.",
     "look": [
      "Alice seduta su un fungo gigante, con la gatta Dinah in grembo.",
      "Intorno a lei il Cappellaio Matto, il Leprotto, lo Stregatto, un coniglio con l'orologio da taschino e un topolino minuscolo.",
      "Il bronzo lucidissimo sulle teste e sui funghi: è consumato dalle mani e dalle scarpe di sessant'anni di bambini arrampicati."
     ],
     "tips": [
      "Qui si sale, è fatta apposta: è una delle poche statue di New York su cui si può arrampicarsi.",
      "La missione di Vinnie è qui."
     ],
     "steps": [
      {
       "id": "cp-alice-statue",
       "title": "La statua",
       "where": "Sul lato nord del laghetto, in mezzo a una piazzetta tonda.",
       "look": [
        "Sulle placche di bronzo intorno alla base: frasi del libro e la poesia Jabberwocky, la preferita della signora a cui è dedicata.",
        "Il nome Margarita inciso e dorato alla base: il marito la fece fare per lei nel 1959."
       ],
       "tips": [
        "La statua è alta più di 3 metri: il più piccolo sale sul fungo basso, il più grande fino ad Alice."
       ]
      },
      {
       "id": "cp-alice-pond",
       "title": "Il laghetto delle barchette",
       "where": "Davanti alla statua.",
       "look": [
        "Il laghetto dove in Stuart Little il topolino vince la regata.",
        "Sul lato ovest del laghetto, la statua di Hans Christian Andersen con il libro aperto e un anatroccolo ai piedi."
       ],
       "tips": [
        "Bagni e caffè caldo al Kerbs Boathouse, il chiosco sul lato est del laghetto."
       ],
       "options": [
        {
         "label": "Se sono stanchi",
         "text": "Cioccolata al Kerbs Boathouse e panchina sul laghetto: 10 minuti, poi via al Bow Bridge."
        }
       ]
      }
     ]
    },
    {
     "id": "cp-bow",
     "title": "Bow Bridge",
     "where": "Tornate verso ovest lungo il lago (10 minuti): il ponte bianco basso che attraversa il lago verso il bosco.",
     "look": [
      "Il ponte è di ghisa, non di pietra: fu il primo così nel parco, finito nel 1862.",
      "Le decorazioni a spirale e i vasi di ghisa sulla ringhiera.",
      "Dal centro, verso ovest: le due torri del San Remo sopra gli alberi."
     ],
     "tips": [
      "È lungo 27 metri: in Come d'incanto Giselle ci balla sopra.",
      "Attraversate: dall'altra parte comincia il Ramble, il bosco del parco."
     ]
    },
    {
     "id": "cp-exit",
     "title": "Uscita sulla 77ª",
     "where": "Dall'uscita nord del ponte prendete il sentiero a sinistra che segue la riva verso nord fino al ponticello Oak Bridge; attraversatelo e uscite sulla West Drive, al cancello della 77ª.",
     "look": [
      "L'Oak Bridge, il ponticello sopra la baia di Bank Rock.",
      "Il cancello dei Naturalisti sulla 77ª: da lì il museo è di fronte, sull'altro lato di Central Park West."
     ],
     "tips": [
      "Nel Ramble i sentieri si incrociano: se vi perdete, puntate sempre a sinistra (ovest), verso i palazzi.",
      "Dal cancello della 77ª all'ingresso della 81ª del museo: 5 minuti a piedi verso nord."
     ]
    }
   ],
   "missionId": "sat-alice",
   "nearby": [
    {
     "pos": [
      40.77667,
      -73.97639
     ],
     "text": "Il Dakota, il palazzo di fronte a Strawberry Fields: ci abitava John Lennon, e ci vivono ancora attori e musicisti.",
     "kind": "famous"
    },
    {
     "pos": [
      40.7747,
      -73.97271
     ],
     "text": "La fontana di Cherry Hill, sulla collinetta tra Strawberry Fields e Bethesda: da lì si vede il lago dall'alto.",
     "kind": "view"
    },
    {
     "pos": [
      40.77533,
      -73.96874
     ],
     "text": "Loeb Boathouse: bagni aperti tutto l'anno e il bar della rimessa delle barche.",
     "kind": "curio"
    },
    {
     "pos": [
      40.77421,
      -73.96715
     ],
     "text": "Il laghetto delle barchette: qui Stuart Little vince la regata con la sua barchetta.",
     "kind": "film"
    },
    {
     "pos": [
      40.77448,
      -73.96773
     ],
     "text": "Hans Christian Andersen di bronzo, seduto con il libro aperto: ai piedi l'anatroccolo brutto.",
     "kind": "curio"
    },
    {
     "pos": [
      40.77576,
      -73.97177
     ],
     "text": "Bow Bridge: Giselle di Come d'incanto ci balla sopra cantando.",
     "kind": "film"
    }
   ]
  },
  {
   "id": "amnh",
   "name": "Museo di Storia Naturale",
   "kind": "key",
   "choiceGroup": "sat-amnh-first",
   "start": "10:00",
   "durationMin": 150,
   "booked": "Biglietti presi · ingresso 10:00",
   "cost": "Biglietti presi: ingresso generale (farfalle e planetario esclusi; la sala del Rose Center è inclusa)",
   "pos": [
    40.7811,
    -73.97424
   ],
   "radiusM": 150,
   "cover": {
    "img": "img/amnh.webp",
    "credit": "D. Benjamin Miller, CC0, via Wikimedia Commons"
   },
   "hook": "Il museo di Una notte al museo esiste davvero: c'è il T. rex, c'è la testa dell'Isola di Pasqua, e sopra le vostre teste nuota una balena lunga come tre autobus.",
   "story": "Il museo ha la collezione di dinosauri più grande del mondo, ma in sala ne vedete una piccolissima parte: il resto è nei magazzini. Il T. rex del quarto piano l'ha scavato in Montana Barnum Brown, il cacciatore di fossili più famoso del suo tempo, all'inizio del Novecento. La balena azzurra è un modello costruito nel 1969 copiando le foto di una balena vera trovata in Sud America. E il Titanosauro è così lungo che la sua sala non basta: la testa sporge fuori, verso gli ascensori.",
   "look": [
    "Al 4° piano, appena uscite dall'ascensore: il collo del Titanosauro che vi viene incontro, con la testa fuori dalla sala.",
    "Al 1° piano, sala dell'oceano: la balena azzurra sospesa al soffitto, 28 metri e mezzo dalla testa alla coda.",
    "Al 3° piano, al centro della sala dei popoli del Pacifico: il moai di pietra grigia, la testa dell'Isola di Pasqua del film, quella che chiede la gomma da masticare."
   ],
   "tips": [
    {
     "text": "Entrate dalla 81ª Strada (Rose Center), tra Central Park West e Columbus: di solito la coda è più corta della scalinata principale sulla 79ª. Con i biglietti sul telefono si va dritti al controllo.",
     "when": "arrive"
    },
    {
     "text": "Prima i dinosauri: all'apertura il 4° piano è quasi vuoto, verso le 11 si riempie. Prendete subito l'ascensore e chiedete fourth floor.",
     "when": "arrive"
    },
    {
     "text": "La balena va vista prima di mezzogiorno: in questi giorni il museo segnala chiusure anticipate del piano inferiore della sala dell'oceano. Controllate il cartello all'ingresso.",
     "when": "always"
    },
    {
     "text": "Bagni a ogni piano; bagni per famiglie dal 1° al 4° piano. Niente zaini grandi.",
     "when": "always"
    },
    {
     "text": "In ritardo: 4° piano solo T. rex e Titanosauro, poi dritti alla balena. Saltate i mammiferi nordamericani e accorciate il Rose Center.",
     "when": "late"
    },
    {
     "text": "Dove sedersi: le panchine sotto la balena al piano inferiore, e quelle nella sala dell'universo al Rose Center.",
     "when": "tired"
    },
    {
     "text": "Se piove: siete già al coperto. Uscendo, il pranzo è a 3 isolati: in caso di pioggia forte mangiate al food court del museo, al piano inferiore.",
     "when": "rain"
    }
   ],
   "steps": [
    {
     "id": "amnh-in",
     "title": "Ingresso e ascensore",
     "where": "Ingresso della 81ª Strada, poi ascensore fino al 4° piano.",
     "look": [
      "La grande sfera bianca dentro il cubo di vetro, davanti a voi entrando: è il Rose Center, ci tornate alla fine.",
      "La mappa del museo agli sportelli: prendetene una, servirà per i bagni."
     ],
     "tips": [
      "Se la coda alla 81ª è lunga, provate l'ingresso del Gilder Center su Columbus Avenue all'altezza della 79ª.",
      "Qui scelgono i bambini, se hanno vinto più pezzi di Vinnie: dinosauri prima o balena prima."
     ],
     "options": [
      {
       "label": "Dinosauri prima (consigliato)",
       "text": "Ascensore al 4° piano, poi si scende un piano alla volta e si finisce alla balena e al Rose Center."
      },
      {
       "label": "Balena prima",
       "text": "Restate al 1° piano: sala dell'oceano, mammiferi nordamericani, poi ascensore al 4° piano, e giù fino al 2°. Rose Center alla fine."
      }
     ]
    },
    {
     "id": "amnh-dinos",
     "title": "4° piano: i dinosauri",
     "where": "Tutto il 4° piano, un anello di sale. Si parte dalla sala d'orientamento con il Titanosauro.",
     "look": [
      "I fossili sono messi come un grande albero di famiglia: chi è parente sta vicino.",
      "Più di 600 pezzi esposti: l'85 per cento sono ossa vere, non copie.",
      "Il percorso è un anello: si esce dallo stesso punto in cui si entra."
     ],
     "tips": [
      "Contate 45 minuti per il piano intero.",
      "Bagni vicino agli ascensori."
     ],
     "options": [
      {
       "label": "Se avete 20 minuti",
       "text": "Solo Titanosauro e T. rex, poi scale fino al 3° piano."
      },
      {
       "label": "Se sono stanchi",
       "text": "Panchine nella sala d'orientamento sotto il Titanosauro: guardate un video mentre riposano."
      }
     ],
     "steps": [
      {
       "id": "amnh-dinos-titan",
       "title": "Il Titanosauro",
       "where": "Sala d'orientamento Wallach, appena fuori dagli ascensori.",
       "look": [
        "È lungo 37 metri: il collo esce dalla sala e la testa vi guarda dall'ingresso.",
        "Mettetevi sotto la pancia: le zampe sono più alte di papà.",
        "Era un erbivoro: mangiava le cime degli alberi."
       ],
       "tips": [
        "È una copia leggera dello scheletro trovato in Argentina nel 2014: le ossa vere pesano troppo per stare in piedi così."
       ]
      },
      {
       "id": "amnh-dinos-trex",
       "title": "Il T. rex",
       "where": "Sala dei dinosauri saurischi.",
       "look": [
        "Il T. rex: è chinato in avanti, con la coda sollevata. Una volta era messo dritto come un canguro, poi gli scienziati hanno capito che sbagliavano.",
        "I denti: guardatene uno da vicino e confrontatelo con una banana.",
        "Lì vicino l'apatosauro, il collo lunghissimo: è il brontosauro dei cartoni."
       ],
       "tips": [
        "È il dinosauro di Una notte al museo. Nel film però lo mettono nell'atrio d'ingresso."
       ]
      },
      {
       "id": "amnh-dinos-orni",
       "title": "Triceratopo e stegosauro",
       "where": "Sala dei dinosauri ornitischi, la sala dopo.",
       "look": [
        "Il triceratopo con le tre corna e il collare di osso.",
        "Lo stegosauro con le piastre sulla schiena e gli aculei sulla coda.",
        "I dinosauri corazzati, coperti di placche come carri armati."
       ],
       "tips": [
        "Chiedete ai bambini: chi dei tre avrebbe vinto contro il T. rex?"
       ]
      },
      {
       "id": "amnh-dinos-mammoth",
       "title": "Mammut e mastodonte",
       "where": "Sale dei mammiferi fossili, chiudendo l'anello del 4° piano.",
       "look": [
        "Il mammut e il mastodonte: vicini si vede la differenza nelle zanne.",
        "I cavalli antichi, piccoli come cani."
       ],
       "tips": [
        "Finito l'anello, scendete con le scale: il 3° piano è subito sotto."
       ]
      }
     ]
    },
    {
     "id": "amnh-moai",
     "title": "3° piano: la testa dell'Isola di Pasqua",
     "where": "Sala dei popoli del Pacifico (Margaret Mead), 3° piano.",
     "look": [
      "Il moai grigio al centro della sala: è il Dum-Dum di Una notte al museo.",
      "È un calco, una copia fatta sull'isola: le statue vere sono rimaste a Rapa Nui.",
      "Intorno, maschere e barche dei popoli delle isole del Pacifico."
     ],
     "tips": [
      "Dieci minuti bastano: foto con il moai e via.",
      "Dal 3° piano, cercate il balcone che si affaccia sulla sala degli elefanti: si vede il branco dall'alto."
     ]
    },
    {
     "id": "amnh-africa",
     "title": "2° piano: elefanti e Barosauro",
     "where": "Sala Akeley dei mammiferi africani, 2° piano, accanto all'atrio di Central Park West.",
     "look": [
      "Al centro, il branco di otto elefanti in cammino.",
      "Nelle vetrine intorno: gorilla, leoni, giraffe, ognuno con il suo paesaggio dipinto dietro.",
      "Nella rotonda accanto: il Barosauro mamma impennato sulle zampe di dietro per difendere il piccolo da un allosauro."
     ],
     "tips": [
      "Carl Akeley, che ha fatto questa sala, morì in Africa nel 1926 durante una spedizione ed è sepolto proprio nel posto che si vede nel diorama dei gorilla.",
      "Il Barosauro è il dinosauro montato più alto del mondo: la testa arriva a 15 metri."
     ],
     "options": [
      {
       "label": "Se avete poco tempo",
       "text": "Elefanti dal balcone del 3° piano e saltate questo piano."
      }
     ]
    },
    {
     "id": "amnh-namerica",
     "title": "1° piano: orsi, bisonti e lupi",
     "where": "Sala dei mammiferi nordamericani (Bernard Family), 1° piano.",
     "look": [
      "L'orso bruno dell'Alaska in piedi: misuratevi con lui.",
      "I bisonti nella prateria.",
      "I lupi nella neve: cercate quanti sono."
     ],
     "tips": [
      "Le vetrine hanno più di 80 anni: i paesaggi dietro sono dipinti a mano su pareti curve, per sembrare infiniti."
     ],
     "options": [
      {
       "label": "Se siete in ritardo",
       "text": "Saltatela: andate dritti alla balena, è sullo stesso piano."
      }
     ]
    },
    {
     "id": "amnh-whale",
     "title": "1° piano: la balena azzurra",
     "where": "Sala dell'oceano (Milstein), 1° piano. Dal balcone si scende con le scale al piano inferiore, sotto la balena.",
     "look": [
      "La balena: 28,7 metri e quasi 10 tonnellate di modello. Una balena vera pesa quanto 25–30 elefanti.",
      "Al piano inferiore, in un angolo buio: il diorama del capodoglio che lotta con il calamaro gigante.",
      "La pancia della balena: le pieghe sulla gola servono a gonfiarla come un sacco quando mangia."
     ],
     "tips": [
      "La missione di Vinnie è qui, sotto la balena.",
      "Il piano inferiore in questi giorni può chiudere a mezzogiorno: arrivateci entro le 11:45.",
      "Panchine al piano inferiore: chi è stanco si siede e guarda in su."
     ]
    },
    {
     "id": "amnh-rose",
     "title": "Rose Center: l'universo",
     "where": "Dalla sala dell'oceano seguite i cartelli Rose Center. Sala dell'universo (Cullman) al piano più basso, la sfera sopra.",
     "look": [
      "Il meteorite Willamette nella sala dell'universo: 15 tonnellate di ferro caduto dallo spazio, con i buchi scavati dalla ruggine.",
      "La rampa a spirale intorno alla sfera: 13 miliardi di anni di storia dell'universo. Alla fine, la larghezza di un capello è tutta la storia dell'uomo.",
      "La passerella intorno alla sfera: modellini di pianeti e stelle in scala, per capire quanto è piccola la Terra."
     ],
     "tips": [
      "Il planetario non è compreso nei vostri biglietti; la sala dell'universo e la rampa sì.",
      "Uscita: la stessa porta della 81ª, alle 12:30. Il pranzo è a 3 isolati."
     ],
     "options": [
      {
       "label": "Se avete 15 minuti",
       "text": "Solo il meteorite e la rampa a spirale in discesa."
      }
     ]
    }
   ],
   "missionId": "sat-whale",
   "nearby": [
    {
     "pos": [
      40.78084,
      -73.97284
     ],
     "text": "La scalinata di Central Park West sulla 79ª: è l'ingresso che si vede in Una notte al museo.",
     "kind": "film"
    },
    {
     "pos": [
      40.78165,
      -73.97316
     ],
     "text": "Il mercoledì prima del Ringraziamento, nelle strade intorno al museo gonfiano i palloni giganti della parata di Macy's. Quest'anno è la parata numero 100.",
     "kind": "curio"
    },
    {
     "pos": [
      40.78084,
      -73.97652
     ],
     "text": "Shake Shack, sull'angolo di Columbus con la 77ª: il pranzo più vicino all'uscita, di fronte al lato ovest del museo.",
     "kind": "curio"
    }
   ]
  },
  {
   "id": "lunch",
   "name": "Pranzo sull'Upper West Side",
   "kind": "key",
   "start": "12:30",
   "durationMin": 60,
   "cost": "$50–90 in 4, secondo il posto",
   "pos": [
    40.77996,
    -73.97717
   ],
   "radiusM": 120,
   "hook": "Il quartiere dei newyorkesi veri: bagel, hamburger, il deli dei nonni e il biscotto più grosso della città.",
   "story": "L'Upper West Side è il quartiere delle famiglie di Manhattan: carrozzine, cani con il cappotto, scuole. Zabar's vende pesce affumicato e caffè dagli anni Trenta. Barney Greengrass si chiama da solo il re dello storione. Da Levain fanno biscotti da 170 grammi, così spessi che dentro sono ancora morbidi.",
   "look": [
    "Su Columbus Avenue, i portoni dei palazzi con il portiere in divisa davanti.",
    "Da Zabar's, sulla Broadway all'80ª: l'insegna sopra le vetrine piene di pane e formaggi.",
    "Da Levain, sulla 74ª: la scaletta che scende in un seminterrato minuscolo, con la coda fuori."
   ],
   "tips": [
    {
     "text": "Veloce e vicino: Shake Shack sulla 77ª o i bagel di PopUp e Zucker's su Columbus. Se volete il deli classico, Barney Greengrass è all'86ª: 10 minuti a piedi e coda il sabato.",
     "when": "arrive"
    },
    {
     "text": "Per andare in centro: metro 1 (rossa) da 79 St su Broadway fino a 50 St, poi 8 minuti a piedi verso est fino al Rockefeller Center. In tutto mezz'ora.",
     "when": "always"
    },
    {
     "text": "In ritardo: un hot dog da Gray's Papaya sulla 72ª e Broadway, poi metro 1 dalla stazione di fronte.",
     "when": "late"
    },
    {
     "text": "Se piove: Zabar's ha un piccolo caffè accanto al negozio; altrimenti il food court del museo.",
     "when": "rain"
    }
   ],
   "nearby": [
    {
     "pos": [
      40.77838,
      -73.98157
     ],
     "text": "Gray's Papaya, sulla 72ª e Broadway: hot dog e succo di papaya in piedi al bancone, un'istituzione dal 1973.",
     "kind": "curio"
    },
    {
     "pos": [
      40.7799,
      -73.98034
     ],
     "text": "Levain, sulla 74ª: i biscotti alti tre dita. Uno basta per due.",
     "kind": "curio"
    },
    {
     "pos": [
      40.7849,
      -73.97967
     ],
     "text": "Zabar's: dentro fa caldo, profuma di caffè e pane. I biscotti bianchi e neri sono vicino alle casse.",
     "kind": "curio"
    }
   ],
   "cover": {
    "img": "img/lunch.webp",
    "credit": "Fuzheado, CC BY-SA 4.0, via Wikimedia Commons"
   }
  },
  {
   "id": "rock",
   "name": "FAO Schwarz e Rockefeller Center",
   "kind": "optional",
   "start": "13:45",
   "durationMin": 60,
   "cost": "Gratis (giochi e LEGO a parte)",
   "pos": [
    40.75871,
    -73.97858
   ],
   "radiusM": 90,
   "hook": "Il pianoforte gigante del film Big, un uomo d'oro che vola sopra la pista e l'albero più famoso d'America, ancora impacchettato.",
   "story": "La pista sotto la statua d'oro di Prometeo compie 90 anni: è aperta dal 1936. L'albero di Natale arriva ogni anno su un camion, legato come un pacco: sabato è già al suo posto ma ancora spento, tra i ponteggi, perché lo accendono il mercoledì dopo il Ringraziamento. Da FAO Schwarz c'è il pianoforte da pavimento su cui Tom Hanks balla in Big: quando qualcuno lo suona, i tasti si accendono anche sul soffitto.",
   "look": [
    "Da Fifth Avenue, il viale dei giardini (Channel Gardens): in fondo, sotto, la pista e Prometeo d'oro.",
    "Prometeo: tiene in mano il fuoco rubato agli dei e attraversa un anello con i segni dello zodiaco.",
    "Dietro Prometeo, sopra la pista: l'abete gigante tra i ponteggi, con gli operai che montano le luci."
   ],
   "tips": [
    {
     "text": "FAO Schwarz è al 30 Rockefeller Plaza, sul lato della 49ª. Il pianoforte è al primo piano: il sabato c'è fila, mettetevi subito in coda.",
     "when": "arrive"
    },
    {
     "text": "Top of the Rock, l'ingresso sulla 50ª, è l'alternativa al SUMMIT: avete già il SUMMIT prenotato lunedì, non serve rifarlo.",
     "when": "always"
    },
    {
     "text": "In ritardo: Channel Gardens, Prometeo e via. FAO e LEGO sono negozi: si saltano senza rimpianti.",
     "when": "late"
    },
    {
     "text": "Bagni: dentro FAO Schwarz chiedete al personale; altrimenti al piano interrato del Rockefeller Center (concourse), vicino ai negozi di cibo.",
     "when": "always"
    },
    {
     "text": "Se piove: scendete nel concourse sotto la piazza, si gira tutto al coperto fino alla metro.",
     "when": "rain"
    }
   ],
   "steps": [
    {
     "id": "rock-channel",
     "title": "Channel Gardens",
     "where": "Da Fifth Avenue tra la 49ª e la 50ª, il viale con le aiuole che scende verso la pista.",
     "look": [
      "Le vasche e le aiuole cambiano decorazione con le stagioni.",
      "In fondo, sotto il livello della strada: la pista e Prometeo.",
      "Girate le spalle alla pista: di fronte c'è Saks, dall'altra parte della Quinta."
     ],
     "tips": [
      "Il viale si chiama Channel Gardens perché separa l'edificio francese da quello inglese, come la Manica."
     ]
    },
    {
     "id": "rock-rink",
     "title": "Prometeo e la pista",
     "where": "La balaustra sopra la pista, in fondo ai Channel Gardens.",
     "look": [
      "Prometeo d'oro, sdraiato in volo sopra la fontana.",
      "Le bandiere tutto intorno alla piazza.",
      "I pattinatori sotto: la pista è più piccola di quanto sembra in tv."
     ],
     "tips": [
      "Si pattina anche qui, ma voi pattinate a Bryant Park: costa meno e c'è più spazio."
     ]
    },
    {
     "id": "rock-tree",
     "title": "L'albero",
     "where": "Dietro Prometeo, davanti al grattacielo del 30 Rock.",
     "look": [
      "L'albero coperto dai ponteggi: si accende il mercoledì dopo il Ringraziamento.",
      "In cima, se l'hanno già montata, la stella di cristallo.",
      "Il grattacielo dietro, il 30 Rock: dentro ci sono gli studi della NBC."
     ],
     "tips": [
      "Kevin di Mamma ho riperso l'aereo esprime il suo desiderio proprio davanti a quest'albero, alla fine del film."
     ]
    },
    {
     "id": "rock-fao",
     "title": "FAO Schwarz",
     "where": "30 Rockefeller Plaza, ingresso sulla 49ª.",
     "look": [
      "Il soldatino in divisa rossa che apre la porta.",
      "Il pianoforte da pavimento di Big, al primo piano.",
      "I peluche giganti, più alti dei bambini."
     ],
     "tips": [
      "Per suonarlo in due: uno fa la mano destra, l'altro la sinistra. Heart and Soul è la canzone del film."
     ],
     "options": [
      {
       "label": "Se avete 20 minuti",
       "text": "Solo pianoforte e via."
      }
     ]
    },
    {
     "id": "rock-lego",
     "title": "LEGO e Atlas",
     "where": "LEGO Store al 636 della Quinta Strada, tra la 50ª e la 51ª; Atlas è davanti allo stesso edificio.",
     "look": [
      "Nel negozio LEGO: i modelli giganti fatti di mattoncini, in vetrina e dentro.",
      "Il muro dei mattoncini sfusi da scegliere uno per uno.",
      "Fuori: Atlas di bronzo che regge il cielo sulle spalle, proprio di fronte alla cattedrale di St. Patrick."
     ],
     "tips": [
      "Da Atlas attraversate la Quinta: siete sulla scalinata di St. Patrick's."
     ]
    }
   ],
   "missionId": "sat-prometheus",
   "nearby": [
    {
     "pos": [
      40.75889,
      -73.97917
     ],
     "text": "Il 30 Rock: da qui va in onda Saturday Night Live. Il sabato sera, quando c'è la puntata, attori e cantanti ospiti arrivano qui.",
     "kind": "famous"
    },
    {
     "pos": [
      40.75972,
      -73.97917
     ],
     "text": "Radio City Music Hall, sulla Sixth Avenue: è la casa delle Rockettes e del loro spettacolo di Natale.",
     "kind": "curio"
    },
    {
     "pos": [
      40.75928,
      -73.98065
     ],
     "text": "Magnolia Bakery, sulla Sixth Avenue alla 49ª: il banana pudding in vaschetta, per due.",
     "kind": "curio"
    },
    {
     "pos": [
      40.75737,
      -73.98016
     ],
     "text": "La 47ª tra la Quinta e la Sixth è la via dei diamanti: vetrine piene di anelli e lampioni a forma di diamante sugli angoli.",
     "kind": "curio"
    }
   ]
  },
  {
   "id": "saks",
   "name": "Saks Fifth Avenue",
   "kind": "optional",
   "start": "14:50",
   "durationMin": 10,
   "cost": "Gratis",
   "pos": [
    40.75802,
    -73.97695
   ],
   "radiusM": 35,
   "hook": "Sabato la facciata è ancora spenta: lo spettacolo di luci comincia lunedì sera, e lunedì sera voi siete a dieci minuti da qui.",
   "story": "Ogni sera della stagione la facciata di Saks si accende di luci che si muovono a ritmo di musica, ogni 10 minuti. Nel 2024 il negozio lo cancellò per risparmiare, nel 2025 è tornato. Quest'anno la prima sera è il lunedì prima del Ringraziamento, insieme alle vetrine: sabato vedete solo i lavori in corso.",
   "look": [
    "La facciata sulla Quinta tra la 49ª e la 50ª: cercate le strutture delle luci montate sui piani alti.",
    "Le sei vetrine centrali, ancora coperte: lunedì diventano un viaggio animato per New York.",
    "Dentro, se è già aperto, il mercatino di Natale con un Babbo Natale a grandezza naturale e pinguini che ballano."
   ],
   "tips": [
    {
     "text": "Lunedì sera, prima o dopo la cena a Bryant Park: dalla 42ª alla 50ª sulla Quinta sono 10 minuti a piedi. Lo spettacolo gira ogni 10 minuti dal tardo pomeriggio; mettetevi sul marciapiede di fronte, davanti ai Channel Gardens.",
     "when": "always"
    },
    {
     "text": "Sabato basta passarci davanti: due minuti.",
     "when": "late"
    }
   ],
   "nearby": [
    {
     "pos": [
      40.75843,
      -73.97791
     ],
     "text": "Dal centro dei Channel Gardens si vede tutta la facciata di Saks: è il punto migliore per lo spettacolo di lunedì.",
     "kind": "view"
    }
   ]
  },
  {
   "id": "stpat",
   "name": "Cattedrale di St. Patrick",
   "kind": "optional",
   "start": "15:00",
   "durationMin": 20,
   "cost": "Gratis",
   "pos": [
    40.75856,
    -73.97636
   ],
   "radiusM": 45,
   "hook": "Una cattedrale gotica in mezzo ai grattacieli, con i cappelli dei cardinali appesi al soffitto.",
   "story": "Quando cominciarono a costruirla, nel 1858, qui c'erano quasi solo campi e la gente pensava fosse una follia metterla così fuori città. Sopra l'altare, in alto, sono appesi i grandi cappelli rossi dei cardinali di New York: per tradizione, quando un cardinale muore, il suo cappello resta lì finché non cade a pezzi. Le porte di bronzo sull'ingresso pesano più di nove tonnellate l'una.",
   "look": [
    "Le porte di bronzo sulla Quinta: cercate i santi scolpiti nei riquadri.",
    "In fondo alla navata, sopra l'altare, alzate gli occhi: i cappelli rossi appesi.",
    "Tornando verso l'uscita, il rosone colorato sopra l'ingresso."
   ],
   "tips": [
    {
     "text": "Il sabato c'è messa a mezzogiorno e alle 17:30: alle 15 si gira tranquilli. Durante la messa si resta in fondo o lungo le navate laterali.",
     "when": "arrive"
    },
    {
     "text": "Si entra gratis, a voce bassa. Bastano 15 minuti.",
     "when": "always"
    },
    {
     "text": "In ritardo: foto alla facciata da Atlas, dall'altra parte della Quinta, e via.",
     "when": "late"
    },
    {
     "text": "Le panche sono il posto più tranquillo per far sedere tutti cinque minuti.",
     "when": "tired"
    }
   ],
   "nearby": [
    {
     "pos": [
      40.75895,
      -73.97718
     ],
     "text": "Atlas, di fronte: mettetevi tra le sue gambe e la cattedrale, la foto con le guglie è da lì.",
     "kind": "view"
    }
   ]
  },
  {
   "id": "fifth",
   "name": "Fifth Avenue a piedi verso sud",
   "kind": "optional",
   "start": "15:20",
   "durationMin": 15,
   "cost": "Gratis",
   "pos": [
    40.75604,
    -73.97902
   ],
   "radiusM": 120,
   "hook": "Otto isolati in discesa verso i leoni della biblioteca, con le vetrine che si preparano al Natale.",
   "story": "La Quinta Strada divide Manhattan in est e ovest: per questo esistono la 46ª Est e la 46ª Ovest, e i numeri civici ripartono da qui. Dalla 50ª alla 42ª sono otto isolati, circa 650 metri. Le vetrine di Natale si scoprono una dopo l'altra in questi giorni: alcune sono già pronte, altre ancora fasciate.",
   "look": [
    "I numeri delle vie sui lampioni agli incroci: contate alla rovescia dalla 50ª alla 42ª.",
    "All'incrocio con la 47ª guardate a destra, verso la Sixth Avenue: i lampioni con il diamante in cima della via dei gioiellieri.",
    "In fondo, sulla destra, il palazzo bianco con la scalinata e i due leoni: è la biblioteca."
   ],
   "tips": [
    {
     "text": "Camminate sul lato ovest (destra scendendo): è quello della biblioteca e si arriva davanti ai leoni.",
     "when": "always"
    },
    {
     "text": "In ritardo: prendete la Quinta di passo veloce, 10 minuti dalla cattedrale alla biblioteca.",
     "when": "late"
    }
   ],
   "nearby": [
    {
     "pos": [
      40.75737,
      -73.98016
     ],
     "text": "Diamond District, la 47ª verso la Sixth: un isolato di gioiellerie, con i lampioni a forma di diamante sugli angoli.",
     "kind": "curio"
    }
   ]
  },
  {
   "id": "nypl",
   "name": "New York Public Library",
   "kind": "optional",
   "start": "15:35",
   "durationMin": 25,
   "cost": "Gratis",
   "pos": [
    40.75334,
    -73.98215
   ],
   "radiusM": 70,
   "hook": "Due leoni di pietra, una sala di lettura lunga quasi un isolato e i veri pupazzi di Winnie the Pooh.",
   "story": "I due leoni si chiamano Pazienza e Fortezza: glieli diede il sindaco La Guardia negli anni della Grande Depressione, perché erano le due cose che servivano ai newyorkesi. Nella sala dei bambini, al piano terra, ci sono i pupazzi veri di Christopher Robin: Winnie, Ih-Oh, Pimpi, Kanga e Tigro. Manca Ro: il ragazzo lo perse in un frutteto negli anni Trenta e non fu mai più ritrovato.",
   "look": [
    "I leoni sulla scalinata: Pazienza è quello a sinistra guardando la porta (lato sud), Fortezza a destra.",
    "Dentro, al piano terra, la sala dei bambini con la vetrina di Winnie the Pooh.",
    "Se c'è tempo, al 3° piano la grande sala di lettura con il soffitto dipinto di nuvole."
   ],
   "tips": [
    {
     "text": "All'ingresso controllano le borse. La biblioteca il sabato chiude alle 18.",
     "when": "arrive"
    },
    {
     "text": "Per Pooh: al piano terra seguite i cartelli Children's Center. Se non la trovate, chiedete alla guardia: lo chiedono tutti.",
     "when": "always"
    },
    {
     "text": "In ritardo: foto con i leoni e via a Bryant Park, che è proprio dietro.",
     "when": "late"
    },
    {
     "text": "Vista gratis: di fronte, sulla Quinta all'angolo con la 40ª, la biblioteca Stavros Niarchos ha una terrazza sul tetto aperta a tutti il sabato fino alle 17.",
     "when": "always"
    }
   ],
   "nearby": [
    {
     "pos": [
      40.7529,
      -73.98175
     ],
     "text": "Pazienza, il leone sud. In Ghostbusters i fantasmi cominciano proprio da questa biblioteca.",
     "kind": "film"
    },
    {
     "pos": [
      40.75305,
      -73.98164
     ],
     "text": "Fortezza, il leone nord. Qui Carrie del film Sex and the City doveva sposarsi.",
     "kind": "film"
    },
    {
     "pos": [
      40.7517,
      -73.98153
     ],
     "text": "Terrazza sul tetto della biblioteca Stavros Niarchos: gratis, 7° piano, vista sulla Quinta e sulla biblioteca.",
     "kind": "view"
    }
   ]
  },
  {
   "id": "bryant",
   "name": "Bryant Park, Winter Village",
   "kind": "key",
   "start": "16:00",
   "durationMin": 90,
   "cost": "Ingresso pista gratis; noleggio pattini $19–64 a testa, il sabato pomeriggio verso la cifra alta",
   "pos": [
    40.75407,
    -73.98425
   ],
   "radiusM": 120,
   "cover": {
    "img": "img/bryant.webp",
    "credit": "Rhododendrites, CC BY-SA 4.0, via Wikimedia Commons"
   },
   "hook": "Si pattina al tramonto in mezzo ai grattacieli, poi cioccolata calda tra le casette di legno.",
   "story": "Sotto il prato di Bryant Park ci sono chilometri di scaffali della biblioteca: il parco è il tetto del magazzino dei libri. D'inverno il prato diventa una pista di 1.600 metri quadri dove si entra gratis, con 180 casette di legno intorno. Il sole tramonta verso le 16:30: se entrate in pista alle 16:15, i grattacieli si accendono mentre pattinate.",
   "look": [
    "Dal bordo della pista, verso sud: il grattacielo nero e oro sulla 40ª, l'American Radiator Building.",
    "Verso sud-est, tra i palazzi: la cima dell'Empire State Building che cambia colore la sera.",
    "Sul lato della 40ª, la giostra francese Le Carrousel con gli animali di legno."
   ],
   "tips": [
    {
     "text": "Prenotate online, sul sito di Bryant Park, prima di partire: anche se l'ingresso è gratis serve il biglietto con l'orario. Prendete una sessione verso le 16.",
     "when": "always"
    },
    {
     "text": "La sessione dura 50 minuti. Arrivate all'orario del biglietto: chi è in ritardo il sabato rischia di non entrare.",
     "when": "arrive"
    },
    {
     "text": "Borse: non si portano sul ghiaccio. Deposito borse $6,24 a pezzo, scarpe gratis; per gli armadietti serve un lucchetto (lo vendono a $6,24).",
     "when": "arrive"
    },
    {
     "text": "Il sostegno per chi non sa pattinare costa $26: utile per il più piccolo. Il casco è gratis.",
     "when": "always"
    },
    {
     "text": "In ritardo: niente pattini, giro tra le casette e cioccolata. Il mercatino il sabato chiude alle 20.",
     "when": "late"
    },
    {
     "text": "Se piove forte la pista può chiudere: controllate il sito prima di andare. Le casette restano aperte.",
     "when": "rain"
    },
    {
     "text": "Al caldo: la Lodge, il locale con le vetrate accanto alla pista, con bar e posti a sedere.",
     "when": "tired"
    }
   ],
   "nearby": [
    {
     "pos": [
      40.75343,
      -73.98388
     ],
     "text": "Le Carrousel, la giostra francese sul lato della 40ª: musica francese e animali di legno.",
     "kind": "curio"
    },
    {
     "pos": [
      40.75281,
      -73.98378
     ],
     "text": "L'American Radiator Building, nero e oro: guardatelo quando si accendono le luci.",
     "kind": "view"
    },
    {
     "pos": [
      40.75389,
      -73.98508
     ],
     "text": "Zucker's Bagels sulla Sixth Avenue alla 40ª: un bagel caldo dopo i pattini.",
     "kind": "curio"
    }
   ]
  },
  {
   "id": "macys",
   "name": "Macy's Herald Square",
   "kind": "optional",
   "start": "17:30",
   "durationMin": 90,
   "cost": "Gratis",
   "pos": [
    40.75089,
    -73.98926
   ],
   "radiusM": 120,
   "hook": "Il grande magazzino del Miracolo della 34ª strada, con le vetrine di Natale e le scale mobili di legno del 1902.",
   "story": "Il miracolo della 34ª strada, quello del 1947, è girato davvero qui dentro, durante la parata vera. All'angolo con Broadway c'è un palazzetto basso coperto da una borsa della spesa gigante: nel 1900 un signore comprò quell'angolo per costringere Macy's a pagarlo carissimo, e Macy's costruì il suo palazzo tutto intorno. Le scale mobili di legno sono tra le prime al mondo. Giovedì la parata del Ringraziamento numero 100 parte davanti al museo di storia naturale e finisce proprio qui.",
   "look": [
    "Fuori, sulla 34ª e su Broadway: le vetrine di Natale, quest'anno con la storia dell'ippopotamo blu, uno dei primi palloni della parata.",
    "L'angolo di Broadway e 34ª: il palazzetto con la borsa di Macy's gigante sopra.",
    "Dentro: le scale mobili con i gradini di legno, ai piani alti."
   ],
   "tips": [
    {
     "text": "Alle 18 in punto, sulla piazzetta a nord del negozio, i due fabbri di bronzo dell'orologio di Minerva battono la campana: arrivate due minuti prima.",
     "when": "arrive"
    },
    {
     "text": "Santaland è all'8° piano: serve una prenotazione gratuita online, aperta pochi giorni prima; senza è difficile entrare.",
     "when": "always"
    },
    {
     "text": "In ritardo: vetrine fuori e orologio di Minerva, poi dritti a Koreatown, che è a 5 minuti.",
     "when": "late"
    },
    {
     "text": "Bagni: chiedete al personale, ce ne sono su più piani. Il sabato sera il piano terra è pieno: salite subito.",
     "when": "always"
    },
    {
     "text": "Se piove: Macy's è il posto perfetto per aspettare la cena all'asciutto.",
     "when": "rain"
    }
   ],
   "steps": [
    {
     "id": "macys-windows",
     "title": "Le vetrine e l'angolo da un milione",
     "where": "Fuori, sulla 34ª e sull'angolo con Broadway.",
     "look": [
      "Le vetrine animate sul lato della 34ª.",
      "Il palazzetto all'angolo coperto dalla borsa di Macy's: è il Million Dollar Corner.",
      "La stella rossa di Macy's sull'ingresso."
     ],
     "tips": [
      "Le vetrine si guardano meglio dal marciapiede vicino, con la folla che scorre."
     ]
    },
    {
     "id": "macys-minerva",
     "title": "L'orologio di Minerva",
     "where": "Il triangolo verde a nord di Macy's, dove Broadway incrocia la Sixth Avenue (35ª).",
     "look": [
      "Minerva con la lancia, in alto.",
      "I due fabbri di bronzo con il martello: battono la campana a ogni ora.",
      "Le civette con gli occhi verdi intorno all'orologio: la sera si illuminano."
     ],
     "tips": [
      "Alle 18 battono sei colpi."
     ]
    },
    {
     "id": "macys-escalators",
     "title": "Le scale mobili di legno",
     "where": "Dentro, sulle scale mobili più vecchie: chiedete wooden escalators e salite verso i piani alti.",
     "look": [
      "I gradini di legno a listelli.",
      "Le pareti strette e il rumore diverso, più forte delle scale moderne.",
      "Il corrimano: il legno è consumato da più di cento anni di mani."
     ],
     "tips": [
      "Sono ancora in funzione: si salgono e si scendono come le altre."
     ]
    },
    {
     "id": "macys-holiday",
     "title": "Holiday Lane e Santaland",
     "where": "Ai piani alti, accanto a Santaland all'8° piano.",
     "look": [
      "Holiday Lane: corridoi di palline e decorazioni di Natale.",
      "Il trenino North Star Express che porta a Babbo Natale, se avete la prenotazione.",
      "Le decorazioni a forma di New York: palline con taxi, Empire State, pretzel."
     ],
     "tips": [
      "Una pallina di Macy's è il souvenir più leggero da mettere in valigia."
     ],
     "options": [
      {
       "label": "Se sono stanchi",
       "text": "Saltate Holiday Lane: vetrine, orologio di Minerva e via a cena."
      }
     ]
    }
   ],
   "nearby": [
    {
     "pos": [
      40.7504,
      -73.9876
     ],
     "text": "L'orologio di Minerva sulla piazzetta di Herald Square: due fabbri di bronzo battono la campana ogni ora.",
     "kind": "curio"
    },
    {
     "pos": [
      40.75014,
      -73.98816
     ],
     "text": "Il Million Dollar Corner: il palazzetto che Macy's non riuscì mai a comprare, oggi coperto da una borsa gigante.",
     "kind": "curio"
    },
    {
     "pos": [
      40.75089,
      -73.98926
     ],
     "text": "Qui dentro è girato Il miracolo della 34ª strada, la versione in bianco e nero del 1947.",
     "kind": "film"
    }
   ],
   "cover": {
    "img": "img/macys.webp",
    "credit": "Don Ramey Logan, CC BY 4.0, via Wikimedia Commons"
   }
  },
  {
   "id": "ktown",
   "name": "Koreatown, cena",
   "kind": "key",
   "start": "19:00",
   "durationMin": 90,
   "cost": "Circa $90 in 4",
   "pos": [
    40.74771,
    -73.98623
   ],
   "radiusM": 150,
   "cover": {
    "img": "img/ktown.webp",
    "credit": "Kidfly182, CC BY 4.0, via Wikimedia Commons"
   },
   "hook": "Un isolato di insegne in coreano accese fino a tardi, zuppa di tofu che bolle nella pentola di pietra e l'Empire State che vi guarda in fondo alla via.",
   "story": "La 32ª tra la Quinta e Broadway si chiama ufficialmente Korea Way: in un solo isolato ci sono decine di ristoranti, molti su più piani, alcuni aperti tutta la notte. Ai tavoli arrivano sempre gratis i banchan, tanti piattini di contorni, e se finiscono li riportano. La zuppa di tofu arriva che bolle ancora: dentro si rompe un uovo crudo, che cuoce da solo.",
   "look": [
    "Il cartello Korea Way sul lampione all'angolo con la Quinta.",
    "Le insegne che salgono lungo le facciate: ristoranti al 2°, 3°, 4° piano.",
    "Guardando verso est lungo la 32ª: l'Empire State Building illuminato, a due isolati."
   ],
   "tips": [
    {
     "text": "Il sabato alle 19 c'è coda dappertutto. Con i bambini: BCD Tofu House o Food Gallery 32 (food court, si sceglie in fretta e si mangia subito).",
     "when": "arrive"
    },
    {
     "text": "Per i bambini chiedete la zuppa non piccante: si dice white o not spicy. Il riso viene a parte nella sua ciotola di pietra.",
     "when": "always"
    },
    {
     "text": "Mancia: 18–20 per cento al tavolo. Al food court no.",
     "when": "always"
    },
    {
     "text": "In ritardo o stanchi: Food Gallery 32, si mangia in 30 minuti.",
     "when": "tired"
    },
    {
     "text": "Dolce: la granita coreana (bingsu) da Grace Street, sullo stesso isolato, aperto fino a mezzanotte il sabato.",
     "when": "always"
    }
   ],
   "nearby": [
    {
     "pos": [
      40.7483,
      -73.9856
     ],
     "text": "L'Empire State Building: dall'incrocio di 32ª e Quinta lo vedete intero. I colori della cima cambiano a seconda della serata.",
     "kind": "view"
    },
    {
     "pos": [
      40.74769,
      -73.98649
     ],
     "text": "Grace Street: bingsu, granita di latte con frutta, da dividere in quattro.",
     "kind": "curio"
    }
   ]
  },
  {
   "id": "times",
   "name": "Times Square, verso l'hotel",
   "kind": "optional",
   "start": "20:30",
   "durationMin": 30,
   "cost": "Gratis",
   "pos": [
    40.75914,
    -73.98494
   ],
   "radiusM": 200,
   "hook": "Di sera è più luminoso che di giorno: sedetevi sulla scalinata rossa e guardate gli schermi.",
   "story": "La piazza si chiama così dal 1904, quando il New York Times ci trasferì la sua sede, nel grattacielo stretto in fondo. Da lì a Capodanno scende la palla luminosa: è appesa in cima tutto l'anno, la vedete anche stasera. Ci passano più di 300.000 persone al giorno, quasi tutte con il naso all'insù.",
   "look": [
    "La scalinata rossa di vetro sopra la biglietteria TKTS: salite fino in cima.",
    "Dall'alto della scalinata, verso sud: il grattacielo stretto pieno di schermi, One Times Square, con la palla di Capodanno in cima.",
    "Vicino alla scalinata, sulla stessa isola pedonale: la statua di padre Duffy e quella di George M. Cohan."
   ],
   "tips": [
    {
     "text": "Dall'hotel la scalinata rossa è a 7 minuti: 7th Avenue verso nord fino alla 47ª. Per tornare, 7th Avenue verso sud fino alla 41ª, girate a destra: l'hotel è al 220 della 41ª Ovest.",
     "when": "always"
    },
    {
     "text": "I personaggi in costume (Elmo, Spider-Man) chiedono soldi per la foto: se non volete pagare, non fatevi abbracciare.",
     "when": "arrive"
    },
    {
     "text": "Tenete il telefono in tasca davanti: è il posto della città con più borseggiatori.",
     "when": "always"
    },
    {
     "text": "Stanchi: saltatela, ci passate comunque per tornare in hotel.",
     "when": "late"
    }
   ],
   "missionId": "sat-times",
   "nearby": [
    {
     "pos": [
      40.75642,
      -73.98649
     ],
     "text": "One Times Square: in cima c'è la palla di Capodanno, appesa tutto l'anno.",
     "kind": "view"
    },
    {
     "pos": [
      40.75822,
      -73.98663
     ],
     "text": "Junior's, sulla 45ª: la cheesecake di Brooklyn, una fetta basta per due.",
     "kind": "curio"
    },
    {
     "pos": [
      40.75726,
      -73.9859
     ],
     "text": "In Spider-Man (2002) la festa sul palco con il Goblin che attacca è ambientata in mezzo a questa piazza.",
     "kind": "film"
    }
   ]
  }
 ],
 "walks": [
  {
   "from": "cp",
   "to": "amnh",
   "minutes": 10,
   "how": "Dal cancello della 77ª su Central Park West andate a nord fino alla 81ª, poi a sinistra: l'ingresso del Rose Center è sul lato sud della via.",
   "mapsMode": "walking",
   "tips": [
    {
     "pos": [
      40.77934,
      -73.97344
     ],
     "text": "Naturalists' Gate, il cancello della 77ª: da qui vedete già il museo di fronte."
    },
    {
     "pos": [
      40.78178,
      -73.97192
     ],
     "text": "All'angolo della 81ª c'è la scala della metro B e C: le pareti della stazione sono decorate con animali e fossili di mosaico."
    }
   ]
  },
  {
   "from": "amnh",
   "to": "lunch",
   "minutes": 5,
   "how": "Uscite dalla 81ª, girate a sinistra verso Columbus Avenue, poi a sinistra su Columbus: i posti per mangiare sono tra la 76ª e la 77ª.",
   "mapsMode": "walking",
   "tips": [
    {
     "pos": [
      40.78158,
      -73.97464
     ],
     "text": "Su Columbus, il palazzo di pietra a onde con le grandi vetrate: è il Gilder Center, la parte nuova del museo, aperta nel 2023."
    }
   ]
  },
  {
   "from": "lunch",
   "to": "rock",
   "minutes": 30,
   "how": "A piedi fino a Broadway e la 79ª, metro 1 (rossa) fino a 50 St, poi a piedi verso est sulla 49ª fino al Rockefeller Center.",
   "mapsMode": "transit",
   "tips": [
    {
     "text": "Il sabato la metro ha spesso lavori: controllate sulla app Maps se la 1 ferma a 50 St. Alternativa: taxi, 15–20 minuti, circa $20–25."
    },
    {
     "pos": [
      40.75972,
      -73.97917
     ],
     "text": "Camminando sulla 50ª passate davanti all'insegna rossa di Radio City Music Hall."
    }
   ]
  },
  {
   "from": "rock",
   "to": "saks",
   "minutes": 2,
   "how": "Risalite i Channel Gardens fino alla Quinta: Saks è proprio lì, sull'angolo con la 49ª e la 50ª.",
   "mapsMode": "walking",
   "tips": []
  },
  {
   "from": "saks",
   "to": "stpat",
   "minutes": 2,
   "how": "Sulla Quinta, un isolato verso nord: la cattedrale è tra la 50ª e la 51ª, sullo stesso lato di Saks.",
   "mapsMode": "walking",
   "tips": []
  },
  {
   "from": "stpat",
   "to": "fifth",
   "minutes": 4,
   "how": "Attraversate la Quinta verso Atlas e scendete verso sud sul lato ovest.",
   "mapsMode": "walking",
   "tips": []
  },
  {
   "from": "fifth",
   "to": "nypl",
   "minutes": 8,
   "how": "Sempre dritti sulla Quinta verso sud fino alla 42ª: i leoni sono sulla scalinata a destra.",
   "mapsMode": "walking",
   "tips": [
    {
     "text": "Agli angoli i carretti di pretzel e caldarroste: il pretzel gigante con il sale grosso si mangia in due."
    }
   ]
  },
  {
   "from": "nypl",
   "to": "bryant",
   "minutes": 3,
   "how": "Girate intorno alla biblioteca dal lato della 42ª: Bryant Park è subito dietro, la pista è al centro.",
   "mapsMode": "walking",
   "tips": []
  },
  {
   "from": "bryant",
   "to": "macys",
   "minutes": 12,
   "how": "Sixth Avenue verso sud dalla 40ª fino a Herald Square, alla 34ª: Macy's è l'isolato tra Broadway e la Seventh Avenue, dalla 34ª alla 35ª.",
   "mapsMode": "walking",
   "tips": [
    {
     "pos": [
      40.7483,
      -73.9856
     ],
     "text": "Verso la 35ª, guardate a sinistra lungo le vie: compare l'Empire State Building."
    }
   ]
  },
  {
   "from": "macys",
   "to": "ktown",
   "minutes": 5,
   "how": "Da Herald Square scendete su Broadway fino alla 32ª e girate a sinistra: siete su Korea Way.",
   "mapsMode": "walking",
   "tips": []
  },
  {
   "from": "ktown",
   "to": "times",
   "minutes": 18,
   "how": "Broadway verso nord dalla 32ª alla 47ª. Se i bambini sono stanchi, taxi fino all'hotel (circa $15) e Times Square domani.",
   "mapsMode": "walking",
   "tips": [
    {
     "pos": [
      40.75476,
      -73.98694
     ],
     "text": "Sulla Broadway alla 40ª, Joe's Pizza: fetta al taglio fino a tardi, se qualcuno ha ancora fame."
    }
   ]
  }
 ],
 "food": [
  {
   "id": "sat-shakeshack-uws",
   "name": "Shake Shack",
   "type": "hamburger",
   "category": "pranzo",
   "order": "ShackBurger, patatine ondulate e un frozen custard (gelato denso) da dividere.",
   "price": "$50–65 in 4",
   "pos": [
    40.78084,
    -73.97652
   ],
   "hours": {
    "6": [
     [
      "10:30",
      "23:00"
     ]
    ]
   },
   "near": [
    "amnh",
    "lunch"
   ],
   "note": "Columbus Avenue all'angolo con la 77ª, di fronte al museo. Il sabato a pranzo c'è coda, ma scorre.",
   "rating": {
    "stars": 4.2,
    "count": 8361,
    "source": "Google"
   },
   "buzz": "Burger e frappè promossi; pochi posti, spesso si mangia in piedi; caro per un fast food.",
   "img": {
    "src": "img/food-sat-shakeshack-uws.webp",
    "credit": "Krista, CC BY 2.0, via Wikimedia Commons"
   }
  },
  {
   "id": "sat-popup",
   "name": "PopUp Bagels",
   "type": "bagel",
   "category": "tipico",
   "order": "Bagel caldi interi, da strappare con le mani e intingere nella crema di formaggio nel vasetto.",
   "price": "$25–35 in 4",
   "pos": [
    40.77996,
    -73.97717
   ],
   "hours": {
    "6": [
     [
      "07:00",
      "16:00"
     ]
    ]
   },
   "near": [
    "lunch"
   ],
   "note": "338 Columbus Avenue alla 76ª. Niente tavoli: si mangia in piedi o sulle panchine del museo. Se finiscono i bagel chiudono prima.",
   "rating": {
    "stars": 4.4,
    "count": 221,
    "source": "Yelp"
   },
   "buzz": "Bagel caldi, croccanti fuori e morbidi dentro, ma piccoli; fila nelle ore di punta, minimo tre bagel."
  },
  {
   "id": "sat-zuckers-uws",
   "name": "Zucker's Bagels & Smoked Fish",
   "type": "bagel e salmone affumicato",
   "category": "colazione",
   "order": "Bagel con cream cheese e salmone per i grandi, bagel con burro o al cioccolato per i bambini.",
   "price": "$40–55 in 4",
   "pos": [
    40.77786,
    -73.97825
   ],
   "hours": {
    "6": [
     [
      "07:00",
      "15:00"
     ]
    ]
   },
   "near": [
    "cp",
    "lunch"
   ],
   "note": "273 Columbus Avenue tra la 72ª e la 73ª, qualche tavolino. Apre alle 7: colazione perfetta prima del parco, a 2 minuti dalla metro della 72ª.",
   "rating": {
    "stars": 2.7,
    "count": 488,
    "source": "Yelp"
   },
   "buzz": "Giudizi divisi: bagel buoni per alcuni, secchi per altri; salmone caro per la quantità, pochi posti."
  },
  {
   "id": "sat-levain",
   "name": "Levain Bakery",
   "type": "biscotti giganti",
   "category": "snack",
   "order": "Il biscotto con gocce di cioccolato e noci: alto tre dita, uno basta per due.",
   "price": "$12–20 in 4",
   "pos": [
    40.7799,
    -73.98034
   ],
   "hours": {
    "6": [
     [
      "08:00",
      "20:00"
     ]
    ]
   },
   "near": [
    "lunch",
    "cp"
   ],
   "note": "167 West 74th Street, seminterrato con la scaletta. Solo da asporto.",
   "rating": {
    "stars": 4.7,
    "count": 7474,
    "source": "Google"
   },
   "buzz": "Biscotti enormi e morbidi dentro, uno sazia due bambini; spesso c'è fila sul marciapiede, ma scorre.",
   "img": {
    "src": "img/food-sat-levain.webp",
    "credit": "Biskuit, CC BY-SA 2.0, via Wikimedia Commons"
   }
  },
  {
   "id": "sat-zabars",
   "name": "Zabar's",
   "type": "gastronomia ebraica di New York",
   "category": "tipico",
   "order": "Al banco: pastrami o salmone su pane di segale; al caffè accanto, knish di patate e il biscotto bianco e nero.",
   "price": "$40–60 in 4",
   "pos": [
    40.7849,
    -73.97967
   ],
   "hours": {
    "6": [
     [
      "08:00",
      "19:30"
     ]
    ]
   },
   "near": [
    "lunch"
   ],
   "note": "2245 Broadway all'80ª. Il caffè accanto al negozio chiude alle 18.",
   "rating": {
    "stars": 4.5,
    "count": 6678,
    "source": "Google"
   },
   "buzz": "Scelta enorme di formaggi, pesce affumicato e bagel a prezzi onesti; negozio affollato e un po' caotico.",
   "img": {
    "src": "img/food-sat-zabars.webp",
    "credit": "Nate Steiner from Atlanta, GA, USA, CC BY 2.0, via Wikimedia Commons"
   }
  },
  {
   "id": "sat-barney",
   "name": "Barney Greengrass",
   "type": "deli ebraico",
   "category": "pranzo",
   "order": "Uova strapazzate con salmone e cipolla, bagel con storione per i grandi; bagel con burro e cioccolata calda per i bambini.",
   "price": "$90–130 in 4",
   "pos": [
    40.78797,
    -73.97455
   ],
   "hours": {
    "6": [
     [
      "08:30",
      "17:00"
     ]
    ]
   },
   "near": [
    "lunch"
   ],
   "note": "541 Amsterdam Avenue all'86ª, 10 minuti dal museo. Il sabato a pranzo coda fuori: mettete in conto 20–40 minuti.",
   "rating": {
    "stars": 4.4,
    "count": 1687,
    "source": "Google"
   },
   "buzz": "Salmone e storione lodati da tutti; prezzi alti, tavoli stretti, attese lunghe nel weekend e solo contanti.",
   "img": {
    "src": "img/food-sat-barney.webp",
    "credit": "kris.layon, CC BY 2.0, via Wikimedia Commons"
   }
  },
  {
   "id": "sat-grayspapaya",
   "name": "Gray's Papaya",
   "type": "hot dog",
   "category": "tipico",
   "order": "Due hot dog a testa con crauti o cipolla, e il succo di papaya.",
   "price": "$20–30 in 4",
   "pos": [
    40.77838,
    -73.98157
   ],
   "hours": {
    "6": [
     [
      "08:00",
      "23:00"
     ]
    ]
   },
   "near": [
    "lunch"
   ],
   "note": "2090 Broadway alla 72ª, si mangia in piedi al bancone. La metro 1 e 2 e 3 è davanti.",
   "rating": {
    "stars": 4.2,
    "count": 6838,
    "source": "Google"
   },
   "buzz": "Hot dog economici con la pelle che scrocchia, servizio veloce; il succo di papaya piace a molti.",
   "img": {
    "src": "img/food-sat-grayspapaya.webp",
    "credit": "Eden, Janine and Jim from New York City, CC BY 2.0, via Wikimedia Commons"
   }
  },
  {
   "id": "sat-magnolia-uws",
   "name": "Magnolia Bakery",
   "type": "pasticceria americana",
   "category": "snack",
   "order": "Banana pudding in vaschetta e un cupcake alla vaniglia.",
   "price": "$20–30 in 4",
   "pos": [
    40.77569,
    -73.98031
   ],
   "hours": {
    "6": [
     [
      "07:30",
      "23:59"
     ]
    ]
   },
   "near": [
    "cp",
    "lunch"
   ],
   "note": "200 Columbus Avenue alla 69ª: comoda se arrivate in anticipo al parco.",
   "rating": {
    "stars": 3.5,
    "count": 1420,
    "source": "Yelp"
   },
   "buzz": "Banana pudding promosso quasi da tutti, cupcake spesso giudicati secchi; servizio lento e a volte sgarbato."
  },
  {
   "id": "sat-magnolia-rock",
   "name": "Magnolia Bakery Rockefeller Center",
   "type": "pasticceria americana",
   "category": "snack",
   "order": "Banana pudding: spesso c'è una fila a parte, più veloce.",
   "price": "$20–30 in 4",
   "pos": [
    40.75928,
    -73.98065
   ],
   "hours": {
    "6": [
     [
      "09:00",
      "21:00"
     ]
    ]
   },
   "near": [
    "rock"
   ],
   "note": "Sixth Avenue all'angolo con la 49ª.",
   "rating": {
    "stars": 4.3,
    "count": 8704,
    "source": "Google"
   },
   "buzz": "Banana pudding cremoso, per alcuni sopravvalutato; porzione grande da dividere, niente posti dentro."
  },
  {
   "id": "sat-winter-village",
   "name": "Casette del Winter Village",
   "type": "mercatino di Natale",
   "category": "snack",
   "order": "Cioccolata calda densa, crêpe, dumpling e churros: girate le casette e scegliete.",
   "price": "$30–50 in 4",
   "pos": [
    40.75407,
    -73.98425
   ],
   "hours": {
    "6": [
     [
      "10:00",
      "20:00"
     ]
    ]
   },
   "near": [
    "bryant",
    "nypl"
   ],
   "note": "Circa 180 casette intorno alla pista.",
   "rating": {
    "stars": 4.6,
    "count": 2122,
    "source": "Google"
   },
   "buzz": "Casette belle da girare, cibo e bevande cari; a dicembre e nei weekend la folla rende difficile muoversi.",
   "img": {
    "src": "img/food-sat-winter-village.webp",
    "credit": "Beyond My Ken, CC BY-SA 4.0, via Wikimedia Commons"
   }
  },
  {
   "id": "sat-zuckers-bryant",
   "name": "Zucker's Bagels Bryant Park",
   "type": "bagel",
   "category": "snack",
   "order": "Bagel caldo al sesamo con cream cheese, o al cioccolato per i bambini.",
   "price": "$25–40 in 4",
   "pos": [
    40.75389,
    -73.98508
   ],
   "hours": {
    "6": [
     [
      "06:30",
      "20:00"
     ]
    ]
   },
   "near": [
    "bryant"
   ],
   "note": "1065 Sixth Avenue alla 40ª, sul lato ovest del parco.",
   "rating": {
    "stars": 3.8,
    "count": 219,
    "source": "Yelp"
   },
   "buzz": "Bagel freschi e farciti bene, comodi da mangiare nel parco di fronte; prezzi alti e personale poco cordiale."
  },
  {
   "id": "sat-ladym",
   "name": "Lady M",
   "type": "torte a strati",
   "category": "snack",
   "order": "La fetta di Mille Crêpes, venti crêpe sottili con la crema: due fette per quattro.",
   "price": "$30–45 in 4",
   "pos": [
    40.75278,
    -73.98362
   ],
   "hours": {},
   "near": [
    "bryant",
    "nypl"
   ],
   "note": "36 West 40th Street, di fronte al lato sud di Bryant Park.",
   "rating": {
    "stars": 4.1,
    "count": 1264,
    "source": "Google"
   },
   "buzz": "Mille crêpes delicate e poco dolci; una fetta supera i 10 dollari, locale piccolo con pochi posti."
  },
  {
   "id": "sat-joes",
   "name": "Joe's Pizza Broadway",
   "type": "pizza al taglio",
   "category": "snack",
   "order": "Fetta margherita classica, piegata a metà come fanno i newyorkesi.",
   "price": "$20–30 in 4",
   "pos": [
    40.75476,
    -73.98694
   ],
   "hours": {
    "6": [
     [
      "10:00",
      "23:59"
     ]
    ]
   },
   "near": [
    "bryant",
    "times"
   ],
   "note": "1435 Broadway tra la 40ª e la 41ª, a un isolato dall'hotel. Aperto fino a notte fonda.",
   "rating": {
    "stars": 4.4,
    "count": 27451,
    "source": "Google"
   },
   "buzz": "Coda quasi sempre, ma scorre veloce; fette grandi e croccanti a buon prezzo, pochissimi posti a sedere.",
   "img": {
    "src": "img/food-sat-joes.webp",
    "credit": "Ven-Lib, CC BY-SA 4.0, via Wikimedia Commons"
   }
  },
  {
   "id": "sat-juniors",
   "name": "Junior's",
   "type": "cheesecake e diner",
   "category": "snack",
   "order": "Una fetta di cheesecake classica e una alla fragola, da dividere.",
   "price": "$35–50 in 4 per i dolci",
   "pos": [
    40.75822,
    -73.98663
   ],
   "hours": {
    "6": [
     [
      "07:00",
      "23:59"
     ]
    ]
   },
   "near": [
    "times"
   ],
   "note": "1515 Broadway, ingresso sulla 45ª. Il sabato sera c'è attesa per il tavolo, il banco dolci da asporto è più veloce.",
   "rating": {
    "stars": 4.4,
    "count": 16030,
    "source": "Google"
   },
   "buzz": "Cheesecake cremosa che quasi tutti promuovono, servizio veloce; il sabato sera coda per il tavolo, locale spazioso.",
   "img": {
    "src": "img/food-sat-juniors.webp",
    "credit": "Kidfly182, CC BY-SA 4.0, via Wikimedia Commons"
   }
  },
  {
   "id": "sat-bcd",
   "name": "BCD Tofu House",
   "type": "zuppa di tofu coreana",
   "category": "cena",
   "order": "Soondubu (zuppa di tofu morbido): una non piccante per i bambini, piccante per i grandi; e un piatto di galbi (costine dolci) da dividere.",
   "price": "$90–110 in 4",
   "pos": [
    40.74751,
    -73.98606
   ],
   "hours": {
    "6": [
     [
      "10:30",
      "23:59"
     ]
    ]
   },
   "near": [
    "ktown"
   ],
   "note": "5 West 32nd Street. Aperto fino a notte fonda il sabato. Arrivano gratis i banchan e un pesce fritto piccolo.",
   "rating": {
    "stars": 4.3,
    "count": 5029,
    "source": "Google"
   },
   "buzz": "Zuppa di tofu abbondante con piccante a scelta, tanti contorni gratis; coda all'ora di cena: arrivate presto."
  },
  {
   "id": "sat-foodgallery",
   "name": "Food Gallery 32",
   "type": "food court coreano",
   "category": "cena",
   "order": "Kimbap (rotolo di riso), bibimbap, ravioli coreani, pollo fritto coreano: ognuno sceglie il suo banco.",
   "price": "$50–70 in 4",
   "pos": [
    40.74771,
    -73.98623
   ],
   "hours": {
    "6": [
     [
      "11:00",
      "23:00"
     ]
    ]
   },
   "near": [
    "ktown",
    "macys"
   ],
   "note": "11 West 32nd Street, su più piani. Si ordina ai banchi e ci si siede insieme ai tavoli comuni.",
   "rating": {
    "stars": 4.4,
    "count": 3203,
    "source": "Google"
   },
   "buzz": "Tanti banchi diversi a prezzi contenuti, ognuno sceglie il suo; affollato, rumoroso, trovare posto è difficile.",
   "img": {
    "src": "img/food-sat-foodgallery.webp",
    "credit": "Nightscream, CC BY 3.0, via Wikimedia Commons"
   }
  },
  {
   "id": "sat-woorijip",
   "name": "Woorijip",
   "type": "cucina casalinga coreana",
   "category": "cena",
   "order": "Vaschette già pronte da prendere al banco: kimbap, pancake di verdure, pollo dolce, japchae (spaghetti di patata dolce).",
   "price": "$40–60 in 4",
   "pos": [
    40.74744,
    -73.98645
   ],
   "hours": {
    "6": [
     [
      "10:00",
      "22:00"
     ]
    ]
   },
   "near": [
    "ktown"
   ],
   "note": "12 West 32nd Street. Si paga alla cassa e si mangia ai tavolini: il più veloce dell'isolato.",
   "rating": {
    "stars": 4.5,
    "count": 3119,
    "source": "Google"
   },
   "buzz": "Piatti casalinghi già pronti, economici e freschi, microonde a disposizione; all'ora di cena posti a sedere scarsi."
  },
  {
   "id": "sat-chodanggol",
   "name": "Cho Dang Gol",
   "type": "tofu fatto in casa",
   "category": "cena",
   "order": "Zuppa di tofu fatto da loro, pancake ai frutti di mare, e il pentolone di ravioli da dividere.",
   "price": "$80–100 in 4",
   "pos": [
    40.75017,
    -73.98634
   ],
   "hours": {
    "6": [
     [
      "12:00",
      "21:30"
     ]
    ]
   },
   "near": [
    "ktown",
    "macys"
   ],
   "note": "55 West 35th Street, a 3 minuti da Macy's. Segnalato dalla guida Michelin per il rapporto qualità prezzo: il sabato sera c'è attesa.",
   "rating": {
    "stars": 4.6,
    "count": 3291,
    "source": "Google"
   },
   "buzz": "Tofu fatto in casa e porzioni generose; nelle ore di punta mezz'ora di coda, avvisi via SMS."
  },
  {
   "id": "sat-jongro",
   "name": "Jongro BBQ",
   "type": "barbecue coreano",
   "category": "cena",
   "order": "Carne da cuocere al tavolo: pancia di maiale e manzo marinato, con lattuga per fare i fagottini.",
   "price": "$140–180 in 4",
   "pos": [
    40.74756,
    -73.9869
   ],
   "hours": {
    "6": [
     [
      "11:30",
      "23:59"
     ]
    ]
   },
   "near": [
    "ktown"
   ],
   "note": "22 West 32nd Street, 2° piano. Oltre il budget e con attese di 30–90 minuti il sabato: solo se volete proprio il barbecue.",
   "rating": {
    "stars": 4.5,
    "count": 5620,
    "source": "Google"
   },
   "buzz": "Carne di qualità cotta dal personale al tavolo, ambiente rumoroso e vivace; seggioloni presenti, attese lunghe nel weekend."
  },
  {
   "id": "sat-gracestreet",
   "name": "Grace Street",
   "type": "dolci coreani",
   "category": "snack",
   "order": "Bingsu (granita di latte con frutta o sesamo) da dividere in quattro; per i grandi la cheesecake basca.",
   "price": "$30–45 in 4",
   "pos": [
    40.74769,
    -73.98649
   ],
   "hours": {
    "6": [
     [
      "11:00",
      "23:59"
     ]
    ]
   },
   "near": [
    "ktown"
   ],
   "note": "17 West 32nd Street, stesso isolato dei ristoranti.",
   "rating": {
    "stars": 4.5,
    "count": 3584,
    "source": "Google"
   },
   "buzz": "Bingsu soffice e grande, cheesecake basca lodata; quasi sempre pieno e rumoroso, trovare un tavolo è dura."
  },
  {
   "id": "sat-parisbaguette",
   "name": "Paris Baguette",
   "type": "panetteria coreana",
   "category": "snack",
   "order": "Pane dolce alla crema, un dolce al fagiolo rosso e una cioccolata calda.",
   "price": "$20–30 in 4",
   "pos": [
    40.74735,
    -73.98623
   ],
   "hours": {
    "6": [
     [
      "07:00",
      "23:00"
     ]
    ]
   },
   "near": [
    "ktown"
   ],
   "note": "6 West 32nd Street, all'angolo con la Quinta.",
   "rating": {
    "stars": 4.3,
    "count": 675,
    "source": "Tripadvisor"
   },
   "buzz": "Dolci belli e vari, caffè promosso; prezzi alti per la qualità, locale stretto e spesso affollato."
  }
 ],
 "missions": [
  {
   "id": "sat-alice",
   "stopId": "cp",
   "type": "describe",
   "title": "Il dormiglione di bronzo",
   "read": "Ehi, squadra, sono Vinnie. Un pezzo di chiave l'ho dato in custodia a un tipo che dorme sempre, perfino in mezzo a una festa del tè. È di bronzo ed è piccolissimo. Chi guarda la foto ha cinque secondi, poi la descrive all'altro senza dire nomi di personaggi: solo quanto è grande, che forma ha, cosa tiene tra le zampe e vicino a chi sta. L'altro lo cerca sulla statua. Quando l'avete trovato, toccatelo insieme e ditelo con una voce sola. Se sbagliate, il pezzo resta a me.",
   "roles": [
    "Guarda la foto per cinque secondi e descrive a parole",
    "Non vede la foto: ascolta e cerca sulla statua"
   ],
   "img": {
    "src": "img/sat-alice.webp",
    "credit": "atp tyreseus / Jere Keys from San Francisco, USA, Public domain, via Wikimedia Commons"
   },
   "parentHint": "È il Ghiro (Dormouse): un topolino che rosicchia un semino, molto più piccolo degli altri personaggi, in basso nel gruppo. Ingrandite la foto su di lui prima di mostrarla. Intorno ci sono Alice sul fungo con la gatta Dinah, il Cappellaio Matto, il Leprotto, lo Stregatto e un coniglio con l'orologio."
  },
  {
   "id": "sat-whale",
   "stopId": "amnh",
   "type": "measure",
   "title": "Quanto è lunga la balena?",
   "read": "Vinnie qui. Sotto questa balena ci sono volato sopra cento volte, e vi dico io quant'è lunga: 40 dei vostri passi, non uno di più. Non ci credete? Prima decidete insieme un numero e ditelo forte. Poi uno si mette sotto la testa e l'altro sotto la coda: camminate uno verso l'altro contando i passi ad alta voce, finché vi date il cinque. Sommate i vostri passi. Chi va più vicino, voi o io, si prende il pezzo di chiave.",
   "roles": [
    "Parte dalla testa e conta ad alta voce",
    "Parte dalla coda, conta e fa la somma"
   ],
   "vinnieBet": "40 passi",
   "parentHint": "La balena è lunga 28,7 metri (94 piedi): con passi da bambino vengono circa 55–65 passi in tutto. Si misura dal piano inferiore della sala, sotto la pancia: ci si arriva con le scale dal balcone. Se il piano inferiore è chiuso, camminate lungo il parapetto del balcone dalla testa alla coda.",
   "img": {
    "src": "img/sat-whale.webp",
    "credit": "Roland Arhelger, CC BY-SA 4.0, via Wikimedia Commons"
   }
  },
  {
   "id": "sat-prometheus",
   "stopId": "rock",
   "type": "photo-spot",
   "title": "Il fotografo di Prometeo",
   "read": "Questa foto dell'uomo d'oro che vola sopra la pista l'ha scattata un fotografo amico mio. Vinnie dice che non ritroverete mai il punto esatto da cui l'ha fatta. Guardate la foto, poi uno guida e l'altro controlla. Quando pensate di essere nel punto giusto, mettetevi lì tutti e due e alzate le braccia insieme. Se la vista non torna, il pezzo è mio.",
   "roles": [
    "Guida: decide dove spostarsi",
    "Controlla: confronta foto e vista e dice più a destra, più indietro, più in basso"
   ],
   "img": {
    "src": "img/sat-prometheus.webp",
    "credit": "Uris at English Wikipedia, Public domain, via Wikimedia Commons"
   },
   "parentHint": "Prometeo si vede dalla balaustra in fondo ai Channel Gardens (lato Quinta Strada) e dai parapetti sui lati della 49ª e della 50ª. Usate come riferimenti l'anello con lo zodiaco dietro la statua e il grattacielo sullo sfondo: quando l'anello è centrato dietro di lui come nella foto, siete nel punto giusto."
  },
  {
   "id": "sat-times",
   "stopId": "times",
   "type": "then-now",
   "title": "Times Square sotto la pioggia",
   "read": "Guardate questa foto: è Times Square in un giorno di pioggia, più di ottant'anni fa. Vinnie scommette che non trovate tre cose cambiate. Facile? Ognuno deve trovarne almeno una, e valgono solo se le dite tutte e due insieme. Avete tre minuti.",
   "roles": [
    "Guarda la foto e indica una zona",
    "Guarda la piazza vera e dice cosa c'è oggi in quel punto"
   ],
   "img": {
    "src": "img/sat-times.webp",
    "credit": "John Vachon, Public domain, via Wikimedia Commons"
   },
   "parentHint": "Differenze sicure: allora le auto passavano dappertutto, oggi metà piazza è pedonale con sedie e la scalinata rossa; le insegne erano lampadine e scritte dipinte, oggi sono schermi giganti; quasi tutti gli uomini portavano il cappello; le auto e i taxi erano di tanti modelli e colori diversi, non solo gialli."
  },
  {
   "id": "sat-bet-dog",
   "stopId": null,
   "type": "bet",
   "title": "Il cane con il cappotto",
   "read": "Vinnie scommette che da qui alla metropolitana non trovate un cane con il cappotto. Uno guarda il marciapiede a destra, l'altro quello a sinistra. Quando lo vedete, ditelo insieme: cane col cappotto!",
   "roles": [
    "Guarda il marciapiede di destra",
    "Guarda il marciapiede di sinistra"
   ],
   "vinnieBet": "Nessun cane col cappotto prima della metro",
   "parentHint": "Sull'Upper West Side, con il freddo, i cani con il cappottino o il maglione sono tantissimi: guardate davanti ai portoni con il portiere."
  },
  {
   "id": "sat-bet-pompom",
   "stopId": null,
   "type": "bet",
   "title": "Dieci pompon",
   "read": "Dalla cattedrale ai leoni della biblioteca, Vinnie scommette che non contate dieci cappelli con il pompon. Uno conta ad alta voce, l'altro conferma: vale solo se lo vedete tutti e due.",
   "roles": [
    "Avvista e conta ad alta voce",
    "Conferma ogni pompon prima che valga"
   ],
   "vinnieBet": "Meno di 10 pompon prima dei leoni",
   "parentHint": "Con il freddo sulla Quinta Strada se ne vedono molti, contano anche quelli dei bambini nei passeggini. Il tratto è di otto isolati."
  },
  {
   "id": "sat-bet-hangul",
   "stopId": null,
   "type": "bet",
   "title": "Il cerchietto coreano",
   "read": "Su questa via le insegne sono scritte in coreano. Nell'alfabeto coreano c'è una lettera che è un cerchio perfetto, come una O. Vinnie scommette che prima dell'incrocio non trovate tre insegne diverse con il cerchio. Uno trova, l'altro controlla che l'insegna sia nuova.",
   "roles": [
    "Cerca le insegne con il cerchio",
    "Controlla che ogni insegna sia diversa e tiene il conto"
   ],
   "vinnieBet": "Meno di 3 insegne prima dell'incrocio",
   "parentHint": "Il cerchio è la lettera coreana ㅇ, una delle più frequenti: è su quasi tutte le insegne della 32ª tra Broadway e la Quinta, anche ai piani alti."
  }
 ]
};
