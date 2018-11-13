```javascript
this.$dialog({
  title: 'Async Accept',
  accept: {
    callback() {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve()
        }, 3000)
      })
    },
  },
})
```