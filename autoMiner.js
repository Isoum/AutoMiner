/*=====================================================================================
                                     Various Functions
=======================================================================================*/
function setOverrides() {
    AutoMiner.varHasTunnels = getValue("varHasTunnels", data);
    AutoMiner.varTntAmount = getValue("varTntAmount", data);
    AutoMiner.varGunPowerAmount = getValue("varGunPowerAmount", data);
    AutoMiner.varCopperWireAmount = getValue("varCopperWireAmount", data);
    AutoMiner.varCopperAmount = getValue("varCopperAmount", data);
    AutoMiner.varBronzeBarAmount = getValue("varBronzeBarAmount", data);
}

function checkTunnels() {
    if (AutoMiner.varHasTunnels === 0) {
        if (AutoMiner.varTntAmount == 500) {
            blowTunnels();
        } else if (AutoMiner.varGunPowerAmount >= 100 && AutoMiner.varCopperWireAmount >= 100) {
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
