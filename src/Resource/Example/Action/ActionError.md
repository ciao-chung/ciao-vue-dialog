```javascript
this.$dialog({
  title: 'Handle Error in Action',
  component: CatchError,
  accept: {
    callback() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          reject({
            foo: 'bar',
          })
        }, 3000)
      })
    },
  },
})
```