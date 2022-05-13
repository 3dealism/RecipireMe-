import {loadRemoteModule} from '@angular-architects/module-federation';
import {
  AfterContentInit,
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {Router} from "@angular/router";
import {registry} from './registry';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterContentInit {

  isShowing: boolean = false;

  constructor(private cd: ChangeDetectorRef, private router: Router) {
  }


  ngOnInit(): void {
    window.addEventListener('openSideNav', this.customEventListenerFunctionOpenSideNav.bind(this), true);
    window.addEventListener('showListMFE', this.customEventListenerFunctionShowListMFE.bind(this), true);
    window.addEventListener('showListMFEFromDetails', this.customEventListenerFunctionShowListMFEFromDetails.bind(this), true);
    window.addEventListener('showDetailsMFE', this.customEventListenerFunctionShowDetailsMFE.bind(this), true);
    window.addEventListener('showIngredientRecipes', this.customEventListenerFunctionShowListMFE.bind(this), true);
  }

  async ngAfterContentInit(): Promise<void> {
    await registry.header();
    await registry.list();
    await registry.selection();
    await registry.details();
    await registry.similar();
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
    this.cd.detectChanges();
  }


  customEventListenerFunctionShowListMFE(event: any) {
    this.isShowing = !this.isShowing;
    this.showListMFE();
    this.cd.detectChanges();
  }

  customEventListenerFunctionShowListMFEFromDetails(event: any) {
    this.showListMFE();
    this.cd.detectChanges();
  }

  customEventListenerFunctionShowDetailsMFE(event: any) {
    this.showDetailsMFE();
    this.cd.detectChanges();
  }

}
