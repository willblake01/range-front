import { resend } from './resend.js'
import { formatMoney, formatOrderDate } from '../utils/format.js'

const sendOrderReceipt = async ({ to, order }) => {
  try {
    await resend.emails.send({

      // NOTE: Using Resend default sender for demo purposes.
      // In production, verify a custom sending domain.
      from: 'Range Front <onboarding@resend.dev>',
      to,
      subject: `Your receipt for order ${order.id}`,
      html: `
        <h2>Thanks for your order!</h2>
        <p><strong>Order ID:</strong> ${order.id}</p>
        <p><strong>Date:</strong> ${formatOrderDate(order.createdAt)}</p>

        <ul>
          ${order.items
            .map(
              (item) =>
                `<li>${item.quantity} × ${item.title}</li>`
            )
            .join('')}
        </ul>

        <p><strong>Total:</strong> ${formatMoney(order.total)}</p>
      `,
    });
  } catch (err) {

    // Important: email failure must NOT break checkout
    console.error('Failed to send order receipt', err);
  }
}

export { sendOrderReceipt }
