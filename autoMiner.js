/*=====================================================================================
                                     Various Functions
=======================================================================================*/
function setOverrides() {
    var varTntAmount = document.getElementById("tntAmount").innerHTML;
    document.getElementById("clicktomine").innerHTML = "String:" + varTntAmount;
    varTntAmount = Number(varTntAmount);
    var varGunPowerAmount = Number(document.getElementById("gunPowerAmount"));
    var varCopperWireAmount = Number(document.getElementById("copperWireAmount"));
    var varCopperAmount = Number(document.getElementById("copperAmount"));
    var varBronzeBarAmount = Number(document.getElementById("bronzeBarAmount"));
}

function checkTunnels() {
        if (varTntAmount == 322) {
            document.getElementById("clicktomine").innerHTML = "Number:" + varTntAmount;

            //blowTunnels();
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
