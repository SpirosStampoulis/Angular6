import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

// because also service is a typescript class
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    // private to be inside the component
    private recipes: Recipe[] = [
        new Recipe('A test recipe', 'this is a test',
        'https://img.bestrecipes.com.au/rZFo7F8i/h300-w400-cscale-1495077669/br-api/asset/20771/super-easy-pizza-dough-recipe.jpg'),
        new Recipe('Another test recipe', 'this is the second test' ,
        'https://img.bestrecipes.com.au/rZFo7F8i/h300-w400-cscale-1495077669/br-api/asset/20771/super-easy-pizza-dough-recipe.jpg')
      ];

      // to return this array
      getRecipes() {
          // get access from outside slice to get a copy for the array
        return this.recipes.slice();
    }

}
