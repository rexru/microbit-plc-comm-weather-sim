/**
 * WEATHER BLOCKS EXTENSION
 * 
 * This namespace provides custom block functions 
 * for controlling weather simulation effects 
 * (Sun, Rain, Wind) using serial communication 
 * between a Micro:bit and an Industrial Shields PLC.
 * 
 * Each block sends a specific serial command string 
 * that the PLC interprets to toggle relays, which 
 * activate/deactivate the weather devices.
 */

//% weight=100 color=#fc9003 icon="☁"
namespace WEATHER {

    /**
     * Initialize serial communication for weather control.
     * Redirects serial output to pins P13 (TX) and P14 (RX)
     * at 9600 baud rate. Must be called before using other blocks.
     */
    //% block="WEATHER START"
    export function weatherStart(): void {
        serial.redirect(
            SerialPin.P13, // TX pin
            SerialPin.P14, // RX pin
            BaudRate.BaudRate9600
        )
    }

    /**
     * Turn the sun lamp ON.
     * Sends "SunOn" over serial.
     */
    //% block="SUN ON"
    //% color=#FFD700 icon="☀"
    export function SunOn(): void {
        serial.writeLine("SunOn")
    }

    /**
     * Turn the sun lamp OFF.
     * Sends "SunOff" over serial.
     */
    //% block="SUN OFF"
    //% color=#FFD700 icon="☀"
    export function SunOff(): void {
        serial.writeLine("SunOff")
    }

    /**
     * Turn the water pump (rain) ON.
     * Sends "RainOn" over serial.
     */
    //% block="RAIN ON"
    //% color=#0384fc icon="🌧"
    export function RainOn(): void {
        serial.writeLine("RainOn")
    }

    /**
     * Turn the water pump (rain) OFF.
     * Sends "RainOff" over serial.
     */
    //% block="RAIN OFF"
    //% color=#0384fc icon="🌧"
    export function RainOff(): void {
        serial.writeLine("RainOff")
    }

    /**
     * Turn the fan (wind) ON.
     * Sends "WindOn" over serial.
     */
    //% block="WIND ON"
    //% color=#A9A9A9 icon="༄"
    export function WindOn(): void {
        serial.writeLine("WindOn")
    }

    /**
     * Turn the fan (wind) OFF.
     * Sends "WindOff" over serial.
     */
    //% block="WIND OFF"
    //% color=#A9A9A9 icon="༄"
    export function WindOff(): void {
        serial.writeLine("WindOff")
    }
}
