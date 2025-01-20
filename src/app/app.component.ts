import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AccountCardComponent } from "./account-card/account-card.component";
import { LandingPageComponent } from "./pages/landing-page/landing-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AccountCardComponent, LandingPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bank-project';
}
