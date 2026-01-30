import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const sendEmail = async (to: string, subject: string, html: string) => {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "LiPHt <onboarding@resend.dev>",
      to: [to],
      subject,
      html,
    }),
  });
  return response.json();
};

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface NotificationRequest {
  type: "contact" | "donation";
  to: string;
  data: {
    name?: string;
    email?: string;
    message?: string;
    amount?: number;
    donorName?: string;
  };
}

const handler = async (req: Request): Promise<Response> => {
  console.log("Notification function called");

  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { type, to, data }: NotificationRequest = await req.json();
    console.log(`Processing ${type} notification for ${to}`);

    let subject: string;
    let html: string;

    if (type === "contact") {
      subject = "Thank you for contacting LiPHt!";
      html = `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #10b981, #059669); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
            .content { background: #f9fafb; padding: 20px; border-radius: 0 0 8px 8px; }
            .footer { text-align: center; margin-top: 20px; color: #6b7280; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0;">Thank You, ${data.name}!</h1>
            </div>
            <div class="content">
              <p>We have received your message and will get back to you as soon as possible.</p>
              <p>Your message:</p>
              <blockquote style="border-left: 4px solid #10b981; padding-left: 16px; color: #6b7280;">
                ${data.message}
              </blockquote>
              <p>Best regards,<br><strong>The LiPHt Team</strong></p>
            </div>
            <div class="footer">
              <p>Luntiang Pilipinas, Hinaharap na Tiyak (LiPHt)</p>
              <p>Working together to end poverty in the Philippines</p>
            </div>
          </div>
        </body>
        </html>
      `;
    } else if (type === "donation") {
      subject = "Thank you for your donation to LiPHt!";
      html = `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #10b981, #059669); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
            .content { background: #f9fafb; padding: 20px; border-radius: 0 0 8px 8px; }
            .amount { font-size: 32px; font-weight: bold; color: #10b981; }
            .footer { text-align: center; margin-top: 20px; color: #6b7280; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0;">Thank You for Your Generosity!</h1>
            </div>
            <div class="content">
              <p>Dear ${data.donorName || 'Kind Donor'},</p>
              <p>We are deeply grateful for your donation of:</p>
              <p class="amount">₱${data.amount?.toLocaleString()}</p>
              <p>Your contribution will help us continue our mission to alleviate poverty in the Philippines and create sustainable change in communities.</p>
              <p>Your donation is currently being processed and will be confirmed shortly.</p>
              <p>With heartfelt thanks,<br><strong>The LiPHt Team</strong></p>
            </div>
            <div class="footer">
              <p>Luntiang Pilipinas, Hinaharap na Tiyak (LiPHt)</p>
              <p>Every donation makes a difference</p>
            </div>
          </div>
        </body>
        </html>
      `;
    } else {
      throw new Error("Invalid notification type");
    }

    console.log(`Sending email to ${to}`);
    const emailResponse = await sendEmail(to, subject, html);

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, data: emailResponse }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error in send-notification function:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
