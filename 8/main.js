$(function () {
    $('.firstContainer p').hide()
    $('.secondContainer p').hide()

    $('#stepOne').on('click', function () {
        $('.thirdContainer p').hide()
        $('.secondContainer p').hide()

        $('#stepOne i').toggleClass('fa-caret-down').toggleClass('fa-caret-right')

        $('.firstContainer p').slideToggle()
    })



    $('#stepTwo').on('click', function () {
        $('.thirdContainer p').hide()
        $('.firstContainer p').hide()

        $('#stepTwo i').toggleClass('fa-caret-down').toggleClass('fa-caret-right')

        $('.secondContainer p').slideToggle()
    })



    $('#stepThree').on('click', function () {
        $('.secondContainer p').hide()
        $('.firstContainer p').hide()

        $('#stepThree i').toggleClass('fa-caret-down').toggleClass('fa-caret-right')

        $('.thirdContainer p').slideToggle()
    })
})

