import { useSSRContext, mergeProps, withCtx, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import '@unhead/vue';
import '@unhead/dom';
import '@unhead/ssr';
import 'vue-router';
import 'h3';
import 'ufo';
import 'defu';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'ohash';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';

const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<button${ssrRenderAttrs(mergeProps({ class: "btn primary" }, _attrs))} data-v-6c17b5cb>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</button>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/btn.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-6c17b5cb"]]);
const _sfc_main = {
  data() {
    return {
      "class": "primary",
      "size": "small"
    };
  },
  methods: {
    setClass: (ctx, className) => {
      ctx.class = className;
    },
    setSize: (ctx, sizeB) => {
      ctx.size = sizeB;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_btn = __nuxt_component_0;
  _push(`<span${ssrRenderAttrs(mergeProps({ class: "card-btn" }, _attrs))} data-v-0108b8b8><p data-v-0108b8b8>Buttons</p><p data-v-0108b8b8>`);
  _push(ssrRenderComponent(_component_btn, {
    onClick: ($event) => $options.setClass(this, "primary"),
    class: "primary"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`primary`);
      } else {
        return [
          createTextVNode("primary")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_btn, {
    onClick: ($event) => $options.setClass(this, "success"),
    class: "success"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`success`);
      } else {
        return [
          createTextVNode("success")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_btn, {
    onClick: ($event) => $options.setClass(this, "info"),
    class: "info"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`info`);
      } else {
        return [
          createTextVNode("info")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_btn, {
    onClick: ($event) => $options.setClass(this, "warning"),
    class: "warning"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`warning`);
      } else {
        return [
          createTextVNode("warning")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_btn, {
    onClick: ($event) => $options.setClass(this, "danger"),
    class: "danger"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`danger`);
      } else {
        return [
          createTextVNode("danger")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_btn, {
    onClick: ($event) => $options.setClass(this, "dark"),
    class: "dark"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`dark`);
      } else {
        return [
          createTextVNode("dark")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_btn, {
    onClick: ($event) => $options.setClass(this, "purple"),
    class: "purple"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`purple`);
      } else {
        return [
          createTextVNode("purple")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_btn, {
    onClick: ($event) => $options.setClass(this, "pink"),
    class: "pink"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`pink`);
      } else {
        return [
          createTextVNode("pink")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_btn, {
    onClick: ($event) => $options.setClass(this, "secondary"),
    class: "secondary"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`secondary`);
      } else {
        return [
          createTextVNode("secondary")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_btn, {
    onClick: ($event) => $options.setClass(this, "light"),
    class: "light"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`light`);
      } else {
        return [
          createTextVNode("light")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_btn, {
    onClick: ($event) => $options.setClass(this, "white"),
    class: "white"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`white`);
      } else {
        return [
          createTextVNode("white")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_btn, {
    onClick: ($event) => $options.setClass(this, "link"),
    class: "link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`link`);
      } else {
        return [
          createTextVNode("link")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</p><p data-v-0108b8b8> Use the button classes on an button tag. </p><span class="precode" data-v-0108b8b8><span class="code" data-v-0108b8b8> &lt;btn <div class="space" data-v-0108b8b8></div><div class="red" data-v-0108b8b8> class </div><div class="black" data-v-0108b8b8> = </div> &quot; <div class="blue" data-v-0108b8b8>${ssrInterpolate($data.class)}</div> &quot;&gt; <div class="black" data-v-0108b8b8>${ssrInterpolate($data.class)}</div> &lt;/btn&gt; </span></span><p data-v-0108b8b8> Button size </p><p data-v-0108b8b8>`);
  _push(ssrRenderComponent(_component_btn, {
    onClick: ($event) => $options.setSize(this, "small"),
    class: ["small", $data.class]
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`small`);
      } else {
        return [
          createTextVNode("small")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_btn, {
    onClick: ($event) => $options.setSize(this, null),
    class: $data.class
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`default`);
      } else {
        return [
          createTextVNode("default")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_btn, {
    onClick: ($event) => $options.setSize(this, "large"),
    class: ["large", $data.class]
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`large`);
      } else {
        return [
          createTextVNode("large")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</p><span class="precode" data-v-0108b8b8><span class="code" data-v-0108b8b8> &lt;btn <div class="space" data-v-0108b8b8></div><div class="red" data-v-0108b8b8> class </div><div class="black" data-v-0108b8b8> = </div> &quot; <div class="blue" data-v-0108b8b8>${ssrInterpolate($data.class)} ${ssrInterpolate($data.size)}</div> &quot;&gt; <div class="black" data-v-0108b8b8>${ssrInterpolate($data.size)} `);
  if (!$data.size) {
    _push(`<span data-v-0108b8b8>default</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div> &lt;/btn&gt; </span></span></span>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-0108b8b8"]]);

export { index as default };
//# sourceMappingURL=index-991f8f30.mjs.map
