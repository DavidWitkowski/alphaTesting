
document.addEventListener("mousemove", plsmove);
        function plsmove(e){
            this.querySelectorAll('#cloud').forEach(cloud =>{
                const speed = -50

                const x = (window.innerWidth - e.pageX*speed)/1000
                const y = (window.innerHeight - e.pageY*speed)/1000

                cloud.style.transform = `translateX(${x}px) translateY(${y}px)`
            })
        }