export default {
 "hotel": {
  "name": "Hampton Inn Manhattan/Times Square Central",
  "address": "220 West 41st Street, New York, NY 10036",
  "pos": [
   40.75561,
   -73.98861
  ],
  "phone": "+1 212-221-1188",
  "taxiCard": "Hampton Inn Manhattan / Times Square Central\n220 West 41st Street\n(between 7th and 8th Avenue, next to the Nederlander Theatre)\nNew York, NY 10036\nPhone: (212) 221-1188\nPlease take us here. Thank you!"
 },
 "vinnie": {
  "intro": "La Chiave della Città è un'onorificenza vera: il sindaco di New York la consegna a chi ha fatto qualcosa di grande per la città, come un grazie solenne davanti a tutti. Esiste dal 1702, è una grande chiave dorata che non apre nessuna porta, ma vuol dire «questa città è casa tua, entra ed esci quando vuoi». Ora, il guaio. Vinnie è un piccione di Brooklyn, chiacchierone e convinto di essere il più furbo di New York, e una mattina ha preso la Chiave dal davanzale della casa del sindaco. L'ha divisa in pezzi e li ha nascosti nei posti dove passerete: ogni missione è un pezzo. Se vincete voi, il pezzo torna nella Chiave. Se vince lui, se lo tiene. Siete una squadra sola: due bambini contro un piccione. Si risponde insieme, o non vale.",
  "win": "Va bene, va bene. Avete vinto voi. Ho girato tutta New York con quella Chiave sotto l'ala e voi me l'avete smontata pezzo per pezzo, in squadra, senza litigare. È vostra: la Chiave è di chi tratta questa città come casa sua, e voi l'avete fatto. Quando tornate, venite a trovarmi a Brooklyn. Vi offro mezzo bagel. Il mezzo più piccolo, però.",
  "lose": "Ah-ha! La Chiave resta a Brooklyn, nel mio nido sul ponte. Ve la siete giocata bene, lo ammetto: qualche pezzo me l'avete strappato, e non era facile. Ma un piccione di Brooklyn non molla. Tornate a New York e ci rifacciamo: nuova città, nuovi nascondigli, stessa Chiave. Io vi aspetto qui. Allenatevi a guardare in alto.",
  "teamWins": [
   "Ma come avete fatto? Quello era il mio nascondiglio migliore.",
   "Va bene, questo pezzo ve lo siete preso. Il prossimo no.",
   "Fortuna. Pura fortuna da principianti.",
   "Mi state facendo perdere le piume, sapete?",
   "Insieme siete più svegli di un piccione intero. Non ditelo in giro.",
   "Ok, ok. Uno a voi. Ma la Chiave è ancora lunga.",
   "Vi ho sottovalutato. Non succederà più. Forse.",
   "Brava squadra. Lo dico a denti stretti. Anche se non ho i denti."
  ],
  "vinnieWins": [
   "Ah-ha! Questo pezzo resta sotto la mia ala.",
   "Troppo lenti, amici. A Brooklyn si vola.",
   "Lo sapevo. Nessuno batte Vinnie sul suo terreno.",
   "Un pezzo in più per il mio nido. Grazie, eh.",
   "Ci eravate vicini. Vicini vicini. Ma non abbastanza.",
   "Ve l'avevo detto che era difficile. Io dico sempre la verità. Quasi.",
   "Questo me lo tengo. Ma vi do una dritta: guardate in alto, la prossima volta.",
   "Uno a me. Non piangete, eh: la Chiave è ancora in gioco."
  ]
 },
 "bets": [
  {
   "id": "bet-cisterna",
   "stopId": null,
   "type": "bet",
   "title": "La botte sul tetto",
   "read": "Scommessa di Vinnie. Sui tetti di New York ci sono botti di legno giganti con il cappello a punta: io ci faccio la siesta. Scommetto che non ne trovate una prima del prossimo semaforo. Uno guarda i tetti a sinistra, l'altro a destra, e la indicate insieme.",
   "roles": [
    "Guarda i tetti a sinistra",
    "Guarda i tetti a destra"
   ],
   "vinnieBet": "Nessuna botte prima del prossimo semaforo.",
   "parentHint": "Le cisterne d'acqua di legno sui palazzi di 6–10 piani: botti rotonde su un traliccio, con un tetto a cono. Ce ne sono quasi ovunque a Manhattan, agli angoli dei tetti."
  },
  {
   "id": "bet-lanterne",
   "stopId": null,
   "type": "bet",
   "title": "Le lanterne della metro",
   "read": "Scommessa di Vinnie. Alcuni ingressi della metro hanno due lanterne a palla, verdi. Verde vuol dire che si entra sempre. Scommetto che non trovate due lanterne verdi prima del prossimo incrocio. Uno conta gli ingressi della metro, l'altro guarda il colore. Me lo dite insieme.",
   "roles": [
    "Cerca gli ingressi della metro",
    "Controlla il colore delle lanterne"
   ],
   "vinnieBet": "Niente lanterne verdi prima dell'incrocio.",
   "parentHint": "Ai lati delle scale della metro ci sono globi luminosi: verdi = ingresso aperto con biglietteria, rossi = solo uscita o ingresso limitato. Funziona meglio sulle avenue, dove le stazioni sono più frequenti."
  },
  {
   "id": "bet-vapore",
   "stopId": null,
   "type": "bet",
   "title": "Il camino a strisce",
   "read": "Scommessa di Vinnie. Sotto New York c'è vapore caldo che corre nei tubi, e ogni tanto esce in strada da un camino a strisce arancioni e bianche. Scommetto che non ne trovate uno prima di arrivare alla prossima tappa. Uno guarda il centro della strada, l'altro i marciapiedi. Vale solo se lo indicate insieme.",
   "roles": [
    "Guarda il centro della strada",
    "Guarda i marciapiedi e gli angoli"
   ],
   "vinnieBet": "Nessun camino fumante prima della prossima tappa.",
   "parentHint": "Sono i camini di Con Edison, tubi arancioni e bianchi piantati sui tombini dove c'è una perdita di vapore. In Midtown e Downtown d'inverno sono frequenti. Vale anche un tombino che fuma."
  },
  {
   "id": "bet-cappotto",
   "stopId": null,
   "type": "bet",
   "title": "Il cane col cappotto",
   "read": "Scommessa di Vinnie. A New York i cani d'inverno vanno in giro vestiti meglio di me. Scommetto che non trovate un cane con il cappotto e uno con le scarpe prima della prossima tappa. Uno cerca il cappotto, l'altro le scarpe. Servono tutti e due.",
   "roles": [
    "Cerca un cane con il cappotto",
    "Cerca un cane con le scarpette"
   ],
   "vinnieBet": "Ne trovate uno solo, non tutti e due.",
   "parentHint": "Al freddo sono molto comuni, soprattutto nei parchi e nelle vie residenziali la mattina e la sera. Le scarpette sono più rare: guardate i cani piccoli."
  },
  {
   "id": "bet-lettere",
   "stopId": null,
   "type": "bet",
   "title": "Il mio nome sulle insegne",
   "read": "Scommessa di Vinnie. Voglio vedere il mio nome in giro per la città. Dovete trovare sulle insegne dei negozi le lettere V, I, N, N, I, E, in quest'ordine, una alla volta. Una lettera la trova uno, quella dopo l'altro. Scommetto che vi bloccate sulla V.",
   "roles": [
    "Trova le lettere dispari: V, N, I",
    "Trova le lettere pari: I, N, E"
   ],
   "vinnieBet": "Vi fermate alla V.",
   "parentHint": "La V è la più difficile: cercate insegne con «Avenue», «Ave», «Vintage», «Verizon», «CVS», «Service». Le altre lettere sono ovunque."
  },
  {
   "id": "bet-giallo",
   "stopId": null,
   "type": "bet",
   "title": "Giallo ma non taxi",
   "read": "Scommessa di Vinnie. A New York tutti guardano i taxi gialli. Io no: io guardo il resto. Trovate tre cose gialle che non sono un taxi, prima del prossimo incrocio. Uno le trova, l'altro deve essere d'accordo che non sono un taxi. Tre, non due.",
   "roles": [
    "Trova le cose gialle",
    "Controlla e conta: vale o non vale"
   ],
   "vinnieBet": "Arrivate a due e vi fermate.",
   "parentHint": "Idranti, cartelli stradali, bandierine dei cantieri, scuolabus, insegne. Gli idranti a New York spesso sono gialli o argento."
  },
  {
   "id": "bet-scala",
   "stopId": null,
   "type": "bet",
   "title": "La scala che non tocca terra",
   "read": "Scommessa di Vinnie. Sulle facciate di New York ci sono scale di ferro che finiscono a metà, sospese nel vuoto. Scommetto che non ne trovate una con le luci di Natale prima del prossimo semaforo. Uno guarda in alto, l'altro conta i piani e dice a che piano sono le luci. Me lo dite insieme.",
   "roles": [
    "Cerca la scala antincendio con le luci",
    "Conta a che piano sono le luci"
   ],
   "vinnieBet": "Nessuna scala con le luci prima del semaforo.",
   "parentHint": "Le scale antincendio nere sulle facciate dei palazzi vecchi, soprattutto nelle vie laterali. Sotto Natale molti le decorano con lucine. L'ultima rampa resta sospesa e si abbassa solo in caso di incendio."
  },
  {
   "id": "bet-nomedoppio",
   "stopId": null,
   "type": "bet",
   "title": "La via con due nomi",
   "read": "Scommessa di Vinnie. A New York alcune vie hanno due cartelli: quello verde con il nome normale e un altro con il nome di una persona. Scommetto che non trovate una via con due nomi prima della prossima tappa. Uno guarda i cartelli, l'altro legge il secondo nome ad alta voce.",
   "roles": [
    "Cerca il palo con due cartelli diversi",
    "Legge il secondo nome a voce alta"
   ],
   "vinnieBet": "Nessuna via con due nomi prima della tappa.",
   "parentHint": "Sono i cartelli dei «co-named streets»: sotto o sopra il cartello verde ce n'è un altro, spesso con «Way», «Place» o «Square» e il nome di una persona. Si trovano agli incroci, sugli stessi pali dei cartelli normali."
  },
  {
   "id": "bet-piccione",
   "stopId": null,
   "type": "bet",
   "title": "Il piccione più elegante",
   "read": "Scommessa di Vinnie. A New York ci sono più piccioni che taxi, ma nessuno bello come me. Trovate un piccione con almeno un po' di bianco sulle ali, prima del prossimo incrocio. Uno lo trova, l'altro lo descrive a me, a voce alta, come un giornalista. Scommetto che sono tutti grigi.",
   "roles": [
    "Trova il piccione con il bianco",
    "Lo descrive come un giornalista"
   ],
   "vinnieBet": "Trovate solo piccioni grigi.",
   "parentHint": "Nelle piazze e vicino a chi mangia sulle panchine ce ne sono decine: alcuni hanno piume bianche o macchie chiare. Se non ne trovate, vince Vinnie, ed è giusto così."
  }
 ],
 "typical": [
  {
   "name": "Bagel con cream cheese",
   "what": "Ciambella di pane bollita e poi cotta al forno, tagliata a metà e spalmata di formaggio cremoso («a bagel with schmear»). Per i curiosi, con salmone affumicato.",
   "where": "In qualsiasi bagel shop la mattina. A Midtown: Ess-a-Bagel, Liberty Bagels. Sabato e lunedì mattina sono il momento giusto."
  },
  {
   "name": "Fetta di pizza",
   "what": "Fetta enorme e sottile, da piegare a metà per lungo e mangiare in piedi. «Plain slice» è pomodoro e mozzarella.",
   "where": "Joe's Pizza (Broadway angolo 40ª, Carmine Street nel Village), Prince Street Pizza a SoHo."
  },
  {
   "name": "Pastrami sul pane di segale",
   "what": "Manzo speziato e affumicato, tagliato spesso, alto un palmo, con senape e cetriolo sottaceto. Un panino basta per due.",
   "where": "Nei deli ebraici: Katz's sul Lower East Side è il più famoso, 2nd Ave Deli a Murray Hill."
  },
  {
   "name": "Hot dog",
   "what": "Würstel di manzo nel panino morbido, con senape e crauti o cipolle. Dal carretto all'angolo costa pochi dollari.",
   "where": "Carretti agli angoli di Midtown e vicino ai parchi; Nathan's nelle aree ristoro."
  },
  {
   "name": "Pretzel caldo",
   "what": "Il grosso pane a fiocco con il sale grosso, caldo, dal carretto. Si scalda le mani tenendolo.",
   "where": "Carretti sulla Quinta Strada, a Central Park, a Times Square."
  },
  {
   "name": "Black-and-white cookie",
   "what": "Un biscotto morbido grande come una mano, metà glassa bianca e metà cioccolato. Si mangia prima un lato o tutti e due insieme: ognuno ha la sua scuola.",
   "where": "Nei deli e nelle panetterie ebraiche, da Zabar's sull'Upper West Side, da Breads Bakery a Union Square."
  },
  {
   "name": "New York cheesecake",
   "what": "Torta di formaggio cremoso, alta e densa, con base di biscotto. Una fetta per due.",
   "where": "Junior's a Times Square (45ª angolo Broadway), Eileen's a SoHo."
  },
  {
   "name": "Chicken over rice",
   "what": "Pollo speziato su riso giallo con insalata, salsa bianca e salsa rossa (piccantissima: poca). Dal carretto halal, in vaschetta.",
   "where": "The Halal Guys, angolo Sesta Avenue e 53ª, e altri carretti halal in tutta Midtown."
  },
  {
   "name": "Dumpling",
   "what": "Ravioli cinesi al vapore o fritti; i soup dumpling hanno il brodo dentro: si mordono piano, con il cucchiaio sotto.",
   "where": "Chinatown: Nom Wah, Joe's Shanghai, e i banchi di dumpling in Eldridge Street."
  },
  {
   "name": "Egg cream",
   "what": "Non c'è né uovo né panna: latte, sciroppo di cioccolato e acqua frizzante, mescolati finché fa la schiuma. Bevanda vecchia New York.",
   "where": "Nei diner e nei deli storici, per esempio da Katz's e 2nd Ave Deli."
  }
 ],
 "general": [
  {
   "topic": "Metro: come si paga",
   "text": "Si tocca il lettore OMNY ai tornelli con una carta contactless o il telefono, senza comprare biglietti. Corsa $3. Meglio una carta per adulto: superati $35 in 7 giorni con la stessa carta, le altre corse sono gratis."
  },
  {
   "topic": "Metro: bambini",
   "text": "I bambini sotto i 44 pollici (112 cm) viaggiano gratis, fino a tre per adulto pagante. Quelli più alti pagano come un adulto: toccate di nuovo la stessa carta o usatene un'altra."
  },
  {
   "topic": "Metro: Uptown e Downtown",
   "text": "Prima di scendere le scale leggete il cartello: Uptown va a nord, Downtown a sud. Alcuni ingressi portano a una sola direzione. I treni espressi saltano fermate: sulla mappa sono i pallini bianchi."
  },
  {
   "topic": "Mance",
   "text": "Al ristorante con servizio al tavolo 18–20% sul totale prima delle tasse; al banco o take-away facoltativa, $1–2. Taxi 15–20%. Hotel: $3–5 a notte per le pulizie, $2 a valigia al facchino. I prezzi esposti non includono la tassa dell'8,875%."
  },
  {
   "topic": "Bagni",
   "text": "In strada non ci sono quasi bagni pubblici. Funzionano: parchi (Bryant Park ha un bagno famoso, pulitissimo), musei, grandi magazzini (Macy's, Saks), stazioni come Grand Central, librerie Barnes & Noble, supermercati Whole Foods. Starbucks spesso ha il codice sullo scontrino."
  },
  {
   "topic": "Freddo",
   "text": "A fine stagione di giorno fa 5–10 gradi, la sera si scende vicino a zero, e il vento tra i grattacieli si sente. Vestitevi a strati: dentro negozi e metro fa caldo. Cappello e guanti per i bambini sempre in tasca."
  },
  {
   "topic": "Attraversare la strada",
   "text": "Aspettate l'omino bianco: il conto alla rovescia vi dice quanti secondi restano. I newyorkesi attraversano col rosso, voi con i bambini no. Guardate le auto che girano e soprattutto le biciclette e i monopattini elettrici, che arrivano silenziosi e anche contromano."
  },
  {
   "topic": "Strade e avenue",
   "text": "Le Street vanno da est a ovest e sono numerate, le Avenue vanno da nord a sud. Venti isolati di Street sono circa un miglio, 20 minuti a piedi: un minuto per isolato. Da un'avenue all'altra invece ci vogliono 4–5 minuti."
  },
  {
   "topic": "Taxi in città",
   "text": "Un taxi giallo è libero quando il numero sul tetto è acceso. Si alza la mano sul bordo del marciapiede. In un taxi normale stanno 4 persone. Si paga con la carta sullo schermo dietro, mancia inclusa."
  },
  {
   "topic": "Sicurezza",
   "text": "Nei posti affollati (Times Square, metro, mercatini) zaino davanti e telefono in tasca chiusa. Concordate con i bambini un punto di ritrovo in ogni tappa grande e fategli tenere in tasca il biglietto dell'hotel con il telefono dei genitori."
  }
 ]
};
