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


for (let i = 0; i < document.querySelectorAll('#waterTBD').length; i++) {
    document.querySelectorAll('#waterTBD')[i].addEventListener('click',event=>{
        event.preventDefault()
        if(event.target.src.slice(-11) =='notDone.png' ){
            event.target.src = './done.png'
            //ciasteczko('19.03',true)
            

        }
        else{
            event.target.src = './notDone.png'
            //ciasteczko('19.03',false)

        }
        
    })
    
}
document.cookie = "name=oeschger; SameSite=None; Secure"
document.cookie = "name=oescwdwdhger; SameSite=Lax; Secure"


function showCookies() {
    const output = document.getElementById("cookies");
    output.textContent = `> ${document.cookie}`;
  }
console.log('sdsd')