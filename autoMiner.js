/*=====================================================================================
                                     Various Functions
=======================================================================================*/
function setOverrides() {
    AutoMiner.varHasTunnels = readCookie(varHasTunnels);
}

function checkTunnels() {
    document.getElementById("clicktomine").innerHTML = "000000000";
    document.getElementById("clicktomine").innerHTML = numberFormatter(varHasTunnels);
    if (AutoMiner.varHasTunnels === 0) {
      document.getElementById("clicktomine").innerHTML = "1111111111";
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
