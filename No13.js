/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    let sum_ans = 0;
    let check = "";
    let myMap = new Map();
    myMap.set("I", 1);
    myMap.set("V", 5);
    myMap.set("X", 10);
    myMap.set("L", 50);
    myMap.set("C", 100);
    myMap.set("D", 500);
    myMap.set("M", 1000);
    myMap.set("IV", 4);
    myMap.set("IX", 9);
    myMap.set("XL", 40);
    myMap.set("XC", 90);
    myMap.set("CD", 400);
    myMap.set("CM", 900);

    for(let i = 0; i < s.length; i++)
    {
        check = "";
        if( i + 1 < s.length)
        {
            check = s[i].concat(s[i + 1]);
            // console.log(check);
        }
        
        if(myMap.has(check))
        {
            sum_ans += myMap.get(check);
            i ++;
        }
        else
        {
            sum_ans += myMap.get(s[i]);
        }
    }
    return sum_ans;
};

// let s = "MCMXCIV";

// console.log(romanToInt(s));