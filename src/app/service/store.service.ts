import {Injectable} from '@angular/core';
import {TabPack} from './model/tabpack.model';
import {devCons} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() {
  }

  public addPack(pack: TabPack): void {
    let packs: Array<TabPack> = [];
    chrome.storage.local.get(['store'], items => {
      if (items['store'] != undefined) {
        packs = items['store'];
      }
      packs.unshift(pack);
      chrome.storage.local.set({store: packs});
    });
  }

  removePack(pack: TabPack): void {
    let packs: Array<TabPack> = [];
    chrome.storage.local.get(['store'], items => {
      if (items['store'] != undefined) {
        packs = items['store'];
      }
      let index = packs.findIndex(value => value.uuid==pack.uuid);
      packs.splice(index, 1);
      chrome.storage.local.set({store: packs});
    });
  }

  updatePack(pack: TabPack): void {
    let packs: Array<TabPack> = [];
    chrome.storage.local.get(['store'], items => {
      packs = items['store'];
      let index = packs.findIndex(value => value.uuid==pack.uuid);
      packs[index] = pack;
      chrome.storage.local.set({store: packs});
    });
  }
}
