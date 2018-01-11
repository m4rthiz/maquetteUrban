$(document).ready(function () {
    //**************NAVBAR**************/
    $(window).scroll(function () {

        var height = $(this).scrollTop();

        if (height >= 50) {
            $('nav').addClass('fixed-top');

        } else {
            $('nav').removeClass('fixed-top');

        }
    });
    $(".nav-link").on("click", function () {
        $(".nav-link").removeClass("active");
        $(this).addClass("active");
    });
});


//canva orange for ban trav
context = document.getElementById("canvasOrange").getContext('2d');

context.beginPath();
//context.setLineDash([10,5]);
context.moveTo(55, 10);
context.lineTo(55, 35);
context.lineTo(90, 90);
context.lineTo(355, 90);
context.lineTo(355, 10);
context.closePath();
//color
context.fillStyle = '#ee7f00';
context.fill();
context.strokeStyle = '#ee7f00';
//text
context.lineWidth = 1;
context.fillStyle = "#FFFFFF";
context.font = "bold 0.9em Raleway, sans-serif";
context.fillText("> INSCRIPTION", 120, 35);
context.stroke();


//for header coin
context = document.getElementById("canvasGrey").getContext('2d');

context.beginPath();
//context.setLineDash([10,5]);
context.moveTo(55, 10);
context.lineTo(55, 35);
context.lineTo(90, 90);
context.lineTo(355, 90);
context.lineTo(355, 10);
context.closePath();
//color
context.fillStyle = '#f1f1f1';
context.fill();
context.strokeStyle = '#f1f1f1';
//text
context.lineWidth = 1;
context.fillStyle = "#000000";
context.font = "bold 0.9em Raleway, sans-serif";
context.fillText("MY URBAN SOCCER", 95, 30);
context.font = "0.8em sans-serif";
context.fillText("MON COMPTE", 145, 40);
context.stroke();

//canvasBlack 1
context = document.getElementById("canvasBlack1").getContext('2d');
context.beginPath();
//context.setLineDash([10,5]);
context.moveTo(55, 10);
context.lineTo(55, 35);
context.lineTo(90, 90);
context.lineTo(355, 90);
context.lineTo(355, 10);
context.closePath();
//color
context.fillStyle = '#000';
context.fill();
context.strokeStyle = '#000';
//text
context.lineWidth = 1;
context.fillStyle = "#FFFFFF";
context.font = "bold 0.9em Raleway, sans-serif";
context.fillText("> EN SAVOIR PLUS", 120, 35);
context.stroke();

//canvasBlack 2
context = document.getElementById("canvasBlack2").getContext('2d');
context.beginPath();
//context.setLineDash([10,5]);
context.moveTo(55, 10);
context.lineTo(55, 35);
context.lineTo(90, 90);
context.lineTo(355, 90);
context.lineTo(355, 10);
context.closePath();
//color
context.fillStyle = '#000';
context.fill();
context.strokeStyle = '#000';
//text
context.lineWidth = 1;
context.fillStyle = "#FFFFFF";
context.font = "bold 0.9em Raleway, sans-serif";
context.fillText("> EN SAVOIR PLUS", 120, 35);
context.stroke();

//canvasBlack 3
context = document.getElementById("canvasBlack3").getContext('2d');
context.beginPath();
//context.setLineDash([10,5]);
context.moveTo(55, 10);
context.lineTo(55, 35);
context.lineTo(90, 90);
context.lineTo(355, 90);
context.lineTo(355, 10);
context.closePath();
//color
context.fillStyle = '#000';
context.fill();
context.strokeStyle = '#000';
//text
context.lineWidth = 1;
context.fillStyle = "#FFFFFF";
context.font = "bold 0.9em Raleway, sans-serif";
context.fillText("> EN SAVOIR PLUS", 120, 35);
context.stroke();