let button=document.querySelector('button');
let Email=document.getElementById("mail");
let EmailList=['libertykrsk@nalsci.com','jayarcollado2010@scdhn.com','pathfinderplatoon@wpadye.com',
'slavik3246@pfmretire.com','cherniks@eloltsf.com','lexa123@hasevo.com', 'jadynha@noisemails.com'];
let verifier=0;
let Ver_ris=document.getElementById("Ver_ris");
let vincitore=document.getElementById("il_vin");

button.addEventListener("click", function(){
    for(let i = 0; i < EmailList.length; i++ ){
        if(EmailList[i]==Email.value){
            verifier = 1;
        }
    }
    if( verifier == 1 ){
        Ver_ris.innerHTML="Sei uno dei nostri utenti";
    }
    else{
        Ver_ris.innerHTML="Sei un intruso";
    }

})


Inizio:
let user_num=Math.floor((Math.random() * 6)+1);
let comp_num=Math.floor((Math.random() * 6)+1);

if(user_num<comp_num){
    vincitore.innerHTML="Ha vinto il Computer";
}
else if(user_num>comp_num){
    vincitore.innerHTML="Ha vinto il User";
}
else{
    console.log("rifacciamo tutto");
    continue Inizio;
}