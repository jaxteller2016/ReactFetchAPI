import  React  from  'react';

const  DisplayQuote = ({ quote }) => {
    return (
        <div  className="DisplayEmployee">
            <img  src={quote.image}  alt="picture"  />
            <ul>
                <li>
                    Character : {quote.character}
                </li>
                <li>
                    Quote : {quote.quote}
                </li>
            </ul>
        </div>
    );
};

export  default  DisplayQuote;