data = new Date();
console.log(data.getMonth()+1,data.getDate())

for (let i = 0; i < document.querySelectorAll('.day').length; i++) {
    document.querySelectorAll('.day')[i].innerHTML =`${new Date().getDate()-1+i}.${new Date().getMonth()+1}`    
}
//https://stackoverflow.com/questions/23081158/javascript-get-date-of-the-next-day