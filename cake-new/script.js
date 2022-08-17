var flavours={
    Chocolate:200,
    Strawberry:400,
    Butterscotch:600,
    Vanilla:800,
    Redvelvet:1000,
};
var state={
    Chocolate:true,
    Strawberry:true,
    Butterscotch:true,
    Vanilla:true,
    Redvelvet:true
};

var a=0,b=0,c=0,d=0,e=0,count=0,total=0;

function renderChocolate(){
    let chocobtn=document.querySelector(".Chocolate");
    if (state.Chocolate) {
      count+=1;
      a=count;
      document.querySelector(`#layer${count}`).style.display = "block";
      document.querySelector(`#layer${count}`).style.backgroundColor="brown";
      document.getElementById("item1").style.display="block";
      total+=flavours.Chocolate;
    } 
    else {
      
      document.querySelector(`#layer${a}`).style.display = "none";
      chocobtn.style.padding='5px';
      document.getElementById("item1").style.display="none";   
      count-=1;   
      total-=flavours.Chocolate;
    } 
}
function renderStrawberry(){
    let strbtn=document.querySelector(".Strawberry");
    if (state.Strawberry) {
      count+=1;
      b=count;
      document.querySelector(`#layer${count}`).style.display = "block";
      document.querySelector(`#layer${count}`).style.backgroundColor="red";
      document.getElementById("item2").style.display="block";
      total+=flavours.Strawberry;
    } 
    else {
      
      document.querySelector(`#layer${b}`).style.display = "none";
      strbtn.style.padding='5px';
      document.getElementById("item2").style.display="none";   
      count-=1;   
      total-=flavours.Strawberry;
    }  
}
function renderButterscotch(){
    let btsbtn=document.querySelector(".Butterscotch");
    if (state.Butterscotch) {
      count+=1;
      c=count;
      document.querySelector(`#layer${count}`).style.display = "block";
      document.querySelector(`#layer${count}`).style.backgroundColor="lightyellow";
      document.getElementById("item3").style.display="block";
      total+=flavours.Butterscotch;
    } 
    else {
      
      document.querySelector(`#layer${c}`).style.display = "none";
      btsbtn.style.padding='5px';
      document.getElementById("item3").style.display="none";   
      count-=1;   
      total-=flavours.Butterscotch;
    } 
}
function renderVanilla(){
    let vanbtn=document.querySelector(".Vanilla");
    if (state.Vanilla) {
      count+=1;
      d=count;
      document.querySelector(`#layer${count}`).style.display = "block";
      document.querySelector(`#layer${count}`).style.backgroundColor="white";
      document.getElementById("item4").style.display="block";
      total+=flavours.Vanilla;
    } 
    else {
      
      document.querySelector(`#layer${d}`).style.display = "none";
      vanbtn.style.padding='5px';
      document.getElementById("item4").style.display="none";   
      count-=1;   
      total-=flavours.Vanilla;
    } 
}
function renderRedvelvet(){
    let revbtn=document.querySelector(".Redvelvet");
    if (state.Redvelvet) {
      count+=1;
      e=count;
      document.querySelector(`#layer${count}`).style.display = "block";
      document.querySelector(`#layer${count}`).style.backgroundColor="darkred";
      
      document.getElementById("item5").style.display="block";
      total+=flavours.Redvelvet;
    } 
    else {
      
      document.querySelector(`#layer${e}`).style.display = "none";
      revbtn.style.padding='5px';
      document.getElementById("item5").style.display="none";   
      count-=1;   
      total-=flavours.Redvelvet;
    } 
}
document.querySelector(".Chocolate").onclick = function () {
    renderChocolate();
    state.Chocolate = !state.Chocolate;
};
document.querySelector(".Strawberry").onclick = function () {
    renderStrawberry();
    state.Strawberry = !state.Strawberry;
};
document.querySelector(".Butterscotch").onclick = function () {
    renderButterscotch();
    state.Butterscotch = !state.Butterscotch;
};
document.querySelector(".Vanilla").onclick = function () {
    renderVanilla();
    state.Vanilla = !state.Vanilla;
};
document.querySelector(".Redvelvet").onclick = function () {
    renderRedvelvet();
    state.Redvelvet = !state.Redvelvet;
};
document.querySelector(".Buy").onclick = function () {
    document.getElementById('item6').innerHTML="Total -------------------------- "+total;
    document.getElementById('candle').style.display="block";
};