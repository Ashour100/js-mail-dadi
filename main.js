let button=document.querySelector('button');
let Email=document.getElementById("mail");
let EmailList=['libertykrsk@nalsci.com','jayarcollado2010@scdhn.com','pathfinderplatoon@wpadye.com',
'slavik3246@pfmretire.com','cherniks@eloltsf.com','lexa123@hasevo.com', 'jadynha@noisemails.com'];
let verifier=0;
let VerRis=document.getElementById("Ver_ris");
let num_verifica;
let vincitore=document.getElementById("il_vin");


button.addEventListener("click", function(){
    verifier = 0;
    if(Email.value==""){
        alert("non hai inserito niente");
        location.reload();
    }
    for(let i = 0; i < EmailList.length; i++ ){
        if(EmailList[i]==Email.value){
            verifier = 1;
        }
    }
    if( verifier == 1 ){
        VerRis.innerHTML="Sei uno dei nostri utenti";
        do{
            let user_num=Math.floor((Math.random() * 6)+1);
            let comp_num=Math.floor((Math.random() * 6)+1);
            num_verifica=0;
            document.getElementById("user_num").innerHTML=`Il tuo punteggio: ${user_num}`;
            document.getElementById("comp_num").innerHTML=`Il punteggio del computer: ${comp_num}`;
            if(user_num<comp_num){
                vincitore.innerHTML="Ha vinto il Computer";
            }
            else if(user_num>comp_num){
                vincitore.innerHTML="Ha vinto il User";
            }
            else{
                console.log("rifacciamo tutto");
                num_verifica=1;
            }
        }while(num_verifica==1);
    }
    else{
        VerRis.innerHTML="Sei un intruso";
        document.getElementById("user_num").innerHTML="";
        document.getElementById("comp_num").innerHTML="";
        vincitore.innerHTML="";
    }
})


////////////////////////Adding new user
let newUserLink= document.querySelector('#newUserLink');
let existingUserDiv= document.querySelector("#exsisting_user");
let newUserDiv= document.getElementById("new_user");
let newMail= document.getElementById("new_mail");
let addMail=document.querySelector("#Add");

newUserLink.addEventListener("click", function(){
    existingUserDiv.classList.add("d-none");
    newUserDiv.classList.remove("d-none");
})
addMail.addEventListener("click", function(){
    if(newMail.value==""){
        alert("non hai inserito niente");
        location.reload();
    }
    verifier = 0;
    for(let i = 0; i < EmailList.length; i++ ){
        if(EmailList[i]==newMail.value){
            verifier = 1;
        }
    }
    if(verifier==1)
        alert('You are already in our database');
    else if (verifier==0&&!(newMail.value=="")){
        alert("Email registered successfully");
        EmailList.push(newMail.value);
    }
    
    existingUserDiv.classList.remove("d-none");
    newUserDiv.classList.add("d-none");
    console.log(EmailList);
    ///////////reset
    VerRis.innerHTML="";
    document.getElementById("user_num").innerHTML="";
    document.getElementById("comp_num").innerHTML="";
    vincitore.innerHTML="";
    newMail.value="";
})