/**
 * Email service using EmailJS
 * To use this service, you need to:
 * 1. Create an account at https://www.emailjs.com/
 * 2. Create a service and template
 * 3. Add your credentials to .env file:
 *    VITE_EMAILJS_SERVICE_ID=your_service_id
 *    VITE_EMAILJS_TEMPLATE_ID=your_template_id
 *    VITE_EMAILJS_PUBLIC_KEY=your_public_key
 */

interface EmailData {
  name: string;
  email: string;
  message: string;
}

export class EmailService {
  private static readonly SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  private static readonly TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  private static readonly PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  static isConfigured(): boolean {
    return !!(
      this.SERVICE_ID &&
      this.TEMPLATE_ID &&
      this.PUBLIC_KEY
    );
  }

  static async sendEmail(data: EmailData): Promise<void> {
    if (!this.isConfigured()) {
      // Fallback: simulate email sending in development
      if (import.meta.env.DEV) {
        console.log("EmailJS not configured. Simulating email send:", data);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return;
      }
      throw new Error("Email service não configurado. Por favor, configure as variáveis de ambiente.");
    }

    try {
      // Dynamically import EmailJS only when needed
      const emailjs = await import("@emailjs/browser");
      
      await emailjs.send(
        this.SERVICE_ID,
        this.TEMPLATE_ID,
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
          to_email: "contato@tarcys.dev", // Your email
        },
        this.PUBLIC_KEY
      );
    } catch (error) {
      console.error("Error sending email:", error);
      throw new Error(
        error instanceof Error
          ? `Falha ao enviar email: ${error.message}`
          : "Falha ao enviar email. Por favor, tente novamente."
      );
    }
  }
}

