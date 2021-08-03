import { getPrefixName } from "../utils/PrefixName";
import {defineComponent,unref,PropType, computed} from "vue"

// button component 
// type is button color style
// 

export type ButtonType = 'default' | 'success' | 'danger' | 'waring' | 'info' | string;
export type ButtonSize = 'default' | 'small' | 'large' | number;

export const ButtonType:Array<ButtonType> = ['success','danger','waring','info'];
export const ButtonSize:Array<ButtonSize> = ['default','small','large'];

export default defineComponent({
  name:"JButton",
  inheritAttrs:false,
  // __JACK_BUTTON:true,
  props:{
    type:{
      type:String as PropType<ButtonType>,
      default:"default",
      validated:(val:ButtonType) => {
        return ButtonType.includes(val) || typeof val === 'string';
      }
    },
    size:{
      type:(String || Number) as PropType<ButtonSize>,
      default:"default",
      validated:(val:ButtonSize) => {
        if(typeof val === 'number'){
          return val + 'px'
        }else if(typeof val === 'string'){
          return ButtonSize.includes(val)
        }
      }
    },
    disabled:{
      type:Boolean as PropType<boolean>,
      default:false
    },
    loading:{
      type:Boolean as PropType<boolean>,
      default:false
    }  
  },
  slots:['icon'],
  emits:['click'],
  setup(props,{slots,emit}){
    
    return () => {
      // 返回点击事件
      const handleClick = () => {
        emit("click");
      }

      const classNames = computed(() => getPrefixName("btn",{
        type:props.type === 'default' ? 'primary' : props.type,
        status:props.disabled ? "disabled" : "default",
        size:props.size === 'default' ? null : props.size 
      }))

      const defaultText = slots.default?.() || ""

      const buttonNode = (
        <button 
          class={unref(classNames)}
          onClick={handleClick}
        >
          {defaultText}
        </button>
      )

      return (<>{buttonNode}</>);
    }
  }

})