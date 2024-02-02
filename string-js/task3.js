/*
Check whether a string contains all the vowels a, e, i, o, u*/


   let hasVowel=' MY NAME IS  SUHAI LOVE BANGLADESH ';
    hasVowel=hasVowel.toLowerCase();
    console.log(hasVowel)
    hasVowel.includes('a')&&
    hasVowel.includes('i')&&
    hasVowel.includes('e')&&
    hasVowel.includes('o')&&
    hasVowel.includes('u')
    ? console.log(`All vowels found`)
    :console.log(`vowels not found`);
     
 