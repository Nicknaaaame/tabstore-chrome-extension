import Tab = chrome.tabs.Tab;
import {v4 as uuidv4} from 'uuid';

export interface TabPack {
  uuid: number,
  creationTime: number,
  tabs: Array<Tab>
}

export function of(tabs: Array<Tab>): TabPack {
  return {
    uuid: uuidv4(),
    creationTime: new Date(Date.now()).getTime(),
    tabs
  }
}
