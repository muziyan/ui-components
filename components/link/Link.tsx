import { getPrefixName } from "../utils/PrefixName";
import { defineComponent,unref,PropType,computed } from "vue"

// link component 
// type is link color style
// 

export type LinkType = 'default' | 'success' | 'danger' | 'waring' | 'info' | string;

export const LinkType:Array<LinkType> = ['success','danger','waring','info'];

export default defineComponent({
  name:"JLink",
  inheritAttrs:false,
  // __JACK_LINK:true,
  props:{
    type:{
      type:String as PropType<LinkType>,
      default:"default",
      validated:(val:LinkType) => {
        return LinkType.includes(val) || typeof val === 'string';
      }
    },
    underline:{
      type:Boolean as PropType<boolean>,
      default:true
    },
    href:{
      type: String
    },
    disabled:{
      type:Boolean as PropType<boolean>,
      default:false
    },

  },
  slots:['icon'],
  emits:['click'],
  setup(props,{slots,emit}){
    
    return () => {
      // 返回点击事件
      const handleClick = () => {
        emit("click");
      }

      const classNames = computed(() => getPrefixName("link",{
        type:props.type === 'default' ? 'primary' : props.type,
        status:props.disabled ? "disabled" : "default",
        underline:props.underline && !props.disabled ? 'is-underline' : '',
        disabled: props.disabled ? 'is-disabled' : ''
      }))

      const defaultText = slots.default?.() || ""
      
      const hrefText = props.disabled ? undefined : props.href

      const linkNode = (
        <a 
          class={unref(classNames)}
          onClick={handleClick}
          href={hrefText}
        >
          {defaultText}
        </a>
      )

      return (<>{linkNode}</>);
    }
  }

})