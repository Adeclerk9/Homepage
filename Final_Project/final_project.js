function sayHello() {
    const userInput = document.getElementById("user-input").value;
    const message = `Hello, ${userInput}!`;
    alert(message);
}

class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    add(data) {
      const newNode = new Node(data);
      if (!this.head) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
      }
    }
  
    printToHTML(ulElementId) {
      const ulElement = document.getElementById(ulElementId);
      ulElement.innerHTML = ''; 
  
      let current = this.head;
      while (current) {
        const liElement = document.createElement('li');
        liElement.textContent = current.data;
        ulElement.appendChild(liElement);
        current = current.next;
      }
    }
  }
  
  const nameList = new LinkedList();
  
  function addName(event) {
    event.preventDefault();
    const nameInput = document.getElementById('nameInput');
    const name = nameInput.value.trim();
    if (name) {
      nameList.add(name);
      nameList.printToHTML('nameList');
      nameInput.value = ''; 
    }
  }
  
  const form = document.getElementById('nameForm');
  form.addEventListener('submit', addName);
  
  
  document.addEventListener("click", function () {
    console.log("The document was clicked!");
  });