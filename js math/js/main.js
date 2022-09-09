// var a=Math.PI;
// console.log(a);

// var b=Math.round(8.8);
// console.log(b);

// var c=Math.ceil(10.1);
// console.log(c);

// var d=Math.floor(5.9);
// console.log(d);

// var e=Math.trunc(5.9);
// console.log(e);

// var f=Math.pow(9,2);
// console.log(f);

// var g=Math.sign(09876543);
// console.log(g);

// var h=Math.sqrt(100);
// console.log(h);

// var i=Math.floor(Math.random()*6)
// console.log(i);

// var j=Math.log(2);
// console.log(j);

// var k=Math.log2(32);
// console.log(k);

// var l=Math.log10(1000);
// console.log(l);

// var m=Math.abs(-99);
// console.log(m);

// var n=Math.min(1,2,3,4,5,0);
// console.log(n);

// var o=Math.max(8,9,98,56,-677777);
// console.log(o);

// var p=Math.exp(1);
// console.log(p);

// var q=Math.E;
// console.log(q);

// var r=Math.cbrt(1000);
// console.log(r);


var btn=document.getElementById('color');

const bttn =()=>{
    const ran=Math.floor(Math.random()*167898)
    document.body.style.backgroundColor="#"+ran;
}

btn.addEventListener("click",bttn);
bttn();
