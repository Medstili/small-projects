const changeButton = document.querySelector('#change-btn');
const quoteParagraph = document.querySelector('.quotes');
const authorSpan = document.querySelector('.author');
const addressSpan = document.querySelector('.address');
const bodyBgColor = document.querySelector('body');



const quotesArray =[
    {
        quote : '"When the mind has once begun to yield to the weakness of superstition, trifles impress it with the force of conviction."',
        author : 'Ann Radcliffe (1764 - 1823)',
        address : 'The Mysteries of Udolpho, 1764'
    }, 
    {
        quote : '"Truly successful decision making relies on a balance between deliberate and instinctive thinking".',
        author :'Malcolm Gladwell',
        address:'Blink: The Power of Thinking Without Thinking, 2005'
    },
    {
        quote : '"When two men in business always agree, one of them is unnecessary."',
        author :'William Wrigley Jr. (1861 - 1932)',
        address:''
    },
    {
        quote : '"It is better to have loved and lost than never to have lost at all."',
        author :'Samuel Butler (1835 - 1902)',
        address:'The Way of All Flesh, Chapter 77'
    },
    {
        quote : '"Get your facts first, and then you can distort them as much as you please."',
        author :'Mark Twain (1835 - 1910)',
        address:''
    },
    {
        quote : '"The only obligation to which in advance we may hold a novel, without incurring the accusation of being arbitrary, is that it be interesting."',
        author :'Henry James (1843 - 1916)',
        address:''
    },
    {
        quote : '"One of the indictments of civilizations is that happiness and intelligence are so rarely found in the same person."',
        author :'William Feather (1908 - 1976)',
        address:''
    },
    {
        quote : '"Time is an illusion. Lunchtime doubly so."',
        author :'Douglas Adams (1952 - 2001)',
        address:''
    },
    {
        quote : '"Those who face that which is actually before them, unburdened by the past, undistracted by the future, these are they who live, who make the best use of their lives; these are those who have found the secret of contentment."',
        author :'Alban Goodier',
        address:''
    },
    {
        quote : '"Too much of a good thing is wonderful."',
        author :'Mae West (1892 - 1980)',
        address:''
    },
    {
        quote : '"Good habits, which bring our lower passions and appetites under automatic control, leave our natures free to explore the larger experiences of life."',
        author :'Ralph W. Sockman',
        address:''
    },
    {
        quote : '"Truth is tough. It will not break, like a bubble, at a touch; nay, you may kick it about all day like a football, and it will be round and full at evening."',
        author :'Oliver Wendell Holmes (1809 - 1894)',
        address:''
    },
    {
        quote : '"Truth indeed rather alleviates than hurts, and will always bear up against falsehood, as oil does above water."',
        author :'Miguel de Cervantes (1547 - 1616)',
        address:''
    },
    {
        quote : '"I used to dread getting older because I thought I would not be able to do all the things I wanted to do, but now that I am older I find that I dont want to do them."',
        author :'Nancy Astor (1879 - 1964)',
        address:''
    },
];

changeButton.addEventListener('click', ()=>{
    changeQuote();
    changeColors();
});


function changeQuote() {
    let randomQuote =Math.floor(Math.random()*quotesArray.length);
    let quote = quotesArray[randomQuote];
    quoteParagraph.innerHTML= quote.quote;
    authorSpan.innerHTML = quote.author;
    addressSpan.innerHTML = quote.address;
    return
};


function changeColors() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random()* 256);
    let blue = Math.floor(Math.random()* 256);
    let _backgroundColor = `rgb(${red}, ${green}, ${blue})`; 
     bodyBgColor.style.backgroundColor=_backgroundColor;
   
 return 
}

function autoChange() {
    changeQuote();
    changeColors();
};

window.setInterval(autoChange, 15000);
