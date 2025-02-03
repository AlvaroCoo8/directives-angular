import { Component } from '@angular/core';

@Component({
  selector: 'app-components-directive-else',
  standalone: false,
  
  templateUrl: './directive-else.component.html',
  styleUrl: './directive-else.component.css'
})

export class DirectiveElseComponent {
  public title: string = 'Directive IF-ELSE Component';
  public versionOld: string = 'by <17v';
  public versionLatest: string = 'by >=17v';

  public boolLoginOld: boolean = false;
  public boolLoginLatest: boolean = false;

  public loginOld(): void {
    this.boolLoginOld = true;
    this.boolLoginLatest = false;
  }

  public loginLatest(): void {
    this.boolLoginLatest = true;
    this.boolLoginOld = false;
  }
}
