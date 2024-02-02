

/*Count how many times a string has the letter a or A*/
 let str='Count how many times a string has the letter a or A';
  let count=0;
    for( let i=0;i<str.length;i++ ){
        if(str[i].includes('a')
         ||str[i].includes('A')){
            count++;
        }
       
    }
    console.log(count)