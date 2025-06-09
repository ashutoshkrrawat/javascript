//! Anything written between {} (curly braces)- in if-else, function, loops etc are scope

{

if (true) {
    let a = 5
    const b = 6
    var c = 7
    d = 8
}

console.log(a); //? gives error (since a can't be accessedd outside the scope)

console.log(b); //? gives error (same reason)

console.log(c); //? give 7 as the output, since c is accessible outside the scope

console.log(d); //? 8 (same reason)

}
//Note: Global scope is differnet in node environment (here) and the browser windows (console)
{

    let a = 300

    if (true) {
        let a = 50
        console.log(a); //since "a" already exist inside the block, it accesses that value of "a"
        //Note: Agar block ke andar wala "a" nahi hota, tab bahar wala access ho jaata. Sicne bahar wala global scoped
    }

    console.log(a); // gives 300, since if block ke andar wala a is not accessible outside its scope (since declared usign let keyword)

}