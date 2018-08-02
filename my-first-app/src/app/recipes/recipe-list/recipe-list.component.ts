import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];

  // inject our service, provide it on the parent component
  constructor(private recipeService: RecipeService) { }
  // here to get the recipes
  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

 
}
