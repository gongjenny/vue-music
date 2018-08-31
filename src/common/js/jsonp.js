import originJSONP from 'jsonp'

export default function jsonp(url, data, option){

 url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)
 return new Promise((resolve, reject) => {
     //这个data和上边传进来的data不是一个 data
     originJSONP(url,option,(err,data) => {
         if(!err){
            resolve(data) //执行之后回调的数据存在data里面，当成参数传入到then()函数中
            //console.log(data);
         }else{
            reject(err)
         }
     })   
 })
}
export function param(data){
    let url = ''
    for(var k in data){
        let value = data[k] !== undefined ? data[k] : ''
        //url += '&' + k + '=' + encodeURIComponent(value)
        url += `&${k}=${encodeURIComponent(value)}`  //es6语法
    }
    //console.log(url);
    return url ? url.substring(1) : ''
}