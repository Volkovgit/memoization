module.exports = (fn)=>{
    const cache = {}
    return (...args)=>{
        let arg = args[0]
        if(arg in cache){
            console.log('Cachced');
            return cache[arg]
        }
        else{
            console.log('Counting');
            let countResult = fn(arg)
            cache[arg] = countResult;
            return countResult
        }
    }
}


const objTest = {a:5}
const objTest2 = {a:5}
console.log(objTest === objTest2);
