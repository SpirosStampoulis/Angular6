import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;
  // all recipe component use the same instance
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    // to setup my listener
    this.recipeService.recipeSelected.subscribe(
      // argument list
      (recipe: Recipe) => {
        // to get the same recipe from event
        this.selectedRecipe = recipe;
      }
    );
  }

}
