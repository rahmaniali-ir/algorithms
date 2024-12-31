import { Customizable } from '@type/customizable';

export type TreeNodeAddress = number[];

export interface TreeNode<T = any> extends Customizable<T> {
  name?: string;
  parent?: TreeNode;
  address: TreeNodeAddress;
  children: TreeNode[];
  siblings: TreeNode[];
}
