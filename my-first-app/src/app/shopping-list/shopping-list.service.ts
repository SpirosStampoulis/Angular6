import { Ingredient } from '../shared/ingredient.model';
// we can remove it
// import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

export class ShoppingListService {
    // ingredientChanged = new EventEmitter<Ingredient[]>();
    // better to use subject
    ingredientChanged = new Subject<Ingredient[]>();

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
        // this.ingredientChanged.emit(this.ingredients.slice());
        // need to call next insead of emit
        this.ingredientChanged.next(this.ingredients.slice());

    }

    addIngredients(ingredients: Ingredient[]) {
    //     for (let ingredient of ingredients) {
    //         this.addIngredient(ingredient);
    //     }
    // array of elements to list of elements sread operator ...
    this.ingredients.push(...ingredients);
    // need to emit so we need a copy
    // this.ingredientChanged.emit(this.ingredients.slice());
    // same here
    this.ingredientChanged.next(this.ingredients.slice());

    }
}
