input.onButtonPressed(Button.A, function () {
    basic.showNumber(2003)
    basic.pause(100)
    basic.showNumber(4)
    basic.pause(100)
    basic.showNumber(5)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # # # # #
        . # # # #
        . . # # #
        . . . # #
        . . . . #
        `)
})
basic.showString("Hello!")
