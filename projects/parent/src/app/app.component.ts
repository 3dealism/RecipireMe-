import {loadRemoteModule} from '@angular-architects/module-federation';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {Router} from "@angular/router";
import {LookupService} from './plugins/lookup.service';
import {PluginOptions} from './plugins/plugin';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  @ViewChild('putStuffHere', {read: ViewContainerRef}) putStuffHere: any;
  isShowing: boolean = false;

  constructor(private cd: ChangeDetectorRef, private router: Router, private lookupService: LookupService,
              public compResolver: ComponentFactoryResolver) {
  }

  //  ngAfterViewInit(): void {
  //   const HeaderComponent  =  loadRemoteModule({
  //     remoteEntry: 'http://localhost:4201/header.js',
  //     type: 'module',
  //     exposedModule: './AppComponent',
  //   });
  //    // @ts-ignore
  //    const factory: ComponentFactory = this.compResolver.resolveComponentFactory(HeaderComponent);
  //   this.putStuffHere.createComponent(factory);
  //
  //
  // }




        ngOnInit(): void {
          window.addEventListener('openSideNav', this.customEventListenerFunctionOpenSideNav.bind(this), true);
          window.addEventListener('showListMFE', this.customEventListenerFunctionShowListMFE.bind(this), true);
          window.addEventListener('showListMFEFromDetails', this.customEventListenerFunctionShowListMFEFromDetails.bind(this), true);
          window.addEventListener('showDetailsMFE', this.customEventListenerFunctionShowDetailsMFE.bind(this), true);
          window.addEventListener('showIngredientRecipes', this.customEventListenerFunctionShowListMFE.bind(this), true);
        }


        showDetailsMFE()
        {
          const listApp: any = document.getElementById('list-app');
          const detailsApp: any = document.getElementById('details-app');
          const similarApp: any = document.getElementById('similar-app');
          listApp.style.display = 'none';
          detailsApp.style.display = 'block';
          similarApp.style.display = 'block';
        }

        showListMFE()
        {
          const listApp: any = document.getElementById('list-app');
          const detailsApp: any = document.getElementById('details-app');
          const similarApp: any = document.getElementById('similar-app');
          if (detailsApp.style.display !== 'none' && similarApp.style.display !== 'none') {
            detailsApp.style.display = 'none';
            similarApp.style.display = 'none';
            listApp.style.display = 'block';
          }
        }

        customEventListenerFunctionOpenSideNav(event
      :
        any
      )
        {
          this.isShowing = !this.isShowing;
          this.cd.detectChanges();
        }


        customEventListenerFunctionShowListMFE(event
      :
        any
      )
        {
          this.isShowing = !this.isShowing;
          this.showListMFE();
          this.cd.detectChanges();
        }

        customEventListenerFunctionShowListMFEFromDetails(event
      :
        any
      )
        {
          this.showListMFE();
          this.cd.detectChanges();
        }

        customEventListenerFunctionShowDetailsMFE(event
      :
        any
      )
        {
          this.showDetailsMFE();
          this.cd.detectChanges();
        }

      }
