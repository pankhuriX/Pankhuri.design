import { CaseIntro } from '../components/case-study/CaseIntro';
import { CaseImage } from '../components/case-study/CaseMedia';
import { BrandLogo } from '../components/ui/BrandLogo';
import { PageShell } from '../components/layout/PageShell';
import { PageContainer } from '../components/layout/PageContainer';
import { CaseChapter } from '../components/case-study/CaseChapter';
import { CaseNavigation } from '../components/case-study/CaseNavigation';
import { ExpandableCaseImage } from '../components/case-study/ExpandableCaseImage';
import '../styles/case-study.css';
import '../styles/case-editorial.css';
import '../styles/hyundai-case-study.css';

const root = '/images/hyundai/';
const chapters = [
  ['overview', 'Overview'], ['starting-point', 'Starting point'], ['field-research', 'Why field research'],
  ['benchmark', 'Benchmark setup'], ['synthesis', 'Synthesis'], ['insights', 'Research insights'],
  ['proposals', 'Design proposals'], ['outcome', 'Outcome'], ['reflection', 'Reflection'],
].map(([id, title], index) => ({ id, title, number: String(index).padStart(2, '0') }));
const insights = [
  { title: 'Charging information supports decisions, not just actions.', finding: 'Participants needed clearer guidance throughout charging before they felt confident continuing the journey.', why: 'Charging is a decision-making moment that depends on timely, understandable information.', implication: 'Help drivers decide when to stop, continue, or reconsider the route.' },
  { title: 'Context at the right moment reduces uncertainty.', finding: 'Participants benefited from relevant context around charging locations and route decisions.', why: 'The right information at the right moment reduces uncertainty and cognitive effort.', implication: 'Explain why a charging or route recommendation makes sense.' },
  { title: 'Battery predictions directly influence trust.', finding: 'Confidence in predicted battery level affected journey planning and charging strategy.', why: 'A prediction becomes useful when drivers trust it enough to act on it.', implication: 'Make predicted state of charge transparent and understandable.' },
  { title: 'Real journeys need flexible routes.', finding: 'Participants expected route planning to adapt easily to changing conditions.', why: 'Long-distance travel is dynamic.', implication: 'Make route modification and charger replacement part of the normal journey.' },
];

export function HyundaiPage() {
  return <div className="reckitt-case case-editorial hyundai-case"><PageShell><PageContainer>
    <CaseIntro
      label="HYUNDAI MOTOR EUROPE — EV ROUTE PLANNING"
      heading="Making long-distance electric driving easier to plan"
      subcaption="Using usability studies to improve charging stops, battery predictions, and route planning."
      keywords="USER RESEARCH · HMI · PROTOTYPING · EV"
      cover={<CaseImage root={root} file="Cover.JPG" alt="In-car navigation display showing route guidance during an urban driving study." caption="Hyundai" width={5712} height={4284} eager />}
      whiteCover
    >
      <dl className="case-metadata">
        <div><dt className="number-label">Company</dt><dd>Hyundai Motor Europe Technical Center</dd></div>
        <div><dt className="number-label">Role</dt><dd>UX/UI Designer Intern</dd></div>
        <div><dt className="number-label">Timeline</dt><dd>May 2026 — 2026</dd></div>
      </dl>
    </CaseIntro>
    <div className="case-body"><CaseNavigation items={chapters} caseNumber="04" /><article className="case-article" aria-label="Hyundai EV route planning case study">
      <CaseChapter id="overview" number="00" label="Overview" title={<>Long-distance EV travel<br />is a continuous decision-making experience.</>}>
        <div className="case-reading case-prose"><p>Drivers make route decisions while battery level, charging stops, traffic, and predictions are constantly changing. My work focused on where drivers lose confidence and how clearer route-planning and charging interactions could support them.</p><p>I planned the benchmark study, developed the research materials, facilitated field evaluations, synthesized the findings, and translated the research into design recommendations and Figma proposals.</p></div>
      </CaseChapter>
      <CaseChapter id="starting-point" number="01" label="Starting point" title={<>A navigation problem<br />revealed a bigger research question.</>}>
        <div className="hyundai-research-pair"><div className="case-prose"><p>The work began with a task-based lab study of Hyundai’s next-generation infotainment system. Participants struggled to understand the global navigation bar and hesitated when switching between key functions.</p><p>I explored a revised navigation concept to improve discoverability and reduce ambiguity.</p></div><ExpandableCaseImage root={root} file="IMG_1457 1.png" width={958} height={794} alt="CONNECT usability questionnaire covering display layout, signal operation, and global navigation." caption="CONNECT — task-based usability research" /></div>
        <ExpandableCaseImage root={root} file="Group 1 1.png" width={1784} height={420} alt="Annotated navigation proposal distinguishing fixed and configurable controls." caption="CONNECT — revised navigation exploration" />
        <div className="hyundai-story case-reading"><p>But EV route planning changes continuously during the journey.</p><h3>Can a lab session fully reveal how drivers make EV route decisions?</h3></div>
      </CaseChapter>
      <CaseChapter id="field-research" number="02" label="Why field research" title={<>Some usability problems<br />need to be studied where they happen.</>}>
        <div className="hyundai-research-pair"><div className="case-prose"><p>Battery state, predicted state of charge (SoC), charger availability, route changes, and border crossings all influence driver confidence in real driving conditions.</p><p>A static lab session could reveal interaction problems, but could not reproduce the uncertainty and changing conditions of a long-distance EV journey.</p></div><ExpandableCaseImage root={root} file="image 10.png" width={1606} height={2160} alt="Electric vehicle connected to a charging point in an indoor parking area." caption="Charging in context — decisions extend beyond the interface." /></div><div className="hyundai-story case-reading"><h3>Which interaction patterns, information structures, and charging guidance help drivers make confident decisions?</h3></div>
      </CaseChapter>
      <CaseChapter id="benchmark" number="03" label="Benchmark setup" title={<>Turning a 1,100 km road trip<br />into a comparable research study.</>}>
        <div className="case-reading case-prose"><p>I planned a cross-border route through representative European driving conditions. Participants followed the same route, scenarios, documentation process, and evaluation criteria.</p></div>
        <ExpandableCaseImage root={root} file="Frame 1707487086.png" width={1158} height={458} alt="Maps of the benchmark routes between the Frankfurt region and the Alps." caption="1,100 km cross-border benchmark route designed to expose participants to realistic long-distance EV scenarios." />
        <dl className="hyundai-setup"><div><dt>Participants</dt><dd>11 participants from Hyundai and Kia, with mixed EV-driving experience and cross-functional backgrounds.</dd></div><div><dt>Vehicles</dt><dd>Hyundai prototype, Tesla Model Y, BMW iX2, and Renault R5.</dd></div><div><dt>Recording</dt><dd>In-vehicle GoPro cameras captured interactions and navigation behaviour for review.</dd></div></dl>
        <div className="hyundai-story"><h3>Natural enough to be real.<br />Structured enough to compare.</h3><div className="case-reading case-prose"><p>The setup preserved real driving behaviour while keeping observations comparable. Structured sheets recorded predicted versus actual SoC, charging events, navigation behaviour, and research notes alongside GoPro recordings.</p></div><ExpandableCaseImage root={root} file="Frame 1707487087.png" width={1100} height={390} alt="Field-study templates for battery predictions, charging stops, and route-planning observations." caption="Shared documentation made observations comparable across vehicles." /></div>
      </CaseChapter>
      <CaseChapter id="synthesis" number="04" label="Synthesis" title={<>Make synthesis<br />part of the study.</>}>
        <div className="case-reading case-prose"><p>After each drive, participants shared their top three pain points and top three positive experiences. I facilitated affinity mapping to cluster observations into recurring themes.</p><p>The purpose was to uncover transferable UX patterns that could inform future Hyundai route-planning experiences, rather than rank competitors.</p></div>
        <ExpandableCaseImage root={root} file="image 9.png" width={1134} height={450} alt="Participants synthesizing research in a workshop with notes and whiteboards." caption="Post-drive synthesis workshop used to surface recurring pain points and positive experiences across participants." />
      </CaseChapter>
      <CaseChapter id="insights" number="05" label="Research insights" title="Information that supports driving decisions.">
        <ol className="hyundai-insights">{insights.map((insight, index) => <li key={insight.title}><span className="number-label">{String(index + 1).padStart(2, '0')}</span><div><h3>{insight.title}</h3><dl className="hyundai-reasoning"><div><dt>Insight</dt><dd>{insight.finding}</dd></div><div><dt>Why it matters</dt><dd>{insight.why}</dd></div><div><dt>Design implication</dt><dd>{insight.implication}</dd></div></dl></div></li>)}</ol>
      </CaseChapter>
      <CaseChapter id="proposals" number="06" label="Design proposals" title={<>The benchmark was useful<br />only if the findings could change the product.</>}>
        <div className="case-reading case-prose"><p>The research was translated into Figma proposals for route planning and charging interactions. These explorations show design direction, not a production rollout.</p></div>
        <div className="hyundai-story"><p className="number-label">Design decision 01 / Route overview</p><h3>Make charging stops easier to assess along the route.</h3>
          <dl className="hyundai-reasoning case-reading"><div><dt>Research signal</dt><dd>Drivers relied on battery predictions and timely charging information to plan their journey with confidence.</dd></div><div><dt>Design response</dt><dd>Bring charging duration, battery estimates, and connector availability together within the route overview, alongside the planned stops.</dd></div></dl>
          <div className="hyundai-comparison"><div><p className="number-label">AS IS</p><ExpandableCaseImage root={root} file="01 As Is.png" width={5120} height={2880} alt="Existing route overview listing planned charging stops and battery estimates beside the map." caption="Existing route overview" /></div><div><p className="number-label">TO BE</p><ExpandableCaseImage root={root} file="02 TO BE.png" width={5120} height={2880} alt="Proposed route overview grouping charging duration and battery estimates with connector availability for each stop." caption="Charging information grouped at each planned stop" /></div></div>
        </div>
        <div className="hyundai-story"><p className="number-label">Design decision 02 / Contextual charger information</p><h3>Give the charging stop useful context.</h3>
          <div className="hyundai-proposal-detail"><dl className="hyundai-reasoning"><div><dt>Research signal</dt><dd>Relevant information around charging locations reduced uncertainty and cognitive effort.</dd></div><div><dt>Design response</dt><dd>The detail proposal brings opening hours, charger availability, recent charging activity, and nearby amenities together before the driver adds a stop.</dd></div></dl><ExpandableCaseImage root={root} file="navi_poi_detail.png" width={1288} height={3722} alt="Charger detail proposal showing location information, connector availability, recent charging activity, peak times, amenities, and Add stop." caption="Charger-detail proposal — context before commitment" /></div>
        </div>
        <div className="hyundai-story"><p className="number-label">Design decision 03 / Start guidance</p><h3>Make the next action clear in the guidance view.</h3>
          <dl className="hyundai-reasoning case-reading"><div><dt>Research signal</dt><dd>Drivers needed clearer context around charging and route decisions.</dd></div><div><dt>Design response</dt><dd>Bring location and connector information into a compact guidance panel with an explicit Add stop action, while keeping the route visible.</dd></div></dl>
          <ExpandableCaseImage root={root} file="06 start guidance.png" width={5120} height={2880} alt="Start-guidance proposal with charging location, grouped connector availability, and Add stop action beside the route map." caption="Decision-relevant information at the point of action. All screen values are illustrative proposal content, not study outcomes." />
        </div>
      </CaseChapter>
      <CaseChapter id="outcome" number="07" label="Outcome" title={<>Evidence that informed<br />future product discussions.</>}>
        <div className="case-reading case-prose"><p>I planned and executed the real-world benchmark with researchers, designers, and engineers, synthesized qualitative observations into UX insights, and translated those insights into recommendations and design proposals for future navigation discussions.</p></div>
        <ol className="hyundai-evidence-chain">{['Lab signal', 'Field evidence', 'Synthesized patterns', 'Design proposals', 'Future product discussions'].map(step => <li key={step}>{step}</li>)}</ol>
      </CaseChapter>
      <CaseChapter id="reflection" number="08" label="Reflection" title={<>The right research method<br />depends on the context of use.</>}>
        <div className="case-reading case-prose"><p>Controlled usability testing revealed navigation issues. Real-world driving exposed a different layer of behaviour: uncertainty, trust, charging decisions, and route adaptation.</p><p>Combining lab studies with field research created a more complete understanding of the experience.</p><p>Benchmarking is most valuable when it uncovers transferable UX patterns — not when it simply ranks products.</p></div>
      </CaseChapter>
      <section className="hyundai-context" aria-labelledby="hyundai-context-title">
        <h2 id="hyundai-context-title" className="number-label">Behind the work</h2>
        <p className="case-reading">From simulator-based evaluations to field research, the work involved close collaboration across design, research, and engineering.</p>
        <div className="hyundai-context-simulator"><ExpandableCaseImage root={root} file="simulator-context.jpg" width={1500} height={2000} alt="In-car simulator with two seats, a large forward display, and a side-mounted control screen in the testing space." caption="Simulator-based evaluation helped test interaction concepts in a more realistic in-car context." /></div>
        <div className="hyundai-context-team"><ExpandableCaseImage root={root} file="team-context.jpg" width={2000} height={1367} alt="Team thank-you print featuring a group pictured beside Hyundai vehicles." caption="Cross-functional collaboration across research, design, and engineering shaped the study and synthesis." /></div>
      </section>
      <section className="hyundai-more" aria-labelledby="hyundai-more-title"><BrandLogo src="/images/homepage/hyundai-logo.png" alt="Hyundai" /><p className="number-label">More from Hyundai</p><h2 id="hyundai-more-title">MORE WORK<br />COMING SOON.</h2><p>Additional Hyundai projects are currently being prepared for the portfolio. Selected work remains under NDA and will be shared where possible.</p></section>
      <div className="case-next"><a className="arrow-link" href="/work/allianz-design-system">Next project — Allianz Design System <span aria-hidden="true">↗</span></a></div>
    </article></div>
  </PageContainer></PageShell></div>;
}
