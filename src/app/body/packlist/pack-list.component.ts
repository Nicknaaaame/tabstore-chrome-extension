import {Component, NgZone, OnInit} from '@angular/core';
import {of, TabPack} from '../../service/model/tabpack.model';
import Tab = chrome.tabs.Tab;
import {devCons} from '../../../environments/environment';

@Component({
  selector: 'app-packlist',
  templateUrl: './pack-list.component.html',
  styleUrls: ['./pack-list.component.css']
})
export class PackListComponent implements OnInit {
  packs: Array<TabPack>=[] /*[
    of([{title: 'KEKL'} as Tab]),
    of([{title: 'KEKW'} as Tab]),
    of([{title: 'KEKWait'} as Tab]),
    of([{title: 'KEKS'} as Tab]),
    of([{title: 'KEKS'} as Tab]),
    of([{title: 'KEKS'} as Tab]),
    of([{title: 'KEKS'} as Tab]),
    of([{title: 'KEKS'} as Tab]),
    of([{title: 'KEKS'} as Tab]),
    of([{title: 'KEKS'} as Tab]),
    of([{title: 'KEKS'} as Tab]),
  ];*/

  constructor(private ngZone: NgZone) {
    chrome.storage.local.get(['store'], items => {
      devCons.log(items)
      ngZone.run(() => {
        if (items['store'] != undefined) {
          this.packs = items['store'];
        }
      });
    });
  }

  ngOnInit() {
    chrome.storage.onChanged.addListener(changes => {
      this.ngZone.run(() => {
        this.packs = changes['store'].newValue;
      });
    });
  }

}
