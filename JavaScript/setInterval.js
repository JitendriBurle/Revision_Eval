function setInterval(callback, delay){
    let timerId;
    let isCleared = false;

    function run(){
        if(isCleared){
            return;
        }

        timerId = setTimeOut(() => {
            callback();
            run();
        },delay)
    }
    run();

    return {
        id: timerId,
        clear: function () {
            isCleared = true;
            clearTimeout(timerId)
        }
    };
}