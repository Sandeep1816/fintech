"use client"
import { Card, CardContent } from "@/components/ui/card";
import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <Card className="max-w-4xl mx-auto p-6 text-sm leading-relaxed space-y-4 mt-15 shadow-xl border border-gray-200">
      <CardContent>
        <h2 className="text-2xl font-bold text-center mb-6">Privacy Policy</h2>
        <p>Welcome to the Global Fintech Summit & Awards 2025! We value your trust and are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your information when you visit our website or engage with our services.</p>

        <h3 className="font-semibold mt-6">1. Information We Collect</h3>
        <p>We collect the following types of information:</p>
        <ul className="list-disc ml-6">
          <li><strong>Personal Information:</strong> Name, Email, Phone, City of residence, Preferences</li>
          <li><strong>Non-Personal Information:</strong> IP address, Browser type, Pages visited, Time spent</li>
        </ul>

        <h3 className="font-semibold mt-6">2. How We Use Your Information</h3>
        <ul className="list-disc ml-6">
          <li>Facilitate property-related inquiries and services</li>
          <li>Respond to questions and provide support</li>
          <li>Customize your experience on our platform</li>
          <li>Inform you about upcoming property events and offers</li>
          <li>Analyze website traffic and improve services</li>
        </ul>

        <h3 className="font-semibold mt-6">3. Sharing Your Information</h3>
        <p>We do not sell your personal information. However, we may share it with:</p>
        <ul className="list-disc ml-6">
          <li>Trusted real estate developers or partners</li>
          <li>Service providers assisting in website operations</li>
          <li>Legal authorities if required by law</li>
        </ul>

        <h3 className="font-semibold mt-6">4. Cookies and Tracking Technologies</h3>
        <p>Our website uses cookies to enhance user experience by:</p>
        <ul className="list-disc ml-6">
          <li>Understanding user preferences</li>
          <li>Providing personalized recommendations</li>
          <li>Analyzing website performance</li>
        </ul>
        <p>You can manage or disable cookies in your browser settings.</p>

        <h3 className="font-semibold mt-6">5. Data Security</h3>
        <p>We employ security measures to protect your data, but no method is 100% secure.</p>

        <h3 className="font-semibold mt-6">6. Your Rights</h3>
        <ul className="list-disc ml-6">
          <li>Access your personal data</li>
          <li>Request corrections or updates</li>
          <li>Withdraw consent for data processing</li>
          <li>Request data deletion (subject to legal requirements)</li>
        </ul>
        <p>To exercise these rights, contact us at <a className="text-blue-600" href="mailto:info@tasconmedia.com">info@tasconmedia.com</a>.</p>

        <h3 className="font-semibold mt-6">7. Third-Party Links</h3>
        <p>We are not responsible for third-party privacy practices. Please review their policies.</p>

        <h3 className="font-semibold mt-6">8. Changes to This Policy</h3>
        <p>We may update this policy from time to time. Changes will be posted here.</p>

        <h3 className="font-semibold mt-6">9. Contact Us</h3>
        <p>If you have questions, contact us at:</p>
        <p><strong>Email:</strong> <a className="text-blue-600" href="mailto:info@tasconmedia.com">info@tasconmedia.com</a></p>
        <p><strong>Phone:</strong> +91 97417 44869</p>
        <p><strong>Address:</strong> 50 2nd floor, MM Road, Frazer Town, Bengaluru, Karnataka India 560005</p>
      </CardContent>
    </Card>
  );
};

export default PrivacyPolicy;
