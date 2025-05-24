# ERP Cost Management with NestJS

This project is a NestJS-based implementation of the Cost Management lab assignment for an Enterprise Resource Planning (ERP) course. It uses the NestJS framework to create a RESTful API for managing cost entries and invoices, including features like invoice generation, editing, due reminders, and tax calculations. The application uses dummy data instead of a database as per the assignment requirements.

## Features

- **Cost Entry SDK**: Log individual cost entries with category, amount, date, and description.
- **Invoice Generation SDK**: Create invoices with client and product/service details.
- **Invoice Editing Library**: Update existing invoices for changes or corrections.
- **Invoice Due Reminder SDK**: Notify clients of upcoming or overdue invoices.
- **Tax Calculation Library**: Automatically calculate taxes based on regional rules.

## Project Structure
erp-cost-management/
├── src/
│   ├── app.module.ts          # Root module
│   ├── main.ts               # Entry point
│   ├── cost/                 # Cost Entry SDK
│   │   ├── cost.module.ts    # Cost module
│   │   ├── cost.controller.ts# Cost API controller
│   │   ├── cost.service.ts   # Cost business logic
│   │   ├── entities/         # Cost entity definition
│   │   │   └── cost.entity.ts
│   │   └── dto/              # Data transfer objects
│   │       └── create-cost.dto.ts
│   ├── invoice/              # Invoice SDK
│   │   ├── invoice.module.ts # Invoice module
│   │   ├── invoice.controller.ts # Invoice API controller
│   │   ├── invoice.service.ts # Invoice business logic
│   │   ├── entities/         # Invoice entity definition
│   │   │   └── invoice.entity.ts
│   │   └── dto/              # Data transfer objects
│   │       ├── create-invoice.dto.ts
│   │       └── update-invoice.dto.ts
│   ├── reminder/             # Invoice Due Reminder SDK
│   │   ├── reminder.service.ts # Reminder logic
│   │   └── dto/              # Reminder DTO
│   │       └── reminder.dto.ts
│   ├── tax/                  # Tax Calculation Library
│   │   ├── tax.service.ts    # Tax calculation logic
│   │   └── dto/              # Tax calculation DTO
│   │       └── tax-calculation.dto.ts
├── .env                     # Environment variables
├── package.json             # Project dependencies and scripts
├── tsconfig.json            # TypeScript configuration
├── nest-cli.json            # NestJS CLI configuration
└── README.md                # This file

## Prerequisites

- Node.js (v14.x or later)
- npm (v6.x or later)
- A code editor (e.g., Visual Studio Code)

## Installation

1. create a new directory for the project:
   ```bash
   mkdir erp-cost-management
   cd erp-cost-management

2. Copy the project files into the directory.
3. Install the dependancies:
    npm install 
4. Ensure the @nestjs/platform-express package is installed (required for the HTTP server):
    npm install @nestjs/platform-express@10.4.17

## Build and Run

1. Build the project:
    npm run build

2. Start the application:
    npm run start
    The server will run on http://localhost:3000.

## Usage

# API Endpoints

1. Cost Entries
    - GET /cost - Retrieve all cost entries.
    - POST /cost - Create a new cost entry.
        Request Body:
          {
            "category": "string",
            "amount": number,
            "date": "string (YYYY-MM-DD)",
            "description": "string"
            }  

2. Invoices
    - GET /invoice - Retrieve all invoices.
    - POST /invoice - Create a new invoice.
        Request Body:
          {
            "clientId": number,
            "items": [{ "name": "string", "quantity": number, "unitPrice": number }],
            "tax": number,
            "discounts": number
            }
    - PUT /invoice/:id - Update an existing invoice.
        Request Body:
          {
            "items": [{ "name": "string", "quantity": number, "unitPrice": number }],
            "tax": number,
            "discounts": number
            }
## Testing 
    - using postman to test the endpoints.

## Dummy Data
    - The application uses in-memory dummy data instead of a database. The data is stored in the respective service files (cost.service.ts and invoice.service.ts).

## Contributing
    - This project is for educational purposes. Feel free to extend it by adding database integration, additional endpoints for reminders and tax calculations, or improving the codebase.
## License
    - No specific license is applied. This is an academic project for personal use. 
