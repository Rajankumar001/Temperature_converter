var small_box=document.querySelector('.small_box');
var btn=document.querySelector('.btn');
var icon=document.querySelector('.icon');
var celcius_input=document.querySelector('#celcius_input');
var output_1=document.querySelector('.output_1');
var get_far=document.querySelector('.get_far');
var fara_input=document.querySelector('#fara_input');
var output_2=document.querySelector('.output_2');
var get_cel=document.querySelector('.get_cel');
 function celtofar(value_1){
      let far=(value_1*(9/5))+32;
      output_1.innerHTML=`${far}F`;  
 }
 function fartocel(value_2){
    let cel=(value_2-32)*(5/9);
    output_2.innerHTML=`${cel}C`;  
}
icon.addEventListener("click",()=>{
    small_box.style.display='none';
})

btn.addEventListener("click",()=>{
    small_box.style.display='block';
})
get_far.addEventListener("click",()=>{
    celtofar(celcius_input.value);
});
get_cel.addEventListener("click",()=>{
    fartocel(fara_input.value);
});