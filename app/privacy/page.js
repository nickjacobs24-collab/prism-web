import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Privacy notice — Prism",
  description:
    "How Prism Digital Ventures Limited handles personal information when you use the Prism app, including onboarding, your account and app-related support.",
};

export default function Privacy() {
  return (
    <LegalPage title="Prism App Privacy Notice" updated="11 November 2026">
      <p>
        Prism helps you explore supplements and lifestyle changes and follow
        changes in your health metrics. This notice explains how Prism
        Digital Ventures Limited handles personal information when you use
        the Prism app, including onboarding, your account and app-related
        support.
      </p>
      <p>In particular:</p>
      <ul>
        <li>
          We use the information you enter and the Apple Health data you
          allow us to access to provide your plan, charts and personal
          insights.
        </li>
        <li>
          We do not sell your personal information or use your health
          information for advertising.
        </li>
        <li>
          Sharing a progress image is your choice. Group analysis using other
          users’ health data is not active at launch.
        </li>
        <li>
          You can control Apple Health access, withdraw consent and request
          deletion. These are different from cancelling a subscription.
        </li>
      </ul>
      <p>
        This notice covers the app. The website and launch waitlist have a
        separate website privacy policy. A separate{" "}
        <a href="/consumer-health-privacy">
          Washington Consumer Health Data Privacy Policy
        </a>{" "}
        provides additional information for Washington consumers.
        Nevada-specific consumer health data disclosures are included in the
        United States section of this notice.
      </p>

      <h2>Who is responsible for your information?</h2>
      <p>
        Prism is operated by Prism Digital Ventures Limited, a company
        registered in England and Wales, company number 17249642. We are the
        controller of the personal information described in this notice: we
        decide why and how it is used.
      </p>
      <p>
        Email: <a href="mailto:hello@prismhealthco.com">hello@prismhealthco.com</a>
      </p>
      <p>Postal address: 32 Lattimore Road, St Albans, AL1 3XW, United Kingdom.</p>
      <p>
        You can use these details for questions, privacy requests and
        complaints.
      </p>
      <p>
        EEA representative: Prism will appoint an EEA representative before
        making Prism available in the EEA. The representative’s identity and
        contact details will be added here before EEA launch.
      </p>

      <h2>What information does Prism handle?</h2>
      <p>
        We handle information you give us, information made available
        through Apple Health with your permission, information supplied by
        Apple for sign-in and subscriptions, and information generated when
        you use Prism. Some processing begins during onboarding, before you
        create an account.
      </p>

      <h3>Account and subscription information</h3>
      <p>
        This includes your email address, account identifier, sign-in
        information and subscription status. You can sign in with Apple or
        use email and a password. If you use Apple’s private email relay, we
        receive the relay address Apple supplies. We receive transaction and
        entitlement information needed to check your App Store subscription,
        restore purchases and associate paid access with your Prism account.
        Apple processes your payment; Prism does not receive your full
        payment-card details. You can choose to add a name, date of birth,
        gender and avatar photo to your profile. These details are optional
        and are used to maintain the profile you choose to create.
      </p>

      <h3>Your goals, supplements and lifestyle records</h3>
      <p>
        This includes the health goals you select, the supplements in your
        plan, lifestyle changes you choose, when you start or stop an item,
        and your responses to progress check-ins. Your selections can reveal
        information about your physical or mental health. A recorded start or
        stop does not tell us whether you took a supplement on every
        intervening day.
      </p>

      <h3>Apple Health information</h3>
      <p>
        Depending on your permissions and selected goals, Prism requests read
        access to relevant sleep, heart and activity measurements: total
        sleep, deep sleep, REM sleep, steps, exercise minutes, active energy,
        heart-rate variability, resting heart rate and walking speed, together
        with the dates needed to show changes over time. Prism requests no
        HealthKit write access. All requested types are optional; refusing a
        type limits only the charts or insights that need it.
      </p>

      <h3>Information Prism calculates</h3>
      <p>
        We generate baselines, averages, changes over time, progress stages,
        charts and personal insights from your authorised health information
        and your goals, supplement and lifestyle records. These results are
        also personal information and can themselves reveal health
        information.
      </p>

      <h3>Other onboarding answers</h3>
      <p>
        You can skip the age-range and initial wellbeing questions. Skipped
        answers are not stored or sent. We collect and retain your age range
        and initial wellbeing answer to support planned personalised insights
        and comparisons between users with similar characteristics and goals.
        These answers are not used to calculate your plan, dosage guidance or
        personal insights at launch. Group-comparison features are planned
        for a future release. Before including your information in those
        comparisons, we will ask for your separate consent, including
        permission to use your earlier Prism history.
      </p>

      <h3>Suitability reminder</h3>
      <p>
        If shown, the health-condition question uses your selection to
        display a reminder to consult a healthcare professional. The
        selection is held in memory only while that screen is open. It is not
        saved to the device, sent to the backend or sent to analytics; only
        the fact that the disclaimer was shown is recorded.
      </p>

      <h3>Messages and feedback</h3>
      <p>
        If you email{" "}
        <a href="mailto:hello@prismhealthco.com">hello@prismhealthco.com</a>{" "}
        for support or feedback, we receive your message and any contact
        details, screenshots or other information you include. Cloudflare
        Email Routing forwards these emails to our Google/Gmail mailbox,
        where support correspondence is stored. Please include only what is
        needed to explain your request. The app’s support route uses your
        email app; no separate in-app question-submission feature is offered
        at launch.
      </p>

      <h3>Technical and usage information</h3>
      <p>
        App operation, diagnostics and analytics can involve an internal
        account or anonymous installation identifier, app/build and iOS
        version, device model, language or region, time zone, IP address,
        event timestamps, feature-use events and technical error information.
        PostHog events can include goal, supplement and behaviour
        identifiers, stage names, age band, wellbeing rating, fixed check-in
        answers and counts. They do not include health-metric values,
        health-condition selections, names, email addresses or free text. The
        backend access log records time, IP address, requested route and
        response status, but not request contents or health values. Age band
        and selected goals are analytics person properties; the initial
        wellbeing answer is recorded on the event when you choose it.
      </p>

      <h2>How does Apple Health access work?</h2>
      <p>
        Apple Health brings together information from your iPhone and
        connected devices. For the health metrics supported in Prism at
        launch, we prioritise readings recorded by Apple Watch and use
        iPhone readings where suitable Watch readings are unavailable. We do
        not combine readings from other connected apps or devices into
        Prism’s launch calculations.
      </p>
      <p>
        You choose the health data types Prism can access using Apple’s
        permission controls. You can change those permissions in Apple
        Health or your device settings. Refusing access to a metric means
        Prism cannot provide the charts or insights that need it. Missing
        information is not treated as proof of a particular health
        condition.
      </p>
      <p>
        When you connect Apple Health, Prism offers a choice between the
        most recent 30 days and all eligible available history. The
        authorised information can be used to establish your plan’s 14-day
        baseline and, where relevant, to compare measurements from before and
        after a supplement or lifestyle change you recorded. Raw Apple Health
        samples, timestamps, source names and sample identifiers remain on
        your device. Prism reconciles the readings on-device into daily
        values per metric and uploads those daily values to the Prism
        backend in London. Successfully uploaded values are removed from the
        local upload queue. Prism refreshes relevant authorised data when you
        return to the app and through HealthKit updates.
      </p>
      <p>
        Apple’s permission controls govern access to Apple Health. Prism’s
        consent choices govern the purposes for which Prism uses health
        information. Reading this notice, creating an account or accepting
        general terms does not by itself provide explicit health-data
        consent.
      </p>

      <h2>Why do we use your information, and on what legal basis?</h2>
      <p>
        For processing covered by UK or EU GDPR, the following bases apply.
        Information that reveals health needs an additional
        special-category condition; a contract or legitimate interest alone
        is not enough.
      </p>

      <h3>Your personal plan and progress</h3>
      <p>
        With your consent, we use your health-related answers, goals,
        supplement and lifestyle records, authorised Apple Health data and
        calculated results to generate and maintain your plan, show trends,
        and provide relevant personal insights and check-ins. Our bases are
        consent under Article 6(1)(a) and explicit consent under Article
        9(2)(a).
      </p>

      <h3>Sharing an image at your request</h3>
      <p>
        We use the selected health information to create and export the
        progress image you choose. For that optional use and disclosure, we
        rely on your consent under Article 6(1)(a) and explicit consent under
        Article 9(2)(a).
      </p>

      <h3>Account and paid access</h3>
      <p>
        We use account, profile, authentication and transaction information
        to create and maintain your profile, create and restore your
        account, verify your subscription, provide paid access, and send
        essential account messages. The basis is performing our contract
        with you or taking steps you request before entering it, under
        Article 6(1)(b).
      </p>

      <h3>Support and feedback</h3>
      <p>
        We use messages to answer requests, resolve problems and consider
        product feedback. Contract applies where this is necessary to
        support your service; otherwise we rely on our legitimate interests
        in responding to enquiries and improving Prism, under Article
        6(1)(f). If handling your request requires us to review health
        information, we use that information with your explicit consent for
        that purpose. We do not treat a support message as permission for
        unrelated health analysis.
      </p>

      <h3>Reliability, security and administration</h3>
      <p>
        We use necessary technical records to operate the app, investigate
        errors, prevent misuse and protect accounts. Our basis is our
        legitimate interests in providing a reliable and secure service,
        under Article 6(1)(f). This does not authorise unrelated use of
        health information. Processing health information to deliver and
        protect your health features remains within the explicit consent
        described above.
      </p>

      <h3>Product analytics</h3>
      <p>
        We use product analytics to understand use of Prism and improve the
        app. Section 6 describes the information involved and the available
        controls.
      </p>

      <h3>Legal obligations and claims</h3>
      <p>
        We retain or disclose limited information where necessary to comply
        with an applicable legal obligation, under Article 6(1)(c), or to
        establish, exercise or defend legal claims, under Article 6(1)(f).
        Where a claim requires health information, Article 9(2)(f) also
        applies. Other legally required health-data processing needs a
        specific applicable special-category condition; this paragraph is
        not permission for general health-data retention.
      </p>

      <h3>Planned personalisation and group analysis</h3>
      <p>
        For collecting and retaining your age range and initial wellbeing
        answer for the planned purposes in section 2.5, we rely on your
        consent under Article 6(1)(a) and, where the information reveals
        health, your explicit consent under Article 9(2)(a).
      </p>
      <p>
        The group-analysis feature described in section 11 is separate from
        these launch uses and will require its own optional consent.
      </p>

      <h2>How do Prism’s insights work?</h2>
      <p>
        Prism applies product rules to your selected goals, supplements and
        lifestyle changes and, where available, your authorised health
        measurements. For example, it calculates averages, compares periods
        and displays changes alongside the dates you recorded starting or
        stopping something. It also uses prepared supplement and lifestyle
        information to explain your plan.
      </p>
      <p>
        These are automated analyses of your information. They support
        choices you make about your own wellbeing. A trend does not
        establish that a supplement or lifestyle change caused a result. The
        launch app does not make decisions about insurance, employment or
        access to healthcare.
      </p>
      <p>
        At launch, Ask Prism provides prepared questions and answers. It is
        not an open-ended AI chat service.
      </p>
      <p>
        At launch, the Prism app and backend do not call an external AI or
        model service.
      </p>

      <h2>Analytics, messages and notifications</h2>

      <h3>Product analytics</h3>
      <p>
        Prism uses PostHog, configured in its EU hosting region, for product
        analytics and diagnostics. Its purpose is to help us understand how
        people use features, identify technical errors and improve the app.
      </p>

      <h3>Diagnostics and security</h3>
      <p>
        Necessary diagnostics and security records are used to detect faults
        and misuse. These purposes are separate from measuring product
        usage. Any health information that reaches supporting tools remains
        health information and is subject to the protections in this
        notice.
      </p>

      <h3>Notifications</h3>
      <p>
        If you allow notifications, Prism can send service reminders and
        progress updates. You can change notification permissions in iOS and
        use the notification controls available in Prism. Depending on your
        device settings, notifications can appear on the lock screen.
      </p>

      <h3>Account and service messages</h3>
      <p>
        We use Mailgun’s EU sending domain for essential account and service
        emails, such as verification and password-reset instructions.
        Mailgun processes recipient email addresses, message content and
        delivery information. These messages do not include your health
        measurements, health-related answers or other sensitive health
        content. We do not use health data to target advertising or build
        marketing audiences.
      </p>
      <p>Promotional marketing is not part of the launch service.</p>

      <h2>Who receives information?</h2>

      <h3>Providers operating Prism</h3>
      <p>
        We use external services to operate the app and authorised
        developers or support personnel to maintain it. Access is limited to
        what is necessary for their role and the purposes described here.
        Providers acting on our behalf are subject to applicable
        data-protection terms.
      </p>
      <p>
        DigitalOcean hosts our backend, database and backups. PostHog
        provides product analytics and error diagnostics. Cloudflare stores
        and delivers avatar images in its EU-restricted storage and forwards
        incoming support email to Google/Gmail. Mailgun delivers account and
        service emails. Our development team at Weelorum has authorised
        access to maintain the service under our engagement. Each receives
        only the categories relevant to its role; the information involved
        is described in sections 2, 3 and 6.
      </p>
      <p>
        Some providers also process limited information for their own
        service-security, abuse-prevention and legal purposes. Mailgun/Sinch
        uses message-routing and service-use information to operate, protect
        and improve its communications services. Google’s Gmail service is
        governed by Google’s privacy policy, including its rules on
        processing across Google services and account settings. This does
        not mean that Prism uses Google for in-app analytics.
      </p>

      <h3>Apple</h3>
      <p>
        Apple provides Apple Health permission controls, Sign in with Apple
        where selected, App Store billing, push-notification delivery and
        device crash reporting where enabled. Apple handles information for
        its own platform services under its privacy policy. Our use of
        information received through those services is explained in this
        notice.
      </p>

      <h3>People and services you choose when sharing</h3>
      <p>
        When you share a progress image, the recipient or app you select
        receives its contents. Section 8 explains this.
      </p>

      <h3>Legal recipients</h3>
      <p>
        We disclose information to a court, regulator or other authorised
        recipient only when an applicable legal basis permits or requires
        it. We assess the request and limit disclosure to the information
        justified. Health information receives its additional legal
        protections.
      </p>

      <h3>A change of ownership</h3>
      <p>
        If Prism is acquired or reorganised, a successor could receive
        information needed to continue the service, subject to applicable
        law, confidentiality protections and this notice. This does not
        authorise a new health-data use or override any consent requirement.
        We will explain a material change affecting your information.
      </p>

      <h3>Sale and advertising</h3>
      <p>
        We do not sell personal information, including health information,
        for money or other valuable consideration. We do not share it for
        cross-context behavioural advertising or targeted advertising, or
        provide health data to data brokers.
      </p>

      <h2>Sharing your progress</h2>
      <p>
        You can choose to share an image showing your progress, such as a
        line chart of resting heart rate or sleep. The image includes the
        information shown in the share output, which can include health
        measurements, progress and any visible labels or annotations.
      </p>
      <p>
        Sharing opens the iOS share sheet so you can select a destination.
        Check the image and recipient before sending it. Sharing an image
        does not give the recipient access to your entire Prism account.
      </p>
      <p>
        Once sent or saved outside Prism, the image is handled by the
        recipient or service you chose, under its own settings and privacy
        terms. They can keep or forward a copy. Deleting your Prism account
        does not remove copies you or recipients have saved outside Prism.
      </p>

      <h2>Where is information processed, and how is it protected?</h2>

      <h3>Processing locations</h3>
      <p>
        Prism is operated from the United Kingdom. Our backend, database and
        backups are hosted with DigitalOcean in London, and PostHog uses its
        EU hosting region. Mailgun’s sending domain is configured in the EU.
        These hosting choices do not mean that all processing stays in the
        UK or EEA: providers may process information in other countries,
        including the United States, for delivery, support, security and
        other purposes described here. Authorised developers access the
        production service from Ukraine. Support correspondence is stored in
        Google/Gmail, whose privacy policy provides for international
        processing.
      </p>

      <h3>International transfers</h3>
      <p>
        Where information is transferred internationally, we use the
        transfer mechanism required for that transfer. For UK or EEA
        restricted transfers, this can be an applicable adequacy decision or
        appropriate contractual safeguards, with supplementary measures
        where needed.
      </p>
      <p>
        You can ask us for information about, or a copy of, the relevant
        transfer safeguards, with confidential details redacted where
        necessary.
      </p>

      <h3>Security</h3>
      <p>
        We use HTTPS for network traffic, short-lived session tokens, iOS
        Keychain storage for device credentials, one-way password hashing,
        rate limiting, restricted server configuration, encrypted managed
        database storage and backups, and encrypted Cloudflare avatar
        storage. The local database is excluded from iCloud backups,
        payment-card details do not reach Prism, and secrets are not stored
        in source code. Prism retains ownership and administrator authority
        over its accounts and infrastructure; authorised team members
        operate the service using access granted by Prism.
      </p>
      <p>
        If a personal-data breach requires notification to you or a
        regulator, we will make that notification as required by the
        applicable law.
      </p>

      <h2>Retention, withdrawal and deletion</h2>
      <p>
        We keep personal information for as long as it is reasonably
        necessary for the purposes explained in this notice. We periodically
        review whether information is still needed and delete or anonymise
        it when there is no longer a reasonable purpose for keeping it,
        unless limited retention is required for legal, accounting or
        dispute purposes.
      </p>

      <h3>Account and health history</h3>
      <p>
        Keeping your saved plan and progress history is part of providing
        the service while you use it. Removing a supplement or lifestyle
        change from your active plan records a stop; its earlier history can
        remain so your chart still makes sense.
      </p>
      <p>
        We keep your account, saved plan and health history while your
        account exists and while that information is reasonably needed to
        provide Prism, preserve your progress and history, and support your
        return to the service. We periodically review whether it remains
        necessary and delete or anonymise it when it is no longer needed,
        subject to the limited exceptions explained below.
      </p>
      <p>
        If you do not complete registration, we keep any saved onboarding
        information only while it is reasonably needed to allow you to
        complete setup, and remove it when that purpose no longer applies.
        We keep age and initial wellbeing answers while they are reasonably
        needed for the purposes described in this notice, including planned
        personalisation and comparison features. You can delete those
        answers independently at any time. Any later group analysis still
        requires its separate opt-in. This applies to optional onboarding
        answers, not profile date of birth, gender or avatar.
      </p>

      <h3>Other records</h3>
      <p>
        Different records have different retention periods. Keeping limited
        evidence for accounting or disputes does not mean keeping your
        health answers or health history for those purposes.
      </p>
      <p>
        We retain only the minimum consent evidence needed to demonstrate the
        consent you gave, including the relevant identifier, consent wording
        or version, date and action, for as long as reasonably necessary for
        that purpose and to meet applicable legal or dispute requirements. We
        do not retain your health answers as part of that evidence.
      </p>
      <p>
        We retain support messages, product analytics, technical logs and
        crash information only for as long as reasonably needed for support,
        analytics, security, diagnostics and related legal purposes. At
        present, application logs are kept for seven days, web-server logs
        for 14 days and administrative audit logs for up to 12 months. Other
        retention periods depend on the system and purpose; we review these
        periodically.
      </p>
      <p>
        We keep records required for accounting and tax for the applicable
        statutory period, normally six years from the end of the relevant
        company financial year, or longer where legally required. We retain
        only the records needed for that purpose, separately from health
        history.
      </p>

      <h3>Withdrawing consent</h3>
      <p>
        You can withdraw consent to our health-data use at any time by
        contacting{" "}
        <a href="mailto:hello@prismhealthco.com">hello@prismhealthco.com</a>.
        You can separately stop new Apple Health access through your iPhone
        settings and remove saved age and wellbeing answers through Profile →
        “Delete age &amp; wellbeing answers”. We stop the processing covered
        by your withdrawal and delete the relevant information unless a
        specific lawful exception requires limited retention. We will
        explain any such exception. Withdrawal does not change the
        lawfulness of processing carried out before it.
      </p>
      <p>
        Health-based features cannot continue without the information and
        consent they need. Consent to group analysis is separate from
        consent to your individual health features. Section 6 describes
        analytics and its controls.
      </p>
      <p>
        You can remove your saved age and wellbeing answers and withdraw
        consent to retaining them through Profile → “Delete age &amp;
        wellbeing answers” without deleting your account or losing Prism’s
        core features.
      </p>

      <h3>Stopping Apple Health access</h3>
      <p>
        Revoking a HealthKit read permission stops new samples for that type
        from reaching Prism. iOS does not tell Prism which read permissions
        were refused or withdrawn, so other authorised types continue and
        Prism shows a limited-data message after 48 hours without new
        samples. Revocation does not itself delete information already held
        by Prism; previously uploaded daily aggregates remain until you use
        the withdrawal, deletion or contact routes above. Prism never writes
        to Apple Health.
      </p>

      <h3>Deleting your account</h3>
      <p>
        You can request account deletion in Prism using “Delete my account”,
        or email us if you cannot access your account. Account deletion
        removes the main account, profile, daily health readings, check-ins,
        lifestyle records, subscription record, avatar, notification
        registration and PostHog person/events, and clears the app’s account
        data. Apple subscription and transaction history remain with Apple
        and require separate Apple action.
      </p>
      <p>
        Deleted information may remain temporarily in rolling database
        backups for up to seven days, where immediate removal is not
        technically feasible. Backup copies are not used for ordinary
        product purposes. Deletions must be reapplied before data restored
        from an earlier backup is made available, subject to any limited
        legal retention requirement.
      </p>
      <p>
        Applicable legal deadlines still apply; see the Washington Consumer
        Health Data Privacy Policy and the Nevada consumer health data
        section below.
      </p>

      <h3>Cancelling, uninstalling and Apple records</h3>
      <p>
        Cancelling renewal leaves paid access active until the current
        period ends and does not delete data. When paid access expires, the
        account and history remain and can be restored on resubscription
        while retained under section 10.1. Uninstalling removes app data from
        the device but does not delete the Prism account, server data or
        Apple subscription. Deleting the Prism account is a separate action
        and does not cancel the Apple subscription; manage renewal and
        cancellation through Apple’s subscription controls.
      </p>
      <p>
        Deleting the Prism account does not delete the original measurements
        supplied by other apps or devices in Apple Health, or Apple’s own
        billing records. Prism requests read access only and has never
        written to Apple Health. You manage those source measurements and
        Apple records through Apple and the relevant originating service.
      </p>

      <h2>A planned optional feature: learning from groups</h2>
      <p>
        Group-based insights using other Prism users’ health data are not
        active at launch.
      </p>
      <p>
        We plan to offer an optional feature that looks for patterns across
        participating users’ age ranges, initial wellbeing answers,
        supplement and lifestyle records, selected goals, check-ins and
        health-metric changes. For example, it could compare
        supplement-related progress among users with similar goals and age
        ranges. Your initial wellbeing answer describes how you felt when
        you completed onboarding; it is not treated as an up-to-date
        assessment of your wellbeing.
      </p>
      <p>
        Before using your information for this feature, we will explain its
        operation and ask for a separate, optional opt-in. That opt-in will
        explain that it covers your existing Prism history as well as
        information recorded afterwards. Your earlier history will not be
        used for this purpose unless you agree. Declining will not prevent
        you from using Prism’s individual tracking features.
      </p>
      <p>
        The feature is intended to show group findings, rather than another
        person’s identifiable health history. Before activation, we will
        explain the data included, processing and recipients, safeguards
        against identifying individuals, retention, and how to withdraw.
        This advance description does not activate the feature or count as
        your consent.
      </p>
      <p>
        If anonymous group statistics have already been produced after a
        valid opt-in, it may be impossible to identify and remove one
        person’s contribution from those statistics. We will explain that at
        opt-in. Data that can still be linked to you remains protected as
        personal information; removing your name alone does not make it
        anonymous.
      </p>

      <h2>Your rights and how to use them</h2>

      <h3>Making a request and exercising your rights</h3>
      <p>
        Contact <a href="mailto:hello@prismhealthco.com">hello@prismhealthco.com</a>{" "}
        to make a request. Tell us what you would like us to do and, where
        possible, use the email associated with your account. We may request
        proportionate information to verify your identity or an agent’s
        authority. Do not send passwords or payment-card details. Data-copy
        requests are handled through this contact route; an in-app download
        feature is not offered at launch.
      </p>
      <p>For information covered by UK or EU GDPR, you can:</p>
      <ul>
        <li>Ask whether we hold information about you and obtain access and a copy.</li>
        <li>Ask us to correct inaccurate information or complete incomplete information.</li>
        <li>Request deletion, or restriction of use in the circumstances provided by law.</li>
        <li>
          Receive qualifying information in a structured, commonly used,
          machine-readable format and ask for transfer to another controller
          where feasible.
        </li>
        <li>
          Object to processing based on legitimate interests, for reasons
          relating to your situation, and to direct marketing at any time.
        </li>
        <li>Withdraw consent where we rely on it.</li>
      </ul>
      <p>
        These rights have conditions and exceptions. We will explain any
        refusal and your options. Requests are normally free. We respond
        without undue delay and ordinarily within one month for GDPR
        requests, subject to the applicable rules on verification, permitted
        pauses and extensions. If more time is lawfully needed, we will
        explain why.
      </p>

      <h3>Complaints</h3>
      <p>
        We acknowledge privacy complaints within 30 days, investigate
        without undue delay, keep you informed and communicate the outcome.
        You can complain to us using the same contact details. You can also
        complain to the UK Information Commissioner’s Office. In the EEA, you
        can complain to the supervisory authority in your habitual
        residence, place of work or the place of an alleged infringement; the
        EDPB’s authority directory lists contacts. You do not need our
        permission or have to exhaust our complaints process first.
      </p>

      <h3>United States and other locations</h3>
      <p>
        Additional rights depend on the laws that apply to you and Prism.
        These can include access, correction, deletion, portability,
        information about recipients, consent withdrawal, and an appeal
        against refusal. You can use the same email route to request or
        appeal a decision; putting “Privacy appeal” in the subject helps us
        identify it, but is not required. We will explain the decision and
        any right to complain to a regulator. We do not unlawfully
        discriminate against you for exercising privacy rights.
      </p>
      <p>
        We do not sell personal information or use it for targeted
        advertising. A separate{" "}
        <a href="/consumer-health-privacy">
          Washington Consumer Health Data Privacy Policy
        </a>{" "}
        describes the additional consumer-health-data rights that apply in
        Washington. Nevada consumer health data disclosures are included
        below. This notice does not reduce rights you have under another
        applicable law.
      </p>

      <h2>Nevada consumer health data</h2>
      <p className="text-sm" style={{ color: "rgba(26,26,24,0.6)" }}>
        Effective date: 16 October 2026
      </p>

      <h3>Categories, sources, purposes and processing</h3>
      <p>
        For Nevada’s consumer health data law, Prism collects the
        health-related information you provide (including goals,
        supplements, lifestyle changes, supplement start and stop records,
        progress check-ins, age range, initial wellbeing answers and health
        information you choose to include in support messages); the Apple
        Health information you authorise Prism to read; health-related
        results Prism derives from those inputs; and the account or session
        identifiers needed to connect that information to your Prism
        service. The sources are you, Apple Health when you grant
        permission, and Prism’s calculations.
      </p>
      <p>
        Prism uses and processes this information to provide the service you
        request: to create and maintain your plan, calculate baselines,
        averages and trends, show progress stages and charts, provide
        personal insights and check-ins, and respond to support requests.
        The relevant processing and service-provider roles are described in
        the sections above.
      </p>

      <h3>Sharing, third parties and affiliates</h3>
      <p>
        When you choose to share a Prism progress image, the health
        information visible in that image is shared with the person, app or
        service you select through the iOS share sheet. Consumer health data
        may also be disclosed to courts or authorities where applicable law
        permits or requires it, or to a successor in a qualifying business
        transaction. Prism does not share consumer health data with
        affiliates at launch and does not sell consumer health data for
        money or other valuable consideration. Service providers processing
        information on Prism’s behalf are described in the provider section
        above.
      </p>

      <h3>Nevada requests and corrections</h3>
      <p>
        Email <a href="mailto:hello@prismhealthco.com">hello@prismhealthco.com</a>{" "}
        to ask whether Prism is collecting, sharing or selling your consumer
        health data; request a list of third parties with whom it has been
        shared or sold; ask Prism to stop future collection, sharing or
        selling; request deletion; or ask to review or correct consumer
        health data we hold about you. You can also use “Delete my account”
        in Prism, remove saved age and wellbeing answers through Profile →
        “Delete age &amp; wellbeing answers”, and stop future Apple Health
        access through your iPhone settings.
      </p>
      <p>
        We may take reasonable steps to authenticate a request. We respond
        to authenticated requests within the periods required by Nevada law.
        Deletion requests are ordinarily completed within 30 days after
        authentication. Consumer health data stored on archived or backup
        systems may remain for the period Nevada law permits while those
        systems are maintained or restored. If we refuse a request, you may
        appeal by emailing{" "}
        <a href="mailto:hello@prismhealthco.com">hello@prismhealthco.com</a>;
        if we deny the appeal, we will provide the Nevada Attorney General
        contact information.
      </p>

      <h3>Changes to these Nevada disclosures</h3>
      <p>
        If Prism materially changes these consumer health data practices, we
        will update this notice and its effective date and provide any
        notice or consent required by Nevada law before the changed
        processing begins.
      </p>

      <h3>Third-party collection across other sites or services</h3>
      <p>
        Prism does not permit third parties to collect consumer health data
        over time and across different unrelated websites or online services
        when you use Prism.
      </p>

      <h3>Age eligibility</h3>
      <p>
        Prism is for people aged 16 and over. It is not intended for
        children under 16. If we learn that an under-16 user has provided
        personal information contrary to this requirement, we will take
        steps to stop the use and delete the information, subject to any
        specific legal obligation. Contact us if you believe this has
        happened.
      </p>
      <p>
        Where local law requires an additional permission or a higher age
        for a particular feature, that requirement applies.
      </p>

      <h2>Changes to this notice</h2>
      <p>
        We will update this notice when our practices change and show the
        revised date above. For a material change affecting how we use your
        information, we will provide a clear notice in the app or by email
        before the change takes effect, where required.
      </p>
      <p>
        If a change requires a new consent, we will ask before that new
        processing begins. Continuing to use Prism or reading an updated
        notice does not replace an explicit consent that the law requires.
      </p>
    </LegalPage>
  );
}
