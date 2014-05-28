/*=====================================================================================
                                     Various Functions
=======================================================================================*/
function setOverrides() {
    var varTntAmount = document.getElementById("tntAmount").innerHTML;
    document.getElementById("clicktomine").innerHTML = varTntAmount;
    var AutoMiner.varGunPowerAmount = document.getElementById("gunPowerAmount").innerHTML;
    var AutoMiner.varCopperWireAmount = document.getElementById("copperWireAmount").innerHTML;
    var AutoMiner.varCopperAmount = document.getElementById("copperAmount").innerHTML;
    var AutoMiner.varBronzeBarAmount = document.getElementById("bronzeBarAmount").innerHTML;
}

function checkTunnels() {
        if (AutoMiner.varTntAmount == 500) {
            blowTunnels();
        } else if (AutoMiner.varGunPowerAmount >= 100 && AutoMiner.varCopperWireAmount >= 100) {
            craftTNT();
        } else if (AutoMiner.varCopperWireAmount < 100 && AutoMiner.varCopperAmount >= 2500 && AutoMiner.varBronzeBarAmount >= 10) {
            craftBronzeWire();
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
