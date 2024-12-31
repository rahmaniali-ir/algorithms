import { TreeNode, TreeNodeAddress } from '@type/tree';

export class Tree<T = any> {
  private root: TreeNode = {
    address: [],
    parent: undefined,
    children: [],
    siblings: [],
  };
  private _levels = 0;

  constructor(rootData?: T) {
    this.root.data = rootData;
  }

  get levels() {
    return this._levels;
  }

  getLevel(level: number = 0) {
    let levelNodes = [this.root];

    for (let i = 0; i < level; i++) {
      const children: TreeNode[] = [];

      levelNodes.forEach((node) => {
        children.push(...node.children);
      });

      levelNodes = children;
    }

    return levelNodes.length ? levelNodes : undefined;
  }

  getNode(address: TreeNodeAddress) {
    let nodePointer = this.root;

    for (let childIndex of address) {
      if (nodePointer.children[childIndex])
        nodePointer = nodePointer.children[childIndex];
      else return undefined;
    }

    return nodePointer;
  }

  addNode(address: TreeNodeAddress, name?: string, data?: T) {
    const node = this.getNode(address);
    if (!node) {
      throw new Error(`Node does not exist! at [${address.toString()}]`);
    }
    if (node.children.length >= 2) {
      throw new Error(
        `Node [${address.toString()}] already has reached maximum of 2 children!`
      );
    }

    const childLength = node.children.length;

    node.children.push({
      address: [...address, childLength],
      parent: node,
      name,
      siblings: [...node.children],
      children: [],
      data,
    });

    this._levels = Math.max(this._levels, address.length);
  }
}
