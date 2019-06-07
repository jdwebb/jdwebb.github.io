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
						    plotBackgroundColor: null,
						    plotBorderWidth: null,
						    plotShadow: false,
						    type: 'pie'
						  },
						  title: {
						    text: 'Programming Language Experience'
						  },
						  tooltip: {
						    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
						  },
						  plotOptions: {
						    pie: {
						      allowPointSelect: true,
						      cursor: 'pointer',
						      dataLabels: {
						        enabled: true,
						        format: '<b>{point.name}</b>: {point.percentage:.1f} %',
						        style: {
						          color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
						        }
						      }
						    }
						  },
						  series: [{
						    name: 'Programming Languages',
						    data: [{
						      name: 'Objective C',
						      y: 2.5/15*100
						    }, {
						      name: 'JavaScript',
						      y: 2/15*100
						    }, {
						      name: 'Python',
						      y: 1.5/15*100
						    }, {
						      name: 'Java',
						      y: 3/15*100
						    }, {
						      name: 'SQLite',
						      y: 2/15*100
						    }, {
						      name: 'Golang',
						      y: 1/15*100
						    }, {
						      name: 'HTML/ CSS',
						      y: 2/15*100
						    }, {
						      name: 'Other',
						      y: 1/15*100
						    }]
						  }]
						});
    });
});

// Modal Image Gallery
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}

// Change style of navbar on scroll
window.onscroll = function() {myFunction()};
function myFunction() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
    } else {
        navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
    }
}

// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}
