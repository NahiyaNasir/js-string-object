/*
 Task 4 (Hard)
Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

Input: const statement = 'I am a hard working person'

Output:

'person working hard a am I'
*/
 



const statement = 'I am a hard working person'
  splitted=statement.split(' ').reverse().join(' ');
    console.log(splitted);

   /*  let box=[]
    let final='';
     for(words of splitted){
        console.log(words);
        box.unshift(words);
        final=box.join(' ')
     }
    
     console.log(final)*/

 /*for(var i=0; i<5; i++){
    setTimeout (function(){
 console.log(i);
    } ,100)}*/
    