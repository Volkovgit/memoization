const add = (x)=>(x+10);

console.log(add(9));


// Функция мемоизации одного аргумента

const memAdd = (n)=> {
    const cache = {}
    return (n)=>{
        if(n in cache){
            console.log('Cached value');
            return cache[n]
        }
        else{
            console.log('Calculating');
            let res = n+10
            cache[n]=res
            return res
        }
    }
}

const newAdd = memAdd()

console.log(newAdd(10));
console.log(newAdd(10));
console.log(newAdd(10));
console.log(newAdd(12));
console.log(newAdd(13));
console.log(newAdd(12));