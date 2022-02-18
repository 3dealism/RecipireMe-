import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  isShowing: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
    window.addEventListener('openSideNav', this.customEventListenerFunctionOpenSideNav.bind(this), true);
    window.addEventListener('showListMFE', this.customEventListenerFunctionShowListMFE.bind(this), true);
    window.addEventListener('showListMFEFromDetails', this.customEventListenerFunctionShowListMFEFromDetails.bind(this), true);
    window.addEventListener('showDetailsMFE', this.customEventListenerFunctionShowDetailsMFE.bind(this), true);
    window.addEventListener('showIngredientRecipes', this.customEventListenerFunctionShowListMFE.bind(this), true);
  }

  showDetailsMFE() {
    const listApp: any = document.getElementById('list-app');
    const detailsApp: any = document.getElementById('details-app');
    const similarApp: any = document.getElementById('similar-app');
    listApp.style.display = 'none';
    detailsApp.style.display = 'block';
    similarApp.style.display = 'block';
  }

  showListMFE() {
    const listApp: any = document.getElementById('list-app');
    const detailsApp: any = document.getElementById('details-app');
    const similarApp: any = document.getElementById('similar-app');
    if (detailsApp.style.display !== 'none' && similarApp.style.display !== 'none') {
      detailsApp.style.display = 'none';
      similarApp.style.display = 'none';
      listApp.style.display = 'block';
    }
  }

  customEventListenerFunctionOpenSideNav(event: any) {
    this.isShowing = !this.isShowing;
  }

  customEventListenerFunctionShowListMFE(event: any) {
    this.isShowing = !this.isShowing;
    this.showListMFE();
  }

  customEventListenerFunctionShowListMFEFromDetails(event: any) {
    this.showListMFE();
  }

  customEventListenerFunctionShowDetailsMFE(event: any) {
    this.showDetailsMFE();
  }

}
