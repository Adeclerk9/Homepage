
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
    breadth.push(x.value);
    breadth_search(x.left);
    breadth_search(x.right);

}

depth_search(leaf);
breadth_search(leaf);

console.log(breadth);
console.log(depth);

const para_1 = document.getElementById('depth');
const para_2 = document.getElementById('breadth');

for (i = 0; i < depth.length; ++i) {
    let li = document.createElement('li');
    li.innerHTML = depth[i];
    para_1.appendChild(li);

}

for (i = 0; i < breadth.length; ++i) {
    let li = document.createElement('li');
    li.innerHTML = breadth[i];
    para_2.appendChild(li);

}
