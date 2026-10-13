import { PageShell } from '../components/layout/PageShell';
import { PageContainer } from '../components/layout/PageContainer';
import { CaseChapter } from '../components/case-study/CaseChapter';
import { CaseImage, CaseVideo } from '../components/case-study/CaseMedia';
import { CaseNavigation } from '../components/case-study/CaseNavigation';
import '../styles/case-study.css';
import '../styles/allianz-case-study.css';

const root = '/images/allianz/';
const chapters = [
  ['overview', 'Overview'], ['problem', 'The system problem'], ['onboarding', 'Onboarding pattern'],
  ['tables', 'Hierarchical table pattern'], ['constraints', 'Designing within constraints'],
  ['outcome', 'Outcome'], ['reflection', 'Reflection'],
].map(([id, title], index) => ({ id, title, number: String(index).padStart(2, '0') }));
const intents = [
  ['Welcome', 'Optional introduction'], ['Orient', 'Help users understand context'],
  ['Notify', 'Make relevant change visible'], ['Explain', 'Provide contextual guidance'],
  ['Take action', 'Prompt an important next step'],
];
const attention = [
  ['Welcome', 'Optional tour'], ['Notify', 'Badge or banner'],
  ['Explain', 'Contextual guidance / popover'], ['Take action', 'Stronger CTA prompt or modal'],
];
function PatternMap({ rows }: { rows: string[][] }) {
  return <dl className="allianz-pattern-map">{rows.map(([label, detail]) => <div key={label}><dt>{label}</dt><dd>{detail}</dd></div>)}</dl>;
}
export function AllianzPage() {
  return <div className="reckitt-case allianz-case"><PageShell><PageContainer>
    <header className="case-hero">
      <span className="case-hero-orbit" aria-hidden="true" /><span className="case-hero-square" aria-hidden="true" />
      <p className="number-label case-label">Allianz Technology · Design Systems</p>
      <h1>Designing scalable UX patterns for enterprise systems</h1>
      <p className="case-subtitle">Creating reusable interaction patterns for onboarding and hierarchical data across complex enterprise applications.</p>
      <dl className="case-metadata">
        <div><dt className="number-label">Company</dt><dd>Allianz Technology</dd></div>
        <div><dt className="number-label">Role</dt><dd>UX/UI Designer</dd></div>
        <div><dt className="number-label">Focus</dt><dd>Design Systems · Interaction Design<br />Enterprise UX · Documentation</dd></div>
      </dl>
    </header>
    <div className="case-body"><CaseNavigation items={chapters} caseNumber="05" /><article className="case-article" aria-label="Allianz Design System case study">
      <CaseChapter id="overview" number="00" label="Overview" title={<>Two problems.<br />One system-level challenge.</>}>
        <div className="case-reading case-prose"><p>At Allianz, I worked on recurring UX problems across enterprise applications: helping users understand new features without interrupting their work, and making hierarchical relationships clear inside dense tables.</p><p>The goal was to define reusable interaction patterns that teams could understand, document, and adopt through the design system.</p></div>
      </CaseChapter>
      <CaseChapter id="problem" number="01" label="The system problem" title="Complex systems were being solved inconsistently.">
        <div className="case-reading case-prose"><p>Applications were evolving through new functionality, navigation changes, and emerging AI-related features. Users did not always notice or understand these changes, while teams handled onboarding differently across applications.</p><p>Enterprise products also contained nested tasks, folders, files, and grouped records. Flat structures made those relationships harder to understand when scanning large datasets.</p><blockquote>How can complex system behaviour become clear, reusable interaction logic?</blockquote></div>
        <div className="allianz-story-unit case-reading"><h3>A design-system pattern should guide decisions, not just standardize components.</h3><div className="case-prose"><p>The work started with user needs and interaction logic before choosing a component.</p><p>For onboarding: what does the user need at this moment?</p><p>For tables: how can hierarchy remain understandable without sacrificing scanability and alignment?</p></div></div>
      </CaseChapter>
      <CaseChapter id="onboarding" number="02" label="Onboarding pattern" title={<>Define the intent<br />before choosing the component.</>}>
        <div className="case-reading case-prose"><p>I benchmarked onboarding approaches and scenarios across applications. Instead of organizing the work around UI components, I organized it around user intent.</p></div>
        <PatternMap rows={intents} />
        <CaseImage root={root} file="Frame 15.png" width={3320} height={1648} alt="Exploration of different onboarding treatments: optional welcome tour, action prompt, contextual explanation, and notification." caption="Different onboarding intents required different levels of user attention and different interaction patterns." />
        <div className="allianz-story-unit allianz-implementation">
          <div className="case-reading case-prose"><p>Different intents required different levels of attention—not every change deserved the same level of interruption.</p></div>
          <h3 className="allianz-statement">Not every feature<br />needs a popover.</h3>
          <div className="case-reading case-prose"><p>The pattern helped distinguish between moments that required a lightweight notification, contextual explanation, or stronger action.</p></div>
          <PatternMap rows={attention} />
        </div>
        <div className="allianz-story-unit"><h3>Welcome</h3>
          <div className="case-reading case-prose"><p>Optional introduction without blocking the workflow.</p><p>A welcome experience could introduce a new feature or product while still allowing users to skip and continue working.</p></div>
          <ol className="case-principles">{['Keep onboarding optional and non-disruptive.', 'Give users control to skip.', 'Place guidance in context.', 'Avoid overwhelming the user’s workflow.'].map((text, index) => <li key={text}><span className="number-label">{String(index + 1).padStart(2, '0')}</span>{text}</li>)}</ol>
          <CaseImage root={root} file="Welcome 1.png" width={677} height={482} alt="Welcome onboarding dialog inside an Allianz application, with a close control and two action choices." caption="An optional introduction that leaves the user in control." />
        </div>
        <div className="allianz-story-unit"><div className="case-reading"><h3>From pattern<br />to product context</h3><div className="case-prose"><p>The same logic could then be applied within existing enterprise applications rather than remaining an isolated design-system example.</p></div></div>
          <CaseImage root={root} file="Example 1.png" width={677} height={444} alt="Contextual onboarding popover within an Allianz enterprise location dashboard, positioned beside the relevant task." caption="Contextual guidance applied within an existing enterprise workflow." />
        </div>
        <div className="allianz-story-unit"><div className="case-reading"><h3>Designing for the future,<br />without blocking the present.</h3><div className="case-prose"><p>Most applications still used NDBX. I used its existing popover as a lightweight interim solution rather than waiting for the upcoming A1 design system.</p></div></div>
          <dl className="allianz-tradeoff"><div><dt className="number-label">Ideal</dt><dd>Broader onboarding framework intended for the upcoming A1 design system.</dd></div><div><dt className="number-label">Immediate</dt><dd>Use the existing NDBX popover component to solve the current onboarding need.</dd></div></dl>
          <CaseImage root={root} file="Onboarding 1.png" width={3582} height={1326} alt="Comparison of proposed onboarding patterns, existing popover components, and a possible alternative, with design and implementation pros and cons." caption="Proposed patterns, existing components, and a practical alternative for the current system." />
        </div>
        <div className="allianz-story-unit"><div className="case-reading"><h3>How the pattern behaves<br />in context</h3><div className="case-prose"><p>The full framework was not implemented immediately. The existing NDBX popover addressed the current onboarding need without blocking development, with configurable placement and actions demonstrated here in Figma.</p></div></div>
          <div className="case-media allianz-video"><CaseVideo root={root} file="Onboarding popover.mp4" poster="onboarding-poster.jpg" playbackGroup="allianz" caption="The teaching popover’s configurable behaviour, demonstrated in Figma." /></div>
        </div>
      </CaseChapter>
      <CaseChapter id="tables" number="03" label="Hierarchical table pattern" title={<>Make hierarchy visible<br />without breaking the table.</>}>
        <div className="case-reading case-prose"><p>Nested tasks, folders, files, and grouped records needed clear parent-child relationships while preserving the alignment and scanability of a familiar enterprise table.</p></div>
        <div className="allianz-story-unit"><h3>A predictable indentation system.</h3>
          <ol className="allianz-indent-spec" aria-label="Hierarchy indentation specification">{[0, 24, 48, 72].map((indent, index) => <li key={indent}><span>Level {index + 1}</span><span>{indent}px</span></li>)}</ol>
          <CaseImage root={root} file="specs 1.png" width={3606} height={1538} alt="Hierarchical table specification export with highlighted indentation and row spacing." caption="Documenting the spacing and hierarchy rules behind the component." />
        </div>
        <div className="allianz-story-unit">
          <PatternMap rows={[
            ['Chevrons', 'Indicate expandable rows'], ['Column alignment', 'Remains stable'], ['Spacing', 'Follows consistent rules'],
          ]} />
          <CaseImage root={root} file="GrandChild_3 1.png" width={1512} height={836} alt="Hierarchical table showing indented child rows, expansion chevrons, and stable column alignment." caption="Hierarchy in the first column; consistent alignment across the table." />
          <CaseImage root={root} file="Group 83.png" width={3518} height={1280} alt="Reusable hierarchical table component showing row variants and the assembled table." caption="Reusable row structures and an assembled hierarchical table." />
        </div>
        <div className="allianz-story-unit"><div className="case-reading"><h3>From interface solution to documented system pattern.</h3><div className="case-prose"><p>The reusable component and its documentation made the hierarchy logic available to other teams. The recorded guidance distinguishes the component’s supported single expansion level from deeper hierarchy requirements.</p></div></div>
          <div className="case-media allianz-video"><CaseVideo root={root} file="Documentation.mp4" poster="documentation-poster.jpg" playbackGroup="allianz" loop={false} caption="Documented hierarchy guidance prepares the pattern for reuse." /></div>


        </div>
      </CaseChapter>
      <CaseChapter id="constraints" number="04" label="Designing within constraints" title={<>Reusable does not mean<br />one solution for every context.</>}>
        <div className="case-reading case-prose"><p>Both patterns balanced consistency with flexibility. Onboarding needed different levels of attention; tables needed predictable hierarchy without disrupting familiar behaviour.</p><p>The design-system value came from documenting the reasoning behind the pattern, not only the final component.</p></div>
      </CaseChapter>
      <CaseChapter id="outcome" number="05" label="Outcome" title="From individual solutions to reusable system patterns.">
        <div className="case-reading case-prose"><p>Designers working on the upcoming Allianz design system confirmed that both patterns were adopted. Onboarding established when and how guidance should appear; the table defined a consistent interaction and layout model for nested data.</p><p>The patterns were documented for reuse beyond the original work. Formal usage data and post-adoption user feedback are not yet available.</p></div>
        <ol className="allianz-outcome-flow">{['Individual solution', 'Reusable logic', 'Documented pattern', 'Upcoming design system'].map((step, i) => <li key={step}>{i > 0 && <span aria-hidden="true">↓</span>}{step}</li>)}</ol>
      </CaseChapter>
      <CaseChapter id="reflection" number="06" label="Reflection" title={<>Design systems are not just reusable components.<br />They are reusable decisions.</>}>
        <div className="case-reading case-prose"><p>For onboarding, that meant defining intent before choosing a component. For tables, it meant establishing predictable hierarchy rules before documenting the implementation.</p><p>Across both patterns, the goal was to translate complex system behaviour into interaction logic that users could understand and product teams could reuse.</p></div>
      </CaseChapter>
      <div className="case-next"><a className="arrow-link" href="/#work">Back to selected work <span aria-hidden="true">↗</span></a></div>
    </article></div>
  </PageContainer></PageShell></div>;
}
