import { Component } from '@angular/core';
import { datetime } from '../../../assets/datetime'

import { faExclamationTriangle, faCheckSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'snapshot-card',
  templateUrl: './snapshot-card.component.html',
  styleUrls: ['./snapshot-card.component.css']
})
export class SnapshotCardComponent {
  datetime = datetime;
  late = true;
  icon = this.late ? faExclamationTriangle : faCheckSquare;
}
