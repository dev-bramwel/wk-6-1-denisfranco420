# 🎯 Bookstore App - Risk Register

*Last Updated: 12th Nov 2025*  
*Risk Analyst: Bramwel Mutugi*

## 📊 Executive Summary

| Total Risks | Very High | High | Medium | Low | Very Low |
|-------------|-----------|------|--------|-----|----------|
| 15 | 4 | 3 | 3 | 3 | 2 |

---

## 🔴 VERY HIGH SEVERITY RISKS

| Risk ID | Risk Description | Category | Functional Area | Likelihood | Impact | Risk Score | Mitigation Strategy | Test case ID |
|---------|------------------|----------|-----------------|------------|--------|------------|-------------------|----------------|
| RISK-001 | Payment taken but order not created | Functional | Payments (FR-O03) | 3 | 5 | **15** | End-to-end payment testing with failure scenarios; verify database consistency | - |
| RISK-002 | XSS vulnerability via markdown `javascript:` links | Security | Reviews/Q&A (FR-U03) | 4 | 5 | **20** | Input sanitization testing; security penetration testing on all user inputs |-|
| RISK-003 | User data isolation failure - one user sees another's data | Security | User Accounts | 3 | 5 | **15** | Multi-user session testing; authorization boundary testing | - |
| RISK-004 | Inventory race conditions leading to overselling | Technical | Cart/Inventory (FR-O01) | 4 | 4 | **16** | Load testing on cart operations; verify stock validation at multiple points | - |

---

## 🟠 HIGH SEVERITY RISKS

| Risk ID | Risk Description | Category | Functional Area | Likelihood | Impact | Risk Score | Mitigation Strategy | Test case ID |
|---------|------------------|----------|-----------------|------------|--------|------------|-------------------|-----------------| 
| RISK-005 | Financial calculation errors (tax, shipping, coupons) | Functional | Checkout (FR-O02) | 4 | 4 | **16** | Boundary value testing on calculations; verify rounding rules |
| RISK-006 | Order state corruption or invalid status transitions | Functional | Orders (FR-O05) | 3 | 4 | **12** | State transition testing; audit trail verification |
| RISK-007 | Authentication bypass - non-admin accessing admin functions | Security | Admin Console | 3 | 4 | **12** | Privilege escalation testing; localStorage manipulation tests |

---

## 🟡 MEDIUM SEVERITY RISKS

| Risk ID | Risk Description | Category | Functional Area | Likelihood | Impact | Risk Score | Mitigation Strategy | Test Case ID|
|---------|------------------|----------|-----------------|------------|--------|------------|-------------------|----------------|
| RISK-008 | CSV export corruption - unreadable in Excel | Functional | Orders (FR-O04) | 4 | 3 | **12** | CSV format validation; import testing in target applications |
| RISK-009 | Return window logic errors (day 8 accepted defect) | Functional | Returns (FR-R01) | 3 | 3 | **9** | Business rule testing on return windows; edge case date testing |
| RISK-010 | Critical workflow blockers (cart persistence, form submission) | Technical | User Experience | 3 | 3 | **9** | End-to-end workflow testing; form validation comprehensive testing |

---

## 🟢 LOW SEVERITY RISKS

| Risk ID | Risk Description | Category | Functional Area | Likelihood | Impact | Risk Score | Mitigation Strategy | Test Case ID|
|---------|------------------|----------|-----------------|------------|--------|------------|-------------------|----------------|
| RISK-011 | Performance degradation - slow page loads | Non-Functional | Performance (FR-X02) | 3 | 2 | **6** | Performance benchmarking; lazy loading verification |
| RISK-012 | WCAG 2.1 AA compliance violations | Non-Functional | Accessibility (FR-X01) | 4 | 2 | **8** | Accessibility audit; screen reader testing |
| RISK-013 | Poor search/discovery experience | Functional | Search (Catalog) | 4 | 2 | **8** | Search relevance testing; filter combination testing |

---

## 🔵 VERY LOW SEVERITY RISKS

| Risk ID | Risk Description | Category | Functional Area | Likelihood | Impact | Risk Score | Mitigation Strategy | Test Case ID |
|---------|------------------|----------|-----------------|------------|--------|------------|-------------------|--------------|
| RISK-014 | Cosmetic UI issues and minor visual defects | UI/UX | Notifications | 4 | 1 | **4** | Visual regression testing; cross-browser testing |
| RISK-015 | Minor browser compatibility issues | Non-Functional | Compatibility (FR-X03) | 2 | 1 | **2** | Cross-browser testing on target platforms |

---

## 📈 Risk Distribution

<img width="671" height="500" alt="image" src="https://github.com/user-attachments/assets/9dd07afa-2fd4-42a0-8457-103d639d7325" />



---

## 🎯 Testing Effort Allocation Recommendation

| Severity Level | Recommended Testing Effort | Key Focus Areas |
|----------------|----------------------------|----------------|
| **Very High** | 40% | Payments, Security, Data Isolation, Inventory |
| **High** | 25% | Financial Calculations, Order States, Admin Access |
| **Medium** | 20% | Data Export, Business Rules, Critical Workflows |
| **Low** | 10% | Performance, Accessibility, Search |
| **Very Low** | 5% | UI Polish, Browser Compatibility |

---

## 🔄 Monitoring Metrics

- **Test Coverage**: % of high-risk requirements covered by tests
- **Defect Density**: Bugs found per risk category vs. predicted
- **Risk Burn-down**: High-risk items resolved over time
- **Escape Rate**: High-severity bugs found in production

---

## 📝 Notes

1. **Risk Scores** calculated as: Likelihood (1-5) × Impact (1-5)
2. **Likelihood Scale**: 1=Very Unlikely, 5=Very Likely
3. **Impact Scale**: 1=Minimal, 5=Critical (Business/Revenue Impact)
4. This register should be updated weekly during active testing

---

*This risk register serves as the foundation for test strategy and resource allocation. All testing activities should be prioritized according to this assessment.*
