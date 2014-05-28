autoMiner = {};
autominer.init = function () {
 /*=====================================================================================
                                     Various Functions
=======================================================================================*/
  autoMiner.checkTunnels = function() {
    if (varHasTunnels != 1) {
      if (varTntAmount == 500) {
        blowTunnels();
      }
      else if (varGunPowerAmount >= 100 && varCopperWireAmount >= 100) {
        craftTNT();
      } else if (varCopperWireAmount < 100 && varCopperAmount >= 2500 && varBronzeBarAmount >= 10) {
        craftBronzeWire();
      }
    }
  }
  
 /*=====================================================================================
                                 SetInterval Functions
=======================================================================================*/
  setInterval(function() {
    sellAllOres();
  }, 30000);
  
  setInterval(function() {
    autoMiner.checkTunnels();
  }, 10000);
  
  setInterval(function() {
    applyMining();
  }, 10);
  
}; //Ends Game.init();
