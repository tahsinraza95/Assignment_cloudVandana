var output = document.getElementById("output-screen");
var buttons = document.getElementsByClassName("btn");
var operator = null;
var oper1 = 0;
var oper2 = null; 




for (var i=0 ; i <buttons.length;i++){
    buttons[i].addEventListener('click',function(){
        var value = this.getAttribute('data-value');
        if(value == '='){
            try {
                let out = eval(output.innerText);
                output.innerText = out;
            } catch (error) {
                output.innerText = error ;
            }
            
        }
        else if(value=='%'){
            oper1 = parseFloat(output.textContent);
            output.innerText = oper1/100;
        }
        else if(value=='+/-'){
            if(output.innerText<0){
                output.innerText = eval("-1" * output.innerText);
            }else{
                output.innerText = "-" + output.innerText;
            }
        }else if(value=='AC'){
            oper1 = 0;
            output.innerText = "";
        }else{
            output.innerText += value;
        }
    });
}
