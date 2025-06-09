
const startbtn=document.querySelector("#start")
const stopbtn=document.querySelector("#stop")

const start=function startprint() {
    intervalid=setInterval(() => {
        console.log("adasrsh")
        console.log("bhattu")
        
   }, 2000);
}

const stop=function stopprint(){
    clearInterval(intervalid)
}
startbtn.addEventListener('click',start)    
stopbtn.addEventListener('click',stop)
