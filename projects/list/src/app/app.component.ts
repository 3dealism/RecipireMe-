declare const window: any;
import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
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
  isShowing: boolean = false;
  random: boolean = true;

  constructor(private recipeService: RecipeService, private cd: ChangeDetectorRef) {
  }

  ngOnInit() {

    this.getRandomRecipes();
    // this.getIngredientRecipes('rice, lemongras, shrimps');
    window.addEventListener('message', (message: any) => {
      if (message.origin == 'http://localhost:4201') {
        this.isShowing = !this.isShowing;
      } else if (message.origin == 'http://localhost:4205') {
        console.log('Got message from Selection App');
        console.log(message.data);
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
      console.log(this.recipeData);

      res.find((res2: any) => {
        this.missedIngredients = res2.missedIngredients;
        console.log(this.missedIngredients);
      });
    });
    this.isShowing = !this.isShowing;
  }
}


