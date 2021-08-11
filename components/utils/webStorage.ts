export type StoreType = 'session' | 'local';
type StorageKey = string;

export interface WebStorageConstructor{
  storeType:StoreType,
  expire:number
}


class WebStorage{
  private _store;
  public expire;

  constructor(props:WebStorageConstructor) {
    this._store = this.initStorage(props.storeType)
    this.expire = props?.expire || 100000;
  }

  initStorage(storeType:StoreType){
    if(storeType === 'session'){
      return window?.sessionStorage || sessionStorage;
    }else{
      return window?.localStorage || sessionStorage;
    }
  }

  setItem(key:StorageKey, data : any):void{
    this._store.setItem(key,JSON.stringify({
      createTime:this.getTimestamp(),
      expire:this.expire,
      value:JSON.stringify(data)
    }))
  }

  getItem(key:StorageKey):any{
    const item = this._store.getItem(key);
    const {createTime,expire,value} = item && JSON.parse(item);
    const currentTime = this.getTimestamp();
    if(currentTime - createTime >= expire) {
      this.removeItem(key);
      throw console.warn('local storage has expired')
    }
    return JSON.parse(value);
  }

  removeItem(key:StorageKey):void{
    this._store?.removeItem(key)
  }

  clearStorage():void{
    this._store.clear()
  }

  getTimestamp():number{
    return Number(Date.parse(new Date().toString()) / 1000);
  }
}

export default WebStorage;