export default {
 "id": "mon",
 "weekday": 1,
 "title": "Parco, quadri, specchi e luci",
 "vinnieMorning": "Ehi, squadra. Oggi si va dove la gente passa il tempo a guardare in alto: quadri, soffitti, e un palazzo così alto che i piccioni normali non ci arrivano. Io sì. Tenete gli occhi aperti e pure le orecchie: oggi conta anche quello che si sente.",
 "stops": [
  {
   "id": "mon-go-cp",
   "name": "Dall'hotel a Central Park, in metro",
   "kind": "move",
   "start": "08:30",
   "durationMin": 25,
   "cost": "Metro $3 a testa",
   "pos": [
    40.75731,
    -73.98979
   ],
   "radiusM": 100,
   "hook": "Tre fermate sotto l'Ottava e si esce davanti agli alberi del parco.",
   "story": "Sopra la fermata 72 St, sull'angolo di Central Park West, c'è il Dakota, uno dei palazzi più famosi di New York: ci abitava John Lennon. Strawberry Fields, la prima tappa nel parco, è dedicato a lui.",
   "look": [
    "Uscendo a 72 St: il palazzo scuro con i tetti a punta, il Dakota.",
    "Di fronte: il cancello del parco alla 72ª."
   ],
   "tips": [
    {
     "text": "Colazione e bagno in hotel prima di uscire: il bagno di Bethesda è chiuso d'inverno. Nel parco usate la Loeb Boathouse.",
     "when": "always"
    },
    {
     "text": "Il lunedì la metro è regolare, ma controllate comunque Google Maps.",
     "when": "arrive"
    },
    {
     "text": "Se piove forte: accorciate il parco (Strawberry Fields e Bethesda coperta) e andate prima al MoMA, che apre alle 10:30.",
     "when": "rain"
    },
    {
     "text": "In ritardo: taxi fino a Central Park West e 72ª, 10–15 minuti.",
     "when": "late"
    }
   ],
   "steps": [
    {
     "id": "gocp-station",
     "title": "Stazione 42 St–Port Authority",
     "where": "Dall'hotel sulla 41ª verso l'Ottava Avenue, 2 minuti. Linee A C E, direzione Uptown & The Bronx.",
     "look": [
      "I cartelli blu A C E."
     ],
     "tips": [
      "La C e la B fermano a 72 St; la A no, è espressa."
     ]
    },
    {
     "id": "gocp-train",
     "title": "La C fino a 72 St",
     "where": "Fermate: 50 St, 59 St–Columbus Circle, 72 St. Si scende alla terza.",
     "look": [
      "A 59 St salgono e scendono in tanti: è Columbus Circle, l'angolo sud-ovest del parco."
     ],
     "tips": []
    },
    {
     "id": "gocp-exit",
     "title": "Fuori, nel parco",
     "where": "Uscite su Central Park West alla 72ª. Attraversate: il cancello del parco è di fronte, Strawberry Fields è a pochi passi dentro.",
     "look": [
      "Il Dakota, il palazzo scuro con i tetti a punta, sull'angolo."
     ],
     "tips": []
    }
   ],
   "bagni": {
    "where": "Fateli in hotel. Nel parco: Loeb Boathouse (aperta tutto l'anno).",
    "cost": "Gratis",
    "clean": "Non verificato"
   }
  },
  {
   "id": "cp",
   "name": "Central Park dalla 72ª",
   "kind": "key",
   "start": "09:00",
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
   "hook": "Un'ora e un quarto di parco di lunedì mattina, quando è quasi vuoto: un mosaico regalato da Napoli, un angelo, un ponte di ghisa e una statua su cui si può salire.",
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
     "text": "Giro consigliato: Strawberry Fields, Bethesda, Alice, poi indietro al Bow Bridge e ritorno a Bethesda.",
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
     "text": "Panchine con vista: sulla terrazza di Bethesda, rivolte verso il lago.",
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
     "title": "Ritorno a Bethesda",
     "where": "Dal Bow Bridge tornate alla terrazza di Bethesda, 5 minuti lungo il lago. Da lì parte la passeggiata verso il MoMA.",
     "look": [
      "Dalla terrazza: il lago con le barche ferme d'inverno e i palazzi della Quinta sullo sfondo."
     ],
     "tips": [
      "Bagni: Loeb Boathouse, sulla riva est del lago, prima di andare."
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
   ],
   "bagni": {
    "where": "Quello di Bethesda Terrace è chiuso d'inverno. Aperti tutto l'anno: Loeb Boathouse (74ª–75ª, lato est) e Kerbs Boathouse sul laghetto delle barchette (74ª), vicino ad Alice.",
    "cost": "Gratis",
    "clean": "Il Parks Department ha dato una valutazione \"non accettabile\" a un bagno del Loeb Boathouse (data dell'ispezione non verificata)."
   }
  },
  {
   "id": "mon-go-moma",
   "name": "Dal parco al MoMA, a piedi",
   "kind": "move",
   "start": "10:15",
   "durationMin": 45,
   "cost": "Gratis",
   "pos": [
    40.77005,
    -73.97268
   ],
   "radiusM": 150,
   "hook": "Il viale degli olmi con gli scrittori di bronzo, la piazza del Plaza e poi giù per la Quinta Avenue.",
   "story": "Il Mall è l'unico viale dritto di Central Park: i progettisti lo vollero come una passeggiata elegante. Gli olmi americani che lo coprono sono tra gli ultimi grandi gruppi rimasti, perché una malattia li ha fatti sparire da quasi tutte le altre città.",
   "look": [
    "Sul Mall: la galleria di olmi e le statue degli scrittori in fondo, il Literary Walk.",
    "Uscendo alla 59ª: la fontana dorata della piazza davanti all'hotel Plaza.",
    "Sulla Quinta: le vetrine dei grandi negozi."
   ],
   "tips": [
    {
     "text": "Sono circa 25–30 minuti a piedi; tenete il margine per una sosta e per i controlli del museo.",
     "when": "always"
    },
    {
     "text": "Se piove o sono stanchi: uscite dal parco alla 72ª, metro C o B fino a 50 St, poi 5 minuti a piedi fino alla 53ª.",
     "when": "rain"
    },
    {
     "text": "In ritardo: taxi da Fifth Avenue e 60ª fino al MoMA, 5–10 minuti.",
     "when": "late"
    },
    {
     "text": "Il MoMA il lunedì apre alle 10:30.",
     "when": "always"
    }
   ],
   "steps": [
    {
     "id": "gomoma-mall",
     "title": "Il Mall",
     "where": "Dalla terrazza di Bethesda salite la scalinata: siete in fondo al Mall. Camminate verso sud sotto gli olmi.",
     "look": [
      "Le statue in fondo al viale: è la zona della sfida di Vinnie."
     ],
     "tips": []
    },
    {
     "id": "gomoma-plaza",
     "title": "Uscita sulla Quinta alla 59ª",
     "where": "In fondo al Mall continuate verso sud-est fino all'uscita della Quinta Avenue alla 59ª: la Grand Army Plaza.",
     "look": [
      "La fontana con la statua dorata.",
      "L'hotel Plaza, il castello bianco del film Mamma ho riperso l'aereo."
     ],
     "tips": [
      "Bagni non verificati al Plaza: più sicuri il MoMA o la Loeb Boathouse prima di uscire dal parco."
     ]
    },
    {
     "id": "gomoma-fifth",
     "title": "Giù per la Quinta fino alla 53ª",
     "where": "Scendete la Quinta Avenue verso sud fino alla 53ª, poi a destra: il MoMA è al numero 11, sulla destra.",
     "look": [
      "Le vetrine dei negozi di lusso tra la 57ª e la 53ª."
     ],
     "tips": [
      "Biglietti sul telefono di papà, bambini gratis."
     ]
    }
   ],
   "bagni": {
    "where": "Loeb Boathouse prima di uscire dal parco; poi il MoMA, che ha bagni su ogni piano.",
    "cost": "Gratis",
    "clean": "Non verificato"
   }
  },
  {
   "id": "mon-moma",
   "name": "MoMA",
   "kind": "key",
   "start": "11:00",
   "durationMin": 120,
   "booked": "Biglietti presi · ingresso 11:00 · bambini gratis con biglietto",
   "cost": "Già pagato (bambini gratis)",
   "pos": [
    40.76161,
    -73.9775
   ],
   "radiusM": 120,
   "hook": "Qui la Notte stellata di Van Gogh è grande come una finestra di casa, e gli orologi molli stanno su un foglio.",
   "story": "La Notte stellata è più piccola di quanto pensano tutti: 74 per 92 centimetri. Van Gogh la dipinse nel 1889 guardando dalla finestra della casa di cura dove era ricoverato, in Provenza, ma il paesino con il campanile lo aggiunse lui, a memoria. Il quadro di Dalí con gli orologi che si sciolgono è ancora più piccolo: 24 per 33 centimetri. Le Ninfee di Monet invece occupano una parete intera, tre tele lunghe insieme quasi 13 metri.",
   "look": [
    "Quinto piano, sala 501: nella Notte stellata contate le stelle. Sono 11, più la luna in alto a destra.",
    "Quinto piano, sala 517: sull'orologio arancione chiuso di Dalí, in basso a sinistra, ci sono le formiche.",
    "Quinto piano, sala 515: sedetevi sulla panca davanti alle Ninfee, guardate lo stagno da lontano e poi avvicinatevi: da vicino sono solo pennellate."
   ],
   "tips": [
    {
     "text": "Appena entrati salite subito al quinto piano: le opere famose sono quasi tutte lì. Poi scendete piano per piano.",
     "when": "arrive"
    },
    {
     "text": "Guardaroba gratuito nella hall: lasciate giacche e zaini e fate una foto al tagliando.",
     "when": "arrive"
    },
    {
     "text": "Bagni accessibili con fasciatoio su ogni piano, vicino alle scale mobili.",
     "when": "always"
    },
    {
     "text": "Nelle sale ci sono didascalie scritte apposta per i bambini: cercatele accanto a quelle normali.",
     "when": "always"
    },
    {
     "text": "Stanchi? Terrace 5, al quinto piano: tavolini e bevande con vista sul giardino. Oppure la panca delle Ninfee.",
     "when": "tired"
    },
    {
     "text": "Se siete in ritardo, fate solo il quinto piano: sale 501, 502, 515 e 517. Warhol, elicottero e giardino si saltano.",
     "when": "late"
    },
    {
     "text": "Se piove il giardino delle sculture può essere chiuso: guardatelo dall'alto da Terrace 5 (coperta).",
     "when": "rain"
    },
    {
     "text": "Non si toccano le opere, neanche nel giardino: spiegatelo prima di entrare, eviterete i richiami dei guardiani.",
     "when": "arrive"
    }
   ],
   "steps": [
    {
     "id": "moma-ingresso",
     "title": "Ingresso e guardaroba",
     "where": "Ingresso principale al 11 West 53rd Street, tra Quinta e Sesta Avenue. Biglietti sul telefono, si fanno scansionare all'entrata.",
     "look": [
      "Il grande schermo nella hall con la mappa dei piani: guardate dove sono ascensori e bagni.",
      "Il guardaroba gratuito nella hall.",
      "Le scale mobili e gli ascensori: andate al 5."
     ],
     "tips": [
      "Lasciate giacche e zaini al guardaroba e fotografate il tagliando.",
      "Bagno adesso, prima di salire: le sale del quinto piano sono le più affollate."
     ]
    },
    {
     "id": "moma-5",
     "title": "Quinto piano: i quadri famosi",
     "where": "Quinto piano, collezione dal 1880 al 1940 (gallerie Alfred H. Barr). Partite da qui perché a mezzogiorno la folla cresce.",
     "look": [
      "Notte stellata (sala 501)",
      "Les Demoiselles d'Avignon di Picasso (sala 502)",
      "Ninfee di Monet (sala 515) e orologi molli di Dalí (sala 517)"
     ],
     "tips": [
      "Le sale sono numerate sullo stipite della porta: seguite i numeri 501, 502, poi 515 e 517."
     ],
     "options": [
      {
       "label": "Se c'è folla davanti alla Notte stellata",
       "text": "Andate prima alle Ninfee (sala 515), tornate dopo un quarto d'ora."
      },
      {
       "label": "Se avete solo 30 minuti",
       "text": "Notte stellata, orologi molli, Ninfee. Stop."
      }
     ],
     "steps": [
      {
       "id": "moma-501",
       "title": "Sala 501 · La Notte stellata",
       "where": "Quinto piano, sala 501, nelle prime sale della collezione.",
       "look": [
        "Il cipresso nero a sinistra che sale come una fiamma.",
        "Le stelle: contatele, sono 11, più la luna in alto a destra.",
        "Il paesino in basso con il campanile appuntito: è la parte che Van Gogh ha inventato."
       ],
       "tips": [
        "Non mettetevi al centro dove si accalcano tutti: avvicinatevi di lato, si vede meglio lo spessore del colore.",
        "Qui c'è la missione di Vinnie: fatela da un pò lontano, non serve stare in prima fila."
       ]
      },
      {
       "id": "moma-502",
       "title": "Sala 502 · Les Demoiselles d'Avignon",
       "where": "Quinto piano, sala 502, accanto alla 501.",
       "look": [
        "Le due donne a destra hanno la faccia come una maschera.",
        "La frutta sul tavolino in basso al centro: c'è una fetta di melone.",
        "Quanto è grande: quasi due metri e mezzo per lato, più alta del papà."
       ],
       "tips": [
        "Domanda per i bambini: quante donne ci sono? Sono cinque, ma una è nascosta a metà."
       ]
      },
      {
       "id": "moma-515",
       "title": "Sala 515 · Le Ninfee di Monet",
       "where": "Quinto piano, sala 515: una sala intera solo per loro.",
       "look": [
        "Tre tele una accanto all'altra, insieme quasi 13 metri.",
        "Il cielo e le nuvole riflessi nell'acqua: cercate dove finisce lo stagno e inizia il cielo.",
        "Da vicino: pennellate larghe come un dito, che da lontano diventano fiori."
       ],
       "tips": [
        "C'è una panca in mezzo alla sala: cinque minuti seduti qui rimettono in piedi tutti."
       ]
      },
      {
       "id": "moma-517",
       "title": "Sala 517 · Gli orologi molli di Dalí",
       "where": "Quinto piano, sala 517.",
       "look": [
        "La dimensione: più o meno un foglio di quaderno.",
        "L'orologio arancione chiuso coperto di formiche, in basso a sinistra.",
        "La strana creatura addormentata al centro con un orologio sopra, come una coperta."
       ],
       "tips": [
        "Spesso c'è una piccola coda: un minuto davanti basta, poi lasciate il posto."
       ]
      },
      {
       "id": "moma-terrace",
       "title": "Pausa · Terrace 5",
       "where": "Quinto piano, il bar con la terrazza coperta sopra il giardino.",
       "look": [
        "Il giardino delle sculture dall'alto.",
        "La vasca lunga con le statue riflesse.",
        "I grattacieli che guardano dentro il museo da sopra il muro."
       ],
       "tips": [
        "Bevande e piccoli piatti; si entra solo con il biglietto del museo."
       ]
      }
     ]
    },
    {
     "id": "moma-4",
     "title": "Quarto piano: le zuppe di Warhol",
     "where": "Quarto piano, collezione dal 1940 al 1970. Le zuppe Campbell risultano in sala 412: se non le vedete, chiedete \"Campbell's Soup Cans?\" a un guardiano.",
     "look": [
      "Sono 32 tele, una per ogni gusto di zuppa che si vendeva nel 1962.",
      "Leggete i gusti sulle etichette: cercate Clam Chowder, la zuppa di vongole.",
      "Sembrano stampate ma sono dipinte a mano: guardate da vicino i bordi delle lettere."
     ],
     "tips": [
      "Gioco veloce: ognuno sceglie la zuppa che non assaggerebbe mai."
     ],
     "options": [
      {
       "label": "Se sono stanchi",
       "text": "Saltate il quarto piano e andate dritti al giardino."
      }
     ]
    },
    {
     "id": "moma-3",
     "title": "Terzo piano: design e l'elicottero",
     "where": "Terzo piano, gallerie di architettura e design. Il catalogo del museo indica l'elicottero Bell-47D1 esposto al terzo piano: chiedete \"the helicopter\" ai guardiani.",
     "look": [
      "L'elicottero appeso: una bolla trasparente per il pilota e una coda fatta di tubi, come un traliccio.",
      "Oggetti di tutti i giorni messi in mostra come quadri: sedie, lampade, telefoni, computer.",
      "Cercate un oggetto che avete anche a casa."
     ],
     "tips": [
      "Se in cinque minuti non trovate l'elicottero, lasciate perdere: il giardino vale di più."
     ],
     "options": [
      {
       "label": "Se avete 10 minuti",
       "text": "Solo l'elicottero, poi giù in giardino."
      }
     ]
    },
    {
     "id": "moma-giardino",
     "title": "Giardino delle sculture",
     "where": "Piano terra: dalla hall si esce nel giardino. Aperto se il tempo lo permette.",
     "look": [
      "La grande statua di Balzac di Rodin: un gigante avvolto in un mantello.",
      "La vasca lunga con le statue che si specchiano.",
      "Alzate gli occhi: i grattacieli tutto intorno, da qui sembrano vicinissimi."
     ],
     "tips": [
      "Qui si può mangiare uno snack nelle zone indicate, non nelle sale.",
      "Uscite dal museo dalla hall: siete già a due minuti dal carretto halal della 53rd."
     ]
    }
   ],
   "missionId": "mon-m-moma",
   "nearby": [
    {
     "pos": [
      40.76177,
      -73.97906
     ],
     "text": "Angolo 53rd Street e Sesta Avenue: i carretti di The Halal Guys, nati qui come carretto di hot dog nel 1990. La fila è la prova che siete nel posto giusto.",
     "kind": "curio"
    },
    {
     "pos": [
      40.76034,
      -73.97507
     ],
     "text": "Paley Park, sulla 53rd poco dopo la Quinta: un parchetto grande come un cortile con una cascata che copre il rumore della città. In inverno la cascata può essere spenta.",
     "kind": "view"
    },
    {
     "pos": [
      40.75981,
      -73.97928
     ],
     "text": "Radio City Music Hall: in questa stagione ci ballano le Rockettes nello spettacolo di Natale, tutte in fila come soldatini.",
     "kind": "curio"
    }
   ],
   "bagni": {
    "where": "Bagni su tutti i piani, con fasciatoi, accanto alle scale mobili. Bagni neutri ai piani 1, 3W, 5 e T1.",
    "cost": "Gratis (compreso nel biglietto)",
    "clean": "Non verificato"
   }
  },
  {
   "id": "mon-pranzo",
   "name": "Pranzo vicino al MoMA",
   "kind": "key",
   "start": "13:00",
   "durationMin": 50,
   "cost": "$40–80 in 4",
   "pos": [
    40.76397,
    -73.97848
   ],
   "radiusM": 120,
   "hook": "Un hamburger dietro una tenda in un hotel di lusso, oppure il caffè del museo: si mangia seduti, senza correre.",
   "story": "Midtown è il quartiere degli uffici: a pranzo i newyorkesi mangiano in fretta, spesso in piedi o dai carretti per strada. Voi invece vi sedete.",
   "look": [
    "Davanti ai grattacieli: i carretti del cibo halal con il fumo che sale.",
    "Se andate al Burger Joint: la tenda e il piccolo hamburger luminoso nella hall dell'hotel."
   ],
   "tips": [
    {
     "text": "Burger Joint, 119 West 56th Street, nell'hotel ex Parker Meridien: 5 minuti a piedi dal MoMA. Orari e pagamento vanno verificati prima.",
     "when": "arrive"
    },
    {
     "text": "Restare dentro: Café 2, al secondo piano del MoMA, pranzo all'italiana adatto ai bambini.",
     "when": "always"
    },
    {
     "text": "Veloce: piatto halal da un carretto e si mangia sulle panchine del giardino pubblico dietro il museo.",
     "when": "late"
    },
    {
     "text": "Se piove: Café 2 senza uscire dal museo.",
     "when": "rain"
    }
   ],
   "steps": [],
   "bagni": {
    "where": "Nel locale dove mangiate, oppure al MoMA prima di uscire.",
    "cost": "Gratis se consumate",
    "clean": "Non verificato"
   }
  },
  {
   "id": "mon-go-gct",
   "name": "A piedi verso Grand Central",
   "kind": "move",
   "start": "13:55",
   "durationMin": 30,
   "cost": "Gratis",
   "pos": [
    40.75866,
    -73.97785
   ],
   "radiusM": 120,
   "hook": "Radio City, il Rockefeller, Atlante con il cielo sulle spalle e la biblioteca coi leoni: mezz'ora di passeggiata da cartolina.",
   "story": "La Quinta Avenue è la strada dei negozi più famosa di New York. Tra la 50ª e la 51ª, davanti alla cattedrale, c'è Atlante, la statua di bronzo del Rockefeller Center: regge non la Terra, ma il cielo.",
   "look": [
    "Sulla Sesta: Radio City Music Hall, con la scritta rossa verticale.",
    "Sulla Quinta, davanti a St. Patrick's: la statua di Atlante.",
    "Alla 42ª: i leoni di pietra della biblioteca."
   ],
   "tips": [
    {
     "text": "Sono circa 25–30 minuti. Se sono stanchi: taxi fino a Grand Central, 10–15 minuti.",
     "when": "always"
    },
    {
     "text": "Ingresso del SUMMIT alle 15:00: non fermatevi troppo per strada.",
     "when": "late"
    },
    {
     "text": "Se piove: metro E o M da 5 Av/53 St fino a Lexington Av/53 St, poi linea 6 fino a Grand Central.",
     "when": "rain"
    }
   ],
   "steps": [
    {
     "id": "gogct-radio",
     "title": "Giù per la Sesta",
     "where": "Dalla 56ª scendete la Sesta Avenue verso sud fino alla 50ª.",
     "look": [
      "All'angolo della 50ª: Radio City Music Hall."
     ],
     "tips": []
    },
    {
     "id": "gogct-rock",
     "title": "Attraverso il Rockefeller",
     "where": "Alla 50ª girate a sinistra ed entrate nel Rockefeller Center: passate accanto alla pista e risalite i Channel Gardens fino alla Quinta.",
     "look": [
      "L'albero di Natale già montato sopra la pista, ancora spento."
     ],
     "tips": []
    },
    {
     "id": "gogct-atlas",
     "title": "Atlante e la Quinta",
     "where": "Sulla Quinta, guardate a sinistra tra la 50ª e la 51ª: c'è Atlante. Poi scendete la Quinta verso sud fino alla 42ª.",
     "look": [
      "Atlante: cosa regge? È la sfida di Vinnie."
     ],
     "tips": []
    },
    {
     "id": "gogct-42",
     "title": "Sulla 42ª fino a Grand Central",
     "where": "Alla 42ª, davanti alla biblioteca, girate a sinistra verso est: Grand Central è dopo Madison Avenue, l'ingresso principale è all'angolo con Vanderbilt Avenue.",
     "look": [
      "L'orologio e le statue sulla facciata di Grand Central."
     ],
     "tips": []
    }
   ],
   "bagni": {
    "where": "Lungo la strada: Rockefeller Center (Concourse, sotto la piazza). Poi Grand Central, al piano di sotto.",
    "cost": "Gratis",
    "clean": "Non verificato"
   }
  },
  {
   "id": "mon-gct",
   "name": "Grand Central Terminal",
   "kind": "optional",
   "start": "14:25",
   "durationMin": 35,
   "cost": "Gratis",
   "pos": [
    40.75269,
    -73.97725
   ],
   "radiusM": 150,
   "cover": {
    "img": "img/mon-gct.webp",
    "credit": "D. Benjamin Miller, CC0, via Wikimedia Commons"
   },
   "hook": "Alzate gli occhi: il cielo dipinto sul soffitto è al contrario, e in un angolo è rimasto sporco apposta.",
   "story": "La stazione ha aperto nel 1913. Il soffitto verde con le costellazioni è dipinto rovesciato, come se il cielo si guardasse da fuori. Negli anni Novanta l'hanno ripulito dal nero di decenni di fumo di sigaretta, ma hanno lasciato un rettangolo sporco, per far vedere com'era prima. Le ghiande che trovate dappertutto sono il simbolo dei Vanderbilt, la famiglia dei treni, con il motto: da una ghianda nasce una quercia.",
   "look": [
    "Al centro della sala grande, sopra il chiosco delle informazioni: l'orologio a quattro facce, che si dice valga milioni. In cima ha una ghianda dorata.",
    "Il soffitto: cercate il granchio, la costellazione del Cancro, verso l'angolo nord-ovest (lato Vanderbilt Avenue). Lì vicino c'è il rettangolo scuro.",
    "Al piano di sotto, davanti all'Oyster Bar, la volta di piastrelle: è la galleria dei sussurri."
   ],
   "tips": [
    {
     "text": "Entrate dalla 42nd Street: passate da Vanderbilt Hall, dove in questo periodo c'è il mercatino di Natale (lunedì 10–19).",
     "when": "arrive"
    },
    {
     "text": "Se siete in ritardo: solo orologio e soffitto, cinque minuti, poi dritti al SUMMIT, che ha l'ingresso dentro la stazione.",
     "when": "late"
    },
    {
     "text": "Seduti: al piano di sotto (Dining Concourse) ci sono tavoli in mezzo ai banchi del cibo.",
     "when": "tired"
    },
    {
     "text": "Bagni al piano di sotto, nel Dining Concourse.",
     "when": "always"
    },
    {
     "text": "Se piove, qui siete al coperto: dalla stazione arrivate al SUMMIT senza uscire.",
     "when": "rain"
    }
   ],
   "steps": [
    {
     "id": "gct-vanderbilt",
     "title": "Vanderbilt Hall e il mercatino",
     "where": "Entrata della 42nd Street (lato sud), tra Park e Vanderbilt Avenue: la prima grande sala.",
     "look": [
      "I lampadari con le ghiande: contatele mentre passate.",
      "Le bancarelle del mercatino di Natale al coperto.",
      "In fondo alla sala, la discesa verso il piano di sotto e l'Oyster Bar."
     ],
     "tips": [
      "Mercatino aperto lunedì dalle 10 alle 19: giro veloce, 10 minuti al massimo."
     ]
    },
    {
     "id": "gct-sussurri",
     "title": "La galleria dei sussurri",
     "where": "Scendete la rampa verso il Dining Concourse: davanti all'ingresso dell'Oyster Bar c'è uno spazio basso a volta, con quattro pilastri e piastrelle a spina di pesce.",
     "look": [
      "Le piastrelle della volta: sono le stesse del soffitto dell'Oyster Bar, posate senza travi.",
      "I quattro angoli: si parla in diagonale, faccia contro il muro.",
      "Le persone che parlano agli angoli: lo sanno in tanti, a volte c'è la fila."
     ],
     "tips": [
      "Qui c'è la missione di Vinnie.",
      "Parlate piano e vicinissimi al muro: urlare non serve, anzi."
     ]
    },
    {
     "id": "gct-treni",
     "title": "Il negozio-museo dei treni",
     "where": "New York Transit Museum Gallery & Store, nel passaggio della navetta (Shuttle Passage) che parte dalla sala grande, accanto all'ufficio del capostazione. Ingresso libero, lunedì 10–19:30.",
     "look": [
      "Il trenino di Natale: in questa stagione c'è un plastico con i treni di New York che corrono (ingresso libero).",
      "Le vecchie insegne della metropolitana.",
      "I giochi a forma di vagone, se volete un ricordo che non sia una calamita."
     ],
     "tips": [
      "Se avete poco tempo, saltate questo e andate alla sala grande."
     ]
    },
    {
     "id": "gct-concourse",
     "title": "La sala grande: orologio e cielo",
     "where": "Main Concourse, il cuore della stazione. Mettetevi vicino al chiosco delle informazioni al centro.",
     "look": [
      "L'orologio a quattro facce sul chiosco",
      "Il soffitto con le costellazioni",
      "Le due scalinate gemelle, a est e a ovest"
     ],
     "tips": [
      "Prima fate la scommessa di Vinnie sul soffitto, poi spiegate il resto."
     ],
     "steps": [
      {
       "id": "gct-orologio",
       "title": "L'orologio d'opale",
       "where": "Sopra il chiosco delle informazioni, al centro della sala.",
       "look": [
        "Le quattro facce: si dice che siano di opale e che valgano milioni di dollari.",
        "La ghianda dorata in cima: è il simbolo dei Vanderbilt.",
        "Le persone che si danno appuntamento qui sotto: è il punto d'incontro più famoso di New York."
       ],
       "tips": []
      },
      {
       "id": "gct-soffitto",
       "title": "Il cielo al contrario",
       "where": "Il soffitto della sala grande, alto come un palazzo di dieci piani.",
       "look": [
        "Le costellazioni dorate: il cielo è rovesciato, est e ovest scambiati.",
        "Il granchio (Cancro) verso l'angolo nord-ovest, e lì vicino il rettangolo scuro mai pulito.",
        "Le piccole luci delle stelle: si accendono davvero."
       ],
       "tips": [
        "Per vedere il rettangolo scuro mettetevi vicino alla scalinata ovest e guardate verso l'angolo in alto, sopra i binari."
       ]
      },
      {
       "id": "gct-uscita",
       "title": "Verso il SUMMIT",
       "where": "Dalla sala grande andate verso ovest (lato Vanderbilt Avenue): l'ingresso del SUMMIT è nella hall dei treni sotto Vanderbilt Avenue.",
       "look": [
        "I cartelli SUMMIT One Vanderbilt.",
        "Le porte a vetri della hall dei treni.",
        "La fila dei controlli: mettetevi in coda 10–15 minuti prima delle 15."
       ],
       "tips": []
      }
     ]
    }
   ],
   "missionId": "mon-m-gct",
   "nearby": [
    {
     "pos": [
      40.7526,
      -73.97733
     ],
     "text": "La galleria dei sussurri davanti all'Oyster Bar: nessuno sa se l'effetto è voluto o un caso delle volte di piastrelle.",
     "kind": "curio"
    },
    {
     "pos": [
      40.75269,
      -73.97725
     ],
     "text": "In Madagascar (il cartone) la zebra Marty scappa dallo zoo e finisce proprio qui, in mezzo ai pendolari.",
     "kind": "film"
    },
    {
     "pos": [
      40.7516,
      -73.97534
     ],
     "text": "Uscite su Lexington Avenue angolo 42nd e alzate la testa: la punta a squame del Chrysler Building è lì, a un isolato.",
     "kind": "view"
    }
   ],
   "bagni": {
    "where": "Al livello inferiore (Dining Concourse), due blocchi. Bagni per donne e famiglie anche al piano superiore, nell'ufficio del Station Master vicino al binario 37.",
    "cost": "Gratis",
    "clean": "Non verificato; una scheda locale dice \"bagni puliti\""
   }
  },
  {
   "id": "mon-summit",
   "name": "SUMMIT One Vanderbilt",
   "kind": "key",
   "start": "15:00",
   "durationMin": 135,
   "booked": "Biglietti presi · ingresso 15:00",
   "cost": "Già pagato",
   "pos": [
    40.75284,
    -73.97852
   ],
   "radiusM": 120,
   "cover": {
    "img": "img/mon-summit.webp",
    "credit": "Changku88, CC BY-SA 4.0, via Wikimedia Commons"
   },
   "hook": "Uno specchio sotto i piedi, e sotto lo specchio trecento metri di vuoto.",
   "story": "One Vanderbilt è alto 427 metri ed è stato finito nel 2020, attaccato a Grand Central. Le stanze in cima sono un'opera d'arte: specchi su pavimento e pareti che moltiplicano la città all'infinito. Le due scatole di vetro di Levitation sporgono fuori dal palazzo, sopra Madison Avenue, a più di 320 metri d'altezza. Oggi il sole tramonta verso le 16:30, un pò a destra dell'Empire State Building.",
   "look": [
    "Nella prima stanza a specchi (Transcendence, piano 91): a est il Chrysler con la punta a squame, a sud l'Empire State.",
    "Levitation, piano 92: guardate giù tra i piedi, i taxi gialli su Madison Avenue sembrano formiche.",
    "Affinity, piano 91: la stanza dei palloncini argentati che galleggiano. Si possono spingere piano."
   ],
   "tips": [
    {
     "text": "Pantaloni, non gonne: i pavimenti sono specchi. All'ingresso danno i copriscarpe e, se non li avete, occhiali da sole gratis: prendeteli, in alcune stanze la luce acceca.",
     "when": "arrive"
    },
    {
     "text": "Niente guardaroba: tenete addosso o in mano le giacche. Zaini normali ammessi, valigie no.",
     "when": "arrive"
    },
    {
     "text": "Il percorso va solo in salita: una volta sul piano di sopra non si torna giù. Fate con calma il 91 e il 92.",
     "when": "always"
    },
    {
     "text": "Il biglietto non ha limite di tempo: restate fino al tramonto (verso le 16:30) e alle luci accese, poi Bryant Park è a 8 minuti a piedi.",
     "when": "always"
    },
    {
     "text": "Bagni su ogni livello; alcuni sono negli angoli con le vetrate fino a terra.",
     "when": "always"
    },
    {
     "text": "Stanchi: al piano 93 c'è Après, con divanetti, bevande e snack.",
     "when": "tired"
    },
    {
     "text": "Se arrivate in ritardo sull'ingresso delle 15, andate comunque alla coda e mostrate il biglietto: chiedete al personale.",
     "when": "late"
    },
    {
     "text": "L'ascensore di vetro Ascent si paga a parte: se non è nel vostro biglietto, non serve.",
     "when": "always"
    }
   ],
   "steps": [
    {
     "id": "summit-ingresso",
     "title": "Ingresso e controlli",
     "where": "Dentro Grand Central: dalla sala grande verso ovest, hall dei treni sotto Vanderbilt Avenue. In alternativa le porte accanto alla TD Bank sulla 42nd Street. La hall principale di One Vanderbilt non porta al SUMMIT.",
     "look": [
      "Il braccialetto con il codice per le foto.",
      "I copriscarpe da mettere prima dell'ascensore.",
      "La cassetta degli occhiali da sole gratis."
     ],
     "tips": [
      "Bagno prima di salire: il primo è dopo 15–20 minuti di percorso.",
      "C'è anche una scansione del viso: serve per far comparire la vostra faccia nelle nuvole più avanti."
     ]
    },
    {
     "id": "summit-91",
     "title": "Piano 91: specchi, nuvole, palloncini",
     "where": "Si esce dall'ascensore al piano 91.",
     "look": [
      "Transcendence 1",
      "Reflect",
      "Affinity"
     ],
     "tips": [
      "Qui fate la missione di Vinnie: il Chrysler si vede dal lato est."
     ],
     "steps": [
      {
       "id": "summit-transcendence1",
       "title": "Transcendence 1",
       "where": "La prima grande stanza a specchi, con vetrate dal pavimento al soffitto.",
       "look": [
        "A est il Chrysler Building, vicinissimo.",
        "A sud l'Empire State Building.",
        "Sdraiatevi un attimo e guardate il soffitto: vi vedete appesi sopra la città."
       ],
       "tips": [
        "Gli occhiali da sole servono soprattutto qui."
       ]
      },
      {
       "id": "summit-reflect",
       "title": "Reflect",
       "where": "Stanza più piccola dopo Transcendence.",
       "look": [
        "Le sculture d'acciaio lucidissimo sul pavimento, come nuvole cadute (opera di Yayoi Kusama).",
        "Le vostre facce deformate nelle nuvole.",
        "Il riflesso della città dentro ogni nuvola."
       ],
       "tips": [
        "Non si toccano."
       ]
      },
      {
       "id": "summit-affinity",
       "title": "Affinity",
       "where": "La stanza dei palloncini argentati.",
       "look": [
        "I palloncini che galleggiano: spingeteli piano, verso l'alto.",
        "Le pareti a specchio che li moltiplicano.",
        "La foto da fare: i bambini in mezzo, solo le teste fuori dai palloncini."
       ],
       "tips": [
        "È la stanza dove i bambini vorrebbero restare: datevi 10 minuti e poi avanti."
       ]
      }
     ]
    },
    {
     "id": "summit-92",
     "title": "Piano 92: le scatole di vetro",
     "where": "Si sale al piano 92.",
     "look": [
      "Transcendence 2",
      "Levitation",
      "Unity"
     ],
     "tips": [],
     "options": [
      {
       "label": "Per il tramonto nella stanza a specchi",
       "text": "Se siete qui verso le 16:15, restate in Transcendence 2 fino al tramonto: il cielo arancione rimbalza su tutti gli specchi. Poi salite al 93 per le luci."
      }
     ],
     "steps": [
      {
       "id": "summit-transcendence2",
       "title": "Transcendence 2",
       "where": "Il piano alto della stanza a specchi.",
       "look": [
        "Le aperture nel pavimento che fanno vedere il piano di sotto.",
        "Verso sud-ovest: lì tramonta il sole, un pò a destra dell'Empire State.",
        "Il fiume Hudson e il New Jersey in fondo, a ovest."
       ],
       "tips": []
      },
      {
       "id": "summit-levitation",
       "title": "Levitation",
       "where": "Le due scatole di vetro sporgenti sopra Madison Avenue.",
       "look": [
        "Il vuoto tra i piedi: a più di 320 metri.",
        "I taxi gialli su Madison Avenue, sotto di voi.",
        "Il personale che fa le foto (si pagano a parte, non obbligatorie)."
       ],
       "tips": [
        "Se un bambino ha paura, va bene guardare da fuori: il vetro c'è anche ai lati.",
        "Si fa la fila per entrare nelle scatole: pochi minuti a testa."
       ]
      },
      {
       "id": "summit-unity",
       "title": "Unity",
       "where": "Dopo Levitation.",
       "look": [
        "Cercate le vostre facce tra le nuvole: sono quelle della scansione all'ingresso.",
        "Contate chi della famiglia compare per primo.",
        "La città che si accende sotto."
       ],
       "tips": []
      }
     ]
    },
    {
     "id": "summit-93",
     "title": "Piano 93: Après e la terrazza",
     "where": "L'ultimo livello: sala con bar e una terrazza all'aperto protetta da vetri.",
     "look": [
      "La terrazza: l'Empire State a sud, vicinissimo.",
      "Il tramonto verso sud-ovest, sopra il New Jersey.",
      "Le luci dei palazzi che si accendono una alla volta dopo il tramonto."
     ],
     "tips": [
      "In terrazza fa freddo e tira vento: guanti e cappelli.",
      "All'uscita: a destra l'ascensore Ascent (solo se incluso), dritto il negozio e l'ascensore per scendere."
     ],
     "options": [
      {
       "label": "Se avete Ascent",
       "text": "L'ascensore di vetro sale all'esterno del palazzo per circa due minuti: è il punto più alto della visita."
      },
      {
       "label": "Se avete fame",
       "text": "Da Après ci sono snack e bevande calde, ma la cena vera è a Bryant Park."
      }
     ]
    }
   ],
   "missionId": "mon-m-summit",
   "nearby": [
    {
     "pos": [
      40.7516,
      -73.97534
     ],
     "text": "Il Chrysler Building, a est: la punta d'acciaio a raggiera è fatta come i cofani delle auto Chrysler degli anni Venti.",
     "kind": "view"
    },
    {
     "pos": [
      40.74844,
      -73.98566
     ],
     "text": "L'Empire State Building, a sud-ovest: stasera il sole scende un pò alla sua destra.",
     "kind": "view"
    }
   ],
   "bagni": {
    "where": "Bagni solo ai piani alti del SUMMIT. Fateli prima di salire nel Dining Concourse di Grand Central, a pochi minuti, è il bagno pubblico più vicino.",
    "cost": "Gratis",
    "clean": "Non verificato"
   }
  },
  {
   "id": "mon-bryant",
   "name": "Bryant Park di sera: Winter Village",
   "kind": "key",
   "start": "17:30",
   "durationMin": 90,
   "cost": "Mercatino gratis · cena $60–100 in 4 · giostra $6 a giro",
   "pos": [
    40.75367,
    -73.98367
   ],
   "radiusM": 200,
   "cover": {
    "img": "img/mon-bryant.webp",
    "credit": "Kiran891, CC BY-SA 4.0, via Wikimedia Commons"
   },
   "hook": "Di sera le casette si accendono e la pista sembra un vassoio di luce in mezzo ai grattacieli.",
   "story": "Sotto il prato di Bryant Park ci sono i magazzini della biblioteca qui accanto: chilometri di scaffali di libri sottoterra. Negli anni Settanta era un parco da evitare; oggi d'inverno ci pattinano migliaia di persone, gratis per chi ha i pattini suoi. Le casette del mercatino sono circa 180 e più della metà si trova solo qui. Quest'anno c'è anche la casetta di Serendipity3, il ristorante famoso per la cioccolata ghiacciata.",
   "look": [
    "La Lodge, all'angolo nord-est della pista: una sala riscaldata dove si mangia guardando i pattinatori. Dietro, il retro illuminato della biblioteca.",
    "Le Carrousel, sul lato della 40th Street: una giostra alla francese con musica francese.",
    "Le file di casette di vetro intorno alla pista: cercate quella di Serendipity3 e quella greca di Koukli."
   ],
   "tips": [
    {
     "text": "Il lunedì le casette chiudono alle 20: girate prima il mercatino, mangiate dopo alla Lodge, che resta aperta fino a tardi.",
     "when": "arrive"
    },
    {
     "text": "Bagni pubblici del parco sul lato della 42nd Street, verso la biblioteca: puliti, con custode. Tra i più curati di New York.",
     "when": "always"
    },
    {
     "text": "Stanchi o infreddoliti: dentro la Lodge si sta al caldo e seduti, con vista pista.",
     "when": "tired"
    },
    {
     "text": "Se piove: la Lodge è coperta e riscaldata; le casette hanno il tetto ma i corridoi no.",
     "when": "rain"
    },
    {
     "text": "Se arrivate dopo le 19:30, saltate il mercatino: cena alla Lodge o pizza da Joe's sulla 40th e Broadway, a 5 minuti.",
     "when": "late"
    },
    {
     "text": "Le Carrousel di solito gira dalle 11 alle 20, se il tempo lo permette.",
     "when": "always"
    }
   ],
   "nearby": [
    {
     "pos": [
      40.75343,
      -73.98388
     ],
     "text": "Le Carrousel: giostra a tema francese, gira con le canzoni francesi. $6 a giro.",
     "kind": "curio"
    },
    {
     "pos": [
      40.75405,
      -73.98264
     ],
     "text": "I bagni pubblici di Bryant Park: famosi per i fiori freschi e il custode.",
     "kind": "curio"
    },
    {
     "pos": [
      40.75322,
      -73.98225
     ],
     "text": "La biblioteca qui accanto: Ghostbusters comincia proprio qui, con il fantasma tra gli scaffali.",
     "kind": "film"
    },
    {
     "pos": [
      40.75305,
      -73.98164
     ],
     "text": "I due leoni della biblioteca sulla Quinta, Pazienza e Fortezza: d'inverno a volte hanno le ghirlande.",
     "kind": "curio"
    }
   ],
   "bagni": {
    "where": "Dal lato della 42nd Street, a metà isolato dietro la biblioteca. Attenzione all'orario: una guida locale li dà aperti fino alle 22 lun–mer e fino a mezzanotte gio–dom a dicembre, un'altra fonte dice chiusura alle 19 d'inverno. Se serve di sera, controllate.",
    "cost": "Gratis",
    "clean": "Ottima: tra i migliori bagni pubblici di New York"
   }
  },
  {
   "id": "mon-saks",
   "name": "Saks: luci e vetrine",
   "kind": "optional",
   "start": "19:05",
   "durationMin": 25,
   "cost": "Gratis",
   "pos": [
    40.75802,
    -73.97695
   ],
   "radiusM": 150,
   "cover": {
    "img": "img/mon-saks.webp",
    "credit": "Anthony Quintano from Mount Laurel, United States, CC BY 2.0, via Wikimedia Commons"
   },
   "hook": "Stasera la facciata di Saks si accende per la prima volta dell'anno: siete lì la sera giusta.",
   "story": "Ogni inverno la facciata del grande magazzino sulla Quinta diventa uno spettacolo di luci a musica, ripetuto per tutta la sera. Nel 2024 non c'era stato, ed è tornato l'anno dopo. Quest'anno parte proprio di lunedì, insieme alle vetrine: le sei centrali raccontano un viaggio animato dentro New York. Dall'altra parte della strada c'è l'albero del Rockefeller Center, già montato ma ancora spento.",
   "look": [
    "La facciata intera: guardatela dal marciapiede opposto, davanti ai Channel Gardens del Rockefeller Center.",
    "Le sei vetrine centrali: cercate i posti di New York che avete visto in questi giorni.",
    "A destra, guardando Saks: la cattedrale di St. Patrick illuminata."
   ],
   "tips": [
    {
     "text": "La prima sera c'è molta gente: tenete i bambini per mano e decidete un punto d'incontro (la statua di Atlante, sulla Quinta tra 50th e 51st).",
     "when": "arrive"
    },
    {
     "text": "Lo scorso anno lo spettacolo ripartiva ogni 10 minuti, dalle 17 alle 23: se c'è troppa folla, aspettate il giro dopo.",
     "when": "always"
    },
    {
     "text": "Se sono stanchi, saltatelo: da Bryant Park l'hotel è più vicino che da qui.",
     "when": "tired"
    },
    {
     "text": "Dopo: a piedi verso l'hotel, circa 20 minuti, giù per la Sesta Avenue e poi a destra sulla 41ª. Oppure taxi.",
     "when": "late"
    }
   ],
   "nearby": [
    {
     "pos": [
      40.75864,
      -73.97842
     ],
     "text": "La pista del Rockefeller Center: in Mamma ho riperso l'aereo Kevin ritrova la mamma proprio davanti al grande albero qui sopra.",
     "kind": "film"
    },
    {
     "pos": [
      40.75856,
      -73.97636
     ],
     "text": "St. Patrick's Cathedral, di fronte a Saks: di sera le vetrate sono illuminate da dentro.",
     "kind": "curio"
    }
   ],
   "bagni": {
    "where": "Bagni su quasi tutti i piani. Salite ai piani alti.",
    "cost": "Gratis",
    "clean": "Generalmente buona; non verificato di persona"
   }
  },
  {
   "id": "mon-go-hotel",
   "name": "Rientro in hotel a piedi",
   "kind": "move",
   "start": "19:35",
   "durationMin": 25,
   "cost": "Gratis",
   "pos": [
    40.75689,
    -73.98273
   ],
   "radiusM": 120,
   "hook": "L'ultima passeggiata della sera giù per la Sesta, contando le strade in inglese.",
   "story": "A Manhattan le strade sono numerate: le Street vanno da est a ovest e salgono di numero andando verso nord, le Avenue vanno da nord a sud. Per questo è quasi impossibile perdersi: basta leggere l'angolo.",
   "look": [
    "Ai semafori: i cartelli verdi con il numero della strada.",
    "Alla 42ª: il buio di Bryant Park con la pista illuminata."
   ],
   "tips": [
    {
     "text": "Sono circa 20 minuti: Sesta Avenue verso sud fino alla 41ª, poi a destra fino all'hotel.",
     "when": "always"
    },
    {
     "text": "Stanchi: taxi, 5–10 minuti.",
     "when": "tired"
    }
   ],
   "steps": [
    {
     "id": "gohm-6th",
     "title": "Verso la Sesta",
     "where": "Da Saks camminate verso ovest sulla 49ª o la 50ª fino alla Sesta Avenue, poi girate a sinistra verso sud.",
     "look": [
      "Radio City illuminata all'angolo della 50ª."
     ],
     "tips": []
    },
    {
     "id": "gohm-down",
     "title": "Giù per la Sesta, contando",
     "where": "Sulla Sesta verso sud dalla 49ª alla 41ª.",
     "look": [
      "I numeri delle strade: è la sfida di Vinnie."
     ],
     "tips": []
    },
    {
     "id": "gohm-41",
     "title": "Sulla 41ª fino all'hotel",
     "where": "Alla 41ª girate a destra (verso ovest): passate Broadway e la Settima, l'hotel è al 220, accanto al Nederlander Theatre.",
     "look": [
      "Times Square accesa sulla destra, all'incrocio con la Settima."
     ],
     "tips": []
    }
   ],
   "bagni": {
    "where": "In hotel.",
    "cost": "Gratis",
    "clean": "-"
   }
  }
 ],
 "walks": [
  {
   "from": "mon-go-cp",
   "to": "cp",
   "minutes": 15,
   "how": "Metro C da 42 St–Port Authority fino a 72 St, poi attraversate Central Park West.",
   "mapsMode": "transit",
   "tips": []
  },
  {
   "from": "cp",
   "to": "mon-go-moma",
   "minutes": 5,
   "how": "Da Bow Bridge tornate alla terrazza di Bethesda e salite la scalinata verso il Mall.",
   "mapsMode": "walking",
   "tips": []
  },
  {
   "from": "mon-go-moma",
   "to": "mon-moma",
   "minutes": 30,
   "how": "Lungo il Mall fino alla Quinta e la 59ª, poi giù per la Quinta fino alla 53ª, a destra fino al museo.",
   "mapsMode": "walking",
   "tips": []
  },
  {
   "from": "mon-moma",
   "to": "mon-pranzo",
   "minutes": 5,
   "how": "Burger Joint: 119 West 56th Street, tra la Sesta e la Settima. Café 2 è dentro il museo, al secondo piano.",
   "mapsMode": "walking",
   "tips": []
  },
  {
   "from": "mon-pranzo",
   "to": "mon-go-gct",
   "minutes": 5,
   "how": "Sulla Sesta Avenue verso sud.",
   "mapsMode": "walking",
   "tips": []
  },
  {
   "from": "mon-go-gct",
   "to": "mon-gct",
   "minutes": 25,
   "how": "Sesta fino alla 50ª, Rockefeller Center, Quinta fino alla 42ª, poi a sinistra fino a Grand Central.",
   "mapsMode": "walking",
   "tips": []
  },
  {
   "from": "mon-gct",
   "to": "mon-summit",
   "minutes": 3,
   "how": "Dentro la stazione: dalla sala grande verso ovest, hall dei treni sotto Vanderbilt Avenue.",
   "mapsMode": "walking",
   "tips": [
    {
     "text": "Prima di andare in coda: scommessa di Vinnie sul soffitto della sala grande."
    }
   ]
  },
  {
   "from": "mon-summit",
   "to": "mon-bryant",
   "minutes": 8,
   "how": "A piedi: uscite sulla 42nd Street, verso ovest fino alla Quinta; la biblioteca è sull'angolo, Bryant Park è subito dietro.",
   "mapsMode": "walking",
   "tips": [
    {
     "pos": [
      40.75305,
      -73.98164
     ],
     "text": "Sulla Quinta, davanti alla biblioteca: i leoni Pazienza e Fortezza."
    }
   ]
  },
  {
   "from": "mon-bryant",
   "to": "mon-saks",
   "minutes": 12,
   "how": "A piedi: dalla Quinta Avenue verso nord, dalla 42nd alla 50th. Saks è sul lato destro.",
   "mapsMode": "walking",
   "tips": [
    {
     "text": "Camminate sul lato sinistro della Quinta: arrivate già sul marciapiede giusto per vedere la facciata intera."
    }
   ]
  },
  {
   "from": "mon-saks",
   "to": "mon-go-hotel",
   "minutes": 5,
   "how": "Verso ovest fino alla Sesta Avenue.",
   "mapsMode": "walking",
   "tips": []
  }
 ],
 "food": [
  {
   "id": "mon-f-bestbagel",
   "name": "Best Bagel & Coffee",
   "type": "bagel",
   "category": "colazione",
   "order": "Everything bagel con cream cheese (lo schmear); per i bambini plain con burro. Caffè americano o cioccolata.",
   "price": "$25–35 in 4",
   "pos": [
    40.7523,
    -73.991
   ],
   "hours": {
    "0": [],
    "1": [
     [
      "06:00",
      "16:00"
     ]
    ],
    "2": [
     [
      "06:00",
      "16:00"
     ]
    ],
    "3": [
     [
      "06:00",
      "16:00"
     ]
    ],
    "4": [
     [
      "06:00",
      "16:00"
     ]
    ],
    "5": [
     [
      "06:00",
      "16:00"
     ]
    ],
    "6": [
     [
      "08:00",
      "14:30"
     ]
    ]
   },
   "near": [
    "mon-go-cp"
   ],
   "note": "Piccolo, si mangia in piedi o da portare via. 225 West 35th Street, a 8 minuti dall'hotel.",
   "rating": {
    "stars": 4.6,
    "count": 6886,
    "source": "Google"
   },
   "buzz": "Bagel morbidi e farciture abbondanti, tante creme spalmabili; fila lunga ma rapida, quasi niente tavoli."
  },
  {
   "id": "mon-f-ellens",
   "name": "Ellen's Stardust Diner",
   "type": "diner con camerieri che cantano",
   "category": "colazione",
   "order": "Pancake, French toast, uova con bacon. I camerieri cantano Broadway tra un piatto e l'altro.",
   "price": "$80–110 in 4",
   "pos": [
    40.76185,
    -73.9835
   ],
   "hours": {
    "0": [
     [
      "07:00",
      "24:00"
     ]
    ],
    "1": [
     [
      "07:00",
      "24:00"
     ]
    ],
    "2": [
     [
      "07:00",
      "24:00"
     ]
    ],
    "3": [
     [
      "07:00",
      "24:00"
     ]
    ],
    "4": [
     [
      "07:00",
      "24:00"
     ]
    ],
    "5": [
     [
      "07:00",
      "24:00"
     ]
    ],
    "6": [
     [
      "07:00",
      "24:00"
     ]
    ]
   },
   "near": [
    "mon-go-cp",
    "mon-moma"
   ],
   "note": "1650 Broadway angolo 51st. Niente prenotazioni: al mattino si entra quasi subito, la sera c'è fila. Da qui al MoMA 10 minuti a piedi.",
   "rating": {
    "stars": 4.4,
    "count": 25090,
    "source": "Google"
   },
   "buzz": "Al mattino si aspetta meno; porzioni abbondanti ma cibo semplice; gira un secchiello per le mance ai cantanti.",
   "img": {
    "src": "img/food-mon-f-ellens.webp",
    "credit": "Leonard J. DeFrancisci, CC BY-SA 3.0, via Wikimedia Commons"
   }
  },
  {
   "id": "mon-f-juniors",
   "name": "Junior's (Times Square)",
   "type": "diner e cheesecake",
   "category": "tipico",
   "order": "A colazione pancake o uova; in qualunque momento una fetta di cheesecake originale da dividere.",
   "price": "Colazione $60–80 in 4 · cheesecake $10–12 a fetta",
   "pos": [
    40.75822,
    -73.98663
   ],
   "hours": {
    "0": [
     [
      "07:00",
      "24:00"
     ]
    ],
    "1": [
     [
      "07:00",
      "24:00"
     ]
    ],
    "2": [
     [
      "07:00",
      "24:00"
     ]
    ],
    "3": [
     [
      "07:00",
      "24:00"
     ]
    ],
    "4": [
     [
      "07:00",
      "24:00"
     ]
    ],
    "5": [
     [
      "07:00",
      "01:00"
     ]
    ],
    "6": [
     [
      "07:00",
      "01:00"
     ]
    ]
   },
   "near": [
    "mon-go-cp",
    "mon-bryant"
   ],
   "note": "Sulla 45th Street angolo Broadway. Buono anche per il dolce tornando in hotel la sera.",
   "rating": {
    "stars": 4.4,
    "count": 16030,
    "source": "Google"
   },
   "buzz": "Cheesecake cremosa che da sola vale la sosta; servizio rapido anche col pieno, bagni al piano di sopra.",
   "img": {
    "src": "img/food-mon-f-juniors.webp",
    "credit": "Kidfly182, CC BY-SA 4.0, via Wikimedia Commons"
   }
  },
  {
   "id": "mon-f-brooklyndiner",
   "name": "Brooklyn Diner",
   "type": "diner",
   "category": "colazione",
   "order": "Pancake, omelette, waffle. A pranzo il loro hot dog gigante.",
   "price": "$70–90 in 4",
   "pos": [
    40.75651,
    -73.98577
   ],
   "hours": {
    "0": [
     [
      "08:00",
      "22:00"
     ]
    ],
    "1": [
     [
      "08:00",
      "22:00"
     ]
    ],
    "2": [
     [
      "08:00",
      "22:00"
     ]
    ],
    "3": [
     [
      "08:00",
      "22:00"
     ]
    ],
    "4": [
     [
      "08:00",
      "22:00"
     ]
    ],
    "5": [
     [
      "08:00",
      "22:00"
     ]
    ],
    "6": [
     [
      "08:00",
      "22:00"
     ]
    ]
   },
   "near": [
    "mon-go-cp"
   ],
   "note": "155 West 43rd Street, a 4 minuti dall'hotel. Tavoli e divanetti, comodo con i bambini.",
   "rating": {
    "stars": 4.3,
    "count": 4964,
    "source": "Google"
   },
   "buzz": "Comfort food classico e servizio cordiale anche col pieno; prezzi alti, ma siamo a Times Square.",
   "img": {
    "src": "img/food-mon-f-brooklyndiner.webp",
    "credit": "Frank Schulenburg, CC BY-SA 4.0, via Wikimedia Commons"
   }
  },
  {
   "id": "mon-f-cafe2",
   "name": "Cafe 2 (dentro il MoMA)",
   "type": "caffetteria del museo, cucina italiana",
   "category": "pranzo",
   "order": "Un piatto di pasta da dividere e qualcosa al banco per i bambini.",
   "price": "$80–110 in 4",
   "pos": [
    40.76161,
    -73.9775
   ],
   "hours": {
    "0": [
     [
      "11:00",
      "17:00"
     ]
    ],
    "1": [
     [
      "11:00",
      "17:00"
     ]
    ],
    "2": [
     [
      "11:00",
      "17:00"
     ]
    ],
    "3": [
     [
      "11:00",
      "17:00"
     ]
    ],
    "4": [
     [
      "11:00",
      "17:00"
     ]
    ],
    "5": [
     [
      "11:00",
      "17:00"
     ]
    ],
    "6": [
     [
      "11:00",
      "17:00"
     ]
    ]
   },
   "near": [
    "mon-moma",
    "mon-pranzo"
   ],
   "note": "Secondo piano del museo, senza prenotazione, serve il biglietto del MoMA. Comodo se volete pranzare prima di uscire.",
   "buzz": "Cucina italiana buona ma cara, tavoli comuni e poche finestre; caffè e dolci molto lodati."
  },
  {
   "id": "mon-f-halal",
   "name": "The Halal Guys (carretto)",
   "type": "halal cart",
   "category": "tipico",
   "order": "Chicken over rice (o combo pollo e agnello) con tanta salsa bianca. La salsa rossa è piccantissima: una goccia sola.",
   "price": "$40–50 in 4",
   "pos": [
    40.76177,
    -73.97906
   ],
   "hours": {
    "0": [
     [
      "10:00",
      "04:00"
     ]
    ],
    "1": [
     [
      "10:00",
      "04:00"
     ]
    ],
    "2": [
     [
      "10:00",
      "04:00"
     ]
    ],
    "3": [
     [
      "10:00",
      "04:00"
     ]
    ],
    "4": [
     [
      "10:00",
      "04:00"
     ]
    ],
    "5": [
     [
      "10:00",
      "04:00"
     ]
    ],
    "6": [
     [
      "10:00",
      "04:00"
     ]
    ]
   },
   "near": [
    "mon-moma",
    "mon-pranzo"
   ],
   "note": "Angolo 53rd Street e Sesta Avenue, a 2 minuti dal MoMA. Il carretto originale ha le insegne gialle: diffidate delle imitazioni accanto. Si mangia in piedi o sulle panchine dei cortili vicini.",
   "rating": {
    "stars": 4.3,
    "count": 14192,
    "source": "Google"
   },
   "buzz": "Porzioni grandi e salsa bianca molto amata, la rossa brucia; coda rapida, accanto ci sono carretti imitatori.",
   "img": {
    "src": "img/food-mon-f-halal.webp",
    "credit": "Sergio Calleja (Life is a trip) from Barcelona, Sp.\n\nUploaded to en by en:User:Tom Foolery, CC BY-SA 2.0, via Wikimedia Commons"
   }
  },
  {
   "id": "mon-f-burgerjoint",
   "name": "Burger Joint",
   "type": "hamburger dietro una tenda",
   "category": "pranzo",
   "order": "Cheeseburger 'with the works' (con tutto), patatine e un milkshake.",
   "price": "$70–90 in 4",
   "pos": [
    40.76426,
    -73.97859
   ],
   "hours": {
    "0": [
     [
      "11:00",
      "23:00"
     ]
    ],
    "1": [
     [
      "11:00",
      "23:00"
     ]
    ],
    "2": [
     [
      "11:00",
      "23:00"
     ]
    ],
    "3": [
     [
      "11:00",
      "23:00"
     ]
    ],
    "4": [
     [
      "11:00",
      "23:00"
     ]
    ],
    "5": [
     [
      "11:00",
      "23:00"
     ]
    ],
    "6": [
     [
      "11:00",
      "23:00"
     ]
    ]
   },
   "near": [
    "mon-moma",
    "mon-pranzo"
   ],
   "note": "Dentro la hall del Thompson Central Park Hotel, 119 West 56th: cercate la tenda e l'insegna a forma di hamburger. Piccolo, a mezzogiorno c'è fila. Portate contanti per sicurezza.",
   "rating": {
    "stars": 4.3,
    "count": 9287,
    "source": "Google"
   },
   "buzz": "Burger succosi e ingresso nascosto divertente; fila frequente, prezzi saliti e patatine giudicate deboli.",
   "vinnie": "Hotel di lusso, lampadari, divani di velluto. E dietro una tenda c'è un posto che sembra la cameretta di un ragazzino. Io ci sono entrato una volta e mi hanno chiesto se avevo prenotato. Ho risposto: sono un piccione di Brooklyn, non prenoto, seguo l'odore. Voi seguite l'insegna a forma di hamburger."
  },
  {
   "id": "mon-f-magnolia",
   "name": "Magnolia Bakery (Rockefeller Center)",
   "type": "pasticceria americana",
   "category": "snack",
   "order": "Banana pudding (c'è una fila apposta) e un cupcake da dividere.",
   "price": "$25–35 in 4",
   "pos": [
    40.75928,
    -73.98065
   ],
   "hours": {
    "0": [
     [
      "09:00",
      "21:00"
     ]
    ],
    "1": [
     [
      "09:00",
      "21:00"
     ]
    ],
    "2": [
     [
      "09:00",
      "21:00"
     ]
    ],
    "3": [
     [
      "09:00",
      "21:00"
     ]
    ],
    "4": [
     [
      "09:00",
      "21:00"
     ]
    ],
    "5": [
     [
      "09:00",
      "21:00"
     ]
    ],
    "6": [
     [
      "09:00",
      "21:00"
     ]
    ]
   },
   "near": [
    "mon-moma",
    "mon-pranzo"
   ],
   "note": "Sesta Avenue angolo 49th, sulla strada tra hotel e museo.",
   "rating": {
    "stars": 4.4,
    "count": 7486,
    "source": "Google"
   },
   "buzz": "Il banana pudding ha una fila dedicata e mette d'accordo quasi tutti; niente posti a sedere.",
   "img": {
    "src": "img/food-mon-f-magnolia.webp",
    "credit": "Andy C, CC BY 3.0, via Wikimedia Commons"
   }
  },
  {
   "id": "mon-f-gctfood",
   "name": "Dining Concourse di Grand Central",
   "type": "food court",
   "category": "pranzo",
   "order": "Shake Shack (ShackBurger e frullato), una fetta di cheesecake da Junior's, banana pudding da Magnolia.",
   "price": "$60–80 in 4",
   "pos": [
    40.75269,
    -73.97725
   ],
   "hours": {
    "0": [
     [
      "07:00",
      "21:00"
     ]
    ],
    "1": [
     [
      "07:00",
      "21:00"
     ]
    ],
    "2": [
     [
      "07:00",
      "21:00"
     ]
    ],
    "3": [
     [
      "07:00",
      "21:00"
     ]
    ],
    "4": [
     [
      "07:00",
      "21:00"
     ]
    ],
    "5": [
     [
      "07:00",
      "21:00"
     ]
    ],
    "6": [
     [
      "07:00",
      "21:00"
     ]
    ]
   },
   "near": [
    "mon-gct",
    "mon-summit"
   ],
   "note": "Piano di sotto della stazione, tavoli in mezzo. Pranzate qui e siete già accanto alla galleria dei sussurri e al SUMMIT.",
   "rating": {
    "stars": 3.9,
    "count": 50,
    "source": "Google"
   },
   "buzz": "Tanta scelta sotto i 20 dollari e bagni puliti; posti limitati e affollati a pranzo nei giorni feriali.",
   "img": {
    "src": "img/food-mon-f-gctfood.webp",
    "credit": "Reading Tom from Reading, UK, CC BY 2.0, via Wikimedia Commons"
   }
  },
  {
   "id": "mon-f-lodge",
   "name": "The Lodge (Bryant Park)",
   "type": "food hall riscaldata a bordo pista",
   "category": "cena",
   "order": "Fate un giro dei banchi e scegliete; i bambini al tavolo vicino al vetro, a guardare i pattinatori.",
   "price": "$70–100 in 4",
   "pos": [
    40.75367,
    -73.98367
   ],
   "hours": {
    "0": [
     [
      "10:00",
      "24:00"
     ]
    ],
    "1": [
     [
      "10:00",
      "24:00"
     ]
    ],
    "2": [
     [
      "10:00",
      "24:00"
     ]
    ],
    "3": [
     [
      "10:00",
      "24:00"
     ]
    ],
    "4": [
     [
      "10:00",
      "24:00"
     ]
    ],
    "5": [
     [
      "10:00",
      "24:00"
     ]
    ],
    "6": [
     [
      "10:00",
      "24:00"
     ]
    ]
   },
   "near": [
    "mon-bryant"
   ],
   "note": "All'angolo nord-est della pista. In questo periodo aperta fino a mezzanotte."
  },
  {
   "id": "mon-f-serendipity",
   "name": "Serendipity3 (casetta del Winter Village)",
   "type": "cioccolata ghiacciata",
   "category": "snack",
   "order": "Frrrozen Hot Chocolate: cioccolata frullata col ghiaccio e panna. Una in due basta.",
   "price": "$30–45 in 4",
   "pos": [
    40.75367,
    -73.98367
   ],
   "hours": {
    "0": [
     [
      "10:00",
      "20:00"
     ]
    ],
    "1": [
     [
      "11:00",
      "20:00"
     ]
    ],
    "2": [
     [
      "11:00",
      "20:00"
     ]
    ],
    "3": [
     [
      "11:00",
      "20:00"
     ]
    ],
    "4": [
     [
      "11:00",
      "20:00"
     ]
    ],
    "5": [
     [
      "11:00",
      "20:00"
     ]
    ],
    "6": [
     [
      "10:00",
      "20:00"
     ]
    ]
   },
   "near": [
    "mon-bryant"
   ],
   "note": "Nuova quest'anno tra le casette. Il lunedì le casette chiudono alle 20."
  },
  {
   "id": "mon-f-koukli",
   "name": "Koukli (casetta greca)",
   "type": "pita greca",
   "category": "cena",
   "order": "Pita con spiedini, patatine; per finire la cioccolata calda al baklava.",
   "price": "$50–70 in 4",
   "pos": [
    40.75367,
    -73.98367
   ],
   "hours": {
    "0": [
     [
      "10:00",
      "20:00"
     ]
    ],
    "1": [
     [
      "11:00",
      "20:00"
     ]
    ],
    "2": [
     [
      "11:00",
      "20:00"
     ]
    ],
    "3": [
     [
      "11:00",
      "20:00"
     ]
    ],
    "4": [
     [
      "11:00",
      "20:00"
     ]
    ],
    "5": [
     [
      "11:00",
      "20:00"
     ]
    ],
    "6": [
     [
      "10:00",
      "20:00"
     ]
    ]
   },
   "near": [
    "mon-bryant"
   ],
   "note": "Tra le casette del mercatino; si mangia in piedi o alla Lodge."
  },
  {
   "id": "mon-f-joes",
   "name": "Joe's Pizza (Broadway)",
   "type": "pizza al taglio",
   "category": "tipico",
   "order": "Una fetta plain (solo pomodoro e mozzarella) a testa, piegata a metà come i newyorkesi. Se avete fame, una seconda col pepperoni.",
   "price": "$20–30 in 4",
   "pos": [
    40.75476,
    -73.98694
   ],
   "hours": {
    "0": [
     [
      "10:00",
      "03:00"
     ]
    ],
    "1": [
     [
      "10:00",
      "03:00"
     ]
    ],
    "2": [
     [
      "10:00",
      "03:00"
     ]
    ],
    "3": [
     [
      "10:00",
      "03:00"
     ]
    ],
    "4": [
     [
      "10:00",
      "03:00"
     ]
    ],
    "5": [
     [
      "10:00",
      "03:00"
     ]
    ],
    "6": [
     [
      "10:00",
      "03:00"
     ]
    ]
   },
   "near": [
    "mon-bryant",
    "mon-go-cp"
   ],
   "note": "1435 Broadway angolo 40th, a 5 minuti da Bryant Park e a 3 dall'hotel. Si mangia al bancone in piedi.",
   "rating": {
    "stars": 4.4,
    "count": 27451,
    "source": "Google"
   },
   "buzz": "Fila separata per i tranci, più veloce di quella per le pizze intere; crosta sottile, prezzi onesti."
  },
  {
   "id": "mon-f-lostacos",
   "name": "Los Tacos No. 1",
   "type": "taqueria messicana",
   "category": "cena",
   "order": "Taco adobada (maiale marinato allo spiedo) e quesadilla al formaggio per i bambini.",
   "price": "$45–60 in 4",
   "pos": [
    40.75742,
    -73.98781
   ],
   "hours": {
    "0": [
     [
      "11:00",
      "21:00"
     ]
    ],
    "1": [
     [
      "11:00",
      "23:00"
     ]
    ],
    "2": [
     [
      "11:00",
      "23:00"
     ]
    ],
    "3": [
     [
      "11:00",
      "23:00"
     ]
    ],
    "4": [
     [
      "11:00",
      "23:00"
     ]
    ],
    "5": [
     [
      "11:00",
      "23:00"
     ]
    ],
    "6": [
     [
      "11:00",
      "23:00"
     ]
    ]
   },
   "near": [
    "mon-bryant",
    "mon-go-cp"
   ],
   "note": "229 West 43rd Street. Si ordina al banco e si mangia in piedi: veloce.",
   "rating": {
    "stars": 4.8,
    "count": 16502,
    "source": "Google"
   },
   "buzz": "Coda anche di venti minuti ma scorre; ordinare la prima volta confonde un po', niente sedie.",
   "img": {
    "src": "img/food-mon-f-lostacos.webp",
    "credit": "BanjoZebra, CC BY 4.0, via Wikimedia Commons"
   }
  }
 ],
 "missions": [
  {
   "id": "mon-go-fermate",
   "stopId": "mon-go-cp",
   "type": "bet",
   "title": "Il palazzo-castello",
   "read": "Vinnie qui. Quando uscite dalla metro alla 72ª, sull'angolo c'è un palazzo scuro e vecchissimo, con i tetti a punta come un castello. Vinnie scommette che non trovate il suo nome scritto da qualche parte sulla facciata prima di entrare nel parco. Uno guarda in alto, l'altro guarda il portone e le inferriate. Quando lo trovate, leggetelo insieme.",
   "roles": [
    "Guarda in alto, sulla facciata",
    "Guarda il portone, le inferriate e il cancello"
   ],
   "vinnieBet": "Non trovate il nome",
   "parentHint": "È il Dakota, all'angolo tra Central Park West e la 72ª, sul lato nord-ovest. Il nome è scritto sopra l'ingresso su 72nd Street. Se non lo trovate, il pezzo va a Vinnie."
  },
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
   "id": "mon-go-shakespeare",
   "stopId": "mon-go-moma",
   "type": "describe",
   "title": "Lo scrittore col libro",
   "read": "Su questo viale di olmi ci sono statue di scrittori famosi. Vinnie ne ha scelto uno: è in piedi, tiene un libro e ha la barbetta a punta. Uno legge ad alta voce questa descrizione all'altro, che cammina avanti e cerca. Quando lo trovate, toccate il piedistallo insieme e leggete il nome scritto sotto. Se arrivate in fondo al viale senza trovarlo, il pezzo è mio.",
   "roles": [
    "Legge la descrizione e controlla",
    "Cammina avanti e cerca la statua"
   ],
   "parentHint": "È William Shakespeare, all'estremità sud del Mall (Literary Walk), il primo gruppo di statue che si incontra in fondo al viale venendo da Bethesda. Lì vicino ci sono anche Cristoforo Colombo e, seduti, Robert Burns e Walter Scott."
  },
  {
   "id": "mon-m-moma",
   "stopId": "mon-moma",
   "type": "describe",
   "title": "Il paesino nascosto",
   "read": "Ehi, artisti. Ho una foto di un pezzettino di questo quadro: un posto dove la gente dorme mentre il cielo fa il matto. Uno di voi la guarda per cinque secondi e la racconta all'altro, ma senza dire chiesa, campanile o casa. L'altro non la vede e deve indicare quel pezzetto sul quadro vero. Quando siete d'accordo, lo dite insieme. Scommetto che vi perdete tra le stelle.",
   "roles": [
    "Guarda la foto per 5 secondi e la descrive senza le parole vietate",
    "Non vede la foto: ascolta e indica il punto sul quadro"
   ],
   "img": {
    "src": "img/mon-m-moma.webp",
    "credit": "Vincent van Gogh, Public domain, via Wikimedia Commons"
   },
   "parentHint": "In basso, al centro del quadro: il paesino. Il campanile appuntito è la cosa più alta tra i tetti, a destra del grande cipresso nero che sale sul lato sinistro."
  },
  {
   "id": "mon-bet-atlas",
   "stopId": "mon-go-gct",
   "type": "bet",
   "title": "Il gigante col cielo sulle spalle",
   "read": "Scommessa! Sulla Quinta Avenue c'è un gigante di bronzo che regge sulle spalle una cosa enorme, tutta anelli. Uno di voi guarda i cortili dei palazzi a destra, l'altro le chiese e le vetrine a sinistra. Trovatelo e poi ditemi insieme cosa regge, guardando bene: non è un pallone. Scommetto che lo scambiate per un portiere.",
   "roles": [
    "Guarda i cortili dei palazzi a destra",
    "Guarda chiese e vetrine a sinistra"
   ],
   "vinnieBet": "Che non indovinate cosa regge",
   "parentHint": "La statua di Atlante, davanti all'International Building del Rockefeller Center, Quinta Avenue tra 51st e 50th, lato destro scendendo verso sud, di fronte a St. Patrick's. È alta più di 4 metri e regge una sfera fatta di anelli (una sfera armillare: il cielo, non la Terra)."
  },
  {
   "id": "mon-m-gct",
   "stopId": "mon-gct",
   "type": "message",
   "title": "Il messaggio nell'arco",
   "read": "Qui sotto c'è un arco che porta le parole. Se uno parla in un angolo, faccia contro il muro, la voce corre sul soffitto e arriva nell'angolo in diagonale. Il genitore dice all'orecchio di uno di voi una parola segreta di oggi. Lui la sussurra nel suo angolo, l'altro ascolta dall'angolo opposto. Poi al tre la dite insieme: se è la stessa parola, il pezzo di chiave è vostro. Con tutto questo rumore di treni, scommetto che non capite niente.",
   "roles": [
    "Sussurra la parola nell'angolo, faccia contro il muro",
    "Nell'angolo in diagonale, orecchio contro il muro: capisce la parola"
   ],
   "vinnieBet": "Che non capite la parola al primo colpo",
   "parentHint": "Piano di sotto (Dining Concourse), davanti all'ingresso dell'Oyster Bar: lo spazio basso a volta con quattro pilastri. Gli angoli giusti sono in diagonale, non uno di fronte all'altro. Parole facili: stelle, ninfee, piccione, specchio."
  },
  {
   "id": "mon-m-summit",
   "stopId": "mon-summit",
   "type": "photo-spot",
   "title": "Dove stava il fotografo",
   "read": "Questa foto l'ha scattata un turista proprio quassù. Io ero appollaiato sul suo cappello, quindi lo so. Guardate il grattacielo con la punta a squame d'argento. Dovete trovare insieme il punto esatto da cui è stata scattata e mettervi lì, tutti e due. Uno controlla quanto si vede della punta, l'altro cosa c'è intorno. Scommetto che finite dalla parte sbagliata del palazzo.",
   "roles": [
    "Controlla la punta del Chrysler: quanto ne vedete e da che lato",
    "Controlla cosa c'è intorno: palazzi davanti, fiume, strade"
   ],
   "img": {
    "src": "img/mon-m-summit.webp",
    "credit": "Changku88, CC BY-SA 4.0, via Wikimedia Commons"
   },
   "vinnieBet": "Che vi mettete dal lato sbagliato",
   "parentHint": "Il Chrysler è a est, verso l'East River, a meno di 300 metri. Si vede già dalla prima stanza a specchi al piano 91 (Transcendence 1): mettetevi contro le vetrate del lato est. La foto è verticale e il Chrysler occupa quasi tutta l'altezza."
  },
  {
   "id": "mon-go-strade",
   "stopId": "mon-go-hotel",
   "type": "bet",
   "title": "Le strade in inglese",
   "read": "Ultima sfida di lunedì. Ogni volta che attraversate una strada, guardate il cartello verde e dite il numero in inglese, insieme: forty-ninth, forty-eighth... Vinnie scommette che sbagliate almeno una volta prima della 41ª. Uno legge il cartello, l'altro dice il numero in inglese, poi lo ripetete in coro.",
   "roles": [
    "Legge il numero sul cartello",
    "Lo dice in inglese per primo"
   ],
   "vinnieBet": "Almeno uno sbagliato",
   "parentHint": "49th forty-ninth, 48th forty-eighth, 47th forty-seventh, 46th forty-sixth, 45th forty-fifth, 44th forty-fourth, 43rd forty-third, 42nd forty-second, 41st forty-first."
  },
  {
   "id": "mon-bet-radio",
   "stopId": null,
   "type": "bet",
   "title": "La parola che si accende",
   "read": "Scommessa! Sulla Sesta Avenue, prima del museo, c'è un palazzo con il suo nome scritto in verticale sull'angolo, lettere enormi che di sera si accendono di rosso. Dentro il nome c'è la parola Radio. Uno guarda il lato destro della strada, l'altro il sinistro. Chi lo vede lo indica, ma vale solo se poi leggete il nome insieme ad alta voce. Scommetto che ci passate sotto senza alzare la testa.",
   "roles": [
    "Guarda il lato sinistro della Sesta Avenue",
    "Guarda il lato destro della Sesta Avenue"
   ],
   "vinnieBet": "Che arrivate alla 51st senza averlo visto",
   "parentHint": "Radio City Music Hall, Sesta Avenue angolo 50th Street, sul lato destro salendo verso nord. L'insegna verticale RADIO CITY è sull'angolo del palazzo."
  },
  {
   "id": "mon-bet-soffitto",
   "stopId": null,
   "type": "bet",
   "title": "La macchia sul cielo",
   "read": "Ultima scommessa prima di salire in cima. Su questo cielo dipinto c'è una macchia scura che nessuno ha mai pulito, apposta. È un rettangolo grande come un cuscino, vicino al granchio. Uno guarda la foto per cinque secondi e spiega all'altro dove cercare; poi lo cercate insieme e lo indicate insieme. Bonus: in cima all'orologio al centro c'è una ghianda d'oro. Scommetto che non vedete né l'una né l'altra.",
   "roles": [
    "Guarda la foto 5 secondi e spiega dove cercare",
    "Cerca sul soffitto e indica la macchia"
   ],
   "img": {
    "src": "img/mon-bet-soffitto.webp",
    "credit": "TheCatalyst31, CC BY-SA 4.0, via Wikimedia Commons"
   },
   "vinnieBet": "Che non la trovate in due minuti",
   "parentHint": "Angolo nord-ovest del soffitto (lato Vanderbilt Avenue e binari, sopra la scalinata ovest), vicino alla costellazione del Cancro, il granchio. Misura circa 23 per 46 centimetri: lasciato sporco nella pulizia degli anni Novanta per mostrare il nero del fumo di sigaretta. La ghianda è sulla punta dell'orologio del chiosco informazioni."
  }
 ]
};
