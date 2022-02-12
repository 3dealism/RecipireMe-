import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SimilarService {

  constructor(private http: HttpClient) {
  }

  getSimilarRecipes(id: any) {
    const apiKey1: string = '0a7aabbd334340e087d31aec47066664';
    const apiKey2: string = '08d14161381a4eaeba54ac6f0d7b5c03';
    const apiKey3: string = 'ad5226484d654ede992c64bec0f5efd0';
    const url = 'https://api.spoonacular.com/recipes/'+id+'/similar?apiKey=' + apiKey3;
    return this.http.get(url);
  }
}
