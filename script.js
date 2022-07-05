var argDropdown = document.querySelectorAll('.arg-dropdown-menu');
var eggButton = document.querySelector('.egg')
var dropdownArray = Array.prototype.slice.call(argDropdown, 0);
dropdownArray.forEach(function(e) {
    var x = e.querySelectorAll('li');
    var k = document.querySelector('.arg-dropdown-menu');
    var argD = document.querySelector('.arg-dropdown');
    eggButton.onclick = (s) => {
        if(k.classList.contains('show')) {
            e.classList.remove('show');
            argD.classList.remove('shows');
        } else {
            // argD.style.height = "100px";
            argD.classList.add('shows');
            e.classList.add('show');
        }
    }
});

// console.log(dropdownArray);