// 1022. Sum of Root To Leaf Binary Numbers



// You are given the root of a binary tree where each node has a value 0 or 1. Each root-to-leaf path represents a binary number starting with the most significant bit.

// For example, if the path is 0 -> 1 -> 1 -> 0 -> 1, then this could represent 01101 in binary, which is 13.
// For all leaves in the tree, consider the numbers represented by the path from the root to that leaf. Return the sum of these numbers.

// The test cases are generated so that the answer fits in a 32-bits integer.




/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumRootToLeaf = function(root) {
    
    let sum = 0; //sum will += parstin of bit and 2 (sum += parseInt(path + root.val, 2);)
    //call dfs with roo and empty string

    dfs(root, "")

    return sum
   // return sum

    function dfs(node, currentPath){
        if(!node){
            return
        }

        if(!node.left && !node.right){
            sum += parseInt(currentPath + node.val, 2)  //if not left and not right then add our path and root  to sum iwht parseint
            return  //return
        }

        dfs(node.left, currentPath + node.val) //  dsf lfet update path + root
        dfs(node.right, currentPath + node.val)
        
        

  
    //dfs right path -+root

    // traverse left and right
    }

    return sum
};