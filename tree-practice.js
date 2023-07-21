const { BinarySearchTree, TreeNode } = require("./binary-search-tree.js");
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST(rootNode) {
  if (!rootNode) return null;

  while (rootNode.left) {
    rootNode = rootNode.left;
  }
  return rootNode.value;
}

function findMaxBST(rootNode) {
  if (!rootNode) return null;

  while (rootNode.right) {
    rootNode = rootNode.right;
  }
  return rootNode.value;
}

function findMinBT(rootNode) {
  const queue = [rootNode];

  let min = rootNode.value

  while (queue.length) {
    const currentNode = queue.shift();

    if (min > currentNode.value) min = currentNode.value;

    if (currentNode.left) {
      queue.push(currentNode.left);
    }
    if (currentNode.right) {
      queue.push(currentNode.right);
    }
  }
  return min;
}

function findMaxBT(rootNode) {
  const queue = [rootNode];

  let max = rootNode.value

  while (queue.length) {
    const currentNode = queue.shift();

    if (max < currentNode.value) max = currentNode.value;

    if (currentNode.left) {
      queue.push(currentNode.left);
    }
    if (currentNode.right) {
      queue.push(currentNode.right);
    }
  }
  return max;
}

function getHeight(rootNode) {
  if (!rootNode) return -1

  if (!rootNode.left && !rootNode.right) return 0

    let leftHeight = getHeight(rootNode.left)
    let rightHeight = getHeight(rootNode.right)

    return 1 + Math.max(leftHeight, rightHeight)
}

function balancedTree(rootNode) {
  // Your code here
  if(!rootNode){
    return true;
  }

  let leftHeight = getHeight(rootNode.left)
  let rightHeight = getHeight(rootNode.right) 

  if(Math.abs(leftHeight - rightHeight) > 1){
    return false;
  }
  return balancedTree(rootNode.left) && balancedTree(rootNode.right);

  
}

function countNodes(rootNode) {
  // Your code here
  if(!rootNode){
    return 0;
  }
  if(!rootNode.left && !rootNode.right){
    return 1;
  }

  let countLeft = countNodes(rootNode.left);
  let countRight = countNodes(rootNode.right);
  return 1 + countLeft + countRight;
}

function getParentNode(rootNode, target) {
  // Your code here
  if(!rootNode){
    return undefined;
  }
  if(rootNode.value === target){
    return null;
  }
  if((rootNode.left && rootNode.left.value === target) || (rootNode.right && rootNode.right.value === target)){
    return rootNode
  }

  if(rootNode.left){
    let leftParent = getParentNode(rootNode.left, target);
    if(leftParent){
      return leftParent;
    }
  }
  if(rootNode.right){
    let rigthParent = getParentNode(rootNode.right, target);
    if(rigthParent){
      return rigthParent;
    }
    return undefined;
  }
}

function inOrderPredecessor(rootNode, target) {
  // Your code here
}

function deleteNodeBST(rootNode, target) {
  // Do a traversal to find the node. Keep track of the parent
  // Undefined if the target cannot be found
  // Set target based on parent
  // Case 0: Zero children and no parent:
  //   return null
  // Case 1: Zero children:
  //   Set the parent that points to it to null
  // Case 2: Two children:
  //  Set the value to its in-order predecessor, then delete the predecessor
  //  Replace target node with the left most child on its right side,
  //  or the right most child on its left side.
  //  Then delete the child that it was replaced with.
  // Case 3: One child:
  //   Make the parent point to the child
}

module.exports = {
  findMinBST,
  findMaxBST,
  findMinBT,
  findMaxBT,
  getHeight,
  countNodes,
  balancedTree,
  getParentNode,
  inOrderPredecessor,
  deleteNodeBST,
};
