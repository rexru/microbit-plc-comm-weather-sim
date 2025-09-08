/**
 * WEATHER SIMULATION CART – PLC CONTROL CODE
 * 
 * This program receives serial commands from a Micro:bit 
 * via Serial1 and controls digital outputs on the 
 * Industrial Shields PLC. 
 * 
 * Each command corresponds to a weather effect:
 *  - "SunOn" / "SunOff"   → Heating lamp
 *  - "RainOn" / "RainOff" → Water pump
 *  - "WindOn" / "WindOff" → Fan
 * 
 * The outputs drive relays connected to 120V AC devices 
 * that simulate weather conditions.
 */

// Define PLC I/O pins
#define INPUT_PIN   19  // RX1 (Serial1 receive pin)
#define OUTPUT_PIN1 36  // Q0.0 – Lamp (Sun)
#define OUTPUT_PIN2 37  // Q0.1 – Water Pump (Rain)
#define OUTPUT_PIN3 38  // Q0.2 – Fan (Wind)

void setup() {
  // Configure output pins
  pinMode(OUTPUT_PIN1, OUTPUT);
  pinMode(OUTPUT_PIN2, OUTPUT);
  pinMode(OUTPUT_PIN3, OUTPUT);

  // Initialize Serial1 for communication with Micro:bit
  Serial1.begin(9600);  // Baud rate must match Micro:bit
}

void loop() {
  // Check if any data is available on Serial1
  while (Serial1.available()) {
    // Read incoming command string (until newline character)
    String command = Serial1.readStringUntil('\n');
    command.trim();  // Remove whitespace and newline characters

    // --- SUN CONTROL ---
    if (command == "SunOn") {
      digitalWrite(OUTPUT_PIN1, HIGH);  // Turn ON lamp
    } else if (command == "SunOff") {
      digitalWrite(OUTPUT_PIN1, LOW);   // Turn OFF lamp
    }

    // --- RAIN CONTROL ---
    if (command == "RainOn") {
      digitalWrite(OUTPUT_PIN2, HIGH);  // Turn ON water pump
    } else if (command == "RainOff") {
      digitalWrite(OUTPUT_PIN2, LOW);   // Turn OFF water pump
    }

    // --- WIND CONTROL ---
    if (command == "WindOn") {
      digitalWrite(OUTPUT_PIN3, HIGH);  // Turn ON fan
    } else if (command == "WindOff") {
      digitalWrite(OUTPUT_PIN3, LOW);   // Turn OFF fan
    }
  }
}
