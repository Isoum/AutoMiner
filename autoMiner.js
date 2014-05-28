/*=====================================================================================
SetInterval Functions
=======================================================================================*/
setInterval(function () {
    sellAllOres();
}, 30000);

setInterval(function () {
    applyMining(window.event);
}, 10);
