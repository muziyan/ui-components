import { defineComponent, computed, createVNode, unref, Fragment } from 'vue';

var getPrefixName = function (componentName, obj) {
  var globalClass = "j-" + componentName;
  var classNames = globalClass + " ";
  Object.keys(obj).forEach(function (key) {
    var val = obj[key];

    if (key === 'type') {
      classNames += globalClass + "-" + val;
    }

    if (key === 'status') {
      classNames += "--" + val + " ";
    }

    if (key === 'size' && val) {
      classNames += globalClass + "--" + val;
    }
  });
  return classNames;
};

var ButtonType = ['success', 'danger', 'waring', 'info'];
var ButtonSize = ['default', 'small', 'large'];
var Button = defineComponent({
  name: "JButton",
  inheritAttrs: false,
  // __JACK_BUTTON:true,
  props: {
    type: {
      type: String,
      default: "default",
      validated: function (val) {
        return ButtonType.includes(val) || typeof val === 'string';
      }
    },
    size: {
      type: String || Number,
      default: "default",
      validated: function (val) {
        if (typeof val === 'number') {
          return val + 'px';
        } else if (typeof val === 'string') {
          return ButtonSize.includes(val);
        }
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  slots: ['icon'],
  emits: ['click'],
  setup: function (props, _a) {
    var slots = _a.slots,
        emit = _a.emit;
    return function () {
      var _a; // 返回点击事件


      var handleClick = function () {
        emit("click");
      };

      var classNames = computed(function () {
        return getPrefixName("btn", {
          type: props.type === 'default' ? 'primary' : props.type,
          status: props.disabled ? "disabled" : "default",
          size: props.size === 'default' ? null : props.size
        });
      });
      var defaultText = ((_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)) || "";

      var buttonNode = createVNode("button", {
        "class": unref(classNames),
        "onClick": handleClick
      }, [defaultText]);

      return createVNode(Fragment, null, [buttonNode]);
    };
  }
});

Button.install = function (app) {
  app.component(Button.name, Button);
  return app;
};

var components = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Button: Button
});

// 全局加载
var install = function (app) {
  // 全局加载注册
  Object.keys(components).forEach(function (key) {
    // @ts-ignore
    var component = components[key];

    if (component.install) {
      app.use(component);
    }
  });
  return app;
};
var index = {
  install: install
};

export { Button, index as default, install };
