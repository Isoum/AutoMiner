/*=====================================================================================
                                     Various Functions
=======================================================================================*/
function setOverrides() {
    var varTntAmount = getOreValue('varTntAmount');
    var varGunPowerAmount = getOreValue('varGunPowerAmount');
    var varCopperWireAmount = getOreValue('varCopperWireAmount');
    var varCopperAmount = getOreValue('varCopperAmount');
    var varBronzeBarAmount = getOreValue('varBronzeBarAmount');
}

function checkTunnels() {
        if (varTntAmount == 500) {
            blowTunnels();
        } else if (varGunPowerAmount >= 100 && varCopperWireAmount >= 100) {
          document.getElementById("clicktomine").innerHTML = "craftTNT();";
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
