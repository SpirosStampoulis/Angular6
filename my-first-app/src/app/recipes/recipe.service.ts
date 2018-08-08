// import { EventEmitter, Injectable } from '@angular/core';
import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

// inject service in to the service
@Injectable()

// because also service is a typescript class
export class RecipeService {
    // we dont use it anymore
    // recipeSelected = new EventEmitter<Recipe>();
    // private to be inside the component
    private recipes: Recipe[] = [
        // add one more for ingredients[]
        new Recipe('A test recipe',
        'this is a test',
        'https://img.bestrecipes.com.au/rZFo7F8i/h300-w400-cscale-1495077669/br-api/asset/20771/super-easy-pizza-dough-recipe.jpg',
        [new Ingredient('meat', 1)]),
        new Recipe('Another test recipe', 'this is the second test' ,
        'https://img.bestrecipes.com.au/rZFo7F8i/h300-w400-cscale-1495077669/br-api/asset/20771/super-easy-pizza-dough-recipe.jpg',
        [new Ingredient('meat', 10)])
      ];

      constructor(private slService: ShoppingListService) { }

      // to return this array
      getRecipes() {
          // get access from outside slice to get a copy for the array
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngrediensToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}
