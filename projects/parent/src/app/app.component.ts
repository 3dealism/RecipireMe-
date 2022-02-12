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
    window.addEventListener('message', (message: any) => {
      if (message.origin == 'http://localhost:4202') {
        console.log('ParentApp got message from List App');
        this.showDetails();
      } else if (message.origin == 'http://localhost:4201') {
        console.log('ParentApp got message from Header App');
        this.isShowing = !this.isShowing;
      } else if (message.origin == 'http://localhost:4205') {
        console.log('ParentApp got message from Selection App');
        this.isShowing = !this.isShowing;
        this.showList();
      } else if (message.origin == 'http://localhost:4203') {
        console.log('ParentApp got message from Details App');
        this.showList();
      }
    });
  }

  showDetails() {
    const listApp: any = document.getElementById('list-app');
    const detailsApp: any = document.getElementById('details-app');
    const similarApp: any = document.getElementById('similar-app');
    listApp.style.display = 'none';
    detailsApp.style.display = 'block';
    similarApp.style.display = 'block';
  }

  showList() {
    const listApp: any = document.getElementById('list-app');
    const detailsApp: any = document.getElementById('details-app');
    const similarApp: any = document.getElementById('similar-app');
    if(detailsApp.style.display !== 'none' && similarApp.style.display !== 'none') {
      detailsApp.style.display = 'none';
      similarApp.style.display = 'none';
      listApp.style.display = 'block';
    }
  }
}
