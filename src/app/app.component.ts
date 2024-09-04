import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LanguageSwitchComponent } from './language-switch/language-switch.component';
import { SampleDisplayComponent } from './sample-display/sample-display.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    LanguageSwitchComponent,
    RouterOutlet,
    TranslateModule,
    SampleDisplayComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ngx-translate-sample';

  constructor(translate: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('en');
  }
}
