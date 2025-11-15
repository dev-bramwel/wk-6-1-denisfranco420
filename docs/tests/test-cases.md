## ✅ Test Cases
| ID | Title | Preconditions | Steps | Expected Result | Actual Result | Status |
|----|--------|----------------|--------|-----------------|---------------|--------|
| TC-001 | Search Functionality | User on homepage | 1. Enter book title in top search bar <br> 2. Click “Search” | Book is shown based on serach parameters | Results not showing when clicking Enter | ✅ Pass |
| TC-002 | Add to Cart | User logged in | 1. Open book details <br> 2. Click “Add to Cart” | Book added to cart and count updates | Works as expected | ✅ Pass |
| TC-003 | Checkout Payment | User with items in cart | 1. Proceed to checkout <br> 2. Fill payment details <br> 3. Click “Pay” | Payment confirmation message | works as expected |✅ pass |
| TC-004 | Filter by Genre | User on catalog page | 1. Select “Fiction” from filter dropdown | Only fiction books displayed | Filter not applied | ❌ Fail |
| TC-005 | Filter by Price | User on catalog page | 1. Select “Fiction” from filter dropdown | SHow books in the price range | Filter not applied | ❌ Fail |
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
| TC-020 | Filter by Rating | User on catalog page | 1. Select “Fiction” from filter dropdown | Show books in the rating range | Filter not applied | ❌ Fail |
| TC-021  | Wishlist Add                     | User logged in          | 1. Click wishlist icon on book                                        | Book added to wishlist                           | Wishlist not found | ❌ Fail |
| TC-022  | Wishlist Remove                  | Wishlist page open      | 1. Click remove on wishlist item                                      | Item removed                                     | WishList not found | ❌ Fail |
| TC-023  | Order History Display | User logged in | 1. Navigate to Order History | Order list displayed| Navigation to Order History not defined | ❌ Fail |
| TC-024  | Incorrect Password Login         | Login page              | 1. Enter wrong password<strong> </strong>                             | Error message shown                              | Error Message displayed            | ✅ Pass |
| TC-025  | Sorting by Price (Low–High)      | Catalog page            | 1. Select “Low to High” sorting                                      | Items sorted ascending                           | Items not sorted             | ❌ Fail |
| TC-026  | Sorting by Price (High–Low)      | Catalog page            | 1. Select “High to Low” sorting                                      | Items sorted descending                          | Items Not sorted            | ❌ Fail|
| TC-027  | Sorting by Popularity            | Catalog page            | 1. Select “Most Popular” sorting                                     | Popular books appear first                       | Items not sorted           | ❌ Fail |
| TC-028  | Invalid Email Registration       | Signup page             | 1. Enter invalid email format                                        | Email validation error                           | Error message displayed           | ✅ Pass |
| TC-029  | Missing Required Signup Field    | Signup page             | 1. Leave required fields empty                                       | Error prompt displayed                           | Error message displayed    | ✅ Pass|
| TC-030  | Password Strength Validation     | Signup page             | 1. Enter weak password                                               | Password strength warning shown                  | Works as expected           | ✅ Pass |
| TC-031  | Add Review                       | Book details page       | 1. Write review<br>2. Click Submit                                   | Review displayed                                 | Review not displayed     | ❌ Fail |
| TC-032  | Delete Review                    | Book details page       | 1. Delete own review                                                 | Review removed                                   | Review inaccessible          | ❌ Fail |
| TC-033  | Load More Button                 | Catalog page            | 1. Scroll and click “Load More”                                      | Additional books load                             | Button inaccessible        | ❌ Fail |
| TC-034  | Newsletter Signup                | Homepage                | 1. Enter email<br>2. Subscribe                                       | Confirmation message                              | Newsletter signup inaccessbile | ❌ Fail |
| TC-035  | Add Multiple Books to Cart       | Catalog page            | 1. Add 3 different books                                             | All appear in cart                                | Works as expected          | ✅ Pass |
| TC-036  | Remove Multiple Cart Items       | Checkout page           | 1. Remove several items                                              | All selected items removed                        | Works as expected        | ✅ Pass |
| TC-037  | View Cart from Catalog           | Catalog page            | 1. Click cart icon                                                   | Cart overlay/page opens                           | Works as expected        | ✅ Pass |
| TC-038  | Navigate Back to Home            | Any page                | 1. Click Home logo                                                   | Redirect to homepage                              | Works as expected    | ✅ Pass |
| TC-039  | Search Autocomplete Suggestions  | Homepage                | 1. Type slowly in search bar                                        | Suggestions appear                                | Works as expected     | ✅ Pass |
| TC-040  | 404 Error Handling               | Enter random invalid URL | 1. Go to /random-url-xyz                                            | 404 error page displayed                          | Works as expected           | ✅ Pass |
| TC-041  | Payment taken and order created |  In checkout page  | 1. Add Items to cart<br>2. Proceed to checkout and complete payment process<br>3. Confirm Order creation | An order with a unique ID is created | Works as expected | ✅ Pass |
| ID       | Title                                   | Preconditions                 | Steps                               | Expected Result                                   | Actual Result                                      | Status   |
|----------|-------------------------------------------|-------------------------------|--------------------------------------|---------------------------------------------------|----------------------------------------------------|----------|
| TC-042   | Admin Page Access Failure                | Login through admin portal    | 1. Go to /random                     | 404 error page displayed                          | -                                                  | Pending  |
| TC-043   | Admin Inventory Adjustment Failure       | Admin logged into dashboard   | 1. Navigate to Inventory Management  | Admin should be able to adjust existing inventory | Admin cannot adjust existing inventory             | ❌ Fail  |
| TC-044   | Admin Catalog View Failure               | Admin logged into dashboard   | 1. Open Catalog menu                 | Catalog items should load normally                | Admin cannot view the catalog from admin dashboard | ❌ Fail  |
| TC-045   | Admin Orders List Not Loading            | Admin logged into dashboard   | 1. Open Orders section               | Orders list should be visible                     | Admin cannot view orders list                      | ❌ Fail  |
| TC-046   | Admin Queue Not Loading                  | Admin logged into dashboard   | 1. Open Queue section                | All queue items should load                       | Admin cannot view queue                            | ❌ Fail  |






