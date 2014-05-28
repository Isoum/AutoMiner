/*=====================================================================================
Various Functions
=======================================================================================*/
function setOverrides() {
    var varTntAmount = document.getElementById("tntAmount").innerHTML;
    varTntAmount = Number(varTntAmount.replace(/[^\d\.\-\ ]/g, ''));
    
    var varGunPowerAmount = document.getElementById("gunPowerAmount");
    varGunPowerAmount = Number(varGunPowerAmount.replace(/[^\d\.\-\ ]/g, ''));
    document.getElementById("clicktomine").innerHTML = "gun:" + varGunPowerAmount;
    
    var varCopperWireAmount = document.getElementById("copperWireAmount");
    varCopperWireAmount = Number(varCopperWireAmount.replace(/[^\d\.\-\ ]/g, ''));
    document.getElementById("clicktomine").innerHTML = "copperwire:" + varCopperWireAmount;
    
    var varCopperAmount = document.getElementById("copperAmount");
    varCopperAmount = Number(varCopperAmount.replace(/[^\d\.\-\ ]/g, ''));
    document.getElementById("clicktomine").innerHTML = "copper:" + varCopperAmount;
    
    var varBronzeBarAmount = document.getElementById("bronzeBarAmount");
    varBronzeBarAmount = Number(varBronzeBarAmount.replace(/[^\d\.\-\ ]/g, ''));
    document.getElementById("clicktomine").innerHTML = "bronze:" + varBronzeBarAmount;
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
}, 1000);

setInterval(function () {
    applyMining();
}, 10);
