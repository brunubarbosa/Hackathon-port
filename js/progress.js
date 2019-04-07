document.addEventListener("DOMContentLoaded", function() {
  
    var progressBar = document.querySelectorAll(".progress-bar-owner");
    var hoverPoint = document.querySelectorAll(".js--progress-hover");
    var time = 1500;
    
    hoverPoint.forEach(function(element) {
        console.log(element)
        element.addEventListener('mouseover', function() {
            let dataTooltip = element.getAttribute('data-tooltip')
            console.log(dataTooltip)
            document.querySelector(`.js--tooltip-progress[data-tooltip="${dataTooltip}"]`).classList.toggle('d-none')
        })
        element.addEventListener('mouseout', function() {
            let dataTooltip = element.getAttribute('data-tooltip')
            document.querySelector(`.js--tooltip-progress[data-tooltip="${dataTooltip}"]`).classList.toggle('d-none')
        })
    })



    progressBar.forEach(function(i) {
      let label = document.querySelector('.js--wrapper-img-ship');
      console.log(label)
      let line = i.querySelector('.js--line');
      let count = 0;
      let dataCount = label.getAttribute("data-count");
      let lineCount = line.children[0];
   
      let runTime = time/dataCount;
      
      let animationLineCount = setInterval(function(){
        if(count < dataCount){
          count++;
          label.style.marginLeft= (count+15) + '%';
          lineCount.style.width = count + '%';
        }
      },runTime);
    });
  });
  