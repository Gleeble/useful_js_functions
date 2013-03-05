/*Useful Javascript functions*/

//wrap (probably using _.wrap()) another JS function with this function and it will call that function with
//provided additional arguments and then log the time it took for the function to execute.
    function timeFunction(func) {
        var before = new Date();

        var val = func.apply(this, Array.prototype.slice.call(arguments, 1));
        var elapsed = (new Date() - before);

        if (elapsed > 500) {
            log(func.toString().substring(0, func.toString().indexOf("{")) + ": " + elapsed);
        }

        return val;
    }

/*
 * a generic log function which will provide the ability to use a single statement
 * cross browser while debugging issues. Should not be use in deployed code as it
 * will cause alerts on some browsers.
 */

function log() {
    try {
        console.log.apply(console, arguments);
    } catch (e) {
        try {
            opera.postError.apply(opera, arguments);
        } catch (e2) {
            alert(Array.prototype.join.call(arguments, " "));
        }
    }
}