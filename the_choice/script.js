const left = document.querySelector('.left');
// selecting '.left' and storing it in const left
const right = document.querySelector('.right');
// selecting '.right' and storing it in const right
const container = document.querySelector('.container');
// selecting '.container' and storing it in const container
left.addEventListener('mouseenter', () => container.classList.add('hover-left'))
// when cursor hovering over left container ... this func is called. it adds a new class to classList ... 'hover-left'
left.addEventListener('mouseleave', () => container.classList.remove('hover-left'))
// when cursor is not hovering over left container ... this func is called. it removes the new class from classList ... 'hover-left'
right.addEventListener('mouseenter', () => container.classList.add('hover-right'))
// when cursor hovering over right container ... this func is called. it adds a new class to classList ... 'hover-right'
right.addEventListener('mouseleave', () => container.classList.remove('hover-right'))
// when cursor is not hovering over right container ... this func is called. it removes the new class from classList ... 'hover-right'