function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if(num.value.length == 0){
        alert('Favor digite um número!')
    }else{
        let n = Number(num.value)
        let c = 1
        while (c <= 10){
            let item = documento.createElement('option')
            item.text =`${num} x ${c} = ${num*c}`
            tab.appendChild(item)
            c++
        }
    }
}