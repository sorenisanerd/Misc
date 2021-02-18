input.onButtonPressed(Button.A, function () {
	
})
radio.onReceivedString(function (receivedString) {
    led.plotBarGraph(
    Math.map(radio.receivedPacket(RadioPacketProperty.SignalStrength), -128, -42, 0, 100),
    100
    )
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.playTone(440, music.beat(BeatFraction.Half))
    music.playTone(523, music.beat(BeatFraction.Half))
    music.playTone(440, music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.playTone(349, music.beat(BeatFraction.Whole))
    music.playTone(294, music.beat(BeatFraction.Half))
    music.playTone(349, music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.playTone(262, music.beat(BeatFraction.Whole))
})
radio.setGroup(21)
basic.forever(function () {
	
})
