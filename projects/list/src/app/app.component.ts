import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {HttpClient} from "@angular/common/http";
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  recipeData: any = [];
  filterTerm: string = '';

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit() {
    this.getRandomRecipes();
  }

  getRandomRecipes() {
    this.recipeService.getRandomRecipes().
      subscribe(res => {
        this.recipeData = res;
    });
  }
  
  getIngredientRecipes(ingredients: string) {
    this.recipeService.getRecipesByIngredients(ingredients).
    subscribe(res => {
      this.recipeData = res;
    });
  }

}
