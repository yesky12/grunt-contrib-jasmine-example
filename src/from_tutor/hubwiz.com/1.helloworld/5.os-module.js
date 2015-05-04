/**
 * Created by josh on 2015/5/4.
 */
var os = require("os");

var result = os.platform();
console.log(result);

console.log('os.release()='+os.release() + 'os.type=' + os.type());
//console.log('os.release()={}; os.type={};' , {os.release(),os.type()});
console.log('os.arch()='+os.arch());