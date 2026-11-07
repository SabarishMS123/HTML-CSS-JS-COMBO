
function playGame(userChoice) {
    const choice= Math.floor(Math.random() * 100) + 1;
    let result="";
    if(userChoice===choice){
        result=`You won ${userChoice} is equal to ${choice}`
    }
    else if(userChoice>choice){
        result=`Thinking Higher !`
    }
    else if(userChoice<choice){
       result=`Thinking Lower !`
    }
    document.getElementById("textcontent").textContent=result;

}