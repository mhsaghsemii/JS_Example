const years = ["1999", "2001", "2002", "2003"];
console.log(years);
const ages = new Array("10", "11", "12");
console.log(ages);

console.log(years[0]);
console.log(years.length);
console.log(years[years.length - 1]);
years[0] = "2000";
console.log(years[0]);

console.log((years[4] = "2004"));
console.log(years);

// ADD ELEMENTS TO ARRAY
// LAST
console.log(years.push("2005"));
// FIRST
console.log(years.unshift("1999"));

// REMOVE ELEMENTS FROM ARRAY
// LAST
console.log(years.pop());
// FIRST
console.log(years.shift());

// WHERE IS THE ELEMENT?
console.log(years.indexOf("2004"));

// IS THERE?
console.log(years.includes("2005"));
if (years.includes("2002")) {
  console.log("Yeeeeeeeeeeeeeeeeeeeeeeeeeeeeess🥳");
}

console.log(years);
