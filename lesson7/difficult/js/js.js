 let btn = document.querySelector(".btn");
 btn.onclick = function() {
       animate(function(timePassed) {
      	
      	let  pos = (timePassed) / -5;
        rocket.style.top = pos + 450 + 'px';
        rocket.style.left = timePassed / 5 + 'px';

      }, 2000);
    };

    // Рисует функция draw
    // Продолжительность анимации duration
    function animate(draw, duration) {
      var start = performance.now();
 
      requestAnimationFrame(function animate(time) {
        // определить, сколько прошло времени с начала анимации
        var timePassed = time - start;

        //console.log(time, start)
          // возможно небольшое превышение времени, в этом случае зафиксировать конец
        if (timePassed > duration) timePassed = duration;

        // нарисовать состояние анимации в момент timePassed
        draw(timePassed);

        // если время анимации не закончилось - запланировать ещё кадр
        if (timePassed < duration) {
          requestAnimationFrame(animate);
        }
       
      });
    };