 let stars=document.querySelectorAll(".fa")
 let field=document.querySelector(".field")
 stars.forEach((str,ind)=>{
  str.addEventListener("click",()=>{
     let inde=undefined
     inde=ind+1   //here we captured the current clicked str ind. say i clicked 2nd str has index 1
     stars.forEach((stars,index)=>{
 if(inde>=index+1){           //here index of each start checked and if condition is applied for each star //here this inde condition checkhed for each satr mean 01 star index got the color if you cliked the 2nd index str

  stars.classList.add("text-yellow-500")
field.innerHTML=`eleted field value is :${inde}`
 }else{
  stars.classList.remove("text-yellow-500")
  field.innerHTML=`seleted field value is :${inde}`
 }
     })
  })
 })

 stars.forEach((str,ind)=>{
  str.addEventListener("mouseover",()=>{
    let inde=ind+1
    stars.forEach((stars,index)=>{
if(inde>=index+1){
  stars.classList.add("text-yellow-500")
}else{
  stars.classList.remove("text-yellow-500")
}
    })
  })
 })
 stars.forEach((str,ind)=>{
  str.addEventListener("mouseout",()=>{
    let inde=ind+1
    stars.forEach((stars,index)=>{
if(inde>=index+1){
  stars.classList.add("text-yellow-500")
}else{
  stars.classList.remove("text-yellow-500")
}
    })
  })
 })