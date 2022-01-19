const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? ', (name) => {
  rl.question('How old are you? ', (age) => {
    rl.question('What is your favorite sport? ', (sport) => {
      rl.question('What is your favorite music? ', (music) => {
        rl.question('What is favorite food? ', (food) => {
          rl.question('What is your dogs name? ', (dog) => {
            console.log(`${name} is ${age} years old, likes ${sport}, and ${music}. ${name}'s favorite food is ${food}, and has a dog names ${dog}`);
            rl.close();
          })
        })
      })
    })
  })
  

  
});
//console.log(`Thank you for your valuable feedback: ${answer} ${name}`);
// rl.question(`What is your favorite ${favKey}?` , (answer) => {
//           profileObj.favorite[key] = answer;
//         });





/*
profileObject = {
  name: undefined,
  age: undefined,
  favorites: {
    activity: undefined,
    food: undefined,
    song: undefined,
  }
};

const gatherData = (profileObj) =>{
  for (key in profileObj) {
    console.log(key);
    if (key === 'favorites'){
      for (let favKey in profileObj[key]){
        rl.question(`What is your favorite ${favKey}?` , (answer) => {
          profileObj.favorite[key] = answer;
        });
      }
    } else {
      rl.question(`What is your ${key}?` , (answer) => {
        profileObj[key] = answer;
        
      }); 
      //rl.close();
      
    //}
    
  };
  //rl.close();
  return profileObj;
}
*/
//(gatherData(profileObject));