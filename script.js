let startBtn = document.getElementById('startButton');
let mainDiv = document.getElementById('container');
let trueBtn = document.getElementById('trueBtn');
let gessNumber = document.getElementById('guessNumber');
let guessBtn = document.getElementById('guessBtn');
let btns = document.getElementsByClassName('findBtn');
let carContainer = document.getElementById('carContainer');
let math = document.querySelector('.math');
let mathInp = document.getElementById('mathInp');
let mathBtn = document.getElementById('mathBtn');
let img = document.querySelector('.image');
let imgInp = document.getElementById('imageInp');
let imgBtn = document.getElementById('imageBtn');
let findCat = document.querySelector('.findCat');
let catBtn = document.getElementById('catBtn');
let test = document.querySelector('.test');
let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let four = document.getElementById('four');
let block = document.getElementById('block');
let btn = document.getElementById('check');
let inp = document.getElementsByClassName('inp');


function addNewClass(teg,className) {
    let arr = teg.classList;
    teg.classList.remove(arr[0]);
    teg.classList.add(className);
};

addNewClass(gessNumber,'noDisplay');
addNewClass(mainDiv,'noDisplay');
addNewClass(carContainer, 'noDisplay');
addNewClass(math, 'noDisplay');
addNewClass(img, 'noDisplay');
addNewClass(findCat, 'noDisplay');
addNewClass(test, 'noDisplay');

startBtn.addEventListener('click',()=>{
    addNewClass(startBtn,'noDisplay');
    addNewClass(mainDiv,'container');
    let h2 = document.createElement('h2');
    h2.innerText = 'Найдите нужную кнопку';
    h2.id = 'h2';
    document.body.append(h2);
});

Array.from(btns).forEach(function(btn) {
    btn.addEventListener('click', () => {
        if (btn.id ==='trueBtn') {
            addNewClass(document.getElementById('h2'), 'noDisplay');
            addNewClass(mainDiv,'noDisplay')
            let h1 = document.createElement('h1');
            h1.innerText = 'Вы нашли нужную кнопку'
            document.body.append(h1)
            setTimeout(() => {
                addNewClass(h1,'noDisplay');
                addNewClass(gessNumber,'container');
            },1000);
        } else {
            addNewClass(btn, 'wrongBtn')
        }
    });
  });   

guessBtn.addEventListener('click', ()=> {  
    let input = gessNumber.childNodes[3];
    if(Number(input.value) ===  Math.floor(Math.random()* 3)){
        addNewClass(gessNumber, 'noDisplay')
        let h1 = document.createElement('h1');
        document.body.append(h1);
        h1.innerText = 'Победа';
        setTimeout(() => {
            addNewClass(h1, 'noDisplay')
            addNewClass(carContainer, 'carContainer');
        }, 1000); 
    } else {
        addNewClass(gessNumber, 'noDisplay')
        input.value = '';
        let h1 = document.createElement('h1');
        document.body.append(h1);
        h1.innerText = 'Попробуйте еще раз';
        setTimeout(() => {
            addNewClass(h1, 'noDisplay')
            addNewClass(gessNumber, 'container')
        }, 1000);
        
    }
    
});

let elem = document.getElementById("car");
elem.tabIndex = 0;
document.body.style.overflow = "hidden";
elem.addEventListener("keydown", function (event) {
    if (event.code != "ArrowRight" && event.code != "ArrowLeft" ) return;
    let x = elem.getBoundingClientRect().x;
    if (1480 < x) {
        addNewClass(elem, 'nodisplay');
        addNewClass(carContainer, 'noDisplay');
        let h1 = document.createElement('h1');
        h1.innerText = 'Уровень пройден';
        document.body.append(h1); 
        setTimeout(() => {
                addNewClass(h1, 'noDisplay');
                addNewClass(math, 'display');
            }, 1000); } else if (x < 25) {
                x = 25;
        };
        if (event.code == "ArrowRight") x += 20;
        if (event.code == "ArrowLeft")  x -= 10;
        elem.style.position = "absolute";
        elem.style.left = x + "px";
});
mathBtn.addEventListener('click', () => {
    if (mathInp.value === '16') {
    addNewClass(math, 'noDisplay');
    let h1 = document.createElement('h1');
    h1.innerText = 'Правильно';
    document.body.append(h1);
    setTimeout(() => {
        addNewClass(h1, 'noDisplay');
        addNewClass(img, 'display');
        }, 1000); } else {
        addNewClass(math, 'noDisplay');
        mathInp.value = '';
        let h1 = document.createElement('h1');
        h1.innerText = 'Попробуйте еще раз';
        document.body.append(h1);
        setTimeout(() => {
            addNewClass(h1, 'noDisplay');
            addNewClass(math, 'display');
        }, 1000);
    }
})

imgBtn.addEventListener('click', () => {
    if (imgInp.value === '11') {
        addNewClass(img, 'noDisplay');
        let h1 = document.createElement('h1');
        h1.innerText = 'Правильно';
        document.body.append(h1);
        setTimeout(() => {
            addNewClass(h1, 'noDisplay');
            addNewClass(findCat, 'display');
        }, 1000); } else {
            addNewClass(img, 'noDisplay');
            imgInp.value = '';
            let h1 = document.createElement('h1');
            h1.innerText = 'Попробуйте еще раз';
            document.body.append(h1);
            setTimeout(() => {
            addNewClass(h1, 'noDisplay');
            addNewClass(img, 'display');
        }, 1000);
    }
})
catBtn.addEventListener('click', () => {
    addNewClass(findCat, 'noDisplay');
    let h1 = document.createElement('h1');
    h1.innerText = 'Правильно';
    document.body.append(h1);
    setTimeout(() => {
        addNewClass(h1, 'noDisplay');
        addNewClass(test, 'display');
    }, 1000);
})
if (four === true) {
    console.log('dsdas');
}

block.addEventListener('click', () => {
    block.style.display = 'none';
})

btn.addEventListener('click', () => {
    if(four.checked) {
        addNewClass(test, 'noDisplay');
        let h1 = document.createElement('h1');
        h1.innerText = 'Правильно';
        document.body.append(h1);
        setTimeout(() => {
            addNewClass(h1, 'noDisplay');
            let h2 = document.createElement('h1');
            h2.innerText = 'Поздравляю, вы прошли игру!';
            document.body.append(h2);
            setTimeout(() => {
                addNewClass(h2, 'noDisplay');
            }, 1000);
        }, 1000);} else {
               for (let i = 0; i < 1; ++i) { inp[one, two, three] === true
                addNewClass(test, 'noDisplay');
                let h1 = document.createElement('h1');
                h1.innerText = 'Попробуйте еще раз';
                document.body.append(h1);
                setTimeout(() => {
                    addNewClass(h1, 'noDisplay');
                    addNewClass(test, 'display');
                }, 1000);
            }
            }
        });


