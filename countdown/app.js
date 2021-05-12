const countdown = () =>{
    //choose any date you would like ti count dowm to
    const countDate = new Date('May 12, 2021 10:36:00').getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

   
    
    const second = 1000;
    const minute = second*60;
    const hour = minute*60;
    const day = hour*24;

    const textDay = Math.floor(gap/day);
    
    const textHour = Math.floor((gap%day)/hour)
    
    const textMinute = Math.floor(gap%hour/minute) 
   
    const textSecond = Math.floor(gap%minute/second) 
    
    document.querySelector('.day').textContent = textDay;
    document.querySelector('.hour').textContent = textHour;
    document.querySelector('.minute').textContent = textMinute;
    document.querySelector('.second').textContent = textSecond;

   if(gap<=0){
       itIsTime();
        
   }
    
}


setInterval(countdown,1000);

function itIsTime(){
    const screen = document.querySelector('.coming-soon');
    screen.innerHTML =  '<h1>Now is the time</h1>' 
}