import { Component, ViewChild, ElementRef } from '@angular/core';
import { LobbywarsService } from './lobbywars.service';
import { Party } from './party';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  parties: Array<Party> = [];
  lobbyService: LobbywarsService;
  @ViewChild("winnerHistory", { read: ElementRef }) winnerHistory: ElementRef;

  constructor(lobbyService: LobbywarsService) {
    this.lobbyService = lobbyService;
    this.parties.push(new Party('party1', 0, ''));
    this.parties.push(new Party('party2', 0, ''));
  }

  setPartyData(event): void {
    this.parties.map((party) => {
      if (party.name === event.partyName) {
        party.points = event.points;
        party.contract = event.contract;
      }
    });
  }

  trialStart() {
    let partiesData = [];
    this.parties.map((party) => {
      let partyObject = {name : party.name, contract: party.contract};
      partiesData.push(partyObject);
    });

    this.lobbyService.performTrial(partiesData).subscribe((result) => {
      let p = document.createElement("P");
      let text: any;
      switch (result['winner']) {
        case 1:
          text = document.createTextNode(`${this.parties[0].name} (${this.parties[0].points} points) has won to ${this.parties[1].name} (${this.parties[1].points} points)`);
          p.appendChild(text);
          break;
        case 2:
          text = document.createTextNode(`${this.parties[1].name} (${this.parties[1].points} points) has won to ${this.parties[0].name} (${this.parties[0].points} points)`);
          p.appendChild(text);
          break;
        default:
          text = document.createTextNode(`It's a draw`);
          p.appendChild(text);
          break;
      }
      this.winnerHistory.nativeElement.prepend(p);
    });
  }
}
