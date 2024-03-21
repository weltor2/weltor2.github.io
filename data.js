
data = new Date();


daysT =[]

cheks = document.querySelectorAll('#waterTBD')
cheksT = Array.from(cheks)
days= document.querySelectorAll('.day')

spray = document.querySelectorAll('#sprayTBD')
sprayT = Array.from(spray)
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

Asplenium = {daysTW:4 , daysTS:2, firstW:'Wed Mar 20 2024'}
Beaucarnea ={daysTW:14 , daysTS:0, firstW:'Wed Mar 20 2024'}
Begonia = {daysTW:6 , daysTS:0, firstW:'Wed Mar 20 2024'}
Biophytum ={daysTW:6 , daysTS:0, firstW:'Wed Mar 20 2024'}
Calathea = {daysTW:7 , daysTS:1, firstW:'Wed Mar 20 2024'}
Ceropegia = {daysTW:10 , daysTS:0, firstW:'Wed Mar 20 2024'}
Clematicissus = {daysTW:5 , daysTS:1, firstW:'Wed Mar 20 2024'}
Coffea = {daysTW:5 , daysTS:1, firstW:'Wed Mar 20 2024'}
Dischidia = {daysTW:4 , daysTS:4, firstW:'Wed Mar 20 2024'}
Dracaena ={daysTW:14 , daysTS:3, firstW:'Wed Mar 20 2024'}
Epiphyllum = {daysTW:7 , daysTS:4, firstW:'Wed Mar 20 2024'}
Monkey = {daysTW:4 , daysTS:1, firstW:'Wed Mar 20 2024'}
Nematanthus = {daysTW:7 , daysTS:3, firstW:'Wed Mar 20 2024'}
Nephrolepis ={daysTW:5 , daysTS:1, firstW:'Wed Mar 20 2024'}
Peperomia = {daysTW:7 , daysTS:0, firstW:'Wed Mar 20 2024'}  ///date.todatestring()
Philodendron = {daysTW:7 , daysTS:2, firstW:'Wed Mar 20 2024'}
Pilea = {daysTW:7 , daysTS:1, firstW:'Wed Mar 20 2024'}
Sansewieria = {daysTW:21 , daysTS:0, firstW:'Wed Mar 20 2024'}

/////////////////////////////////////////////////////////////////

if(eval(nazwa).daysTS == 0){
    document.querySelector('#kalendarz').querySelectorAll('tr')[2].style.display = 'none'
}

for (let i = 0; i < days.length; i++) {
    data.setDate((new Date).getDate()-1+i)
    days[i].innerHTML =`${data.getDate()}.${data.getMonth()+1}`  

    daysApart = Math.round((new Date(data.toDateString()).getTime() - new Date(Peperomia.firstW).getTime()) /(1000 *3600 *24))
    
    
    if(Math.abs(daysApart)%eval(nazwa).daysTW == 0){
        cheks[i].style.display = 'inline'
        
    }
    if(Math.abs(daysApart)%eval(nazwa).daysTS == 0){
        spray[i].style.display = 'inline'
        
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
            document.cookie = `${nazwa}/water/${daysT[clickI]} = true`
        }
        else{
            event.target.src = './sideImg/notDone.png'
            document.cookie = `${nazwa}/water/${daysT[clickI]} = false`

        }  
    })   
}

for (let i = 0; i < spray.length; i++) {
    spray[i].addEventListener('click',event=>{
        event.preventDefault()
        clickI =(sprayT.indexOf(event.target))
        if(event.target.src.slice(-11) =='notDone.png' ){
            event.target.src = './sideImg/done.png'
            document.cookie = `${nazwa}/spray/${daysT[clickI]} = true`
        }
        else{
            event.target.src = './sideImg/notDone.png'
            document.cookie = `${nazwa}/spray/${daysT[clickI]} = false`
        }  
    })   
}



for (let i = 0; i < daysT.length; i++) {
    if(getCookie(`${nazwa}/water/${daysT[i]}`) == 'true'){
        cheks[i].style.display = 'inline'
        cheks[i].src = './sideImg/done.png'
    } 
    else if(getCookie(`${nazwa}/water/${daysT[i]}`) == 'false'){
        cheks[i].style.display = 'inline'
        cheks[i].src = './sideImg/notDone.png'
    }
    if(getCookie(`${nazwa}/spray/${daysT[i]}`) == 'true'){
        spray[i].style.display = 'inline'
        spray[i].src = './sideImg/done.png'
    } 
    else if(getCookie(`${nazwa}spray/${daysT[i]}`) == 'false'){
        spray[i].style.display = 'inline'
        spray[i].src = './sideImg/notDone.png'
    }
}



