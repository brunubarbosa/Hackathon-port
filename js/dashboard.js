document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('tbody tr').forEach(function(element) {
        element.addEventListener('click', function() {
            window.location.href = '/detalhe-navio-v2.html';
        })
    })
})