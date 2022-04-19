input.onGesture(Gesture.ScreenUp, function () {
    moneda = randint(0, 1)
    if (moneda == 0) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.No)
    }
    basic.clearScreen()
    basic.pause(1000)
})
let moneda = 0
moneda = 2
