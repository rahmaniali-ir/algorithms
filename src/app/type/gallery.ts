export interface Category {
  id: string;
  name: string;
  icon: string;
}

export interface Project {
  icon: string;
  name: string;
  description: string;
  id: string;
  category?: Category;
}
