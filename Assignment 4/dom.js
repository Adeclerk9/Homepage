const div = 0;
var container = document.getElementById("container");
var colorfulParagraph = document.getElementById("colorful");
var parent = colorfulParagraph.parentNode;

for (let i = 0; i < 5; i++) {
    const newParagraph = document.createElement("p");
    const text = document.createTextNode("Hello World");

    newParagraph.appendChild(text);

    parent.insertBefore(newParagraph, colorfulParagraph);

    console.log("test");

}

