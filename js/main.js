const toggleBtn = document.querySelector('.toggleBtn');

        toggleBtn.addEventListener("click", (event) => {
            event.currentTarget.classList.toggle('active');
        });

        $(document).ready(function(){

        $(".toggleBtn").click(function(){
        $(".toggleMenu").stop().slideToggle(300);
        })
  
        $(".navi > li").mouseover(function(){
        $(this).find(".depth2").stop().slideDown(300);
        }).mouseout(function(){
        $(this).find(".depth2").stop().slideUp(300);
        });

        });