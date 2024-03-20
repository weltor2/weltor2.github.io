//on load sprawdzanie dat ktore sa i dla kazdej daty sprawdzaj czy jest ciasteczko jak jest to przypisz status ciasteczka 
//obecny check box i nastepny check box rob z moodulo lub jakis interval bo nowa zmienna nie zadziala bo jak nie bedziesz wchodzil na strone przez x czasu to dupa
//moze tak ze last watering data i potem if data +x jest dzis to daj temu chaczyk 
data = new Date();







function getCookie(cname) {
    let name = cname + "=";
    let cookieT = document.cookie.split(';');
    for(let i = 0; i <cookieT.length; i++) {
        let single = cookieT[i];
        while (single.charAt(0) == ' ') {
            single = single.substring(1);
        }
        if (single.indexOf(name) == 0) {
            return single.substring(name.length, single.length);
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

daysH = document.querySelectorAll('.day')
daysT =[]
for (let i = 0; i < daysH.length; i++) {
    daysT.push(daysH[i].innerHTML)
}

for (let i = 0; i < daysT.length; i++) {
    console.log(getCookie(daysT[i]))
    if(getCookie(daysT[i])){
        console.log('pomidor')
    }    
}
