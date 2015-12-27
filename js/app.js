function showResults(arr) {
    var html = "";
    $.each(arr, function (i, value) {
        var title = value.Title;
        console.log(title);
        html += '<p>' + title + '</p>';
    });
    $('#search-results').html(html);
}



$(document).ready(function () {
    $('#search-term').submit(function (event) {
        event.preventDefault();
        var searchTerm = $('#query').val();
        $.getJSON('http://www.omdbapi.com/?s=' + searchTerm + '&r=json', function (data) {
            console.log(data);
            var arr = data.Search
            showResults(arr);
        }, 'json');
    });

});
