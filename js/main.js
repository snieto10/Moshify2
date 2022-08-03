const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);

const btn = document.getElementById('btn')
        
        btn.addEventListener('click', function master(){
            let master = document.getElementsByTagName('p');
            let masterEl = master[1].innerHTML = 'Code editors';
            console.log(masterEl) //Code editors
        })
