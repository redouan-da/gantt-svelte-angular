import { SvelteGantt, SvelteGanttTable } from 'svelte-gantt';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { SvelteGanttComponent } from 'svelte-gantt/types/gantt';
import * as moment from 'moment';
import { RowModel } from 'svelte-gantt/types/core/row';
@Component({
  selector: 'app-root',
  template: '<div class="gantt-element" #ganttElement></div>',
  styles: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  gantt: SvelteGanttComponent;
  @ViewChild('ganttElement', { static: false }) ganttElement: ElementRef;

  ngAfterViewInit() {
    this.gantt = new SvelteGantt({
      // target a DOM element
      target: this.ganttElement.nativeElement,
      // svelte-gantt options
      props: {
        tasks: [
          {
            id: 1,
            resourceId: 1,
            label: 'Homework',
            classes: 'orange',
            from: moment().startOf('day').set('hour', 10),
            to: moment().startOf('day').set('hour', 14)
          },
          {
            id: 2,
            resourceId: 2,
            label: 'Clean dishes',
            classes: 'green',
            from: moment().startOf('day').set('hour', 12),
            to: moment().startOf('day').set('hour', 16)
          }
        ],
        rows: [
          { id: 1, label: 'Row #1', height: null } as RowModel,
          { id: 2, label: 'Row #2', height: null } as RowModel,
          { id: 3, label: 'Row #3', height: null } as RowModel
        ],
        from: moment().startOf('day'),
        to: moment().endOf('day'),
        fitWidth: true,
        ganttTableModules: [SvelteGanttTable]
      }
    });
  }
}
