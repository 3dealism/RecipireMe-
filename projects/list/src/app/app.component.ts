import {ChangeDetectorRef, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {HttpClient} from "@angular/common/http";
import {RecipeService} from './recipe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent implements OnInit {
  random: boolean = true;
  recipeData: any = [];
  missedIngredients: any = [];
  filterTerm: string = '';

  constructor(private recipeService: RecipeService, private cd: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.getRandomRecipes();
    // window.addEventListener('showIngredientRecipes', this.customEventListenerFunctionShowIngredientRecipes.bind(this), true);
  }

  getRandomRecipes() {
    this.recipeService.getRandomRecipes().subscribe((res: any) => {
      this.recipeData = res.recipes;
    });

  }

  getIngredientRecipes(ingredients: string) {
    this.recipeService.getRecipesByIngredients(ingredients).subscribe((res: any) => {
      this.recipeData = res;

      res.find((res2: any) => {
        this.missedIngredients = res2.missedIngredients;
      });
    });
    this.random = false;
  }

  getRecipeDetails(id: any) {
    const data = {
      action: id
    };
    // const event = new CustomEvent('showDetailsMFE', {detail: data});
    // window.dispatchEvent(event);
  }

  // customEventListenerFunctionShowIngredientRecipes(event: any) {
  //   this.getIngredientRecipes(event.detail.action);
  //   this.cd.detectChanges();
  // }

  // ngOnDestroy(): void {
  //   window.removeEventListener('showIngredientRecipes', this.customEventListenerFunctionShowIngredientRecipes, true);
  // }
}
