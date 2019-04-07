document.addEventListener('DOMContentLoaded', function() {
    
    let wrapperTable = document.querySelector('js--wrapper-table');
    console.log(document.querySelector('.js--curso-list-expand'))
    document.querySelector('.js--curso-list-expand').addEventListener('change', function(event) {
        callAPI(event.target.value)
        
    });
    
    




    function callAPI(idCurso) {

        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                
                wrapperTable.innerHTML = xhttp.responseText;
            }
        };
        xhttp.open("GET", "filename", true);
        xhttp.send();
    }


});