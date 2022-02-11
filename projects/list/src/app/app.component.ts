// declare const window: any;
import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {HttpClient} from "@angular/common/http";
import {RecipeService} from './recipe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  recipeData: any = [];
  missedIngredients: any = [];
  filterTerm: string = '';
  // isShowing: boolean = false;
  random: boolean = true;

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit() {

    this.getRandomRecipes();
    window.addEventListener('message', (message: any) => {
      // if (message.origin == 'http://localhost:4201') {
      //   console.log('ListApp got message from Header App');
      //   this.isShowing = !this.isShowing;
      if (message.origin == 'http://localhost:4205') {
        console.log('ListApp got message from Selection App');
        this.getIngredientRecipes(message.data);
      }
      ;
    });
  }

  getRandomRecipes() {
    this.recipeService.getRandomRecipes().subscribe((res: any) => {
      this.recipeData = res.recipes;
    });
  }

  getIngredientRecipes(ingredients: string) {
    this.random = false;
    this.recipeService.getRecipesByIngredients(ingredients).subscribe((res: any) => {
      this.recipeData = res;

      res.find((res2: any) => {
        this.missedIngredients = res2.missedIngredients;
      });
    });
    // this.isShowing = !this.isShowing;
  }

  getRecipeDetails(id: any){
    console.log('Recipe Id is: '+id);
    const parentApp = window.parent;
    parentApp.frames[3].postMessage(id, 'http://localhost:4203');
    parentApp.postMessage(id, 'http://localhost:4200');
  }
}


