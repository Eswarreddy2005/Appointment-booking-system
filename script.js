const f=document.getElementById('f'),list=document.getElementById('list');
let b=JSON.parse(localStorage.getItem('bookings')||'[]');
function render(){list.innerHTML='';b.forEach(x=>{let li=document.createElement('li');li.textContent=`${x.name} - ${x.date} ${x.time}`;list.appendChild(li);});}
render();
f.onsubmit=e=>{e.preventDefault();b.push({name:name.value,date:date.value,time:time.value});localStorage.setItem('bookings',JSON.stringify(b));render();f.reset();alert('Appointment Booked Successfully!');};