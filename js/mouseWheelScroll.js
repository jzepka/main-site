window.onload = () => {
        document.onwheel = customScrollFunction;

        function customScrollFunction(event){

    let deltaY = event.deltaY;
    let deltaYSign = Math.sign(deltaY);

    if(deltaYSign==-1){
        document.querySelector(".horizontal-scroll-wrapper").scrollBy({
            top: 0,
            left: -169,
            behavior: 'smooth'
          });

    }else{ 
        document.querySelector(".horizontal-scroll-wrapper").scrollBy({
            top: 0,
            left: 169,
            behavior: 'smooth'
        });
    }

}
      }
