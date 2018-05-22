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

### accept.commitOnEnter

If this property set as true

User can commit accept action by pressing Enter key

> Boolean


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

### dismiss.commitOnEsc

If this property set as true

User can commit dismiss action by pressing ESC key

> Boolean

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

### Bind data to custom component, and get it in accept/dismiss callback 

Sometimes you need to inject a custom vue component and bind a data like a subscription button

You can use **updateData** event to sync data and get **data** in accept callback by this way

**Main**

```javascript
import FormCustomComponent from './FormCustomComponent.vue'
export default {
  methods: {
    dialog() {
      this.$dialog({
        title: 'Send Product Menu',
        component: FormCustomComponent,
        accept: {
          callback: @onAccept
        },
        dismiss: {
          callback: @onDismiss
        },
      })
    },
    
    // you can get data which bind in custom component in accept callback
    onAccept(data) {
      if(!data) return
      alert(`We had sent email to ${data}`)
    },
    
    onDismiss(data) {
      // You can get data on dismiss, too 
    },
  },
}
```

**FormCustomComponent.vue**

```html
<template>
  <div>
    <h5>Enter your email, we will send you product menu</h5>
    <input type="text" v-model="localData">
  </div>
</template>

<script>
export default {
  // use props get data
  props: {
    data: {
      default: null,
    },
  },
  data() {
    return {
      // this is local data for this custom vue component
      localData: null,
    }
  },
  watch: {
    // when localData is change, you should sync data immediately
    localData(value) {
      this.$emit('updateData', value)
    },
    // when data change, you should update localData immediately too
    data(value) {
      this.localData = value
    },
  },
}
</script>
```

### Commit accept/dismiss action in custom component

You can commit accept/dismiss action by using **$emit('commitAccept')**、**$emit('commitDismiss')** in custom component

You should use this two event be carefully

Here is example which commit accept action, when press Enter key

```html
<template>
  <input type="text" @keyup.enter="$emit('commitAccept')" v-model="localData">
</template>

<script>
export default {
  // ....
}
</script>
```

### Pass more data when inject custom component

Sometimes you may want pass more data (like user profile) into custom component

You can use **meta** property like this when you active **$dialog**

```javascript
this.$dialog({
  title: 'Send Product Menu',
  component: CustomComponent,
  meta: {
    name: 'Ciao',
    age: 26,
    email: 'foo@bar.com',
  },
  accept: {
    // ...
  },
})
```

And you can get **meta** in custom component by using vue **props** feature

```javascript
export default {
  props: {
    meta: {
      default: null,
    },
  },
  created() {
    alert(`Hi ${meta.name}`)
  },
}
```
