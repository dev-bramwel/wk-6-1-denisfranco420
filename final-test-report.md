# SOFTWARE TEST REPORT

## Book Ordering Web Application

### Document ID: TR-BOOKAPP-2025-01

### Version: 1.0

### Date of Report: 18 Nov 2025

### Prepared By: Testerss

---

## 1. Executive Summary

This report presents the results of a comprehensive testing cycle conducted on the Book Ordering Web Application between **18 October 2025 and 18 November 2025**. The system was tested for functional correctness, non-functional quality, performance, and general reliability across multiple browsers (Chrome, Edge, Brave).

A total of **46 test cases** were executed, with multiple major failures observed in critical user journeys such as search, filtering, checkout validation, login, wishlist, reviews, sorting, and admin management. **13 defects** were formally logged, including **one critical defect** causing the login page to fail loading entirely.

No dedicated security testing tools were used, and no automation beyond Jest unit tests was applied. Performance tests were basic, using browser built-in tools.

Due to the presence of several unresolved major and critical defects, incomplete feature coverage (e.g., admin functionality and user login were not fully testable), and persistent failures in core workflows, the release is **NOT recommended** at this time.

<img width="956" height="545" alt="image" src="https://github.com/user-attachments/assets/7a6c9705-86a9-4c1e-859f-3f8daa6cd1b7" />

---

## 2. Test Objectives

The objectives of the testing cycle were:

- Validate functional behavior across catalog, search, checkout, cart, wishlist, review, and account modules.
- Ensure core ordering workflows operate reliably end-to-end.
- Assess non-functional quality, including responsiveness and browser compatibility.
- Verify performance using available browser developer tools.
- Identify critical defects that could impact user experience or business workflows.
<img width="934" height="172" alt="image" src="https://github.com/user-attachments/assets/6f627c48-9aae-4214-b7f7-70ef3c62d030" />


---

## 3. Areas Covered

### 3.1 Functional Testing

- Search bar functionality
- Search filtering (genre, price, rating, author)
- Sorting (price, popularity)
- Book details and availability display
- Cart and checkout workflows
- Payment validation
- Wishlist management
- Review addition and deletion
- Catalog pagination and “Load More”
- Signup, login, password validation
- Admin portal access, inventory, catalog, orders, queues

### 3.2 Non-Functional Testing

- Responsiveness
- Cross-browser behavior (Chrome, Edge, Brave)
- User experience flow
- Basic error handling (404 page)

### 3.3 Security Testing

No security testing tools used.  
Basic manual attempts included:

- Invalid inputs
- Form validation checks
- Observing responses to common misuse patterns

### 3.4 Performance Testing

Performed using:

- Chrome DevTools
- Edge Developer Tools

Measured:

- Page responsiveness
- Load behavior during catalog interactions
- Checkout flow latency

<img width="938" height="537" alt="image" src="https://github.com/user-attachments/assets/3a5e1954-8ab1-4065-8f92-5f025551398e" />

---

## 4. Areas Not Covered

The following were **not tested or partially tested**:

- **Admin functionality** (multiple admin workflows inaccessible)
- **User login system reliability**, due to login page returning 404
- No dedicated penetration testing
- No load/stress testing at scale
- No backend API verification beyond UI behaviors

---

## 5. Testing Approach

### 5.1 Test Strategy

- Black-box testing for functional validation
- Risk-based prioritization guided by the risk register
- Exploratory testing on catalog and checkout flows
- Regression runs after major failures
- Manual execution of all test cases
- Jest-based unit tests executed locally on React components

### 5.2 Testing Process

1. **Test Planning**  
   Defined scope, prepared test cases, reviewed risks.

2. **Test Case Execution**  
   46 manual test cases executed across Chrome, Edge, Brave.

3. **Defect Logging**  
   All failures documented in the defect log with severity, priority, and mapping to test cases.

4. **Reporting**  
   Final compilation of results, defects, and recommendations.

### 5.3 Tools Used

- **Testing:** Jest (unit tests)
- **Browser Tools:** Chrome DevTools, Edge DevTools
- **Documentation:** Markdown
- **Environment:** Local hosting environment
  
<img width="566" height="208" alt="image" src="https://github.com/user-attachments/assets/c1dfb8f9-7164-4c64-b13d-d4ed50c47f3b" />

---

## 6. Test Environment

### 6.1 Backend & Server Environment

- Hosting: Local environment
- Architecture: React frontend (no backend stack provided, assumed separate API)

### 6.2 Client Environment

Browsers tested:

- Google Chrome
- Microsoft Edge
- Brave Browser

Devices:

- Desktop resolutions only

### 6.3 Network Conditions

- Stable broadband connection
- No throttling or offline mode tests performed
  
<img width="426" height="264" alt="image" src="https://github.com/user-attachments/assets/b192a6f7-85a5-47ec-bb01-fe14031e97c6" />

---

## 7. Test Case Execution Summary

### 7.1 Summary Table

| Status       | Count |
| ------------ | ----- |
| Passed       | 25    |
| Failed       | 21    |
| Blocked      | 0     |
| Not Executed | 0     |
| **Total**    | 46    |

### 7.2 Automation Coverage

### 7.2.1 Overview

- New unit tests were added to improve component and workflow coverage for the React frontend. These tests are implemented with Jest and React Testing Library and cover:
   - Component behavior and interactions (render, button state, events)
   - Pages (Cart, Checkout, Order details, Admin) including routing context
   - Service-level payment integration (mocked Paystack flow)

### 7.2.2 Tests Added (key files)

- `src/components/__tests__/BookCard.test.js` — Book card rendering and purchase interaction
- `src/components/__tests__/Navbar.test.js` — Navigation, cart count and keyboard search behaviors
- `src/components/__tests__/BookList.test.js` — List/empty-state rendering
- `src/pages/__tests__/CartPage.test.js` — Cart rendering and item interactions
- `src/pages/__tests__/CheckoutPage.test.js` — Full checkout flow (shipping → review → payment → confirmation)
- `src/pages/__tests__/AdminPage.test.js` — Admin page access and basic UI checks
- `src/pages/__tests__/OrderDetailPage.test.js` — Order not-found case and order details rendering
- `src/pages/__tests__/PaymentWorkflow.test.js` — Payment workflow integration (Checkout -> startPayment mocked -> order becomes Paid)
- `src/services/__tests__/CheckoutService.test.js` — Verifies `startPayment` calls into paystack wrapper (mocked)

> Note: tests that rely on React Router are wrapped with `MemoryRouter`. Tests that would call external Paystack APIs are mocked to keep runs deterministic and fast.

### 7.2.3 How to run tests (PowerShell)

1) Install dev dependencies (one-time):

```powershell
npm install --save-dev @testing-library/react @testing-library/jest-dom @testing-library/user-event
```

2) Run full test suite (CI-style, single run):

```powershell
$env:CI = 'true'; npm test -- --watchAll=false
```

3) Run tests in watch mode (developer iteration):

```powershell
npm test
```

4) Run a single test by test name (match the `test(...)` title):

```powershell
$env:CI = 'true'; npm test -- -t "payment workflow"
```

5) Run a single test file using Jest directly (alternative):

```powershell
npx jest src/pages/__tests__/PaymentWorkflow.test.js -i
```

### 7.2.4 CI Automation (recommended)

Add a GitHub Actions workflow to run tests on push/PR. Example `.github/workflows/test.yml`:

```yaml
name: CI - Tests

on:
   push:
      branches: [ main ]
   pull_request:
      branches: [ main ]

jobs:
   tests:
      runs-on: ubuntu-latest
      steps:
         - uses: actions/checkout@v4
         - name: Use Node.js
            uses: actions/setup-node@v4
            with:
               node-version: 18
         - name: Install dependencies
            run: npm ci
         - name: Run tests
            run: npm test -- --watchAll=false

```

### 7.2.5 Notes & Guidance

- Mock external integrations (Paystack) in unit tests to avoid network calls — the project uses `jest.mock('../../utils/paystack')` / `jest.mock('../../services/CheckoutService')` in tests.
- Wrap components that use `react-router` hooks (`useNavigate`, `useParams`, `Link`) with `MemoryRouter` in tests.
- For locale-dependent values such as currency formatting, tests use numeric matching or regex rather than exact formatted strings (NBSP and locale differences can cause flaky failures).
- If you see React Router future-flag warnings in test output, they are informational; they don't fail the test but can be silenced by opting into the v7 flags or upgrading when compatible.

### 7.2.6 Troubleshooting

- If tests fail complaining about missing testing libs, install the `@testing-library/*` packages shown above.
- If a test is timing-sensitive (e.g., loading states or callbacks), use `waitFor` and control the mocked promise resolution so assertions wait for state updates.
- When asserting arrays or repeated headings (e.g., multiple "Shipping" headings), use `getAllByText` and assert the number or presence rather than `getByText` which fails on multiple matches.

---

## 8. Defect Report

### 8.1 Defect Summary

| Severity  | Count |
| --------- | ----- |
| Critical  | 1     |
| Major     | 10    |
| Minor     | 1     |
| Medium    | 1     |
| **Total** | 13    |

### 8.2 Top Critical Defect

#### **Defect ID:** BUG-007

**Title:** Book Availability Not Displayed  
**Severity:** Critical  
**Status:** Open  
**Module:** catalogue  
**Environment:** Chrome, Edge, Brave  
**Linked Test Case:** TC-007

**Description:**  
Availability (in/out of stock) missing on book listings

**Steps to Reproduce:**

1. Navigate to `/catalog`
2. Observe for availability

**Expected Result:**  
Book availability shown.

**Actual Result:**  
Availability option not shown.

**Impact:**

- No user, admin, or reviewer can authenticate.
- All authenticated workflows (wishlist, reviews, checkout history) effectively blocked.
- Product cannot be deployed in production in this state.

**Root Cause:**  
Likely broken route mapping or missing deployment artifact.

**Recommendation:**  
Fix route handler, ensure login component is packaged correctly, validate routing in production build.

<img width="887" height="627" alt="image" src="https://github.com/user-attachments/assets/64237d92-3b22-4c7c-bce9-87468e527e00" />

---

## 9. Defect Trend Analysis

Based on execution results:

- Failures concentrated heavily in **Catalog**, **Search**, **Admin**, and **Checkout** modules
- Multiple related filter/sorting issues indicate systemic state management or API bugs
- Admin pages failing altogether suggests misconfigured routing or blocked access
- Login failure cascades into 10+ blocked or partially tested flows

Defects remained consistently high across the testing cycle, with no stabilization trend due to unresolved critical pathways.

---

## 10. Quality Assessment

### 10.1 Strengths

- Cart operations (add/remove/update quantity) work reliably
- Basic checkout flow succeeds when given valid data
- Signup and validation rules function as expected
- Many UI elements respond consistently across browsers
- 404 error handling is correctly implemented

### 10.2 Areas of Concern

- Login system failure is a release blocker
- Filters (genre, price, rating) consistently fail
- Sorting logic broken across all categories tested
- Book details and availability views are unreliable
- Admin dashboard nearly entirely inaccessible
- Wishlist and review features non-functional
- High number of failed tests across core workflows

---

## 11. Risk Assessment

The following risks from the risk register directly affect release readiness:

| Risk Description                                    | Impact   | Mitigation                                      |
| --------------------------------------------------- | -------- | ----------------------------------------------- |
| Payment processed without order creation (RISK-001) | High     | Full E2E testing on production-like environment |
| XSS via markdown links (RISK-002)                   | High     | Input sanitization and penetration testing      |
| User data isolation failure (RISK-003)              | Critical | Authorization and multi-session testing         |
| Overselling due to race conditions (RISK-004)       | High     | Stock validation and concurrency testing        |
| Broken admin access (RISK-007)                      | High     | Authentication boundary checks                  |

---

## 12. Release Recommendation

### **RELEASE NOT RECOMMENDED**

Key reasons:

- Critical login failure prevents authentication completely
- Numerous major defects in search, filtering, sorting, wishlist, reviews
- Admin dashboard entirely unreliable
- No security or load testing conducted
- Core browsing and discovery workflows fail in multiple test cases

System stability and reliability are insufficient for production release.

---

## 13. Post-Release Activities (Pending Fixes)

- Fix all critical and major defects
- Re-test admin portal end-to-end
- Conduct basic security testing (input sanitization, XSS attempts)
- Implement CI testing pipeline with Jest coverage
- Validate routing and build integrity for all pages
- Conduct concurrency and stock validation tests
- Perform cross-browser testing on Safari and Firefox

---
## 14. Approvals

| Role              | Name                | Approval Date | Signature | Notes |
|------------------|---------------------|----------------|-----------|--------|
| QA Lead          | Denis Kyalo         | 18 Nov 2025    | DK        | Accepts remaining risks     |
| Risk analyst   |  Bramwel Mutugi  |        18 Nov 2025  | BM     | Acknoledges all untested risks     |
| Test executer  | Gideon Bethuel        | 18 Nov 2025    | GB        |   Confirms all test case outcomes     |

---
## 15. Appendices

### 14.1 Test Case Execution Sheet

(See attached test-cases.md)

### 14.2 Defect Log

(See attached defect-log.md)

### 14.3 Risk Register

(See attached risk-analysis.md)

---
