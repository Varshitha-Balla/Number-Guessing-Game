const Min=1;
const Max =100;
Random_Answer = Math.floor(Math.random()*Max-Min+1)+Min;
//console.log(Random_Answer);

let attempts=0;
let user_ans=false;
while(!user_ans){
    let User_Guessed_Answer = window.prompt(`Enter your guessed number between the range of ${Min} and ${Max}`);
    User_Guessed_Answer=Number(User_Guessed_Answer);
    if(User_Guessed_Answer==NaN){
        window.alert("Enter Valid number");
    }
    else if(User_Guessed_Answer>Max || User_Guessed_Answer<Min){
        window.alert("Enter Valid number");
    }
    else{
        attempts=Number(attempts);
        attempts++;
        if(User_Guessed_Answer>Random_Answer) {
            window.alert("Your Number is Too high to be true");
        }
        else if(User_Guessed_Answer<Random_Answer) {
            window.alert("Your Number is Too Low to be true");
        }
        else{
            window.alert(`Congratulations!! Your Number ${User_Guessed_Answer} matches the answer!!! And it took you ${attempts} attempt(s) to be correct.`)
            user_ans=true;
        }
    }
}
