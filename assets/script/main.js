
let interaction = document.querySelector('a:nth-of-type(12)')

interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)

function jumpHandler() {
  interaction.classList.toggle('jump')
}
// first
document
  .querySelector('a:nth-of-type(1)')
  .addEventListener('click', function(){
    this.classList.toggle('shake')
  });

// second
let secondItem = document.querySelector('a:nth-of-type(2)')

secondItem.addEventListener('click', function(){
  console.log(this)
  secondItem.classList.toggle('expand')
})

secondItem.addEventListener('dblclick', function(){
  this.classList.toggle('expandMore')
});

//third 
let thrirdItem = document.querySelector('a:nth-of-type(3)')
let body = document.querySelector('body')

thrirdItem.addEventListener('keypress',function(e){
  console.log(e)
  body.classList.add('rainbow')
  if(e.key == 'q'){
    body.id = 'red'
  } else if (e.key == 'w') {
    body.id = 'green'
  }else if (e.key == 'e') {
    body.id = 'blue'
  }
   else if (e.key == 'r') {
    body.id = 'yellow'
  }
   else if (e.key == 't') {
    body.id = 'orange'
  }
   else if (e.key == 'y') {
    body.id = 'purple'
  }
   else if (e.key == 'u') {
    body.id = 'pink'
  }
   else if (e.key == 'i') {
    body.id = 'grey'
  }
   else if (e.key == 'o') {
    body.id = 'linear-g'
  }
   else if (e.key == 'p') {
    body.id = 'pattern-one'
  }
   else if (e.key == '[') {
    body.id = 'pattern-two'
  }
   else if (e.key == ']') {
    body.id = 'pattern-three'
  }else{
    alert('goog')
  }
});

// fourth source: https://www.youtube.com/watch?v=fMDuFoqSQfw

let fourthItem = document.querySelector('a:nth-of-type(4)');
function oreintation(e){
  console.log(e)
}
async function  requestDeviceOreintation(){
  if(typeof DeviceOrientationEvent != 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'funtion' ){

  } else if('DeviceOrientationEvent' in window) {
    console.log('yes')
    window.addEventListener('deviceoreintation', oreintation )
  } else {
    alert('not supported')
  }
};




fourthItem.addEventListener("",()=>{

});

// fifth

let fifthItem = document.querySelector('a:nth-of-type(5)');
const sadMode = document.querySelector('sadMode');

fifthItem.addEventListener('mouseover', function(){
  body.classList.toggle('sadMode')
} );

// sixth

let sixthItem = document.querySelector('a:nth-of-type(6)');

sixthItem.addEventListener('click', function(){
  this.classList.toggle('wide')
  setTimeout(function(){
    alert('thats enough slices')
  },7000)
});

//seventh

let seventhItem = document.querySelector('a:nth-of-type(7)');

seventhItem.addEventListener('dblclick',()=>{
  window.addEventListener('mousemove',(e)=>{
    seventhItem.style.top = e.pageY + 'px';
    seventhItem.style.left = e.pageX + 'px';
  })
});

seventhItem.removeEventListener('click',()=>{
  window.removeEventListener('mousemove',(e)=>{
    seventhItem.style.top = e.pageY + 'px';
    seventhItem.style.left = e.pageX + 'px';
  })
});

//chatgpt 
// const handleDoubleClick = () => {
//   window.addEventListener('mousemove', handleMouseMove);
// };

// const handleMouseMove = (e) => {
//   seventhItem.style.top = e.pageY + 'px';
//   seventhItem.style.left = e.pageX + 'px';
// };

// seventhItem.addEventListener('dblclick', handleDoubleClick);

// seventhItem.removeEventListener('click', handleDoubleClick);
// window.removeEventListener('mousemove', handleMouseMove);