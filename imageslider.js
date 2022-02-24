let image_array=['bb.jpg','12.png','aa.png','je.jpg']
let arrayLength= image_array.length
let i=0
let set = setInterval(slider_func,5000)
//slider_func -> function call
//5000 -> 5 seconds

function slider_func(){
    i++
    i=i%arrayLength

    document.querySelector('img').src=`images/${image_array[i]}`

}
function Nex(){
    i++
    i=i%arrayLength
    document.querySelector('img').src=`images/${image_array[i]}`

}
function prev(){
    i--
    if(i<0){
        i=arrayLength-1
    }
    document.querySelector('img').src=`images/${image_array[i]}`


}