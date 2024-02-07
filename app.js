// Problem-01 : Help The Zoo Manager
function calculateMoney(ticketSale)
{
    if(ticketSale >= 0)
    {
        return (ticketSale * 120) - ( 500 + (8 * 50));
    }
    else{
        return "Invalid Number";
    }
}

// Problem-02: Good Name , Bad Name
function checkName(name){

    if(typeof name == "string")
    {
        let naam = name.toLowerCase();
        let len = naam.length-1;
        if(naam[len]=='a' || naam[len]=='y' || naam[len]=='i' || naam[len]=='e' || naam[len]=='o' || naam[len]=='u' || naam[len]=='w')
        {
            return "Good Name";
        }
        else{
            return "Bad Name";
        }
    }
    else{
        return "invalid";
    }
}

// Problem 03 : Virus in my Array
function deleteInvalids(array){
    if (!Array.isArray(array)) {
        return "Invalid Array";
    }
    let arr = [];
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === "number" && !isNaN(array[i])) {
            arr.push(array[i]);
        }
    }
    return arr;
}

// Problem 04 : Make A Great Password
function password(obj)
{
    let site= obj.siteName[0].toUpperCase() + obj.siteName.slice(1);
    return `${site}#${obj.name}@${obj.birthYear}`;

}


console.log(calculateMoney(10));
console.log(calculateMoney(1055));
console.log(calculateMoney(93));
console.log(calculateMoney(-130));

console.log(checkName("Salman"));
console.log(checkName("RAFEE"));
console.log(checkName("Jhankar"));
console.log(checkName(199));
console.log(checkName(["Rashed"]));

let a= [1 , null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }];
console.log(deleteInvalids(a));

let obj= {
    name: "kolimuddin" , birthYear: 1999 , siteName: "google"
}
console.log(password(obj));
