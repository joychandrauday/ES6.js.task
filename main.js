//task 01 
//arrow function of three parameters which multiply the three and return the result.
console.log('============ arrow function of three parameters which multiply the three and return the result.')

const multiplyThree =(a,b,c)=>a*b*c;

const multiply=multiplyThree(2,3,4);
console.log(multiply);

//task 02
//write the sentence in three lines .
console.log('============  \write the sentence in three lines .')
console.log('i am a web developer.\ni love to code.\ni love to eat biriyani.')

//task 03
//in a arrow funciton add two parameters one from user and one is default.add the to and return the sum.
console.log('============ in a arrow funciton add two parameters one from user and one is default.add the to and return the sum.')

const addTwo=(a,b=5)=>a+b;
const addEd=addTwo(15);
console.log(addEd);

//task 04
//array function on check the even length of friends name .
console.log('============ array function on check the even length of friends name .')

const evenLengthName=(friendsArray)=>{
    const evenArray=[];
    for(const friend of friendsArray){
        if (friend.length%2===0) {
            evenArray.push(friend);
        }
    }
    return evenArray;
}

const friends=['roshid','niloy','aman','ratul','amal','jitu','a'];//enter your friends name array here.

const evenLengthNames=evenLengthName(friends)

console.log(evenLengthNames);


//task 05
//array function to calculate on the element numbers of the array.1.square numbet,2.average of squared number

console.log('============ array function to calculate on the element numbers of the array')


const calculatArray=(numbersArray)=>{
    const squaredArray=[];
    for(const number of numbersArray){
        squaredArray.push(number*number);
    }
    let sumOfSquaredNum=0
    for(const squaredNumber of squaredArray){
        sumOfSquaredNum+= squaredNumber;
    }
    const average=sumOfSquaredNum/squaredArray.length;
    return average;
}

const numbers=[2,2,2,2];//enter your number array.
const finalCalculation=calculatArray(numbers);

console.log(finalCalculation);

//task 06
//array function to combine two array and finding the maximum value of it.

console.log('============ array function to combine two array and finding the maximum value of it.')


const combinedNumberArray=(arrayOne,arrayTwo)=>{
    const newArray=[...arrayOne,...arrayTwo];
    const maxNumOfArray= Math.max(...newArray)
    return maxNumOfArray;
}

const numberArray1=[4,3,5,6,8,25];//enter your number array
const numberArray2=[9,5,1,3,5,23];//enter your number array

const finalArray=combinedNumberArray(numberArray1,numberArray2);
console.log(finalArray);


