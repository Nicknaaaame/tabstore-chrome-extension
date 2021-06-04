import {Component, Input, OnInit} from '@angular/core';
import {TabPack} from '../../service/model/tabpack.model';
import {StoreService} from '../../service/store.service';

@Component({
  selector: 'app-tabpack',
  templateUrl: './tab-pack.component.html',
  styleUrls: ['./tab-pack.component.css']
})
export class TabPackComponent implements OnInit {
  @Input()
  tabPack: TabPack;

  constructor(private storeService: StoreService) {
  }

  ngOnInit() {
  }

  onClickOpenTab(tab: chrome.tabs.Tab) {
    chrome.tabs.create({active: false, url: tab.url, pinned: tab.pinned});
  }

  onClickOpenPack() {
    this.tabPack.tabs.forEach(tab => {
      chrome.tabs.create({active: false, url: tab.url, pinned: tab.pinned});
    });
  }

  onClickRemovePack() {
    this.storeService.removePack(this.tabPack);
  }
}
