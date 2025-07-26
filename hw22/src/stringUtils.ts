// `capitalize`, которая делает первую букву строки заглавной.

function capitalize(string: string){
    if(typeof string !== 'string' || string.length === 0){
        return string;
    }
    return string.charAt(0).toLocaleUpperCase() + string.slice(1)

}
const string = "hello"
console.log(capitalize(string));



// `reverseString`, которая переворачивает строку задом наперед.

function reverseString(string: string){
    const array = string.split(" ")
    const reverse = array.reverse()
    const reverseString = reverse.join(" ")
    console.log(reverseString);
}
reverseString("Hello Yuli")