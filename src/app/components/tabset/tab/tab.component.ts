import { ChangeDetectionStrategy, Component, Input, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabComponent {
  @Input() title = '';
  @Input() id: string | number;
  @Input() set order(order: number) {
    this._order = order;
    this.active.set(order === 0);
  }
  get order() {
    return this._order;
  }

  active = signal(false);
  private _order?: number;
}
