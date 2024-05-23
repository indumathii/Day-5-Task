const resumeobj={
    Name:"Indumathi.S",
    Place:"Chennai",
    Occupation:"Software Engineer",
    Programming_languages:"java,python,c,c++",
    Years_of_Experience:"2.5 years",
    Domain:"ETL"
}

// iterating using for loop
console.log("iterating using for loop")
let key1=Object.keys(resumeobj)
for (let i=0;i<key1.length;i++)
    {
        console.log(key1[i]+" : "+resumeobj[key1[i]])
    }

//iterating using for in loop

console.log("iterating using for in loop")

for (keys in resumeobj)
    {
        console.log(keys+" : "+ resumeobj[keys]) 
    }

    //iterating using for of loop
console.log("iterating using for of loop")

let entries=Object.entries(resumeobj)
for([key,value] of entries)
    {
        console.log(key+" : "+value)

    }

//iterating using for Each loop
console.log("iterating using for Each loop")
 entries=Object.entries(resumeobj)

 entries.forEach(([key,value])=>
 {
    console.log(key+" : "+value)
 });
 