import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { datetime } from './datetime'

@Component({
  selector: 'snapshot-card',
  templateUrl: './snapshot-card.component.html',
  styleUrls: ['./snapshot-card.component.scss']
})
export class SnapshotCardComponent {
  datetime = datetime;
  late = false;
}
