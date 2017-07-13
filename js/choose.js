/**
 * Created by root on 7/13/17.
 */
"use strict";
$(document).ready(function() {
    $("#dashboards").click(function () {
        unselected();
        $("#dashboards").addClass("selected");
    });

    $("#uer").click(function(){
        unselected();
        $("#uer").addClass("selected");
    });

    $("#table").click(function(){
        unselected();
        $("#table").addClass("selected");
    });

    $("#typography").click(function(){
        unselected();
        $("#typography").addClass("selected");
    });

    $("#icons").click(function(){
        unselected();
        $("#icons").addClass("selected");
    });

    $("#map").click(function(){
        unselected();
        $("#map").addClass("selected");
    });

    $("#notification").click(function(){
        unselected();
        $("#notification").addClass("selected");
    });

});

function unselected(){
    $("#dashboards").removeClass("selected");
    $("#uer").removeClass("selected");
    $("#table").removeClass("selected");
    $("#typography").removeClass("selected");
    $("#icons").removeClass("selected");
    $("#map").removeClass("selected");
    $("#notification").removeClass("selected");
}