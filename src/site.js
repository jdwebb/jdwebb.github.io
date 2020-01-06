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
	// Build the chart
Highcharts.chart('container', {
		chart: {
        type: 'column'
    },
    title: {
        text: 'Programming Language Experience'
    },
    xAxis: {
        categories: [
            'Objective C',
            'Python',
            'Javascript',
            'Java',
            'Sqlite',
            'GoLang',
            'HTML/ CSS',
            'Scala'
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Experience (years)'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} year(s)</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
			name: 'Programming Languages',
			data: [{
				name: 'Objective C',
				y: 2.5
			}, {
				name: 'JavaScript',
				y: 2
			}, {
				name: 'Python',
				y: 2
			}, {
				name: 'Java',
				y: 2
			}, {
				name: 'SQLite',
				y: 2
			}, {
				name: 'Golang',
				y: 1
			}, {
				name: 'HTML/ CSS',
				y: 2
			}, {
				name: 'Scala',
				y: 1
			}]
	    }]
    });
})

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
