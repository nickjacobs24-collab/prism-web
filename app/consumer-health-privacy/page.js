import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Consumer Health Data Privacy Policy — Prism",
  description:
    "How Prism Digital Ventures Limited handles consumer health data under the Washington My Health My Data Act.",
};

export default function ConsumerHealthPrivacy() {
  return (
    <LegalPage
      title="Consumer Health Data Privacy Policy"
      updated="9 October 2026"
      updatedLabel="Effective date"
    >
      <p>
        This policy applies to consumer health data handled by Prism Digital
        Ventures Limited under the Washington My Health My Data Act. It is
        separate from Prism&rsquo;s general Privacy Notice.
      </p>

      <h2>Consumer health data we collect and why</h2>
      <p>
        <strong>Information you provide:</strong> Health goals, supplements,
        lifestyle changes, supplement start and stop records, progress
        check-ins, age range and initial wellbeing answers, and health
        information you choose to include in support messages. We use this
        information to provide Prism&rsquo;s plan and progress features,
        respond to support requests, and for the limited personalisation
        purposes described in our general Privacy Notice.
      </p>
      <p>
        <strong>Apple Health information:</strong> With your permission,
        Prism reads relevant sleep, heart and activity measurements,
        including total sleep, deep sleep, REM sleep, steps, exercise
        minutes, active energy, heart-rate variability, resting heart rate
        and walking speed, together with relevant dates. We use this
        information to calculate baselines, averages, trends and progress.
      </p>
      <p>
        <strong>Information Prism derives:</strong> Prism generates progress
        stages, metric changes, charts and personal insights from the
        information above. We use these results to provide the service you
        request.
      </p>
      <p>
        <strong>Identifiers linked to health information:</strong> Prism
        uses necessary account or session identifiers to connect health
        information to your Prism session or account and provide the
        service.
      </p>

      <h2>Sources of consumer health data</h2>
      <p>
        We collect consumer health data directly from you, from Apple
        Health when you grant permission, and from calculations Prism makes
        from those inputs.
      </p>

      <h2>Consumer health data we share</h2>
      <p>
        When you choose to share a Prism progress image, the health
        measurements, progress information and visible labels or
        annotations included in that image are shared with the person, app
        or service you select through the iOS share sheet. Prism does not
        sell consumer health data.
      </p>

      <h2>Third parties and affiliates</h2>
      <p>
        The categories of third parties with whom Prism may share consumer
        health data are the recipients, apps or services you choose when you
        use the progress-sharing feature. Prism has no affiliates with whom
        it shares consumer health data at launch.
      </p>

      <h2>Your Washington rights</h2>
      <p>
        You may ask us to confirm whether Prism is collecting, sharing or
        selling your consumer health data; access that data; obtain
        information about third parties or affiliates with whom it has been
        shared or sold; withdraw consent to future collection or sharing; or
        request deletion.
      </p>
      <p>
        To exercise these rights, email{" "}
        <a href="mailto:hello@prismhealthco.com">hello@prismhealthco.com</a>.
        You can also use &ldquo;Delete my account&rdquo; in Prism, remove
        saved age and wellbeing answers through Profile &rarr; &ldquo;Delete
        age &amp; wellbeing answers&rdquo;, and stop future Apple Health
        access through your iPhone settings. You do not need to create a new
        account to exercise your rights. We may take reasonable steps to
        authenticate your request.
      </p>
      <p>
        If we refuse a request, you may appeal by emailing{" "}
        <a href="mailto:hello@prismhealthco.com">hello@prismhealthco.com</a>{" "}
        with &ldquo;Privacy appeal&rdquo; in the subject. We will respond
        within the periods required by Washington law and, if an appeal is
        denied, provide the applicable Washington Attorney General complaint
        route.
      </p>

      <h2>Contact</h2>
      <p>
        Prism Digital Ventures Limited
        <br />
        Company number 17249642
        <br />
        32 Lattimore Road, St Albans, AL1 3XW, United Kingdom
        <br />
        <a href="mailto:hello@prismhealthco.com">hello@prismhealthco.com</a>
      </p>
    </LegalPage>
  );
}
