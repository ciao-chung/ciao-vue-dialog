```javascript
this.$dialog({
  title: 'Accept/Dismiss',
  accept: {
    callback() {
      alert('after accept')
    },
  },
  dismiss: {
    callback() {
      alert('after dismiss')
    },
  },
})
```