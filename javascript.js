
    const checkbox = document.getElementById('checkbox');
    checkbox.addEventListener('change',() =>
    {
        document.body.classList.toggle('dark');
    });
   //  const checkbox2 = document.getElementById('check');
    // for (var i = 0; i < 6; i++) {   
    //     var nav;
    //     nav[i] = document.getElementById('i');
    //     nav[i].onclick = function() {
    //         if(checkbox2.checked == true){ 
    //         checkbox2.checked = false;
    //    }
    // };   
    //     } 
    const checkbox2 = document.getElementById('check');
    var nav1 = document.getElementById('1');
    var nav2 = document.getElementById('2');
    var nav3 = document.getElementById('3');
    var nav4 = document.getElementById('4');
    var nav5 = document.getElementById('5');
    nav1.onclick = function() {
       if(checkbox2.checked == true){ 
        checkbox2.checked = false;
       }
    };
    nav2.onclick = function() {
       if(checkbox2.checked == true){ 
        checkbox2.checked = false;
       }
    };
    nav3.onclick = function() {
       if(checkbox2.checked == true){ 
        checkbox2.checked = false;
       }
    };
    nav4.onclick = function() {
       if(checkbox2.checked == true){ 
        checkbox2.checked = false;
       }
    };
    nav5.onclick = function() {
       if(checkbox2.checked == true){ 
        checkbox2.checked = false;
       }
    };
