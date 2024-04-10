let user_score=0;
let computer_score=0;
const choices=document.querySelectorAll(".choice");
let para=document.querySelector("#msg");
let usc=document.querySelector("#user-score");
let csc=document.querySelector("#computer-score");
//-------computer generates choice
const computerChoice=(uchoice)=>{
    const array=["rock","paper","scissors"];
    const opt=Math.floor(Math.random()*3);
    const cchoice=array[opt];
    game(uchoice,cchoice);
};
winner=(result,uchoice,cchoice)=>{
    if(result){
        user_score++;
        para.innerText=`You Won! your ${uchoice} beats ${cchoice}`;
        para.style.backgroundColor = 'green';
        usc.innerText=user_score;
    }
    else{
        computer_score++;
        para.innerText=`You Lost! ${cchoice} beats your ${uchoice}`;
        para.style.backgroundColor = 'red';
        csc.innerText=computer_score;
    }
};
draw=()=>{
    para.innerText="It is a Draw";
    para.style.background="black";
};
const game=(uchoice,cchoice)=>{
    if(uchoice===cchoice){
        draw();
    }
    else{
    let result=true;
    if(uchoice==="rock"){
        //computer choice may be scissors or paper.
        result=cchoice==="scissors"?true:false; 
    }
    else if(uchoice==="paper"){
        //computer choice may be rock or scissors.
        result=cchoice==="rock"?true:false; 
    }
    else if(uchoice==="scissors"){
        //computer choice may be paper or rock.
        result=cchoice==="paper"?true:false;
    }
    winner(result,uchoice,cchoice);
    }
};
//--------getting the choice of user--------
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const uchoice=choice.getAttribute("id");
        computerChoice(uchoice);
    })
})