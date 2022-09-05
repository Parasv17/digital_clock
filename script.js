const hr_el= document.getElementsByClassName("hours")[0]
const min_el= document.getElementsByClassName("minutes")[0]
const sec_el= document.getElementsByClassName("seconds")[0]
const ampm_el= document.getElementsByClassName("ampm")[0]


function digital_clock_reset(){
    let h=new Date().getHours();
    let m=new Date().getMinutes();
    let s=new Date().getSeconds();
    let ampm="AM"
    
    
    if (h>12){
        h= h-12
        ampm="PM"
    }
    h= h<10? "0"+h:h;
    m= m<10? "0"+m:m;
    s= s<10? "0"+s:s;

    hr_el.innerHTML=h
    sec_el.innerHTML=s
    min_el.innerHTML=m
    ampm_el.innerHTML=ampm

}
setInterval(() => {
    digital_clock_reset()
    
}, 1000);
// digital_clock_reset()