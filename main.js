// const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const back = document.querySelectorAll('.back');
const container1 = document.querySelector('#container1');
const container2 = document.querySelector('#container2');
const atm = document.getElementsByClassName('atm');
const err = document.querySelector('#err');
const succ = document.querySelector('#succ');
const flipChild1 = document.getElementsByClassName('flipChild1');
const flipChild2 = document.getElementsByClassName('filpChild2');
const containers = document.getElementsByClassName('container');
const animations = document.querySelectorAll('#side');
const inner = document.querySelectorAll('#inner');
const scores = document.querySelector('#score')
const randomParent = document.getElementsByClassName('randomParent');
const randomChild = document.getElementsByClassName('randomChild')
const start = document.querySelector('.start')
const random = document.querySelector('.random')
let contChild1 = container1.children;
let contChild2 = container2.children;
let arr = [];
let arr1 = [];
let arr2 = [];
let badUsed = `<img width="100" src="./img/download-removebg-preview.png" alt="">`;
let goodUsed = `<img width="100" src="./img/images__2_-removebg-preview.png" alt="">`;
// .style.backgroundColor = 'red'



function addDiv1() {
  card1 = document.createElement('div');
  card1.classList.add('container', 'cont1');

  card2 = document.createElement('div');
  card2.classList.add('front');

  card3 = document.createElement('div');
  card3.classList.add('back');

  card4 = document.createElement('div');
  card4.classList.add('inner');

  para = document.createElement('p');
  para.classList.add('randomParent');


  card4.appendChild(para);
  card3.appendChild(card4);

  card1.appendChild(card2);
  card1.appendChild(card3);

  container1.appendChild(card1)
}


function addDiv2() {
  card1 = document.createElement('div');
  card1.classList.add('container', 'cont2');

  card2 = document.createElement('div');
  card2.classList.add('front');

  card3 = document.createElement('div');
  card3.classList.add('back');

  card4 = document.createElement('div');
  card4.classList.add('inner');

  para = document.createElement('p');
  para.classList.add('randomChild');


  card4.appendChild(para);
  card3.appendChild(card4);

  card1.appendChild(card2);
  card1.appendChild(card3);

  container2.appendChild(card1)
}

let count = '';
let first = '';
let rec = 0;
let runDiv1 = 0;
let count1 = '';

function createCharacter1() {
  rec++
  let num = Math.floor(Math.random() * (90 - 65 + 1)) + 65;
  let letters = String.fromCharCode(num);
  count = count + letters;
  console.log(count);
  for (let s = 0; s < count.length; s++) {
    let item = count[s];
    if (count.indexOf(item) === count.lastIndexOf(item)) {
      arr.push(item);
    } else {
      console.log('repeated');
      count = count.replace(item, '');
      runDiv1++;
      if (rec === 1) {
        createCharacter1();
      }
      s--;
      container1.lastElementChild.remove();
      container2.lastElementChild.remove();
    }
  }
  arr = count.split('');
  // console.log(arr);

  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

  shuffleArray(arr);
  console.log(arr);

  document.querySelectorAll(".randomParent").forEach((el, i) => {
    el.textContent = arr[i];
  });

}

function createCharacter2() {

  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

  shuffleArray(arr);
  console.log(arr);
  document.querySelectorAll(".randomChild").forEach((el, i) => {
    el.textContent = arr[i];
  });
}


let a = '';
let b = '';
let score = 0
let score1 = 0



start.addEventListener('click', () => {
  for (let i = 0; i < contChild1.length; i++) {
    contChild1[i].lastElementChild.firstElementChild.firstElementChild.innerText = "";
    contChild1[i].classList.remove('flipped1', 'disabled');
    contChild1[i].lastElementChild.style.backgroundColor = '#333';
    if (contChild1[i].firstElementChild.classList.contains('errorUsed') || contChild1[i].firstElementChild.classList.contains('goodUsed')) {
      console.log(contChild1[i].firstElementChild.remove())
    }
  }

  for (let i = 0; i < contChild2.length; i++) {
    contChild2[i].lastElementChild.firstElementChild.firstElementChild.innerText = "";
    contChild2[i].classList.remove('disabled', 'flipped2');
    contChild2[i].lastElementChild.style.backgroundColor = '#333';
    if (contChild2[i].firstElementChild.classList.contains('errorUsed') || contChild2[i].firstElementChild.classList.contains('goodUsed')) {
      console.log(contChild2[i].firstElementChild.remove())
    }
    
  }


  setTimeout(() => {
    addDiv1()
    addDiv2()

    createCharacter1()
    createCharacter2()

    for (let i = 0; i < contChild1.length; i++) {
      contChild1[i].addEventListener('mousedown', () => {
        a = '';
        a = contChild1[i].innerText;
        console.log(a);

        if (a != "" && a != NaN && a == b) {
          a = '';
        }
      });
    }


    for (let j = 0; j < contChild2.length; j++) {
      contChild2[j].addEventListener('mousedown', (e) => {
        let target = e.target
        let inner2 = target.nextElementSibling.firstElementChild.innerText
        let surr2 = target.nextElementSibling;

        for (let f = 0; f < contChild1.length; f++) {
          let inner1 = contChild1[f].firstElementChild.nextElementSibling;
          let surr1 = contChild1[f].nextElementSibling
          if (inner2 == a) {
            console.log('yes')
            succ.style.display = 'block';
            setTimeout(() => {
              succ.style.display = 'none';
            }, 1000);
            surr2.style.backgroundColor = 'green';
            // let errorParent = document.createElement('div');
            // errorParent.classList.add('goodUsed');
            // errorParent.innerHTML = goodUsed;
            // console.log(surr2.parentElement.prepend(errorParent))
            
            // contChild2[j].prepend(errorParent);


            if (contChild1[f].classList.contains('flipped1') && !contChild1[f].classList.contains('disabled')) {
              inner1.style.backgroundColor = 'green';
              inner1.parentElement.classList.add('disabled');
              let errorParent2 = document.createElement('div');
              errorParent2.classList.add('goodUsed');
              errorParent2.innerHTML = goodUsed;
              contChild1[f].prepend(errorParent2);
              console.log(a)
            }
          } else {
            surr2.style.backgroundColor = 'red';
            // let errorParent = document.createElement('div');
            // errorParent.classList.add('errorUsed');
            // errorParent.innerHTML = badUsed;
            // contChild2[j].prepend(errorParent);
            if (contChild1[f].classList.contains('flipped1') && !contChild1[f].classList.contains('disabled')) {
              inner1.style.backgroundColor = 'red';
              inner1.parentElement.classList.add('disabled');
              contChild1[f].classList.add('disabled');
              let errorParent2 = document.createElement('div');
              errorParent2.classList.add('errorUsed');
              errorParent2.innerHTML = badUsed;
              contChild1[f].prepend(errorParent2);
            }

          }
        }
      });
    }

        // Select all .cont1 class and not disabled class and add event listener to flip them
        const cont1 = document.querySelectorAll('.cont1');
        const cont2 = document.querySelectorAll('.cont2');
        const back = document.querySelectorAll('.inner');
    
        const cont = document.querySelectorAll('.container');
    
        function flip1() {
          let flipped1 = document.getElementsByClassName('flipped1')[0];
          if (flipped1 != undefined)
            flipped1.classList.toggle('flipped1');
          if (!this.classList.contains('disabled'))
          this.classList.toggle('flipped1');
    
        }
    
        function flip2() {
          let flipped2 = document.getElementsByClassName('flipped2')[0];
          if (flipped2 != undefined)
            flipped2.classList.toggle('flipped2');
            if (!this.classList.contains('disabled'))
          this.classList.toggle('flipped2');
        }
    
        function remFlip() {
          setTimeout(() => {
            this.parentElement.parentElement.classList.remove('flipped1', 'flipped2');
          }, 100);
        }
    
        cont1.forEach((el, i) => {
            el.addEventListener('mousedown', flip1);
        });
    
    
        cont2.forEach((el, i) => {
            el.addEventListener('mousedown', flip2);
        });
    
        back.forEach((el, i) => {
          console.log(el)
          el.addEventListener('mousedown', remFlip);
        });
    


  }, 599)
});


