const evilButton = document.getElementById('evil-btn')
const yayButton = document.getElementById('yay-btn')
const OFFSET = 100

evilButton.addEventListener('click', () => {
    alert('Nice Try')
    window.close()
})
yayButton.addEventListener('click', () => {
    alert('THANK YOU!! I LOVE YOU SM <33')
})

document.addEventListener('mousemove', (e) => {
    const x = e.pageX
    const y = e.pageY
    const buttonBox = evilButton.getBoundingClientRect()
    const horizontalDistanceFrom = distanceFromCenter(buttonBox.x, x, buttonBox.width)
    const verticalDistanceFrom = distanceFromCenter(buttonBox.y, y, buttonBox.height)
    const horizontalOffset = buttonBox.width / 2 + OFFSET
    const verticalOffset = buttonBox.height / 2 + OFFSET
    if (Math.abs(horizontalDistanceFrom) <= horizontalOffset && Math.abs(verticalDistanceFrom) <= verticalOffset) {
        setButtonPosition(
            buttonBox.x + horizontalOffset / horizontalDistanceFrom * 10,
            buttonBox.y + verticalOffset / verticalDistanceFrom * 10
        )
    }
})

function setButtonPosition(left, top) {
    const windowBox = document.body.getBoundingClientRect()
    const buttonBox = evilButton.getBoundingClientRect()

    if(distanceFromCenter(left, windowBox.left, buttonBox.width) < 0) {
        left = windowBox.right - buttonBox.width
    }
    if(distanceFromCenter(left, windowBox.right, buttonBox.width) > 0) {
        left = windowBox.left
    }
    if(distanceFromCenter(top, windowBox.top, buttonBox.height) < 0) {
        top = windowBox.bottom - buttonBox.height
    }
    if(distanceFromCenter(top, windowBox.bottom, buttonBox.height) > 0) {
        top = windowBox.top
    }

    evilButton.style.left = `${left}px`
    evilButton.style.top = `${top}px`
}

function distanceFromCenter(boxPosition, mousePosition, boxSize) {
    return boxPosition - mousePosition + boxSize / 2
}