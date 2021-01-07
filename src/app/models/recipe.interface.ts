export class RecipeModel {
  id: number;
  title: string;
  description: string;
  picture: any;
  created_at: Date;
  ingredients: [];
  favoriteState: boolean;
}
