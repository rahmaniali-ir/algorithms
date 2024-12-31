import { Customizable } from '../core/type/customizable';
import { Category } from '../types/category';

export interface Project extends Customizable {
  icon: string;
  name: string;
  description: string;
  id: string;
  category: Category;
  component: any;
}
