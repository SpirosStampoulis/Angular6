import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
    ingredientChanged = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
      ];
    //   same like recipe
      getIngredients() {
        //   we can remove the slice to update the ingredients when press the add button
          return this.ingredients;
      }
      addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        // to get our original ingredient
        this.ingredientChanged.emit(this.ingredients.slice());
    }
}
