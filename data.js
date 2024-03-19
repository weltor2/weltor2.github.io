data = new Date();

for (let i = 0; i < document.querySelectorAll('.day').length; i++) {
    data.setDate((new Date).getDate()-1+i)
    document.querySelectorAll('.day')[i].innerHTML =`${data.getDate()}.${data.getMonth()+1}`    
}
