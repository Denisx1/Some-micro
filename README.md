System Architecture & Distributed Saga Flow
This project implements a distributed system for cleaning service management using the Transactional Outbox Pattern and Choreographed Saga.

🚀 Technology Stack
Services: NestJS (Node.js)

Communication: gRPC (Internal/Streaming) & Kafka (Event Bus)

Database: PostgreSQL (Per-service isolation)

Change Data Capture (CDC): Debezium

Cache/Counters: Redis

Runtime Streams: RxJS

📡 Global Architecture Flow
1. The Transactional Outbox (Reliability)

To avoid the "Dual Write" problem (where the database is updated but the message queue fails), we use Debezium:

Customer Service creates an Order and a CLEANERS_INVITED event inside a single Postgres Transaction.

Debezium monitors the Postgres WAL (Write Ahead Log).

It captures the insert into the Outbox table and streams it to Kafka immediately.

2. The Cleaner Invitation Saga

Once the event is in Kafka:

Cleaner Service consumes the event and creates CleanerJob records.

Notification Service listens for these updates to trigger real-time UI changes.

🔔 Service-Specific Responsibilities
🧹 Cleaner Service

Job Management: Tracks which cleaner is assigned to which order.

Availability: Manages the "Online/Offline" status and geographical matching.

Logic: Updates job statuses (Invited -> Viewed -> Accepted -> Rejected).

💬 Chat Service

Automatic Provisioning: Once a cleaner accepts a job, the Chat Service consumes the JOB_ACCEPTED event and automatically initializes a gRPC/Websocket room.

Persistence: Stores message history between Customers and Cleaners.

👤 Customer Service

Order Orchestration: The entry point for all service requests.

Status Tracking: Monitors the overall progress of the Saga (e.g., searching for cleaner -> cleaner assigned -> cleaning in progress).

📡 Notification Service (gRPC Streaming)

This service acts as the real-time bridge to the Mobile App:

Redis Integration: Manages atomic counters (INCR/DEL) for badges.

RxJS Orchestration: Uses merge and concat to deliver data in phases:

Phase 1: Instant Redis-based badge update (UPDATE_JOB_COUNTER).

Phase 2: Delayed background synchronization of Job objects (JOB_DATA_SYNC).

🔄 Sequence of Operations (The "Reconnect" Logic)
When a cleaner's app connects to the Notification Service:

Debezium Check: Ensures all pending events from the Outbox are already in Kafka.

Redis Fetch: The service checks invites_count:cleaner:{id}.

Database Fallback: If Redis is empty, the service queries the Cleaner Service for the current INVITED count, updates Redis, and pushes the number.

Phased Streaming:

T+0ms: User receives the notification count.

T+1000ms: The stream starts pushing historical Job objects to populate the UI list without blocking the main thread.

🛠 Infrastructure Setup
Kafka Topics

orders.outbox: Captured by Debezium from the Customer Service.

cleaner.notifications: Triggers for Redis increments and gRPC pushes.

chat.events: Signals for room creation and new message alerts.

Redis Schema

invites_count:cleaner:{id}: String (Integer) for job invitations.

unread:chat:{roomId}:{userId}: Counters for specific chat rooms.

## 1. Global Flow (Order to Kafka)
This flow shows how Customer Service triggers the Saga via Debezium.

![Order Flow](./create.order.async.flow111.jpg)