import {ChangeDetectorRef, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {SimilarService} from './similar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent implements OnInit {

  similarRecipeData: any = [];

  constructor(private similarService: SimilarService, private cd: ChangeDetectorRef) {
  }

  ngOnInit() {
    // window.addEventListener('showDetailsMFE', this.customEventListenerFunctionShowSimilarRecipes.bind(this), true);
  }

  getSimilarRecipes(id: any) {
    this.similarService.getSimilarRecipes(id).subscribe(res => {
      console.log(res);
      this.similarRecipeData = res;
    });
  }

  getRecipeDetails(id: any) {
    const data = {
      action: id
    };
    // const event = new CustomEvent('showDetailsMFE', {detail: data});
    // window.dispatchEvent(event);
  }

  // customEventListenerFunctionShowSimilarRecipes(event: any) {
  //   this.getSimilarRecipes(event.detail.action);
  //   this.cd.detectChanges();
  // }

  // ngOnDestroy(): void {
  //   window.removeEventListener('showDetailsMFE', this.customEventListenerFunctionShowSimilarRecipes, true);
  // }
}
