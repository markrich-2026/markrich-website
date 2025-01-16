import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen max-w-screen bg-white text-gray-800 py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-semibold mb-4">Privacy Policy</h1>
        <p className="text-sm text-gray-500">Effective Date: 16/01/2024</p>
        <hr className="my-4" />
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-medium">Introduction</h2>
            <p>
              Welcome to <strong>[Training Solutions]</strong>! We value your
              privacy and are committed to protecting your personal information.
              This Privacy Policy outlines how we collect, use, and safeguard
              your data when you interact with our website, services, or any
              other medium through which we provide training solutions.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-medium">1. Information We Collect</h2>
            <h3 className="text-xl font-semibold mt-2">
              1.1 Personal Information
            </h3>
            <p>
              We may collect personal information that you provide directly to
              us, including but not limited to:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>Name</li>
              <li>Email address</li>
              <li>Contact number</li>
              <li>Job title and company name (if applicable)</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">
              1.2 Non-Personal Information
            </h3>
            <p>
              We may collect non-personal data automatically when you interact
              with our website, including:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>Browser type</li>
              <li>IP address</li>
              <li>Device information</li>
              <li>Pages visited and duration</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-medium">
              2. How We Use Your Information
            </h2>
            <p>We use the collected data for the following purposes:</p>
            <ol className="list-decimal list-inside space-y-1">
              <li>To provide and improve our training services.</li>
              <li>
                To communicate updates, offers, and other relevant information.
              </li>
              <li>To personalize your experience on our website.</li>
              <li>
                To analyze and improve the performance of our website and
                services.
              </li>
              <li>To comply with legal obligations.</li>
            </ol>
          </div>

          <div>
            <h2 className="text-2xl font-medium">
              3. Sharing Your Information
            </h2>
            <p>
              We do not sell, rent, or trade your personal information. However,
              we may share your data:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                With trusted third-party service providers assisting in our
                operations (e.g., email marketing tools, payment gateways).
              </li>
              <li>
                To comply with legal obligations or respond to legal processes.
              </li>
              <li>
                To protect the rights and safety of our users, partners, and
                company.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-medium">
              4. Cookies and Tracking Technologies
            </h2>
            <p>
              Our website uses cookies and similar technologies to enhance user
              experience. Cookies help us analyze traffic, remember user
              preferences, and improve functionality. By continuing to use our
              website, you consent to our use of cookies.
            </p>
            <p>
              You can manage or disable cookies through your browser settings.
              Please note that disabling cookies may affect your browsing
              experience.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-medium">5. Data Security</h2>
            <p>
              We implement robust measures to protect your data from
              unauthorized access, alteration, disclosure, or destruction.
              However, no method of transmission over the internet is entirely
              secure, and we cannot guarantee absolute security.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-medium">6. Your Rights</h2>
            <p>
              You have the following rights regarding your personal information:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                Access: Request access to the personal data we hold about you.
              </li>
              <li>
                Correction: Request corrections to inaccurate or incomplete
                information.
              </li>
              <li>
                Deletion: Request deletion of your data, subject to legal
                obligations.
              </li>
              <li>
                Opt-out: Unsubscribe from marketing communications at any time.
              </li>
            </ul>
            <p>
              To exercise these rights, please contact us at [Insert Contact
              Email].
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-medium">7. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not
              responsible for the privacy practices of these external sites and
              encourage you to review their privacy policies.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-medium">
              8. Updates to This Privacy Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will
              be effective immediately upon posting on this page. We encourage
              you to review this policy periodically to stay informed about how
              we protect your information.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-medium">9. Contact Us</h2>
            <p>
              If you have any questions, concerns, or feedback about this
              Privacy Policy, please contact us:
            </p>
            <p className="py-2">
              <strong>Markrich Solutions</strong>
            </p>
            <p>Email: mark@markrich.in</p>
            <p>Phone: 9702551632</p>
            <p>Address: Mumbai</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
