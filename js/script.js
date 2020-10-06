        function opennav() {
            document.getElementById("myNav").style.width = "270px";
            $('.mobile').css("right", "-270px");
        };

        function closenav() {
            document.getElementById("myNav").style.width = "0%";
            $('.mobile').css("right", "0");
        };

        jQuery(document).ready(function() {
            window.setTimeout("fadeMyDiv();", 3000); //call fade in 3 seconds
          }
         )
         function fadeMyDiv() {
             jQuery(".loading-overlay").fadeOut('slow');
         }
