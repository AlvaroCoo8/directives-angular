import { Component } from '@angular/core';

@Component({
  selector: 'app-components-directive',
  standalone: false,

  templateUrl: './directive.component.html',
  styleUrl: './directive.component.css',
})
export class DirectiveComponent {
  public title: string = 'Directive IF Component';

  public pNgIf: string = 'Working with *ngIf';
  public pIf: string = 'Working with @if';

  public pVNgIF: string = 'Text displayed with ngIf directive';
  public pVIF: string = 'Text displayed with If directive';

  public displayTextNgIf: boolean = false;
  public displayTextIf: boolean = false;

  public toggleTextNgIf(text: string) {
    this.displayTextNgIf = !this.displayTextNgIf;
    this.displayTextIf = false;
  }

  public toggleTextIf(text: string) {
    this.displayTextIf = !this.displayTextIf;
    this.displayTextNgIf = false;
  }
}
