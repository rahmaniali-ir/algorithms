import { Customizable } from './customizable';
import { Category } from './category';

export interface Algorithm extends Customizable {
  icon: string;
  name: string;
  description: string;
  id: string;
  category: Category;
  component: any;
}
