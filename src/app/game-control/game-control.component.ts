import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() intervalFired = new EventEmitter<number>();
  interval: any;
  initialNumber: number = 0;
  constructor() { }

  ngOnInit() {
  }

  onStartGame() {
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.initialNumber + 1);
      this.initialNumber++;
    }, 1000);
  }
  onPauseGame() {
    clearInterval(this.interval);
  }
}
