input.onButtonPressed(Button.A, function () {
	
})
radio.onReceivedString(function (receivedString) {
    led.plotBarGraph(
    Math.map(radio.receivedPacket(RadioPacketProperty.SignalStrength), -128, -42, 0, 100),
    100
    )
})
radio.setGroup(21)
basic.forever(function () {
	
})
