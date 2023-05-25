import { Component } from '@angular/core';
import { faFilter, faTable } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'single-no-tool',
  templateUrl: './single-no-tool.component.html',
  styleUrls: ['./single-no-tool.component.scss']
})
export class SingleNoToolComponent {
  filter_icon = faFilter;
  table_icon = faTable;
}
