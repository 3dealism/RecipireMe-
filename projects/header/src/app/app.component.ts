import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  ngOnInit(): void {
  }

  openSelectionMF(){

    const parentApp = window.parent;
    parentApp.frames[1].postMessage('FromHeaderApp', 'http://localhost:4202');
  }
}
