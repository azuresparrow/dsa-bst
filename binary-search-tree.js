const { database } = require("pg/lib/defaults");

class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    let current = this.root;
    let newNode = new Node(val);
    while(true) {
      if(current == null) {
        this.root = newNode;
        return this;
      } 
      if(current.val > val){ // go left
        if(current.left == null){
          current.left = newNode; 
          return this;
        } else { // further left
          current = current.left;
        }
      } else { //go right
        if(current.right == null){
          current.right = newNode; 
          return this;
        } else { // further right
          current = current.right;
        }
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, node = this.root) {
    if(this.root === null){
      this.root = new Node(val);
      return this;
    }

    if(node.val > val){
      if(node.left === null) {
        node.left = new Node(val);
        return this;
      }
      return this.insertRecursively(val, node.left);
    } else {
      if(node.right === null) {
        node.right = new Node(val);
        return this;
      }
      return this.insertRecursively(val, node.right);
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let current = this.root;
    while(current) {
      if(current.val === val) return current;
      current = val > current.val ? current.right : current.left;
    }
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, node = this.root) {
    if(node === null) return undefined;
    if(node.val === val) return node;
    return val > node.val ? this.findRecursively(val, node.right) : this.findRecursively(val, node.right);
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    let visit = [];
    function traverse(node) {
      visit.push(node.val);
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
    }
    traverse(this.root);
    return visit;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let visit = [];
    function traverse(node) {
      if(node.left) traverse(node.left);
      visit.push(node.val);
      if(node.right) traverse(node.right);
    }
    traverse(this.root);
    return visit;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let visit = [];
    function traverse(node) {
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
      visit.push(node.val);
    }
    traverse(this.root);
    return visit;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let visit = [];
    let queue = [];

    queue.push(this.root);

    while(queue.length){
      let node = queue.shift();
      visit.push(node.val);
      if(node.left) queue.push(node.left);
      if(node.right) queue.push(node.right);
    }
    return visit;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
