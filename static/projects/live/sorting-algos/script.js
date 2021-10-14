const container = document.getElementById('array-container');
const speedSlider = document.getElementById('speed-range');
const numberOfBarsSlider = document.getElementById('bars-range');
const buttonTint = document.getElementById('button-tint')

var array = [];
var arrayElements;


var numberOfBars = numberOfBarsSlider.value; 
numberOfBarsSlider.addEventListener("change", () => {
  numberOfBars = numberOfBarsSlider.value;
  randomArray();
})
const changeWidth = () => {
  for(let i = 0; i < document.querySelectorAll('div').length; i++){
    document.querySelectorAll('div')[i].style.width = `${Math.floor(container.offsetWidth/numberOfBars - 2)}px`;
  }
}

var speed = speedSlider.value;
speedSlider.addEventListener("change", () =>{
  speed = speedSlider.value;
})


function sleep(ms){
  return new Promise(resolve => setTimeout(resolve, ms));
}

const randomArray = () =>{
  container.innerHTML = '';
  array = [];
  for(let i = 0; i < numberOfBars; i++){
    let randomInt = getRandomNumber(5, 300);
    array.push(randomInt);
    var newDiv = document.createElement("div");
    newDiv.style.height = `${randomInt}px`
    container.appendChild(newDiv)
  }
  arrayElements = document.querySelectorAll('div');
  changeWidth();
}

const getRandomNumber = (min, max) =>{
  return Math.floor(Math.random() * (max - min) + min);
}

const randomBarWidth = () =>{
  numberOfBarsSlider.value = getRandomNumber(5,99);
  numberOfBars = numberOfBarsSlider.value; 
  randomArray();
}
randomArray();

//bubble sort algorithm
async function bubbleSort() {
  buttonTint.style.display = 'inline';
  for(let i = 0; i < array.length - 1; i++){
    for(let j = 0; j < array.length - i - 1; j++){
  
      arrayElements[j].style.backgroundColor = 'red'
      arrayElements[j+1].style.backgroundColor = 'darkred'

      await sleep(speed);

      if(array[j] > array[j+1]){
        let temp = array[j+1];
        array[j+1] = array[j];
        array[j] = temp;

        let tempElem = arrayElements[j+1].style.height;
        arrayElements[j+1].style.height = arrayElements[j].style.height;
        arrayElements[j].style.height = tempElem;
      }

      arrayElements[j].style.backgroundColor = 'blue'
      arrayElements[j+1].style.backgroundColor = 'green'
     
    }
  }
  arrayElements[0].style.backgroundColor = 'green'
  buttonTint.style.display = 'none';
}


//quick sort algorithm
async function quickSortHelper(arr){
  buttonTint.style.display = 'inline';
  quickSort(arr, 0, arr.length - 1);
}
async function swap(arr, first, last){
  arrayElements[first].style.backgroundColor = 'red'
  arrayElements[last].style.backgroundColor = 'red'

  await sleep(speed);

  temp = arr[first];
  arr[first] = arr[last];
  arr[last] = temp;

  tempElem = arrayElements[first].style.height;
  arrayElements[first].style.height = arrayElements[last].style.height;
  arrayElements[last].style.height = tempElem;

  arrayElements[first].style.backgroundColor = 'blue'
  arrayElements[last].style.backgroundColor = 'blue'
}
var pIndex = 0;
async function partition(arr, first, last){
  arrayPivotIndex = Math.floor((first+last)/2);
  var pivot = arr[arrayPivotIndex];
  arrayElements[arrayPivotIndex].style.backgroundColor = 'yellow';
  await sleep(speed);
  while(first <= last){ 
    await sleep(speed);
    while(arr[first] < pivot){
      first++;
    }
    while(arr[last] > pivot){
      last--;
    }
    if(first <= last){
      await swap(arr, first, last);
      first++;
      last--;
    }
  }
  pIndex = first;
}
var recursionCounter = 0;
async function quickSort(arr, first, last) {
  recursionCounter++;
  if(first < last){
    await partition(arr, first, last);
    quickSort(arr, first, pIndex - 1);
    quickSort(arr, pIndex, last);  
  } else {
    arrayElements[first].style.backgroundColor = 'green'
  }
  recursionCounter--;
  if(recursionCounter == 0){
    buttonTint.style.display = 'none';
  }
}

