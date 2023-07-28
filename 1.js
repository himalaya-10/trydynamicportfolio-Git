let blob=document.getElementById("blob")

window.onpointermove=e=>{
    const {clientX,clientY}=e
    blob.animate({
        left:`${clientX}px`,
        top:`${clientY}px`},{duration:1000,fill:"forwards"})
}

// const line = document.getElementsByClassName("line")
const menubox=document.getElementById("menubox")
const menu=document.getElementById("menu")
const gs1 = document.getElementById("gridside1");
const gs2 = document.getElementById("gridside2");

menubox.onclick = function() {
    
    menu.classList.toggle('appear')
    gs1.classList.toggle('sidepls')
    gs2.classList.toggle('sidepls')
};
// line.onclick = function() {
    
//   menu.classList.toggle('appear')
//   body.classList.toggle('sidepls')
// };
document.body.onclick=function(e){
    if(e.target.id!=='menubox' && e.target.id!=='menu'){
        menu.classList.remove('appear')
        gs1.classList.remove('sidepls')
        gs2.classList.remove('sidepls')
    }
}

//this for my pic...
const observer1 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      // console.log(entry);
      if (entry.isIntersecting) {
        hiddenimg.classList.add('imgshow');
      } else {
        hiddenimg.classList.remove('imgshow');
      }
    });
  });
  
  const hiddenimgbox = document.querySelector('.pic');
  const hiddenimg = document.querySelector('.mypic');
  observer1.observe(hiddenimgbox);
  



const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});
  
const hiddenelement=document.querySelectorAll('.hidden')
hiddenelement.forEach((el)=>observer.observe(el))



//this is for icons
const iconb= document.querySelectorAll('.iconb');
const observer2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add('icon');
      entry.target.classList.remove('iconb');
    } else {
      entry.target.classList.remove('icon');
      entry.target.classList.add('iconb');
    }
  });
});



iconb.forEach((el)=>observer2.observe(el))


































// addEventListener('scroll',show);
// function show(){

//     // // Get the maximum scroll height
//     // var maxScroll = document.documentElement.scrollHeight - window.innerHeight;

//     // // Map the scroll position to a range from 1 to 100
//     // var mappedValue = (window.scrollY / maxScroll) * 100;

//     // // Round the mapped value to a whole number
//     // var mappedNumber = Math.round(mappedValue);

//     // // Use the mappedNumber for further use
//     // console.log(mappedNumber);












//     const vh = window.innerHeight * 0.01;  // Calculate 1% of the viewport height

//     // Calculate the percentage of the document that has been scrolled
//     const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

//     // Calculate the derived value of vh based on the scroll position
//     const derivedVh = (scrollPercentage * vh);








//     // console.log(derivedVh*100)


//     // console.log(window.scrollY)
//     // let mp=mappedNumber
//     const ws=window.scrollY

//     const pic=document.getElementById('mypic')
//     // console.log(window.innerHeight)

//     // console.log(vh/4)





//     if(ws>derivedVh&&ws<=2*derivedVh){
//         pic.style.transform=`translate3d(${-ws/7}px,0px,0)`
//         pic.style.opacity=`${ws/200}`
//     }
    
// }


const enhance=id=>{
  const element = document.getElementsByClassName(id)
  console.log(element)
  const ele=Array.from(element)
  ele.forEach(elemen=>{
  //  console.log(elemen)
  text=elemen.innerText.split("")
  elemen.innerText=""
   text.forEach(letter => {
       const span=document.createElement("span")
       span.className="letter"
       span.innerText=letter

       elemen.appendChild(span)
       
   });

})
}

enhance("wtext")


const enhance2=id=>{
  const element = document.getElementsByClassName(id)
  console.log(element)
  const ele=Array.from(element)
  ele.forEach(elemen=>{
  //  console.log(elemen)
  text=elemen.innerText.split("")
  elemen.innerText=""
   text.forEach(letter => {
       const span=document.createElement("span")
       span.className="letter2"
       span.innerText=letter

       elemen.appendChild(span)
       
   });

})
}

enhance2("hg")
// enhance2("sd")
// enhance2("skills")

enhance2("sd")