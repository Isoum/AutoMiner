/*=====================================================================================
                                     Various Functions
=======================================================================================*/
function checkTunnels() {
    if (varHasTunnels == 0) {
        if (varTntAmount == 500) {
            blowTunnels();
        } else if (varGunPowerAmount >= 100 && varCopperWireAmount >= 100) {
            craftTNT();
        } else if (varCopperWireAmount < 100 && varCopperAmount >= 2500 && varBronzeBarAmount >= 10) {
            craftBronzeWire();
        }
    }
};
/*=====================================================================================
                                 SetInterval Functions
=======================================================================================*/
setInterval(function () {
    sellAllOres();
}, 30000);

setInterval(function () {
    checkTunnels();
}, 10000);

setInterval(function () {
    applyMining();
}, 10);
