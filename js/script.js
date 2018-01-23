// Here will be the JavaScript
$(document).ready(function() {

    // -----------------------
    // FIXED NAVBAR
    // Uncomment this code if you want to have a fixed nav when scrolling
    // -----------------------
    // $(window).scroll(function() {
    //     var scroll = $(window).scrollTop();
    //     var windowWidth = $(window).width();
    //
    //     if (scroll >= 200) {
    //         $("nav").addClass("fixed-nav").fadeIn();
    //         $(".main-container").css({
    //             "margin-top": "50px"
    //         });
    //     }
    //     if (scroll < 200) {
    //         $("nav").removeClass("fixed-nav");
    //         $(".main-container").css({
    //             "margin-top": "0"
    //         });
    //     }
    // });



    // -----------------------
    // AGE SLIDER OPERATIONS
    // -----------------------
    // Set the initial range value in the output form tag
    var ageInit = $("#js_age-range").val();
    $("#js_age-output").text(ageInit);

    // Set the value when the range is changed
    $("#js_age-range").on("input change", function() {
        $("#js_age-output").text($(this).val());
    });

    // -------------------------------
    // ON SUBMIT AND RELOAD OPERATIONS
    // -------------------------------

    // Setting the global slide speed in ms
    var slideSpeed = 250;

    // Operations when the Submit button is clicked
    $("#js_submit").on("click", function(e) {
        // Stopping the form from submitting
        e.preventDefault();

        // Off-canvas slide of the form container
        $("#js_form-container").animate({
            marginLeft : "-50%",
        }, slideSpeed, function() {
            $(this).hide(slideSpeed);
        });


        // Result calculator.
        // As a simple example this is based on the wake up view value

        var selectedSeason = $("input[id^='view']:checked").val();

        $("div[id^='js_result-view']").hide();
        $("#js_result-" + selectedSeason).show();
    });

    // Operations when the Reload button is clicked
    $("#js_reload").on("click", function() {
        // Off-canvas slide back of the form container
        $("#js_form-container").animate({
            marginLeft: "0"
        }, slideSpeed, function() {
            $("#js_form-container").show(slideSpeed);
            $("#js_form").trigger("reset");
        });
    });



    // -------------------------
    // PAGE LANGUAGE OPERATIONS
    // -------------------------
    $(".js_flag").on("click", function() {
        var langRequest = $(this).data("lang");

        $.ajax({
            dataType: "json",
            url: "data.json",
            data: langRequest,
            success: function(data) {
                var exist = 0;
                for(i=0; i < data.langData.length; i++) {
                    if(data.langData[i].lang == langRequest) {
                        $("#js_page-title").text(data.langData[i].title);
                        $("#js_page-subtitle").text(data.langData[i].subtitle);
                        $("#js_age").text(data.langData[i].age);
                        $("#js_personality").text(data.langData[i].personality);
                        $("#js_personality1").text(data.langData[i].personality1);
                        $("#js_personality2").text(data.langData[i].personality2);
                        $("#js_whoTravel").text(data.langData[i].whoTravel);
                        $("#js_view").text(data.langData[i].view);
                        $("#js_season").text(data.langData[i].season);
                        $("#js_season1").text(data.langData[i].season1);
                        $("#js_season2").text(data.langData[i].season2);
                        $("#js_season3").text(data.langData[i].season3);
                        $("#js_season4").text(data.langData[i].season4);
                        $("#js_season4").text(data.langData[i].season4);
                        $("#js_travel-title-1").text(data.langData[i].travel1);
                        $("#js_travel-title-2").text(data.langData[i].travel2);
                        $("#js_travel-title-3").text(data.langData[i].travel3);
                        $("#js_travel-title-4").text(data.langData[i].travel4);
                        $(".js_share-title").text(data.langData[i].shareTitle);
                    } else {
                        exist++;
                    }
                }
            }
        });
    });
});
