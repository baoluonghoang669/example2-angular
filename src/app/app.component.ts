import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{ type: 'server', name: 'Testserver', content: 'Just a test!' }];
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];
  value: number = 10; //demo ngSwitch
  onServerAdded(serverData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent,
    })
  }
  onBlueprintAdded(serverData: { blueprintName: string, blueprintContent: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: serverData.blueprintName,
      content: serverData.blueprintContent,
    })
  }
  onChangeFirst() {
    this.serverElements[0].name = "Changed!";
  }
  onDestroyFirst() {
    this.serverElements.splice(0, 1);
  }

  startGame(intervalNumber: number) {
    if (intervalNumber % 2 === 0) {
      this.evenNumbers.push(intervalNumber)
    } else {
      this.oddNumbers.push(intervalNumber);

    }
  }
}
