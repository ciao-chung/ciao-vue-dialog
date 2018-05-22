```javascript
import NormalCustomComponent from 'Resource/CustomComponent/Normal'
export default {
  methods: {
    dialog() {
      this.$dialog({
        title: 'Custom Component',
        size: 'lg',
        component: NormalCustomComponent,
      })
    },
  },
}
```