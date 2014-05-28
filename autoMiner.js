/*=====================================================================================
                                     Various Functions
=======================================================================================*/
function setOverrides() {
    var varTntAmount = document.getElementById("tntAmount").innerHTML;
    document.getElementById("clicktomine").innerHTML = varTntAmount;
    var varGunPowerAmount = document.getElementById("gunPowerAmount").innerHTML;
    var varCopperWireAmount = document.getElementById("copperWireAmount").innerHTML;
    var varCopperAmount = document.getElementById("copperAmount").innerHTML;
    var varBronzeBarAmount = document.getElementById("bronzeBarAmount").innerHTML;
}

function checkTunnels() {
        if (varTntAmount == 500) {
            blowTunnels();
        } else if (varGunPowerAmount >= 100 && varCopperWireAmount >= 100) {
            craftTNT();
        } else if (varCopperWireAmount < 100 && varCopperAmount >= 2500 && varBronzeBarAmount >= 10) {
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
