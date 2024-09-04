import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { TranslateService } from '@ngx-translate/core';
import { SampleDisplayComponent } from '../sample-display/sample-display.component';

@Component({
  selector: 'app-language-switch',
  standalone: true,

  imports: [FormsModule, SampleDisplayComponent],
  templateUrl: './language-switch.component.html',
  styleUrl: './language-switch.component.scss',
})
export class LanguageSwitchComponent {
  lang = 'en';
  constructor(public translate: TranslateService) {}

  switchLanguage(language: string) {
    console.log('switching language to', language);
    this.translate.use(language);
  }
}
