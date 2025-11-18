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

- Jest unit tests executed
- No additional automation
- No CI test pipeline

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
