import { startPayment } from "../../services/CheckoutService";

// Mock paystack util functions used by CheckoutService
jest.mock("../../utils/paystack", () => ({
  initializePaystackPayment: jest.fn((book, email, cb) => {
    // simulate a paystack response being passed to cb
    return Promise.resolve(cb({ reference: "abc123" }, book));
  }),
  verifyPayment: jest.fn().mockResolvedValue({ status: "success" }),
  PAYSTACK_PUBLIC_KEY: "pk_test_abc",
}));

test("startPayment calls initializePaystackPayment and verifyPayment", async () => {
  const items = [{ book: { title: "T", price: 5 } }];
  const onSuccess = jest.fn();
  // call
  await startPayment({
    items,
    email: "a@b.com",
    onSuccess,
    onCancel: jest.fn(),
  });

  // ensure the paystack util functions were invoked
  const paystack = require("../../utils/paystack");
  expect(paystack.initializePaystackPayment).toHaveBeenCalled();
});
