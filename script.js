var argDropdown = document.querySelectorAll('.arg-dropdown');
var eggButton = document.querySelector('.egg')
var dropdownArray = Array.prototype.slice.call(argDropdown, 0);
dropdownArray.forEach(function(e) {
    // console.log(e);
    // var x = e.querySelector('li');
    // var k = e.querySelector('.arg-dropdown-menu ');
    var k = e.querySelector('i[data-toggle="dropdown"]');
    var argD = e.querySelector('.arg-dropdown-menu');
    k.onclick = function(y){
        console.log(k);
        console.log(y);
                // console.log(this.s);
        if(argD.classList.contains('show')) {
            e.classList.remove('show');
            // argD.classList.remove('shows');
            console.log('ini'); 
            argD.classList.remove('show');
            k.classList.remove('rotate');
        } else {
            console.log('sukses');
            argD.classList.add('show');
            // argD.style.height = "100px";
            // argD.classList.add('shows');
            k.classList.add('rotate');
            e.classList.add('show');
            }
    } 
});

// console.log(dropdownArray);
