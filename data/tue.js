export default {
 "id": "tue",
 "weekday": 2,
 "title": "SoHo, Village o Chinatown, Union Square",
 "vinnieMorning": "Ultimo giorno, squadra. Oggi si cammina su strade di ferro e si passa sotto un arco di marmo, e stasera io prendo il volo con la Chiave. A meno che non mi fermiate prima del taxi.",
 "stops": [
  {
   "id": "soho",
   "name": "SoHo e Greene Street",
   "kind": "key",
   "start": "09:30",
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
   "id": "washington-sq",
   "name": "Washington Square Park",
   "kind": "choice",
   "choiceGroup": "tue-midday",
   "start": "12:00",
   "durationMin": 40,
   "cost": "Gratis",
   "pos": [
    40.73123,
    -73.9971
   ],
   "radiusM": 200,
   "hook": "Un arco di marmo dove una volta passavano gli autobus, e tavoli di pietra dove si gioca a scacchi contro il tempo.",
   "story": "Nel 1889 per i cento anni dell'insediamento di George Washington costruirono un arco di legno e gesso, solo per la festa. Piacque così tanto che lo rifecero in marmo, poco più a sud, dove lo vedete oggi. Dentro c'è una scala a chiocciola e una stanza segreta alta cinque metri, chiusa al pubblico. Fino alla fine degli anni '50 le auto attraversavano il parco, e gli autobus della Quinta Strada facevano inversione intorno all'arco. E sotto il prato, prima del parco, c'era un cimitero: circa ventimila persone sono ancora lì sotto.",
   "look": [
    "Le due statue di Washington sul lato nord dell'arco: guardandolo dalla Quinta Strada, a sinistra in divisa da generale (in guerra), a destra da presidente (in pace).",
    "I tavoli degli scacchi nell'angolo sud-ovest: giocatori con l'orologio, partite da cinque minuti, si sfidano anche i passanti.",
    "L'olmo nell'angolo nord-ovest, verso Washington Square West: ha circa 300 anni, è più vecchio degli Stati Uniti."
   ],
   "tips": [
    {
     "text": "Arrivate da Washington Square South (dalla strada di SoHo): avete l'arco davanti con la fontana in mezzo, è la vista migliore.",
     "when": "arrive"
    },
    {
     "text": "Agli scacchi alcuni giocano per soldi: guardare è gratis, giocare costa qualche dollaro. Chiedete prima.",
     "when": "always"
    },
    {
     "text": "In ritardo: arco, fontana e via verso il pranzo. Il palazzo di Friends lo saltate.",
     "when": "late"
    },
    {
     "text": "Se piove: il parco non ha riparo. Andate dritti al pranzo e passate davanti all'arco solo per la missione.",
     "when": "rain"
    },
    {
     "text": "Panchine tutto intorno alla fontana: è il punto dove sedersi e guardare i musicisti di strada.",
     "when": "tired"
    }
   ],
   "missionId": "tue-wsq",
   "nearby": [
    {
     "pos": [
      40.73236,
      -74.0053
     ],
     "text": "Il palazzo di Friends, 90 Bedford Street all'angolo con Grove Street: è la facciata che si vede nella serie. 10 minuti a ovest.",
     "kind": "film"
    },
    {
     "pos": [
      40.73197,
      -73.99861
     ],
     "text": "L'olmo dell'impiccato: la leggenda dice impiccagioni, la storia dice di no. È comunque l'albero più vecchio di Manhattan.",
     "kind": "curio"
    },
    {
     "pos": [
      40.73032,
      -74.00036
     ],
     "text": "Caffe Reggio, 119 MacDougal: dicono di aver servito il primo cappuccino d'America, nel 1927. La macchina del caffè originale è ancora dentro.",
     "kind": "curio"
    },
    {
     "pos": [
      40.73082,
      -73.99745
     ],
     "text": "La fontana: nel restauro del 2007-2009 l'hanno spostata per metterla in fila con l'arco e la Quinta Strada.",
     "kind": "view"
    },
    {
     "pos": [
      40.73057,
      -74.00209
     ],
     "text": "Joe's Pizza, 7 Carmine Street: in Spider-Man 2 Peter Parker fa le consegne per Joe's e viene licenziato perché arriva sempre tardi.",
     "kind": "film"
    }
   ],
   "cover": {
    "img": "img/washington-sq.webp",
    "credit": "lurkingherern, CC BY 4.0, via Wikimedia Commons"
   },
   "bagni": {
    "where": "Edificio a sud del parco, vicino a Thompson Street. Aperto di giorno (circa 8–16 o fino al tramonto, controllate in inverno).",
    "cost": "Gratis",
    "clean": "Non verificato: ristrutturato nel 2014, ma in passato aveva problemi di pulizia. Meglio un negozio o un caffè se potete."
   }
  },
  {
   "id": "chinatown",
   "name": "Chinatown: Mott, Doyers e Columbus Park",
   "kind": "choice",
   "choiceGroup": "tue-midday",
   "start": "12:00",
   "durationMin": 60,
   "cost": "Gratis. Dumpling $40–70 in 4",
   "pos": [
    40.71435,
    -73.9981
   ],
   "radiusM": 250,
   "hook": "Una via che fa una curva a gomito, un ristorante del 1920 e nonni che giocano a scacchi cinesi sotto gli alberi.",
   "story": "Doyers Street è lunga sessanta metri e piega a metà. Cento anni fa la chiamavano «l'angolo insanguinato»: si diceva che le bande si nascondessero dietro la curva. Gli storici oggi pensano che fosse esagerato, ma il nome è rimasto. Al numero 13 c'è Nom Wah, aperto nel 1920 come pasticceria e diventato il primo posto di dim sum della città. Columbus Park, due isolati più in là, era il quartiere più povero di New York, Mulberry Bend: lo fotografò Jacob Riis e la città lo rase al suolo per farne un parco.",
   "look": [
    "La curva di Doyers Street: mettetevi proprio nel gomito e guardate, non si vede né l'inizio né la fine della via.",
    "A Columbus Park, i tavoli dello xiangqi: pedine rotonde di legno con ideogrammi, al posto di re e regine.",
    "Wing On Wo & Co. al 26 di Mott Street: il negozio più vecchio di Chinatown, porcellane in vetrina dal 1890."
   ],
   "tips": [
    {
     "text": "Molti posti accettano solo contanti: tenete $40–60 in banconote piccole.",
     "when": "always"
    },
    {
     "text": "Da Nom Wah date il nome all'ingresso e fate il giro di Doyers e Pell mentre aspettate.",
     "when": "arrive"
    },
    {
     "text": "In ritardo: solo Doyers Street, un piatto di dumpling e metro Q da Canal Street.",
     "when": "late"
    },
    {
     "text": "Se piove: Nom Wah è al coperto e si sta stretti ma al caldo. Columbus Park lo saltate.",
     "when": "rain"
    },
    {
     "text": "Columbus Park ha panchine e un bagno pubblico nell'edificio del parco.",
     "when": "tired"
    }
   ],
   "missionId": "tue-china",
   "nearby": [
    {
     "pos": [
      40.71446,
      -73.9982
     ],
     "text": "Nom Wah Tea Parlor, 13 Doyers: dal 1920. Ordinate gli involtini all'uovo originali.",
     "kind": "curio"
    },
    {
     "pos": [
      40.71341,
      -73.99803
     ],
     "text": "Kimlau Square, in fondo a Doyers: l'arco cinese dedicato ai soldati sino-americani.",
     "kind": "view"
    },
    {
     "pos": [
      40.71531,
      -73.9982
     ],
     "text": "Chinatown Ice Cream Factory, 65 Bayard: gelato al sesamo nero, lychee, tè verde. Anche con il freddo c'è la fila.",
     "kind": "curio"
    },
    {
     "pos": [
      40.71486,
      -74.00006
     ],
     "text": "Columbus Park: la mattina tai chi, il pomeriggio carte e scacchi cinesi.",
     "kind": "curio"
    },
    {
     "pos": [
      40.71459,
      -73.99855
     ],
     "text": "Wing On Wo & Co., 26 Mott Street: il negozio più vecchio di Chinatown.",
     "kind": "curio"
    }
   ],
   "cover": {
    "img": "img/chinatown.webp",
    "credit": "Beyond My Ken, CC BY-SA 4.0, via Wikimedia Commons"
   },
   "bagni": {
    "where": "Columbus Park (Bayard St tra Baxter e Mulberry): ci sono due bagni, nel padiglione e vicino al parco giochi. Se chiusi, chiedete nei ristoranti dove mangiate.",
    "cost": "Gratis",
    "clean": "Un'ispezione del Parks Department ha dato \"accettabile\" a una stanza (una sola verifica)"
   }
  },
  {
   "id": "pranzo",
   "name": "Pranzo nel Village",
   "kind": "key",
   "start": "13:30",
   "durationMin": 50,
   "cost": "$25–60 in 4",
   "pos": [
    40.73057,
    -74.00209
   ],
   "radiusM": 250,
   "hook": "Una fetta piegata in due all'angolo dove Spider-Man consegnava pizze.",
   "story": "Joe Pozzuoli era di Napoli e nel 1975 aprì una pizzeria all'angolo tra Bleecker e Carmine Street. La fetta di Joe è il modello della pizza al taglio newyorkese: sottile, grande, da piegare a metà e mangiare in piedi. Nel film Spider-Man 2 Peter Parker lavora per Joe's e lo licenziano perché arriva sempre in ritardo. Il locale si è spostato di pochi metri, al 7 di Carmine Street, ma è sempre della famiglia.",
   "look": [
    "Le foto sui muri di Joe's: attori, sindaci, sportivi, tutti con la fetta in mano.",
    "La chiesa di Our Lady of Pompeii, di fronte: è la chiesa degli emigrati italiani del quartiere.",
    "Father Demo Square, il triangolo con la fontana davanti alla chiesa: lì si mangia la fetta in piedi."
   ],
   "tips": [
    {
     "text": "Se avete scelto Chinatown, mangiate lì: dumpling da Nom Wah o Joe's Shanghai, poi metro Q da Canal Street a Union Square.",
     "when": "always"
    },
    {
     "text": "Da Joe's non ci sono quasi tavoli: si ordina al banco e si mangia in piedi o sulle panchine di Father Demo Square.",
     "when": "arrive"
    },
    {
     "text": "In ritardo: fetta da Joe's e via, il resto lo saltate.",
     "when": "late"
    },
    {
     "text": "Se piove o volete sedervi: Caffe Reggio o Mamoun's su MacDougal Street, al chiuso.",
     "when": "rain"
    },
    {
     "text": "Per sedersi al caldo con calma: Caffe Reggio, cioccolata calda e cannolo.",
     "when": "tired"
    }
   ],
   "nearby": [
    {
     "pos": [
      40.7305,
      -74.00282
     ],
     "text": "Our Lady of Pompeii, 25 Carmine Street: la parrocchia degli italiani del Village.",
     "kind": "curio"
    },
    {
     "pos": [
      40.73589,
      -74.005
     ],
     "text": "Magnolia Bakery, 401 Bleecker: la pasticceria resa famosa da Sex and the City. Il banana pudding è la cosa da prendere.",
     "kind": "film"
    },
    {
     "pos": [
      40.73236,
      -74.0053
     ],
     "text": "Il palazzo di Friends, 90 Bedford Street: 5 minuti da Joe's.",
     "kind": "film"
    }
   ],
   "bagni": {
    "where": "Da Joe's non risultano bagni per i clienti. Per un bagno: Caffe Reggio o Mamoun's su MacDougal Street, consumando.",
    "cost": "Gratis se consumate",
    "clean": "Non verificato"
   }
  },
  {
   "id": "union-sq",
   "name": "Union Square, Strand e Flatiron",
   "kind": "key",
   "start": "14:30",
   "durationMin": 60,
   "cost": "Gratis. Mercatino e libri solo se comprate",
   "pos": [
    40.73607,
    -73.99019
   ],
   "radiusM": 300,
   "hook": "Un mercatino di Natale sotto un orologio che conta all'indietro, e alla fine il palazzo a forma di ferro da stiro.",
   "story": "Union Square non c'entra con la guerra civile: si chiama così perché qui si univano le due strade principali dell'isola, Broadway e la vecchia Bowery. La statua di Washington a cavallo, del 1856, è la prima statua equestre in bronzo fatta in America. Sul palazzo di fronte c'è il Metronome: un muro con un buco che sbuffa vapore e un orologio enorme che oggi conta il tempo che resta per fermare il riscaldamento del pianeta. In fondo a Broadway c'è il Flatiron, del 1902: nella punta è largo meno di due metri.",
   "look": [
    "Il Metronome, sul lato sud della 14ª: il buco dorato al centro del muro, la grande mano di bronzo e i numeri rossi che scorrono.",
    "La statua di Washington a cavallo, all'estremità sud della piazza: la sua mano è la stessa che vedete ingrandita sul Metronome.",
    "La punta del Flatiron dalla piazzetta pedonale sulla 23ª: nei film di Spider-Man è la sede del Daily Bugle, il giornale dove lavora Peter Parker."
   ],
   "tips": [
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
     "text": "Alle 16 si riparte: dal Flatiron la metro R/W della 23ª porta a Times Square in 10 minuti, poi 5 a piedi all'hotel.",
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
   "id": "hotel",
   "name": "Hotel: bagagli",
   "kind": "key",
   "start": "16:15",
   "durationMin": 60,
   "cost": "Gratis",
   "pos": [
    40.75561,
    -73.98861
   ],
   "radiusM": 120,
   "hook": "Un'ora per ritirare le valigie, cambiare i bambini e fare l'ultimo bagno con calma.",
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
     "text": "Chiedete alla reception un taxi per le 17:15: di solito un taxi giallo passa sull'Ottava Avenue in pochi minuti.",
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
   "kind": "key",
   "start": "17:15",
   "durationMin": 90,
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
   }
  }
 ],
 "walks": [
  {
   "from": "hotel",
   "to": "soho",
   "minutes": 25,
   "how": "Metro C o E da 42 St–Port Authority (3 minuti dall'hotel, ingresso sull'Ottava) fino a Spring St. Cinque fermate.",
   "mapsMode": "transit",
   "tips": [
    {
     "pos": [
      40.75731,
      -73.98973
     ],
     "text": "Prendete il treno con la scritta Downtown. C ed E vanno bene tutti e due."
    },
    {
     "text": "Toccate il lettore OMNY con la carta contactless o il telefono. Meglio una carta per ogni adulto, così il tetto settimanale vale per ciascuno. I bambini sotto i 112 cm passano gratis."
    }
   ]
  },
  {
   "from": "soho",
   "to": "washington-sq",
   "minutes": 15,
   "how": "A piedi: su per Greene Street o Wooster, attraversate Houston Street e proseguite su LaGuardia Place fino al parco.",
   "mapsMode": "walking",
   "tips": [
    {
     "text": "Houston Street si pronuncia «Hàuston», non come la città del Texas."
    },
    {
     "text": "A nord di Houston cominciano i palazzi della New York University: le bandiere viola sono loro."
    }
   ]
  },
  {
   "from": "soho",
   "to": "chinatown",
   "minutes": 20,
   "how": "A piedi: Prince Street verso est fino a Mulberry, poi giù per Mulberry attraverso Little Italy fino a Bayard Street, a sinistra su Mott e a destra su Pell fino a Doyers.",
   "mapsMode": "walking",
   "tips": [
    {
     "pos": [
      40.72308,
      -73.99454
     ],
     "text": "Prince Street Pizza, 27 Prince: la fetta quadrata con i pepperoni a coppetta. Una in quattro per merenda."
    },
    {
     "text": "Su Mulberry, tra Broome e Canal, le insegne passano dall'italiano al cinese nel giro di un isolato."
    }
   ]
  },
  {
   "from": "washington-sq",
   "to": "pranzo",
   "minutes": 8,
   "how": "A piedi: dall'angolo sud-ovest del parco su West 4th Street, attraversate la Sesta Avenue e scendete su Carmine Street.",
   "mapsMode": "walking",
   "tips": [
    {
     "pos": [
      40.73236,
      -74.0053
     ],
     "text": "Se avete 15 minuti in più: deviazione al palazzo di Friends, 90 Bedford Street, e poi Joe's Pizza."
    },
    {
     "pos": [
      40.73164,
      -74.00099
     ],
     "text": "All'angolo tra la Sesta Avenue e West 4th Street ci sono i campi da basket chiusi dalla rete, «The Cage»: si gioca anche d'inverno."
    }
   ]
  },
  {
   "from": "pranzo",
   "to": "union-sq",
   "minutes": 22,
   "how": "A piedi: Bleecker Street verso est, poi su per la Quinta Strada o University Place fino alla 12ª e a destra fino a Broadway (Strand).",
   "mapsMode": "walking",
   "tips": [
    {
     "text": "Se le gambe sono finite: metro F o M da West 4th St fino a 14 St, poi due isolati a est. Ma a piedi è quasi uguale."
    }
   ]
  },
  {
   "from": "chinatown",
   "to": "union-sq",
   "minutes": 20,
   "how": "Metro Q da Canal Street (ingressi su Canal Street tra Broadway e Centre Street) fino a 14 St–Union Square: una sola fermata, è un espresso.",
   "mapsMode": "transit",
   "tips": [
    {
     "pos": [
      40.71809,
      -73.99989
     ],
     "text": "A Canal Street prendete il treno Uptown. Va bene anche il N, sulla stessa banchina. R e W partono da un'altra banchina e fanno più fermate."
    },
    {
     "text": "Uscite verso Union Square South: siete già davanti alla statua di Washington."
    }
   ]
  },
  {
   "from": "union-sq",
   "to": "hotel",
   "minutes": 25,
   "how": "Metro R o W da 23 St (angolo Broadway, accanto al Flatiron) fino a Times Sq–42 St, poi 5 minuti a piedi: uscita sulla 41ª e a ovest verso l'Ottava.",
   "mapsMode": "transit",
   "tips": [
    {
     "pos": [
      40.7413,
      -73.98934
     ],
     "text": "Ingresso Uptown sul lato ovest di Broadway. Tre fermate."
    },
    {
     "text": "A Times Sq seguite le uscite per la 41ª Strada: siete a un isolato dall'hotel."
    }
   ]
  },
  {
   "from": "hotel",
   "to": "partenza",
   "minutes": 75,
   "how": "Taxi giallo dall'hotel: tariffa fissa per JFK. Il percorso lo sceglie il tassista (tunnel di Midtown o ponte di Queensboro).",
   "mapsMode": "transit",
   "tips": [
    {
     "text": "In un taxi normale stanno 4 passeggeri. Se le valigie non entrano, chiedete alla reception un minivan o un'auto più grande."
    },
    {
     "text": "Dopo il tunnel o il ponte, girate i bambini verso il lunotto: è il momento della missione di Vinnie."
    }
   ]
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
    "soho",
    "chinatown"
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
    "pranzo",
    "washington-sq"
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
    "pranzo",
    "washington-sq"
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
    "pranzo",
    "washington-sq"
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
   "id": "tue-f-magnolia",
   "name": "Magnolia Bakery Bleecker",
   "type": "pasticceria americana",
   "category": "snack",
   "order": "Banana pudding in vaschetta, un cupcake glassato a testa.",
   "price": "$20–30 in 4",
   "pos": [
    40.73589,
    -74.005
   ],
   "hours": {
    "0": [
     [
      "09:00",
      "22:00"
     ]
    ],
    "1": [
     [
      "09:00",
      "22:00"
     ]
    ],
    "2": [
     [
      "09:00",
      "22:00"
     ]
    ],
    "3": [
     [
      "09:00",
      "22:00"
     ]
    ],
    "4": [
     [
      "09:00",
      "22:00"
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
    "pranzo"
   ],
   "note": "Da asporto, nessun tavolo. Orari da verificare.",
   "rating": {
    "stars": 4.3,
    "count": 5143,
    "source": "Google"
   },
   "buzz": "Banana pudding lodato da quasi tutti, cupcake per molti troppo dolci; coda nel weekend, niente posti.",
   "img": {
    "src": "img/food-tue-f-magnolia.webp",
    "credit": "Ajay Suresh, CC BY 4.0, via Wikimedia Commons"
   }
  },
  {
   "id": "tue-f-murrays",
   "name": "Murray's Cheese",
   "type": "formaggeria",
   "category": "pranzo",
   "order": "Grilled cheese al banco o un panino da portar via; assaggi di cheddar americano.",
   "price": "$40–60 in 4",
   "pos": [
    40.731,
    -74.00303
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
      "20:00"
     ]
    ],
    "2": [
     [
      "08:00",
      "20:00"
     ]
    ],
    "3": [
     [
      "08:00",
      "20:00"
     ]
    ],
    "4": [
     [
      "08:00",
      "20:00"
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
    "pranzo"
   ],
   "note": "Negozio con banco panini, pochi posti. Orari da verificare.",
   "rating": {
    "stars": 4.6,
    "count": 1473,
    "source": "Google"
   },
   "buzz": "Assortimento di formaggi enorme e assaggi offerti volentieri; grilled cheese del banco molto lodato, prezzi da negozio gourmet.",
   "img": {
    "src": "img/food-tue-f-murrays.webp",
    "credit": "Ajay Suresh, CC BY 4.0, via Wikimedia Commons"
   }
  },
  {
   "id": "tue-f-nomwah",
   "name": "Nom Wah Tea Parlor",
   "type": "dim sum",
   "category": "pranzo",
   "order": "Involtini all'uovo originali, ravioli di gamberi, bao al maiale, rice roll. Si ordina dal foglietto.",
   "price": "$50–80 in 4",
   "pos": [
    40.71446,
    -73.9982
   ],
   "hours": {
    "0": [
     [
      "10:30",
      "21:00"
     ]
    ],
    "1": [
     [
      "10:30",
      "21:00"
     ]
    ],
    "2": [
     [
      "10:30",
      "21:00"
     ]
    ],
    "3": [
     [
      "10:30",
      "21:00"
     ]
    ],
    "4": [
     [
      "10:30",
      "21:00"
     ]
    ],
    "5": [
     [
      "10:30",
      "22:00"
     ]
    ],
    "6": [
     [
      "10:30",
      "22:00"
     ]
    ]
   },
   "near": [
    "chinatown"
   ],
   "note": "Dal 1920. Date il nome e aspettate, di solito 15–30 minuti a pranzo.",
   "rating": {
    "stars": 4.2,
    "count": 5391,
    "source": "Google"
   },
   "buzz": "Atmosfera storica e prezzi giusti, involtini enormi; dim sum per alcuni nella media, coda frequente a pranzo.",
   "img": {
    "src": "img/food-tue-f-nomwah.webp",
    "credit": "Bagelpigeon, CC0, via Wikimedia Commons"
   }
  },
  {
   "id": "tue-f-joesshanghai",
   "name": "Joe's Shanghai",
   "type": "ravioli in brodo",
   "category": "pranzo",
   "order": "Soup dumpling al maiale e granchio: si mordono piano, dentro c'è il brodo bollente. Riso fritto per i bambini.",
   "price": "$60–90 in 4",
   "pos": [
    40.71568,
    -73.99666
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
    "chinatown"
   ],
   "note": "Tavoli grandi condivisi. Insegnate ai bambini: cucchiaio sotto, piccolo morso, si beve il brodo, poi si mangia.",
   "rating": {
    "stars": 4.2,
    "count": 6316,
    "source": "Google"
   },
   "buzz": "Soup dumpling lodati, servizio rapido anche quando è pieno; tavoli condivisi, solo contanti, altri piatti meno convincenti."
  },
  {
   "id": "tue-f-tasty",
   "name": "Tasty Hand-Pulled Noodles",
   "type": "noodle tirati a mano",
   "category": "pranzo",
   "order": "Noodle tirati a mano in brodo di manzo, ravioli fritti al maiale. Guardate il cuoco che tira la pasta.",
   "price": "$30–45 in 4",
   "pos": [
    40.71419,
    -73.99787
   ],
   "hours": {
    "0": [
     [
      "10:30",
      "22:00"
     ]
    ],
    "1": [
     [
      "10:30",
      "22:00"
     ]
    ],
    "2": [
     [
      "10:30",
      "22:00"
     ]
    ],
    "3": [
     [
      "10:30",
      "22:00"
     ]
    ],
    "4": [
     [
      "10:30",
      "22:00"
     ]
    ],
    "5": [
     [
      "10:30",
      "22:00"
     ]
    ],
    "6": [
     [
      "10:30",
      "22:00"
     ]
    ]
   },
   "near": [
    "chinatown"
   ],
   "note": "Solo contanti. Piccolo e semplice, sull'angolo di Doyers Street. Verificate che sia ancora aperto.",
   "rating": {
    "stars": 4.4,
    "count": 1319,
    "source": "Google"
   },
   "buzz": "Noodle e ravioli fritti a prezzi bassissimi, porzioni generose e servizio veloce; locale spartano, stretto e solo contanti."
  },
  {
   "id": "tue-f-xian",
   "name": "Xi'an Famous Foods",
   "type": "noodle piccanti",
   "category": "pranzo",
   "order": "Noodle larghi strappati a mano con agnello al cumino per gli adulti, noodle freddi non piccanti per i bambini.",
   "price": "$45–60 in 4",
   "pos": [
    40.71505,
    -73.99737
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
      "21:00"
     ]
    ],
    "2": [
     [
      "11:00",
      "21:00"
     ]
    ],
    "3": [
     [
      "11:00",
      "21:00"
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
      "11:00",
      "21:00"
     ]
    ]
   },
   "near": [
    "chinatown"
   ],
   "note": "Chiedete «not spicy» per i bambini: qui il piccante è vero.",
   "rating": {
    "stars": 4.5,
    "count": 2300,
    "source": "Google"
   },
   "buzz": "Noodle strappati a mano lodati, porzioni grandi per il prezzo; si ordina al chiosco, pochi posti, piccante deciso."
  },
  {
   "id": "tue-f-icecream",
   "name": "Chinatown Ice Cream Factory",
   "type": "gelateria",
   "category": "snack",
   "order": "Sesamo nero, lychee, tè verde. Se avete coraggio, il durian.",
   "price": "$25–35 in 4",
   "pos": [
    40.71531,
    -73.9982
   ],
   "hours": {
    "0": [
     [
      "11:00",
      "22:00"
     ]
    ],
    "1": [
     [
      "11:00",
      "22:00"
     ]
    ],
    "2": [
     [
      "11:00",
      "22:00"
     ]
    ],
    "3": [
     [
      "11:00",
      "22:00"
     ]
    ],
    "4": [
     [
      "11:00",
      "22:00"
     ]
    ],
    "5": [
     [
      "11:00",
      "22:00"
     ]
    ],
    "6": [
     [
      "11:00",
      "22:00"
     ]
    ]
   },
   "near": [
    "chinatown"
   ],
   "note": "Dal 1978. Si fanno assaggiare i gusti.",
   "rating": {
    "stars": 4.4,
    "count": 2293,
    "source": "Google"
   },
   "buzz": "Gusti asiatici originali molto apprezzati, assaggi concessi; coppette care per la quantità, spesso un po' di coda.",
   "img": {
    "src": "img/food-tue-f-icecream.webp",
    "credit": "Rorschach, CC BY 4.0, via Wikimedia Commons"
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
   "stopId": "washington-sq",
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
   "id": "tue-china",
   "stopId": "chinatown",
   "type": "describe",
   "title": "La porta del 1920",
   "read": "Questa strada fa una curva, e dietro la curva una volta si nascondevano i cattivi. Io no, io mi nascondo in bella vista. Uno di voi guarda questa foto per cinque secondi: è una porta di questa via. La descrive all'altro: colori, scritte, finestre, ma niente nomi. L'altro la trova e ci si mette davanti, poi la indicate insieme. Scommetto che vi perdete nella curva.",
   "roles": [
    "Guarda la foto 5 secondi e descrive colori e forme",
    "Non vede la foto: guida la squadra lungo la via"
   ],
   "parentHint": "È Nom Wah Tea Parlor, 13 Doyers Street, nel primo tratto della via venendo da Pell Street, prima della curva. Insegna e vetrine all'antica.",
   "img": {
    "src": "img/tue-china.webp",
    "credit": "Bagelpigeon, CC0, via Wikimedia Commons"
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
  }
 ]
};
