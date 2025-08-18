/*console.log("Namaskara Bengaluru")

let name='Jhenkar';
const age=20;
console.log(name,age)

function add(x,y)
{
    return x+y
}
console.log(add(5,20))

function subt(x,y)
{
    return x-y
}

function mul(x,y)
{
    return x*y
}
console.log(subt(5,20))
console.log(mul(5,20))

let colours=['red','green','blue']*/

function changeBG(){
    let r=Math.trunc(Math.random()*256);
    let g=Math.trunc(Math.random()*256);
    let b=Math.trunc(Math.random()*256);

    let body_bg = document.querySelector('body');
    body_bg.style.cssText=`background-color:rgb(${r},${g},${b})`;
    
    let h3_bg= document.querySelector('h3');
    h3_bg.innerHTML=`rgb(${r},${g},${b})`;

}

let mode=document.querySelector('#mode');
let body=document.querySelector('body');
let premode='light';
mode.addEventListener('click',() => {
    if (premode ==='light'){
        premode='dark';
        body.classList.add('dark');
        body.classList.remove('light');
     }else{
        premode='light';
        body.classList.add('light');
        body.classList.remove('dark');
    }
    console.log(premode);
});

let images = document.getElementsByTagName('img');
for(let i=0; i < images.length; i++){
    images[i].addEventListener('click',function(){
        document.querySelector('body').style.cssText = `
        background-image:url(${images[i].src});
        background-repeat: no-repeat;
        background-size: fit;
        background-position: center;

        `;
    });
}


