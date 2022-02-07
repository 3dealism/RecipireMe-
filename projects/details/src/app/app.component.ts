import { Component } from '@angular/core';
import { InstructionsService } from './instructions.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  instructionData: any = [];
  ingredientData: any = [];
  instructionSteps: any = [];

  constructor(private instructionsService: InstructionsService) {
  }

  ngOnInit() {
    this.getInstructions();
  }

  getInstructions() {
    this.instructionsService.getInstructions().
    subscribe(res => {
      console.log(res);
      this.instructionData = res;
      this.ingredientData = this.instructionData.extendedIngredients;
      this.instructionSteps = this.instructionData.analyzedInstructions[0].steps;
      console.log(this.instructionSteps);
    });
  }
}
