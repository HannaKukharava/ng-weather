import { Component, ContentChildren, EventEmitter, Input, Output, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tab } from '../../models/ui/tab.model';
import { TabComponent } from './tab/tab.component';
import { Position } from '../../models/position';

@Component({
  selector: 'app-tabset',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabset.component.html',
  styleUrls: ['./tabset.component.css'],
})
export class TabsetComponent {
  @ContentChildren(TabComponent) set tabComponents(tabComponents: QueryList<TabComponent>) {
    this.tabs = tabComponents;
    let activeTab = tabComponents.find(tab => tab.active);
    if (!activeTab && tabComponents.first) {
      this.selectTab(tabComponents.first);
    }
  }

  @Input() closable = true;
  @Output() tabChanged = new EventEmitter<string | number>();
  @Output() tabClosed = new EventEmitter<string | number>();

  tabs: QueryList<TabComponent>;

  selectTab(tab: Tab) {
    this.tabs.toArray().forEach(tab => (tab.active = false));
    tab.active = true;
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
