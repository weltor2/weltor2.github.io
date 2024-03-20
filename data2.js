//on load sprawdzanie dat ktore sa i dla kazdej daty sprawdzaj czy jest ciasteczko jak jest to przypisz status ciasteczka 
//obecny check box i nastepny check box rob z moodulo lub jakis interval bo nowa zmienna nie zadziala bo jak nie bedziesz wchodzil na strone przez x czasu to dupa
//moze tak ze last watering data i potem if data +x jest dzis to daj temu chaczyk 
data = new Date();







function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let cookieT = decodedCookie.split(';');
    for(let i = 0; i <cookieT.length; i++) {
      if (cookieT[i].indexOf(name) == 0) {
        return cookieT[i].substring(name.length, cookieT.length);
      }
    }
    return "";
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
            document.cookie = `${days[clickI].innerHTML} = true`
            

        }
        else{
            event.target.src = './notDone.png'
            document.cookie = `${days[clickI].innerHTML} = false`

        }
        
        
    })
    
}


