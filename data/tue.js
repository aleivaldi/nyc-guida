export default {
 "id": "tue",
 "weekday": 2,
 "title": "SoHo, Washington Square e Union Square",
 "vinnieMorning": "Ultimo giorno, squadra. Oggi si cammina su strade di ferro e si passa sotto un arco di marmo, e stasera io prendo il volo con la Chiave. A meno che non mi fermiate prima del taxi.",
 "stops": [
  {
   "id": "tue-checkout",
   "name": "Colazione e check-out",
   "kind": "key",
   "start": "08:30",
   "durationMin": 45,
   "cost": "Gratis",
   "pos": [
    40.75561,
    -73.98861
   ],
   "radiusM": 60,
   "hook": "Valigie chiuse, in deposito alla reception, e via leggeri per l'ultimo giorno.",
   "story": "Il deposito bagagli negli hotel di New York è quasi sempre gratuito per gli ospiti del giorno, ma si lascia una mancia: di solito qualche dollaro a valigia quando la ritirate.",
   "look": [
    "Il tagliandino del deposito bagagli: fotografatelo."
   ],
   "tips": [
    {
     "text": "Chiedete conferma del deposito bagagli e dell'orario per ritirarli: non è già organizzato.",
     "when": "arrive"
    },
    {
     "text": "Tenete fuori dalle valigie passaporti, caricabatterie e una giacca in più per l'aereo.",
     "when": "always"
    },
    {
     "text": "Chiedete alla reception un taxi per JFK alle 16:00.",
     "when": "always"
    }
   ],
   "steps": [],
   "bagni": {
    "where": "In hotel.",
    "cost": "Gratis",
    "clean": "-"
   }
  },
  {
   "id": "tue-go-soho",
   "name": "Dall'hotel a SoHo, in metro",
   "kind": "move",
   "start": "09:15",
   "durationMin": 45,
   "cost": "Metro $3 a testa",
   "pos": [
    40.75731,
    -73.98979
   ],
   "radiusM": 100,
   "hook": "Cinque fermate verso sud sotto l'Ottava Avenue, e si esce tra i palazzi di ghisa.",
   "story": "SoHo vuol dire South of Houston, a sud di Houston Street, che i newyorkesi pronunciano Hau-ston e non come la città del Texas. Una volta era il quartiere delle fabbriche; poi ci sono venuti a vivere gli artisti, e dopo di loro i negozi.",
   "look": [
    "Sopra i binari: Downtown & Brooklyn.",
    "Uscendo a Spring St: le scale antincendio di ferro sulle facciate."
   ],
   "tips": [
    {
     "text": "Il martedì mattina c'è ancora la gente che va al lavoro: tenete i bambini vicini in carrozza.",
     "when": "arrive"
    },
    {
     "text": "Alternativa: linee R o W (gialle) da Times Sq–42 St fino a Prince St. Non la Q: è espressa e non ferma lì.",
     "when": "always"
    },
    {
     "text": "In ritardo: taxi fino a Spring Street, 15–25 minuti.",
     "when": "late"
    }
   ],
   "steps": [
    {
     "id": "gosoho-station",
     "title": "Stazione 42 St–Port Authority",
     "where": "Sulla 41ª verso l'Ottava Avenue, 2 minuti. Linee A C E, direzione Downtown & Brooklyn.",
     "look": [],
     "tips": [
      "Prendete la E o la C. La A è espressa: va bene lo stesso solo se il cartello dice che ferma a Spring St."
     ]
    },
    {
     "id": "gosoho-train",
     "title": "La E fino a Spring St",
     "where": "Fermate: 34 St–Penn Station, 23 St, 14 St, W 4 St–Washington Sq, Spring St. Si scende alla quinta.",
     "look": [
      "Contate le fermate e dite i nomi: è la sfida di Vinnie."
     ],
     "tips": []
    },
    {
     "id": "gosoho-exit",
     "title": "Fuori a Spring Street",
     "where": "Uscite su Spring Street e camminate verso est: da qui parte il giro di SoHo.",
     "look": [
      "Le facciate di ghisa con le colonne."
     ],
     "tips": []
    }
   ],
   "bagni": {
    "where": "In hotel prima di partire. A SoHo: Bloomingdale's (504 Broadway) e i negozi grandi.",
    "cost": "Gratis",
    "clean": "Non verificato"
   }
  },
  {
   "id": "soho",
   "name": "SoHo e Greene Street",
   "kind": "key",
   "start": "10:00",
   "durationMin": 150,
   "cost": "Gratis. Colazione $35–60 in 4",
   "pos": [
    40.72469,
    -73.99964
   ],
   "radiusM": 300,
   "hook": "Palazzi che sembrano di pietra e invece sono di ferro: dategli un colpetto con le nocche e sentite.",
   "story": "Tra il 1850 e il 1880 qui si costruivano magazzini con le facciate in ghisa: pezzi fusi in fabbrica, numerati e montati come un gioco di costruzioni. Costavano meno della pietra e si potevano dipingere color marmo. Sotto i marciapiedi c'erano cantine piene di operai, e per far arrivare la luce del giorno si inventarono i marciapiedi con le lenti di vetro. Negli anni '60 le fabbriche erano vuote e ci entrarono gli artisti, che vivevano nei loft. Oggi è il quartiere dei negozi, ma la ghisa è ancora tutta lì.",
   "look": [
    "Il Re di Greene Street, al 72-76 tra Broome e Spring: alzate gli occhi sulle colonne a cinque piani e sul corpo centrale che sporge come un balcone gigante.",
    "Le lenti di vetro nei marciapiedi: dischetti viola o trasparenti incastrati nella ghisa davanti alle porte, all'angolo Greene e Canal e davanti al 552-554 di Broadway.",
    "La Regina di Greene Street, al 28-30 vicino a Canal: tetto a mansarda con gli abbaini, sembra un palazzo di Parigi pitturato."
   ],
   "tips": [
    {
     "text": "Portate una calamita da frigo: sulle colonne di ghisa si attacca, sui muri di mattoni no. È il modo più rapido per capire cosa è ferro.",
     "when": "always"
    },
    {
     "text": "Greene Street ha i ciottoli: con il passeggino o i trolley si balla. Camminate sui marciapiedi e attraversate agli incroci.",
     "when": "arrive"
    },
    {
     "text": "I negozi aprono quasi tutti alle 11. Prima delle 11 SoHo è vuoto: è il momento giusto per foto e facciate, i negozi dopo.",
     "when": "arrive"
    },
    {
     "text": "In ritardo: saltate Broadway e restate su Greene Street tra Canal e Prince. Il Re, la Regina e le lenti stanno tutti lì.",
     "when": "late"
    },
    {
     "text": "Se piove: Apple SoHo al 103 di Prince Street e il MoMA Design Store al 81 di Spring Street sono asciutti e i bambini possono toccare tutto.",
     "when": "rain"
    },
    {
     "text": "Per sedersi: il giardinetto sul retro di Dominique Ansel, oppure le panchine di Petrosino Square, tra Lafayette e Spring.",
     "when": "tired"
    }
   ],
   "steps": [
    {
     "id": "soho-colazione",
     "title": "Colazione su Spring Street",
     "where": "Uscite dalla metro Spring St (linee C/E) e camminate 2 minuti verso est: Dominique Ansel è al 189 di Spring Street.",
     "look": [
      "In vetrina il Cronut, il mezzo croissant e mezzo bombolone che ha inventato nel 2013: il gusto cambia ogni mese.",
      "Se c'è, il Frozen S'more: gelato chiuso nel marshmallow, bruciacchiato col cannello davanti a voi.",
      "In fondo al locale c'è una porta che dà su un giardinetto: se c'è posto, sedetevi lì."
     ],
     "tips": [
      "I Cronut a volte finiscono presto la mattina: se lo volete davvero, chiedete subito al banco.",
      "Il DKA (una sfoglia caramellata) è la scelta giusta se il Cronut non c'è."
     ],
     "options": [
      {
       "label": "Se c'è troppa fila",
       "text": "Balthazar, al 80 di Spring Street, 8 minuti a est: colazione francese seduti, più cara ma al caldo."
      },
      {
       "label": "Se avete già mangiato in hotel",
       "text": "Saltate e andate dritti su Greene Street: Spring Street verso est, terza traversa."
      }
     ]
    },
    {
     "id": "soho-greene",
     "title": "Greene Street, la via di ghisa",
     "where": "Da Spring Street girate a destra su Greene Street e scendete verso Canal Street, poi risalite fino a Prince.",
     "look": [
      "Cinque isolati di facciate di ferro, una attaccata all'altra.",
      "Le scale antincendio nere sulle facciate: sono venute dopo, per legge.",
      "I ciottoli della strada: sono blocchi di granito, non sassi."
     ],
     "tips": [
      "La missione di Vinnie è qui: tenetela per l'angolo con Canal Street."
     ],
     "steps": [
      {
       "id": "soho-regina",
       "title": "La Regina: 28-30 Greene Street",
       "where": "Greene Street tra Grand e Canal. Cercate il numero 28 sopra la porta.",
       "look": [
        "Il tetto a mansarda con le finestrelle che sporgono: sembra una torta a piani.",
        "Le colonne in ghisa al piano terra, con i bulloni a vista se guardate bene alla base.",
        "Contate i piani: cinque di ferro più il tetto."
       ],
       "tips": [
        "L'ha disegnata Isaac Duckworth nel 1873, lo stesso architetto del Re: sono marito e moglie."
       ]
      },
      {
       "id": "soho-lenti",
       "title": "Le lenti nel marciapiede",
       "where": "All'angolo tra Greene e Canal Street, e davanti alle porte dei magazzini lungo la via.",
       "look": [
        "Piastre di ferro con tanti dischetti di vetro: alcuni sono diventati viola col sole.",
        "Qualche lente rotta o riempita di cemento: lì sotto la cantina c'è ancora.",
        "Le botole di ferro con i bordi a rombi: servivano a calare le merci in cantina."
       ],
       "tips": [
        "Qui fate la missione di Vinnie: chi descrive non deve aver visto la strada, chi cerca non deve aver visto la foto."
       ],
       "options": [
        {
         "label": "Se non le trovate",
         "text": "Le più belle sono davanti al 552-554 di Broadway, tra Prince e Spring: restaurate con cura."
        }
       ]
      },
      {
       "id": "soho-re",
       "title": "Il Re: 72-76 Greene Street",
       "where": "Risalite Greene Street: tra Broome e Spring, sul lato più lungo dell'isolato.",
       "look": [
        "Il corpo centrale che sporge con le colonne corinzie: fermatevi sul marciapiede di fronte, da vicino non si vede.",
        "Il colore crema: la ghisa è dipinta per sembrare pietra.",
        "I due piani in più in cima, arretrati: aggiunti nel restauro."
       ],
       "tips": [
        "Nel 2012 è stato venduto per 41,5 milioni di dollari: da lì il soprannome di Re."
       ],
       "options": [
        {
         "label": "Prova della calamita",
         "text": "Se avete una calamita, provatela su una colonna al piano terra. Poi sul muro del palazzo accanto, se è di mattoni."
        }
       ]
      }
     ]
    },
    {
     "id": "soho-broadway",
     "title": "Broadway e Prince Street",
     "where": "Da Greene Street andate a est su Prince Street fino a Broadway.",
     "look": [
      "Apple SoHo al 103 di Prince: era un ufficio postale, dentro c'è una scala di vetro.",
      "Il Haughwout Building, all'angolo Broadway e Broome: qui nel 1857 montarono il primo ascensore per passeggeri del mondo.",
      "Le vetrine di Broadway: qui i negozi grandi, su Greene quelli piccoli."
     ],
     "tips": [
      "Broadway è affollata: tenete i bambini sul lato interno del marciapiede."
     ],
     "steps": [
      {
       "id": "soho-haughwout",
       "title": "Il palazzo del primo ascensore",
       "where": "488 Broadway, angolo Broome Street, 5 minuti a sud di Prince.",
       "look": [
        "Le finestre ad arco tutte uguali, ripetute come un timbro: è ghisa, fusa in serie.",
        "Il colore grigio-crema, per sembrare marmo di Venezia.",
        "L'orologio sulla facciata verso Broadway."
       ],
       "tips": [
        "L'ascensore era di Elisha Otis, quello degli ascensori che usate oggi. Saliva a 12 metri al minuto."
       ]
      },
      {
       "id": "soho-negozi",
       "title": "Negozi per bambini",
       "where": "Prince Street e Spring Street, tra Broadway e Crosby.",
       "look": [
        "Apple SoHo: iPad e giochi da provare, la scala di vetro.",
        "MoMA Design Store, 81 Spring Street: oggetti strani e giochi del museo, si possono toccare.",
        "Le vetrine natalizie lungo Prince Street."
       ],
       "tips": [
        "Se vi serve un bagno, chiedete in un caffè dove consumate: i negozi di solito non li hanno aperti al pubblico."
       ],
       "options": [
        {
         "label": "Se avete 20 minuti",
         "text": "Solo Apple SoHo e un giro di vetrine su Prince."
        },
        {
         "label": "Se sono stanchi",
         "text": "Prince Street Pizza, al 27 di Prince verso Mott: una fetta quadrata e si riparte."
        }
       ]
      }
     ]
    }
   ],
   "missionId": "tue-soho",
   "nearby": [
    {
     "pos": [
      40.72118,
      -74.00245
     ],
     "text": "La Regina di Greene Street, 28-30 Greene: tetto a mansarda e abbaini.",
     "kind": "curio"
    },
    {
     "pos": [
      40.72325,
      -74.0007
     ],
     "text": "Il Re di Greene Street, 72-76 Greene: colonne su cinque piani.",
     "kind": "curio"
    },
    {
     "pos": [
      40.72368,
      -73.99807
     ],
     "text": "552-554 Broadway: le lenti di vetro nel marciapiede più belle del quartiere.",
     "kind": "curio"
    },
    {
     "pos": [
      40.72181,
      -73.9995
     ],
     "text": "Haughwout Building: qui nel 1857 il primo ascensore per passeggeri del mondo.",
     "kind": "curio"
    },
    {
     "pos": [
      40.72598,
      -73.99975
     ],
     "text": "New York Earth Room, 141 Wooster: un appartamento pieno di terra dal 1977. Il martedì è chiuso, ma sapere che c'è fa ridere.",
     "kind": "curio"
    },
    {
     "pos": [
      40.71955,
      -74.00661
     ],
     "text": "La caserma dei Ghostbusters, 14 North Moore Street a Tribeca, 10 minuti a piedi verso sud: è una caserma dei pompieri vera. Se la porta è aperta, a volte fanno vedere il piano terra.",
     "kind": "film"
    },
    {
     "pos": [
      40.72266,
      -73.99816
     ],
     "text": "Balthazar, 80 Spring Street: brasserie dove a colazione capita di vedere attori e gente della moda.",
     "kind": "famous"
    }
   ],
   "cover": {
    "img": "img/soho.webp",
    "credit": "Beyond My Ken, CC BY-SA 4.0, via Wikimedia Commons"
   },
   "bagni": {
    "where": "Nei negozi grandi: Bloomingdale's SoHo (504 Broadway) è tra i più consigliati, anche Apple (Prince Street) e Crate & Barrel (secondo piano). I piccoli negozi di solito non li aprono al pubblico.",
    "cost": "Gratis",
    "clean": "Bloomingdale's SoHo è citato più volte come ottimo; non verificato di persona"
   }
  },
  {
   "id": "tue-go-union",
   "name": "A piedi per Washington Square fino a Union Square",
   "kind": "move",
   "start": "12:30",
   "durationMin": 30,
   "cost": "Gratis",
   "pos": [
    40.73122,
    -73.99712
   ],
   "radiusM": 120,
   "hook": "Mezz'ora a piedi passando sotto l'arco di marmo di Washington Square: è sulla strada, e c'è una sfida di Vinnie.",
   "story": "L'arco di Washington Square è stato costruito per i cento anni dell'insediamento di George Washington come primo presidente. Prima era di legno; piacque così tanto che lo rifecero in marmo, inaugurato nel 1895.",
   "look": [
    "L'arco bianco con le due statue di George Washington.",
    "La fontana al centro della piazza e i musicisti di strada.",
    "Su University Place, guardando avanti: gli alberi di Union Square."
   ],
   "tips": [
    {
     "text": "Invece della metro, che il programma prevedeva: sono 25–30 minuti a piedi e passate dall'arco. Se sono stanchi o piove: metro R o W da Prince St fino a 14 St–Union Sq, due fermate.",
     "when": "always"
    },
    {
     "text": "Strand, la grande libreria, è su Broadway alla 12ª: una deviazione di un isolato a destra prima di Union Square.",
     "when": "always"
    },
    {
     "text": "In ritardo: metro R o W da Prince St, 2 fermate.",
     "when": "late"
    },
    {
     "text": "Se piove: metro, il parco non ha riparo.",
     "when": "rain"
    }
   ],
   "steps": [
    {
     "id": "gounion-broadway",
     "title": "Su Broadway verso nord",
     "where": "Da Prince Street salite Broadway verso nord fino a Washington Place, poi a sinistra fino alla piazza: circa 12 minuti.",
     "look": [
      "Le bandiere viola della New York University sui palazzi intorno alla piazza."
     ],
     "tips": []
    },
    {
     "id": "gounion-arch",
     "title": "L'arco di Washington Square",
     "where": "Attraversate la piazza fino all'arco, sul lato nord, dove comincia la Quinta Avenue.",
     "look": [
      "Le due statue di Washington sui pilastri.",
      "Sotto l'arco, guardando la Quinta verso nord: in fondo si vede l'Empire State."
     ],
     "tips": [
      "Qui c'è la sfida di Vinnie con la foto di cento anni fa."
     ]
    },
    {
     "id": "gounion-univ",
     "title": "University Place fino a Union Square",
     "where": "Dal lato nord della piazza andate verso est fino a University Place e salitela fino alla 14ª: Union Square è di fronte. Circa 10 minuti.",
     "look": [
      "Alla 14ª: le bancarelle rosse del mercatino di Natale."
     ],
     "tips": []
    }
   ],
   "bagni": {
    "where": "Washington Square: edificio sul lato sud, aperto di giorno, pulizia non verificata. Meglio un caffè su MacDougal Street o Whole Foods a Union Square.",
    "cost": "Gratis",
    "clean": "Non verificato"
   }
  },
  {
   "id": "union-sq",
   "name": "Union Square, Strand e Flatiron",
   "kind": "key",
   "start": "13:00",
   "durationMin": 80,
   "cost": "Gratis. Mercatino e libri solo se comprate",
   "pos": [
    40.73607,
    -73.99019
   ],
   "radiusM": 300,
   "hook": "Pranzo tra le bancarelle del mercatino di Natale, sotto un orologio che conta all'indietro.",
   "story": "Union Square non c'entra con la guerra civile: si chiama così perché qui si univano le due strade principali dell'isola, Broadway e la vecchia Bowery. La statua di Washington a cavallo, del 1856, è la prima statua equestre in bronzo fatta in America. Sul palazzo di fronte c'è il Metronome: un muro con un buco che sbuffa vapore e un orologio enorme che oggi conta il tempo che resta per fermare il riscaldamento del pianeta. In fondo a Broadway c'è il Flatiron, del 1902: nella punta è largo meno di due metri.",
   "look": [
    "Il Metronome, sul lato sud della 14ª: il buco dorato al centro del muro, la grande mano di bronzo e i numeri rossi che scorrono.",
    "La statua di Washington a cavallo, all'estremità sud della piazza: la sua mano è la stessa che vedete ingrandita sul Metronome.",
    "La punta del Flatiron dalla piazzetta pedonale sulla 23ª: nei film di Spider-Man è la sede del Daily Bugle, il giornale dove lavora Peter Parker."
   ],
   "tips": [
    {
     "text": "Il mercatino apre alle 11 il martedì: si pranza lì, tra le bancarelle, o da Whole Foods sul lato sud della 14ª, al chiuso.",
     "when": "arrive"
    },
    {
     "text": "Il mercatino di Natale è nell'angolo sud-ovest della piazza, verso la 14ª e Union Square West. Il martedì apre alle 11 e chiude alle 20.",
     "when": "arrive"
    },
    {
     "text": "Strand è sulla strada se arrivate a piedi dal Village: Broadway all'angolo con la 12ª, due isolati a sud della piazza.",
     "when": "arrive"
    },
    {
     "text": "In ritardo: saltate Strand e Harry Potter. Mercatino 20 minuti, poi su per Broadway fino al Flatiron e metro R/W dalla 23ª.",
     "when": "late"
    },
    {
     "text": "Se piove: Strand e il negozio di Harry Potter sono al coperto; il mercatino ha i tetti delle bancarelle ma i corridoi sono scoperti.",
     "when": "rain"
    },
    {
     "text": "Bagni: Whole Foods sul lato sud della 14ª, nello stesso palazzo del Metronome, ha bagni e tavoli al piano di sopra.",
     "when": "tired"
    },
    {
     "text": "Alle 14:20 si riparte verso l'hotel: metro N, Q, R o W da 14 St–Union Sq. Se andate al Flatiron, R o W dalla 23ª.",
     "when": "always"
    }
   ],
   "steps": [
    {
     "id": "usq-strand",
     "title": "Strand, i libri a chilometri",
     "where": "828 Broadway, all'angolo con la 12ª. Se arrivate in metro a Union Square, è due isolati a sud.",
     "look": [
      "I carrelli fuori sul marciapiede: libri usati a pochi dollari, si sfogliano anche al freddo.",
      "Il cartello con le miglia di libri: dicono che messi in fila farebbero più di 18 miglia.",
      "Le borse di tela con il logo rosso: il souvenir che portano a casa tutti."
     ],
     "tips": [
      "I libri per bambini: chiedete «children's books» al banco, vi mandano al piano giusto."
     ],
     "options": [
      {
       "label": "Se avete 10 minuti",
       "text": "Solo i carrelli fuori e una borsa di tela."
      },
      {
       "label": "Se sono stanchi",
       "text": "Saltatelo e andate dritti al mercatino."
      }
     ]
    },
    {
     "id": "usq-piazza",
     "title": "La piazza e il mercatino",
     "where": "Entrate dall'angolo sud della piazza, all'uscita della metro 14 St–Union Square.",
     "look": [
      "La statua di Washington a cavallo, rivolta verso sud.",
      "Il Metronome sul palazzo di fronte: aspettate un minuto e guardate il vapore uscire dal buco.",
      "Le bancarelle rosse e bianche del mercatino, una fila dopo l'altra."
     ],
     "tips": [
      "Il mercatino ha quasi 200 bancarelle: decidete prima chi cerca cosa, e un punto di ritrovo vicino alla statua di Washington."
     ],
     "steps": [
      {
       "id": "usq-metronome",
       "title": "Il Metronome",
       "where": "Fermatevi vicino alla statua di Washington e guardate verso sud, oltre la 14ª.",
       "look": [
        "Il buco nero e oro al centro del muro di mattoni a cerchi: da lì esce il vapore, a mezzogiorno e a mezzanotte uno sbuffo grande.",
        "La mano di bronzo appoggiata al muro: è la mano di Washington, copiata dalla statua dietro di voi.",
        "L'enorme pezzo di roccia sotto il muro: guardate quanto è grande rispetto alle persone che passano."
       ],
       "tips": [
        "L'orologio rosso a destra è il Climate Clock: conta anni, giorni, ore e minuti che restano."
       ]
      },
      {
       "id": "usq-mercatino",
       "title": "Il mercatino di Natale",
       "where": "Angolo sud-ovest della piazza, tra la 14ª e Union Square West.",
       "look": [
        "Le bancarelle di artigiani di New York: decorazioni, guanti, cappelli di lana.",
        "I banchi di cibo: ciambelle calde, cioccolata, panini.",
        "La bancarella «Made in NYC» che cambia ogni settimana."
       ],
       "tips": [
        "I prezzi sono quelli dei negozi, non del mercato: comprate solo se vi piace davvero."
       ],
       "options": [
        {
         "label": "Se avete 20 minuti",
         "text": "Un giro lungo un solo corridoio, una ciambella, e si riparte."
        },
        {
         "label": "Se hanno freddo",
         "text": "Cioccolata calda a una bancarella, oppure su da Whole Foods al caldo."
        }
       ]
      }
     ]
    },
    {
     "id": "usq-flatiron",
     "title": "Su per Broadway fino al Flatiron",
     "where": "Uscite dall'angolo nord-ovest della piazza e camminate su Broadway verso nord, 10 isolati, circa 15 minuti.",
     "look": [
      "Harry Potter New York, 935 Broadway tra la 21ª e la 22ª: tre piani di negozio e il bar della burrobirra.",
      "Il Flatiron che compare in fondo alla strada, sempre più sottile.",
      "L'orologio di ghisa sul marciapiede della Quinta Strada, davanti al numero 200: alto come un lampione, dal 1909."
     ],
     "tips": [
      "La metro R/W per tornare in hotel è proprio lì, all'angolo tra Broadway e la 23ª."
     ],
     "steps": [
      {
       "id": "usq-harrypotter",
       "title": "Harry Potter New York",
       "where": "935 Broadway, lato est, tra la 21ª e la 22ª.",
       "look": [
        "Il bar della burrobirra al piano terra: alla spina, in bottiglia o in gelato.",
        "Le bacchette sulle pareti, come da Olivander.",
        "La fenice sopra la scala."
       ],
       "tips": [
        "Si rischia di restarci un'ora: date un limite prima di entrare."
       ],
       "options": [
        {
         "label": "Se avete 10 minuti",
         "text": "Una burrobirra da dividere e fuori."
        }
       ]
      },
      {
       "id": "usq-punta",
       "title": "La punta del Flatiron",
       "where": "La piazzetta pedonale con i tavoli a nord del palazzo, sulla 23ª tra Broadway e la Quinta.",
       "look": [
        "La punta: meno di due metri di larghezza, sembra una lama.",
        "Le finestre tutte diverse: il palazzo è un triangolo, ogni ufficio ha la sua forma.",
        "Il palazzo di nuovo pulito: le impalcature sono state tolte quest'anno dopo sette anni di lavori, e la sera ora è illuminato."
       ],
       "tips": [
        "Qui fate la missione di Vinnie, dalla piazzetta.",
        "Si dice che il vento che girava intorno alla punta alzasse le gonne delle signore, e che i poliziotti cacciassero i curiosi gridando «23 skidoo»."
       ],
       "options": [
        {
         "label": "Se avete ancora tempo",
         "text": "LEGO Store al 200 della Quinta Strada, proprio di fronte: si entra, si guarda il palazzo fatto di mattoncini, si esce."
        }
       ]
      }
     ]
    }
   ],
   "missionId": "tue-flatiron",
   "nearby": [
    {
     "pos": [
      40.73328,
      -73.99094
     ],
     "text": "Strand, 828 Broadway: la libreria del 1927, carrelli di libri usati fuori.",
     "kind": "curio"
    },
    {
     "pos": [
      40.73441,
      -73.99033
     ],
     "text": "Metronome: il buco che sbuffa vapore e il Climate Clock.",
     "kind": "curio"
    },
    {
     "pos": [
      40.73538,
      -73.9907
     ],
     "text": "Washington a cavallo, 1856: la prima statua equestre in bronzo d'America.",
     "kind": "curio"
    },
    {
     "pos": [
      40.73555,
      -73.99132
     ],
     "text": "La statua di Gandhi, angolo sud-ovest della piazza.",
     "kind": "curio"
    },
    {
     "pos": [
      40.74029,
      -73.98958
     ],
     "text": "Harry Potter New York, 935 Broadway: bar della burrobirra al piano terra.",
     "kind": "curio"
    },
    {
     "pos": [
      40.74106,
      -73.98964
     ],
     "text": "Flatiron Building: il Daily Bugle nei film di Spider-Man di Sam Raimi.",
     "kind": "film"
    },
    {
     "pos": [
      40.74215,
      -73.98986
     ],
     "text": "L'orologio di ghisa della Quinta Strada, davanti al 200: dal 1909.",
     "kind": "curio"
    },
    {
     "pos": [
      40.7422,
      -73.98797
     ],
     "text": "Madison Square Park: qui Shake Shack è nato nel 2001 come carretto di hot dog, e nel 2004 è diventato il primo chiosco.",
     "kind": "curio"
    }
   ],
   "cover": {
    "img": "img/union-sq.webp",
    "credit": "Mack Male from Edmonton, AB, Canada, CC BY-SA 2.0, via Wikimedia Commons"
   },
   "bagni": {
    "where": "Whole Foods (14ª strada) con bagni al piano di sopra, o il Union Square Pavilion e il parco giochi di Evelyn's, aperti di giorno. Strand in genere non li apre al pubblico.",
    "cost": "Gratis",
    "clean": "Non verificato"
   }
  },
  {
   "id": "tue-go-hotel",
   "name": "Rientro verso l'hotel, in metro",
   "kind": "move",
   "start": "14:20",
   "durationMin": 30,
   "cost": "Metro $3 a testa",
   "pos": [
    40.73588,
    -73.9906
   ],
   "radiusM": 120,
   "hook": "Dritti verso Times Square: N, Q, R o W, tutte vanno bene.",
   "story": "Union Square è uno dei nodi più grandi della metro: si incrociano otto linee. Sotto la piazza passano treni per Brooklyn, Queens e tutta Manhattan.",
   "look": [
    "I cartelli gialli N Q R W, direzione Uptown & Queens."
   ],
   "tips": [
    {
     "text": "La Q è espressa: da 14 St ferma a 34 St e poi a Times Sq, più veloce.",
     "when": "always"
    },
    {
     "text": "Se avete deciso di passare da Macy's: scendete a 34 St–Herald Sq, è sopra la stazione.",
     "when": "always"
    },
    {
     "text": "Dal Flatiron: R o W dalla 23ª fino a Times Sq–42 St.",
     "when": "arrive"
    }
   ],
   "steps": [
    {
     "id": "goht-station",
     "title": "14 St–Union Sq",
     "where": "Ingresso all'angolo sud-ovest della piazza, vicino al mercatino. Linee N Q R W, direzione Uptown & Queens.",
     "look": [],
     "tips": []
    },
    {
     "id": "goht-train",
     "title": "Fino a Times Sq–42 St",
     "where": "Con la Q due fermate (34 St, Times Sq). Con R o W qualcuna in più.",
     "look": [
      "A 34 St–Herald Sq: Macy's è proprio sopra."
     ],
     "tips": []
    },
    {
     "id": "goht-walk",
     "title": "Dalla metro all'hotel",
     "where": "Uscite verso la Settima Avenue e la 41ª, poi sulla 41ª verso l'Ottava: l'hotel è al 220.",
     "look": [],
     "tips": []
    }
   ],
   "bagni": {
    "where": "Whole Foods sul lato sud della 14ª, prima di scendere in metro.",
    "cost": "Gratis",
    "clean": "Non verificato"
   }
  },
  {
   "id": "tue-libero",
   "name": "Ultima ora libera vicino all'hotel",
   "kind": "optional",
   "start": "14:50",
   "durationMin": 50,
   "cost": "Gratis",
   "pos": [
    40.75362,
    -73.98323
   ],
   "radiusM": 150,
   "hook": "Un'ora senza programma a due isolati dall'hotel: ultima cioccolata, ultimo souvenir, o Macy's se sabato l'avete saltato.",
   "story": "In un'ora a piedi dall'hotel si arriva a Bryant Park (3 minuti), alla biblioteca coi leoni (5 minuti) o a Macy's (10 minuti).",
   "look": [
    "Bryant Park: le casette del mercatino, aperte il martedì dalle 11 alle 20.",
    "La biblioteca: la sala di lettura, se volete rivederla."
   ],
   "tips": [
    {
     "text": "Alle 15:40 tutti in hotel per le valigie: il taxi è alle 16:00.",
     "when": "always"
    },
    {
     "text": "Stanchi: restate nella hall dell'hotel e riposate.",
     "when": "tired"
    }
   ],
   "steps": [],
   "bagni": {
    "where": "Bryant Park, lato 42ª: tra i migliori bagni pubblici della città. Oppure in hotel.",
    "cost": "Gratis",
    "clean": "Ottima secondo più guide"
   }
  },
  {
   "id": "hotel",
   "name": "Hotel: bagagli",
   "kind": "key",
   "start": "15:40",
   "durationMin": 20,
   "cost": "Gratis",
   "pos": [
    40.75561,
    -73.98861
   ],
   "radiusM": 120,
   "hook": "Venti minuti per ritirare le valigie, fare l'ultimo bagno e salire sul taxi.",
   "story": "La 41ª tra la Settima e l'Ottava è una strada di teatri: il Nederlander, accanto all'hotel, ha aperto nel 1921. Di fronte, sull'Ottava Avenue, c'è la sede del New York Times. Il giornale si era già trasferito qui vicino nel 1904, e la piazza prese il suo nome: Times Square. È la stessa piazza dove ogni anno a mezzanotte scende la palla di Capodanno.",
   "look": [
    "La facciata del Nederlander Theatre, accanto all'hotel: insegna luminosa e locandina dello spettacolo.",
    "La scritta The New York Times sulla facciata del grattacielo all'angolo con l'Ottava.",
    "In fondo alla 41ª verso est, le luci di Times Square."
   ],
   "tips": [
    {
     "text": "Stamattina: check-out e valigie in deposito alla reception. Tenete il tagliandino in un posto sicuro.",
     "when": "always"
    },
    {
     "text": "Il taxi è alle 16:00: un'ora prima di quanto proponeva il programma, perché è la settimana del Ringraziamento e il traffico verso JFK sarà pesante.",
     "when": "arrive"
    },
    {
     "text": "Mettete a portata di mano passaporti, carta di imbarco e una merenda per il taxi: il viaggio dura più di un'ora.",
     "when": "arrive"
    },
    {
     "text": "In ritardo: ritirate le valigie e partite subito, i bagni si fanno in aeroporto.",
     "when": "late"
    }
   ],
   "nearby": [
    {
     "pos": [
      40.75548,
      -73.9883
     ],
     "text": "Nederlander Theatre, accanto all'hotel: aperto nel 1921.",
     "kind": "curio"
    },
    {
     "pos": [
      40.7559,
      -73.98927
     ],
     "text": "The New York Times Building, 620 Ottava Avenue: il giornale che ha dato il nome a Times Square.",
     "kind": "curio"
    }
   ],
   "cover": {
    "img": "img/hotel.webp",
    "credit": "Epicgenius, CC BY-SA 4.0, via Wikimedia Commons"
   },
   "bagni": {
    "where": "Nell'hotel: fateli prima del taxi per l'aeroporto (il viaggio dura 40–60 minuti).",
    "cost": "Gratis",
    "clean": "Non verificato"
   }
  },
  {
   "id": "partenza",
   "name": "Taxi per JFK",
   "kind": "move",
   "start": "16:00",
   "durationMin": 120,
   "cost": "Taxi $70 fisso + circa $15 tra supplementi e pedaggio + mancia: $95–105",
   "pos": [
    40.64295,
    -73.77937
   ],
   "radiusM": 2000,
   "hook": "L'ultima corsa in taxi giallo: guardate dal lunotto, New York vi saluta accesa.",
   "story": "Da Manhattan a JFK il taxi ha una tariffa fissa di 70 dollari, decisa dalla città: non conta il traffico, conta solo la tratta. A questa si aggiungono i supplementi, i pedaggi di ponti e tunnel e la mancia. Il martedì alle cinque è l'ora di punta, ed è l'unica corsa del viaggio con il supplemento di 5 dollari. L'aeroporto fino al 1963 si chiamava Idlewild, come il campo da golf che c'era prima.",
   "look": [
    "Lo schermo del taxi: deve indicare la tariffa fissa per JFK (Rate #2).",
    "Il lunotto dopo il tunnel o il ponte: lo skyline di Manhattan illuminato dietro di voi.",
    "L'Empire State Building: la cima cambia colore quasi ogni sera."
   ],
   "tips": [
    {
     "text": "Partenza alle 16:00 per il volo delle 22:20: con il traffico della settimana del Ringraziamento il viaggio può durare anche più di un'ora e mezza. Meglio aspettare in aeroporto che in coda sulla Van Wyck.",
     "when": "always"
    },
    {
     "text": "Mettete in conto 60–90 minuti: il martedì pomeriggio dopo le 16 il traffico verso Queens è lento.",
     "when": "always"
    },
    {
     "text": "Il conto fisso è $70, più $5 di ora di punta (16–20 nei giorni feriali), $2,50 di congestione, $0,75 della zona di Manhattan, $1,50 di supplementi MTA e miglioria, più eventuale pedaggio. Mancia 15–20% sulla corsa.",
     "when": "arrive"
    },
    {
     "text": "Pagate con la carta sullo schermo posteriore: scegliete la mancia lì. Se il tassista dice che la carta non funziona, è obbligato ad accettarla.",
     "when": "arrive"
    },
    {
     "text": "Dite il terminal al tassista appena salite: a JFK i terminal sono lontani tra loro.",
     "when": "arrive"
    },
    {
     "text": "Se siete in ritardo per il volo: la LIRR da Penn Station a Jamaica e poi l'AirTrain evitano il traffico, ma con quattro valigie è dura. Meglio partire prima.",
     "when": "late"
    }
   ],
   "missionId": "tue-finale",
   "nearby": [
    {
     "pos": [
      40.64577,
      -73.77767
     ],
     "text": "TWA Hotel accanto al Terminal 5: il terminal anni '60 a forma di ali, oggi hotel. Si può entrare a vedere la hall.",
     "kind": "curio"
    }
   ],
   "bagni": {
    "where": "In aeroporto, dopo il check-in. Il taxi non si ferma.",
    "cost": "Gratis",
    "clean": "Non verificato"
   },
   "steps": [
    {
     "id": "part-taxi",
     "title": "Il taxi",
     "where": "Davanti all'hotel, sulla 41ª, o sulla Ottava Avenue. Valigie nel bagagliaio, passaporti in mano.",
     "look": [
      "Lo schermo sul retro del sedile: lì si vede il conto e si paga con la carta."
     ],
     "tips": [
      "Dite subito il terminal: «JFK, Terminal …, please». Controllatelo sulla carta d'imbarco."
     ]
    },
    {
     "id": "part-road",
     "title": "Verso Queens",
     "where": "Il taxi esce da Manhattan da un tunnel o un ponte e attraversa Queens. È il momento della sfida finale di Vinnie.",
     "look": [
      "Dal lunotto posteriore: lo skyline di Manhattan che si allontana."
     ],
     "tips": []
    },
    {
     "id": "part-jfk",
     "title": "A JFK",
     "where": "Al terminal: check-in e consegna dei bagagli, poi i controlli.",
     "look": [],
     "tips": [
      "Pagate con la carta sullo schermo e scegliete lì la mancia."
     ]
    }
   ]
  }
 ],
 "walks": [
  {
   "from": "tue-checkout",
   "to": "tue-go-soho",
   "minutes": 3,
   "how": "Sulla 41ª verso l'Ottava Avenue, ingresso della metro 42 St–Port Authority.",
   "mapsMode": "walking",
   "tips": []
  },
  {
   "from": "tue-go-soho",
   "to": "soho",
   "minutes": 20,
   "how": "Metro E da 42 St–Port Authority fino a Spring St.",
   "mapsMode": "transit",
   "tips": []
  },
  {
   "from": "soho",
   "to": "tue-go-union",
   "minutes": 12,
   "how": "Broadway verso nord fino a Washington Place, poi a sinistra fino alla piazza.",
   "mapsMode": "walking",
   "tips": []
  },
  {
   "from": "tue-go-union",
   "to": "union-sq",
   "minutes": 12,
   "how": "Dal lato nord della piazza a University Place, poi dritti fino alla 14ª.",
   "mapsMode": "walking",
   "tips": []
  },
  {
   "from": "union-sq",
   "to": "tue-go-hotel",
   "minutes": 3,
   "how": "Ingresso della metro all'angolo sud-ovest della piazza.",
   "mapsMode": "walking",
   "tips": []
  },
  {
   "from": "tue-go-hotel",
   "to": "tue-libero",
   "minutes": 20,
   "how": "Metro N, Q, R o W fino a Times Sq–42 St, poi 5 minuti a piedi verso est fino a Bryant Park.",
   "mapsMode": "transit",
   "tips": []
  },
  {
   "from": "tue-libero",
   "to": "hotel",
   "minutes": 6,
   "how": "Sulla 41ª verso ovest fino al numero 220.",
   "mapsMode": "walking",
   "tips": []
  },
  {
   "from": "hotel",
   "to": "partenza",
   "minutes": 75,
   "how": "Taxi fino a JFK.",
   "mapsMode": "driving",
   "tips": []
  }
 ],
 "food": [
  {
   "id": "tue-f-ansel",
   "name": "Dominique Ansel Bakery",
   "type": "pasticceria francese",
   "category": "colazione",
   "order": "Un Cronut da dividere, un DKA, un Frozen S'more per i bambini, cioccolata calda.",
   "price": "$35–50 in 4",
   "pos": [
    40.72517,
    -74.00295
   ],
   "hours": {
    "0": [
     [
      "09:00",
      "19:00"
     ]
    ],
    "1": [
     [
      "08:00",
      "19:00"
     ]
    ],
    "2": [
     [
      "08:00",
      "19:00"
     ]
    ],
    "3": [
     [
      "08:00",
      "19:00"
     ]
    ],
    "4": [
     [
      "08:00",
      "19:00"
     ]
    ],
    "5": [
     [
      "08:00",
      "20:00"
     ]
    ],
    "6": [
     [
      "08:00",
      "20:00"
     ]
    ]
   },
   "near": [
    "soho"
   ],
   "note": "Il Cronut può finire presto. Giardinetto sul retro.",
   "rating": {
    "stars": 4.3,
    "count": 9145,
    "source": "Google"
   },
   "buzz": "Per molti il Cronut vale la coda del mattino, altri lo trovano caro e sopravvalutato; servizio veloce.",
   "img": {
    "src": "img/food-tue-f-ansel.webp",
    "credit": "LittleT889, CC BY-SA 4.0, via Wikimedia Commons"
   }
  },
  {
   "id": "tue-f-balthazar",
   "name": "Balthazar",
   "type": "brasserie francese",
   "category": "colazione",
   "order": "Pancake o french toast per i bambini, uova alla Benedict, il cestino di pane e croissant.",
   "price": "$100–150 in 4",
   "pos": [
    40.72266,
    -73.99816
   ],
   "hours": {
    "1": [
     [
      "07:30",
      "11:30"
     ]
    ],
    "2": [
     [
      "07:30",
      "11:30"
     ]
    ],
    "3": [
     [
      "07:30",
      "11:30"
     ]
    ],
    "4": [
     [
      "07:30",
      "11:30"
     ]
    ],
    "5": [
     [
      "07:30",
      "11:30"
     ]
    ]
   },
   "near": [
    "soho"
   ],
   "note": "Orari solo della colazione nei feriali; poi pranzo e cena. Al banco del pane accanto si comprano croissant da portare via.",
   "rating": {
    "stars": 4.4,
    "count": 8170,
    "source": "Google"
   },
   "buzz": "Atmosfera da brasserie parigina e colazione curata; prezzi alti, sala rumorosa e affollata, meglio prenotare anche al mattino.",
   "img": {
    "src": "img/food-tue-f-balthazar.webp",
    "credit": "Ralph Daily, CC BY 2.0, via Wikimedia Commons"
   }
  },
  {
   "id": "tue-f-ruby",
   "name": "Ruby's Cafe",
   "type": "caffè australiano",
   "category": "colazione",
   "order": "Avocado toast, pancake alla ricotta, burger Bronte per chi ha fame vera.",
   "price": "$80–110 in 4",
   "pos": [
    40.7223,
    -73.99623
   ],
   "hours": {
    "0": [
     [
      "09:00",
      "23:00"
     ]
    ],
    "1": [
     [
      "09:00",
      "23:00"
     ]
    ],
    "2": [
     [
      "09:00",
      "23:00"
     ]
    ],
    "3": [
     [
      "09:00",
      "23:00"
     ]
    ],
    "4": [
     [
      "09:00",
      "23:00"
     ]
    ],
    "5": [
     [
      "09:00",
      "23:00"
     ]
    ],
    "6": [
     [
      "09:00",
      "23:00"
     ]
    ]
   },
   "near": [
    "soho"
   ],
   "note": "Locale piccolo, si aspetta fuori. Il martedì mattina di solito si entra.",
   "rating": {
    "stars": 4.3,
    "count": 2358,
    "source": "Google"
   },
   "buzz": "Burger e pasta ai gamberi lodati, personale cordiale; locale minuscolo e rumoroso, nel weekend attese anche lunghe."
  },
  {
   "id": "tue-f-princepizza",
   "name": "Prince Street Pizza",
   "type": "pizza al taglio",
   "category": "tipico",
   "order": "La Spicy Spring: fetta quadrata con i pepperoni che fanno la coppetta. Per i bambini la fetta margherita.",
   "price": "$30–40 in 4",
   "pos": [
    40.72308,
    -73.99454
   ],
   "hours": {
    "0": [
     [
      "11:00",
      "24:00"
     ]
    ],
    "1": [
     [
      "11:00",
      "24:00"
     ]
    ],
    "2": [
     [
      "11:00",
      "24:00"
     ]
    ],
    "3": [
     [
      "11:00",
      "24:00"
     ]
    ],
    "4": [
     [
      "11:00",
      "24:00"
     ]
    ],
    "5": [
     [
      "11:00",
      "24:00"
     ]
    ],
    "6": [
     [
      "11:00",
      "24:00"
     ]
    ]
   },
   "near": [
    "soho"
   ],
   "note": "Aperto fino a tardi, nei weekend fino alle 3–5. Si mangia in piedi. Orari del martedì da verificare.",
   "rating": {
    "stars": 4.4,
    "count": 9044,
    "source": "Google"
   },
   "buzz": "Fetta quadrata coi pepperoni adorata; coda quasi sempre lunga ma veloce, prezzo alto per una fetta.",
   "img": {
    "src": "img/food-tue-f-princepizza.webp",
    "credit": "Rachel Kramer Bussel, CC BY 2.0, via Wikimedia Commons"
   }
  },
  {
   "id": "tue-f-fanelli",
   "name": "Fanelli Cafe",
   "type": "vecchia taverna",
   "category": "pranzo",
   "order": "Burger e patatine, zuppa del giorno. Tovaglie a quadretti, foto di pugili sui muri.",
   "price": "$60–90 in 4",
   "pos": [
    40.72461,
    -73.99875
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
    "soho"
   ],
   "note": "Bar dal 1847, uno dei più vecchi della città. Orari da verificare.",
   "rating": {
    "stars": 4.3,
    "count": 1578,
    "source": "Google"
   },
   "buzz": "Taverna storica con atmosfera autentica, burger e patatine solidi a prezzi onesti; spesso piena, si aspetta un tavolo.",
   "img": {
    "src": "img/food-tue-f-fanelli.webp",
    "credit": "Jess Hawsor, CC BY-SA 4.0, via Wikimedia Commons"
   }
  },
  {
   "id": "tue-f-joes",
   "name": "Joe's Pizza Carmine Street",
   "type": "pizza al taglio",
   "category": "pranzo",
   "order": "La fetta plain (pomodoro e mozzarella), piegata in due. Una a testa, poi si vede.",
   "price": "$25–35 in 4",
   "pos": [
    40.73057,
    -74.00209
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
    "tue-go-union"
   ],
   "note": "Aperto fino a notte fonda. Pochissimi posti a sedere.",
   "rating": {
    "stars": 4.5,
    "count": 8156,
    "source": "Google"
   },
   "buzz": "Fetta classica sottile ed economica, un riferimento per la pizza al taglio; coda frequente ma rapidissima, pochissimi posti.",
   "img": {
    "src": "img/food-tue-f-joes.webp",
    "credit": "Jim.henderson, CC BY-SA 4.0, via Wikimedia Commons"
   }
  },
  {
   "id": "tue-f-mamoun",
   "name": "Mamoun's Falafel",
   "type": "falafel mediorientale",
   "category": "pranzo",
   "order": "Panino falafel con salsa tahina, shawarma di pollo per chi non vuole i ceci.",
   "price": "$25–40 in 4",
   "pos": [
    40.73024,
    -74.00043
   ],
   "hours": {
    "0": [
     [
      "11:00",
      "24:00"
     ]
    ],
    "1": [
     [
      "11:00",
      "24:00"
     ]
    ],
    "2": [
     [
      "11:00",
      "24:00"
     ]
    ],
    "3": [
     [
      "11:00",
      "24:00"
     ]
    ],
    "4": [
     [
      "11:00",
      "24:00"
     ]
    ],
    "5": [
     [
      "11:00",
      "24:00"
     ]
    ],
    "6": [
     [
      "11:00",
      "24:00"
     ]
    ]
   },
   "near": [
    "tue-go-union"
   ],
   "note": "Dal 1971. Locale minuscolo, qualche sgabello. Salsa piccante solo per gli adulti.",
   "rating": {
    "stars": 4.5,
    "count": 3399,
    "source": "Google"
   },
   "buzz": "Falafel lodati, porzioni generose e prezzi bassi; shawarma meno convincente, pochissimi posti, meglio da asporto."
  },
  {
   "id": "tue-f-reggio",
   "name": "Caffe Reggio",
   "type": "caffè storico",
   "category": "snack",
   "order": "Cappuccino per i grandi, cioccolata calda e cannolo per i bambini.",
   "price": "$30–45 in 4",
   "pos": [
    40.73032,
    -74.00036
   ],
   "hours": {
    "0": [
     [
      "09:00",
      "24:00"
     ]
    ],
    "1": [
     [
      "09:00",
      "24:00"
     ]
    ],
    "2": [
     [
      "09:00",
      "24:00"
     ]
    ],
    "3": [
     [
      "09:00",
      "24:00"
     ]
    ],
    "4": [
     [
      "09:00",
      "24:00"
     ]
    ],
    "5": [
     [
      "09:00",
      "24:00"
     ]
    ],
    "6": [
     [
      "09:00",
      "24:00"
     ]
    ]
   },
   "near": [
    "tue-go-union"
   ],
   "note": "Dal 1927, dicono il primo cappuccino d'America. Al caldo e seduti. Orari da verificare.",
   "rating": {
    "stars": 4.3,
    "count": 1995,
    "source": "Google"
   },
   "buzz": "Atmosfera d'epoca molto amata e cappuccino lodato; dolci nella media, servizio lento e prezzi un po' alti.",
   "img": {
    "src": "img/food-tue-f-reggio.webp",
    "credit": "Joe Mabel, CC BY-SA 3.0, via Wikimedia Commons"
   }
  },
  {
   "id": "tue-f-breads",
   "name": "Breads Bakery",
   "type": "panetteria ebraica",
   "category": "snack",
   "order": "Babka al cioccolato da dividere, rugelach, una cioccolata calda.",
   "price": "$20–35 in 4",
   "pos": [
    40.73654,
    -73.99186
   ],
   "hours": {
    "0": [
     [
      "07:00",
      "20:00"
     ]
    ],
    "1": [
     [
      "07:00",
      "20:00"
     ]
    ],
    "2": [
     [
      "07:00",
      "20:00"
     ]
    ],
    "3": [
     [
      "07:00",
      "20:00"
     ]
    ],
    "4": [
     [
      "07:00",
      "20:00"
     ]
    ],
    "5": [
     [
      "07:00",
      "20:00"
     ]
    ],
    "6": [
     [
      "07:00",
      "20:00"
     ]
    ]
   },
   "near": [
    "union-sq"
   ],
   "note": "Sulla 16ª, un isolato a ovest della piazza. Pieno ma veloce.",
   "rating": {
    "stars": 4.6,
    "count": 2549,
    "source": "Google"
   },
   "buzz": "Babka al cioccolato lodata da quasi tutti; locale sempre affollato ma fila veloce, prezzi un po' alti."
  },
  {
   "id": "tue-f-wholefoods",
   "name": "Whole Foods Union Square",
   "type": "supermercato con tavoli",
   "category": "snack",
   "order": "Banco caldo a peso, frutta, acqua. Al piano di sopra tavoli e bagni.",
   "price": "$30–60 in 4",
   "pos": [
    40.73441,
    -73.99033
   ],
   "hours": {
    "0": [
     [
      "07:00",
      "22:00"
     ]
    ],
    "1": [
     [
      "07:00",
      "22:00"
     ]
    ],
    "2": [
     [
      "07:00",
      "22:00"
     ]
    ],
    "3": [
     [
      "07:00",
      "22:00"
     ]
    ],
    "4": [
     [
      "07:00",
      "22:00"
     ]
    ],
    "5": [
     [
      "07:00",
      "22:00"
     ]
    ],
    "6": [
     [
      "07:00",
      "22:00"
     ]
    ]
   },
   "near": [
    "union-sq"
   ],
   "note": "Nello stesso palazzo del Metronome, lato sud della 14ª. Orari da verificare.",
   "rating": {
    "stars": 4.2,
    "count": 5405,
    "source": "Google"
   },
   "buzz": "Tavoli al piano di sopra quasi sempre liberi; banco caldo buono ma caro a peso, casse rapide.",
   "img": {
    "src": "img/food-tue-f-wholefoods.webp",
    "credit": "Aspersions at English Wikipedia, Public domain, via Wikimedia Commons"
   }
  },
  {
   "id": "tue-f-mercatino",
   "name": "Bancarelle del mercatino di Natale",
   "type": "street food natalizio",
   "category": "snack",
   "order": "Ciambelle calde (Fan-Fan Donuts), cioccolata, qualcosa di salato da dividere camminando.",
   "price": "$30–50 in 4",
   "pos": [
    40.7356,
    -73.99104
   ],
   "hours": {
    "0": [
     [
      "11:00",
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
      "21:00"
     ]
    ],
    "5": [
     [
      "11:00",
      "21:00"
     ]
    ],
    "6": [
     [
      "10:00",
      "21:00"
     ]
    ]
   },
   "near": [
    "union-sq"
   ],
   "note": "Si mangia in piedi. L'elenco dei banchi di cibo cambia.",
   "rating": {
    "stars": 4.5,
    "count": 3527,
    "source": "Google"
   },
   "buzz": "Atmosfera natalizia piacevole e cioccolata calda lodata; corridoi stretti e affollati, cibo e regali con prezzi da festa.",
   "img": {
    "src": "img/food-tue-f-mercatino.webp",
    "credit": "Mack Male from Edmonton, AB, Canada, CC BY-SA 2.0, via Wikimedia Commons"
   }
  },
  {
   "id": "tue-f-butterbeer",
   "name": "Bar della burrobirra (Harry Potter New York)",
   "type": "bar a tema",
   "category": "snack",
   "order": "Una burrobirra alla spina o in gelato. Una ogni due basta, è dolcissima.",
   "price": "$20–40 in 4",
   "pos": [
    40.74029,
    -73.98958
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
      "10:00",
      "20:00"
     ]
    ],
    "2": [
     [
      "10:00",
      "20:00"
     ]
    ],
    "3": [
     [
      "10:00",
      "20:00"
     ]
    ],
    "4": [
     [
      "10:00",
      "20:00"
     ]
    ],
    "5": [
     [
      "10:00",
      "21:00"
     ]
    ],
    "6": [
     [
      "10:00",
      "21:00"
     ]
    ]
   },
   "near": [
    "union-sq"
   ],
   "note": "Dentro il negozio, al piano terra. Orari e prezzi da verificare.",
   "rating": {
    "stars": 4.7,
    "count": 9334,
    "source": "Google"
   },
   "buzz": "Negozio immersivo che entusiasma i fan; burrobirra divertente ma cara e molto dolce, folla e code nei weekend."
  }
 ],
 "missions": [
  {
   "id": "tue-valigia",
   "stopId": "tue-checkout",
   "type": "bet",
   "title": "La valigia più pesante",
   "read": "Ultimo giorno! Prima di consegnare le valigie alla reception, Vinnie scommette che indovinate quale pesa di più senza sollevarle. Ognuno indica una valigia, poi il genitore le alza una per una. Se almeno uno di voi due ha indovinato, il pezzo è vostro. Se no, me lo tengo e lo metto nella valigia più leggera.",
   "roles": [
    "Indica la valigia più pesante",
    "Indica un'altra valigia, o la stessa"
   ],
   "vinnieBet": "Sbagliate tutti e due",
   "parentHint": "Basta sollevarle un attimo. Se avete una bilancia da valigia, pesatele: serve anche per il volo."
  },
  {
   "id": "tue-go-fermate",
   "stopId": "tue-go-soho",
   "type": "bet",
   "title": "I nomi delle fermate",
   "read": "Vinnie qui. Oggi la sfida è con la memoria. Durante il viaggio leggete ad alta voce il nome di ogni fermata. Quando scendete a Spring St, dovete ripetere tutte le fermate in ordine, a turno, senza guardare. Vinnie scommette che ne dimenticate almeno una.",
   "roles": [
    "Legge i nomi durante il viaggio",
    "Ripete per primo tutte le fermate a Spring St"
   ],
   "vinnieBet": "Ne dimenticate almeno una",
   "parentHint": "Con la E: 34 St–Penn Station, 23 St, 14 St, W 4 St–Washington Sq, Spring St. Se prendete la C, sono le stesse."
  },
  {
   "id": "tue-soho",
   "stopId": "soho",
   "type": "describe",
   "title": "Gli occhi nel marciapiede",
   "read": "Ehi, squadra. Ultimo giorno e io ho ancora la Chiave, ma un pezzo l'ho perso qui. Sta sotto i vostri piedi, in un marciapiede che ha gli occhi. Uno di voi guarda la foto per cinque secondi e la racconta, senza dire il nome della cosa. L'altro la trova. Quando l'avete trovata, ci mettete il piede sopra insieme. Scommetto un croissant che passate oltre senza vederla.",
   "roles": [
    "Guarda la foto 5 secondi e la descrive senza dire «vetro»",
    "Non vede la foto: ascolta e cerca sul marciapiede"
   ],
   "parentHint": "Sono le lenti di vetro nei marciapiedi di ghisa (vault lights): dischetti trasparenti o viola incastrati in piastre di ferro davanti alle porte. All'angolo Greene e Canal, lungo Greene Street e davanti al 552-554 di Broadway, tra Prince e Spring."
  },
  {
   "id": "tue-wsq",
   "stopId": "tue-go-union",
   "type": "then-now",
   "title": "L'arco del bisnonno",
   "read": "Questa foto ha più di cento anni. Stesso arco, stesso posto. Ma qualcosa non torna, e io lo so, perché il mio bis-bis-nonno piccione stava lassù in cima. Trovate tre differenze tra la foto e quello che vedete. Le dovete trovare insieme: una la trova uno, una l'altro, la terza la decidete in due. Scommetto che vi fermate a due.",
   "roles": [
    "Tiene la foto e controlla la parte alta dell'arco",
    "Guarda la parte bassa e la strada intorno"
   ],
   "vinnieBet": "Ne trovate solo due.",
   "parentHint": "Nella foto del 1900 mancano le due statue di Washington sui piloni del lato nord (messe nel 1916 e nel 1918). Sotto e intorno all'arco passavano carrozze e poi autobus (le auto attraversavano il parco fino al 1959, gli autobus giravano intorno all'arco fino ai primi anni '60). Altre differenze facili: lampioni, vestiti e cappelli, alberi più piccoli, nessun grattacielo dietro.",
   "img": {
    "src": "img/tue-wsq.webp",
    "credit": "Scan by NYPL, Public domain, via Wikimedia Commons"
   }
  },
  {
   "id": "tue-flatiron",
   "stopId": "union-sq",
   "type": "photo-spot",
   "title": "Dov'era il fotografo del Daily Bugle",
   "read": "Peter Parker faceva le foto per il giornale in questo palazzo. Io ne ho una, scattata da qui vicino, e la terrò per sempre se non trovate il punto esatto da cui è stata presa. Guardate la foto insieme, poi muovetevi solo quando siete d'accordo tutti e due. Quando pensate di esserci, dite insieme: «Clic».",
   "roles": [
    "Controlla che la punta del palazzo sia al centro, come nella foto",
    "Controlla le strade ai lati e quello che c'è in primo piano"
   ],
   "parentHint": "La foto è presa guardando a sud dalla piazzetta pedonale sulla 23ª tra la Quinta e Broadway (Flatiron Plaza, quella con tavolini e ombrelloni), a nord della punta. Broadway a destra, la Quinta a sinistra.",
   "img": {
    "src": "img/tue-flatiron.webp",
    "credit": "Tdorante10, CC BY-SA 4.0, via Wikimedia Commons"
   }
  },
  {
   "id": "tue-fermate-ritorno",
   "stopId": "tue-go-hotel",
   "type": "bet",
   "title": "La fermata dell'hotel",
   "read": "Ultimo giro in metro. Vinnie scommette che non riconoscete la vostra fermata senza guardare il cartello. Uno chiude gli occhi e ascolta la voce che annuncia le fermate, l'altro guarda e tiene il segreto. Quando chi ascolta sente il nome giusto, dice: è questa! Se sbaglia, il pezzo è mio.",
   "roles": [
    "Ascolta l'annuncio a occhi chiusi",
    "Guarda i cartelli e controlla"
   ],
   "vinnieBet": "Non riconoscete la fermata",
   "parentHint": "Si scende a Times Sq–42 St. L'annuncio dice 'Times Square, Forty-Second Street'. Tenete la mano del bambino a occhi chiusi."
  },
  {
   "id": "tue-ultimo",
   "stopId": "tue-libero",
   "type": "bet",
   "title": "L'ultimo ricordo",
   "read": "Un'ora libera, l'ultima. Vinnie vuole un regalo: ognuno di voi deve trovare un ricordo di New York che costi meno di 5 dollari, o anche gratis, come una cartolina o una foglia di Bryant Park. Avete mezz'ora. Se tutti e due me lo mostrate prima di tornare in hotel, il pezzo è vostro.",
   "roles": [
    "Cerca un ricordo sotto i 5 dollari",
    "Cerca un ricordo gratis"
   ],
   "vinnieBet": "Non lo trovate in tempo",
   "parentHint": "Una cartolina, un biglietto della metro, una foglia, un cioccolatino. Va bene anche una foto speciale."
  },
  {
   "id": "tue-teatro",
   "stopId": "hotel",
   "type": "describe",
   "title": "L'insegna del teatro",
   "read": "Accanto all'hotel c'è un teatro con l'insegna luminosa. Uno di voi legge ad alta voce il nome dello spettacolo, l'altro cerca nella locandina un personaggio o un disegno e lo descrive. Poi indovinate insieme: di cosa parla lo spettacolo? Se il genitore dice che ci siete andati vicino, il pezzo è vostro.",
   "roles": [
    "Legge il nome dello spettacolo",
    "Descrive la locandina"
   ],
   "parentHint": "Il Nederlander Theatre è accanto all'hotel sulla 41ª. Cercate la trama sul telefono per controllare."
  },
  {
   "id": "tue-finale",
   "stopId": "partenza",
   "type": "bet",
   "title": "Ciao, New York",
   "read": "Va bene, squadra. Ci siamo. Io ho le ali, voi un taxi. Ecco l'ultima: dopo il tunnel o il ponte, girate la testa verso il lunotto. Scommetto che non riuscite a vedere l'Empire State Building acceso prima che spariscano i grattacieli. Se lo vedete, lo salutate insieme, ad alta voce: «Ciao, New York». E allora, forse, vi dico dove ho messo la Chiave.",
   "roles": [
    "Guarda dal lunotto a sinistra",
    "Guarda dal lunotto a destra"
   ],
   "vinnieBet": "Lo skyline sparisce prima che lo salutiate.",
   "parentHint": "Uscendo dal tunnel di Midtown sulla Long Island Expressway, o scendendo dal ponte di Queensboro, lo skyline resta dietro per qualche minuto. L'Empire State è il più alto con l'antenna, cima illuminata a colori. Alle 17:30 è già buio. Dopo la missione aprite la schermata di Vinnie per il finale."
  },
  {
   "id": "tue-bet-cisterna",
   "stopId": null,
   "type": "bet",
   "title": "Le botti sui tetti",
   "read": "Scommessa di Vinnie. Sui tetti di New York ci sono botti di legno giganti, con il cappello a punta. Io ci dormo dentro. Scommetto che non ne trovate una prima del prossimo incrocio. Uno guarda i tetti a sinistra, l'altro a destra. Vale solo se la indicate insieme.",
   "roles": [
    "Guarda i tetti a sinistra",
    "Guarda i tetti a destra"
   ],
   "vinnieBet": "Nessuna cisterna prima del prossimo incrocio.",
   "parentHint": "Sono le cisterne d'acqua di legno, sui tetti dei palazzi di 6–10 piani: sembrano botti con un tetto a cono. Tra SoHo e il Village se ne vedono molte, guardando in alto verso gli angoli dei tetti."
  },
  {
   "id": "tue-bet-mosaico",
   "stopId": null,
   "type": "bet",
   "title": "Il nome nel muro",
   "read": "Scommessa di Vinnie, versione sottoterra. Nelle stazioni della metro il nome è scritto con tante piastrelline sul muro. Scommetto che non trovate il nome di questa stazione fatto a mosaico prima che arrivi il treno. Uno legge le lettere, l'altro conta quante piastrelline colorate ci sono intorno. Me lo dite insieme.",
   "roles": [
    "Cerca il nome a mosaico e lo legge",
    "Conta le piastrelle colorate della cornice"
   ],
   "vinnieBet": "Arriva il treno prima del mosaico.",
   "parentHint": "Quasi tutte le stazioni vecchie hanno il nome a mosaico sul muro lungo il binario, a mezza altezza. A Canal Street, Spring Street e 14 St–Union Square ci sono."
  },
  {
   "id": "tue-bet-orologio",
   "stopId": null,
   "type": "bet",
   "title": "L'orologio sul marciapiede",
   "read": "Ultima scommessa prima del ferro da stiro. Da qualche parte qui intorno c'è un orologio alto come un lampione, piantato sul marciapiede da più di cento anni. Di ghisa, come i palazzi di stamattina. Scommetto che arrivate al Flatiron senza vederlo. Quando lo trovate, leggete l'ora insieme ad alta voce.",
   "roles": [
    "Guarda il marciapiede davanti",
    "Guarda dall'altra parte della strada"
   ],
   "vinnieBet": "Non lo trovate prima del Flatiron.",
   "parentHint": "È sul marciapiede della Quinta Strada davanti al numero 200, tra la 23ª e la 24ª, di fronte alla punta del Flatiron: orologio verde-nero con due quadranti, del 1909.",
   "img": {
    "src": "img/tue-bet-orologio.webp",
    "credit": "Jim.henderson, CC0, via Wikimedia Commons"
   }
  }
 ]
};
