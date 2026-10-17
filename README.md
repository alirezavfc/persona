# 🗣️ Persona

Persona is a minimal, privacy-focused, text-based social network inspired by Twitter/X.

Instead of traditional names and usernames, users are represented by a unique **Persona ID**, such as `Persona 0`.

The project is being built as a serious software engineering project, with a focus on real-world architecture, security, privacy, testing, networking, deployment, and maintainability.

Persona is intended to remain simple for users while having a solid and extensible technical foundation.

---

## 🎯 Project Goals

Persona is designed to explore and implement:

- Full-stack web application development
- Software architecture and engineering practices
- Authentication and authorization
- Relational database design
- API design
- Web application security
- Privacy-oriented system design
- End-to-End Encryption (E2EE)
- Networking and server infrastructure
- Testing and quality assurance
- Docker and Linux-based deployment
- Performance and scalability
- Distributed systems and federation concepts

The goal is not to build a large-scale clone of Twitter/X, but to build a **small, realistic social network with strong engineering principles**.

---

## 👤 Identity

Every user has exactly one Persona ID.

Example:

```text
Persona 0
Persona 1
Persona 2
```

Persona IDs:

- Are automatically generated
- Are unique across the Persona network
- Are sequential
- Cannot be changed by the user
- Are the primary public identity of the account

Users may also have:

- A display name
- A bio
- A predefined avatar selected from the available Persona avatars

Email is not part of a user's public identity.

---

## ✨ Core Features

### Accounts

- User registration
- Login with Persona ID and password
- Optional account recovery mechanism
- Password recovery without requiring an email-based public identity

### Social Features

- Text-only posts
- Maximum post length: **400 characters**
- Follow / unfollow
- Like
- Reply
- Repost
- Hashtags
- Mentions
- Notifications
- User search
- Post search
- Block

Posts cannot be edited or deleted after publishing.

> What you post is permanent.

### Home Feed

The Home feed contains:

- The user's own posts
- Posts from users they follow

Following does not require approval because all accounts are public.

### Search

Users can search for:

- Persona IDs
- Post content
- Hashtags

Search results may contain posts from users who are not being followed.

### Blocking

Blocking is designed to completely separate two users.

After blocking each other, users should not be able to:

- View each other's profiles
- View each other's posts
- Find each other through normal search
- Follow each other
- Reply to each other
- Mention each other
- Like or repost each other's content
- Otherwise interact with each other

---

## 🔐 Privacy

Privacy is a core architectural requirement of Persona.

The system should collect and retain the **minimum amount of user data necessary** to operate the service.

Privacy considerations include:

- Minimizing stored personal information
- Avoiding unnecessary collection of IP addresses
- Secure session handling
- Secure password storage
- Strict authorization
- Minimal logging
- Secure communication
- Privacy-aware network architecture

Privacy is considered throughout development rather than being added as a final security phase.

---

## 🔒 Private Messaging

Persona will support private messaging.

Message content will use **End-to-End Encryption (E2EE)**.

The intended model is:

```text
Sender
   ↓
Encrypt
   ↓
Encrypted message
   ↓
Server
   ↓
Encrypted message
   ↓
Recipient
   ↓
Decrypt
```

The server must not have access to the plaintext content of messages.

The initial E2EE scope is **text messages only**.

Cryptographic design and threat modeling will be documented before implementing the messaging system.

---

## 🌐 Open & Distributed Architecture

Persona is intended to become an open project.

The long-term goal is to support a distributed/federated architecture in which multiple Persona servers can participate in the same network while providing users with a unified experience.

Users should not need to understand or manually manage different servers.

This part of the architecture will be developed incrementally rather than being fully designed before implementation.

---

## 🧱 Initial Technology Stack

### Frontend

- React
- TypeScript
- Tailwind CSS

### Backend

- Node.js
- TypeScript
- Fastify

### Database

- PostgreSQL

### Infrastructure

- Docker
- Linux
- Reverse Proxy
- HTTPS/TLS

Additional technologies will be introduced when they solve an actual project requirement.

Experimental technologies such as **Go** may be used for isolated services or technical experiments when they provide a meaningful learning or engineering benefit.

---

## 🏗️ Architecture Approach

Persona will initially follow a **Modular Monolith** architecture.

The project will not start as a collection of microservices.

Initial logical modules may include:

```text
Authentication
Users
Posts
Social Graph
Notifications
Search
Messaging
```

As the system grows, architectural boundaries may be revised based on real implementation requirements and observed problems.

---

## 🧪 Testing

Testing will be introduced throughout development.

Planned testing areas include:

- Unit testing
- Integration testing
- API testing
- Frontend testing
- End-to-End testing
- Security testing
- Edge-case testing

Testing is part of feature development, not a final step after the application is finished.

---

## 🔄 Development Approach

Persona will be developed iteratively and incrementally.

The project will follow a cycle similar to:

```text
Requirements
    ↓
Small architectural decision
    ↓
Implementation
    ↓
Testing
    ↓
Review
    ↓
Refinement
    ↓
Next increment
```

Architecture and documentation are expected to evolve as the project evolves.

The goal is to avoid both:

- Building everything without planning
- Spending excessive time designing a system that has not yet been tested in practice

---

## 📚 Documentation

Project documentation will evolve alongside implementation.

Planned documentation includes:

```text
/docs
├── requirements
├── architecture
├── api
├── database
├── security
├── networking
├── testing
└── decisions
```

Important architectural choices will be documented as **Architecture Decision Records (ADRs)**.

---

## 🚧 Project Status

Persona is currently in the **Requirements & Initial Architecture** stage.

The first implementation phase will begin after the initial requirements and architecture baseline are documented.

The architecture, requirements, and technology choices are expected to evolve as implementation reveals new constraints or better solutions.
