/**
 * MEGA POOL - Freaky Quiz (TOTAL RECOVERY & EXPANSION)
 * Target: Liceo Scientifico / Universitario / Esperti
 * Include tutte le domande scritte finora + espansioni massive.
 */
const CATEGORIES_POOL = [
    {
        id: "science",
        title: "Fisica & Chimica",
        questions: [
            { q: "Valore di g sulla Terra (m/s²)?", a: "9.81", p: 100 },
            { q: "Simbolo chimico del Potassio?", a: "K", p: 100 },
            { q: "Gas nobile più leggero?", a: "Elio", p: 100 },
            { q: "Passaggio da solido a gas?", a: "Sublimazione", p: 100 },
            { q: "Formula chimica dell'Acqua?", a: "H2O", p: 100 },
            { q: "Particella atomica con carica positiva?", a: "Protone", p: 100 },
            { q: "Simbolo chimico dell'Oro?", a: "Au", p: 100 },
            { q: "Simbolo dell'Argento?", a: "Ag", p: 200 },
            { q: "Unità della frequenza?", a: "Hertz", p: 200 },
            { q: "Legge V = R * I?", a: "Legge di Ohm", p: 200 },
            { q: "Chi enunciò il principio di galleggiamento?", a: "Archimede", p: 200 },
            { q: "Formula dell'Acido Cloridrico?", a: "HCl", p: 200 },
            { q: "Passaggio da gas a liquido?", a: "Condensazione", p: 200 },
            { q: "Formula molecolare del Benzene?", a: "C6H6", p: 300 },
            { q: "Chi scoprì l'Elettrone?", a: "J.J. Thomson", p: 300 },
            { q: "Formula Acido Solforico?", a: "H2SO4", p: 300 },
            { q: "Particella con carica neutra?", a: "Neutrone", p: 300 },
            { q: "Chi propose il modello atomico a orbitali quantizzati?", a: "Niels Bohr", p: 300 },
            { q: "Formula del Metano?", a: "CH4", p: 300 },
            { q: "Costante di Planck (ordine)?", a: "10^-34 J·s", p: 400 },
            { q: "Anno pubblicazione Relatività Generale?", a: "1915", p: 400 },
            { q: "Trasformazione a pressione costante?", a: "Isobara", p: 400 },
            { q: "Cosa afferma il Principio di Esclusione di Pauli?", a: "Due elettroni non possono avere gli stessi 4 numeri quantici", p: 400 },
            { q: "Formula Acido Nitrico?", a: "HNO3", p: 400 },
            { q: "Valore esatto velocità luce (m/s)?", a: "299.792.458", p: 500 },
            { q: "Equazioni elettromagnetismo (autore)?", a: "Maxwell", p: 500 },
            { q: "Grandezza del disordine termodinamico?", a: "Entropia", p: 500 },
            { q: "Trasformazione senza scambio calore?", a: "Adiabatica", p: 500 },
            { q: "Quale bosone conferisce massa alle particelle?", a: "Bosone di Higgs", p: 500 },
            { q: "Enuncia il secondo principio della dinamica?", a: "F = m*a", p: 500 }
        ]
    },
    {
        id: "history",
        title: "Storia",
        questions: [
            { q: "Anno caduta Muro Berlino?", a: "1989", p: 100 },
            { q: "Primo Imperatore Romano?", a: "Augusto", p: 100 },
            { q: "Anno scoperta America?", a: "1492", p: 100 },
            { q: "Chi era il Re Sole?", a: "Luigi XIV", p: 100 },
            { q: "In che anno iniziò la Rivoluzione Francese?", a: "1789", p: 100 },
            { q: "Dittatore ucciso alle idi di marzo?", a: "Giulio Cesare", p: 100 },
            { q: "In che anno finì la I Guerra Mondiale?", a: "1918", p: 200 },
            { q: "Chi firmò i Patti Lateranensi?", a: "Mussolini e Gasparri", p: 200 },
            { q: "Vincitore battaglia di Azio?", a: "Ottaviano", p: 200 },
            { q: "Anno marcia su Roma?", a: "1922", p: 200 },
            { q: "Generale cartaginese che attraversò le Alpi?", a: "Annibale", p: 200 },
            { q: "Pace che chiuse la guerra dei 30 anni?", a: "Vestfalia", p: 300 },
            { q: "Anno proclamazione Impero Tedesco?", a: "1871", p: 300 },
            { q: "Anno in cui l'Italia divenne Repubblica?", a: "1946", p: 300 },
            { q: "Chi vinse ad Alesia?", a: "Giulio Cesare", p: 300 },
            { q: "Anno del Congresso di Vienna?", a: "1815", p: 400 },
            { q: "Chi era il Cancelliere di Ferro?", a: "Bismarck", p: 400 },
            { q: "Anno firma Magna Carta?", a: "1215", p: 400 },
            { q: "Anno della Defenestrazione di Praga?", a: "1618", p: 400 },
            { q: "Data esatta caduta Costantinopoli?", a: "29 maggio 1453", p: 500 },
            { q: "Data esatta proclamazione Regno Italia?", a: "17 marzo 1861", p: 500 },
            { q: "Anno della Battaglia di Lepanto?", a: "1571", p: 500 },
            { q: "Data esatta armistizio Villafranca?", a: "11 luglio 1859", p: 500 },
            { q: "Anno morte di Maometto?", a: "632", p: 500 }
        ]
    },
    {
        id: "philosophy",
        title: "Filosofia",
        questions: [
            { q: "Autore della Repubblica?", a: "Platone", p: 100 },
            { q: "Disse 'Cogito ergo sum'?", a: "Cartesio", p: 100 },
            { q: "Disse 'So di non sapere'?", a: "Socrate", p: 100 },
            { q: "Fondatore del Liceo?", a: "Aristotele", p: 100 },
            { q: "Filosofo di 'Dio è morto'?", a: "Nietzsche", p: 100 },
            { q: "Scrisse la Critica ragion pura?", a: "Kant", p: 200 },
            { q: "Filosofo del 'rasoio'?", a: "Ockham", p: 200 },
            { q: "Scrisse il Leviatano?", a: "Hobbes", p: 200 },
            { q: "I tre stadi di Kierkegaard?", a: "Estetico, Etico, Religioso", p: 300 },
            { q: "Pregiudizi per Bacone?", a: "Idola", p: 300 },
            { q: "Scrisse Così parlò Zarathustra?", a: "Nietzsche", p: 300 },
            { q: "Disse 'Panta Rhei'?", a: "Eraclito", p: 300 },
            { q: "Concetto di Heidegger 'Esserci'?", a: "Dasein", p: 400 },
            { q: "Scrisse Tractatus Logico-Philosophicus?", a: "Wittgenstein", p: 400 },
            { q: "Scrisse Fenomenologia dello spirito?", a: "Hegel", p: 400 },
            { q: "Filosofo del mondo come volontà e rappresentazione?", a: "Schopenhauer", p: 400 },
            { q: "Imperativo categorico (autore)?", a: "Kant", p: 500 },
            { q: "Scrisse l'Etica (metodo geometrico)?", a: "Spinoza", p: 500 },
            { q: "Autore della Monadologia?", a: "Leibniz", p: 500 },
            { q: "Scrisse la Summa Theologiae?", a: "Tommaso d'Aquino", p: 500 }
        ]
    },
    {
        id: "inf",
        title: "Informatica",
        questions: [
            { q: "Unità minima di informazione?", a: "Bit", p: 100 },
            { q: "Cosa significa WWW?", a: "World Wide Web", p: 100 },
            { q: "Memoria volatile del PC?", a: "RAM", p: 100 },
            { q: "Linguaggio del kernel Linux?", a: "C", p: 200 },
            { q: "Cosa significa DNS?", a: "Domain Name System", p: 200 },
            { q: "Protocollo per trasferimento file?", a: "FTP", p: 200 },
            { q: "Cosa indica l'acronimo GPU?", a: "Graphics Processing Unit", p: 300 },
            { q: "Anno nascita WWW al CERN?", a: "1989", p: 300 },
            { q: "Padre del computer (Macchina Analitica)?", a: "Babbage", p: 300 },
            { q: "Algoritmo crittografia asimmetrica a 3 nomi?", a: "RSA", p: 400 },
            { q: "Primo linguaggio alto livello (1957)?", a: "Fortran", p: 400 },
            { q: "Chi scrisse il primo algoritmo della storia?", a: "Ada Lovelace", p: 500 },
            { q: "Test intelligenza macchine?", a: "Test di Turing", p: 500 },
            { q: "Sistema operativo di Bell Labs del 1969?", a: "Unix", p: 500 }
        ]
    },
    {
        id: "eco",
        title: "Economia",
        questions: [
            { q: "Cosa significa PIL?", a: "Prodotto Interno Lordo", p: 100 },
            { q: "Aumento generalizzato dei prezzi?", a: "Inflazione", p: 100 },
            { q: "Moneta unica europea?", a: "Euro", p: 100 },
            { q: "Padre dell'economia classica?", a: "Adam Smith", p: 200 },
            { q: "Cosa significa BCE?", a: "Banca Centrale Europea", p: 200 },
            { q: "Teoria della 'mano invisibile' (autore)?", a: "Adam Smith", p: 300 },
            { q: "Chi scrisse 'Il Capitale'?", a: "Karl Marx", p: 300 },
            { q: "Economista della 'Teoria Generale' (1936)?", a: "Keynes", p: 300 },
            { q: "Nobel teoria dei giochi 1994?", a: "John Nash", p: 400 },
            { q: "Differenziale titoli di stato?", a: "Spread", p: 400 },
            { q: "Coefficiente disuguaglianza reddito?", a: "Gini", p: 500 },
            { q: "Legge per cui moneta cattiva scaccia la buona?", a: "Legge di Gresham", p: 500 }
        ]
    },
    {
        id: "eng",
        title: "Ingegneria",
        questions: [
            { q: "Cosa significa CAD?", a: "Computer-Aided Design", p: 100 },
            { q: "Materiale cemento + ferro?", a: "Cemento armato", p: 100 },
            { q: "Componente interruttore elettronico?", a: "Transistor", p: 200 },
            { q: "Unità della potenza?", a: "Watt", p: 200 },
            { q: "Ciclo ideale motori termici?", a: "Carnot", p: 300 },
            { q: "Coefficiente elasticità Hooke?", a: "Modulo di Young", p: 300 },
            { q: "Inventore italiano della dinamo?", a: "Antonio Pacinotti", p: 400 },
            { q: "Chi inventò il primo microprocessore?", a: "Federico Faggin", p: 500 },
            { q: "Teorema nodi elettrotecnica?", a: "Kirchhoff", p: 500 }
        ]
    },
    {
        id: "geography",
        title: "Geografia",
        questions: [
            { q: "Stato più popoloso (2023)?", a: "India", p: 100 },
            { q: "Capitale della Spagna?", a: "Madrid", p: 100 },
            { q: "Fiume più lungo d'Italia?", a: "Po", p: 100 },
            { q: "Stretto Russia-Alaska?", a: "Bering", p: 200 },
            { q: "Stato più grande superficie?", a: "Russia", p: 200 },
            { q: "Capitale dell'Australia?", a: "Canberra", p: 200 },
            { q: "Punto più alto Sud America?", a: "Aconcagua", p: 300 },
            { q: "Stato con più fusi orari?", a: "Francia", p: 300 },
            { q: "Capitale amministrativa Sudafrica?", a: "Pretoria", p: 400 },
            { q: "Punto più profondo Terra?", a: "Abisso Challenger", p: 400 },
            { q: "Stretto Malesia-Sumatra?", a: "Malacca", p: 500 },
            { q: "Capitale del Kazakistan?", a: "Astana", p: 500 }
        ]
    },
    {
        id: "anime",
        title: "Anime & Manga",
        questions: [
            { q: "Protagonista One Piece?", a: "Monkey D. Luffy", p: 100 },
            { q: "Chi ha scritto Dragon Ball?", a: "Akira Toriyama", p: 100 },
            { q: "Pokemon giallo?", a: "Pikachu", p: 100 },
            { q: "Regista de La città incantata?", a: "Miyazaki", p: 200 },
            { q: "Quaderno della morte?", a: "Death Note", p: 200 },
            { q: "Studio di Totoro?", a: "Ghibli", p: 200 },
            { q: "Unità robotica di Shinji?", a: "Eva-01", p: 300 },
            { q: "Autore di Berserk?", a: "Kentaro Miura", p: 300 },
            { q: "Vero nome di L?", a: "L Lawliet", p: 300 },
            { q: "Regista di Perfect Blue?", a: "Satoshi Kon", p: 400 },
            { q: "Anno inizio manga One Piece?", a: "1997", p: 400 },
            { q: "Vero nome del Maggiore (GITS)?", a: "Motoko Kusanagi", p: 500 },
            { q: "Anno inizio manga Berserk?", a: "1989", p: 500 },
            { q: "Autore di Uzumaki?", a: "Junji Ito", p: 500 }
        ]
    },
    {
        id: "lit",
        title: "Letteratura",
        questions: [
            { q: "Scrisse I Promessi Sposi?", a: "Manzoni", p: 100 },
            { q: "Autore Divina Commedia?", a: "Dante", p: 100 },
            { q: "Scrisse La coscienza di Zeno?", a: "Svevo", p: 200 },
            { q: "Autore di Sherlock Holmes?", a: "Conan Doyle", p: 200 },
            { q: "Scrisse 1984?", a: "Orwell", p: 300 },
            { q: "Padre del Realismo Magico?", a: "Garcia Marquez", p: 300 },
            { q: "Vero nome di Italo Svevo?", a: "Ettore Schmitz", p: 400 },
            { q: "Scrisse Alla ricerca del tempo perduto?", a: "Proust", p: 400 },
            { q: "Scrisse l'Ulisse (1922)?", a: "James Joyce", p: 500 },
            { q: "Vero nome di Stendhal?", a: "Marie-Henri Beyle", p: 500 }
        ]
    },
    {
        id: "sport",
        title: "Sport",
        questions: [
            { q: "Record 100m?", a: "Usain Bolt", p: 100 },
            { q: "Minuti tempo basket NBA?", a: "12", p: 100 },
            { q: "Squadra con più Champions?", a: "Real Madrid", p: 200 },
            { q: "Sport Coppa America?", a: "Vela", p: 200 },
            { q: "Giocatori volley in campo?", a: "6", p: 300 },
            { q: "Anno prime Olimpiadi moderne?", a: "1896", p: 300 },
            { q: "Record Slam maschile?", a: "Djokovic", p: 400 },
            { q: "Sede 24 Ore famosa?", a: "Le Mans", p: 500 }
        ]
    },
    {
        id: "cinema",
        title: "Cinema & Serie",
        questions: [
            { q: "Regista di 2001: Odissea?", a: "Stanley Kubrick", p: 100 },
            { q: "Regista di Pulp Fiction?", a: "Quentin Tarantino", p: 100 },
            { q: "Oscar miglior film 2020?", a: "Parasite", p: 200 },
            { q: "Regista di Psyco?", a: "Alfred Hitchcock", p: 200 },
            { q: "Protagonista Breaking Bad?", a: "Walter White", p: 300 },
            { q: "Computer di 2001?", a: "HAL 9000", p: 400 },
            { q: "Regista Metropolis (1927)?", a: "Fritz Lang", p: 500 }
        ]
    },
    {
        id: "bio",
        title: "Biologia",
        questions: [
            { q: "Molecola della vita?", a: "DNA", p: 100 },
            { q: "Coppie cromosomi umani?", a: "23", p: 100 },
            { q: "Morte cellulare programmata?", a: "Apoptosi", p: 200 },
            { q: "Centrale energetica cellula?", a: "Mitocondrio", p: 200 },
            { q: "Unità funzionale rene?", a: "Nefrone", p: 300 },
            { q: "Leggi eredità (autore)?", a: "Gregor Mendel", p: 400 },
            { q: "Struttura DNA (scopritori)?", a: "Watson e Crick", p: 500 }
        ]
    },
    {
        id: "math_logic",
        title: "Logica & Matematica",
        questions: [
            { q: "Derivata di x²?", a: "2x", p: 100 },
            { q: "Somma angoli triangolo?", a: "180°", p: 100 },
            { q: "Valore e (Nepero) a due cifre?", a: "2.71", p: 200 },
            { q: "Teorema triangoli rettangoli?", a: "Pitagora", p: 200 },
            { q: "Chi dimostrò incompletezza?", a: "Kurt Gödel", p: 400 },
            { q: "Ultimo Teorema Fermat (enunciato)?", a: "x^n+y^n=z^n no sol. interi n>2", p: 500 },
            { q: "Anno dimostrazione Fermat?", a: "1994", p: 500 }
        ]
    },
    {
        id: "business",
        title: "Business",
        questions: [
            { q: "Fondatore di Microsoft?", a: "Bill Gates", p: 100 },
            { q: "Cosa significa CEO?", a: "Chief Executive Officer", p: 200 },
            { q: "Metodo marketing delle '4P'?", a: "Product, Price, Place, Promotion", p: 300 },
            { q: "Startup da oltre 1 miliardo $?", a: "Unicorn", p: 400 },
            { q: "Chi teorizzò Strategia Oceano Blu?", a: "Kim e Mauborgne", p: 500 }
        ]
    },
    {
        id: "art",
        title: "Arte",
        questions: [
            { q: "Dipinse la Gioconda?", a: "Leonardo da Vinci", p: 100 },
            { q: "Autore Guernica?", a: "Pablo Picasso", p: 100 },
            { q: "Esponente Barocco scultoreo?", a: "Bernini", p: 200 },
            { q: "Dipinse Il Grido?", a: "Edvard Munch", p: 300 },
            { q: "Architetto Cupola S. Pietro?", a: "Michelangelo", p: 400 },
            { q: "Autore Cristo Velato?", a: "Giuseppe Sanmartino", p: 500 }
        ]
    }
];
