export default function PrivacyPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 pt-32 md:pt-56 pb-10 text-gray-800">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-1">Privacy Policy</h1>
        <p className="text-sm text-gray-500">Last updated: November 07, 2025</p>
        <p className="mt-4">
          VideoFit (“the App”) is provided by us as a free tool. This Privacy
          Policy explains how we handle your information when you use the App.
        </p>
      </header>

      <section className="space-y-6">
        <article>
          <h2 className="text-xl font-semibold mb-1">
            1. Information We Collect
          </h2>
          <p>
            We do <strong>not</strong> collect, store, or share any personal or
            non-personal information from users of the App. All activities take
            place entirely on your device.
          </p>
        </article>

        <article>
          <h2 className="text-xl font-semibold mb-1">2. Device Permissions</h2>
          <p>
            The App may request access to certain features on your device, such
            as the camera, microphone, or storage, in order to record or analyze
            video content. This access is used solely for functionality within
            the App and no data is uploaded, stored externally, or shared with
            anyone.
          </p>
        </article>

        <article>
          <h2 className="text-xl font-semibold mb-1">
            3. Use of Your Information
          </h2>
          <p>
            Since we do not collect any information, we do not use your data for
            analytics, marketing, or any other purpose.
          </p>
        </article>

        <article>
          <h2 className="text-xl font-semibold mb-1">
            4. Third-Party Services
          </h2>
          <p>
            The App does not use any third-party services (such as analytics
            tools, advertising networks, or SDKs) that collect data from you.
          </p>
        </article>

        <article>
          <h2 className="text-xl font-semibold mb-1">5. Data Security</h2>
          <p>
            Although no data is transmitted or stored externally, we are
            committed to maintaining a high level of security and privacy in all
            future versions of the App. If any new features require data
            handling, this policy will be updated accordingly.
          </p>
        </article>

        <article>
          <h2 className="text-xl font-semibold mb-1">6. Children’s Privacy</h2>
          <p>
            The App is not directed toward children under the age of 13. We do
            not knowingly collect personal information from children. If you
            believe a child has provided us with personal information, please
            contact us so we can remove it.
          </p>
        </article>

        <article>
          <h2 className="text-xl font-semibold mb-1">
            7. Changes to This Privacy Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time. If we make
            changes, the updated version will be available within the App or on
            our official website. Significant changes will be clearly
            communicated to users.
          </p>
        </article>

        <article>
          <h2 className="text-xl font-semibold mb-1">8. Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy,
            please contact us at:
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
