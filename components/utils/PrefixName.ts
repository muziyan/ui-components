export type ObjectType<T> = {
  [key:string]:T
}

export const globalClass = (componentsName:string) => `j-${componentsName}`;

export const getPrefixName = (componentName:string,obj:ObjectType<any>,status?:'bg' | 'text')=>{
  let globalClassName = globalClass(componentName);
  let classNames = `${globalClassName} `;
  let keyList = ['type','status','size']
  Object.keys(obj).forEach((key:string) => {
    const val = obj[key];
    if(key === 'type'){
      classNames += `${globalClassName}-${val}`
    }
    if(key === 'status'){
      classNames += `--${val} `
    }
    if(key === 'size' && val){
      classNames += `${globalClassName}--${val}`
    }
    if(keyList.indexOf(key) === -1 && val) {
      classNames += val
    }
  })
  return classNames;
}