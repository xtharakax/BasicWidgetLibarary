import {Component, ElementRef, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'xt-widget',
  template: `
    <input type="text" (keydown.enter)="printText($event.target.value)">
      <div #ref_content [hidden]="true">
          <ng-content></ng-content>
      </div>
      <div [innerHTML]="textString"></div>
  `,
  styles: ['.mark{background-color:red}'],
  encapsulation: ViewEncapsulation.None
})
export class WidgetComponent implements OnInit {

  @ViewChild('ref_content', null) contentElement: ElementRef;

  textString: string;

  constructor() {
  }

  ngOnInit() {
    this.textString = this.contentElement.nativeElement.textContent;
    console.log(this.textString);

  }

  printText(value: any) {
    this.textString = this.textString.replace(new RegExp(value, 'g'), `<span class="mark">${value}</span>`);
  }
}
