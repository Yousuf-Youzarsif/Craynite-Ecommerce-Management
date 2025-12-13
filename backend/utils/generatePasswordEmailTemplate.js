export const generateForgotPasswordTemplate = () => {
  return `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;
            max-width: 640px;
            margin: 0 auto;
            padding: 32px;
            background: linear-gradient(135deg, #6366f1, #8b5cf6);
            border-radius: 18px;">

  <!-- Card -->
  <div style="background-color: #ffffff;
              border-radius: 16px;
              padding: 36px 32px;
              box-shadow: 0 25px 50px rgba(0, 0, 0, 0.18);">

    <!-- Logo / Brand -->
    <div style="text-align: center; margin-bottom: 28px;">
      <div style="display: inline-block;
                  padding: 10px 18px;
                  background: linear-gradient(135deg, #6366f1, #8b5cf6);
                  color: #ffffff;
                  font-size: 14px;
                  font-weight: 600;
                  border-radius: 999px;
                  letter-spacing: 0.5px;">
        CRAYNITE
      </div>
    </div>

    <!-- Header -->
    <div style="text-align: center; margin-bottom: 30px;">
      <h1 style="margin: 0;
                 font-size: 26px;
                 font-weight: 700;
                 color: #111827;">
        Reset Your Password
      </h1>
      <p style="margin-top: 10px;
                font-size: 15px;
                color: #6b7280;">
        Let’s get you back into your account
      </p>
    </div>

    <!-- Content -->
    <p style="font-size: 16px;
              line-height: 1.7;
              color: #374151;
              margin-bottom: 14px;">
      Hello,
    </p>

    <p style="font-size: 16px;
              line-height: 1.7;
              color: #374151;">
      We received a request to reset your password.  
      Click the button below to securely set a new password.
    </p>

    <!-- CTA -->
    <div style="text-align: center; margin: 36px 0;">
      <a href="${resetPasswordUrl}"
         style="display: inline-block;
                padding: 16px 42px;
                font-size: 16px;
                font-weight: 600;
                color: #ffffff;
                background: linear-gradient(135deg, #6366f1, #8b5cf6);
                text-decoration: none;
                border-radius: 999px;
                box-shadow: 0 10px 24px rgba(99,102,241,0.4);">
        Reset Password
      </a>
    </div>

    <!-- Security Notice -->
    <div style="background-color: #f8fafc;
                border-left: 4px solid #6366f1;
                padding: 16px 18px;
                border-radius: 10px;
                margin-bottom: 24px;">
      <p style="margin: 0;
                font-size: 14px;
                line-height: 1.6;
                color: #475569;">
        🔐 This link will expire in <strong>15 minutes</strong>.  
        If you didn’t request a password reset, you can safely ignore this email.
      </p>
    </div>

    <!-- Fallback URL -->
    <p style="font-size: 14px; color: #6b7280; margin-bottom: 8px;">
      Trouble clicking the button? Copy and paste this link:
    </p>

    <p style="font-size: 14px;
              color: #1f2937;
              word-break: break-all;
              background-color: #f1f5f9;
              padding: 14px;
              border-radius: 8px;">
      ${resetPasswordUrl}
    </p>

    <!-- Footer -->
    <div style="text-align: center; margin-top: 34px;">
      <p style="font-size: 14px; color: #6b7280; margin: 0;">
        Thanks,<br>
        <strong style="color: #111827;">Craynite Team</strong>
      </p>

      <p style="font-size: 12px;
                color: #9ca3af;
                margin-top: 10px;">
        This is an automated message. Please do not reply.
      </p>
    </div>

  </div>
</div>

    `;
};
