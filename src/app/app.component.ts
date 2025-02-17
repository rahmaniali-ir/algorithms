import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { FooterComponent } from '@components/common/footer/footer.component';
import { NavBarComponent } from '@components/common/nav-bar/nav-bar.component';
import { iconPack } from 'src/icon-pack';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  standalone: true,
  imports: [NavBarComponent, RouterOutlet, FooterComponent],
})
export class AppComponent {
  iconRegistry = inject(MatIconRegistry);

  sanitizer = inject(DomSanitizer);

  constructor() {
    this.registerCustomIcons();
  }

  private registerCustomIcons() {
    for (let icon in iconPack) {
      this.iconRegistry.addSvgIconLiteral(
        icon,
        this.sanitizer.bypassSecurityTrustHtml(iconPack[icon])
      );
    }
  }
}
