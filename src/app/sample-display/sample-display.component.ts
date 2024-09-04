import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-sample-display',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './sample-display.component.html',
  styleUrl: './sample-display.component.scss',
})
export class SampleDisplayComponent {}
