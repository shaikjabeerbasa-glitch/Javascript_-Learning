//for loop

for (let i = 1; i <= 11; i++) {
    const element =i;

    if(element==6){
        // console.log("5 is the best number");
        
    }
    // console.log(element);
    
}

for (let i = 2; i < 7; i++) {
    //console.log(`outer loop ${i}`);
    
    for (let j = 0; j <=10; j++) {
        //console.log(`Inner loop ${j} snd inner loop ${i}`);
      //  console.log(i +"*"+j+"="+ i*j);
        
        
    }
    
}

let myarray=["spidy","ironman","thor","superman"]
for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
    //console.log(element)
    
}

// break and continue

for (let index = 1; index <=50; index++) {
    if(index==7){
        console.log('Detected 7');
        continue
    }
    console.log(`value of i is ${index}`);
    
    
}