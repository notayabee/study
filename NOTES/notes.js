//получение элементов всего HTML
document.documentElement;


//функция работы с дочерними элементами
document.body.firstChild; (lastChild, childNodes (Все дочерние элементы))


//цикл вызова переменных
for(let i = 0; i <document.body.childNodes.length; i++);
    console.log(document.body.childNodes[i])


//вызов элемента по ID
content (<- значение указанное в ID) (конфликтный, лушче использовать функцию)


//функция вызова элемента по ID
let content = document.getElementById("content");//("content = id элемента")


//функция вызова элемента по тегу (h1 div p)
document.getElementsByTagName("body, div, p, li");//важно окончание Elements'S'


//ищем элементы(p) внутри переменной, константы(content) с помощью цикла
let elemenets = content.getElementsByTagName("p, * //если нужны все теги")[0];//указывает номер элемента в квадратных скобках//создаём переменную elements и присваиваем ей значение тегов p, которые внутри пременной content
for(let i = 0; i < elemenets.length; i++) {
console.log(elements[i]);//если мы в переменной указали какой элемент нам нужен, функция не нужна
}


//вызов элементов по их атрибуту с помощью функции
let el = document.getElementsByName("fname"); //<input name="fname"></input> //[0] в самом конце указывает какой именно элемент мы хотим получить //.tagName в конце, позволяет задать переменной значение атрибута, в нашем случае el = input


//вызов элементов по классу с помощью функции
let allClasses = document.getElementsByClassName("title");//[0] как обычно // можно перебрать через цикл, а можно способом ниже


//новая простая функция для вызова элементов querySelectorAll
let elements = document.querySelectorAll(".title");// по классу .title, по id #title, по тегу div, p, li


//вызов определённого элемента
let elemenets = document.querySelector("#title")//выбирает только первый элемент // рекомендуется по id вызывать 

//функция для нахождения ближайшено родительского элемента 

остановился на 27:36