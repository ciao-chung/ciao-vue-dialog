# Ciao Vue Dialog

> Vue Dialog Component

## Dependencies

* animate.css
* bootstrap 3/4 (just for footer button, your can custom it's class name for your bootstrap version)
* vue 2.x

## Installation

npm 

```bash
npm install ciao-vue-dialog --save
```

or yarn

```bash
yarn add ciao-vue-dialog
```

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

> String

```javascript
this.$dialog({
  title: 'foo',
  content: 'bar',
})
```

## size

> String

We provide three size: 'lg', 'md', 'sm'

Default size is **md**

```javascript
this.$dialog({
  title: 'foo',
  size: 'lg',
})
```

## accept

> Object

When you wanna use dialog as confirm's accept action

### accept.callback

You can do anything when user accept confirm by config **callback** property 

```javascript
export default {
  methods: {
    deleteConfirm() {
      this.$dialog({
        title: 'Delete',
        content: 'Do you really want to delete',
        accept: {
          callback: @onAccept,
        },
      })
    },
    onAccept() {
      // do something here after accept
    },
  },
},
```

### accept.label

Custom accept button label

Default is 'Accept'

> String

```javascript
this.$dialog({
  // ...
  accept: {
    label: 'Yes',
    callback: someCallback,
  }
})
```

### accept.style

Custom accept button style by using bootstrap class name

Default is 'primary'

> String

```javascript
this.$dialog({
  // ...
  accept: {
    style: 'success',
    callback: someCallback,
  }
})
```


## dismiss

> Object

When you wanna use dialog as confirm's dismiss action

### dismiss.callback

You can do anything when user dismiss confirm by config **callback** property

If you don't want to do anything after dismiss, you can skip this property 

```javascript
export default {
  methods: {
    deleteConfirm() {
      this.$dialog({
        title: 'Delete',
        content: 'Do you really want to delete',
        dismiss: {
          callback: @onDismiss,
        },
      })
    },
    onDismiss() {
      // do something here after dismiss
    },
  },
},
```

### dismiss.label

Custom dismiss button label

Default is 'Dismiss'

> String

```javascript
this.$dialog({
  // ...
  dismiss: {
    label: 'Cancel',
    callback: someCallback,
  }
})
```

### dismiss.style

Custom dismiss button style by using bootstrap class name

Or if you want to use bootstrap 4 button's class name

Default is 'light'

> String

```javascript
this.$dialog({
  // ...
  dismiss: {
    style: 'warning',
    callback: someCallback,
  }
})
```

## component

> Vue Component

You can inject a custom vue component into dialog by this property

```javascript
import CustomComponent from 'path/to/custom/component'
export default {
  methods: {
    showDialog() {
      this.$dialog({
        title: 'Custom Component',
        component: CustomComponent,
      })
    },
  },
}
```