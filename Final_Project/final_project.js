function sayHello() {
    const userInput = document.getElementById("user-input").value;
    const message = `Hello, ${userInput}!`;
    alert(message);
}

class X {
    constructor(name){
        this.name = name;
        this.next = null;
    }
}

class List {
    constructor(){
        this.head = null;
    }

 addName(name){
    const node = new X (name);
    if (!this.head){
        this.head = node;
    }
    else {
        let current_x = this.head;
        while(current_x.next){
            current_x = current_x.next;
        }
        current_x.next = node;
    }
}
 searchname(name){
    let current_x = this.head;
    while (current_x){
        if(current_x === name){
            return current_x.name;
        }
        current_x = current_x.next;
    }
    return null;
  }
}

const list = new List();

document.addEventListener("DOMContentLoaded",function() {
    const input = document.getElementById("name-input")
    const para = document.getElementById("output")

input.addEventListener("keypress", function (event){
    if (event.key == "Enter") {
        const name = input.value.trim();
        if (name){
            list.addName(name);
            input.value = "";
        }
    }
});
document.getElementById("search-button").addEventListener("click",function(){
    const searchName = input.value.trim();
     if(searchName) {
        const found = list.searchname(searchName);
        if(found){
            para.textContent = `found:${found}`;
        }
        else{
            para.textContent = `Not found: ${searchName}`;

        }
     }
   });
});
