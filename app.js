const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const generateBtn = document.getElementById("gen-btn")
const result1 = document.getElementById("result-el1")
const result2 = document.getElementById("result-el2")
const clearBtn = document.getElementById("clearBtn")
const textNum = document.getElementById("text-num")


function randomIndex() {
    let rIndex =  Math.floor(Math.random() * characters.length)
    return rIndex
}

function renderPassword() {
    let array1 = []
    let array2 = []
    result1.textContent = ""
    result2.textContent = ""
    for (let i=0; i<textNum.value; i++) {
        array1.push(characters[randomIndex()])
        array2.push(characters[randomIndex()])
        result1.textContent += array1[i]
        result2.textContent += array2[i]
    }
}

function clearItems() {
    array1 = []
    array2 = []
    result1.textContent = ""
    result2.textContent = ""
}

generateBtn.addEventListener("click", function() {
   renderPassword()
})

clearBtn.addEventListener("click", function() {
    clearItems()
})
