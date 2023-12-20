import { AfterContentInit, Component, ContentChildren, EventEmitter, Input, Output, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tab } from '../../models/ui/tab.model';
import { TabComponent } from './tab/tab.component';

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
    let activeTabs = tabComponents.filter(tab => tab.active);
    if (activeTabs.length === 0 && tabComponents.first) {
      this.selectTab(tabComponents.first);
    }
  }

  @Input() closable: boolean = true;
  @Output() tabChanged = new EventEmitter<number>();
  @Output() tabClosed = new EventEmitter<number>();

  tabs: QueryList<TabComponent>;

  selectTab(tab: Tab) {
    this.tabs.toArray().forEach(tab => (tab.active = false));
    tab.active = true;
    this.tabChanged.emit(tab.id);
  }

  closeTab(tab: Tab) {
    this.tabClosed.emit(tab.id);
  }
}
