
let typed = new Typed('.tp', {
  // Waits 1000ms after typing "First"
  strings: ['топовый друг', 'хороший человек','водитель маршрутки','поедатель манго','босс спорт зала'],
  typeSpeed:150,
  loop:true
});
 
let next = document.querySelector('.next')
let plev = document.querySelector('.prev')


next.addEventListener('click' , function(){
  let items = document.querySelector('.item')
  document.querySelector('.slide').appendChild(items[0])
})

pev.addEventListener('click' , function(){
  let items = document.querySelector('.item')
  document.querySelector('.slide').appendChild(items[items.length -1])
})