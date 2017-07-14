/* Scrolling Effect */
$(document).ready(function() {
	$(".navbar a, footer a[href='#myPage'], .btn-sm").on('click', function(event) {
		event.preventDefault();
		var hash = this.hash;
		$('html, body').animate({
			scrollTop: $(hash).offset().top
		}, 900, function() {
			window.location.hash = hash;
		});
	});
})

$(function () {
    var chart;
        $(document).ready(function () {
            // Build the chart
            Highcharts.chart('container', {
        chart: {
            type: 'column'
        },
        title: {
            text: ''
        },
        xAxis: {
            type: 'category',
            labels: {
                rotation: -45,
                style: {
                    fontSize: '13px',
                    fontFamily: 'Open Sans'
                }
            }
        },
        colors: [
                '#4DAAE2'
        ],
        yAxis: {
            min: 0,
            title: {
                text: 'Years of Experience'
            }
        },
        legend: {
            enabled: false
        },
        tooltip: {
            pointFormat: 'Years used: <b>{point.y:.1f}</b>'
        },
        series: [{
            name: 'Years of Experience',
            data: [
                ['Java', 4],
                ['JavaScript', 3],
                ['Latex', 4],
                ['Git', 3.5],
                ['Python', 2],
                ['HTML', 2],
                ['CSS', 2],
                ['Scala', 1],
                ['Meteor', 1.5],
                ['SQLite', 1],
            ],
            dataLabels: {
                enabled: false,
                rotation: -90,
                color: '#FFFFFF',           
                align: 'right',
                format: '{point.y:.1f}', // one decimal
                y: 10, // 10 pixels down from the top
                style: {
                    fontSize: '13px',
                    fontFamily: 'Open Sans'
                }
            }
        }]
        });

    });
});




var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}
