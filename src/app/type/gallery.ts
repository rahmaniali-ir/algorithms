import { Customizable } from '../core/type/customizable';

export interface Category {
  id: string;
  name: string;
  icon: string;
}

export interface Project extends Customizable {
  icon: string;
  name: string;
  description: string;
  id: string;
  category: Category;
  component: any;
}
