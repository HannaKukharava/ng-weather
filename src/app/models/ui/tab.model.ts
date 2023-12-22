import { WritableSignal } from '@angular/core';

export interface Tab {
  id: string | number;
  title: string;
  active: WritableSignal<boolean>;
  order?: number;
}
