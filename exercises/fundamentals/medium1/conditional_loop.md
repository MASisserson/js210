```javascript
let i = 0;
while (i < 10) {
  if (i % 3 === 0) {
    console.log(i);
  } else {
    i += 1;
  }
}
```

No, it will not. The program will get stuck when `i` still equals `0`. From there, the incrementation step `i += 1` on `line 7` will not run. 
