import { Component, OnInit } from '@angular/core';
import { SimilarService } from './similar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  similarRecipeData: any = [];

  constructor(private similarService: SimilarService) {
  }

  ngOnInit() {
    this.getSimilarRecipes();
  }

  getSimilarRecipes() {
    this.similarService.getSimilarRecipes().
    subscribe(res => {
      console.log(res);
      this.similarRecipeData = res;
    });
  }
}
