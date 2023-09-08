---
sidebar_position: 6
---

# Payment links

Send payment links to your customers and track the status.

## Overview

Send payment links to your customers and track their status.

Payment links are unique one-use payment pages you can send to customers via SMS or email. Unlike the virtual terminal feature, customers can pay via card, open banking, or direct debit.

These payment links are tracked to see if and how your customer has interacted with the link.

### Navigation

Find payment links under the payments tab on the left-hand navigation bar (payments → request a payment).

## How does it work?

1. Select which MID you want to take the payment for 
2. Select the type of transaction from the drop-down menu listing: sale, pre-auth card, and verify.

> 📘 Sale
> 
> Immediate payment transaction

> 📘 Pre-auth
> 
> This enables you to confirm that the customer has sufficient funds. It should be noted that no funds are taken or ring-fenced - you have 30 days to capture the amount

> 📘 Verify
> 
> Verifies the authenticity of the card. This can be used as an anti-fraud check.

### Distinction between sales, pre-authorization, and verification

|                                                          | Sale         | Verify                | Pre-auth                                                                    |
| :------------------------------------------------------- | :----------- | :-------------------- | :-------------------------------------------------------------------------- |
| What is it?                                              | Regular sale | Verifies authenticity | Checks funds are available. Max length 30 days (Flexible amount up to 125%) |
| Payment speed                                            | Immediate    | N/A                   | N/a (valid for 30 days0                                                     |
| Tokenisation details (generate BUR for future payments\_ | ✔️           | ✔️                    | ✔️                                                                          |
| Take a payment                                           | ✔️           | ✔️                    | ✔️                                                                          |
| Request a payment                                        | ✔️           | ✔️                    | ✔️                                                                          |
| Card                                                     | ✔️           | ✔️                    | ✔️                                                                          |
| Open banking                                             | ✔️           | ❌                     | ❌                                                                           |
| Direct debit                                             | ✔️           | ❌                     | ❌                                                                           |

### Payment type

3. Once you have selected the type of transaction, you have the option of three payments types, depending on the payment rails you have set up on your account:

- Card payment
- Direct debit
- Open banking

4. You can choose your customer's payment options by selecting one or multiple methods above while creating the link.

### Customer details

5. Next, enter the" button, where it will ask for the email/phone number to send the payment link request.