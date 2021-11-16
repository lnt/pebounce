
import debounce from 'debounce';

const pebounce = function pebounce(callback,p1,p2,p3) {
    let promise,resolve,context;
    var debounced = debounce(function(a1,a2,a3,a4) {
        resolve(callback.apply(context,a1,a2,a3,a4)); 
        promise = null;  
    },p1,p2,p3);
    let pebounced  = function(a1,a2,a3,a4){
        context = this;
        promise =  promise || new Promise(function (r) {
            resolve = r;
        });
        debounced(a1,a2,a3,a4);
        return promise;
    }

    pebounced.clear = function (argument) {
        debounced.clear(argument)
    }

    pebounced.flush = function (argument) {
        debounced.flush(argument)
    }
    
    return pebounced;
}


// Adds compatibility for ES modules
export default pebounce
