import {Component, NgZone, OnInit} from '@angular/core';
import {TabPack} from '../../service/model/tabpack.model';

@Component({
  selector: 'app-packlist',
  templateUrl: './pack-list.component.html',
  styleUrls: ['./pack-list.component.css']
})
export class PackListComponent implements OnInit {
  packs: Array<TabPack> = [];

  constructor(private ngZone: NgZone) {
    chrome.storage.local.get(['store'], items => {
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
