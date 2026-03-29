/**
 * MEGA POOL - Freaky Quiz (Versione Ampliata)
 * Target: Liceo Scientifico / Universitario
 */
const CATEGORIES_POOL = [
    {
        id: "science",
        title: "Scienza",
        questions: [
            { q: "Quale pianeta è noto come il 'Pianeta Rosso'?", a: "Marte", p: 100 },
            { q: "Quale gas costituisce circa il 78% dell'atmosfera terrestre?", a: "Azoto", p: 100 },
            { q: "Qual è l'unità di misura della forza nel Sistema Internazionale?", a: "Newton", p: 100 },
            { q: "Qual è il simbolo chimico dell'Oro?", a: "Au", p: 200 },
            { q: "Qual è l'unico metallo liquido a temperatura ambiente?", a: "Mercurio", p: 200 },
            { q: "Chi ha proposto la teoria della deriva dei continenti?", a: "Alfred Wegener", p: 200 },
            { q: "Come si chiama la morte programmata di una cellula?", a: "Apoptosi", p: 300 },
            { q: "Qual è l'unità funzionale del rene?", a: "Nefrone", p: 300 },
            { q: "Quale organello cellulare è responsabile della produzione di ATP?", a: "Mitocondrio", p: 300 },
            { q: "Quale scienziato enunciò il 'Principio di Indeterminazione'?", a: "Werner Heisenberg", p: 400 },
            { q: "Qual è la costante di gravitazione universale G (ordine di grandezza)?", a: "10^-11", p: 400 },
            { q: "Chi ha scoperto i raggi X nel 1895?", a: "Wilhelm Röntgen", p: 400 },
            { q: "Qual è la grandezza termodinamica che misura il disordine di un sistema?", a: "Entropia", p: 500 },
            { q: "Quale bosone conferisce la massa alle altre particelle elementari?", a: "Bosone di Higgs", p: 500 },
            { q: "Chi formulò le equazioni dell'elettromagnetismo che unificarono luce, elettricità e magnetismo?", a: "James Clerk Maxwell", p: 500 }
        ]
    },
    {
        id: "history",
        title: "Storia",
        questions: [
            { q: "In che anno è caduto il muro di Berlino?", a: "1989", p: 100 },
            { q: "Chi fu il primo Imperatore Romano?", a: "Ottaviano Augusto", p: 100 },
            { q: "In che anno è finita la Seconda Guerra Mondiale?", a: "1945", p: 100 },
            { q: "Chi era il Primo Ministro inglese durante la II Guerra Mondiale?", a: "Winston Churchill", p: 200 },
            { q: "In che anno è avvenuta la scoperta dell'America?", a: "1492", p: 200 },
            { q: "Quale generale cartaginese attraversò le Alpi con gli elefanti?", a: "Annibale", p: 200 },
            { q: "Quale pace pose fine alla Guerra dei Trent'anni nel 1648?", a: "Pace di Vestfalia", p: 300 },
            { q: "Quale dinastia regnava in Francia durante la Rivoluzione del 1789?", a: "Borbone", p: 300 },
            { q: "Chi era lo Zar di Russia durante le riforme del 1861 (abolizione servitù della gleba)?", a: "Alessandro II", p: 300 },
            { q: "Chi fu l'ultimo Zar di Russia?", a: "Nicola II", p: 400 },
            { q: "Quale trattato pose fine alla Prima Guerra Mondiale?", a: "Trattato di Versailles", p: 400 },
            { q: "In che anno avvenne lo scisma d'Oriente tra Chiesa Cattolica e Ortodossa?", a: "1054", p: 400 },
            { q: "In che anno è avvenuta la storica Battaglia di Waterloo?", a: "1815", p: 500 },
            { q: "Chi fu l'ultimo imperatore dell'Impero Romano d'Occidente?", a: "Romolo Augustolo", p: 500 },
            { q: "Quale califfo fondò la 'Casa della Sapienza' a Baghdad nell'830?", a: "Al-Ma'mun", p: 500 }
        ]
    },
    {
        id: "geography",
        title: "Geografia",
        questions: [
            { q: "Qual è la capitale della Spagna?", a: "Madrid", p: 100 },
            { q: "Qual è il fiume più lungo d'Italia?", a: "Po", p: 100 },
            { q: "In quale continente si trova il deserto del Sahara?", a: "Africa", p: 100 },
            { q: "Qual è la capitale dell'Australia?", a: "Canberra", p: 200 },
            { q: "Quale catena montuosa separa l'Europa dall'Asia?", a: "Monti Urali", p: 200 },
            { q: "Qual è lo stretto che separa l'Europa dall'Africa?", a: "Stretto di Gibilterra", p: 200 },
            { q: "Quale deserto si estende tra la Cina e la Mongolia?", a: "Deserto del Gobi", p: 300 },
            { q: "Qual è il punto più alto del Sud America?", a: "Aconcagua", p: 300 },
            { q: "Qual è lo stato più esteso del mondo?", a: "Russia", p: 300 },
            { q: "Come si chiama l'isola più grande del mondo?", a: "Groenlandia", p: 400 },
            { q: "Quale stretto separa la Russia dall'Alaska?", a: "Stretto di Bering", p: 400 },
            { q: "Qual è la capitale del Canada?", a: "Ottawa", p: 400 },
            { q: "Quale nazione ha più fusi orari al mondo?", a: "Francia (12)", p: 500 },
            { q: "Qual è il punto più profondo conosciuto degli oceani?", a: "Abisso Challenger", p: 500 },
            { q: "Qual è la capitale del Kazakistan?", a: "Astana", p: 500 }
        ]
    },
    {
        id: "cinema",
        title: "Cinema",
        questions: [
            { q: "Chi interpreta Iron Man nel MCU?", a: "Robert Downey Jr.", p: 100 },
            { q: "Qual è il nome del protagonista di 'Pirati dei Caraibi'?", a: "Jack Sparrow", p: 100 },
            { q: "Qual è il nome dell'attore che interpreta Harry Potter?", a: "Daniel Radcliffe", p: 100 },
            { q: "Chi ha diretto 'Pulp Fiction'?", a: "Quentin Tarantino", p: 200 },
            { q: "Chi ha diretto 'Inception' e 'Interstellar'?", a: "Christopher Nolan", p: 200 },
            { q: "Quale film ha vinto l'Oscar 2020 come miglior film (Corea del Sud)?", a: "Parasite", p: 200 },
            { q: "Chi ha diretto 'La città incantata'?", a: "Hayao Miyazaki", p: 300 },
            { q: "Quale attore interpreta il Joker nel film del 2019?", a: "Joaquin Phoenix", p: 300 },
            { q: "Per quale film Leonardo DiCaprio ha vinto il suo primo Oscar?", a: "Revenant - Redivivo", p: 300 },
            { q: "Qual è l'unico attore con 3 Oscar come protagonista maschile?", a: "Daniel Day-Lewis", p: 400 },
            { q: "Chi ha diretto 'Il Settimo Sigillo'?", a: "Ingmar Bergman", p: 400 },
            { q: "In che anno è uscito il primo film della saga di Star Wars?", a: "1977", p: 400 },
            { q: "Come si chiama il computer di '2001: Odissea nello spazio'?", a: "HAL 9000", p: 500 },
            { q: "Come si chiama la tecnica di ripresa che prevede zoom e carrellata opposta?", a: "Dolly Zoom", p: 500 },
            { q: "Chi ha vinto l'Oscar per la miglior regia per 'La forma dell'acqua'?", a: "Guillermo del Toro", p: 500 }
        ]
    },
    {
        id: "tech",
        title: "Tecnologia",
        questions: [
            { q: "Cosa significa WWW?", a: "World Wide Web", p: 100 },
            { q: "Chi ha fondato Facebook?", a: "Mark Zuckerberg", p: 100 },
            { q: "Qual è il sistema operativo mobile di Google?", a: "Android", p: 100 },
            { q: "In quale linguaggio è scritto il kernel Linux?", a: "C", p: 200 },
            { q: "Chi ha fondato Microsoft?", a: "Bill Gates e Paul Allen", p: 200 },
            { q: "In che anno è uscito il primo iPhone?", a: "2007", p: 200 },
            { q: "Chi è l'imprenditore di SpaceX e Tesla?", a: "Elon Musk", p: 300 },
            { q: "Cosa significa l'estensione .pdf?", a: "Portable Document Format", p: 300 },
            { q: "Quale linguaggio di programmazione è stato creato da Brendan Eich in 10 giorni?", a: "JavaScript", p: 300 },
            { q: "Cosa indica l'acronimo GPU?", a: "Graphics Processing Unit", p: 400 },
            { q: "Qual è il nome del primo microprocessore Intel (1971)?", a: "Intel 4004", p: 400 },
            { q: "Cosa significa CPU?", a: "Central Processing Unit", p: 400 },
            { q: "Come si chiama il test sull'intelligenza artificiale di Alan Turing?", a: "Test di Turing", p: 500 },
            { q: "Cosa significa l'acronimo HTTP?", a: "HyperText Transfer Protocol", p: 500 },
            { q: "Quale protocollo di rete ha preceduto Internet negli anni '60?", a: "ARPANET", p: 500 }
        ]
    },
    {
        id: "lit",
        title: "Letteratura",
        questions: [
            { q: "Chi ha scritto 'I Promessi Sposi'?", a: "Alessandro Manzoni", p: 100 },
            { q: "Chi è l'autore di 'Divina Commedia'?", a: "Dante Alighieri", p: 100 },
            { q: "Chi ha scritto 'Pinocchio'?", a: "Carlo Collodi", p: 100 },
            { q: "Chi ha ideato Sherlock Holmes?", a: "Arthur Conan Doyle", p: 200 },
            { q: "Chi ha scritto 'Il fu Mattia Pascal'?", a: "Luigi Pirandello", p: 200 },
            { q: "Chi ha scritto 'Il ritratto di Dorian Gray'?", a: "Oscar Wilde", p: 200 },
            { q: "Chi è il padre del 'Realismo Magico'?", a: "Gabriel García Márquez", p: 300 },
            { q: "Chi ha scritto '1984'?", a: "George Orwell", p: 300 },
            { q: "Qual è l'opera più famosa di James Joyce basata sull'Odissea?", a: "Ulisse", p: 300 },
            { q: "Chi è la protagonista di 'Orgoglio e Pregiudizio'?", a: "Elizabeth Bennet", p: 400 },
            { q: "Chi ha scritto 'Alla ricerca del tempo perduto'?", a: "Marcel Proust", p: 400 },
            { q: "Chi ha scritto il 'De Bello Gallico'?", a: "Giulio Cesare", p: 400 },
            { q: "Chi scrisse 'La terra desolata' (The Waste Land)?", a: "T.S. Eliot", p: 500 },
            { q: "Qual è il vero nome di Stendhal?", a: "Marie-Henri Beyle", p: 500 },
            { q: "Chi è l'autore del poema epico 'Paradiso Perduto'?", a: "John Milton", p: 500 }
        ]
    },
    {
        id: "art",
        title: "Arte",
        questions: [
            { q: "Chi ha dipinto la 'Gioconda'?", a: "Leonardo da Vinci", p: 100 },
            { q: "Quale artista si tagliò l'orecchio?", a: "Vincent van Gogh", p: 100 },
            { q: "Chi ha dipinto la volta della Cappella Sistina?", a: "Michelangelo", p: 100 },
            { q: "In quale città si trovano gli Uffizi?", a: "Firenze", p: 200 },
            { q: "Chi ha scolpito il David di marmo a Firenze?", a: "Michelangelo Buonarroti", p: 200 },
            { q: "Quale artista è famoso per i barattoli di zuppa Campbell's?", a: "Andy Warhol", p: 200 },
            { q: "Chi ha scolpito 'Amore e Psiche'?", a: "Antonio Canova", p: 300 },
            { q: "In che stile dipingeva Claude Monet?", a: "Impressionismo", p: 300 },
            { q: "Chi ha dipinto 'Il Grido'?", a: "Edvard Munch", p: 300 },
            { q: "Quale architetto ha progettato il Guggenheim di New York?", a: "Frank Lloyd Wright", p: 400 },
            { q: "Chi ha dipinto 'Guernica'?", a: "Pablo Picasso", p: 400 },
            { q: "A quale movimento apparteneva Salvador Dalí?", a: "Surrealismo", p: 400 },
            { q: "Chi ha progettato la cupola del Duomo di Firenze?", a: "Brunelleschi", p: 500 },
            { q: "Chi è l'autore della 'Scuola di Atene'?", a: "Raffaello Sanzio", p: 500 },
            { q: "Quale scultore barocco realizzò l'Apollo e Dafne?", a: "Gian Lorenzo Bernini", p: 500 }
        ]
    },
    {
        id: "myth",
        title: "Mitologia",
        questions: [
            { q: "Chi è il re degli dei greci?", a: "Zeus", p: 100 },
            { q: "Chi è il dio del mare?", a: "Poseidone", p: 100 },
            { q: "Chi è la dea dell'amore e della bellezza?", a: "Afrodite", p: 100 },
            { q: "Chi uccise la Medusa?", a: "Perseo", p: 200 },
            { q: "Chi è il cane a tre teste dell'Ade?", a: "Cerbero", p: 200 },
            { q: "Chi è il dio del fuoco e dei fabbri?", a: "Efesto", p: 200 },
            { q: "Chi è il dio greco dei ladri e messaggi?", a: "Ermes", p: 300 },
            { q: "Chi uccise il Minotauro?", a: "Teseo", p: 300 },
            { q: "Quale dea greca nacque dalla testa di Zeus?", a: "Atena", p: 300 },
            { q: "Chi è il dio norreno dell'inganno?", a: "Loki", p: 400 },
            { q: "Come si chiama il martello di Thor?", a: "Mjöllnir", p: 400 },
            { q: "Chi è la divinità egizia con la testa di sciacallo?", a: "Anubi", p: 400 },
            { q: "Chi era la musa della poesia epica?", a: "Calliope", p: 500 },
            { q: "Chi era la sposa di Orfeo?", a: "Euridice", p: 500 },
            { q: "Come si chiamava il mostro con cento occhi che faceva la guardia a Io?", a: "Argo", p: 500 }
        ]
    },
    {
        id: "music",
        title: "Musica",
        questions: [
            { q: "Quanti tasti ha un pianoforte standard?", a: "88", p: 100 },
            { q: "Chi era il 'Re del Pop'?", a: "Michael Jackson", p: 100 },
            { q: "Di quale band facevano parte John Lennon e Paul McCartney?", a: "The Beatles", p: 100 },
            { q: "Chi bruciò la chitarra a Monterey nel 1967?", a: "Jimi Hendrix", p: 200 },
            { q: "Chi ha composto la 'Nona Sinfonia'?", a: "Beethoven", p: 200 },
            { q: "In quale città è nato il Jazz?", a: "New Orleans", p: 200 },
            { q: "Qual è la nota che si trova una quarta sopra il Do?", a: "Fa", p: 300 },
            { q: "Chi ha scritto 'The Dark Side of the Moon'?", a: "Pink Floyd", p: 300 },
            { q: "Chi ha composto 'Il Barbiere di Siviglia'?", a: "Gioachino Rossini", p: 300 },
            { q: "Chi ha scritto 'Le Quattro Stagioni'?", a: "Vivaldi", p: 400 },
            { q: "Quale strumento suonava Charlie Parker?", a: "Sassofono", p: 400 },
            { q: "Chi è il frontman dei Rolling Stones?", a: "Mick Jagger", p: 400 },
            { q: "Quale opera di Mozart è rimasta incompiuta?", a: "Requiem", p: 500 },
            { q: "Chi ha composto 'L'arte della fuga'?", a: "J.S. Bach", p: 500 },
            { q: "Chi è il compositore della colonna sonora di 'Nuovo Cinema Paradiso'?", a: "Ennio Morricone", p: 500 }
        ]
    },
    {
        id: "sports",
        title: "Sport",
        questions: [
            { q: "Quanti minuti dura un tempo di basket NBA?", a: "12", p: 100 },
            { q: "Chi detiene il record mondiale dei 100m?", a: "Usain Bolt", p: 100 },
            { q: "In quale sport si usa il termine 'ace'?", a: "Tennis (o Volley)", p: 100 },
            { q: "In quale sport si gareggia per la 'Coppa America'?", a: "Vela", p: 200 },
            { q: "Chi ha vinto più Champions League?", a: "Real Madrid", p: 200 },
            { q: "Quanti giocatori compongono una squadra di basket in campo?", a: "5", p: 200 },
            { q: "In che anno si sono svolte le prime Olimpiadi moderne?", a: "1896", p: 300 },
            { q: "Quanti giocatori in campo ci sono nel volley?", a: "6", p: 300 },
            { q: "Quale ciclista era soprannominato 'Il Pirata'?", a: "Marco Pantani", p: 300 },
            { q: "Dove si corre la '24 Ore' automobilistica più famosa?", a: "Le Mans", p: 400 },
            { q: "Chi ha vinto il mondiale F1 2021?", a: "Max Verstappen", p: 400 },
            { q: "Quanti tempi ci sono in una partita di football americano?", a: "4", p: 400 },
            { q: "Chi detiene il record di Slam vinti nel tennis maschile?", a: "Djokovic", p: 500 },
            { q: "In che anno l'Italia vinse il suo primo mondiale di calcio?", a: "1934", p: 500 },
            { q: "In quale città si trova lo stadio di tennis di Wimbledon?", a: "Londra", p: 500 }
        ]
    },
    {
        id: "philosophy",
        title: "Filosofia",
        questions: [
            { q: "Chi disse 'So di non sapere'?", a: "Socrate", p: 100 },
            { q: "Chi fu l'allievo di Socrate e maestro di Aristotele?", a: "Platone", p: 100 },
            { q: "Chi fu il maestro di Alessandro Magno?", a: "Aristotele", p: 200 },
            { q: "Chi disse 'Cogito ergo sum'?", a: "Cartesio", p: 200 },
            { q: "Chi scrisse 'Così parlò Zarathustra'?", a: "Nietzsche", p: 300 },
            { q: "Chi è l'autore del 'Leviatano'?", a: "Thomas Hobbes", p: 300 },
            { q: "Chi è l'autore de 'Il Capitale'?", a: "Karl Marx", p: 400 },
            { q: "Quale filosofo è associato al pessimismo cosmico?", a: "Schopenhauer", p: 400 },
            { q: "Chi formulò l'imperativo categorico?", a: "Immanuel Kant", p: 500 },
            { q: "Chi scrisse 'Essere e Tempo'?", a: "Martin Heidegger", p: 500 }
        ]
    },
    {
        id: "videogames",
        title: "Videogiochi",
        questions: [
            { q: "Come si chiama l'idraulico baffuto della Nintendo?", a: "Mario", p: 100 },
            { q: "In quale gioco si deve sopravvivere a dei blocchi cadenti?", a: "Tetris", p: 100 },
            { q: "Qual è il gioco più venduto di sempre?", a: "Minecraft", p: 200 },
            { q: "Chi è il protagonista della saga 'The Legend of Zelda'?", a: "Link", p: 200 },
            { q: "In che anno è uscito il primo PlayStation?", a: "1994", p: 300 },
            { q: "Come si chiama il protagonista di 'God of War'?", a: "Kratos", p: 300 },
            { q: "Quale azienda produce la console Xbox?", a: "Microsoft", p: 400 },
            { q: "Come si chiama la città in cui è ambientata la serie 'BioShock'?", a: "Rapture (o Columbia)", p: 400 },
            { q: "Chi è il creatore della serie 'Metal Gear Solid'?", a: "Hideo Kojima", p: 500 },
            { q: "In che anno è stato lanciato il primo gioco di 'Pokémon' in Giappone?", a: "1996", p: 500 }
        ]
    },
    {
        id: "chemistry",
        title: "Chimica",
        questions: [
            { q: "Qual è la formula dell'acqua?", a: "H2O", p: 100 },
            { q: "Qual è il gas nobile più leggero?", a: "Elio", p: 100 },
            { q: "Quanti protoni ha un atomo di Carbonio?", a: "6", p: 200 },
            { q: "Qual è il simbolo chimico del Ferro?", a: "Fe", p: 200 },
            { q: "Chi ha inventato la dinamite?", a: "Alfred Nobel", p: 300 },
            { q: "Cosa misura la scala del pH?", a: "Acidità/Basicità", p: 300 },
            { q: "Qual è il numero atomico dell'Uranio?", a: "92", p: 400 },
            { q: "Come si chiama il legame chimico basato sulla condivisione di elettroni?", a: "Covalente", p: 400 },
            { q: "Quale elemento ha la più alta elettronegatività?", a: "Fluoro", p: 500 },
            { q: "Chi propose la legge delle proporzioni definite?", a: "Joseph Proust", p: 500 }
        ]
    },
    {
        id: "astronomy",
        title: "Astronomia",
        questions: [
            { q: "Qual è la stella più vicina alla Terra?", a: "Sole", p: 100 },
            { q: "Qual è il pianeta più grande del sistema solare?", a: "Giove", p: 100 },
            { q: "Come si chiama la nostra galassia?", a: "Via Lattea", p: 200 },
            { q: "In che anno l'uomo è sbarcato sulla Luna?", a: "1969", p: 200 },
            { q: "Cosa significa l'acronimo NASA?", a: "National Aeronautics and Space Administration", p: 300 },
            { q: "Qual è il pianeta del sistema solare con gli anelli più visibili?", a: "Saturno", p: 300 },
            { q: "Come si chiama l'effetto per cui la luce delle galassie lontane si sposta verso il rosso?", a: "Redshift", p: 400 },
            { q: "Chi ha scoperto i quattro satelliti principali di Giove?", a: "Galileo Galilei", p: 400 },
            { q: "Qual è la distanza media Terra-Sole (definita come Unità Astronomica)?", a: "150 milioni di km", p: 500 },
            { q: "Cos'è un 'buco nero' al centro di cui la densità è infinita?", a: "Singolarità", p: 500 }
        ]
    },
    {
        id: "tvseries",
        title: "Serie TV",
        questions: [
            { q: "In quale città è ambientata la serie 'I Simpson'?", a: "Springfield", p: 100 },
            { q: "Come si chiama il protagonista di 'Breaking Bad'?", a: "Walter White", p: 100 },
            { q: "Quante stagioni ha la serie 'Friends'?", a: "10", p: 200 },
            { q: "Chi ha scritto i libri da cui è tratta la serie 'Game of Thrones'?", a: "George R.R. Martin", p: 200 },
            { q: "Come si chiama l'isola di 'Lost'?", a: "L'Isola", p: 300 },
            { q: "In quale serie TV compare il personaggio di Eleven?", a: "Stranger Things", p: 300 },
            { q: "Qual è il titolo originale della serie 'La casa di carta'?", a: "La casa de papel", p: 400 },
            { q: "Chi interpreta Sherlock Holmes nella serie BBC del 2010?", a: "Benedict Cumberbatch", p: 400 },
            { q: "Quale serie TV è ambientata nella cittadina fittizia di Twin Peaks?", a: "I segreti di Twin Peaks", p: 500 },
            { q: "In quale serie TV si segue la vita della famiglia Shelby a Birmingham?", a: "Peaky Blinders", p: 500 }
        ]
    }
];
