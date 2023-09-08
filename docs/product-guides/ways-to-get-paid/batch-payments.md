---
sidebar_position: 8
---
# Batch payments

Batch payments allow you to process multiple card payments or send out multiple payment links simultaneously by uploading a CSV file.

You can process batches in different currencies; the chosen currency applies to the whole batch.

:::tip 
 You can find batch payments under the payments tab on the left-hand navigation bar or your main dashboard.
:::
:::caution 
 We have added multiple layers of security checks to ensure that it is fast, secure and accurate. 
 
 Due to these security checks, the card must have been used previously on Blink to generate the secure key needed. The secure key is called a Blink Unique Reference (BUR).
 
 Completing a verify transaction on your virtual terminal allows you to generate a BUR without charging the customer.
:::

# How do batch uploads work?

Follow these steps to complete a batch upload:

1. Select batch payment
2. Download the CSV template 
3. Fill in the template (see steps below)
4. Choose your MID from the drop-down list
5. Select which currency you want to charge in (if applicable)
6. Upload the template you have filled in and click upload file

### Filling in the template

The template has five columns - Name, Email, Blink Unique Reference, New amount and New ref.

| Column                       | Action                                                            |
| :--------------------------- | :---------------------------------------------------------------- |
| Name                         | Enter the name of each customer you want to charge in this batch. |
| Email                        | Enter the email addresses of each customer in the batch.          |
| Blink Unique Reference (BUR) | Enter the BUR token for each customer.                            |
| New amount                   | Enter the amounts you wish to charge each customer.               |
| New ref                      | Enter the transaction reference for each customer.                |

:::tip
  What is a BUR, and where can I find them?
 
 A BUR is a unique and secure token Blink creates for all customers when a  transaction is completed. Using a BUR enable abilities such as refunds, re-runs and batch payments.
 
 There are two ways you can find a customer's BUR:
 
 1. **Export a report** - We recommend using the export CSV function within reports to export a report containing all the information (including the BUR) needed to populate the template. 
 2. **Manually from transaction history** - Click the specific transaction drop-down to see that customer's BUR within transaction history.
:::

### Uploading the template

Follow these steps once you have finished filling in your template:

1. Save it with a relevant name
2. Go back to your Blink portal and choose the correct file from your saved documents
3. Click upload file

Once the file is uploaded, Blink will provide you with a summary of the batch, including the number of transactions to be processed, along with the relevant details such as the recipient's name, email, amount, and reference.

If there are any identified issues, Blink will highlight the relevant row and provide you with more information on what the issue is when you hover over it. Despite these warnings, you are still able to process the batch as normal.