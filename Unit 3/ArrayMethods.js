let blankarr = [];
var notes =["ello","erbert","umphry"]
let arr =[];

function blankarrPush() {
    const inputE= document.getElementById('name');
    const text = inputE.value;
    blankarr.push(text);
    updateParagraph();
    inputE.value = '';
}
function blankarrPop(){
    const inputE= document.getElementById('name');
    const bad = blankarr.pop()
    updateParagraph();
    inputE.value = '';
}

function blankarrShift(){
    const inputE= document.getElementById('name');
    const shift = blankarr.shift()
    updateParagraph();
    inputE.value = '';
}

function blankarrUnshift(){
    const inputE= document.getElementById('name');
    const text = inputE.value;
    blankarr.unshift(text);
    updateParagraph();
    inputE.value = '';
}


function updateParagraph() {
    const outputP = document.getElementById('demo');
    outputP.innerHTML = '';
    blankarr.forEach(function(item, index) {
        outputP.innerHTML += index+". "+item+'<br>';
    });
}
function arrMap(){
        arr = blankarr.map((value,index)=> {
        return index+"."+'A'+value;     
   });
     console.log(arr);
}

console.log(notes);
//console.log(arr);




















