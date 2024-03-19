data = new Date();

for (let i = 0; i < document.querySelectorAll('.day').length; i++) {
    data.setDate((new Date).getDate()-1+i)
    document.querySelectorAll('.day')[i].innerHTML =`${data.getDate()}.${data.getMonth()+1}`    
}
// obowiazki = document.querySelectorAll('.chores')
// obowiazkiT= Array.from(obowiazki) 
// for (let i = 0; i < obowiazki.length; i++) {   
//     obowiazki[i].addEventListener('click',event=>{
//         event.preventDefault()
//         index = obowiazkiT.indexOf(event.target)
//         console.log(index)
//         if(obowiazki[index].innerHTML != ``){
//             console.log('bee')
//         }
//     })

// }

for (let i = 0; i < document.querySelectorAll('#waterTBD').length; i++) {
    document.querySelectorAll('#waterTBD')[i].addEventListener('click',event=>{
        event.preventDefault()
        if(event.target.src.slice(-11) =='notDone.png' ){
            event.target.src = './done.png'

        }
        else{
            event.target.src = './notDone.png'
        }
        
    })
    
}
