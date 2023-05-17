let themeColors = document.querySelectorAll('input[type="radio"]');

// console.log(themeColors);

//store themes

function storeTheme(theme){

    localStorage.setItem("theme", theme);

}




//apply theme 

function applyTheme(){

   const activeTheme =  localStorage.getItem("theme");

   themeColors.forEach((themeOption)=>{

    if(activeTheme === themeOption.id){

        themeOption.checked = true
    }
   })
}


themeColors.forEach((themeOption)=>{

    themeOption.addEventListener("click",()=>{

        // console.log(themeOption)

        storeTheme(themeOption.id)

    })

})


document.onload = applyTheme()