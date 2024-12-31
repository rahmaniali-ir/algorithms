import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.route';
import { provideIconPack } from '@rahmaniali.ir/angular-svg-icon';
import { iconPack } from './icon-pack';

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes), provideIconPack(iconPack)],
}).catch((err) => console.error(err));
