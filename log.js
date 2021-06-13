var exports=module.exports={};
var log={
    info: exports.info=function(info){
        console.log("info:"+info);
    },
    warning: function(warning){
console.log("warn:"+warning);
    },
    error: function(error){
        console.log("error:"+error);
    }
}
