/*=====================================================================================
                                     Various Functions
=======================================================================================*/
function setOverrides() {
    AutoMiner.varHasTunnels = readCookie(varHasTunnels);
    AutoMiner.varTntAmount = readCookie(varTntAmount);
    AutoMiner.varGunPowerAmount = readCookie(varGunPowerAmount);
    AutoMiner.varCopperWireAmount = readCookie(varCopperWireAmount);
    AutoMiner.varCopperAmount = readCookie(varCopperAmount);
    AutoMiner.varBronzeBarAmount = readCookie(varBronzeBarAmount);
}

function checkTunnels() {
    if (varHasTunnels === 0) {
      document.getElementById("hide-manuel-mining").innerHTML = "000000000";
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
