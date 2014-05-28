/*=====================================================================================
                                     Various Functions
=======================================================================================*/
function setOverrides() {
    var varTntAmount = Number(document.getElementById("tntAmount").innerHTML);
    var varGunPowerAmount = Number(document.getElementById("gunPowerAmount").innerHTML);
    var varCopperWireAmount = Number(document.getElementById("copperWireAmount").innerHTML);
    var varCopperAmount = Number(document.getElementById("copperAmount").innerHTML);
    var varBronzeBarAmount = Number(document.getElementById("bronzeBarAmount").innerHTML);
    document.getElementById("clicktomine").innerHTML = varTntAmount;

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
