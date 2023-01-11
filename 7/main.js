$(function () {
    $('button').on('click', function () {
        let widthBar = $('#inSide').width() / $('#inSide').parent().width() * 100

        if (widthBar <99) {
            $('#inSide').width(`${widthBar + 10}%`) 
       }
    })
})
