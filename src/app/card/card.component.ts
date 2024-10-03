import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  eventData: boolean = true;
  chosenBranch!: string;
  branchCS: boolean = false;
  branchEE: boolean = false;
  branchEC: boolean = false;
  branchME: boolean = false;

  clickEventFunctions() {
    this.eventData = !this.eventData;
  }
  onChangeBranches(event: any) {
    this.chosenBranch = event.target.value;
    if(this.chosenBranch === 'cs') {
      this.branchCS = true;
      this.branchEC = this.branchEE = this.branchME = false;
    }
    else if(this.chosenBranch === 'ee') {
      this.branchEE = true;
      this.branchCS = this.branchEC = this.branchME = false;
    }
    else if(this.chosenBranch === 'ec') {
      this.branchEC = true;
      this.branchCS = this.branchEE = this.branchME = false;
    }
    else if(this.chosenBranch === 'me') {
      this.branchME = true;
      this.branchCS = this.branchEE = this.branchEC = false;
    }
      
  }
}
