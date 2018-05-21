# Ciao Vue Dialog

> Vue Dialog Component

## Dependencies

* animate.css
* bootstrap 3/4 (just for footer button, your can custom it's class name for your bootstrap version)
* vue 2.x

## Base Usage

**Install VueDialog component in App.vue**

```html
<template>
  <div id="app">
  
    <!--plugin will auto mount dialog in here-->
    <VueDialog/>
    
    <button @click="showDialog">show dialog</button>
  </div>
</template>

<script>
import CiaoVueDialog from 'ciao-vue-dialog'
Vue.use(CiaoVueDialog)
export default {
  methods: {
    showDialog() {
      this.$dialog('hello world')
    }
  },
}
</script>
```

## content

```javascript
this.$dialog({
  title: 'foo',
  content: 'bar',
})
```

## size

```javascript
this.$dialog({
  title: 'foo',
  size: 'lg',
})
```