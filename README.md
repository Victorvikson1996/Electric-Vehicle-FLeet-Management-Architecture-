# EV Fleet Management System (Node.js/TypeScript)

This project implements an EV (Electric Vehicle) fleet management system using Node.js and TypeScript. It follows a distributed, event-driven architecture based on the provided diagram, featuring a Service Registry, UDP Multicast Space, Event Bus, and Nodes (vehicles, charging stations) with FSM (Finite State Machine), Drivers, Sensors, and Actuators.

## Architecture Diagram

![EV Fleet Management Architecture](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0c8AAAAASUVORK5CYII=)

_Note: Replace the base64 string with the actual encoded image data or a URL to the architecture diagram you provided._

## Features

- **Service Registry**: Tracks and manages EVs, charging stations, and fleet nodes.
- **UDP Multicast Space**: Simulates real-time broadcasting of events (using `dgram` for UDP or WebSocket as an alternative).
- **Event Bus**: Publishes and subscribes to events for real-time communication.
- **Nodes**: Includes `VehicleNode`, `ChargingStation`, and `FleetManager` with FSM for state management.
- **Drivers, Sensors, Actuators**: Simulates hardware interactions (GPS, battery, movement, charging).
- **Type Safety**: Fully typed with TypeScript for robustness.

## Prerequisites

- Node.js (v20 or later)
- npm (comes with Node.js)
- PostgreSQL (optional, for persistent storage)

## Installation

1. Clone the repository or create the project:
   ```bash
   mkdir ev-fleet-management
   cd ev-fleet-management
   npm init -y
   ```
