// code your solution here
function saturdayFun(name='roller-skate'){
    return `This Saturday, I want to ${name}!`
}
console.log(saturdayFun())

function mondayWork(work= 'go to the office'){
    return `This Monday, I will ${work}.`
}
console.log(mondayWork())

function wrapAdjective(visual="*"){
    return function(Komen="special"){
        return `You are ${visual}${Komen}${visual}!`
    }
    
}