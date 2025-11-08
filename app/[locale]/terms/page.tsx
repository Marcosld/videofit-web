import { Locale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
export default async function TermsOfServicePage({
  params,
}: PageProps<"/[locale]">) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  return (
    <main className="max-w-6xl mx-auto px-6 pt-32 md:pt-56 pb-10 text-gray-800">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-1">Terms of Service</h1>
        <p className="text-sm text-gray-500">Last updated: November 07, 2025</p>
        <p className="mt-4">
          These Terms of Service (“Terms”) govern your use of the VideoFit
          application (“the App”) provided by us. By using the App, you agree to
          be bound by these Terms. Please read them carefully before using
          VideoFit.
        </p>
      </header>

      <section className="space-y-6">
        <article>
          <h2 className="text-xl font-semibold mb-1">1. Use of the App</h2>
          <p>
            VideoFit is provided as a free tool to assist users in recording,
            tracking, or analyzing videos for fitness or related purposes. You
            agree to use the App only for lawful and personal use, and not for
            any commercial, harmful, or unauthorized activity.
          </p>
        </article>

        <article>
          <h2 className="text-xl font-semibold mb-1">
            2. User Responsibilities
          </h2>
          <p>
            You are responsible for maintaining the confidentiality of your
            device and ensuring that your use of the App complies with local
            laws and regulations. You agree not to misuse the App or attempt to
            interfere with its normal operation.
          </p>
        </article>

        <article>
          <h2 className="text-xl font-semibold mb-1">
            3. Intellectual Property
          </h2>
          <p>
            All content, trademarks, and materials available through the App are
            the property of VideoFit or its licensors. You may not copy, modify,
            or distribute any part of the App without prior written permission,
            except for personal, non-commercial use.
          </p>
        </article>

        <article>
          <h2 className="text-xl font-semibold mb-1">
            4. Disclaimer of Warranties
          </h2>
          <p>
            The App is provided “as is” and “as available,” without any
            warranties of any kind, either express or implied. We do not
            guarantee that the App will be error-free, uninterrupted, or
            suitable for your specific purposes.
          </p>
        </article>

        <article>
          <h2 className="text-xl font-semibold mb-1">
            5. Limitation of Liability
          </h2>
          <p>
            To the maximum extent permitted by law, VideoFit and its developers
            shall not be liable for any damages arising from your use or
            inability to use the App, including but not limited to loss of data,
            fitness results, or device issues.
          </p>
        </article>

        <article>
          <h2 className="text-xl font-semibold mb-1">
            6. Modifications to the Service
          </h2>
          <p>
            We reserve the right to modify, suspend, or discontinue any aspect
            of the App at any time without prior notice. Updates or changes to
            the App may be automatically installed on your device.
          </p>
        </article>

        <article>
          <h2 className="text-xl font-semibold mb-1">7. Termination</h2>
          <p>
            We may suspend or terminate your access to the App at our discretion
            if we believe you have violated these Terms. Upon termination, your
            right to use the App will cease immediately.
          </p>
        </article>

        <article>
          <h2 className="text-xl font-semibold mb-1">8. Governing Law</h2>
          <p>
            These Terms are governed by and interpreted in accordance with the
            laws of Spain, without regard to its conflict of law principles. Any
            disputes shall be resolved in the competent courts of Spain.
          </p>
        </article>

        <article>
          <h2 className="text-xl font-semibold mb-1">9. Contact Us</h2>
          <p>
            If you have any questions about these Terms of Service, please
            contact us at:
          </p>
          <p className="mt-2">
            <strong>Email:</strong>{" "}
            <a href="mailto:marcosluisdel@gmail.com" className="underline">
              marcosluisdel@gmail.com
            </a>
          </p>
        </article>
      </section>
    </main>
  );
}
