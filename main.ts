radio.onReceivedNumber(function (receivedNumber) {
    let receiveNumber = 0
    shoudao = receiveNumber
    RingbitCar.init_wheel(AnalogPin.P1, AnalogPin.P2)
})
let shoudao = 0
basic.showIcon(IconNames.Happy)
radio.setGroup(1)
basic.forever(function () {
    if (shoudao == 1) {
        basic.showArrow(ArrowNames.North)
        勇士.MotorRun(勇士.enMotors.M1, 255)
        勇士.MotorRun(勇士.enMotors.M2, 255)
    }
    if (shoudao == 2) {
        basic.showArrow(ArrowNames.South)
        勇士.MotorRun(勇士.enMotors.M1, -255)
        勇士.MotorRun(勇士.enMotors.M2, -255)
    }
    if (shoudao == 3) {
        basic.showArrow(ArrowNames.West)
        勇士.MotorRun(勇士.enMotors.M1, 0)
        勇士.MotorRun(勇士.enMotors.M2, 255)
    }
    if (shoudao == 4) {
        basic.showArrow(ArrowNames.East)
        勇士.MotorRun(勇士.enMotors.M1, 255)
        勇士.MotorRun(勇士.enMotors.M2, 0)
    }
    if (shoudao == 5) {
        勇士.MotorRun(勇士.enMotors.M1, 0)
        勇士.MotorRun(勇士.enMotors.M2, 0)
    }
})
