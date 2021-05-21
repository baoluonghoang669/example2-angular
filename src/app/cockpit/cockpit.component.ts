import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output() blueprintCreated = new EventEmitter<{ blueprintName: string, blueprintContent: string }>();
  // newServerName: string = '';
  // newServerContent: string = '';
  @ViewChild('serverNameInput') serverNameInput: ElementRef;
  @ViewChild('serverContentInput') serverContentInput: ElementRef; //access element DOM
  constructor() { }

  ngOnInit() {
  }

  // onAddServer(nameInput: HTMLInputElement, contentInput: HTMLInputElement) {
  //   this.serverCreated.emit({
  //     serverName: nameInput.value,
  //     serverContent: contentInput.value,
  //   })
  // }
  onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value,
    })
  }
  // onAddBlueprint(nameInput: HTMLInputElement, contentInput: HTMLInputElement) {
  //   this.blueprintCreated.emit({
  //     blueprintName: nameInput.value,
  //     blueprintContent: contentInput.value,
  //   })
  // }
  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      blueprintName: nameInput.value,
      blueprintContent: this.serverContentInput.nativeElement.value,
    })
  }

}
