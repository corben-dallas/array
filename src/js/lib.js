export function zodiacSign(date, month){
    var signs = [
        {name:'козерог', month:1, date:20},
        {name:'водолей', month:2, date:20},
        {name:'рыбы',    month:3, date:20},
        {name:'овен',    month:4, date:20},
        {name:'телец',   month:5, date:20},
        {name:'близнецы',month:6, date:21},
        {name:'рак',     month:7, date:22},
        {name:'лев',     month:8, date:23},
        {name:'дева',    month:9, date:23},
        {name:'весы',    month:10,date:23},
        {name:'скорпион',month:11,date:22},
        {name:'стрелец', month:12,date:21},
        {name:'козерог', month:13, date:20}
        ];
    if (signs[month - 1].date <= date){
        return signs[month].name;
    } else {
        return signs[month - 1].name;
    }   
}

/////////////////// задача 2 /////////////////////
export function normolized(arr, n){
    const newArr = arr.slice().sort(function(a,b){
       return a - b;
    });
    const removedElem = newArr.splice(n, newArr.length - (2*n));
    return removedElem;
}



///////////////////// задача 3 /////////////////////////
export function uniq(data){
    let count = 0
    for(var i=0; i<data.length; ++i) {
        for(var j=i+1; j<data.length; ++j) {
            if(data[i] === data[j]){
                data.splice(j--, 1);
                count++;
            }
        }
    }
    // const result = data.splice(0, count) 
    return data;
}


//////////////////////// задача 4 ////////////////////

export function isSorted(data){
    let result = true;
    for (let i = 0; i < data.length - 1; i++){
        if (data[i]<data[i+1]){
            continue;
        } else {
            return false
        } 
    }
    return result;
}