import {Component, Input, OnInit} from '@angular/core';
import {TabPack} from '../../service/model/tabpack.model';

@Component({
  selector: 'app-tabpack',
  templateUrl: './tab-pack.component.html',
  styleUrls: ['./tab-pack.component.css']
})
export class TabPackComponent implements OnInit {
  @Input()
  tabPack: TabPack

  constructor() { }

  ngOnInit() {
  }

}
