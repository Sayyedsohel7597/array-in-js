var obj = {
        id: 1,
        brand: "nykee",
        color: "black",
        number: 9,
        price: 1430,
        description: "made in india, handmade",
        arr: ["bags", "snadles", "cosmetics", "sunglasse", "tshirts"], //yaha object k andar array hai
        package: function() {
            return 7083328954;
        },
        about: function() {
            return this.brand + " " + this.color; //yaha about ka parent obj h aur uske properties ko iterate karna tha islie this.
        },
        watches: {
            one: "titan",
            two: "sonata",
            three: "fastrack"

        }
    }
    // console.log(obj);
    /*
    { id: 1, brand: 'nykee', color: 'black', number: 9, price: 1430, … }
    brand
        :
        "nykee"
    color
        :
        "black"
    description
        :
        "made in india, handmade"
    id
        :
        1
    number
        :
        9
    price
        :
        1430[[Prototype]]:
        Object
        */
    // console.log(obj.brand); //nykee




// console.log(obj.arr);
/*
 ['bags', 'snadles', 'cosmetics', 'sunglasse', 'tshirts']
*/

//console.log(obj.arr[0]); //bags
//console.log(obj.arr[1]); //snadles
//console.log(obj.arr[2]); //cosmetics
//console.log(obj.arr[3]); //sunglasse


// console.log(obj.package()); //() parenthesys is liye lagaye kyu k ye function hai   //7083328954


// console.log(obj.about()); //nykee black


// yaha par obj k method h package aur about  aur baki k jo h properties h


console.log(obj.watches); //index.js:70 {one: 'titan', two: 'sonata', three: 'fastrack'}
console.log(obj.watches.one); //titan
console.log(obj.watches.two); //sonata
console.log(obj.watches.three); //fastrack