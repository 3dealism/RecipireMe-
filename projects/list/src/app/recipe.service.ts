import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  apiKey1: string = '0a7aabbd334340e087d31aec47066664';
  apiKey2: string = '08d14161381a4eaeba54ac6f0d7b5c03';
  apiKey3: string = 'ad5226484d654ede992c64bec0f5efd0';

  constructor(private http: HttpClient) {
  }

  getRandomRecipes() {
    const url = 'https://api.spoonacular.com/recipes/random?apiKey=' + this.apiKey3 + '&number=120';
    return this.http.get(url);
  }

  getRecipesByIngredients(ingredients: string) {
    const url: string = 'https://api.spoonacular.com/recipes/findByIngredients?apiKey=' + this.apiKey3 + '&number=90&ranking=2&ingredients=' + ingredients;
    return this.http.get(url);
  }
}
