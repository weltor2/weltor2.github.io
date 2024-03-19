//on load sprawdzanie dat ktore sa i dla kazdej daty sprawdzaj czy jest ciasteczko jak jest to przypisz status ciasteczka 
//obecny check box i nastepny check box rob z moodulo lub jakis interval bo nowa zmienna nie zadziala bo jak nie bedziesz wchodzil na strone przez x czasu to dupa





data = new Date();
function ciasteczko(name,status){
    d = new Date()
    d.setTime(data.getTime() + (32 *24*60*60*1000))
    let expr = "expires="+d.toUTCString()
    document.cookie = name + '=' + status + ';' + expr + ";path=/cookies"

}




for (let i = 0; i < document.querySelectorAll('.day').length; i++) {
    data.setDate((new Date).getDate()-1+i)
    document.querySelectorAll('.day')[i].innerHTML =`${data.getDate()}.${data.getMonth()+1}`    
}


cheks = document.querySelectorAll('#waterTBD')
cheksT = Array.from(cheks)
days= document.querySelectorAll('.day')


for (let i = 0; i < cheks.length; i++) {
    cheks[i].addEventListener('click',event=>{
        event.preventDefault()

        clickI =(cheksT.indexOf(event.target))



        if(event.target.src.slice(-11) =='notDone.png' ){
            event.target.src = './done.png'
            ciasteczko(`${days[clickI].innerHTML}`,true)
            console.log(`${days[clickI].innerHTML}`)

        }
        else{
            event.target.src = './notDone.png'
            ciasteczko(`${days[clickI].innerHTML}`,false)

        }
        
        
    })
    
}


