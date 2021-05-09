window.addEventListener('load',()=>{
    const snd = document.querySelectorAll(".sound");
    const pds = document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual");
    const colors=[
        "#8EE4AF",
        "#e27d60",
        "#c060d3",
        "#d3d160",
        "#606bd3",
        "#60c2d3",
        "#ffffff"
    ];
    
    //adding sound
    pds.forEach((pad,index) =>{
       pad.addEventListener('click',function(){
            snd[index].currentTime=0;
            snd[index].play();
            createBubbles(index);
       });
    });

    //function for creating the bubble
    const createBubbles=(index)=>{
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor=colors[index];
        bubble.style.animation = "jump 1s ease";
        bubble.addEventListener('animationend',function(){
            visual.removeChild(this);
        });
    };
});