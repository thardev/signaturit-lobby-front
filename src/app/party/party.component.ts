import { Component, EventEmitter, ElementRef, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'party',
  templateUrl: './party.component.html',
  styleUrls: ['./party.component.sass']
})
export class PartyComponent {

  @Input() partyName: string;
  @ViewChild('contract') contractInput: ElementRef;
  @Output() updatePartyData = new EventEmitter();

	validatorPoints = {
		'K': 5,
		'N': 2,
		'V': 1,
	};
  partyPoints: number = 0;

  addValidator(validator: string): void {
    this.contractInput.nativeElement.value = `${this.contractInput.nativeElement.value}${validator}`;
    let contractInputValue = this.contractInput.nativeElement.value;
    let points = 0;
    let contractInputValuesArray = contractInputValue.split("");

    contractInputValuesArray.map((value) => {
      if (value === 'V' && contractInputValue.includes('K')) {
        return;
      }

      points += this.validatorPoints[value];
    });

    this.partyPoints = points;
    this.updatePartyData.emit({ "partyName": this.partyName, "points": points, "contract":  contractInputValue });
  }

}
