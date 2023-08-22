let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
    {
        quote: "Nëse mund ta ëndërrosh, mund ta bësh",
        person: 'Walt Disney'
    },
    {
        quote: "Mënyra më e mirë për të zbuluar se çfarë dëshironi në jetë është të provoni shumë gjëra.",
        person: 'Oprah Winfrey'
    },
    {
        quote: "Rruga drejt suksesit është gjithmonë në ndërtim e sipër",
        person: 'Lily Tomlin'
    },
    {
        quote: "Nëse doni të jetoni një jetë të lumtur, lidheni atë me një qëllim, jo me njerëzit ose gjërat.",
        person: 'Albert Einstein'
    },
    {
        quote: "Unë mund të pranoj dështimin, të gjithë dështojnë në diçka. Por nuk mund të pranoj të mos përpiqem.",
        person: 'Michael Jordan'
    },
    {
        quote: "Një udhëtim prej një mijë milje fillon me një hap të vetëm",
        person: 'Lao Tzu'
    },
    {
        quote: "Unë nuk mund të ndryshoj drejtimin e erës, por mund të rregulloj lundrimet e mia për të arritur gjithmonë në destinacionin tim.",
        person: 'Jimmy Dean'
    },
    {
        quote: "Gjërat më të mira dhe më të bukura në botë nuk mund të shihen ose të dëgjohen, por duhet të ndjehen me zemër.",
        person: 'Helen Keller'
    },
    {
        quote: "Ti jeton vetëm njëherë, por nëqoftëse jeton siç duhet, njëherë është mjaftueshëm.",
        person: 'Mae West'
    },
    {
        quote: "Mendjet e mëdha diskutojnë idetë; Mendjet mesatare diskutojnë ngjarjet; Mendjet e vogla diskutojnë njerëzit.",
        person: 'Eleanor Roosevelt'
    },
    {
        quote: "Hakmarrja më e mirë është suksesi masiv.",
        person: 'Frank Sinatra'
    },
    {
        quote: "Njëzet vjet nga tani ju do të zhgënjeheni më shumë nga gjërat që nuk keni bërë sesa nga ato që keni bërë.",
        person: 'Mark Twain'
    },
    {
        quote: "Jeta është 10 përqind ajo që ju ndodh dhe 90 përqind se si i përgjigjeni.",
        person: 'Charles Swindoll'
    },
    {
        quote: "Ata që nuk mund të kujtojnë të kaluarën janë të dënuar ta përsërisin atë.",
        person: 'George Santayana'
    }
]
btn.addEventListener('click', ()=>{
    let randomquote = Math.floor(Math.random()*quotes.length);
    quote.innerHTML = quotes[randomquote].quote;
    person.innerHTML = quotes[randomquote].person;
})