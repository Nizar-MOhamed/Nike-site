const wrapper = document.querySelector(".slider-wrapper")
const menu = document.querySelectorAll(".menu-item")


const products = [
    {
      id: 1,
      title: "Air Force",
      price: 119,
      colors: [
        {
          code: "black",
          img: "./img/commit · safak_youtube@719e53b · GitHub_files/air.png",
        },
        {
          code: "darkblue",
          img: "./img/commit · safak_youtube@719e53b · GitHub_files/air2.png",
        },
      ],
    },
    {
      id: 2,
      title: "Air Jordan",
      price: 149,
      colors: [
        {
          code: "lightgray",
          img: "./img/commit · safak_youtube@719e53b · GitHub_files/jordan.png",
        },
        {
          code: "green",
          img: "./img/commit · safak_youtube@719e53b · GitHub_files/jordan2.png",
        },
      ],
    },
    {
      id: 3,
      title: "Blazer",
      price: 109,
      colors: [
        {
          code: "lightgray",
          img: "./img/commit · safak_youtube@719e53b · GitHub_files/blazer.png",
        },
        {
          code: "green",
          img: "./img/commit · safak_youtube@719e53b · GitHub_files/blazer2.png",
        },
      ],
    },
    {
      id: 4,
      title: "Crater",
      price: 129,
      colors: [
        {
          code: "black",
          img: "./img/commit · safak_youtube@719e53b · GitHub_files/crater.png",
        },
        {
          code: "lightgray",
          img: "./img/commit · safak_youtube@719e53b · GitHub_files/crater2.png",
        },
      ],
    },
    {
      id: 5,
      title: "Hippie",
      price: 99,
      colors: [
        {
          code: "gray",
          img: "./img/commit · safak_youtube@719e53b · GitHub_files/hippie.png",
        },
        {
          code: "black",
          img: "./img/commit · safak_youtube@719e53b · GitHub_files/hippie2.png",
        },
      ],
    },
  ];
  let choosenProduct = products[0]
  const curentProductImg = document.querySelector(".product-img") 
  const curentProductTitle = document.querySelector(".product-title")
  const curentProductPrice = document.querySelector(".product-price")
  const curentProductColor = document.querySelectorAll(".color") 
  const curentProductSize = document.querySelectorAll(".size") 

menu.forEach((item,index)=>{
    item.addEventListener("click", () => {
     wrapper.style.transform = `translateX(${-100 * index}vw)`


     choosenProduct = products[index]
     
     curentProductTitle.textContent=choosenProduct.title
     curentProductSize.textContent=choosenProduct.size
     curentProductPrice.textContent="$" + choosenProduct.price
     curentProductImg.src = choosenProduct.colors[0].img

     curentProductColor.forEach((color,index)=>{
        color.style.backgroundColor = choosenProduct.colors[index].code
     })
    })
})

curentProductColor.forEach((color,index)=>{
    color.addEventListener( "click" , () => {
        curentProductImg.src = choosenProduct.colors[index].img
    })
 })

 curentProductSize.forEach((size,index) => {
  size.addEventListener("click", () => {
    curentProductSize.forEach((size) => {
      size.style.backgroundColor="white"
      size.style.color="black" 
    })
    size.style.backgroundColor="black"
    size.style.color="white"
  })
 })

 const productButton = document.querySelector(".product-button")
 const payment = document.querySelector(".payment")
 const close = document.querySelector(".close")

 productButton.addEventListener("click" , () => {
  payment.style.display = "flex"
 })

 close.addEventListener("click" , () => {
  payment.style.display = "none"
 })