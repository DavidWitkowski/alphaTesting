
document.addEventListener("mousemove", plsmove);
        function plsmove(e){
            this.querySelectorAll('.cloud').forEach(cloud =>{
                const speed = -50

                const x = (window.innerWidth - e.pageX*speed)/1000
                const y = (window.innerHeight - e.pageY*speed)/1000

                cloud.style.transform = `translateX(${x}px) translateY(${y}px)`
            })
        }

function textwriter(){

    const text = document.querySelector(".sec-text")

        const textLoad = () => {
          setTimeout(() => {
            text.textContent = "Dawid Witkowski";
          }, 0);
          setTimeout(() => {
            text.textContent = "a Software Tester";
          }, 4000);
          setTimeout(() => {
            text.textContent = "a Web Developer";
          }, 8000);
        }
        textLoad();
        setInterval(textLoad, 12000);

    }