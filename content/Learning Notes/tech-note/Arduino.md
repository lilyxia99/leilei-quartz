---
time: 2024-02-10
tags:
  - tech-notes
  - technology
  - hardware
---
# Circuit Playground

## Digital vs Analog

digital = only On and Off

analog = continuous

## accelerometer 

digital accelerometer = make use of PWM (pulse width modulation) to create square waves

accelerometer is widely used in mobile phone and internet equipments

[Accelerometer hand movement]([Title](https://learn.adafruit.com/assets/42326))

## Switch Code


```C++
//automaticallymap the range into four options
int range = map(sensorReading,sensorMin,sensorMax,0,3);

swith(range){
  case 0:
    Serial.println("dark");
  case 1:
    Serial.println("white");
  case 2:
    Serial.println("hi");
  case 3:
    Serial.println("Wow");
}

```