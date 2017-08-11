




$('#search').keyup(function() {

    var search = $('#search').val();
    var wiki = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + search + "&format=json&callback=?";
    $.ajax({
        url : wiki,
        type : 'GET',
        dataType : 'jsonp',
        success : function(data) {
            console.log(data);
            console.log(data[2][2]);
            var output = '<ul class="result">';

            for(var i = 0; i < 10; i++) {             
                    output += '<a href="' + data[3][i] + '"><li>';
                    output += '<h2>' + data[1][i] + '</h2>';
                    output += '<p>' + data[2][i] + '</p>';
                    output += '</li></a>';                      
            };

            output += '</ul>';
            $('.update').html(output);
        }
    });
});


