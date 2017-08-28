function invertTree(tree) {
  if (tree) {
    if (tree.left || tree.right) {
      let temp = tree.left;
      tree.left = tree.right;
      tree.right = temp;
      invertTree(tree.left);
      invertTree(tree.right);
    }
  }
  return tree;
}

module.exports = invertTree;
