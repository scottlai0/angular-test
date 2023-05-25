import { Component } from '@angular/core';
import { datetime } from './datetime'

import { faExclamationTriangle, faCheckSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'snapshot-card',
  templateUrl: './snapshot-card.component.html',
  styleUrls: ['./snapshot-card.component.scss']
})
export class SnapshotCardComponent {
  datetime = datetime;
  late = true;
  icon = this.late ? faExclamationTriangle : faCheckSquare;
}
