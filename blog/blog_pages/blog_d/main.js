
$(document).ready(function () {

    $("#top").click(function () {
        $("#middle").toggle(function () {
            // console.log("Fading is completed")
        });
        $("#bottom").toggle(function () {
            // console.log("Fading is completed")
            // $("#top").css("height", "1000px");
        });

        $("#long").show();

        if ($("#top").height() != 700)
            $("#top").animate({ height: 700 }, 1000);
        else
            $("#top").animate({ height: 1000 }, 1000);

    });

    $("#middle").click(function () {
        $("#top").toggle(function () {
            console.log("Fading is completed")
        });
        $("#bottom").toggle(function () {
            console.log("Fading is completed")
        });
        $("#middle").css("height", "1000px");
    });

    $("#bottom").click(function () {
        $("#middle").toggle(function () {
            console.log("Fading is completed")
        });
        $("#top").toggle(function () {
            console.log("Fading is completed")
        });
        $("#bottom").css("height", "1000px");
    });

});