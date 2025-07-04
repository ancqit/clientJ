import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from "./components/domain/login/login";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'clientJ';
}
