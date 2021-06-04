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
      packs.push(pack);
      chrome.storage.local.set({store: packs});
    });
  }

  // public getPucks(): Array<TabPack> {
  //
  // }
}
