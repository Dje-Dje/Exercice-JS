// exercice du FizBuzz

for (var nombre = 1; nombre <= 100; nombre++) {
    if ((nombre % 3 === 0) && (nombre % 5 === 0)) {
        console.log("FizzBuzz");
    }else if ((nombre % 3 === 0) && (nombre % 7 === 0)){
        console.log("FizzWoof");
    }
    }else if (nombre % 3 === 0){
        console.log("Fizz");
    }else if (nombre % 5 === 0){
        console.log("Buzz");
    } else if (nombre % 7 === 0){
        console.log("Woof");
    } else {
        console.log(nombre);}
}