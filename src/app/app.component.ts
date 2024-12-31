import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '@components/common/footer/footer.component';
import { NavBarComponent } from '@components/common/nav-bar/nav-bar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  standalone: true,
  imports: [NavBarComponent, RouterOutlet, FooterComponent],
})
export class AppComponent {}
