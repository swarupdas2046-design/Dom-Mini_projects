let box = document.querySelector(".box1");
let heart = document.querySelector(".box1 i");
let love = document.querySelector(".love i:nth-child(1)");
let follow = document.querySelector(".left p");
let save = document.querySelector(".save i");
let h3 = document.querySelector(".count h3");


let check = 0;
follow.addEventListener("click", function () {
   if (check == 0) {
      follow.innerHTML = "Unfollow"
      check = 1;
   }
   else {
      follow.innerHTML = "Follow"
      check = 0;
   }
})
// let bh = 0;
// love.addEventListener("click",function(){
//    if (bh ===0) {
//       love.style.color = "red"
//    }
//    else{
//       love.style.color = "white"
//       bh = 1;
//    }

// })

let likes = 7727;
box.addEventListener("dblclick", function () {
   heart.style.transform = "translate(-50%,-50%) scale(2)";
   heart.style.opacity = 1;


   love.style.color = "red"

   if (likes === 7727) {
      h3.innerHTML = ++likes;
   }


   setTimeout(() => {
      heart.style.opacity = 0
   }, 2000);

   setTimeout(() => {
      heart.style.transform = "translate(-50%,-50%) scale(0)";
   }, 3000);

})

let count = 0;
save.addEventListener("click", function () {
   if (count === 0) {
      save.style.color = "white"
      count = 1;
   }
   else {
      save.style.color = "black"
      count = 0;
   }
})
