import {
  AfterContentInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  EventEmitter,
  inject,
  Input,
  Output,
  QueryList,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tab } from '../../models/ui/tab.model';
import { TabComponent } from './tab/tab.component';
import { Position } from '../../models/position';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-tabset',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabset.component.html',
  styleUrls: ['./tabset.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsetComponent implements AfterContentInit {
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;

  @Input() closable = true;
  @Output() tabChanged = new EventEmitter<string | number>();
  @Output() tabClosed = new EventEmitter<string | number>();

  private cd = inject(ChangeDetectorRef);

  ngAfterContentInit(): void {
    this.tabs?.changes.pipe(untilDestroyed(this)).subscribe(() => this.cd.markForCheck());
  }

  selectTab(tab: Tab) {
    this.tabs.toArray().forEach(tab => tab.active.set(false));
    tab.active.set(true);
    this.tabChanged.emit(tab.id);
  }

  closeTab(tab: Tab) {
    if (tab.active) {
      const nextTab = this.getNextTab(tab.order, Position.PREVIOUS) || this.getNextTab(tab.order, Position.NEXT);
      if (nextTab) {
        this.selectTab(nextTab);
      }
    }
    this.tabClosed.emit(tab.id);
  }

  private getNextTab(order: number, position: Position): TabComponent {
    return this.tabs.find(item => item.order === order + position);
  }
}
