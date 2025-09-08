#define INPUT_PIN 19    // RX1 (Serial1 receive pin)
#define OUTPUT_PIN1 36   // Q0.0
#define OUTPUT_PIN2 37   // Q0.1
#define OUTPUT_PIN3 38   // Q0.02

void setup() {
  pinMode(OUTPUT_PIN1, OUTPUT);
  pinMode(OUTPUT_PIN2, OUTPUT);
  pinMode(OUTPUT_PIN3, OUTPUT);
  Serial1.begin(9600);  // Start Serial1 at 9600 baud (match micro:bit)
}

void loop() {
  while (Serial1.available()) {
    String command = Serial1.readStringUntil('\n');  // Read until newline
    command.trim();  // Remove any whitespace or newline characters

    if (command == "SunOn") {
      digitalWrite(OUTPUT_PIN1, HIGH);  // Turn ON light
    } else if (command == "SunOff") {
      digitalWrite(OUTPUT_PIN1, LOW);   // Turn OFF light
    }

    if (command == "RainOn"){
      digitalWrite(OUTPUT_PIN2, HIGH); // Turn ON water pump
    } else if (command == "RainOff") {
      digitalWrite(OUTPUT_PIN2, LOW); // Turn OFF water pump
    }

    if (command == "WindOn"){
      digitalWrite(OUTPUT_PIN3, HIGH); // Turn ON fan
    } else if (command == "WindOff") {
      digitalWrite(OUTPUT_PIN3, LOW); // Turn OFF fan
    }
    
  }
}


