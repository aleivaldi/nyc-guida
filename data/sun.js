export default {
 "id": "sun",
 "weekday": 0,
 "title": "Traghetto, Memoriale, il Ponte e Macy's",
 "vinnieMorning": "Oggi si va per mare, poi sotto i ponti, poi sopra un ponte. Io questi moli li conosco da quando ero un uovo, e il traghetto arancione lo saluto ogni mattina. Se volete riprendervi un pezzo di chiave, guardate bene e contate meglio di me.",
 "stops": [
  {
   "id": "sun-go-ferry",
   "name": "Dall'hotel al traghetto, in metro",
   "kind": "move",
   "start": "08:45",
   "durationMin": 30,
   "cost": "Metro $3 a testa",
   "pos": [
    40.75529,
    -73.98707
   ],
   "radiusM": 90,
   "hook": "La linea rossa dall'inizio alla fine di Manhattan: tredici fermate e si sbuca davanti al mare.",
   "story": "South Ferry è il capolinea più a sud della linea 1. La stazione di oggi è stata costruita dopo il 2009 e rifatta dopo l'uragano Sandy del 2012, quando l'acqua del porto l'aveva riempita fino al soffitto.",
   "look": [
    "Sopra i binari: la scritta Downtown & Brooklyn.",
    "Alla fermata WTC Cortlandt, dal finestrino: le pareti bianche piene di lettere in rilievo.",
    "All'uscita: il terminal arancione e blu del traghetto, proprio sopra la stazione."
   ],
   "tips": [
    {
     "text": "Colazione e bagno in hotel: il primo bagno dopo è nel terminal del traghetto.",
     "when": "always"
    },
    {
     "text": "La domenica la metro ha spesso lavori: controllate Google Maps. Alternativa: linea R da Times Sq–42 St fino a Whitehall St, che esce davanti al terminal.",
     "when": "always"
    },
    {
     "text": "Puntate alla corsa delle 9:30: arrivate al terminal verso le 9:15.",
     "when": "arrive"
    },
    {
     "text": "In ritardo: taxi dall'hotel al terminal di Whitehall, 20–25 minuti la domenica mattina, circa $30–35.",
     "when": "late"
    }
   ],
   "steps": [
    {
     "id": "goferry-out",
     "title": "Alla metro Times Sq–42 St",
     "where": "Dall'hotel camminate sulla 41ª verso la Settima Avenue (verso Times Square). Gli ingressi della metro sono agli angoli della Settima tra la 40ª e la 42ª. Cercate la linea 1, cerchio rosso, direzione Downtown & Brooklyn.",
     "look": [
      "Le scale con i globi verdi della metro sugli angoli."
     ],
     "tips": [
      "Ogni persona tocca il lettore OMNY una volta, anche i bambini."
     ]
    },
    {
     "id": "goferry-train",
     "title": "Linea 1 fino al capolinea",
     "where": "Treno 1 verso South Ferry: è il capolinea, circa 25 minuti. Si scende quando scendono tutti.",
     "look": [
      "Alla penultima fermata prima di Rector St, WTC Cortlandt: le pareti bianche con le parole. È la sfida di Vinnie, preparatevi."
     ],
     "tips": [
      "Non salite sulla 2 o sulla 3: sono espressi e non arrivano a South Ferry."
     ]
    },
    {
     "id": "goferry-exit",
     "title": "Dalla stazione al terminal",
     "where": "Uscite seguendo i cartelli Staten Island Ferry: il terminal di Whitehall è proprio sopra la stazione.",
     "look": [
      "Il grande orologio e la scritta Staten Island Ferry sulla facciata."
     ],
     "tips": [
      "Dentro la sala d'attesa mettetevi davanti alle porte: si aprono pochi minuti prima della partenza."
     ]
    }
   ],
   "bagni": {
    "where": "In metro non ci sono bagni. Il primo è nel terminal di Whitehall.",
    "cost": "Gratis",
    "clean": "Non verificato"
   }
  },
  {
   "id": "ferry",
   "name": "Staten Island Ferry",
   "kind": "key",
   "start": "09:15",
   "durationMin": 95,
   "cost": "Gratis",
   "pos": [
    40.70055,
    -74.01303
   ],
   "radiusM": 250,
   "cover": {
    "img": "img/ferry.webp",
    "credit": "Jakub Hałun, CC BY 4.0, via Wikimedia Commons"
   },
   "hook": "Il giro in barca più bello di New York costa zero dollari e passa davanti alla Statua della Libertà.",
   "story": "Il traghetto è gratis dal 1997: prima costava 50 centesimi. Le barche sono arancioni apposta, per vederle anche nella nebbia del porto. Ogni corsa dura circa 25 minuti e porta migliaia di newyorkesi che vanno semplicemente al lavoro, mentre i turisti si accalcano al parapetto. La Statua all'inizio era color rame lucido: è diventata verde in una trentina d'anni, come una pentola lasciata sotto la pioggia.",
   "look": [
    "All'andata la Statua compare sul lato destro, circa 10 minuti dopo la partenza: fiaccola alzata nella mano destra.",
    "Poco a destra della Statua, più vicino al New Jersey, l'edificio di mattoni rossi con quattro torrette: è Ellis Island, dove entravano gli emigranti, tanti italiani.",
    "Al ritorno, dalla parte davanti della barca, lo skyline di Lower Manhattan: il più alto, con l'antenna, è One World Trade Center."
   ],
   "tips": [
    {
     "text": "Dall'hotel: linea 1 (rossa) da Times Sq–42 St fino a South Ferry, il capolinea, circa 25 minuti. Alternativa: linea R fino a Whitehall St.",
     "when": "always"
    },
    {
     "text": "Puntate alla corsa delle 9:30. Nella sala d'attesa mettetevi davanti alle porte: si aprono pochi minuti prima della partenza. Appena a bordo andate a destra e uscite sul ponte all'aperto.",
     "when": "arrive"
    },
    {
     "text": "A St. George si scende tutti, non si può restare a bordo. Seguite la folla nella sala d'attesa e riprendete la corsa successiva: la domenica mattina ce n'è una ogni 30 minuti (9:30, 10:00).",
     "when": "always"
    },
    {
     "text": "Al ritorno la Statua è sul lato sinistro. Se ve la siete persa all'andata, è la seconda occasione.",
     "when": "always"
    },
    {
     "text": "Bagni nei due terminal e a bordo. Fateli a Whitehall prima di salire.",
     "when": "arrive"
    },
    {
     "text": "Con pioggia o vento forte il traghetto va lo stesso: restate dentro, dietro i finestrini del lato destro. La Statua si vede bene anche dal vetro.",
     "when": "rain"
    },
    {
     "text": "Dentro ci sono panche ovunque. Se hanno freddo, il ponte interno è riscaldato.",
     "when": "tired"
    },
    {
     "text": "Se perdete la corsa delle 9:30, prendete quella delle 10:00: poi saltate il toro e andate dritti al Memoriale.",
     "when": "late"
    }
   ],
   "steps": [
    {
     "id": "ferry-terminal",
     "title": "Il terminal di Whitehall",
     "where": "4 South Street, l'edificio grande sull'acqua accanto all'uscita della metro South Ferry",
     "look": [
      "Il tabellone con il conto alla rovescia della prossima partenza",
      "Le vetrate sul porto: si vede già la barca arancione che arriva"
     ],
     "tips": [
      "Bagni prima di salire",
      "Mettetevi davanti alle porte, a destra"
     ],
     "steps": [
      {
       "id": "ferry-terminal-doors",
       "title": "Davanti alle porte",
       "where": "In fondo alla sala d'attesa, verso l'acqua",
       "look": [
        "Quando si aprono le porte, la folla spinge: tenete i bambini per mano"
       ],
       "tips": [
        "Salendo, la vostra destra è il lato della Statua"
       ]
      },
      {
       "id": "ferry-terminal-board",
       "title": "A bordo, lato destro",
       "where": "Ponte inferiore all'aperto, lato destro, verso il fondo della barca",
       "look": [
        "Il parapetto esterno è il posto migliore per le foto"
       ],
       "tips": [
        "Prendete posto subito: dopo 5 minuti il parapetto è pieno"
       ],
       "options": [
        {
         "label": "Se fa molto freddo",
         "text": "Restate dentro, sulle panche vicino ai finestrini del lato destro."
        }
       ]
      }
     ]
    },
    {
     "id": "ferry-out",
     "title": "Andata: lato destro",
     "where": "Dal molo di Manhattan verso Staten Island, circa 25 minuti",
     "look": [
      "Subito a sinistra Governors Island, l'isola verde con il forte",
      "Dopo 10 minuti la Statua a destra",
      "Davanti, in lontananza, il ponte lunghissimo di Verrazzano"
     ],
     "tips": [
      "Qui si gioca la missione di Vinnie: preparate la foto prima che la Statua sia vicina"
     ],
     "steps": [
      {
       "id": "ferry-out-statue",
       "title": "La Statua",
       "where": "Lato destro, minuto 8–12 della traversata",
       "look": [
        "La fiaccola dorata",
        "La corona a punte",
        "La tavoletta nella mano sinistra"
       ],
       "tips": [
        "Lo zoom del telefono basta: la barca passa a meno di un chilometro"
       ]
      },
      {
       "id": "ferry-out-ellis",
       "title": "Ellis Island",
       "where": "Poco a destra e dietro la Statua",
       "look": [
        "Il palazzo rosso con quattro torrette bianche"
       ],
       "tips": [
        "Raccontate che da lì sono passati milioni di emigranti, molti dal Sud Italia"
       ]
      }
     ]
    },
    {
     "id": "ferry-george",
     "title": "St. George: si scende e si risale",
     "where": "Terminal di Staten Island",
     "look": [
      "Le scritte «To Manhattan» che portano di nuovo alla sala d'attesa"
     ],
     "tips": [
      "Non uscite dal terminal: la corsa di ritorno parte dalla stessa sala",
      "Se la barca delle 9:30 è già piena di gente, va benissimo quella delle 10:00"
     ]
    },
    {
     "id": "ferry-back",
     "title": "Ritorno: lato sinistro o davanti",
     "where": "Da Staten Island verso Manhattan",
     "look": [
      "La Statua ora a sinistra",
      "Dalla parte davanti della barca, lo skyline che cresce",
      "One World Trade Center, il più alto"
     ],
     "tips": [
      "Uscendo a Whitehall, il toro è a 5 minuti a piedi"
     ],
     "options": [
      {
       "label": "Se avete 10 minuti in più",
       "text": "Fermatevi al parapetto davanti: è la vista che usano tutte le cartoline."
      }
     ]
    }
   ],
   "missionId": "sun-statua",
   "nearby": [
    {
     "pos": [
      40.70055,
      -74.01303
     ],
     "text": "In Spider-Man: Homecoming, Peter Parker tiene insieme con le ragnatele proprio un traghetto di Staten Island spaccato in due.",
     "kind": "film"
    },
    {
     "pos": [
      40.70055,
      -74.01303
     ],
     "text": "Per i genitori: Una donna in carriera si apre con Melanie Griffith su questo traghetto, al mattino, con lo skyline davanti.",
     "kind": "film"
    },
    {
     "pos": [
      40.70171,
      -74.01315
     ],
     "text": "Dalla stazione South Ferry parte anche la linea 1: è il modo più semplice per tornare verso Times Square.",
     "kind": "curio"
    }
   ],
   "bagni": {
    "where": "Dentro il terminal di Whitehall e a bordo. Fateli prima di salire.",
    "cost": "Gratis",
    "clean": "Non verificato"
   }
  },
  {
   "id": "bull",
   "name": "Il toro di Wall Street",
   "kind": "optional",
   "start": "10:50",
   "durationMin": 15,
   "cost": "Gratis",
   "pos": [
    40.70556,
    -74.01345
   ],
   "radiusM": 150,
   "cover": {
    "img": "img/bull.webp",
    "credit": "Bruno Sanchez-Andrade Nuño from Washington, DC, USA, CC BY 2.0, via Wikimedia Commons"
   },
   "hook": "Un toro di tre tonnellate scaricato di notte, senza permesso, da uno scultore siciliano.",
   "story": "Arturo Di Modica, nato a Vittoria in Sicilia, fece il toro a sue spese. Una notte di dicembre del 1989 lo scaricò con un camion davanti alla Borsa, senza chiedere a nessuno, come regalo di Natale alla città. La polizia lo portò via il giorno dopo, ma la gente protestò e il Comune lo rimise qui, a Bowling Green. Nel 2017 davanti al toro comparve una bambina di bronzo con le mani sui fianchi: oggi Fearless Girl sta davanti alla Borsa.",
   "look": [
    "Il naso e le corna lucidi come oro: li consumano le mani di chi passa.",
    "Dietro il toro, la recinzione nera del parco Bowling Green: è del 1771. Guardate le punte in cima, sono tagliate: nel 1776 i newyorkesi segarono le coroncine del re inglese.",
    "A 4 minuti, su Broad Street, Fearless Girl davanti alla facciata della Borsa con la bandiera gigante."
   ],
   "tips": [
    {
     "text": "La fila davanti è per la foto con le corna. Da dietro e di lato nessuno fa la fila: la foto viene bene lo stesso.",
     "when": "arrive"
    },
    {
     "text": "Fearless Girl: da qui risalite Broadway e girate a destra su Wall Street, poi a destra su Broad Street. Sta sul marciapiede davanti alla Borsa, si fotografa senza fila.",
     "when": "always"
    },
    {
     "text": "Bagni gratis: nel palazzo con le colonne in fondo al parco c'è il museo degli indiani d'America (Smithsonian), ingresso libero.",
     "when": "always"
    },
    {
     "text": "In ritardo: salutate il toro dal marciapiede senza fermarvi e salite su Broadway verso il Memoriale.",
     "when": "late"
    },
    {
     "text": "Seduti: le panchine dentro Bowling Green, il parco recintato dietro il toro.",
     "when": "tired"
    }
   ],
   "nearby": [
    {
     "pos": [
      40.70682,
      -74.0108
     ],
     "text": "Fearless Girl, la bambina di bronzo di Kristen Visbal: prima guardava il toro negli occhi, dal 2018 sta davanti alla Borsa.",
     "kind": "curio"
    },
    {
     "pos": [
      40.7049,
      -74.01368
     ],
     "text": "Su questo prato nel 1776 i newyorkesi abbatterono la statua di re Giorgio III: il piombo diventò pallottole.",
     "kind": "curio"
    },
    {
     "pos": [
      40.70558,
      -74.01337
     ],
     "text": "Le strisce di granito nero nel marciapiede di Broadway ricordano le parate con le stelle filanti: si cammina sopra la storia.",
     "kind": "curio"
    }
   ],
   "bagni": {
    "where": "Nel parco del Toro non ho trovato bagni. I più vicini: il terminal del traghetto (4 Whitehall Street) e il Battery Comfort Station, a circa 10 minuti a piedi.",
    "cost": "Gratis",
    "clean": "Non verificato"
   }
  },
  {
   "id": "memorial",
   "name": "Memoriale dell'11 settembre",
   "kind": "key",
   "start": "11:15",
   "durationMin": 45,
   "cost": "Gratis (il museo non è in programma)",
   "pos": [
    40.71137,
    -74.01327
   ],
   "radiusM": 250,
   "cover": {
    "img": "img/memorial.webp",
    "credit": "NormanB, CC BY-SA 3.0, via Wikimedia Commons"
   },
   "hook": "Due grandi vuoti d'acqua esattamente dove stavano le Torri Gemelle.",
   "story": "Le due vasche occupano le impronte esatte delle Torri: ognuna è grande quasi come un campo da calcio. L'acqua scende per circa nove metri e poi sparisce in un buco più piccolo, di cui non si vede il fondo. Sul bordo ci sono 2.983 nomi, e non sono in ordine alfabetico: le famiglie hanno chiesto di mettere vicini colleghi, amici, fratelli. Ogni mattina il personale mette una rosa bianca sul nome di chi quel giorno avrebbe compiuto gli anni.",
   "look": [
    "Una rosa bianca infilata in un nome: è il compleanno di qualcuno. Cercatela lungo il bordo, ce n'è almeno una ogni giorno.",
    "Il Survivor Tree, il pero sul lato ovest fra le due vasche: il tronco in basso è ruvido e scuro, i rami nuovi sono lisci. La parte vecchia è quella sopravvissuta.",
    "Il quadrato più piccolo al centro di ogni vasca, dove l'acqua scende e non si vede il fondo."
   ],
   "tips": [
    {
     "text": "Come spiegarlo ai bambini, in poche parole: «Prima che voi nasceste, qui c'erano due torri altissime. Delle persone cattive le hanno colpite con degli aerei e sono crollate. Sono morte quasi tremila persone. Le vasche sono dove stavano le torri, i nomi sono di chi è morto.»",
     "when": "arrive"
    },
    {
     "text": "All'11enne potete dire anche che tanti erano pompieri e che i nomi dei pompieri hanno accanto il numero della loro squadra. Al 7enne basta: è un posto dove si ricordano delle persone, si parla piano.",
     "when": "arrive"
    },
    {
     "text": "Regole semplici: voce bassa, niente zaini o bicchieri appoggiati sui nomi, non ci si siede sul bordo.",
     "when": "always"
    },
    {
     "text": "Il piazzale è aperto ogni giorno dalle 8 alle 20 ed è gratis. Il museo è un'altra cosa: biglietto e almeno due ore. Oggi non serve.",
     "when": "always"
    },
    {
     "text": "Bagni e caldo: nell'Oculus, la struttura bianca a forma di ali sul lato est, e nel centro commerciale collegato.",
     "when": "always"
    },
    {
     "text": "Con la pioggia: fate la vasca sud e il Survivor Tree, poi riparatevi nell'Oculus.",
     "when": "rain"
    },
    {
     "text": "In ritardo: 20 minuti bastano per la vasca sud e il Survivor Tree. Saltate la vasca nord e uscite verso Fulton Street.",
     "when": "late"
    },
    {
     "text": "Seduti: le panchine di pietra sotto gli alberi del piazzale, fra le due vasche.",
     "when": "tired"
    },
    {
     "text": "Breve passaggio, solo le vasche esterne: fermatevi quanto volete. Se uscite prima, anche il pranzo e Century 21 iniziano prima.",
     "when": "always"
    }
   ],
   "steps": [
    {
     "id": "mem-south",
     "title": "La vasca sud",
     "where": "Entrando da Liberty Street, la prima che incontrate. Era la Torre Sud.",
     "look": [
      "L'acqua che scende da tutti e quattro i lati",
      "I nomi incisi nel bronzo",
      "Le rose bianche"
     ],
     "tips": [
      "Partite da qui perché arrivate da Broadway e Liberty Street"
     ],
     "steps": [
      {
       "id": "mem-south-names",
       "title": "I nomi",
       "where": "Sul parapetto di bronzo tutto intorno",
       "look": [
        "I nomi sono traforati: di sera si illuminano da sotto",
        "Accanto ai nomi dei pompieri c'è la loro squadra"
       ],
       "tips": [
        "Si possono sfiorare con le dita, molti lo fanno"
       ]
      },
      {
       "id": "mem-south-rose",
       "title": "La rosa bianca",
       "where": "Lungo il bordo: guardate dove spunta qualcosa di bianco",
       "look": [
        "La rosa infilata nelle lettere del nome"
       ],
       "tips": [
        "Chiedete ai bambini di cercarla con gli occhi, senza correre"
       ],
       "options": [
        {
         "label": "Se fanno domande",
         "text": "È il compleanno di quella persona: qualcuno si ricorda di lei anche oggi."
        }
       ]
      }
     ]
    },
    {
     "id": "mem-tree",
     "title": "Il Survivor Tree",
     "where": "Lato ovest del piazzale, fra le due vasche, dietro una piccola recinzione",
     "look": [
      "Il tronco scuro e nodoso in basso",
      "I rami lisci e dritti in alto"
     ],
     "tips": [
      "È un pero di Callery trovato bruciato fra le macerie a ottobre del 2001, curato dai giardinieri della città e rimesso qui nel 2010"
     ],
     "options": [
      {
       "label": "Per i bambini",
       "text": "Fategli toccare con gli occhi il punto dove cambia la corteccia: sotto è la parte che ha resistito, sopra è quella ricresciuta."
      }
     ]
    },
    {
     "id": "mem-north",
     "title": "La vasca nord",
     "where": "A nord del Survivor Tree. Era la Torre Nord.",
     "look": [
      "Dietro, verso nord-ovest, One World Trade Center: alto 1.776 piedi, come l'anno dell'indipendenza"
     ],
     "tips": [
      "Se sono stanchi, guardatela da un angolo e proseguite"
     ]
    },
    {
     "id": "mem-oculus",
     "title": "L'Oculus",
     "where": "Sul lato est, la struttura bianca con le costole: sembra uno scheletro di uccello",
     "look": [
      "La lunga fessura di vetro sul tetto",
      "Il pavimento bianco enorme sotto"
     ],
     "tips": [
      "Bagni nel centro commerciale collegato",
      "Uscite su Fulton Street: è la strada che porta dritta al Seaport"
     ]
    }
   ],
   "nearby": [
    {
     "pos": [
      40.70982,
      -74.01265
     ],
     "text": "Davanti alla vasca sud, su Liberty Street, la caserma dei pompieri Ten House con il muro di bronzo dedicato ai pompieri caduti. Se le porte sono aperte, i bambini vedono il camion.",
     "kind": "curio"
    },
    {
     "pos": [
      40.7105,
      -74.01389
     ],
     "text": "The Sphere, nel Liberty Park sopraelevato: la grande sfera di bronzo stava fra le due Torri. È ammaccata, ma è rimasta intera.",
     "kind": "curio"
    },
    {
     "pos": [
      40.71139,
      -74.00944
     ],
     "text": "St. Paul's Chapel, su Broadway: la chiesa più antica di Manhattan ancora in uso. Nel 2001 non le si ruppe neanche un vetro e per mesi ospitò i soccorritori.",
     "kind": "curio"
    }
   ],
   "bagni": {
    "where": "Nella piazza del Memoriale non ci sono bagni. Si usano quelli dell'Oculus (scendete al livello sotto la piazza), aperti circa dalle 8 alle 20–21.",
    "cost": "Gratis",
    "clean": "Non verificato"
   }
  },
  {
   "id": "sun-pranzo",
   "name": "Pranzo tra Oculus e Brookfield Place",
   "kind": "key",
   "start": "12:00",
   "durationMin": 45,
   "cost": "$40–80 in 4, secondo il posto",
   "pos": [
    40.7115,
    -74.011
   ],
   "radiusM": 150,
   "hook": "Si mangia seduti e al caldo, sotto le ali bianche dell'Oculus o in un food court con le vetrate sul fiume.",
   "story": "L'Oculus è la stazione dei treni del World Trade Center, disegnata da Santiago Calatrava e aperta nel 2016: le costole bianche dovevano ricordare una colomba che si alza in volo dalle mani di un bambino.",
   "look": [
    "Dentro l'Oculus: la grande sala bianca senza colonne, con la fessura di vetro sul soffitto.",
    "A Brookfield Place: il Winter Garden, la serra di vetro con le palme vere."
   ],
   "tips": [
    {
     "text": "Due scelte vicine: il food court di Brookfield Place (Hudson Eats, al piano di sopra, vista sul fiume Hudson) oppure i posti dentro l'Oculus. Dall'Oculus a Brookfield si passa sotto terra, senza uscire al freddo.",
     "when": "arrive"
    },
    {
     "text": "Per un pranzo veloce: un trancio da Joe's Pizza su Fulton Street, a 2 minuti.",
     "when": "always"
    },
    {
     "text": "Gli orari della domenica dei negozi di Brookfield Place e dell'Oculus vanno controllati: alcuni aprono a mezzogiorno.",
     "when": "always"
    },
    {
     "text": "In ritardo: trancio da Joe's e dritti da Century 21.",
     "when": "late"
    },
    {
     "text": "Stanchi: il Winter Garden di Brookfield Place ha gradini e panchine sotto le palme.",
     "when": "tired"
    }
   ],
   "steps": [],
   "bagni": {
    "where": "Dentro l'Oculus e a Brookfield Place, nei centri commerciali.",
    "cost": "Gratis",
    "clean": "Non verificato"
   }
  },
  {
   "id": "century21",
   "name": "Century 21",
   "kind": "key",
   "start": "12:45",
   "durationMin": 90,
   "cost": "Gratis entrare; vestiti e scarpe di marca a prezzo scontato",
   "pos": [
    40.71028,
    -74.01048
   ],
   "radiusM": 80,
   "hook": "Il grande magazzino delle firme scontate, proprio di fronte al Memoriale: un'ora e mezza tutta per voi.",
   "story": "Century 21 è nato nel 1961 a Brooklyn ed è famoso per vendere marche note a prezzi bassi. Il negozio di Cortlandt Street fu danneggiato l'11 settembre 2001 e riaprì pochi mesi dopo. Nel 2020 la catena chiuse tutti i negozi; questo ha riaperto nel 2023.",
   "look": [
    "Le etichette con due prezzi: quello pieno e quello di Century 21, più basso.",
    "I reparti bambini: guardate le taglie americane (per età) prima di provare.",
    "Uscendo, verso ovest: il grattacielo di vetro One World Trade Center."
   ],
   "tips": [
    {
     "text": "La domenica apre alle 11 e chiude alle 20, secondo il sito ufficiale.",
     "when": "always"
    },
    {
     "text": "Decidete un punto d'incontro appena entrati, per esempio l'ingresso principale: è grande e la domenica è pieno di gente.",
     "when": "arrive"
    },
    {
     "text": "I camerini hanno spesso coda: se avete dubbi sulla taglia, comprate e tenete lo scontrino.",
     "when": "always"
    },
    {
     "text": "In ritardo: mezz'ora e via, il ponte non aspetta il tramonto.",
     "when": "late"
    },
    {
     "text": "Se piove o tira vento forte: invece di DUMBO e ponte, Complete Playground, 30 Broad Street, a pochi minuti a piedi. È un grande parco giochi al coperto su più livelli, adatto anche a 7 e 11 anni. Sessioni di due ore, nel weekend circa $100 per la famiglia più i calzini antiscivolo: prezzi e posti vanno verificati e prenotati sul sito.",
     "when": "rain"
    }
   ],
   "steps": [],
   "bagni": {
    "where": "Non verificato: chiedete al personale. In alternativa l'Oculus, a 2–3 minuti.",
    "cost": "Gratis",
    "clean": "Non verificato"
   }
  },
  {
   "id": "sun-go-dumbo",
   "name": "A DUMBO in metro, sotto il fiume",
   "kind": "move",
   "start": "14:15",
   "durationMin": 30,
   "cost": "Metro $3 a testa",
   "pos": [
    40.71021,
    -74.00766
   ],
   "radiusM": 90,
   "hook": "Una sola fermata, ma passa sotto l'East River: si entra a Manhattan e si esce a Brooklyn.",
   "story": "Il tunnel sotto il fiume che fanno la A e la C è degli anni Trenta. Prima dei tunnel e dei ponti, per andare a Brooklyn si prendeva il traghetto, proprio dal molo dove arriverete fra poco: Fulton Ferry Landing.",
   "look": [
    "A Fulton St: i cartelli A e C, cerchio blu, direzione Brooklyn.",
    "Dal finestrino, tra le due fermate: il buio del tunnel sotto il fiume.",
    "Uscendo a Brooklyn: il Ponte di Brooklyn che spunta in fondo alla discesa."
   ],
   "tips": [
    {
     "text": "Dall'Oculus si arriva al Fulton Center sotto terra, seguendo i cartelli Fulton St.",
     "when": "arrive"
    },
    {
     "text": "In ritardo: taxi da Century 21 a DUMBO, 10–15 minuti, circa $20–25.",
     "when": "late"
    },
    {
     "text": "Se piove forte o tira vento: restate a Manhattan e andate a Complete Playground (30 Broad Street) invece di DUMBO e ponte.",
     "when": "rain"
    }
   ],
   "steps": [
    {
     "id": "godumbo-fulton",
     "title": "Alla metro Fulton St",
     "where": "Da Cortlandt Street andate su Broadway e salite di due isolati fino a Fulton Street: ingresso della metro con le linee A e C.",
     "look": [
      "Il Fulton Center: la cupola di vetro con la spirale di luce, se entrate da lì."
     ],
     "tips": [
      "Direzione Brooklyn, non Uptown."
     ]
    },
    {
     "id": "godumbo-train",
     "title": "A o C verso Brooklyn",
     "where": "Si scende alla prima fermata: High St–Brooklyn Bridge. In mezzo, il treno passa sotto l'East River.",
     "look": [
      "Contate i secondi sotto il fiume: è la sfida di Vinnie."
     ],
     "tips": [
      "Con la C o con la A va bene uguale: tutte e due fermano a High St."
     ]
    },
    {
     "id": "godumbo-walk",
     "title": "Da High St al molo",
     "where": "Uscite su Cadman Plaza West e scendete verso il fiume lungo Old Fulton Street, in discesa, fino a Fulton Ferry Landing: circa 10 minuti. Seguite Google Maps per l'uscita giusta.",
     "look": [
      "In fondo alla discesa: il ponte enorme sopra le case e il fiume."
     ],
     "tips": [
      "Lungo Old Fulton Street ci sono le pizzerie Juliana's e Grimaldi's, con la coda fuori."
     ]
    }
   ],
   "bagni": {
    "where": "In metro non ci sono bagni. A DUMBO: Pier 1 Pavilion e Empire Stores (Time Out Market).",
    "cost": "Gratis",
    "clean": "Pier 1 è nuovo; il resto non verificato"
   }
  },
  {
   "id": "dumbo",
   "name": "DUMBO e Brooklyn Bridge Park",
   "kind": "key",
   "start": "14:45",
   "durationMin": 60,
   "cost": "Gratis (carosello $4 a giro)",
   "pos": [
    40.70427,
    -73.99222
   ],
   "radiusM": 300,
   "cover": {
    "img": "img/dumbo.webp",
    "credit": "Enciclopedia1993, CC BY 4.0, via Wikimedia Commons"
   },
   "hook": "Strade di pietra, vecchi binari nell'asfalto e due ponti giganti sopra la testa.",
   "story": "DUMBO vuol dire Down Under the Manhattan Bridge Overpass, «sotto il cavalcavia del Manhattan Bridge». Si dice che gli artisti che vivevano qui negli anni Settanta scelsero apposta un nome brutto per tenere lontani i costruttori. Il carosello in riva al fiume è del 1922: Jane Walentas lo comprò all'asta nel 1984 e passò più di vent'anni a riportare a galla i colori originali, cavallo per cavallo. Nel 2012 l'uragano Sandy allagò la sua teca di vetro e il carosello illuminato in mezzo all'acqua fece il giro del mondo: si salvò.",
   "look": [
    "Da Washington Street, all'angolo con Water Street: l'Empire State Building incastrato sotto l'arco del Manhattan Bridge.",
    "Il carosello dentro la scatola di vetro: 48 cavalli intagliati e due carrozze, tutti diversi.",
    "Da Pebble Beach, la spiaggetta di sassi accanto al carosello: tutti e due i ponti insieme e lo skyline di Manhattan dall'altra parte del fiume."
   ],
   "tips": [
    {
     "text": "Carosello, orario invernale: la domenica 11–17:50, chiuso a inizio settimana. Biglietto $4; un bambino sotto i 107 cm sale gratis con un adulto. Il giro dura pochi minuti, la fila scorre veloce.",
     "when": "always"
    },
    {
     "text": "Bagni e caldo: Time Out Market, dentro i vecchi magazzini di mattoni Empire Stores su Water Street. All'ultimo piano c'è una terrazza con la vista sui ponti.",
     "when": "always"
    },
    {
     "text": "Con pioggia: Time Out Market e cioccolata calda da Jacques Torres, su Water Street. La foto di Washington Street si fa anche sotto l'ombrello.",
     "when": "rain"
    },
    {
     "text": "Seduti: le panchine del prato Empire Fulton Ferry, fra il carosello e il fiume, e le gradinate di Main Street Park.",
     "when": "tired"
    },
    {
     "text": "In ritardo: saltate il carosello. Foto in Washington Street e subito alle scale del Ponte di Brooklyn: il tramonto non aspetta.",
     "when": "late"
    },
    {
     "text": "Juliana's e Grimaldi's, le due pizzerie storiche sotto il ponte, fanno solo pizze intere e hanno spesso la fila. Dopo il pranzo al Seaport, meglio la cioccolata.",
     "when": "always"
    }
   ],
   "steps": [
    {
     "id": "dumbo-landing",
     "title": "Fulton Ferry Landing",
     "where": "Il molo dove arriva il traghetto, proprio accanto al Ponte di Brooklyn",
     "look": [
      "Il ponte visto da sotto, enorme",
      "Sulla ringhiera, i versi di Walt Whitman sul traghetto di Brooklyn"
     ],
     "tips": [
      "La casetta bianca dei pompieri sul molo oggi è la gelateria Van Leeuwen"
     ],
     "steps": [
      {
       "id": "dumbo-landing-railing",
       "title": "La ringhiera con le parole",
       "where": "Lungo il parapetto del molo",
       "look": [
        "Le lettere incise nel metallo: sono di una poesia del 1856"
       ],
       "tips": [
        "Leggetene una riga ai bambini: Whitman parla di chi attraverserà il fiume dopo di lui, cioè di voi"
       ]
      }
     ]
    },
    {
     "id": "dumbo-carousel",
     "title": "Jane's Carousel",
     "where": "Due minuti a nord del molo, la scatola di vetro sull'acqua",
     "look": [
      "I cavalli di legno intagliati, con le criniere dipinte",
      "Le due carrozze per chi non vuole stare in sella"
     ],
     "tips": [
      "Biglietto $4 alla cassa accanto all'ingresso"
     ],
     "steps": [
      {
       "id": "dumbo-carousel-ride",
       "title": "Il giro",
       "where": "Dentro la teca",
       "look": [
        "I cavalli esterni salgono e scendono, quelli interni stanno fermi"
       ],
       "tips": [
        "Fate scegliere a ognuno il cavallo prima di entrare: si risparmia la lite"
       ],
       "options": [
        {
         "label": "Se c'è fila",
         "text": "Guardatelo da fuori: dalla teca si vede tutto e intanto si va a Pebble Beach."
        },
        {
         "label": "Se è chiuso",
         "text": "D'inverno chiude a inizio settimana: la domenica dovrebbe essere aperto, ma controllate la cassa."
        }
       ]
      }
     ]
    },
    {
     "id": "dumbo-pebble",
     "title": "Pebble Beach",
     "where": "Subito a nord del carosello, sotto il Manhattan Bridge",
     "look": [
      "Lo skyline di Manhattan dall'acqua",
      "Il Manhattan Bridge sopra la testa: quando passa la metro si sente tremare"
     ],
     "tips": [
      "I sassi bagnati scivolano: scarpe asciutte, piedi lontani dall'acqua"
     ]
    },
    {
     "id": "dumbo-washington",
     "title": "Washington Street",
     "where": "Tornate verso l'interno su Main Street, poi Water Street fino all'incrocio con Washington Street",
     "look": [
      "L'Empire State sotto l'arco del ponte",
      "I vecchi binari nel selciato"
     ],
     "tips": [
      "Qui si gioca la missione di Vinnie",
      "Le auto passano davvero: foto dal bordo del marciapiede"
     ]
    },
    {
     "id": "dumbo-cocoa",
     "title": "Cioccolata calda o gelato",
     "where": "Water Street, fra Main Street e Washington Street",
     "look": [
      "Da Jacques Torres, dalla vetrina si vede il cioccolato che si lavora"
     ],
     "tips": [
      "Da qui alle scale del Ponte di Brooklyn sono 6 minuti a piedi lungo Washington Street"
     ],
     "options": [
      {
       "label": "Se fa freddo",
       "text": "Jacques Torres, cioccolata calda densa. Quella «Wicked» con il peperoncino è per i grandi."
      },
      {
       "label": "Se hanno voglia di gelato",
       "text": "Van Leeuwen, nella casetta bianca sul molo."
      },
      {
       "label": "Se avete 20 minuti",
       "text": "Time Out Market, poi la terrazza all'ultimo piano per vedere i ponti dall'alto."
      }
     ]
    }
   ],
   "missionId": "sun-arco",
   "nearby": [
    {
     "pos": [
      40.70296,
      -73.9896
     ],
     "text": "Per i genitori: l'inquadratura di Washington Street con il Manhattan Bridge è quella del manifesto di C'era una volta in America di Sergio Leone.",
     "kind": "film"
    },
    {
     "pos": [
      40.70276,
      -73.99343
     ],
     "text": "Juliana's sta nel locale originale di Patsy Grimaldi: lui vendette nome e pizzeria, poi a quasi ottant'anni tornò qui e riaprì con un altro nome. Grimaldi's è cento metri più in là.",
     "kind": "curio"
    },
    {
     "pos": [
      40.70085,
      -73.99671
     ],
     "text": "I vecchi pali del Pier 1 che spuntano dall'acqua: al tramonto è il punto più fotografato del parco.",
     "kind": "view"
    },
    {
     "pos": [
      40.70316,
      -73.99147
     ],
     "text": "Jacques Torres: cioccolata calda densa come un budino, si beve in piedi guardando i ponti.",
     "kind": "curio"
    }
   ],
   "bagni": {
    "where": "Pier 1 Pavilion (nuovo, con anche bagni famiglia e neutri) e piano terra di Empire Stores (Time Out Market). Bagni anche all'Education Center in Plymouth Street, vicino al parco giochi della nave pirata.",
    "cost": "Gratis (orari del parco)",
    "clean": "Pier 1 è nuovo; per il resto non verificato"
   }
  },
  {
   "id": "bridge",
   "name": "Ponte di Brooklyn al tramonto",
   "kind": "key",
   "start": "15:45",
   "durationMin": 75,
   "cost": "Gratis",
   "pos": [
    40.70062,
    -73.98992
   ],
   "radiusM": 250,
   "cover": {
    "img": "img/bridge.webp",
    "credit": "Steven Lek, CC BY-SA 4.0, via Wikimedia Commons"
   },
   "hook": "Si cammina sopra le auto, fra le ragnatele d'acciaio, verso un tramonto alle spalle della Statua della Libertà.",
   "story": "John Roebling progettò il ponte, ma nel 1869 una barca gli schiacciò un piede mentre prendeva le misure e morì di tetano. Il figlio Washington prese il suo posto, si ammalò lavorando sott'acqua nei cassoni e rimase a letto per anni, guardando il cantiere dalla finestra con un cannocchiale. Sua moglie Emily imparò l'ingegneria e per undici anni portò i suoi ordini in cantiere: all'inaugurazione del 1883 fu la prima ad attraversarlo, con un gallo in braccio. L'anno dopo il circo di P. T. Barnum ci fece passare 21 elefanti, per dimostrare che reggeva.",
   "look": [
    "Sulla torre di Brooklyn, all'altezza del camminamento, la targa per Emily, Washington e John Roebling.",
    "Le corde d'acciaio: quelle verticali e quelle diagonali si incrociano e fanno la famosa ragnatela. Guardate in su passando sotto le torri.",
    "Al centro del ponte, a sinistra, la Statua della Libertà piccola e verde, con il sole che scende dietro il New Jersey."
   ],
   "tips": [
    {
     "text": "Due ingressi lato Brooklyn: la scala su Washington Street, sotto il ponte all'altezza di Prospect Street, a 6 minuti da DUMBO. Oppure la rampa principale all'incrocio di Tillary Street con Adams Street e Boerum Place.",
     "when": "arrive"
    },
    {
     "text": "Il camminamento di legno è solo per pedoni: le bici dal 2021 hanno una corsia sulla carreggiata. Tenete comunque la destra e i bambini per mano: al tramonto c'è molta gente.",
     "when": "always"
    },
    {
     "text": "Il tramonto in questa stagione è verso le 16:30. Salendo alle 15:45 siete al centro del ponte proprio in quel momento.",
     "when": "always"
    },
    {
     "text": "Sul ponte non ci sono panchine né bagni. Fateli a DUMBO, al Time Out Market, prima di salire.",
     "when": "arrive"
    },
    {
     "text": "Stanchi o piove forte: lasciate stare il ponte. Dalla stazione High St, a 8 minuti da DUMBO, la linea A va dritta a 42 St–Port Authority, a 3 minuti dall'hotel.",
     "when": "tired"
    },
    {
     "text": "Con la pioggia il legno scivola e il vento sul fiume è forte. Se è solo una pioggerella, andate lo stesso con cappuccio e mani in tasca.",
     "when": "rain"
    },
    {
     "text": "In ritardo: salite comunque, il ponte è la tappa. Saltate le soste lunghe e fermatevi solo al centro, per il tramonto.",
     "when": "late"
    }
   ],
   "steps": [
    {
     "id": "bridge-stairs",
     "title": "La salita da Washington Street",
     "where": "Scala sotto il ponte, su Washington Street all'altezza di Prospect Street",
     "look": [
      "Le arcate di mattoni sotto la rampa"
     ],
     "tips": [
      "In cima girate a destra verso Manhattan"
     ],
     "options": [
      {
       "label": "Se la scala è chiusa",
       "text": "Andate all'ingresso principale, Tillary Street angolo Adams Street, circa 8 minuti a piedi."
      }
     ]
    },
    {
     "id": "bridge-dumbo",
     "title": "Il primo tratto, sopra DUMBO",
     "where": "I primi 400 metri di camminamento, sopra i tetti di Brooklyn",
     "look": [
      "Sotto, a destra, i tetti di DUMBO e il Manhattan Bridge con i treni",
      "Davanti, la torre di Brooklyn che si avvicina"
     ],
     "tips": [
      "Qui c'è ancora poca gente: è il tratto giusto per la missione dei lampioni"
     ]
    },
    {
     "id": "bridge-btower",
     "title": "La torre di Brooklyn",
     "where": "La prima torre di pietra, con i due archi a punta",
     "look": [
      "Gli archi gotici, come le finestre di una cattedrale",
      "La targa per i Roebling",
      "Le corde che partono dalla cima"
     ],
     "tips": [
      "Piccolo slargo attorno alla torre: è il posto per fermarsi e guardare indietro verso Brooklyn"
     ],
     "steps": [
      {
       "id": "bridge-btower-plaque",
       "title": "La targa per Emily",
       "where": "Sulla pietra della torre, sul lato del camminamento",
       "look": [
        "Il nome di Emily Warren Roebling accanto a quelli del marito e del suocero"
       ],
       "tips": [
        "Raccontate del gallo: Emily lo portò all'inaugurazione come segno di vittoria"
       ]
      },
      {
       "id": "bridge-btower-mission",
       "title": "Fra due lampioni",
       "where": "Subito dopo la torre, verso il centro",
       "look": [
        "I lampioni neri in fila lungo il camminamento"
       ],
       "tips": [
        "Missione di Vinnie: contate i passi fra due lampioni, tenendo la destra"
       ]
      }
     ]
    },
    {
     "id": "bridge-center",
     "title": "Il centro, al tramonto",
     "where": "A metà strada fra le due torri, sopra il fiume",
     "look": [
      "A sinistra la Statua della Libertà e il sole che scende",
      "Davanti One World Trade Center che si accende",
      "A destra il Manhattan Bridge"
     ],
     "tips": [
      "È il momento della foto di famiglia: la luce dura una decina di minuti"
     ],
     "options": [
      {
       "label": "Se hanno freddo",
       "text": "Foto veloce e ripartite: camminare scalda, fermi sul ponte si gela."
      },
      {
       "label": "Se avete 10 minuti",
       "text": "Aspettate che si accendano le luci delle torri e dei grattacieli."
      }
     ]
    },
    {
     "id": "bridge-mtower",
     "title": "La torre di Manhattan e la discesa",
     "where": "Seconda torre, poi la rampa che scende verso City Hall",
     "look": [
      "Sotto, i tetti del Seaport dove avete pranzato",
      "In fondo alla rampa, il parco di City Hall"
     ],
     "tips": [
      "La rampa sbuca davanti al parco di City Hall: la metro R è a 3 minuti"
     ]
    }
   ],
   "missionId": "sun-lampioni",
   "nearby": [
    {
     "pos": [
      40.70569,
      -73.99636
     ],
     "text": "Per i genitori: nel film di Sex and the City Miranda e Steve si ritrovano proprio a metà del Ponte di Brooklyn.",
     "kind": "film"
    },
    {
     "pos": [
      40.7041,
      -73.99435
     ],
     "text": "Sotto la torre di Brooklyn, nelle fondamenta, ci sono ancora i cassoni di legno in cui lavoravano gli operai, sepolti nel fondo del fiume.",
     "kind": "curio"
    },
    {
     "pos": [
      40.70727,
      -73.99833
     ],
     "text": "Kate & Leopold: il duca dell'Ottocento cade proprio da questo ponte e si risveglia nella New York di oggi.",
     "kind": "film"
    }
   ],
   "bagni": {
    "where": "Sul ponte non ci sono bagni. Fateli a DUMBO prima di salire.",
    "cost": "-",
    "clean": "-"
   }
  },
  {
   "id": "sun-go-macys",
   "name": "In metro fino a Herald Square",
   "kind": "move",
   "start": "17:00",
   "durationMin": 30,
   "cost": "Metro $3 a testa con carta contactless",
   "pos": [
    40.71328,
    -74.00698
   ],
   "radiusM": 250,
   "hook": "Scesi dal ponte, la linea R dritta fino alla 34ª strada: si sbuca davanti alle vetrine di Macy's.",
   "story": "Il municipio di New York, quello bianco nel parco, è del 1812 ed è ancora usato dal sindaco. Sotto il parco c'è una stazione della metro chiusa dal 1945, con lampadari e volte di piastrelle: si vede solo dal finestrino della linea 6, che ci gira dentro per tornare indietro. È il segreto meglio custodito della metro.",
   "look": [
    "Il municipio bianco in fondo al parco, con la statua della Giustizia in cima alla cupola.",
    "La fontana con i lampioni a gas al centro del parco di City Hall.",
    "Le scale della metro R su Broadway, all'angolo del parco: sono quelle per tornare."
   ],
   "tips": [
    {
     "text": "Linea R alla stazione City Hall, su Broadway, direzione Uptown & Queens, fino a 34 St–Herald Sq: 8 fermate, circa 20 minuti. Di domenica la W non passa.",
     "when": "always"
    },
    {
     "text": "Si paga toccando il tornello con la carta contactless o il telefono: $3 a testa, i bambini sotto i 112 cm gratis.",
     "when": "always"
    },
    {
     "text": "Di domenica ci possono essere deviazioni: controllate sul telefono prima di scendere. Alternativa: linee 2 o 3 da Park Place fino a 34 St–Penn Station, poi 5 minuti a piedi verso est.",
     "when": "arrive"
    },
    {
     "text": "Stanchi: taxi fino a Macy's, circa 20–30 minuti e $25–35.",
     "when": "tired"
    }
   ],
   "nearby": [
    {
     "pos": [
      40.71264,
      -74.00668
     ],
     "text": "Il municipio, del 1812: gli sposi dell'ufficio matrimoni escono spesso a fare le foto qui davanti.",
     "kind": "curio"
    },
    {
     "pos": [
      40.71235,
      -74.00507
     ],
     "text": "Brooklyn Bridge–City Hall: da qui parte la linea 6 del giro nella stazione fantasma.",
     "kind": "curio"
    }
   ],
   "bagni": {
    "where": "Il parco di City Hall dovrebbe avere i bagni vicino alla fontana, ma non sono riuscito a verificarlo. Alternativa sicura: l'Oculus oppure tornare in hotel.",
    "cost": "Gratis",
    "clean": "Non verificato"
   },
   "steps": [
    {
     "id": "gm-park",
     "title": "Dal ponte al municipio",
     "where": "Scesi dalla rampa del ponte, attraversate il parco di City Hall verso Broadway.",
     "look": [
      "Il municipio di New York, il palazzo bianco con la cupola dentro il parco."
     ],
     "tips": [
      "Bagni: il parco non li ha sicuri. Meglio aspettare Macy's."
     ]
    },
    {
     "id": "gm-r",
     "title": "Linea R a City Hall",
     "where": "Ingresso su Broadway, sul lato ovest del parco. Linea R (gialla), direzione Uptown & Queens.",
     "look": [
      "Nella carrozza: cartelli e pubblicità in tante lingue. È la sfida di Vinnie."
     ],
     "tips": [
      "Fermate: Canal St, Prince St, 8 St, 14 St–Union Sq, 23 St, 28 St, 34 St–Herald Sq."
     ]
    },
    {
     "id": "gm-out",
     "title": "Uscita a Herald Square",
     "where": "Scendete a 34 St–Herald Sq e seguite i cartelli per la 34th Street e Broadway: Macy's è sopra di voi.",
     "look": [
      "Il grande palazzo di mattoni con la stella rossa e le vetrine di Natale."
     ],
     "tips": [
      "Uscite in superficie e guardate subito le vetrine su Broadway e sulla 34ª."
     ]
    }
   ]
  },
  {
   "id": "sun-macys",
   "name": "Macy's Herald Square",
   "kind": "key",
   "start": "17:30",
   "durationMin": 50,
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
     "text": "Il sito di Macy's indica la domenica 11–21: c'è tempo. Il piano terra di domenica sera è pieno, salite subito ai piani alti.",
     "when": "arrive"
    },
    {
     "text": "Alle 18 in punto, sulla piazzetta a nord del negozio, i due fabbri di bronzo dell'orologio di Minerva battono la campana: uscite due minuti prima.",
     "when": "always"
    },
    {
     "text": "Le scale mobili di legno sono ai piani alti: prendete le scale mobili e salite oltre il quinto piano.",
     "when": "always"
    },
    {
     "text": "In ritardo: solo vetrine su Broadway e sulla 34ª, poi dritti verso l'Empire State.",
     "when": "late"
    },
    {
     "text": "Bagni: dentro Macy's, ai piani. Chiedete al personale all'ingresso.",
     "when": "always"
    },
    {
     "text": "Se piove: restate dentro più a lungo e saltate la camminata sulla Quinta: da Herald Square all'hotel sono 10 minuti a piedi lungo Broadway.",
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
     "title": "Holiday Lane",
     "where": "Ai piani alti, chiedete Holiday Lane. Santaland all'8° piano apre il 27 novembre.",
     "look": [
      "Holiday Lane: corridoi di palline e decorazioni di Natale.",
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
   },
   "bagni": {
    "where": "Dentro Macy's: i bagni sono ai piani, può servire salire. Chiedete al personale all'ingresso.",
    "cost": "Gratis",
    "clean": "Generalmente affidabili secondo guide locali; non verificato"
   }
  },
  {
   "id": "sun-empire",
   "name": "L'Empire State Building visto da sotto",
   "kind": "optional",
   "start": "18:20",
   "durationMin": 15,
   "cost": "Gratis",
   "pos": [
    40.74844,
    -73.98566
   ],
   "radiusM": 120,
   "hook": "Il grattacielo più famoso del mondo, visto da sotto: la testa all'indietro, e in cima le luci di stasera.",
   "story": "Fu costruito in poco più di un anno, nel 1930–31, ed è alto 381 metri fino al tetto, 443 con l'antenna. Per quarant'anni è stato il più alto del mondo. Ogni sera la cima cambia colore: per una festa, una squadra o una causa.",
   "look": [
    "Dall'angolo della Quinta con la 34ª: la torre a gradoni che si stringe verso l'alto.",
    "In cima: le luci colorate di stasera e l'antenna.",
    "L'ingresso sulla Quinta, con le porte dorate e il disegno del palazzo sopra."
   ],
   "tips": [
    {
     "text": "Da Macy's: sulla 34ª verso est, due isolati fino alla Quinta. Guardate in su prima di attraversare.",
     "when": "arrive"
    },
    {
     "text": "La vista migliore della cima non è sotto, ma da un isolato più a nord sulla Quinta, alla 35ª o 36ª: si vede tutta la torre.",
     "when": "always"
    },
    {
     "text": "In ritardo: guardatelo mentre camminate sulla 34ª, senza fermarvi.",
     "when": "late"
    }
   ],
   "steps": [
    {
     "id": "emp-34",
     "title": "Sulla 34ª verso la Quinta",
     "where": "Uscite da Macy's sulla 34ª e camminate verso est, verso la Quinta, due isolati.",
     "look": [
      "La torre che spunta sopra i palazzi davanti a voi."
     ],
     "tips": [
      "Attraversate solo con il semaforo."
     ]
    },
    {
     "id": "emp-angolo",
     "title": "All'angolo con la Quinta",
     "where": "All'incrocio tra la 34ª e la Quinta siete sotto la torre. Girate a sinistra, verso nord.",
     "look": [
      "Le porte dorate dell'ingresso.",
      "Le luci della cima."
     ],
     "tips": [
      "Per la foto intera camminate fino alla 36ª e voltatevi."
     ]
    }
   ],
   "bagni": {
    "where": "Nessun bagno pubblico qui. Usate quelli di Macy's prima di uscire.",
    "cost": "-",
    "clean": "-"
   }
  },
  {
   "id": "sun-fifth",
   "name": "Quinta Avenue verso la biblioteca",
   "kind": "move",
   "start": "18:35",
   "durationMin": 15,
   "cost": "Gratis",
   "pos": [
    40.75049,
    -73.98303
   ],
   "radiusM": 150,
   "hook": "Otto isolati a piedi sulla Quinta, dalla 34ª alla 42ª, con le vetrine accese.",
   "story": "Questo tratto della Quinta un tempo era pieno di case di ricchi: l'Empire State è sorto dove c'era l'hotel Waldorf-Astoria. Oggi sono negozi e uffici, e a Natale le vetrine si accendono una dopo l'altra.",
   "look": [
    "I numeri delle vie sui lampioni: dalla 34ª alla 42ª.",
    "Voltandovi indietro alla 36ª: l'Empire State intero, illuminato.",
    "In fondo a sinistra: il palazzo bianco con la scalinata e i leoni, la biblioteca."
   ],
   "tips": [
    {
     "text": "Camminate sul lato ovest della Quinta (a sinistra salendo verso nord): arrivate direttamente davanti ai leoni.",
     "when": "always"
    },
    {
     "text": "Stanchi: autobus M1–M4 verso nord sulla Quinta, due fermate; $3 a testa.",
     "when": "tired"
    },
    {
     "text": "In ritardo: saltate la biblioteca e da qui andate dritti in hotel lungo la 40ª verso ovest: 15 minuti.",
     "when": "late"
    }
   ],
   "steps": [
    {
     "id": "f5-start",
     "title": "Verso nord",
     "where": "Dall'Empire State girate a sinistra sulla Quinta e salite verso nord, lato ovest.",
     "look": [
      "I numeri delle vie che crescono: 35, 36, 37…"
     ],
     "tips": []
    },
    {
     "id": "f5-36",
     "title": "Voltatevi alla 36ª",
     "where": "All'incrocio con la 36ª fermatevi e guardate indietro.",
     "look": [
      "L'Empire State intero, con la cima colorata."
     ],
     "tips": [
      "È il punto migliore per la foto."
     ]
    },
    {
     "id": "f5-40",
     "title": "Alla 40ª",
     "where": "Alla 40ª, sulla sinistra, comincia la biblioteca.",
     "look": [
      "Le colonne e la scalinata bianca."
     ],
     "tips": []
    }
   ],
   "bagni": {
    "where": "Lungo la Quinta non ci sono bagni pubblici.",
    "cost": "-",
    "clean": "-"
   }
  },
  {
   "id": "sun-nypl",
   "name": "New York Public Library",
   "kind": "optional",
   "start": "18:50",
   "durationMin": 15,
   "cost": "Gratis",
   "pos": [
    40.75334,
    -73.98215
   ],
   "radiusM": 70,
   "hook": "Due leoni di pietra davanti alla biblioteca più famosa di New York: stasera si salutano da fuori.",
   "story": "I due leoni si chiamano Pazienza e Fortezza: glieli diede il sindaco La Guardia negli anni della Grande Depressione, perché erano le due cose che servivano ai newyorkesi. Nella sala dei bambini, al piano terra, ci sono i pupazzi veri di Christopher Robin: Winnie, Ih-Oh, Pimpi, Kanga e Tigro. Manca Ro: il ragazzo lo perse in un frutteto negli anni Trenta e non fu mai più ritrovato.",
   "look": [
    "I due leoni sulla scalinata: Pazienza a sinistra guardando la porta, Fortezza a destra.",
    "La facciata bianca con le colonne e le statue sopra.",
    "Dietro, verso la Sesta, le luci di Bryant Park."
   ],
   "tips": [
    {
     "text": "La domenica la biblioteca è chiusa o apre solo nel primo pomeriggio (le fonti non concordano): alle 18:50 si vedono i leoni e la facciata da fuori. Dentro e Winnie the Pooh: martedì nell'ora libera.",
     "when": "always"
    },
    {
     "text": "I leoni: Pazienza è a sinistra guardando la porta, verso la 40ª; Fortezza a destra, verso la 42ª.",
     "when": "arrive"
    },
    {
     "text": "In ritardo: foto con un leone e via verso l'hotel.",
     "when": "late"
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
   ],
   "bagni": {
    "where": "La biblioteca la sera della domenica è chiusa: niente bagni. In hotel tra 10 minuti, oppure nei locali di Bryant Park.",
    "cost": "-",
    "clean": "-"
   }
  },
  {
   "id": "sun-go-hotel",
   "name": "Da Bryant Park all'hotel, a piedi",
   "kind": "move",
   "start": "19:05",
   "durationMin": 15,
   "cost": "Gratis",
   "pos": [
    40.75367,
    -73.98367
   ],
   "radiusM": 200,
   "hook": "Si passa dietro la biblioteca, in mezzo alle casette accese di Bryant Park, e in 10 minuti siete in hotel.",
   "story": "Bryant Park sta sopra un pezzo della biblioteca: sotto il prato ci sono chilometri di scaffali. D'inverno diventa il Winter Village, con la pista di pattinaggio gratuita e le casette di vetro. Lunedì sera ci tornate con calma.",
   "look": [
    "La pista di pattinaggio illuminata in mezzo ai grattacieli.",
    "Le casette di vetro con le luci intorno alla pista.",
    "Uscendo verso la Sesta: le luci di Times Square in fondo alla 42ª."
   ],
   "tips": [
    {
     "text": "Entrate in Bryant Park dal retro della biblioteca, attraversatelo fino alla Sesta, poi sulla 41ª o 42ª verso ovest fino all'hotel, al 220 West 41st, tra la Settima e l'Ottava. Circa 10 minuti.",
     "when": "always"
    },
    {
     "text": "Cena: i posti vicini all'hotel sono nella pagina Mangiare di questa tappa.",
     "when": "always"
    },
    {
     "text": "Stanchi: niente pista stasera, c'è lunedì; dritti in hotel.",
     "when": "tired"
    }
   ],
   "steps": [
    {
     "id": "gh-park",
     "title": "Dentro Bryant Park",
     "where": "Girate intorno alla biblioteca sulla 42ª o sulla 40ª ed entrate nel parco: la pista è al centro.",
     "look": [
      "Le casette accese e la pista."
     ],
     "tips": [
      "Lunedì sera è in programma: oggi solo un passaggio."
     ]
    },
    {
     "id": "gh-sesta",
     "title": "Verso la Sesta e la Settima",
     "where": "Uscite dal parco sulla Sesta Avenue, attraversate e proseguite sulla 41ª verso ovest.",
     "look": [
      "In fondo alla via, le luci di Times Square."
     ],
     "tips": []
    },
    {
     "id": "gh-hotel",
     "title": "L'hotel",
     "where": "Attraversata la Settima, l'hotel è sulla 41ª, al numero 220, accanto al Nederlander Theatre.",
     "look": [
      "L'insegna luminosa del teatro accanto all'hotel."
     ],
     "tips": []
    }
   ],
   "bagni": {
    "where": "Nel Winter Village i bagni pubblici del parco, sul lato della 42ª: non verificati la domenica sera. Altrimenti l'hotel, a 10 minuti.",
    "cost": "Gratis",
    "clean": "Non verificato"
   }
  }
 ],
 "walks": [
  {
   "from": "ferry",
   "to": "bull",
   "minutes": 5,
   "how": "A piedi: uscite dal terminal, attraversate State Street e risalite verso Bowling Green, 450 metri.",
   "mapsMode": "walking",
   "tips": [
    {
     "pos": [
      40.7049,
      -74.01368
     ],
     "text": "Il prato recintato davanti a voi è Bowling Green, il parco più antico di New York."
    }
   ]
  },
  {
   "from": "bull",
   "to": "memorial",
   "minutes": 15,
   "how": "A piedi lungo Broadway verso nord, poi a sinistra su Liberty Street, circa 1,1 km.",
   "mapsMode": "walking",
   "tips": [
    {
     "pos": [
      40.70806,
      -74.01222
     ],
     "text": "All'angolo con Wall Street, la chiesa di Trinity Church con il cimitero: qui è sepolto Alexander Hamilton, quello del musical."
    },
    {
     "pos": [
      40.70558,
      -74.01337
     ],
     "text": "Guardate per terra: le strisce di granito nero nel marciapiede di Broadway sono le parate con le stelle filanti. Scommessa di Vinnie."
    }
   ]
  },
  {
   "from": "dumbo",
   "to": "bridge",
   "minutes": 6,
   "how": "A piedi lungo Washington Street, in salita, fino a Prospect Street: la scala per il ponte è sotto la rampa, 500 metri.",
   "mapsMode": "walking",
   "tips": [
    {
     "pos": [
      40.7032,
      -73.98958
     ],
     "text": "Alzate la testa sotto il Manhattan Bridge: i treni della metro passano sopra ogni pochi minuti. Scommessa di Vinnie."
    }
   ]
  },
  {
   "from": "sun-go-ferry",
   "to": "ferry",
   "minutes": 25,
   "how": "Linea 1 da Times Sq–42 St fino a South Ferry, il capolinea.",
   "mapsMode": "transit",
   "tips": []
  },
  {
   "from": "memorial",
   "to": "sun-pranzo",
   "minutes": 5,
   "how": "L'Oculus è la costruzione bianca a forma di ali sul lato est del piazzale; Brookfield Place è a ovest, oltre West Street, raggiungibile anche dal passaggio sotterraneo.",
   "mapsMode": "walking",
   "tips": []
  },
  {
   "from": "sun-pranzo",
   "to": "century21",
   "minutes": 4,
   "how": "Century 21 è al 22 di Cortlandt Street, sul lato est del World Trade Center, tra Church Street e Broadway.",
   "mapsMode": "walking",
   "tips": []
  },
  {
   "from": "century21",
   "to": "sun-go-dumbo",
   "minutes": 4,
   "how": "Su Broadway verso nord fino a Fulton Street, ingresso della metro A e C.",
   "mapsMode": "walking",
   "tips": []
  },
  {
   "from": "sun-go-dumbo",
   "to": "dumbo",
   "minutes": 20,
   "how": "Metro A o C fino a High St, poi a piedi in discesa per Old Fulton Street fino al fiume.",
   "mapsMode": "transit",
   "tips": []
  },
  {
   "from": "bridge",
   "to": "sun-go-macys",
   "minutes": 5,
   "how": "Scesi dalla rampa del ponte, attraversate il parco di City Hall fino a Broadway: la metro R è all'angolo, 400 metri.",
   "mapsMode": "walking",
   "tips": []
  },
  {
   "from": "sun-go-macys",
   "to": "sun-macys",
   "minutes": 20,
   "how": "Linea R direzione Uptown & Queens fino a 34 St–Herald Sq, 8 fermate.",
   "mapsMode": "transit",
   "tips": []
  },
  {
   "from": "sun-macys",
   "to": "sun-empire",
   "minutes": 5,
   "how": "Sulla 34ª verso est fino alla Quinta, due isolati.",
   "mapsMode": "walking",
   "tips": []
  },
  {
   "from": "sun-empire",
   "to": "sun-fifth",
   "minutes": 2,
   "how": "Girate a sinistra sulla Quinta, verso nord.",
   "mapsMode": "walking",
   "tips": []
  },
  {
   "from": "sun-fifth",
   "to": "sun-nypl",
   "minutes": 12,
   "how": "Quinta Avenue verso nord, lato ovest, dalla 34ª alla 41ª: i leoni sono sulla scalinata.",
   "mapsMode": "walking",
   "tips": []
  },
  {
   "from": "sun-nypl",
   "to": "sun-go-hotel",
   "minutes": 3,
   "how": "Dietro la biblioteca, nel parco: Bryant Park.",
   "mapsMode": "walking",
   "tips": []
  }
 ],
 "food": [
  {
   "id": "sun-leos",
   "name": "Leo's Bagels",
   "type": "bagel",
   "category": "colazione",
   "order": "Bagel everything con scallion cream cheese per i grandi, plain con burro per i bambini. Il caffè è buono.",
   "price": "$30–40 in 4",
   "pos": [
    40.70491,
    -74.00971
   ],
   "hours": {
    "0": [
     [
      "07:00",
      "15:00"
     ]
    ]
   },
   "near": [
    "ferry",
    "bull"
   ],
   "note": "A 7 minuti dal terminal: perfetto per una seconda colazione dopo il traghetto.",
   "rating": {
    "stars": 4.3,
    "count": 2828,
    "source": "Google"
   },
   "buzz": "Bagel fatti a mano e ben farciti; fila a colazione ma veloce, pochissimi posti a sedere."
  },
  {
   "id": "sun-joes-fulton",
   "name": "Joe's Pizza (Fulton Street)",
   "type": "pizza al taglio",
   "category": "tipico",
   "order": "Un trancio plain e uno pepperoni a testa, piegati a metà come i newyorkesi.",
   "price": "$30–40 in 4",
   "pos": [
    40.71012,
    -74.00775
   ],
   "hours": {
    "0": [
     [
      "10:00",
      "23:59"
     ]
    ]
   },
   "near": [
    "memorial",
    "sun-pranzo"
   ],
   "note": "Si mangia in piedi o si porta via: ideale se siete in ritardo.",
   "rating": {
    "stars": 4.5,
    "count": 7364,
    "source": "Google"
   },
   "buzz": "Tranci sottili e croccanti, fila che scorre in pochi minuti; locale piccolo, pochissimi posti: meglio da asporto.",
   "img": {
    "src": "img/food-sun-joes-fulton.webp",
    "credit": "Kiran891, CC BY-SA 4.0, via Wikimedia Commons"
   }
  },
  {
   "id": "sun-hudson-eats",
   "name": "Hudson Eats (Brookfield Place)",
   "type": "food court",
   "category": "pranzo",
   "order": "Ognuno sceglie il suo banco: burger, insalate, sushi, panini. Tavoli con le vetrate sul fiume Hudson.",
   "price": "$50–80 in 4",
   "pos": [
    40.71278,
    -74.01588
   ],
   "hours": {
    "0": [
     [
      "08:00",
      "19:00"
     ]
    ]
   },
   "near": [
    "memorial",
    "sun-pranzo"
   ],
   "note": "Caldo, bagni puliti, 5 minuti dal Memoriale passando per il ponte coperto.",
   "rating": {
    "stars": 4.5,
    "count": 382,
    "source": "Google"
   },
   "buzz": "Tanta scelta, ognuno trova qualcosa; tavoli pieni all'ora di pranzo ma girano in fretta, prezzi da centro."
  },
  {
   "id": "sun-juliana",
   "name": "Juliana's",
   "type": "pizza al forno a carbone",
   "category": "pranzo",
   "order": "Una Margherita grande e una seconda pizza a scelta: solo pizze intere, niente tranci.",
   "price": "$90–110 in 4",
   "pos": [
    40.70276,
    -73.99343
   ],
   "hours": {
    "0": [
     [
      "11:30",
      "15:15"
     ],
     [
      "16:00",
      "21:00"
     ]
    ]
   },
   "near": [
    "dumbo"
   ],
   "note": "Chiude a metà pomeriggio per riattizzare il forno.",
   "rating": {
    "stars": 4.6,
    "count": 7069,
    "source": "Google"
   },
   "buzz": "Pizza sottile e croccante dal forno a carbone; nel weekend si aspetta fuori, per alcuni è cara.",
   "img": {
    "src": "img/food-sun-juliana.webp",
    "credit": "(User:Wgreaves), CC BY-SA 4.0, via Wikimedia Commons"
   }
  },
  {
   "id": "sun-grimaldis",
   "name": "Grimaldi's",
   "type": "pizza al forno a carbone",
   "category": "pranzo",
   "order": "Pizza grande con mozzarella fresca e basilico, da dividere in due.",
   "price": "$70–100 in 4",
   "pos": [
    40.70259,
    -73.99323
   ],
   "hours": {
    "0": [
     [
      "11:30",
      "23:00"
     ]
    ]
   },
   "near": [
    "dumbo"
   ],
   "note": "Niente prenotazioni: spesso c'è fila sul marciapiede.",
   "rating": {
    "stars": 4.2,
    "count": 9801,
    "source": "Google"
   },
   "buzz": "Solo pizze intere, buona la Margherita; senza prenotazione la fila è lunga nel weekend, servizio a volte lento.",
   "img": {
    "src": "img/food-sun-grimaldis.webp",
    "credit": "Jim.henderson, CC0, via Wikimedia Commons"
   }
  },
  {
   "id": "sun-timeout",
   "name": "Time Out Market",
   "type": "mercato coperto",
   "category": "snack",
   "order": "Mini ciambelle calde da Doughnuttery, bagel da Ess-a-Bagel, pizza da Fornino. Poi tutti in terrazza all'ultimo piano.",
   "price": "$40–90 in 4",
   "pos": [
    40.7036,
    -73.99189
   ],
   "hours": {
    "0": [
     [
      "08:00",
      "22:00"
     ]
    ]
   },
   "near": [
    "dumbo",
    "bridge"
   ],
   "note": "Bagni, caldo e la vista sui due ponti dal tetto.",
   "rating": {
    "stars": 4.5,
    "count": 8730,
    "source": "Google"
   },
   "buzz": "Tanta scelta, terrazza gratis con vista sui ponti; nelle ore di punta tavoli contesi e coda ai bagni.",
   "img": {
    "src": "img/food-sun-timeout.webp",
    "credit": "(User:Wgreaves), CC BY-SA 4.0, via Wikimedia Commons"
   }
  },
  {
   "id": "sun-jacques-torres",
   "name": "Jacques Torres Chocolate",
   "type": "cioccolateria",
   "category": "snack",
   "order": "Cioccolata calda densa per i bambini, «Wicked» al peperoncino per i grandi, un cookie al cioccolato da dividere.",
   "price": "$30–40 in 4",
   "pos": [
    40.70316,
    -73.99147
   ],
   "hours": {
    "0": [
     [
      "10:00",
      "19:00"
     ]
    ]
   },
   "near": [
    "dumbo",
    "bridge"
   ],
   "note": "Dalla vetrina si vede il laboratorio.",
   "rating": {
    "stars": 4.4,
    "count": 1032,
    "source": "Google"
   },
   "buzz": "Cookie grandi e cioccolata calda promossi; negozio spazioso con tavoli e assaggi, prezzi un po' alti.",
   "img": {
    "src": "img/food-sun-jacques-torres.webp",
    "credit": "(User:Wgreaves), CC BY-SA 4.0, via Wikimedia Commons"
   }
  },
  {
   "id": "sun-van-leeuwen",
   "name": "Van Leeuwen",
   "type": "gelateria",
   "category": "snack",
   "order": "Una coppetta a testa con due gusti; c'è sempre anche la versione vegana.",
   "price": "$30–40 in 4",
   "pos": [
    40.70318,
    -73.99471
   ],
   "hours": {},
   "near": [
    "dumbo"
   ],
   "note": "Dentro la vecchia casetta dei pompieri sul molo di Fulton Ferry.",
   "rating": {
    "stars": 4.4,
    "count": 680,
    "source": "Google"
   },
   "buzz": "Vista sull'acqua e tante opzioni vegane; niente posti al chiuso e niente contanti, si paga con carta.",
   "img": {
    "src": "img/food-sun-van-leeuwen.webp",
    "credit": "Tdorante10, CC BY-SA 4.0, via Wikimedia Commons"
   }
  },
  {
   "id": "sun-shake-dumbo",
   "name": "Shake Shack DUMBO",
   "type": "burger",
   "category": "snack",
   "order": "Patatine crinkle e frozen custard; uno ShackBurger se qualcuno ha ancora fame.",
   "price": "$40–80 in 4",
   "pos": [
    40.70304,
    -73.99406
   ],
   "hours": {
    "0": [
     [
      "11:00",
      "21:00"
     ]
    ]
   },
   "near": [
    "dumbo"
   ],
   "note": "All'ingresso del parco, accanto al molo del traghetto.",
   "rating": {
    "stars": 4.3,
    "count": 5289,
    "source": "Google"
   },
   "buzz": "Vista sui ponti e personale gentile; nelle ore di punta attesa lunga, tavoli non sempre puliti, bagni scarsi."
  },
  {
   "id": "sun-juniors",
   "name": "Junior's",
   "type": "diner e cheesecake",
   "category": "cena",
   "order": "Burger o pastrami per cena, poi una fetta di cheesecake originale ogni due persone.",
   "price": "$100–140 in 4",
   "pos": [
    40.75822,
    -73.98663
   ],
   "hours": {
    "0": [
     [
      "07:00",
      "23:59"
     ]
    ]
   },
   "near": [
    "sun-go-hotel"
   ],
   "note": "Broadway angolo 45th Street, 8 minuti dall'hotel. La cheesecake si compra anche da portare via.",
   "rating": {
    "stars": 4.4,
    "count": 16030,
    "source": "Google"
   },
   "buzz": "La cheesecake è il motivo per venire; sala ampia e adatta alle famiglie, molto affollata di turisti.",
   "img": {
    "src": "img/food-sun-juniors.webp",
    "credit": "Kidfly182, CC BY-SA 4.0, via Wikimedia Commons"
   }
  },
  {
   "id": "sun-johns",
   "name": "John's of Times Square",
   "type": "pizza al forno a carbone",
   "category": "cena",
   "order": "Pizze intere, niente tranci. Sedetevi nella sala grande sotto la cupola di vetri colorati.",
   "price": "$80–110 in 4",
   "pos": [
    40.75823,
    -73.9884
   ],
   "hours": {
    "0": [
     [
      "11:30",
      "23:30"
     ]
    ]
   },
   "near": [
    "sun-go-hotel"
   ],
   "note": "È dentro una vecchia chiesa. 5 minuti dall'hotel, su 44th Street.",
   "rating": {
    "stars": 4.3,
    "count": 6777,
    "source": "Google"
   },
   "buzz": "La sala nella vecchia chiesa conquista; pizze intere buone, ma condimenti cari e attesa perché cotte al momento.",
   "img": {
    "src": "img/food-sun-johns.webp",
    "credit": "Jim.henderson, CC BY-SA 4.0, via Wikimedia Commons"
   }
  },
  {
   "id": "sun-carmines",
   "name": "Carmine's",
   "type": "italo-americano, porzioni da famiglia",
   "category": "cena",
   "order": "Due piatti per tutti e quattro: rigatoni e chicken parmigiana bastano e avanzano.",
   "price": "$120–170 in 4",
   "pos": [
    40.75751,
    -73.98671
   ],
   "hours": {
    "0": [
     [
      "11:30",
      "23:00"
     ]
    ]
   },
   "near": [
    "sun-go-hotel"
   ],
   "note": "Non è cucina italiana, è un'altra cosa: piatti enormi da dividere. Prenotare la domenica sera.",
   "rating": {
    "stars": 4.5,
    "count": 19679,
    "source": "Google"
   },
   "buzz": "Porzioni enormi da dividere, un piatto sfama tre persone; conto alto e tavoli stretti, meglio prenotare."
  },
  {
   "id": "sun-los-tacos",
   "name": "Los Tacos No. 1",
   "type": "tacos",
   "category": "cena",
   "order": "Taco adobada, il maiale al pastor, e quesadilla di carne asada. Si mangia al bancone in piedi.",
   "price": "$50–70 in 4",
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
    ]
   },
   "near": [
    "sun-go-hotel"
   ],
   "note": "Veloce: in 15 minuti avete cenato. 3 minuti dall'hotel.",
   "rating": {
    "stars": 4.8,
    "count": 16502,
    "source": "Google"
   },
   "buzz": "Tacos fatti al momento e saporiti, l'adobada è la più amata; coda veloce, si mangia solo in piedi.",
   "img": {
    "src": "img/food-sun-los-tacos.webp",
    "credit": "BanjoZebra, CC BY 4.0, via Wikimedia Commons"
   }
  },
  {
   "id": "sun-crifdogs",
   "name": "Crif Dogs (con la cabina del telefono)",
   "type": "hot dog con porta segreta",
   "category": "cena",
   "order": "Un hot dog a testa, classico con senape e crauti, e le tater tots (crocchette di patate) da dividere. Poi cercate la cabina del telefono nel locale: è l'ingresso del bar segreto PDT.",
   "price": "Economico, prezzi da verificare",
   "pos": [
    40.7273,
    -73.9841
   ],
   "near": [
    "sun-go-hotel"
   ],
   "note": "113 St Marks Place, East Village, tra First Avenue e Avenue A. Dall'hotel servono circa 25 minuti in metro. Orari non chiari: una fonte dice aperto dalle 17, un'altra da mezzogiorno, controllate prima di partire. Il bar PDT dietro la cabina è un cocktail bar di solito su prenotazione: non ho verificato se ammette bambini, quindi qui il gioco è la cabina, non il bar.",
   "buzz": "Hot dog con tante farciture e tater tots molto lodate; locale piccolo e stretto, con vecchi videogiochi.",
   "vinnie": "Questa è roba mia. Una cabina del telefono, in un posto dove nessuno usa un telefono da vent'anni. Sembra niente, e invece in giro lo sanno tutti. Io sono un piccione, so tenere un segreto, quindi non dico altro. Voi fate la foto alla cabina, e se vi chiedono perché, dite che cercavate me."
  },
  {
   "id": "sun-ellens",
   "name": "Ellen's Stardust Diner",
   "type": "diner con camerieri che cantano",
   "category": "cena",
   "order": "Burger e milkshake: si viene per i camerieri che cantano Broadway fra un piatto e l'altro.",
   "price": "$120–160 in 4",
   "pos": [
    40.76185,
    -73.9835
   ],
   "hours": {
    "0": [
     [
      "07:00",
      "23:59"
     ]
    ]
   },
   "near": [
    "sun-go-hotel"
   ],
   "note": "Non prende prenotazioni: c'è quasi sempre fila. Broadway angolo 51st Street, 12 minuti dall'hotel.",
   "rating": {
    "stars": 4.4,
    "count": 25090,
    "source": "Google"
   },
   "buzz": "Camerieri cantanti sono lo spettacolo, cibo da diner nella media; coda di 15-25 minuti, servizio già nel conto.",
   "img": {
    "src": "img/food-sun-ellens.webp",
    "credit": "Leonard J. DeFrancisci, CC BY-SA 3.0, via Wikimedia Commons"
   }
  },
  {
   "id": "sun-shake-44",
   "name": "Shake Shack Theater District",
   "type": "burger",
   "category": "cena",
   "order": "ShackBurger, patatine crinkle e frozen custard.",
   "price": "$60–80 in 4",
   "pos": [
    40.75845,
    -73.98917
   ],
   "hours": {},
   "near": [
    "sun-go-hotel"
   ],
   "note": "Ottava Avenue angolo 44th Street, 4 minuti dall'hotel.",
   "rating": {
    "stars": 4.4,
    "count": 15253,
    "source": "Google"
   },
   "buzz": "Patatine e chicken bites lodati, staff gentile; nel weekend strapieno, quando i tavoli finiscono si mangia in piedi."
  },
  {
   "id": "sun-joes-broadway",
   "name": "Joe's Pizza (Broadway)",
   "type": "pizza al taglio",
   "category": "tipico",
   "order": "Trancio plain e pepperoni al banco, da mangiare in camera.",
   "price": "$25–35 in 4",
   "pos": [
    40.75476,
    -73.98694
   ],
   "hours": {},
   "near": [
    "sun-go-hotel"
   ],
   "note": "Broadway angolo 40th Street, 3 minuti dall'hotel: la cena più veloce se sono crollati.",
   "rating": {
    "stars": 4.4,
    "count": 27451,
    "source": "Google"
   },
   "buzz": "Tranci sottili e caldi, fila spesso lunga ma rapida; pochi posti, niente bagno: è da asporto."
  },
  {
   "id": "sun-foodgallery",
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
    "sun-macys"
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
   "id": "sun-chodanggol",
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
    "sun-macys"
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
   "id": "sun-bcd",
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
    "sun-macys"
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
   "id": "sun-woorijip",
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
    "sun-macys"
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
   "id": "sun-winter-village",
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
    "sun-nypl",
    "sun-go-hotel"
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
   "id": "sun-ladym",
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
    "sun-nypl",
    "sun-go-hotel"
   ],
   "note": "36 West 40th Street, di fronte al lato sud di Bryant Park.",
   "rating": {
    "stars": 4.1,
    "count": 1264,
    "source": "Google"
   },
   "buzz": "Mille crêpes delicate e poco dolci; una fetta supera i 10 dollari, locale piccolo con pochi posti."
  }
 ],
 "missions": [
  {
   "id": "sun-go-parole",
   "stopId": "sun-go-ferry",
   "type": "bet",
   "title": "Le parole sul muro",
   "read": "Vinnie qui. Quando il treno si ferma a WTC Cortlandt, le pareti sono bianche e piene di parole scritte in rilievo. Vinnie scommette che non riuscite a leggerne una intera prima che il treno riparta. Uno guarda il muro a destra, l'altro a sinistra. Ogni parola vale solo se la dite tutti e due ad alta voce.",
   "roles": [
    "Guarda il muro a destra",
    "Guarda il muro a sinistra"
   ],
   "vinnieBet": "Nessuna parola letta prima che il treno riparta",
   "parentHint": "WTC Cortlandt è la terza fermata prima del capolinea. Le pareti sono un'opera di marmo bianco con le lettere in rilievo dei testi della Dichiarazione d'Indipendenza americana e della Dichiarazione universale dei diritti umani. Basta una parola intera, anche in inglese: per esempio people, rights, free."
  },
  {
   "id": "sun-statua",
   "stopId": "ferry",
   "type": "describe",
   "title": "La signora verde",
   "read": "Ehi, squadra, sono Vinnie. Quella signora verde la vedo dal mio molo tutte le mattine, e scommetto che non sapete nemmeno cosa tiene in mano. Facciamo così: uno di voi guarda la foto per cinque secondi e la descrive all'altro, senza fargliela vedere. L'altro deve trovare la Statua là fuori, sul lato destro, prima che il traghetto le passi davanti. Poi mi dite insieme, con una voce sola: in quale mano tiene la fiaccola, e cosa tiene nell'altra?",
   "roles": [
    "Guarda la foto per cinque secondi e la descrive a parole",
    "Non vede la foto: trova la Statua dal parapetto e controlla"
   ],
   "img": {
    "src": "img/sun-statua.webp",
    "credit": "Cynthia Fascenelli Kirkeby, CC BY-SA 3.0, via Wikimedia Commons"
   },
   "parentHint": "Fiaccola nella mano destra, alzata. Nella sinistra una tavoletta con la data dell'indipendenza americana scritta in numeri romani. La Statua compare a destra circa 10 minuti dopo la partenza da Whitehall."
  },
  {
   "id": "sun-toro",
   "stopId": "bull",
   "type": "measure",
   "title": "Quanto è lungo il toro?",
   "read": "Vinnie qui. Questo toro di bronzo pesa come tre automobili. Io dico che è lungo come quattro bambini sdraiati in fila. Non ci credete? Decidete insieme un numero di vostri passi, poi uno parte dal muso e l'altro dalla coda, e contate i passi finché vi incontrate. Chi va più vicino, voi o io, si prende il pezzo di chiave.",
   "roles": [
    "Parte dal muso e conta i passi",
    "Parte dalla coda, conta e fa la somma"
   ],
   "vinnieBet": "Lungo come quattro bambini sdraiati",
   "parentHint": "Il toro è lungo circa 4,9 metri: con passi da bambino di 50–60 cm sono 8–10 passi. Quattro bambini sdraiati di 1,30–1,45 m fanno 5,2–5,8 m: Vinnie esagera un po'. C'è spesso coda per le foto: misurate di lato, senza toccare la gente in fila."
  },
  {
   "id": "sun-albero",
   "stopId": "memorial",
   "type": "describe",
   "title": "L'albero che è rimasto",
   "read": "Qui si parla piano, anche io abbasso la voce. In questa piazza c'è un albero speciale: era qui l'11 settembre 2001, è stato trovato bruciato e con un solo ramo vivo, lo hanno curato e riportato a casa. Lo chiamano l'albero sopravvissuto. Uno di voi legge questo indizio all'altro: è un pero, ha intorno un piccolo recinto basso, e sta tra le due vasche, più vicino a quella sud. Trovatelo insieme senza correre. Quando lo vedete, guardate i rami nuovi e quelli vecchi: sapete distinguerli?",
   "roles": [
    "Legge gli indizi e guida",
    "Cerca l'albero e indica i rami nuovi"
   ],
   "parentHint": "Il Survivor Tree è un pero di Callery tra le due vasche, vicino a quella sud, con una piccola recinzione. Si vedono i rami più lisci cresciuti dopo il 2001. Non c'è vincitore da gridare: se lo trovano con calma, vince la squadra. Sui nomi incisi intorno alle vasche a volte c'è una rosa bianca: è il compleanno di quella persona."
  },
  {
   "id": "sun-oculus",
   "stopId": "sun-pranzo",
   "type": "describe",
   "title": "Le costole dell'Oculus",
   "read": "L'Oculus è bianco e ha tante costole che salgono verso il cielo, come un uccello che apre le ali. Prima di sedervi a mangiare, uno di voi sceglie in segreto un dettaglio in alto, una luce, un cartello o una costola diversa dalle altre, e lo descrive all'altro senza indicarlo. L'altro deve trovarlo con il dito. Poi vi scambiate. Vinnie scommette che vi perdete tra tutte quelle costole.",
   "roles": [
    "Sceglie e descrive il dettaglio",
    "Lo cerca e lo indica"
   ],
   "parentHint": "Se mangiate a Brookfield Place invece che all'Oculus, fate la stessa cosa con le palme del Winter Garden. Va bene qualsiasi dettaglio, purché si possa vedere da dove siete."
  },
  {
   "id": "sun-century",
   "stopId": "century21",
   "type": "bet",
   "title": "La firma più economica",
   "read": "Century 21 è pieno di vestiti e borse firmate con lo sconto. Vinnie scommette che non trovate niente di una marca famosa sotto i 15 dollari. Avete dieci minuti: uno cerca le etichette con il nome della marca, l'altro legge il prezzo sul cartellino. Se trovate una cosa firmata sotto i 15 dollari, il pezzo è vostro. Non serve comprarla!",
   "roles": [
    "Cerca la marca famosa sull'etichetta",
    "Legge il prezzo sul cartellino"
   ],
   "vinnieBet": "Niente sotto i 15 dollari",
   "parentHint": "Calzini, cappelli e piccoli accessori di marca spesso costano meno di 15 dollari, soprattutto al piano degli accessori. Ricordate che al prezzo si aggiunge la tassa di circa il 9%: ma per la scommessa vale il cartellino."
  },
  {
   "id": "sun-go-tunnel",
   "stopId": "sun-go-dumbo",
   "type": "bet",
   "title": "Quanto dura il fiume?",
   "read": "Io il fiume lo attraverso in volo in un minuto. Voi ci passate sotto. Prima di partire decidete insieme quanti secondi resterete sotto l'acqua, tra Fulton St e High St. Uno fa partire il cronometro quando le porte si chiudono, l'altro lo ferma quando si riaprono a High St. Vinnie dice cinque minuti. Chi va più vicino si prende il pezzo.",
   "roles": [
    "Fa partire il cronometro",
    "Ferma il cronometro e legge il tempo"
   ],
   "vinnieBet": "5 minuti",
   "parentHint": "Tra Fulton St e High St è una sola tratta, quasi tutta sotto l'East River: di solito dura intorno a 2–3 minuti. Vince chi si avvicina di più al tempo misurato."
  },
  {
   "id": "sun-arco",
   "stopId": "dumbo",
   "type": "photo-spot",
   "title": "Il grattacielo nell'arco",
   "read": "Questa è la foto più famosa di Brooklyn. Tutti la fanno, quasi nessuno la fa giusta. C'è un grattacielo infilato proprio sotto l'arco del ponte, come un piccione nel nido. Trovate il punto esatto da cui è stata scattata e mettetevi lì, tutti e due. Spostatevi di tre passi e il grattacielo sparisce dietro il pilone. Vediamo se ci arrivate prima che passi il prossimo treno.",
   "roles": [
    "Guida: cammina lungo Washington Street finché la scena coincide",
    "Controlla l'arco e dice «stop» quando il grattacielo è al centro"
   ],
   "img": {
    "src": "img/sun-arco.webp",
    "credit": "Christian David, CC BY-SA 4.0, via Wikimedia Commons"
   },
   "parentHint": "Washington Street all'incrocio con Water Street, guardando verso il fiume. Il grattacielo nell'arco è l'Empire State Building, sotto l'arco del pilone del Manhattan Bridge. Restate sul bordo del marciapiede: le auto passano."
  },
  {
   "id": "sun-lampioni",
   "stopId": "bridge",
   "type": "measure",
   "title": "I passi fra i lampioni",
   "read": "Su questo ponte ci sono passati perfino ventuno elefanti, e non è crollato. Voi pesate meno, ma sapete contare? Scegliete due lampioni uno dopo l'altro. Prima mettetevi d'accordo: quanti passi ci sono fra uno e l'altro? Una sola risposta. Io dico cento, e di solito ho ragione. Poi partite insieme dal primo lampione, fianco a fianco: uno conta i passi del piede destro, l'altro quelli del sinistro. Al secondo lampione sommate. Chi ci va più vicino vince: voi o io.",
   "roles": [
    "Conta i passi del piede destro",
    "Conta i passi del piede sinistro"
   ],
   "vinnieBet": "100 passi",
   "parentHint": "Fatela nel primo tratto dopo la torre di Brooklyn, tenendo la destra, dove c'è meno gente. La somma dei due conteggi è il numero vero: vince chi aveva detto il numero più vicino, la squadra o Vinnie."
  },
  {
   "id": "sun-go-lingue",
   "stopId": "sun-go-macys",
   "type": "bet",
   "title": "Tre lingue in carrozza",
   "read": "In metro i cartelli e le pubblicità sono scritti in tante lingue, perché a New York si parlano centinaia di lingue. Vinnie scommette che prima di Herald Square non trovate tre lingue diverse scritte nella vostra carrozza. Uno cerca, l'altro controlla e tiene il conto.",
   "roles": [
    "Cerca le scritte",
    "Controlla che siano lingue diverse e tiene il conto"
   ],
   "vinnieBet": "Meno di 3 lingue prima di Herald Square",
   "parentHint": "Gli avvisi della metro sono spesso in inglese e spagnolo; nelle pubblicità si trovano spesso cinese, coreano, russo, bengalese. Valgono tutte, anche se non sapete leggerle: basta riconoscere che è un'altra scrittura o lingua."
  },
  {
   "id": "sun-vetrine",
   "stopId": "sun-macys",
   "type": "describe",
   "title": "La vetrina segreta",
   "read": "Le vetrine di Natale di Macy's raccontano una storia. Uno di voi sceglie in segreto una vetrina e la descrive all'altro con tre cose: un colore, un personaggio o un animale, e una cosa che si muove. L'altro deve trovare quella vetrina. Poi vi scambiate. Se una volta su due sbagliate, il pezzo lo tengo io, e mi metto in vetrina anche io.",
   "roles": [
    "Sceglie la vetrina e dice tre cose",
    "Cerca la vetrina giusta"
   ],
   "parentHint": "Le vetrine sono su Broadway e sulla 34ª. Se c'è tanta gente, fate la sfida sulle vetrine più vicine."
  },
  {
   "id": "sun-piani",
   "stopId": "sun-empire",
   "type": "bet",
   "title": "Quanti piani?",
   "read": "Guardate su, fino in cima. Vinnie dice che l'Empire State ha 50 piani, non uno di più: io ci sono volato sopra e li ho contati. Ognuno dice un numero ad alta voce, poi il genitore dice quello vero. Chi va più vicino tra voi due e me si prende il pezzo. E già che ci siete: di che colore è la cima stasera?",
   "roles": [
    "Dice un numero di piani",
    "Dice un altro numero e il colore della cima"
   ],
   "vinnieBet": "50 piani",
   "parentHint": "L'Empire State ha 102 piani (86 fino al primo osservatorio, 102 fino al secondo). Il colore della cima cambia ogni sera: non c'è un colore giusto, vale quello che vedete."
  },
  {
   "id": "sun-taxi",
   "stopId": "sun-fifth",
   "type": "bet",
   "title": "Gialli contro neri",
   "read": "Sulla Quinta passano tantissime auto. Al prossimo semaforo rosso fermatevi un minuto: uno conta i taxi gialli, l'altro le auto nere. Vinnie scommette che vincono le auto nere. Se vincono i taxi gialli, il pezzo è vostro.",
   "roles": [
    "Conta i taxi gialli",
    "Conta le auto nere"
   ],
   "vinnieBet": "Vincono le auto nere",
   "parentHint": "A Manhattan sono tantissime le auto nere con autista (Uber e simili). Fate contare per un minuto esatto con il cronometro del telefono. Chi vince lo decidono i numeri."
  },
  {
   "id": "sun-leoni",
   "stopId": "sun-nypl",
   "type": "describe",
   "title": "Pazienza e Fortezza",
   "read": "I due leoni della biblioteca si chiamano Pazienza e Fortezza. Ma quale è quale? Vinnie non lo ricorda mai. Indizio: Pazienza guarda verso la 40ª strada, Fortezza verso la 42ª. Uno di voi trova un cartello con il nome della via più vicina, l'altro decide quale leone è Pazienza. Poi mettetevi davanti a Pazienza e fate la vostra faccia più paziente, e davanti a Fortezza la faccia più forte. Foto!",
   "roles": [
    "Cerca il cartello della via",
    "Decide quale leone è Pazienza"
   ],
   "parentHint": "Pazienza è il leone sud, a sinistra guardando la porta della biblioteca, verso la 40ª. Fortezza è il leone nord, a destra, verso la 42ª. I cartelli delle vie sono agli angoli della Quinta."
  },
  {
   "id": "sun-cappelli",
   "stopId": "sun-go-hotel",
   "type": "bet",
   "title": "Cappelli da Babbo Natale",
   "read": "Ultima sfida della domenica. Da qui all'hotel Vinnie scommette che non trovate cinque persone con il cappello rosso di Babbo Natale o con le corna da renna. Uno conta i cappelli rossi, l'altro le corna. Sommate. Se arrivate a cinque prima della porta dell'hotel, il pezzo è vostro.",
   "roles": [
    "Conta i cappelli rossi",
    "Conta le corna da renna"
   ],
   "vinnieBet": "Meno di cinque prima dell'hotel",
   "parentHint": "A fine novembre intorno a Bryant Park e Times Square se ne vedono parecchi, anche sui venditori. Valgono anche i cerchietti e i maglioni con le renne, se volete essere generosi."
  },
  {
   "id": "sun-bet-targhe",
   "stopId": null,
   "type": "bet",
   "title": "Le strisce nel marciapiede",
   "read": "Scommetto che camminando su Broadway non trovate una scritta nel marciapiede con un anno che comincia per 18. Guardate per terra, non per aria! Uno controlla il marciapiede, l'altro legge. Quando la trovate, me la leggete insieme.",
   "roles": [
    "Cerca le strisce nere per terra",
    "Legge l'anno ad alta voce"
   ],
   "parentHint": "Sono le strisce di granito nero del Canyon of Heroes, una per ogni parata con le stelle filanti, con anno e nome. Le più antiche, dell'Ottocento, dovrebbero essere all'inizio di Broadway, vicino al toro."
  },
  {
   "id": "sun-bet-elicottero",
   "stopId": null,
   "type": "bet",
   "title": "Qualcuno vola più di me",
   "read": "Io volo, voi no. E scommetto che da qui a Brooklyn non vedete niente che voli più in alto di me: niente elicotteri, niente di niente. Uno guarda il cielo sopra il fiume, l'altro guarda sopra i grattacieli. Se lo vedete, lo indicate insieme.",
   "roles": [
    "Guarda il cielo sopra il fiume",
    "Guarda il cielo sopra i grattacieli"
   ],
   "parentHint": "L'eliporto di Downtown Manhattan è sul fiume, poco a sud del Pier 11: gli elicotteri turistici decollano e atterrano spesso."
  },
  {
   "id": "sun-bet-treni",
   "stopId": null,
   "type": "bet",
   "title": "Tre treni in cielo",
   "read": "Quel ponte sopra di voi è il Manhattan Bridge, e ci passano sopra i treni della metro. Scommetto che non ne contate tre prima di arrivare alle scale del Ponte di Brooklyn. Uno ascolta, l'altro guarda. Contate insieme ad alta voce.",
   "roles": [
    "Ascolta il rumore del treno in arrivo",
    "Guarda in su e lo conferma"
   ],
   "parentHint": "Sul Manhattan Bridge passano le linee B, D, N e Q: i treni si sentono prima di vederli, ogni pochi minuti."
  }
 ]
};
