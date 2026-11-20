export default {
 "id": "sun",
 "weekday": 0,
 "title": "Traghetto, memoria e il Ponte",
 "vinnieMorning": "Oggi si va per mare, poi sotto i ponti, poi sopra un ponte. Io questi moli li conosco da quando ero un uovo, e il traghetto arancione lo saluto ogni mattina. Se volete riprendervi un pezzo di chiave, guardate bene e contate meglio di me.",
 "stops": [
  {
   "id": "ferry",
   "name": "Staten Island Ferry",
   "kind": "key",
   "start": "09:00",
   "durationMin": 90,
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
     "text": "Dall'hotel: linea 1 (rossa) da Times Sq–42 St fino a South Ferry, il capolinea, circa 25 minuti. Uscite dall'hotel verso le 8:10. Alternativa: linea R fino a Whitehall St.",
     "when": "always"
    },
    {
     "text": "Arrivate per le 8:45. Nella sala d'attesa mettetevi davanti alle porte: si aprono pochi minuti prima della partenza. Appena a bordo andate a destra e uscite sul ponte all'aperto.",
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
     "text": "Se perdete la corsa delle 9:00, prendete quella delle 9:30: tutto il giro slitta di mezz'ora. Poi saltate il toro e andate dritti al Memoriale.",
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
   ]
  },
  {
   "id": "bull",
   "name": "Il toro di Wall Street",
   "kind": "optional",
   "start": "10:30",
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
   ]
  },
  {
   "id": "memorial",
   "name": "Memoriale dell'11 settembre",
   "kind": "key",
   "start": "11:00",
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
   ]
  },
  {
   "id": "seaport",
   "name": "South Street Seaport e pranzo",
   "kind": "optional",
   "choiceGroup": "pranzo-seaport",
   "start": "12:00",
   "durationMin": 60,
   "cost": "Gratis (pranzo a parte)",
   "pos": [
    40.70575,
    -74.00291
   ],
   "radiusM": 250,
   "cover": {
    "img": "img/seaport.webp",
    "credit": "Jim.henderson, CC0, via Wikimedia Commons"
   },
   "hook": "La vecchia via delle navi, con un veliero vero ormeggiato davanti al Ponte di Brooklyn.",
   "story": "Nell'Ottocento South Street era la strada dei velieri: i bompressi sporgevano sopra la strada e sotto passavano i carri. Qui c'è stato per quasi due secoli il mercato del pesce più grande d'America, poi trasferito nel Bronx nel 2005. Il veliero Peking, ormeggiato qui per quarant'anni, nel 2017 è tornato ad Amburgo caricato su un'altra nave. È rimasto il Wavertree, una nave a vela del 1885 con lo scafo di ferro.",
   "look": [
    "Il Wavertree al Pier 16: contate gli alberi, sono tre, e guardate quante corde servono per governarlo.",
    "Accanto, la nave rossa con la scritta AMBROSE: era un faro galleggiante, guidava le navi all'ingresso del porto.",
    "In cima a Fulton Street, all'incrocio con Pearl Street, un piccolo faro bianco: ricorda le vittime del Titanic ed è del 1913."
   ],
   "tips": [
    {
     "text": "Scelta del pranzo (la decidono i bambini se hanno battuto Vinnie): Pier 17 se è asciutto e avete tempo, Front Street se piove, fa molto freddo o siete in ritardo.",
     "when": "arrive"
    },
    {
     "text": "Pier 17 con il bel tempo: la vista sul ponte è gratis dalla passeggiata in fondo al molo, al piano terra. La terrazza sul tetto d'inverno non è garantita: è una sala concerti da maggio a ottobre, nei mesi freddi a volte ospita eventi a pagamento. Se la porta per il tetto è chiusa, non perdete tempo.",
     "when": "always"
    },
    {
     "text": "Pranzo a Pier 17: The Fulton fa il brunch la domenica fino alle 15, pesce e vista ponte, ma è caro. Per spendere meno, comprate i tranci da Joe's Pizza su Fulton Street lungo la strada dal Memoriale e mangiateli sulle panchine del Pier 16, davanti al veliero.",
     "when": "always"
    },
    {
     "text": "Front Street, con freddo o pioggia: Il Brigante, pizzeria e trattoria del Sud a 3 minuti dalle navi, sala piccola e calda. Oppure Cowgirl SeaHorse, Tex-Mex rumoroso e allegro, i bambini si trovano bene.",
     "when": "rain"
    },
    {
     "text": "Il Tin Building non è più un mercato del cibo: ha chiuso e dentro ora c'è il Balloon Museum, installazioni gonfiabili. Solo se diluvia: costa circa 40 dollari gli adulti e 26 i bambini e vuole almeno un'ora.",
     "when": "rain"
    },
    {
     "text": "Il Seaport Museum apre la domenica dalle 11 alle 17 e il biglietto comprende la visita al Wavertree. Venti minuti a bordo bastano.",
     "when": "always"
    },
    {
     "text": "In ritardo: saltate il pranzo seduti. Un trancio da Joe's Pizza camminando, uno sguardo al veliero, e via verso il Pier 11 per il traghetto di DUMBO.",
     "when": "late"
    },
    {
     "text": "Bagni: dentro Pier 17, al piano terra.",
     "when": "always"
    }
   ],
   "missionId": "sun-velieri",
   "nearby": [
    {
     "pos": [
      40.7074,
      -74.00388
     ],
     "text": "Il Titanic Memorial Lighthouse: un faro vero, del 1913. Prima stava in cima a un palazzo e la sua luce verde segnava mezzogiorno alle navi.",
     "kind": "curio"
    },
    {
     "pos": [
      40.70435,
      -74.00298
     ],
     "text": "Al Pier 15 il bar Watermark d'inverno diventa Santa's Winter Wonderland: tunnel di bastoncini di zucchero e casette di vetro riscaldate, a pagamento.",
     "kind": "curio"
    },
    {
     "pos": [
      40.70552,
      -74.00157
     ],
     "text": "Dalla punta del Pier 17 il Ponte di Brooklyn si vede intero, da torre a torre: è il punto per la foto di famiglia.",
     "kind": "view"
    }
   ]
  },
  {
   "id": "dumbo",
   "name": "DUMBO e Brooklyn Bridge Park",
   "kind": "key",
   "start": "14:15",
   "durationMin": 55,
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
   ]
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
   ]
  },
  {
   "id": "home",
   "name": "City Hall e rientro in hotel",
   "kind": "key",
   "start": "17:00",
   "durationMin": 35,
   "cost": "Metro $3 a testa con carta contactless",
   "pos": [
    40.71328,
    -74.00698
   ],
   "radiusM": 250,
   "hook": "Scesi dal ponte, una metro dritta fino a Times Square.",
   "story": "Il municipio di New York, quello bianco nel parco, è del 1812 ed è ancora usato dal sindaco. Sotto il parco c'è una stazione della metro chiusa dal 1945, con lampadari e volte di piastrelle: si vede solo dal finestrino della linea 6, che ci gira dentro per tornare indietro. È il segreto meglio custodito della metro.",
   "look": [
    "Il municipio bianco in fondo al parco, con la statua della Giustizia in cima alla cupola.",
    "La fontana con i lampioni a gas al centro del parco di City Hall.",
    "Le scale della metro R su Broadway, all'angolo del parco: sono quelle per tornare."
   ],
   "tips": [
    {
     "text": "Rientro diretto: linea R alla stazione City Hall, su Broadway, direzione Uptown & Queens, fino a Times Sq–42 St, circa 20 minuti. La W la domenica non c'è. Poi 5 minuti a piedi: l'hotel è al 220 West 41st Street, fra la Settima e l'Ottava.",
     "when": "always"
    },
    {
     "text": "Si paga toccando il tornello con la carta contactless o il telefono: $3 a testa, anche i bambini sopra i 112 cm.",
     "when": "always"
    },
    {
     "text": "Se hanno ancora energie, il treno fantasma: alla stazione Brooklyn Bridge–City Hall prendete la 6 verso sud fino al capolinea e restate a bordo. Il treno fa il giro nella vecchia stazione illuminata e riparte verso nord. Scendete a Grand Central e prendete la navetta S fino a Times Square.",
     "when": "always"
    },
    {
     "text": "Stanchi: il taxi da qui all'hotel costa circa $30–40 e ci mette 20–30 minuti nel traffico della domenica sera. La metro R è più veloce.",
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
   ]
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
   "from": "memorial",
   "to": "seaport",
   "minutes": 15,
   "how": "A piedi lungo Fulton Street verso est, fino al fiume, circa 1,2 km.",
   "mapsMode": "walking",
   "tips": [
    {
     "pos": [
      40.71139,
      -74.00944
     ],
     "text": "St. Paul's Chapel, all'incrocio con Broadway: entrate due minuti, è calda e silenziosa."
    },
    {
     "pos": [
      40.71012,
      -74.00775
     ],
     "text": "Joe's Pizza, al 124 di Fulton Street: tranci da portare via se il pranzo va fatto in fretta."
    },
    {
     "pos": [
      40.7074,
      -74.00388
     ],
     "text": "Il piccolo faro bianco del Titanic segna l'ingresso del Seaport."
    }
   ]
  },
  {
   "from": "seaport",
   "to": "dumbo",
   "minutes": 25,
   "how": "NYC Ferry: 8 minuti a piedi lungo il fiume fino al Pier 11, traghetto East River fino a DUMBO, 10 minuti, $5 a testa. In alternativa metro A o C da Fulton St a High St, una fermata, poi 10 minuti a piedi in discesa.",
   "mapsMode": "transit",
   "tips": [
    {
     "pos": [
      40.70245,
      -74.0055
     ],
     "text": "Pier 11 / Wall St: il biglietto si compra alle macchinette sul molo o con l'app NYC Ferry. Le corse del weekend partono circa ogni mezz'ora: controllate l'orario sul tabellone."
    },
    {
     "pos": [
      40.70245,
      -74.0055
     ],
     "text": "Poco più a sud c'è l'eliporto: scommessa di Vinnie sugli elicotteri."
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
   "from": "bridge",
   "to": "home",
   "minutes": 5,
   "how": "Scesi dalla rampa del ponte, attraversate il parco di City Hall fino a Broadway: la metro R è all'angolo, 400 metri.",
   "mapsMode": "walking",
   "tips": [
    {
     "pos": [
      40.71288,
      -74.00608
     ],
     "text": "Il parco di City Hall ha i bagni pubblici vicino alla fontana, se servono prima della metro."
    }
   ]
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
    "seaport"
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
    "memorial"
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
   "id": "sun-brigante",
   "name": "Il Brigante",
   "type": "pizzeria e trattoria",
   "category": "pranzo",
   "order": "Margherita e pizza Brigante, arancine da dividere. Per i bambini la focaccia all'aglio è una merenda.",
   "price": "$90–130 in 4",
   "pos": [
    40.70738,
    -74.00263
   ],
   "hours": {
    "0": [
     [
      "12:00",
      "22:30"
     ]
    ]
   },
   "near": [
    "seaport"
   ],
   "note": "Sala piccola: con il freddo si riempie, conviene arrivare alle 12.",
   "rating": {
    "stars": 4.4,
    "count": 1200,
    "source": "Google"
   },
   "buzz": "Cucina del Sud curata e servizio cordiale; sala raccolta, nel weekend conviene prenotare. Apprezzati rigatoni e calamari fritti."
  },
  {
   "id": "sun-cowgirl",
   "name": "Cowgirl SeaHorse",
   "type": "Tex-Mex e cucina del Sud",
   "category": "pranzo",
   "order": "Nachos da dividere, burrito o tacos di pesce; quesadilla per i bambini.",
   "price": "$80–120 in 4",
   "pos": [
    40.70823,
    -74.00053
   ],
   "hours": {},
   "near": [
    "seaport"
   ],
   "note": "Locale rumoroso e allegro, decorazioni da cowboy e cavallucci marini.",
   "rating": {
    "stars": 4.3,
    "count": 1427,
    "source": "Google"
   },
   "buzz": "Ambiente allegro e chiassoso, nachos e tacos di pesce promossi; servizio lento quando è pieno, soprattutto la domenica."
  },
  {
   "id": "sun-the-fulton",
   "name": "The Fulton (Pier 17)",
   "type": "pesce con vista",
   "category": "pranzo",
   "order": "Brunch: fish and chips o lobster roll, con il ponte dalla vetrata.",
   "price": "$180–260 in 4",
   "pos": [
    40.70535,
    -74.00105
   ],
   "hours": {
    "0": [
     [
      "11:30",
      "15:00"
     ]
    ]
   },
   "near": [
    "seaport"
   ],
   "note": "Il più caro della giornata: vale per la vista. Meglio prenotare.",
   "rating": {
    "stars": 4.1,
    "count": 1385,
    "source": "Google"
   },
   "buzz": "Si paga soprattutto la vista sul ponte; pesce fresco ma cucina giudicata altalenante, conto alto."
  },
  {
   "id": "sun-sadies",
   "name": "Sadie's Bakery",
   "type": "forno",
   "category": "snack",
   "order": "Cinnamon bun ancora tiepido e una cioccolata.",
   "price": "$20–35 in 4",
   "pos": [
    40.7071,
    -74.00338
   ],
   "hours": {},
   "near": [
    "seaport"
   ],
   "note": "Appena aperto, al 203 di Front Street: apre alle 7."
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
    "home"
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
    "home"
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
    "home"
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
    "home"
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
    "home"
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
    "home"
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
    "home"
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
    "home"
   ],
   "note": "Broadway angolo 40th Street, 3 minuti dall'hotel: la cena più veloce se sono crollati.",
   "rating": {
    "stars": 4.4,
    "count": 27451,
    "source": "Google"
   },
   "buzz": "Tranci sottili e caldi, fila spesso lunga ma rapida; pochi posti, niente bagno: è da asporto."
  }
 ],
 "missions": [
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
   "id": "sun-velieri",
   "stopId": "seaport",
   "type": "then-now",
   "title": "La via delle navi",
   "read": "Questa foto ha più di cento anni ed è stata scattata proprio qui. C'era il mio bis-bis-bis-nonno, sul tetto di un magazzino. Guardatela bene e trovatemi tre cose che oggi sono diverse. Una alla volta, e ognuna la dite insieme. Se ne trovate tre prima che io finisca le mie briciole, il pezzo di chiave è vostro.",
   "roles": [
    "Tiene la foto a mente e dice cosa c'era una volta",
    "Guarda la strada di oggi e dice cosa c'è adesso"
   ],
   "img": {
    "src": "img/sun-velieri.webp",
    "credit": "Unknown authorUnknown author, Public domain, via Wikimedia Commons"
   },
   "parentHint": "Mettetevi su South Street all'altezza del Pier 16, vicino al veliero, guardando verso il Ponte di Brooklyn. Differenze facili: nella foto tantissimi alberi di veliero e bompressi sopra la strada, carri e cavalli, nessuna strada sopraelevata. Oggi sopra le teste passa la FDR Drive, c'è il palazzo di vetro del Pier 17 e i grattacieli dietro."
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
