import { Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'header-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent implements OnInit{

  ngOnInit(): void {
  }

  openSelectionMF(){
    // const parentApp = window.parent;
    // parentApp.postMessage('FromHeaderApp', 'http://localhost:4200');
  }
}
