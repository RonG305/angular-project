import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Counter } from './components/counter/counter';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Counter],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-project');
}
