let _inp = document.getElementById('_inp')
let _li = document.querySelectorAll('ul>li')


function myFunc() {
    _li.forEach(val=>{
        val.style.display = 'none'
    })
}

_li.forEach(val=>{
    let txt =  val.textContent
    val.setAttribute('data-text',txt)
})

_inp.addEventListener('input',(e)=>{   
    let valInp =  e.target.value  
    if(valInp != '' && valInp != null){
        _li.forEach(val=>{ 
            let _txt = val.getAttribute('data-text')
            if(_txt.substring(0,valInp.length) == valInp){
                val.style.display = 'block'
                val.innerHTML = '<b style="color:wheat">'+_txt.substring(0,valInp.length)+'</b>'+_txt.substring(valInp.length,_txt.length)                  
            }
        })
    }else{        
        myFunc()
    }  

})