// define Initial value stored in answer
var textContent = 0;

//Defining flag 
// 0 -> inital condition
// 1 -> after one number types
// 2 -> after applying one time equal operation


flag = 0;

// Now we will stores the values for adding , difference,division,multiplication we are creating an array
let arr = [];


let gridItem0 = document.getElementsByClassName('grid-item0');
let gridItem1 = document.getElementsByClassName('grid-item1');
let gridItem2 = document.getElementsByClassName('grid-item2');
let gridItem3 = document.getElementsByClassName('grid-item3');
let gridItem4 = document.getElementsByClassName('grid-item4');
let gridItem5 = document.getElementsByClassName('grid-item5');
let gridItem6 = document.getElementsByClassName('grid-item6');
let gridItem7 = document.getElementsByClassName('grid-item7');
let gridItem8 = document.getElementsByClassName('grid-item8');
let gridItem9 = document.getElementsByClassName('grid-item9');


let gridItemAdd = document.getElementsByClassName('grid-item-plus')
let gridItemMinus = document.getElementsByClassName('grid-item-minus')
let gridItemDivide = document.getElementsByClassName('grid-item-div')
let gridItemMultiple = document.getElementsByClassName('grid-item-mul')
let gridItemEqual = document.getElementsByClassName('d-item-equal')
let ac = document.getElementsByClassName('grid-item-ac')


let type = document.getElementById('type')

const func_ac = ()=>{
    type.innerHTML = 0;
    textContent = 0;
    flag = 0;
    console.log(textContent);
    arr.length = 0;

}


const func1 = () =>{
    if(flag == 2)
    {
        type.innerHTML +=1;
        arr.splice(0,1,textContent*10+1);
    }
    else if(flag == 1)
    {
        type.innerHTML +=1;
        textContent = textContent*10 + 1;
    }

    else{
        type.innerHTML = 1;
        textContent = 1;
        flag = 1;
    }
    console.log(textContent);

}
const func2 = () =>{
    if(flag == 2)
    {
        type.innerHTML +=2;
        arr.splice(0,1,textContent*10+2);
    }
    else if(flag == 1)
    {
        type.innerHTML +=2;
        textContent = textContent*10 + 2;
    }

    else{
        type.innerHTML = 2;
        textContent = 2;
        flag = 1;
    }
    console.log(textContent);

}


const func3 = () =>{
    if(flag == 2)
    {
        type.innerHTML +=3;
        arr.splice(0,1,textContent*10+3);
    }
    else if(flag == 1)
    {
        type.innerHTML +=3;
        textContent = textContent*10 + 3;
    }

    else{
        type.innerHTML = 3;
        textContent = 3;
        flag = 1;
    }
    console.log(textContent);

}


const func4 = () =>{
    if(flag == 2)
    {
        type.innerHTML +=4;
        arr.splice(0,1,textContent*10+4);
    }
    else if(flag == 1)
    {
        type.innerHTML +=4;
        textContent = textContent*10 + 4;
    }

    else{
        type.innerHTML = 4;
        textContent = 4;
        flag = 1;
    }
    console.log(textContent);

}

const func5 = () =>{
    if(flag == 2)
    {
        type.innerHTML +=5;
        arr.splice(0,1,textContent*10+5);
    }
    else if(flag == 1)
    {
        type.innerHTML +=5;
        textContent = textContent*10 + 5;
    }

    else{
        type.innerHTML = 5;
        textContent = 5;
        flag = 1;
    }
    console.log(textContent);

}

const func6 = () =>{
    if(flag == 2)
    {
        type.innerHTML +=6;
        arr.splice(0,1,textContent*10+6);
    }
    else if(flag == 1)
    {
        type.innerHTML +=6;
        textContent = textContent*10 + 6;
    }

    else{
        type.innerHTML = 6;
        textContent = 6;
        flag = 1;
    }
    console.log(textContent);

}

const func7 = () =>{
    if(flag == 2)
    {
        type.innerHTML +=7;
        arr.splice(0,1,textContent*10+7);
    }
    else if(flag == 1)
    {
        type.innerHTML +=7;
        textContent = textContent*10 + 7;
    }

    else{
        type.innerHTML = 7;
        textContent = 7;
        flag = 1;
    }
    console.log(textContent);

}

const func8 = () =>{
    if(flag == 2)
    {
        type.innerHTML +=8;
        arr.splice(0,1,textContent*10+8);
    }
    else if(flag == 1)
    {
        type.innerHTML +=8;
        textContent = textContent*10 + 8;
    }

    else{
        type.innerHTML = 8;
        textContent = 8;
        flag = 1;
    }
    console.log(textContent);

}


const func9 = () =>{
    if(flag == 2)
    {
        type.innerHTML +=9;
        arr.splice(0,1,textContent*10+9);
    }
    else if(flag == 1)
    {
        type.innerHTML +=9;
        textContent = textContent*10 + 9;
    }

    else{
        type.innerHTML = 9;
        textContent = 9;
        flag = 1;
    }
    console.log(textContent);

}


const func0 = () =>{
    if(textContent == 0)
    {
        type.innerHTML = 0;
        textContent = 0;
    }
    if(flag == 2)
    {
        type.innerHTML +=0;
        arr.splice(0,1,textContent*10);
    }
    else if(flag == 1)
    {
        type.innerHTML +=0;
        textContent = textContent*10;
    }

    
    console.log(textContent);

}




const func_plus = ()=>{

    if(flag == 2){
        arr.push("+");
        type.innerHTML +='+';
        flag = 1;
    }
    else if(flag ==1)
    {
        arr.push(textContent)
        arr.push("+");
        type.innerHTML += "+";
    }

    else{
        type.innerHTML = 0;
    }

    textContent = 0;
    console.log(textContent);
    console.log(arr);

}


const func_minus = ()=>{

    if(flag == 2){
        arr.push("-");
        type.innerHTML +='-';
        flag = 1;
    }
    else if(flag ==1)
    {
        arr.push(textContent)
        arr.push("-");
        type.innerHTML += "-";
    }

    else{
        type.innerHTML = 0;
    }

    textContent = 0;
    console.log(textContent);
    console.log(arr);

}


const func_mul = ()=>{

    if(flag == 2){
        arr.push("*");
        type.innerHTML +='*';
        flag = 1;
    }
    else if(flag ==1)
    {
        arr.push(textContent)
        arr.push("*");
        type.innerHTML += "*";
    }

    else{
        type.innerHTML = 0;
    }

    textContent = 0;
    console.log(textContent);
    console.log(arr);

}

const func_div = ()=>{

    if(flag == 2){
        arr.push("/");
        type.innerHTML +='/';
        flag = 1;
    }
    else if(flag ==1)
    {
        arr.push(textContent)
        arr.push("/");
        type.innerHTML += "/";
    }

    else{
        type.innerHTML = 0;
    }

    textContent = 0;
    console.log(textContent);
    console.log(arr);

}


const func_equal = () =>{
    if(arr.length == 0)
    {
        return;
    }

    arr.push(textContent);
    console.log(arr);

    while(arr.length > 1)
    {
        // here we are performing the operation based on the operators preceedence
        // order is  "*" -> "/" -> "+" -> "-";
        
        while(arr.includes("*"))
        {
            const t = arr.indexOf("*")

            let temp1 = arr[t-1];
            let temp2 = arr[t+1];

            let ans = temp1*temp2;
            arr.splice(t-1,3,ans);
        }
        
        
        while(arr.includes("/"))
        {
            const t = arr.indexOf("/")

            let temp1 = arr[t-1];
            let temp2 = arr[t+1];

            let ans = temp1/temp2;
            arr.splice(t-1,3,ans);
        }


        


        while(arr.includes("+"))
        {
            const t = arr.indexOf("+")

            let temp1 = arr[t-1];
            let temp2 = arr[t+1];

            let ans = temp1+temp2;
            arr.splice(t-1,3,ans);
        }


        while(arr.includes("-"))
        {
            const t = arr.indexOf("-")

            let temp1 = arr[t-1];
            let temp2 = arr[t+1];

            let ans = temp1-temp2;
            arr.splice(t-1,3,ans);
        }




    }

    console.log(arr);
    textContent  = arr[0];
    type.innerHTML = arr[0];
    flag = 2;



}



// Now lets add keypress from keyboard

document.addEventListener('keypress',(event)=>{

    console.log(event);
var name = event.key;

    if(name == '0')
    func0();
    
if(name == '1')
    func1();

if(name == '2')
    func2();

if(name == '3')
    func3();

    if(name == '4')
    func4();
    
if(name == '5')
    func5();

if(name == '6')
    func6();

if(name == '7')
    func7();

if(name == '8')
    func6();

if(name == '9')
    func7();

if(name == '/')
    func-div();

if(name == '*')
    func_mul();

if(name == '+')
    func_plus();

if(name == '-')
    func_minus();

if(name == '=')
    func_equal();

// for AC

if(name == 'z')
    func_ac();


})
