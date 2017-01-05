---
---

{% include js/jquery-3.1.1.min.js %}
{% include js/moment.min.js %}
{% include js/dropcap.min.js %}

$(function() {
  $('.post-body p').first().html(function (i, html) {
    return html.replace(/^[^a-zA-Z]*([a-zA-Z])/g, '<span class="dropcap">$1</span>');
  });
  window.Dropcap.layout(document.querySelectorAll('.dropcap'), 3, 2);
});

var election_date = moment($('.election').attr('date'));
var inauguration_date = moment($('.inauguration').attr('date'));
var midterm_date = moment($('.midterm').attr('date'));

var diff_election = moment().diff(election_date, 'days');
var diff_inauguration = -1 * moment().diff(inauguration_date, 'days');
var diff_midterm = -1 * moment().diff(midterm_date, 'days');

$('.election .days').text(diff_election);
$('.inauguration .days').text(diff_inauguration);
$('.midterm .days').text(diff_midterm);
