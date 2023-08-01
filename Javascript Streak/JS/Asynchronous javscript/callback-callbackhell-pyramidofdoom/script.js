const hd1=document.querySelector(".hd-1")
const hd2=document.querySelector(".hd-2")
const hd3=document.querySelector(".hd-3")
const hd4=document.querySelector(".hd-4")
const hd5=document.querySelector(".hd-5")
const hd6=document.querySelector(".hd-6")
const hd7=document.querySelector(".hd-7")



setTimeout(()=>{
    hd1.textContent="one";
    hd1.style.color="violet";
    setTimeout(()=>{
        hd2.textContent="two";
        hd2.style.color="purple";
        setTimeout(()=>{
            hd3.textContent="three";
            hd3.style.color="red";
            setTimeout(()=>{
                hd4.textContent="four";
                hd4.style.color="pink";
                setTimeout(()=>{
                    hd5.textContent="five";
                    hd5.style.color="green";
                    setTimeout(() => {
                        hd6.textContent="six";
                        hd6.style.color="blue";
                        setTimeout(()=>{
                            hd7.textContent="seven";
                            hd7.style.color="brown";
                        },1000)
                    },3000);
                },2000)
            },1000)
        },2000)
    },2000)
},1000)