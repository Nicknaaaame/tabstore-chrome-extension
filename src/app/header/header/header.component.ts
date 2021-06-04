import {Component, OnInit} from '@angular/core';
import Tab = chrome.tabs.Tab;
import {of, TabPack} from '../../service/model/tabpack.model';
import {StoreService} from '../../service/store.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private storeService: StoreService) {
  }

  ngOnInit() {
  }

  onClickStoreTabs() {
    chrome.tabs.query({currentWindow: true}, tabs => {
      // chrome.tabs.create({active: false});
      let tabsToStore: Array<Tab> = [];
      for (let i = 0; i < tabs.length; i++) {
        let tab = tabs[i];
        // chrome.tabs.remove(tab.id);
        if (tab.url != 'chrome://newtab/') {
          tabsToStore.push(tab);
        }
      }
      if (tabsToStore.length != 0) {
        this.storeService.addPack(of(tabsToStore));
      }
    });
  }


}
