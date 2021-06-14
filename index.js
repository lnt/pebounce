
import debounce from 'debounce';

function pebounce(callback,p1,p2,p3) {
    let promise,resolve;
    var debounced = debounce(function(a1,a2,a3,a4) {
        resolve(callback(a1,a2,a3,a4)); 
        promise = null;  
    },p1,p2,p3);
    pebounce  = function(a1,a2,a3,a4){
        promise =  promise || new Promise(function (r) {
            resolve = r;
        });
        debounced(a1,a2,a3,a4);
        return promise;
    }

    pebounce.clear = function (argument) {
        debounced.clear(argument)
    }

    pebounce.flush = function (argument) {
        debounced.flush(argument)
    }
    
    return pebounce;
}


// Adds compatibility for ES modules
pebounce.pebounce = pebounce;

module.exports = pebounce;
