// Before starting, copy and paste your guided practice work from
// `binary-search-tree.js` into this file

// Your code here

class TreeNode{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
   
}

class BinarySEarchTree{
    constructor(){
        this.root = null;
    }

    insert(value, currentNode = this.root){
        const newNode = new TreeNode(value);
        if(!this.root){
            this.root = newNode;
            return;
        }

        if(value < currentNode.value){
            if(!currentNode.left){
                currentNode.left = newNode;
            }else{
                this.insert(value, currentNode.left);
            }
        }else{
            if(!currentNode.right){
                currentNode.right = newNode;
            }else{
                this.insert(value, currentNode.right);
            }
        }
    }

    search(value){
        let currentNode = this.root;
        while(currentNode){
            if(currentNode.value === value){
                return true;
            }
            if(value < currentNode.value){
                currentNode = currentNode.left;
            }else if(value > currentNode.value){
                currentNode = currentNode.right;
            }
        }
        return false;
    }

    preOrderTraversal(currentNode = this.root){
        if(currentNode){
            console.log(currentNode.value);
            this.preOrderTraversal(currentNode.left);
            this.preOrderTraversal(currentNode.right);
        }
    }

    inOrderTraversal(currentNode = this.root){
        if(currentNode){
            this.inOrderTraversal(currentNode.left);
            console.log(currentNode.value);
            this.inOrderTraversal(currentNode.right);
        }
    }

    postOrderTraversal(currentNode = this.root){
        if(currentNode){
            this.postOrderTraversal(currentNode.left);
            this.postOrderTraversal(currentNode.right);
            console.log(currentNode.value);
        }
    }

    breadthFirstTraversal(){
        const queue = [this.root];
        while(queue.length){
            const currentNode = queue.shift();
            console.log(currentNode.value);
            if(currentNode.left){
                queue.push(currentNode.left);
            }
            if(currentNode.right){
                queue.push(currentNode.right);
            }
        }
    }

    depthFirstTraversal(){
        const stack = [this.root];
        while(stack.length){
            const currentNode = stack.pop();
            console.log(currentNode.value);
            if(currentNode.left){
                stack.push(currentNode.left);
            }
            if(currentNode.right){
                stack.push(currentNode.right);
            }
        }
    }
}

module.exports = {TreeNode, BinarySEarchTree}