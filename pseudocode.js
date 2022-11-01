BEGIN

function distanceToNearestVowel(str) 
  SET vowelIndexArray = [] as array for capturing index values of vowel letters from the given string;
  SET answer = [] as array of distances from vowels;
  SET vowelIndex = 0 as index of vowel;
  SET isVowel = (letter) =>
    IF letter = ('a' or 'e' or 'i' or 'o' or 'u')
    THEN return true;
    ELSE return false;
    END IF;

  FOR every index of all the vowels in the string DO populate vowelIndexArray
    IFisVowel of the string is a vowel
      THEN return vowelIndex and push in VowelIndexArray;
    END IF
  END FOR

  FOR every consonant in the string subtract known vowelIndexes closest to it DO populate answer array
        SET distanceA = absolute value of(the difference between first closest [vowelIndex] and index of the consonant[i]);
        SET distanceB = absolute value of(the difference between second closest [vowelIndex + i] and index of the consonant[i]);

    IF distanceB is both falsy AND not equal to 0
      THEN answer[i] = distanceA;
    ELSE IF if distanceA is smaller than distanceB, meaning this vowel is closer to the consonant
      THEN answer[i] = distanceA;
    ELSE answer[i] = distanceB;
          vowelIndex will be incremented, meaning we now move to the next vowel;
    END IF
  END FOR

  PRINT answer;

END