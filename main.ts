let h = 0
let t = 0
OLED.init(128, 64)
basic.forever(function () {
    dht11_dht22.queryData(
    DHTtype.DHT11,
    DigitalPin.P1,
    true,
    false,
    true
    )
})
basic.forever(function () {
    OLED.writeString("T:")
    OLED.writeNum(t)
    OLED.writeString(" *C")
    basic.pause(1500)
    OLED.clear()
})
basic.forever(function () {
    OLED.newLine()
    OLED.writeString("H:")
    OLED.writeNum(h)
    OLED.writeString(" %")
    basic.pause(1500)
    OLED.clear()
})
basic.forever(function () {
    t = dht11_dht22.readData(dataType.temperature)
    h = dht11_dht22.readData(dataType.humidity)
})
