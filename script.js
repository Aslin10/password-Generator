
const outputElement=document.querySelector('#output');
const btnCopy=document.querySelector('#btnCopy');
const frm=document.querySelector('#frm');
const capitalElement=document.querySelector('#capital');
const smallElement=document.querySelector('#small');
const symbol=document.querySelector('#symbol');
const numberElement=document.querySelector('#number');
const passwordLength=document.querySelector('#passLength');

btnCopy.addEventListener('click',async()=>{
const pass=outputElement.value;
if(pass){
    await navigator.clipboard.writeText(pass);
    alert("password copied");
}else{
    alert("there is no password");
}
    
});


function numberValue(){
    let numbers="0123456789"
    return numbers[(Math.floor(Math.random()*numbers.length))];

}
function capitalValue(){
    let capitalLetter="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    return capitalLetter[(Math.floor(Math.random()*capitalLetter.length))];
}
function smallValue(){
    let smallLetter="abcdefghijklmnopqrstuvwxyz"
    return smallLetter[(Math.floor(Math.random()*smallLetter.length))];
}

function symbolValue(){
    let symbols="~!@#$%^&*()_+-=|\}]{[:;,";
    return symbols[(Math.floor(Math.random()*symbols.length))];
}
const functionArray=[
   {element:numberElement,
    fun:numberValue
},
    {element:capitalElement,
        fun:capitalValue
    },
    
 {element:smallElement,
            fun:smallValue
        },
        
{element:symbol,
                fun:symbolValue
            }
            
            

        ];


frm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const len=passwordLength.value;
    let generatedPassword="";
    const funArray=functionArray.filter(({element})=>element.checked);
    
    
    for(var i=0;i<len;i++){
        const index=Math.floor(Math.random()*funArray.length);
        const letter=funArray[index].fun();
        generatedPassword+=letter;


    }

outputElement.value=generatedPassword;
});