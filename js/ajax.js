$.ajax({

    url: 'post.php',


    data: { id: 123 },


    type: 'POST',

    dataType: 'html',


    success: function (json) {
       
    },


    error: function (xhr, status) {
        alert('Disculpe, existió un problema');
    },


    complete: function (xhr, status) {
        alert('Petición realizada');
    }
});