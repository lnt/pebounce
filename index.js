
import debounce from 'debounce';

const pebounce = function pebounce(callback,p1,p2,p3) {
    let promise,resolve,context,args;
    var debounced = debounce(function() {
        resolve(callback.apply(context,args)); 
        context = args = null;
        promise = null;  
    },p1,p2,p3);
    let pebounced  = function(){
        context = this;
        args = arguments;
        promise =  promise || new Promise(function (r) {
            resolve = r;
        });
        debounced();
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
