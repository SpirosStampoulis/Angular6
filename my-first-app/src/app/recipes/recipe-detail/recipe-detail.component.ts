// import { Component, OnInit, Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  // @Input() recipe: Recipe;
  recipe: Recipe;
  id: number;

  // add route for routing to recieve the id
  constructor(private recipeService: RecipeService,
  private route: ActivatedRoute,
  private router: Router) { }


  // recieving the id for routing
  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipe = this.recipeService.getRecipe(this.id);
      }
    );
  }

  // to pass the ingredients
  onAddToShoppingList() {
    this.recipeService.addIngrediensToShoppingList(this.recipe.ingredients);
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
    // alternative way
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }
}
