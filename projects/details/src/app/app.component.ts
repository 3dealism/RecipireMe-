import {ChangeDetectorRef, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {InstructionsService} from './instructions.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent implements OnInit{
  instructionData: any = [];
  ingredientData: any = [];
  instructionSteps: any = [];

  constructor(private instructionsService: InstructionsService, private cd:ChangeDetectorRef) {
  }

  ngOnInit() {
    window.addEventListener('showDetailsMFE', this.customEventListenerFunctionShowDetails.bind(this), true);
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
    const event = new CustomEvent('showListMFEFromDetails', {detail: 'BackFromDetails'});
    window.dispatchEvent(event);
  }

  customEventListenerFunctionShowDetails(event:any){
    this.getInstructions(event.detail.action);
    this.cd.detectChanges();
  }

  ngOnDestroy(): void {
    window.removeEventListener('showDetailsMFE', this.customEventListenerFunctionShowDetails, true);
  }
}
