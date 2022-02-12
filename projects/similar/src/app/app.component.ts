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
    window.addEventListener('message', (message: any) => {
      if (message.origin == 'http://localhost:4202') {
        console.log('SimilarApp got message from ListApp');
        this.getSimilarRecipes(message.data);
      }
      ;
    });
  }

  getSimilarRecipes(id: any) {
    this.similarService.getSimilarRecipes(id).
    subscribe(res => {
      console.log(res);
      this.similarRecipeData = res;
    });
  }

  getRecipeDetails(id: any){
    const parentApp = window.parent;
    parentApp.frames[3].postMessage(id, 'http://localhost:4203');
  }
}
