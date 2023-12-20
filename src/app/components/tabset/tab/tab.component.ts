import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css'],
})
export class TabComponent {
  @Input() title: string = '';
  @Input() id: number;
  @Input() active: boolean = false;
}
