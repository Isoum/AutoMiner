/*=====================================================================================
                                     Various Functions
=======================================================================================*/
function setOverRides() {
    AutoMiner.varHasTunnels = JSON.parse(varHasTunnels);
    AutoMiner.varTntAmount = JSON.parse(varTntAmount);
    AutoMiner.varGunPowerAmount = JSON.parse(varGunPowerAmount);
    AutoMiner.varCopperWireAmount = JSON.parse(varCopperWireAmount);
    AutoMiner.varCopperAmount = JSON.parse(varCopperAmount);
    AutoMiner.varBronzeBarAmount = JSON.parse(varBronzeBarAmount);
}

function checkTunnels() {
    if (AutoMiner.varHasTunnels == 0) {
        if (AutoMiner.varTntAmount == 500) {
            blowTunnels();
        } else if (AutoMiner.varGunPowerAmount >= 100 && AutoMiner.arCopperWireAmount >= 100) {
            craftTNT();
        } else if (AutoMiner.varCopperWireAmount < 100 && AutoMiner.varCopperAmount >= 2500 && AutoMiner.varBronzeBarAmount >= 10) {
            craftBronzeWire();
        }
    }
}
/*=====================================================================================
                                 SetInterval Functions
=======================================================================================*/
setInterval(function () {
    sellAllOres();
}, 30000);

setInterval(function () {
    setOverrides();
    checkTunnels();
}, 10000);

setInterval(function () {
    applyMining();
}, 10);
