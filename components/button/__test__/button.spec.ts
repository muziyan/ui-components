import {default as Button} from "../index"
// @ts-ignore
import { mount } from '@vue/test-utils'

describe('button', () => {
  it("button text content",() => {
    const message = "hello world";

    const wrapper = mount(Button,{
      slots:{
        default:message
      }
    }) 
    expect(wrapper.html()).toContain(message)
  })
});