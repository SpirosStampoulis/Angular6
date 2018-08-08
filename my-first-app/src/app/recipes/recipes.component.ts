import { Component, OnInit } from '@angular/core';
// we dont use it anymore
// import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  // we dont use it anymore
  // selectedRecipe: Recipe;

  // Also this
  // all recipe component use the same instance
  // constructor(private recipeService: RecipeService) { }
  constructor() { }


  ngOnInit() {


    // we dont use this subscription anymore
    // to setup my listener
  //   this.recipeService.recipeSelected.subscribe(
  //     // argument list
  //     (recipe: Recipe) => {
  //       // to get the same recipe from event
  //       this.selectedRecipe = recipe;
  //     }
  //   );
  }

}
