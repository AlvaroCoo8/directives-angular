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

  public displayText: string | null = null;

  public toggleText(text: string): void {
    this.displayText = this.displayText === text ? null : text;
  }
}
