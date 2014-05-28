/*=====================================================================================
                                     Various Functions
=======================================================================================*/
function setOverrides() {
    AutoMiner.varTntAmount = document.getElementById("tntAmount").value;
    AutoMiner.varGunPowerAmount = document.getElementById("gunPowerAmount").value;
    AutoMiner.varCopperWireAmount = document.getElementById("copperWireAmount").value;
    AutoMiner.varCopperAmount = document.getElementById("copperAmount").value;
    AutoMiner.varBronzeBarAmount = document.getElementById("bronzeBarAmount").value;
}

function checkTunnels() {
        if (AutoMiner.varTntAmount == 500) {
            document.getElementById("clicktomine").innerHTML = "00000000.";
            blowTunnels();
        } else if (AutoMiner.varGunPowerAmount >= 100 && AutoMiner.varCopperWireAmount >= 100) {
            document.getElementById("clicktomine").innerHTML = "1111111.";
            craftTNT();
        } else if (AutoMiner.varCopperWireAmount < 100 && AutoMiner.varCopperAmount >= 2500 && AutoMiner.varBronzeBarAmount >= 10) {
            document.getElementById("clicktomine").innerHTML = "22222222.";
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
