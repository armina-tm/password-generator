const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let password1 = document.getElementById("password-1")
let password2 = document.getElementById("password-2")


function generatePassword(){
    let passLength = 15
    let resultPass1 = []
    let resultPass2 = []

    for(let i=0; i<passLength; i++){
        //to get a random num use Math.floor(Math.random()
        // and muitply it the length of characters array
        // so the array length = to characters array where it pic random value from array
        let randomPass1 = Math.floor(Math.random() * characters.length)
        let randomPass2 = Math.floor(Math.random() * characters.length)

        // the result resultPass will add/increment characters until it reaches 15 length
        //characters[randomPass1] is to get the value of the item in characters array
        //according to its index ([randomPass1])
        resultPass1 = resultPass1 + characters[randomPass1]
        resultPass2 = resultPass2 + characters[randomPass2]

        //we print the resultPass to the field
        password1.textContent = resultPass1
        password2.textContent = resultPass2
    }
}
