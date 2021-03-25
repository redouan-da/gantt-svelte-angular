import { SvelteGantt } from 'svelte-gantt';
import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {SvelteGanttComponent} from 'svelte-gantt/types/gantt';
import * as moment from 'moment';
@Component({
  selector: 'app-component',
  template: '<div #ganttElement style="height: 100%; width: 100%;"></div>'
})
export class AppComponent implements AfterViewInit {

 // gantt: SvelteGanttComponent;
  gantt: SvelteGantt;
  @ViewChild('ganttElement', { static: false }) ganttElement: ElementRef;

  ngAfterViewInit() {
    this.gantt = new SvelteGantt({
      // target a DOM element
      target: this.ganttElement.nativeElement,
      // svelte-gantt options
      props: {
        tasks: [],
        rows: [],
        from: moment().startOf('week'),
        to: moment().endOf('week')
      }
    });}
  }
