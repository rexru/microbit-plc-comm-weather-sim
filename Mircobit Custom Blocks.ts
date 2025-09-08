/**
 * WEATHER BLOCKS
 */
//% weight=100 color=#fc9003 icon="☁"


namespace WEATHER {
    /**
     * Starts weather serial communication
     */
    //% block="WEATHER START"
    export function weatherStart(): void {
        serial.redirect(
            SerialPin.P13,
            SerialPin.P14,
            BaudRate.BaudRate9600
        )
    }

    /**
     * Turns sun lamp on
     */
    //% block = "SUN ON"
    //% color=#FFD700 icon="☀"
    export function SunOn(): void {
        serial.writeLine("SunOn")
    }

    /**
     * Turns sun lamp off
     */
    //% block = "SUN OFF"
    //% color=#FFD700 icon="☀"
    export function SunOff(): void {
        serial.writeLine("SunOff")
    }

    /**
     * Turn water pump on
     */
    //% block = "RAIN ON"
    //% colour=#0384fc icon="🌧"
    export function RainOn(): void {
        serial.writeLine("RainOn")
    }

    /**
     * Turn water pump off
     */
    //% block = "RAIN OFF"
    //% colour=#0384fc icon="🌧"
    export function RainOff(): void {
        serial.writeLine("RainOff")
    }

    /**
     * Turn fan on
     */
    //% block = "WIND ON"
    //% colour = #A9A9A9 icon="༄"
    export function WindOn(): void {
        serial.writeLine("WindOn")
    }

    /**
     * Turn fan on
     */
    //% block = "WIND ON"
    //% colour = #A9A9A9 icon="༄"
    export function WindOff(): void {
        serial.writeLine("WindOff")
    }
}

