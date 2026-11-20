export default {
 "id": "fri",
 "weekday": 5,
 "title": "Arrivo, taxi e prima cena",
 "vinnieMorning": "Sera, pivelli. Mi chiamo Vinnie, sono un piccione di Brooklyn, e la Chiave della Città ce l'ho io. L'ho fatta a pezzi e li ho nascosti in giro per New York: se li volete, dovete battermi. La prima sfida è stasera, dal finestrino del taxi.",
 "stops": [
  {
   "id": "arrivo",
   "name": "Arrivo a JFK",
   "kind": "key",
   "start": "20:00",
   "durationMin": 60,
   "cost": "Taxi per Manhattan: $70 fisso + circa $14 tra supplementi e pedaggio + mancia 15–20%: $95–105",
   "pos": [
    40.64295,
    -73.77937
   ],
   "radiusM": 2500,
   "hook": "Il primo taxi giallo non si sceglie: ve lo assegna un signore con la pettorina.",
   "story": "Fino al 1963 questo aeroporto si chiamava Idlewild, come il campo da golf che c'era prima. Dopo la morte del presidente Kennedy gli diedero il suo nome. Da qui a qualsiasi punto di Manhattan il taxi giallo ha un prezzo fisso deciso dalla città: 70 dollari, che ci sia traffico o no. E i taxi con licenza di New York sono tutti gialli: è la regola dal 1967.",
   "look": [
    "Il cartello Taxi appena fuori dal ritiro bagagli: seguite quello, non le persone che vi offrono un passaggio.",
    "Il dispatcher in fondo alla fila, con la pettorina: vi dice in quale taxi salire.",
    "Lo schermo dentro il taxi: deve indicare «Rate #2 - JFK Airport» prima di partire."
   ],
   "tips": [
    {
     "text": "Dentro il terminal qualcuno vi chiederà «Taxi? Limo?». Non rispondete e tirate dritto: sono abusivi, è illegale e costa il triplo.",
     "when": "arrive"
    },
    {
     "text": "Uscite dal ritiro bagagli, seguite i cartelli Taxi fino alla fila ufficiale sul marciapiede. Il dispatcher vi assegna l'auto: con quattro persone e le valigie chiedete «a minivan, please».",
     "when": "arrive"
    },
    {
     "text": "Prezzo fisso $70, più $2 di accesso aeroporto, $0,50 MTA, $1 di miglioria, $2,50 di congestione, $0,75 della zona di Manhattan e il pedaggio del tunnel se lo prende. Se partite prima delle 20, altri $5 di ora di punta.",
     "when": "always"
    },
    {
     "text": "Pagate con la carta sullo schermo dietro: lì scegliete la mancia (15–20% sulla corsa). Non pagate niente in anticipo e non accettate prezzi a persona.",
     "when": "always"
    },
    {
     "text": "Mostrate al tassista la scheda dell'hotel con l'indirizzo in inglese: sulla 41ª ci sono molti hotel con nomi simili.",
     "when": "arrive"
    },
    {
     "text": "Se la fila taxi è lunghissima: di solito scorre veloce, 10–20 minuti. Uber e Lyft hanno punti di ritiro separati e il venerdì sera costano di più.",
     "when": "late"
    },
    {
     "text": "Bagni: fateli prima di uscire dal ritiro bagagli. Il viaggio in taxi dura 40–60 minuti.",
     "when": "tired"
    }
   ],
   "missionId": "fri-taxi",
   "nearby": [
    {
     "pos": [
      40.64577,
      -73.77767
     ],
     "text": "Il TWA Hotel, accanto al Terminal 5: il vecchio terminal del 1962 a forma di uccello, con un aereo d'epoca parcheggiato fuori. Ci si entra gratis.",
     "kind": "curio"
    }
   ],
   "cover": {
    "img": "img/arrivo.webp",
    "credit": "Tyler de Noche, CC BY-SA 4.0, via Wikimedia Commons"
   },
   "bagni": {
    "where": "Bagni nell'area ritiro bagagli dell'aeroporto, prima di uscire.",
    "cost": "Gratis",
    "clean": "Non verificato"
   }
  },
  {
   "id": "hotel",
   "name": "Check-in in hotel",
   "kind": "key",
   "start": "21:45",
   "durationMin": 30,
   "cost": "Gratis",
   "pos": [
    40.75561,
    -73.98861
   ],
   "radiusM": 120,
   "hook": "Siete su una strada di teatri: l'insegna accesa accanto alla porta dell'hotel è di un teatro di Broadway.",
   "story": "L'hotel è sulla 41ª tra la Settima e l'Ottava Avenue, a un isolato da Times Square. Accanto c'è il Nederlander Theatre, aperto nel 1921: per dodici anni ci hanno dato il musical Rent. Dall'altra parte dell'Ottava c'è il grattacielo del New York Times, il giornale che ha dato il nome alla piazza. Da qui si va a piedi quasi ovunque in Midtown.",
   "look": [
    "L'insegna del Nederlander Theatre, accanto all'hotel: guardate che spettacolo c'è.",
    "Il grattacielo del New York Times all'angolo con l'Ottava: la scritta del giornale in caratteri gotici sulla facciata.",
    "In fondo alla 41ª verso est: il bagliore di Times Square."
   ],
   "tips": [
    {
     "text": "Al check-in chiedete l'orario della colazione (inclusa) e se potete lasciare le valigie martedì dopo il check-out.",
     "when": "arrive"
    },
    {
     "text": "Chiedete alla reception un biglietto da visita dell'hotel per ciascun adulto: con l'indirizzo, in caso di taxi o di bambini persi.",
     "when": "arrive"
    },
    {
     "text": "Se i bambini crollano: cena veloce con una fetta da Joe's Pizza, angolo Broadway e 40ª, 4 minuti a piedi.",
     "when": "tired"
    },
    {
     "text": "La sera l'incrocio tra l'Ottava e la 42ª, davanti alla stazione degli autobus, è affollato: tenete i bambini per mano e camminate verso Times Square.",
     "when": "always"
    }
   ],
   "nearby": [
    {
     "pos": [
      40.75548,
      -73.9883
     ],
     "text": "Nederlander Theatre, accanto all'hotel: aperto nel 1921, qui è andato in scena Rent per dodici anni.",
     "kind": "curio"
    },
    {
     "pos": [
      40.7559,
      -73.98927
     ],
     "text": "The New York Times Building, 620 Ottava Avenue: 52 piani, la facciata è fatta di bacchette di ceramica.",
     "kind": "curio"
    },
    {
     "pos": [
      40.75731,
      -73.98973
     ],
     "text": "Ingresso della metro 42 St–Port Authority sull'Ottava: linee A, C, E. Domattina vi servirà.",
     "kind": "curio"
    }
   ],
   "cover": {
    "img": "img/hotel.webp",
    "credit": "Epicgenius, CC BY-SA 4.0, via Wikimedia Commons"
   },
   "bagni": {
    "where": "Nell'hotel: chiedete alla reception se i bagni della hall sono utilizzabili prima di salire in camera.",
    "cost": "Gratis",
    "clean": "Non verificato"
   }
  },
  {
   "id": "cena",
   "name": "Prima cena a Times Square",
   "kind": "optional",
   "start": "22:15",
   "durationMin": 45,
   "cost": "$25–100 in 4, a seconda del posto",
   "pos": [
    40.75701,
    -73.98597
   ],
   "radiusM": 250,
   "hook": "Il primo morso di New York, sotto schermi accesi come se fosse mezzogiorno.",
   "story": "Times Square si chiamava Longacre Square fino al 1904, quando ci arrivò il New York Times e la piazza prese il nome del giornale. Il giornale per festeggiare organizzò dei fuochi d'artificio a Capodanno, e qualche anno dopo cominciò la discesa della palla. La palla di Capodanno resta in cima al grattacielo tutto l'anno. Nel film Come d'incanto la principessa Giselle sbuca proprio qui, da un tombino in mezzo al traffico.",
   "look": [
    "La scalinata rossa sopra la biglietteria TKTS, tra la 46ª e la 47ª: salite in cima e guardate la piazza dall'alto, è gratis.",
    "In cima al grattacielo stretto in fondo alla piazza, verso la 42ª: la palla di Capodanno.",
    "La stazione di polizia sull'isola tra Broadway e la Settima, all'altezza della 43ª: anche lei ha le luci al neon."
   ],
   "tips": [
    {
     "text": "I personaggi in costume (Elmo, Spider-Man) chiedono soldi dopo la foto: se non volete, dite «no, thanks» e camminate.",
     "when": "always"
    },
    {
     "text": "Per la prima sera non serve sedersi: una fetta di pizza o due tacos e a letto. Domani si comincia presto.",
     "when": "tired"
    },
    {
     "text": "Se piove: Junior's, sulla 45ª angolo Broadway, è grande, caldo e ha il cheesecake.",
     "when": "rain"
    },
    {
     "text": "Se è tardissimo: Joe's Pizza e Tick Tock Diner sono aperti anche dopo mezzanotte.",
     "when": "late"
    }
   ],
   "nearby": [
    {
     "pos": [
      40.75906,
      -73.98517
     ],
     "text": "Duffy Square e la scalinata rossa: il punto per vedere tutta la piazza.",
     "kind": "view"
    },
    {
     "pos": [
      40.76019,
      -73.98435
     ],
     "text": "M&M's Store, Broadway angolo 48ª: tre piani di cioccolatini colorati, aperto fino a tardi.",
     "kind": "curio"
    },
    {
     "pos": [
      40.75701,
      -73.98597
     ],
     "text": "Come d'incanto: Giselle esce da un tombino in mezzo a Times Square. In Spider-Man (2002) il Goblin attacca una festa proprio qui.",
     "kind": "film"
    }
   ],
   "bagni": {
    "where": "Nei locali dove mangiate: chiedete prima di sedervi. In Times Square i bagni pubblici sono rari; alternativa: Bryant Park (10 minuti a piedi), ma di sera tardi è chiuso.",
    "cost": "Gratis se consumate",
    "clean": "Non verificato"
   }
  }
 ],
 "walks": [
  {
   "from": "arrivo",
   "to": "hotel",
   "minutes": 45,
   "how": "Taxi giallo dalla fila ufficiale: tariffa fissa per Manhattan. Il tassista di solito prende la Van Wyck, la Long Island Expressway e il tunnel di Midtown.",
   "mapsMode": "transit",
   "tips": [
    {
     "text": "Il venerdì dopo le 20 il traffico cala: 40–50 minuti sono normali, un'ora se c'è coda al tunnel."
    },
    {
     "text": "Sulla Long Island Expressway, quando la strada sale, guardate avanti: lo skyline compare tutto insieme. È il momento della missione di Vinnie."
    },
    {
     "text": "Prima di scendere controllate di avere tutto: telefoni, giacche, peluche. Lo schermo stampa la ricevuta con il numero del taxi."
    }
   ]
  },
  {
   "from": "hotel",
   "to": "cena",
   "minutes": 5,
   "how": "A piedi: sulla 41ª verso est fino alla Settima Avenue, poi a sinistra verso Times Square.",
   "mapsMode": "walking",
   "tips": [
    {
     "pos": [
      40.75471,
      -73.98702
     ],
     "text": "Joe's Pizza è all'angolo tra Broadway e la 40ª: se i bambini non ce la fanno, fermatevi lì."
    }
   ]
  }
 ],
 "food": [
  {
   "id": "fri-f-joes",
   "name": "Joe's Pizza Broadway",
   "type": "pizza al taglio",
   "category": "cena",
   "order": "Fetta plain (pomodoro e mozzarella) per tutti, una pepperoni per chi vuole. Piegatela in due.",
   "price": "$25–35 in 4",
   "pos": [
    40.75471,
    -73.98702
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
    "hotel",
    "cena"
   ],
   "note": "Il venerdì resta aperto fino a notte fonda (verso le 4). Pochi posti, si mangia al banco.",
   "rating": {
    "stars": 4.4,
    "count": 27451,
    "source": "Google"
   },
   "buzz": "Coda quasi sempre, ma scorre veloce; fette grandi e croccanti a buon prezzo, pochissimi posti a sedere.",
   "img": {
    "src": "img/food-fri-f-joes.webp",
    "credit": "Ven-Lib, CC BY-SA 4.0, via Wikimedia Commons"
   }
  },
  {
   "id": "fri-f-lostacos",
   "name": "Los Tacos No. 1",
   "type": "taqueria messicana",
   "category": "cena",
   "order": "Tacos di carne asada e di pollo, tortilla di mais fatta al momento. Agua fresca di horchata per i bambini.",
   "price": "$40–55 in 4",
   "pos": [
    40.75747,
    -73.98747
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
    "hotel",
    "cena"
   ],
   "note": "Sulla 43ª tra la Settima e l'Ottava. Si ordina al banco e si mangia in piedi. Fila veloce.",
   "rating": {
    "stars": 4.8,
    "count": 16502,
    "source": "Google"
   },
   "buzz": "Tacos freschi lodati quasi da tutti; fila lunga ma rapida, si mangia solo in piedi ai banconi."
  },
  {
   "id": "fri-f-juniors",
   "name": "Junior's",
   "type": "diner con cheesecake",
   "category": "cena",
   "order": "Burger o club sandwich, e poi la fetta di cheesecake classica da dividere: è il motivo per venire.",
   "price": "$90–130 in 4",
   "pos": [
    40.75806,
    -73.98621
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
    "cena"
   ],
   "note": "45ª angolo Broadway. Seduti al caldo. Il venerdì forse fino all'una.",
   "rating": {
    "stars": 4.4,
    "count": 16030,
    "source": "Google"
   },
   "buzz": "Cheesecake cremosa che quasi tutti promuovono, servizio veloce; nelle ore di punta coda per il tavolo, locale spazioso.",
   "img": {
    "src": "img/food-fri-f-juniors.webp",
    "credit": "Kidfly182, CC BY-SA 4.0, via Wikimedia Commons"
   }
  },
  {
   "id": "fri-f-shakeshack",
   "name": "Shake Shack Theater District",
   "type": "burger americano",
   "category": "cena",
   "order": "ShackBurger, patatine ondulate, un frappè al cioccolato da dividere.",
   "price": "$55–75 in 4",
   "pos": [
    40.7583,
    -73.98913
   ],
   "hours": {
    "0": [
     [
      "10:30",
      "24:00"
     ]
    ],
    "1": [
     [
      "10:30",
      "24:00"
     ]
    ],
    "2": [
     [
      "10:30",
      "24:00"
     ]
    ],
    "3": [
     [
      "10:30",
      "24:00"
     ]
    ],
    "4": [
     [
      "10:30",
      "24:00"
     ]
    ],
    "5": [
     [
      "10:30",
      "24:00"
     ]
    ],
    "6": [
     [
      "10:30",
      "24:00"
     ]
    ]
   },
   "near": [
    "hotel",
    "cena"
   ],
   "note": "Ottava Avenue angolo 44ª. Ordinazione allo schermo, un cicalino vi chiama.",
   "rating": {
    "stars": 4.4,
    "count": 15253,
    "source": "Google"
   },
   "buzz": "Burger e frappè promossi, servizio rapido e tavoli puliti; nel fine settimana è pieno e si aspetta.",
   "img": {
    "src": "img/food-fri-f-shakeshack.webp",
    "credit": "Paul Sableman, CC BY 2.0, via Wikimedia Commons"
   }
  },
  {
   "id": "fri-f-ticktock",
   "name": "Tick Tock Diner",
   "type": "diner anni '50",
   "category": "cena",
   "order": "Pancake a qualsiasi ora, grilled cheese, milkshake. Porzioni enormi: due piatti bastano per i bambini.",
   "price": "$70–100 in 4",
   "pos": [
    40.75244,
    -73.99355
   ],
   "hours": {
    "0": [
     [
      "00:00",
      "24:00"
     ]
    ],
    "1": [
     [
      "00:00",
      "24:00"
     ]
    ],
    "2": [
     [
      "00:00",
      "24:00"
     ]
    ],
    "3": [
     [
      "00:00",
      "24:00"
     ]
    ],
    "4": [
     [
      "00:00",
      "24:00"
     ]
    ],
    "5": [
     [
      "00:00",
      "24:00"
     ]
    ],
    "6": [
     [
      "00:00",
      "24:00"
     ]
    ]
   },
   "near": [
    "hotel"
   ],
   "note": "Ottava Avenue angolo 34ª, sotto l'insegna del New Yorker Hotel: 10 minuti a piedi. Di solito aperto giorno e notte.",
   "rating": {
    "stars": 3.9,
    "count": 7461,
    "source": "Google"
   },
   "buzz": "Spazioso e comodo per gruppi, prezzi onesti; colazioni e pancake promossi, piatti da cena altalenanti.",
   "img": {
    "src": "img/food-fri-f-ticktock.webp",
    "credit": "Mobilus In Mobili, CC BY-SA 2.0, via Wikimedia Commons"
   }
  },
  {
   "id": "fri-f-5napkin",
   "name": "5 Napkin Burger",
   "type": "burger da sedersi",
   "category": "cena",
   "order": "Il 5 Napkin Burger con cipolle caramellate per i grandi, menu bambini con mini burger.",
   "price": "$90–130 in 4",
   "pos": [
    40.75991,
    -73.99116
   ],
   "hours": {
    "0": [
     [
      "10:00",
      "22:30"
     ]
    ],
    "1": [
     [
      "10:00",
      "22:30"
     ]
    ],
    "2": [
     [
      "10:00",
      "22:30"
     ]
    ],
    "3": [
     [
      "10:00",
      "23:30"
     ]
    ],
    "4": [
     [
      "10:00",
      "23:30"
     ]
    ],
    "5": [
     [
      "10:00",
      "23:30"
     ]
    ],
    "6": [
     [
      "10:00",
      "23:30"
     ]
    ]
   },
   "near": [
    "hotel"
   ],
   "note": "Nona Avenue angolo 45ª, 8 minuti. Tavoli comodi, ha il menu per bambini.",
   "rating": {
    "stars": 4.6,
    "count": 8179,
    "source": "Google"
   },
   "buzz": "Burger grandi e succosi, personale gentile, menu bambini; prezzi alti fuori dall'happy hour, spesso c'è da attendere."
  },
  {
   "id": "fri-f-schmackary",
   "name": "Schmackary's",
   "type": "biscotti americani",
   "category": "snack",
   "order": "Un biscotto a testa, caldi: con gocce di cioccolato, red velvet o il gusto del giorno.",
   "price": "$15–20 in 4",
   "pos": [
    40.76015,
    -73.99099
   ],
   "hours": {
    "0": [
     [
      "08:00",
      "23:00"
     ]
    ],
    "1": [
     [
      "08:00",
      "23:00"
     ]
    ],
    "2": [
     [
      "08:00",
      "23:00"
     ]
    ],
    "3": [
     [
      "08:00",
      "24:00"
     ]
    ],
    "4": [
     [
      "08:00",
      "24:00"
     ]
    ],
    "5": [
     [
      "08:00",
      "24:00"
     ]
    ],
    "6": [
     [
      "08:00",
      "24:00"
     ]
    ]
   },
   "near": [
    "hotel"
   ],
   "note": "Sulla 45ª tra l'Ottava e la Nona: è il biscottificio degli attori di Broadway. Orari da verificare.",
   "rating": {
    "stars": 4.6,
    "count": 2886,
    "source": "Google"
   },
   "buzz": "Biscotti morbidi e molto dolci, tanti gusti a rotazione; negozio piccolo, a volte fila fuori dalla porta."
  }
 ],
 "missions": [
  {
   "id": "fri-taxi",
   "stopId": "arrivo",
   "type": "bet",
   "title": "Il primo avvistamento",
   "read": "Ehi, voi due. Sono Vinnie e da stasera la Chiave della Città è mia. Prima sfida, facile facile: da qualche parte, fuori dal finestrino, c'è il grattacielo più famoso di New York, con l'antenna in cima e la punta illuminata a colori. Scommetto che entrate nel tunnel senza averlo visto. Uno guarda dal finestrino di sinistra, l'altro da destra. Quando lo vedete, lo indicate insieme e dite insieme: «Eccolo». Se lo dice uno solo, non vale.",
   "roles": [
    "Guarda dal finestrino di sinistra",
    "Guarda dal finestrino di destra"
   ],
   "vinnieBet": "Entrate nel tunnel senza aver visto l'Empire State Building.",
   "parentHint": "È l'Empire State Building. Sulla Long Island Expressway, dopo circa mezz'ora, lo skyline compare davanti, nel tratto in salita prima del tunnel di Midtown: l'Empire State è il più alto con l'antenna, più o meno dritto davanti o un po' a sinistra. Se il tassista prende il ponte di Queensboro, lo vedete a sinistra dal ponte. Al buio la cima è illuminata a colori.",
   "img": {
    "src": "img/fri-taxi.webp",
    "credit": "Mike  Sinko, CC BY 2.0, via Wikimedia Commons"
   }
  }
 ]
};
