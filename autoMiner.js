/*=====================================================================================
                                     Various Functions
=======================================================================================*/
function setOverrides() {
    AutoMiner.varHasTunnels = document.getElementById("varHasTunnels")
    AutoMiner.varTntAmount = document.getElementById("varTntAmount")
    AutoMiner.varGunPowerAmount = document.getElementById("varGunPowerAmount")
    AutoMiner.varCopperWireAmount = document.getElementById("varCopperWireAmount")
    AutoMiner.varCopperAmount = document.getElementById("varCopperAmount")
    AutoMiner.varBronzeBarAmount = document.getElementById("varBronzeBarAmount")
}

function checkTunnels() {
    if (AutoMiner.varHasTunnels === 0) {
      document.getElementById("clicktomine").innerHTML = "00000000.";
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
