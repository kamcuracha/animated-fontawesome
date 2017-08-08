jQuery(document).ready(function($) {
    var util = {
        Global: {
            init: function() {
                this.breakChain();
                this.chargeBattery();
                this.tipHourglass();
                setInterval(this.breakChain, 2000);
                setInterval(this.chargeBattery, 5000);
                setInterval(this.tipHourglass, 3000);
            },
            breakChain: function() {
                // Create chain breaking effect
                let chain = document.getElementById('chain');
                chain.innerHTML = "&#xf0c1;";

                setTimeout(function(){
                    chain.innerHTML = "&#xf127;";
                }, 1000);
            },
            chargeBattery: function() {
                // Create battery charging effect
                let battery = document.getElementById('battery');
                battery.innerHTML = "&#xf244;";

                setTimeout(function(){
                    battery.innerHTML = "&#xf243;";
                }, 1000);
                setTimeout(function(){
                    battery.innerHTML = "&#xf242;";
                }, 2000);
                setTimeout(function(){
                    battery.innerHTML = "&#xf241;";
                }, 3000);
                setTimeout(function(){
                    battery.innerHTML = "&#xf240;";
                }, 4000);
            },
            tipHourglass: function() {
                // Create hourglass tipping effect
                let hourglass = document.getElementById('hourglass');
                hourglass.innerHTML = "&#xf251;";

                setTimeout(function(){
                    hourglass.innerHTML = "&#xf252;";
                }, 1000);
                setTimeout(function(){
                    hourglass.innerHTML = "&#xf253;";
                }, 2000);
            }
        }
    };
    util.Global.init();
});