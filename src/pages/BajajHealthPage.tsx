import { PageShell } from '../components/layout/PageShell';
import { PageContainer } from '../components/layout/PageContainer';
import { CaseChapter } from '../components/case-study/CaseChapter';
import { CaseImage, CaseVideo } from '../components/case-study/CaseMedia';
import { CaseNavigation } from '../components/case-study/CaseNavigation';
import '../styles/case-study.css';
import '../styles/bajaj-case-study.css';
const root = '/images/bajaj-health/';
const chapters = ['Overview', 'Challenge', 'Research', 'Design decisions', 'Final experience', 'Outcome', 'Reflection'].map((title, i) => ({title, number: `0${i}`, id: ['overview','challenge','research','decisions','final-experience','outcome','reflection'][i]}));
const metadata = [
  ['My role', 'Sole hands-on UX/UI Designer'],
  ['Responsibilities', 'User Research · Information Architecture · Interaction Design\nVisual Design · Usability Testing · Developer Handoff'],
  ['Team', 'Design Manager · Product Manager · Development Team'],
  ['Duration', '10 months'], ['Product', 'Bajaj Health Mobile App'],
];
const decisions = [
  {title:'Explain tele-consultation without blocking access.', copy:'Local-language content and visual guidance introduced tele-consultation to unfamiliar users. A visible skip option let confident users move ahead without making guidance a gate to care.', file:'Onboarding.png', width:2262, height:1026, alt:'Bajaj Health welcome screen and local-language selection screen.', caption:'Explain the service while keeping a clear route into care.'},
  {title:'Make the next healthcare action obvious.', copy:'Find Doctor and Consult Now gave the home experience two clear starting points. Supporting health content remained available without competing with the route into a consultation.'},
  {title:'Guide users from symptoms to a suitable doctor.', copy:'Categories, symptom summaries, and language preferences guided users from a health concern to suitable consultation options. This supported doctor discovery, not medical diagnosis.', file:'Find the doctor.png', width:1215, height:672, alt:'Health-category search, a symptom information summary, and doctor listings with language preferences and booking actions.', caption:'Connecting health concerns to consultation options and language preferences.'},
  {title:'Use transparency as part of the interaction.', copy:'Doctor information and patient reviews helped users evaluate a consultation. Language and availability stayed close to the booking action, so users could make a considered choice.', file:'Doc info page.png', width:1192, height:511, alt:'Doctor profile and time-slot selection screens showing reviews, consultation information, and appointment availability.', caption:'Doctor information and appointment options support a considered choice.'},
  {title:'Create a deliberate pause before payment.', copy:'A highlighted summary let users verify the doctor, consultation, appointment, and payment before committing. Bajaj Health Card information stayed at the same decision point.', file:'FInal booking.png', width:1080, height:511, alt:'Booking summary and consultation confirmation screens bringing appointment and payment information together before payment.', caption:'Reassurance and confirmation before payment.'},
];
const outcomes = [
  ['4 in 5', 'Participants reported feeling more certain about their consultation choice.'],
  ['Fewer', 'Navigation errors during booking.'],
  ['Less', 'Backtracking through the booking process.'],
  ['Clear and reliable', 'User feedback on finding local doctors and using the Bajaj Health Card.'],
];
export function BajajHealthPage() {
  return <div className="reckitt-case bajaj-case"><PageShell><PageContainer>
    <header className="case-hero">
      <span className="case-hero-orbit" aria-hidden="true" /><span className="case-hero-square" aria-hidden="true" />
      <p className="number-label case-label">CASE STUDY — 03</p>
      <h1>Bajaj Health:<br />Designing Trust in Digital Healthcare</h1>
      <p className="case-subtitle">Making tele-consultation understandable for first-time and local-language users without turning guidance into another barrier.</p>
      <ul className="case-tags number-label"><li>Healthcare UX</li><li>Mobile Product Design</li><li>User Trust</li></ul>
      <CaseImage root={root} file="Cover.png" alt="Bajaj Health mobile app screens presenting the tele-consultation experience." caption="Bajaj Health — designing trust in digital healthcare" width={1876} height={1092} eager />
      <dl className="case-metadata">{metadata.map(([label,value])=><div key={label}><dt className="number-label">{label}</dt><dd>{value}</dd></div>)}</dl>
    </header>
    <div className="case-body"><CaseNavigation items={chapters} caseNumber="03" /><article className="case-article" aria-label="Bajaj Health case study">
      <CaseChapter id="overview" number="00" label="Overview" title="Designing confidence into digital care.">
        <div className="case-reading case-prose"><p>I was the sole hands-on designer, from user interviews and competitive analysis through research synthesis, information architecture, booking flows, high-fidelity interfaces, usability testing, and developer handoff.</p><p>The design manager provided direction and review, the product manager owned requirements and prioritization, and the development team owned implementation.</p></div>
      </CaseChapter>
      <CaseChapter id="challenge" number="01" label="Challenge" title="Access was only part of the problem.">
        <div className="case-reading case-prose"><p>During the pandemic, tele-consultation gave people a way to reach doctors without relying on nearby healthcare infrastructure. But availability did not automatically create confidence.</p><p>First-time users faced unfamiliar decisions: understanding the service, finding a suitable doctor, judging trustworthiness, choosing an appointment, and committing to payment. Language differences, connectivity constraints, and uncertainty increased hesitation.</p><blockquote>The problem wasn’t simply making booking shorter. It was giving users enough explanation and transparency to trust the decision they were making.</blockquote></div>
      </CaseChapter>
      <CaseChapter id="research" number="02" label="Research" title="I needed to understand where confidence broke down.">
        <div className="case-reading case-prose"><p>I used 1:1 user interviews, affinity mapping, information architecture exploration, heuristic task analysis, and competitive review to understand the journey.</p></div>
        <CaseImage root={root} file="Secondary research.png" alt="Research artifact documenting considerations for the digital-health experience." caption="Research planning, user-review synthesis, and competitive analysis" width={2230} height={1142} />
        <div className="case-reading case-prose"><p>Uncertainty was not concentrated in one screen. It appeared throughout the journey—from understanding the service to confirming the booking.</p></div>
        <CaseImage root={root} file="task flow 2.png" alt="Task flow mapping the steps through the healthcare booking journey." caption="Tracing the decisions between access and a confirmed consultation" width={2512} height={650} />
        <CaseImage root={root} file="Group 12951 3.png" alt="Information architecture showing screen content from the app start and home screen through doctor selection, checkout, and confirmation." caption="Screen-level information architecture supporting the consultation flow" width={1230} height={338} />
      </CaseChapter>
      <CaseChapter id="decisions" number="03" label="Design judgment" title="Confidence had to be designed into the journey.">
        <div className="case-reading case-prose"><p>I treated trust as a sequence of interaction decisions rather than a visual styling problem.</p><ol className="case-principles">{['Explain without blocking','Make the next action obvious','Guide users to a suitable doctor','Make trust visible','Reassure before commitment'].map((text,i)=><li key={text}><span className="number-label">{`0${i+1}`}</span>{text}</li>)}</ol></div>
        {decisions.map((decision,i)=><CaseChapter key={decision.title} number={`03.${i+1}`} label="Design decision" decision title={decision.title}>
          <div className="case-reading case-prose"><p>{decision.copy}</p></div>
          {decision.file && <CaseImage root={root} file={decision.file} alt={decision.alt!} caption={decision.caption!} width={decision.width!} height={decision.height!} />}
          {i === 0 && <div className="bajaj-supporting-media">
            <CaseImage root={root} file="Login.png" alt="Consultation introduction, mobile-number or Facebook sign-in, and phone entry with an optional WhatsApp updates preference." caption="Familiar sign-in choices and optional WhatsApp updates." width={1968} height={1312} />
          </div>}
        </CaseChapter>)}
      </CaseChapter>
      <CaseChapter id="final-experience" number="04" label="Final experience" title="From uncertainty to a booked consultation.">
        <div className="case-reading case-prose"><p>Follow the journey from understanding the service to a confirmed consultation.</p></div>
        <div className="case-media bajaj-prototype"><CaseVideo root={root} file="ScreenRecording_10-06-2026 15.MP4" poster="prototype-poster.jpg" caption="End-to-end prototype walkthrough of the tele-consultation journey." /></div>
      </CaseChapter>
      <CaseChapter id="outcome" number="05" label="Outcome" title="More confidence with less hesitation.">
        <div className="case-reading case-prose"><p>Usability-testing findings and qualitative user feedback. Faster completion was also indicated internally, but no verified percentage is available.</p></div>
        <dl className="bajaj-outcomes">{outcomes.map(([value,copy])=><div key={value}><dt>{value}</dt><dd>{copy}</dd></div>)}</dl>
        <div className="case-reading case-prose"><blockquote>“Now I can use my health card and book doctors from my own area easily—everything feels clear and reliable.”</blockquote></div>
      </CaseChapter>
      <CaseChapter id="reflection" number="06" label="Reflection" title="Clarity was part of whether users felt able to proceed.">
        <div className="case-reading case-prose"><p>Designing for first-time digital-health users required more than reducing screens. The key question was when explanation increased confidence and when it became friction: introduce the unfamiliar, let confident users move ahead, reveal relevant information, and reassure before commitment.</p><p>In a healthcare journey, clarity was not simply a usability improvement—it was part of whether users felt able to proceed at all.</p></div>
      </CaseChapter>
      <div className="case-next"><p className="number-label">Next project →</p><a className="arrow-link" href="/#hyundai">Hyundai Motor Europe <span aria-hidden="true">↗</span></a><p>EV Route Planning</p><p className="number-label muted">Password protected / NDA</p></div>
    </article></div>
  </PageContainer></PageShell></div>;
}
