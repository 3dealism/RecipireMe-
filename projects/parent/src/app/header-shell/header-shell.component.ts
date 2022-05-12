import {
  Component,
  OnInit,
  ComponentFactoryResolver,
  ViewContainerRef,
  ComponentRef,
  ViewChild,
} from '@angular/core';
import { loadRemoteModule } from '@angular-architects/module-federation';

@Component({
  selector: 'header-mfe',
  templateUrl: './header-shell.component.html',
  styleUrls: ['./header-shell.component.css'],
})
export class HeaderShellComponent implements OnInit {

  @ViewChild('placeHolder', {read: ViewContainerRef, static: true})
  viewContainer!: ViewContainerRef;

  constructor(
    private cfr: ComponentFactoryResolver,
    private vcref: ViewContainerRef
  ) {
  }

  async ngOnInit() {
    const {HeaderComponent} = await loadRemoteModule({
      remoteEntry: 'http://localhost:4201/header.js',
      type: 'module',
      exposedModule: './AppComponent',
    });
    this.vcref.createComponent(HeaderComponent);
  }
}
