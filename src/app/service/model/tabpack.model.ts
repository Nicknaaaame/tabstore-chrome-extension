import Tab = chrome.tabs.Tab;
import {v4 as uuidv4} from 'uuid';

export interface TabPack {
  uuid: number,
  creationTime: number,
  tabs: Array<Tab>,
  name: string
}

export function of(tabs: Array<Tab>): TabPack {
  let time = new Date(Date.now()).getTime();
  return {
    uuid: uuidv4(),
    creationTime: time,
    tabs,
    name: new Date(time).toLocaleString()
  }
}
