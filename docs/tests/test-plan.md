🧾 Bookstore System – Test Plan
1. Introduction

This Test Plan describes the testing strategy, scope, objectives, schedule, and deliverables for the Bookstore Management System.
The system allows users to browse, search, and purchase books online while enabling admins to manage inventory, orders, and customer information.

2. Objectives
- Verify that users can search, view, and purchase books successfully.
- Ensure admin functions (add, edit, delete books) work correctly.
- Validate input fields and error handling for all user interactions.
- Confirm that the payment, cart, and order processes function end-to-end.
_ Identify and log any defects affecting usability, functionality, or data integrity.

3. Scope
✅ In Scope
- User registration and login
- Book search and filtering
- Shopping cart operations (add/remove/update)
- Checkout and order confirmation
- Admin book management
- UI validation (buttons, forms, messages)

🚫 Out of Scope
- Payment gateway integration testing (external API)
- Performance and load testing
- Multi-browser compatibility testing
- Mobile responsiveness

4. Test Approach
- Testing will use Black-Box Testing techniques:
- Equivalence Partitioning (EP) – to test valid/invalid inputs (e.g., price, quantity).
- Boundary Value Analysis (BVA) – to verify limits (e.g., 0 or max quantity).
- Decision Table Testing (DTT) – for discount or offer logic.
- State Transition Testing (STT) – to verify cart and order status changes.

Testing will be manual, executed on Chrome browser in a local environment.

5. Test Environment

| Component | Description                        |
| --------- | ---------------------------------- |
| OS        | Windows 10 / 11                    |
| Browser   | Google Chrome (latest)             |
| Tools     | GitHub, Excel (test data), VS Code |
| Backend   | Node.js / Express (if applicable)  |
| Database  | MySQL / MongoDB (sample data set)  |

6. Test Deliverables
- Test Plan (this document)
- Test Cases and Test Data Sheet
- Defect Report Log
- Test Summary Report

7. Schedule

| Phase                    | Planned Duration | Actual Duration | Status |
| ------------------------ | ---------------- | --------------- | ------ |
| Test Planning            | 1 Day            |                 |        |
| Test Design (Test Cases) | 2 Days           |                 |        |
| Test Execution           | 3 Days           |                 |        |
| Defect Reporting         | Ongoing          |                 |        |
| Test Closure             | 1 Day            |                 |        |

8. Roles & Responsibilities

| Role             | Responsibilities                                | 
| ---------------- | ----------------------------------------------- |
| **Test Manager** | Prepare test plan, track progress, assign tasks |
| **Test Analyst** | Design and execute test cases                   |
| **Tester**       | Perform testing, report and retest defects      |
| **Developer**    | Fix defects and support retesting               |

9. Entry & Exit Criteria

Entry Criteria
- Application build is deployed successfully.
- Test environment is ready.
- Test cases are reviewed and approved.

Exit Criteria
- All critical test cases executed and passed.
- All major defects fixed or deferred with approval.
- Test Summary Report submitted.

10. Risks & Mitigation

| Risk ID | Description                         | Likelihood | Impact | Mitigation                |
| ------- | ----------------------------------- | ---------- | ------ | ------------------------- |
| R1      | Server not available during testing | Medium     | High   | Coordinate with DevOps    |
| R2      | Delay in test data setup            | Medium     | Medium | Use mock data             |
| R3      | Defects found late in cycle         | High       | High   | Perform early smoke tests |

11. Test Metrics

| Metric           | Description                     |
| ---------------- | ------------------------------- |
| Test Case Pass % | (Passed / Total Executed) × 100 |
| Defect Density   | Defects per module size         |
| Fix Rate         | % of resolved defects           |
| Risk Coverage    | % of tested risks               |

12. Test Summary (Post Execution)

Testing confirmed that major bookstore functionalities like search, add to cart, and checkout perform correctly.
Minor usability issues were identified in form validation and error messages.
All high-priority defects were resolved, and the system is ready for deployment.
