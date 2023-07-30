let eq = document.getElementById('eqq');
let bu=document.querySelectorAll('button');
let string="";
Array.from(bu).forEach(button => {
    button.addEventListener('click', (e) => {
         console.log(e.target);
        if(e.target.innerHTML == '='){
            eq.value = eval(eq.value.replaceAll("÷", "/").replaceAll("−", "-").replaceAll("×", "*"));
        }
        else if(e.target.innerHTML == 'AC'){
            eq.value="";
        }
        else if(e.target.innerHTML == '⌫'){
            eq.value=eq.value.substring(0,eq.value.length-1)
        }
        else{
            eq.value+=e.target.innerHTML;
        }
        eq.value+=string;
        string="";
    })
})