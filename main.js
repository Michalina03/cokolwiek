let i = 1
while(i <= 10){
let str = ""
k = 1
while(k <= 10){
str += String(i * k).padStart(4, '')
k ++
}
console.log(str)
i ++
}



let suma = 0;
let liczba = 1;
while (liczba <= 100) {
    suma += liczba;
    liczba++;
}
console.log("Suma liczb od 1 do 100 wynosi: " + suma);
