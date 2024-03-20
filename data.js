
data = new Date();


daysT =[]

cheks = document.querySelectorAll('#waterTBD')
cheksT = Array.from(cheks)
days= document.querySelectorAll('.day')

const nazwa = (document.querySelector('#srodek').innerText).split(' ')[0] 




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

///////////////////////All Plants//////////////////////////


Peperomia= {daysTW:2 , firstW:'Mon Mar 20 2024'}  ///date.todatestring()



/////////////////////////////////////////////////////////////////


for (let i = 0; i < days.length; i++) {
    data.setDate((new Date).getDate()-1+i)
    days[i].innerHTML =`${data.getDate()}.${data.getMonth()+1}`  

    daysApart = Math.round((data.getTime() - new Date(Peperomia.firstW).getTime()) /(1000 *3600 *24))
    
    if(daysApart%eval(nazwa).daysTW == 0){
        cheks[i].style.display = 'inline'
        document.cookie = `${nazwa}/${daysT[i]} = false`
    }
}

for (let i = 0; i < days.length; i++) {
    daysT.push(days[i].innerHTML)
}




for (let i = 0; i < cheks.length; i++) {
    cheks[i].addEventListener('click',event=>{
        event.preventDefault()

        clickI =(cheksT.indexOf(event.target))


        if(event.target.src.slice(-11) =='notDone.png' ){
            event.target.src = './sideImg/done.png'
            document.cookie = `${nazwa}/${daysT[clickI]} = true`
            

        }
        else{
            event.target.src = './sideImg/notDone.png'
            document.cookie = `${nazwa}/${daysT[clickI]} = false`

        }
        
        
    })
    
}




for (let i = 0; i < daysT.length; i++) {
    if(getCookie(`${nazwa}/${daysT[i]}`) == 'true'){
        cheks[i].style.display = 'inline'
        cheks[i].src = './sideImg/done.png'
    } 
    else if(getCookie(`${nazwa}/${daysT[i]}`) == 'false'){
        cheks[i].style.display = 'inline'
        cheks[i].src = './sideImg/notDone.png'
    }   
}



