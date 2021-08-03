export type ObjectType<T> = {
  [key:string]:T
}

export const getPrefixName = (componentName:string,obj:ObjectType<any>)=>{
  let globalClass = `j-${componentName}`;
  let classNames = `${globalClass} `;
  let keyList = ['type','status','size']
  Object.keys(obj).forEach((key:string) => {
    const val = obj[key];
    if(key === 'type'){
      classNames += `${globalClass}-${val}`
    }
    if(key === 'status'){
      classNames += `--${val} `
    }
    if(key === 'size' && val){
      classNames += `${globalClass}--${val}`
    }
    if(keyList.indexOf(key) === -1 && val) {
      classNames += val
    }
  })
  return classNames;
}