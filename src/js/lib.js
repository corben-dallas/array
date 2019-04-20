export function ZodiacSign(date, month){
    this.date = date;
    this.month = month;
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
        {name:'козерог', month:13,date:20}
        ];
    this.showZodiacSign = function (target){
        if(signs[target.month-1].date <= target.date ){
            return signs[target.month].name        
        } else { 
            return signs[target.month - 1].name;
        }
    }   
}

////////////////////////////////////////
export function normolized(arr, n){
    // function compareNumeric(a, b) {
    //     if (a > b) return 1;
    //     if (a < b) return -1;
    // }
    

}
