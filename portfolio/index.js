


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