## ✅ Test Cases
| ID | Title | Preconditions | Steps | Expected Result | Actual Result | Status |
|----|--------|----------------|--------|-----------------|---------------|--------|
| TC-001 | Search Functionality | User on homepage | 1. Enter book title in top search bar <br> 2. Click “Search” | Book is shown based on serach parameters | Results not showing when clicking Enter | ✅ Pass |
| TC-002 | Add to Cart | User logged in | 1. Open book details <br> 2. Click “Add to Cart” | Book added to cart and count updates | Works as expected | ✅ Pass |
| TC-003 | Checkout Payment | User with items in cart | 1. Proceed to checkout <br> 2. Fill payment details <br> 3. Click “Pay” | Payment confirmation message | Pay button inactive on mobile and laptop | ❌ Fail |
| TC-004 | Filter by Genre | User on catalog page | 1. Select “Fiction” from filter dropdown | Only fiction books displayed | Filter not applied | ❌ Fail |
| TC-005 | Filter by Price | User on catalog page | 1. Select “Fiction” from filter dropdown | SHow books in the price range | Filter not applied | ❌ Fail |
| TC-005 | Filter by Rating | User on catalog page | 1. Select “Fiction” from filter dropdown | Show books in the rating range | Filter not applied | ❌ Fail |
| TC-006 | Book details view | User on catalog page | Select a book card | Show book details  | Details not shown | ❌ Fail |
| TC-007 | Book availability not shown | User on catalog page | 1. User on catalog page | Show wheather in or out of stock | Availability not displayed | ❌ Fail |
| TC-008 | Remove Item from cart | User on checkout page | 1. select "remove" on the checkout page | Item is removed and total price updated | WOrks as expected | ✅ Pass |
| TC-009 | Add Item from cart | User on Catalog page | 1. Select "buy now" on item | Item is added to cart and total price updated | Works as expected | ✅ Pass |
| TC-010 | Invalid Search | User on Catalog page | 1. Use the second search bar <br>2. Enter random Title not in the catalog | No results found message is displayed | Works as expected | ✅ Pass |
| TC-011 | Empty search | User on checkout page | 1. Use the second search bar <br>2. Click search without input | No validation shown | Works as expected | ✅ Pass |
| TC-012 | Login Functionality | User on the login page | 1. Use the login page <br>2. Enter correct credentials | Access catalog on correct credentials | Login page not found | ❌ Fail |
| TC-013 | Quantity Update increase | User on checkout page | 1. Use the checkout page <br>2. Increase the quanities of the items on cart | Item quantity increases and price updates | Works as expected | ✅ Pass |
| TC-014 | Quantity Update decrease | User on checkout page |1. Use the checkout page <br>2. Reduce the quanities of the items on cart | Item quantity increases and price updates | Works as expected | ✅ Pass |
| TC-014 | Quantity Update decrease | User on checkout page |1. Use the checkout page <br>2. Reduce the quanities of the items on cart | Item quantity increases and price updates | Works as expected | ✅ Pass |
| TC-015 | Invalid payment details | User on checkout page |1. User on payment details page<br>2. Leave the fields Empty | System throws a warning to enter payment details | Works as expected | ✅ Pass |
| TC-016 | Responsive design | User on catalog/checkout page |1. Use the checkout page <br>2. Change the display of the user screen | Items and objects change responsively | Works as expected | ✅ Pass |
| TC-017 | Search by Order ID | User on catalog/checkout page |1. Use the checkout page <br>2. Change the display of the user screen | Items and objects change responsively | Works as expected | ✅ Pass |
| TC-018 | Filter by Author | User on catalog page | 1. Select search and write Author name | Display books by author | Works as expected | ✅ Pass |
| TC-019 | Invalid Address on Payment | User on checkout page | 1. Input an invalid address on the checkout form | Payment flow interupted | Payment is Continued | ❌ Fail |





