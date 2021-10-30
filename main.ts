let porsiony =2
let porsionx =2
input.onButtonPressed(Button.A, function () {
    porsionx += -1
    if (porsionx ==-1) {
        porsiony += -1
        porsionx += 5
    }
})
input.onButtonPressed(Button.B, function () {
    porsionx += 1
    if (porsionx == 5) {
        porsiony += 1
        porsionx = 0
    }
})
basic.forever(function() {
    basic.clearScreen()
    led.plot(porsionx, porsiony)
    if (porsionx == 4 && porsiony == -1) {
        basic.showString("knap a vant")
    }
    if (porsionx == 0 && porsiony == 5) {
        basic.showString("knap b vant")
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function() {
    //basic.clearScreen()
    porsionx = 2
    porsiony = 2
})
