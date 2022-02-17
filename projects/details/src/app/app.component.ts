import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {InstructionsService} from './instructions.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent implements OnInit{
  instructionData: any = [];
  ingredientData: any = [];
  instructionSteps: any = [];

  constructor(private instructionsService: InstructionsService) {
  }

  ngOnInit() {
    window.addEventListener('message', (message: any) => {
      if (message.origin == 'http://localhost:4202') {
        console.log('Details App got message from List App');
        console.log(message.data);
        this.getInstructions(message.data);
      } else if (message.origin == 'http://localhost:4204') {
        console.log('Details App got message from Similar App');
        console.log(message.data);
        this.getInstructions(message.data);
      }
      ;
    });
  }

  getInstructions(id: string) {
    this.instructionsService.getInstructions(id).subscribe(res => {
      console.log(res);
      this.instructionData = res;
      this.ingredientData = this.instructionData.extendedIngredients;
      this.instructionSteps = this.instructionData.analyzedInstructions[0].steps;
      console.log(this.instructionSteps);
    });
  }

  goBack(){
    const parentApp = window.parent;
    parentApp.postMessage('Back from Details App', '*');
  }
}
