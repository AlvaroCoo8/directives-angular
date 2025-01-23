import { Component } from '@angular/core';

@Component({
  selector: 'app-components-counter',
  standalone: false,

  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  public counter: number = 0;

  public increaseBy(value: number): void {
    this.counter += value;
  }

  public reset(value: number): void {
    this.counter = value;
  }
}
