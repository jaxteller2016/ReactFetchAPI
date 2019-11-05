import  React  from  'react';

const  GenerateQuote = ({ selectEmployee }) => {
    return (
        <div  className="GenerateEmployee">
            <button  onClick={selectEmployee}>Interogate</button>
        </div>
    );
};

export  default  GenerateQuote;

