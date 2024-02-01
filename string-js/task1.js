   

 /*  Task-1:
   Count how many times a string has the letter a*/
   

    let string= 'Count how many times a string has the letter';
   
     

    let Count=0;
    for( let i=0; i<string.length; i++){
        if(string[i].includes('a')){
        Count++;

        }
       
    }
console.log(Count);
