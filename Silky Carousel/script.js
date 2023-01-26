document.querySelectorAll('.item').forEach((item, index) => {
  item.addEventListener('click', () => {
    const itemList = document.querySelectorAll('.item')
    if(item === itemList[1]) {
      document.querySelector('#slide').prepend(itemList[itemList.length - 1])
    }
    if(item === itemList[2]) {
      document.querySelector('#slide').appendChild(itemList[0])
    }
  })
})