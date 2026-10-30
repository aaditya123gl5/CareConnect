# 🏥 CareConnect — Healthcare Management System

A web-based Healthcare Management System built to simplify healthcare administration by bringing patient information, doctor details, appointments, and prescriptions together in one place.

CareConnect uses **Angular** for the frontend, **Java and Spring Boot** for the backend, and **Oracle Database** for data storage.

---

## 📌 Overview

CareConnect aims to provide a centralized platform for managing essential healthcare operations through an intuitive web interface and a structured backend architecture.

The project follows a frontend–backend architecture, allowing the Angular application to communicate with REST APIs exposed by the Spring Boot application.

### ✨ Key Features

* 🩺 **Doctor Management** — View and manage doctor information.
* 🧑‍⚕️ **Patient Management** — Organize patient-related information.
* 📅 **Appointment Management** — Support appointment-related operations.
* 💊 **Prescription Management** — Organize prescription information.
* 🔐 **Login Interface** — Provide a starting point for user authentication.
* 🔗 **REST API Integration** — Connect the Angular frontend with the Spring Boot backend.
* 🗄️ **Database Integration** — Use Oracle Database for persistent data storage.

*Note: The availability of individual features depends on the current implementation.*

---

## 🛠️ Technology Stack

### Frontend

* Angular
* TypeScript
* HTML5
* CSS3
* Node.js and npm

### Backend

* Java
* Spring Boot
* Spring Web / REST APIs
* Maven

### Database

* Oracle Database

### Development Tools

* Visual Studio Code
* Git
* GitHub
* Maven

---

## 🏗️ Project Architecture

```text
CareConnect/
│
├── ConnectCareFrontend/
│   ├── public/
│   ├── src/
│   │   └── app/
│   │       ├── service/
│   │       ├── app.ts
│   │       ├── app.html
│   │       ├── app.css
│   │       └── app-module.ts
│   ├── angular.json
│   ├── package.json
│   └── README.md
│
└── HealthCare/
    ├── .mvn/
    ├── src/
    │   └── main/
    │       ├── java/
    │       └── resources/
    │           └── application.properties
    ├── mvnw
    ├── mvnw.cmd
    └── pom.xml
```

The structure above illustrates the intended organization of the project. Some files or directories may vary as development progresses.

---

## ⚙️ Getting Started

Follow these instructions to run the project locally.

### Prerequisites

Install the following software:

* [Node.js and npm](https://nodejs.org/)
* [Java JDK](https://adoptium.net/)
* [Angular CLI](https://angular.dev/tools/cli)
* [Git](https://git-scm.com/)
* Oracle Database, if running the database-backed functionality locally

Verify your installations:

```bash
node --version
npm --version
java -version
git --version
```

### 1. Clone the Repository

```bash
git clone https://github.com/aaditya123gl5/CareConnect.git
cd CareConnect
```

### 2. Run the Angular Frontend

Open a terminal in the frontend directory:

```bash
cd ConnectCareFrontend
npm install
npm start
```

If the `start` script is unavailable, run:

```bash
npx ng serve
```

Open your browser at:

**http://localhost:4200/**

### 3. Run the Spring Boot Backend

Open another terminal from the repository root:

```bash
cd HealthCare
```

On Windows, run:

```powershell
.\mvnw.cmd spring-boot:run
```

On macOS or Linux, run:

```bash
./mvnw spring-boot:run
```

Alternatively, open the project in an IDE and run its Spring Boot application class.

The backend's actual port depends on its configuration. Check `application.properties` to determine the configured port.

### 4. Configure the Database

Before running database-dependent functionality:

1. Ensure Oracle Database is installed and running.
2. Create or select the appropriate database schema.
3. Configure the database connection properties in `HealthCare/src/main/resources/application.properties`.
4. Ensure the required database driver and dependencies are configured in `pom.xml`.

**Security:** Never commit real database passwords, API keys, or other credentials to GitHub. Use environment variables or another secure configuration method.

---

## 🔄 Frontend and Backend Integration

The Angular frontend communicates with the Spring Boot backend through HTTP requests to REST API endpoints.

The frontend service layer is intended to centralize API communication, while the backend handles application logic and database operations.

For successful integration, ensure that:

* The backend is running.
* The frontend uses the correct backend API base URL.
* CORS is configured appropriately for local development.
* Oracle Database is accessible when required.
* The API endpoints and request formats match the frontend implementation.

---

## 🔮 Future Enhancements

Potential improvements include:

* Role-based access for administrators, doctors, and patients.
* Secure authentication and authorization.
* Appointment scheduling and status tracking.
* Patient medical history management.
* Prescription creation and retrieval.
* Input validation and improved error handling.
* Automated testing for frontend and backend components.
* Deployment to a cloud hosting platform.

---

## 🎯 Project Goals

* Build a maintainable full-stack web application.
* Practice Angular frontend development.
* Apply Java and Spring Boot backend development concepts.
* Integrate a relational database.
* Understand REST API communication.
* Use Git and GitHub for version control and collaboration.

---

## 👨‍💻 Author

**Aaditya Verma**

GitHub: [@aaditya123gl5](https://github.com/aaditya123gl5)

---

## 📄 License

No license has been specified yet. Unless a license is added, the project remains subject to the default applicable copyright rules.
