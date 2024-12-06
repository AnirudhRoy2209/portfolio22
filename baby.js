let doggy=document.querySelectorAll(".kutta");
let resetbtn=document.querySelector("#reset");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let nbtn=document.querySelector("#newbtn");
let first0=true;
const winpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
doggy.forEach((kutta) => {
    kutta.addEventListener("click", ()=>{
        console.log("box was clicked");
        if(first0){
            kutta.innerText="O";
        first0=false;
        }
        else{
            kutta.innerText="X";
            first0=true;
        }
        kutta.disabled=true;
        checkwinner();
    });
});
const disableboxes=()=>{
    for(let kutta of doggy){
        kutta.disabled=true;
    }
}

const enableboxes=()=>{
    for(let kutta of doggy){
       kutta.disabled=false;
        kutta.innerText=""; 
    }
}

const resetgame=()=>{
    first0=true;
    enableboxes();
    msgcontainer.classList.add("chupa");
}

const showwinner=(winny)=>{
    msg.innerText=`Congratulations! Winner is ${winny}`;
    msgcontainer.classList.remove("chupa");
    disableboxes();
} 

const checkwinner=()=>{
    for(pattern of winpattern){
       let pos1val=doggy[pattern[0]].innerText;
       let pos2val=doggy[pattern[1]].innerText;
       let pos3val=doggy[pattern[2]].innerText;
       
       if(pos1val!=""&& pos2val!=""&& pos3val!=""){
        if(pos1val===pos2val && pos2val===pos3val){
            console.log("winny");
            showwinner(pos1val);
        }
       }
    }
};
nbtn.addEventListener("click", resetgame);
resetbtn.addEventListener("click", resetgame);
