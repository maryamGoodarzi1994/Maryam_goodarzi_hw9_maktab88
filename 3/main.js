$(function () {

    $('.parentBtn').on('click', function () {
        let parentText = $('.parentText').text();
        let targetText = $('.targetText').text()
        let childText = $('.childText').text()

        $('.targetText').text(parentText + ' ' + targetText + ' ' + childText + ' ' + targetText)

    })

    $('.childBtn').on('click', function () {
        let parentText = $('.parentText').text();
        let targetText = $('.targetText').text()
        let childText = $('.childText').text()
        $('.targetText').text( childText + ' ' + targetText)

    })
})

