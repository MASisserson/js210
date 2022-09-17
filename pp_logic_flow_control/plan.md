# Index of substrings

Rules:
1. Can use *String.prototype.[]* and *String.length*, but not any other properties or methods from JS's built-in String class.

Mental Model:
    Find the length of *secondString*. Iterate through the characters of *firstString* in the aforementioned size, incrementing the index by 1. Return the index of where something was found. Go from the beginning in *indexOf*. Work backwards in *lastIndexOf*. If you get to the point where you can't get more, return -1.

New Mental Model:
    Go through each position in *firstString* 

# Strategy:
1. 
