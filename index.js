let myform=document.forms.myform
let pass=document.getElementById('pass')
let cpass=document.getElementById('cpass')
let email=document.getElementById('email')
let phon=document.getElementById('phon')

email.addEventListener('input',(e)=>{
        if(email.value.includes("@")){
            email.style.border='1px solid gray'
            
        }
        else{
            email.style.border='1px solid red'
        }

})
phon.addEventListener('input',(e)=>{
    if(phon.value.includes("0")){
        phon.style.border='1px solid gray'
        
    }
    else{
        phon.style.border='1px solid red'
    }

})
cpass.addEventListener('input',(e)=>{
    if(pass.value!==cpass.value){
        cpass.style.border='1px solid red'

    }
    else{
        cpass.style.border='1px solid gray'

    }


})
// console.log(myform);
myform.addEventListener('submit',(e)=>{
    e.preventDefault()

    let data=new FormData(myform)
    let obj=Object.fromEntries(data)
    console.log(obj);
})



