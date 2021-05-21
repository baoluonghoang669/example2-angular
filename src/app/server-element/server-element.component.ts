import { Component, DoCheck, AfterContentInit, Input, OnChanges, OnInit, SimpleChanges, ViewEncapsulation, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ElementRef, ViewChild, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated //None, Native
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit, OnDestroy {
  @Input('srvElement') element: { name: string, type: string, content: string }
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;
  constructor() {
    // console.log('constructor called');

  }
  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    // console.log('ngOnChanges called');
    // console.log(changes);
  }

  ngOnInit() {
    // console.log('ngOnInit called');
    // console.log('Text content:' + this.header.nativeElement.textContent);
    // console.log('Text content of paragraph:' + this.paragraph.nativeElement.textContent);
  }

  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    // console.log('ngDoCheck called');
  }

  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Called once
    //Add 'implements AfterContentInit' to the class.
    // console.log('ngAfterContentInit called');
    // console.log('Text content of paragraph:' + this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked(): void {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    // console.log('ngAfterContentChecked called');
  }

  ngAfterViewChecked(): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    // console.log('ngAfterViewChecked called');
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    // console.log('ngAfterViewInit called');
    // console.log('Text content:' + this.header.nativeElement.textContent);

  }

  ngOnDestroy() {
    // console.log('ngOnDestroy called');
  }
}
