import { Component, EventEmitter, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'header-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{

  ngOnInit(): void {
  }

  openSelectionMF(){
    const event = new CustomEvent('openSideNav', {detail: 'SideNav opened from Header'});
    window.dispatchEvent(event);
  }
}
