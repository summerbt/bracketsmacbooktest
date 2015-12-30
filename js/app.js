function showResults(arr) {
    console.log(arr);
    //    var html = "";
    //    $.each(arr, function (i, value) {
    //        var title = value.snippet.title;
    //        console.log(title);
    //        html += '<p>' + title + '</p>';
    //    });
    //    $('#search-results').html(html);
}

function getRequest(searchTerm) {
    alert('getRequest');
    var params = {
        size: '600x300',
        location: '46.414382,10.013988',
        heading: '151.78',
        pitch: '-0.76',
        key: 'AIzaSyCmdvpctynhzt2G5bT6Ybj246HrQwaoi3U'
    };
    url = 'https://maps.googleapis.com/maps/api/streetview';

    $.getJSON(url, params, function (data) {
        alert('getJSON');
        console.log(data);
        //        showResults(data.items);
    });
}


$(document).ready(function () {
    //    alert('here');
    //    $.getJSON('https://maps.googleapis.com/maps/api/streetview?size=600x300&location=46.414382,10.013988&heading=151.78&pitch=-0.76&key=AIzaSyCmdvpctynhzt2G5bT6Ybj246HrQwaoi3U', function (data) {
    //        console.log(data);
    //
    //    });
    $('#search-term').submit(function (event) {
        event.preventDefault();
        var searchTerm = $('#query').val();
        $('#query').val('');
        getRequest(searchTerm);
    });
});
