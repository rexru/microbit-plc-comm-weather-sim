# Weather Simulation Cart – Micro:bit & Industrial Shields PLC  

## Introduction  
This project was developed for an **Endress+Hauser Weather Simulation Cart**, designed to enhance student learning by making coding more interactive and tangible. The goal was to teach coding concepts through **block-based programming** on the BBC Micro:bit while demonstrating how industrial hardware can be controlled and monitored.  

Students use block coding on the Micro:bit, paired with an IoT extension board, to create custom **weather patterns**. Each block corresponds to a weather effect:  

- ☀️ **Sun** – Heating lamp  
- 💨 **Wind** – Electric fan  
- 🌧️ **Rain** – Water pump feeding a showerhead from a water basin  

By combining these blocks with timers, students can design dynamic weather cycles, simulating the natural environment in a hands-on way.  

---

## System Overview  

### Micro:bit & PLC Communication  
- **Micro:bit IoT Board → Industrial Shields PLC (Arduino-based)**  
  - Communication via **serial interface**  
  - Weather effect blocks send commands like `SUN ON` or `SUN OFF`  
  - PLC interprets these commands and toggles digital output pins  

### Digital Outputs & Relays  
- Each digital pin drives a **relay**  
- Relays switch **120V AC devices** (lamp, fan, pump) on and off  
- Ensures safe and isolated control of high-voltage components  

### Endress+Hauser Instrument Integration  
- Weather effects generate measurable data (**pressure, flow, temperature**)  
- Sensors capture this simulated process data  
- Data is displayed on an **Endress+Hauser Memograph** for real-time visualization  

---

## Educational Purpose  
This system bridges the gap between **beginner-friendly coding** and **real-world industrial automation**. Students not only practice coding logic through block programming but also see how code can control hardware, create physical effects, and feed into industrial instruments for monitoring.  

The cart introduces concepts such as:  

- Serial communication between controllers  
- Relay-based high-voltage switching  
- Data acquisition and visualization  
- The link between **embedded systems** and **industrial process automation**  
