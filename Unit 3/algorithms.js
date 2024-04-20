
class Leaf {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

let leaf = new Leaf(5);

leaf.left = new Leaf(1);
leaf.right = new Leaf(2);

leaf.left.left = new Leaf(3);
leaf.left.right = new Leaf(4);

leaf.right.left = new Leaf(0);
leaf.right.right = new Leaf(6);

leaf.left.left.left = new Leaf(7);
leaf.left.left.right = new Leaf(8);

leaf.right.right.left = new Leaf(9);
leaf.right.right.right = new Leaf(10);

let breadth = [];
let depth = [];

function depth_search(x) {
    if (x === null) return;
    depth.push(x.value);
    depth_search(x.left);
    depth_search(x.right);

}
function breadth_search(x) {
    if (x === null) return;

    let y = [x];
    while (y.length> 0){
      let current_x = y.shift();

      breadth.push(current_x.value);
          if(current_x.left !== null)
      y.push(current_x.left);
          if(current_x.right !== null)
      y.push(current_x.right);
    }
}

function depthPush(){
    depth_search(leaf)
    const para_1 = document.getElementById('depth');
    for (i = 0; i < depth.length; ++i) {
        let li = document.createElement('li');
        li.innerHTML = depth[i];
        para_1.appendChild(li);
    
    }
}
function breadthPush() {
    breadth_search(leaf)
    const para_2 = document.getElementById('breadth');
    for (i = 0; i < breadth.length; ++i) {
        let li = document.createElement('li');
        li.innerHTML = breadth[i];
        para_2.appendChild(li);
    
    }  
}

console.log(breadth);
console.log(depth);


for (i = 0; i < breadth.length; ++i) {
    let li = document.createElement('li');
    li.innerHTML = breadth[i];
    para_2.appendChild(li);

}
