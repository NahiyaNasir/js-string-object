  // Task-5:
// Capitalize Every first Letter of each word in a String
  

      let string='they take a single expression/value as an input, and then look through several choices until they find one that matches that value, executing the';

  console.log(string);
  let words=string.split(" ");
   console.log(words);
     for(let i=0; i<words.length;i++){
         words[i]=words[i][0].toUpperCase() +words[i].slice(1).toLowerCase();
     }
     console.log(words);
        let convert=words.join(" ");
         console.log(convert)

      
