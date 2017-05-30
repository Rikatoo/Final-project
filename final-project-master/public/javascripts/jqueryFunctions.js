$(function () {
    // create Acc button
    $("#createAccountButton").click(function () {
        $("#createAccountDiv").css("display", "initial");
        $("#pop-up").attr("id", "greyBody");
        $(this).css("visibility", "hidden");
        $("#popUpLogInButton").css("visibility", "hidden");
    });
    // logIn button
    $("#popUpLogInButton").click(function () {
        $("#logInDiv").css("display", "initial");
        $(this).css("visibility", "hidden");
        $("#createAccountButton").css("visibility", "hidden");
    });
    // X mark press
    $(".xMark").click(function () {
        $(this).parent().parent().css("display", "none");
        $("#createAccountButton").css("visibility", "initial");
        $("#popUpLogInButton").css("visibility", "initial");
    });
    $("#chooseARaceXMark").click(function(){
        $(this).parent().css("display","none");
    });
    // $("#greyBody").click(function(){
    //     $("#createAccountDiv").css("display", "none");
    //     $("#logInDiv").css("display", "none");
    //     $("#greyBody").removeAttr("id");
    // });

// pitai niki za tova //// ne raboti s tozi event

//     $("#terran").change(function () {
//         if (this.checked) {
//             $("#terranDiscriptoin").css({
//                 "border-color": "#C1E0FF",
//                 "border-width": "1px",
//                 "border-style": "solid"
//             });
//         } else {
//              $("#terranDiscriptoin").css({
//                 "border":0
//             });
//         }
//     });

// dont know why it doesent works
// $("#maxNumberOfUnitsToSend").click(function(){
//    $(this).css("background-color", "red");
// });
   $("#upgradeMineButton").click(function(){
      user[0].startUpgradingStructure($(this).parent().parent().attr("id"));
      console.log($(this).parent().parent().attr("id"));
   });
});
$("#submitFormButton").click(function(){
    $("#createAccountDiv").css("display","none");
    $("#raceDiv").css("display","initial");
});
$("#logInButton").click(function(){
    $("#logInDiv").css("display","none");
    $("#raceDiv").css("display","initial");
});
$("#raceChosen").click(function(){
    $("#logInOrCreateAcc").css("display","none");
    $("#gameDiv").css("display","initial");
});