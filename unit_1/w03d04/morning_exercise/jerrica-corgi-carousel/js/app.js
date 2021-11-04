$(() => {
    // counter variable to keep track of current image 
    let currentImgIndex = 0
    // number of images 
    const numOfImages = $('.carousel-images').children().length - 1

    // NEXT BUTTON 
    $('.next').on('click', () => {
        // hide the current image 
       $('.carousel-images').children().eq(currentImgIndex).css('display', 'none')
       if(currentImgIndex < numOfImages) {
            // increment counter by 1 
            currentImgIndex++
       } else {
           // reset currentImgIndex to 0
           currentImgIndex = 0
       }
        // alternative : ternary statement
        // currentImgIndex < numOfImages ? currentImgIndex++ : currentImgIndex = 0
       // show next image
       $('.carousel-images').children().eq(currentImgIndex).css('display', 'block')
    })

    // PREVIOUS BUTTON
    $('.previous').on('click', () => {
       // hide the current image 
       $('.carousel-images').children().eq(currentImgIndex).css('display', 'none')
       if(currentImgIndex > 0) {
           currentImgIndex--
       } else {
           currentImgIndex = numOfImages
       }
       // alternative : ternary statement
        // currentImgIndex > 0 ? currentImgIndex-- : currentImgIndex = numOfImages
       // show next image
       $('.carousel-images').children().eq(currentImgIndex).css('display', 'block')
    })
})
