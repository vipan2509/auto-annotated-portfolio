import { Briefcase } from 'react-feather';
import { ButtonSet, DateEntry, Notes, TimelineEntry } from '../Entry';

export function Year2024() {
    return (
        <>
            <DateEntry title="2025" />
            <TimelineEntry
                title="TMotions Global Limited"
                timestamp="Jun 2019 - Currently Working Here"
                Icon={Briefcase}
                tint="indigo"
            >
                <Notes>
                    <p>
                        Experienced in developing and maintaining scalable, responsive front-end architectures for a
                        wide range of products, including complex enterprise-level government applications.
                    </p>
                    <p>
                        <strong>Specialized in React and Vue.js</strong>, building dynamic, user-centric web
                        applications with clean, maintainable code.
                    </p>
                    <p>
                        <strong>HTML Email Expert</strong> with deep experience in crafting responsive, cross-platform
                        emails compatible with all major clients, including Outlook. Emails are rigorously tested using
                        Litmus and Email on Acid to ensure pixel-perfect rendering across devices.
                    </p>
                    <p>
                        Known for a keen eye for design, applying advanced CSS techniques to craft visually appealing
                        and intuitive interfaces.
                    </p>

                    <p>
                        Ensures high standards of code quality and application reliability by implementing unit and
                        integration testing using industry-standard tools and methodologies.
                    </p>
                    <p>
                        Committed to team success by mentoring junior developers, assisting with debugging, and sharing
                        best practices to elevate overall project quality.
                    </p>
                </Notes>
                <ButtonSet>
                    <a className="w-full md:w-auto btn" href="#" target="_blank" rel="noopener noreferrer">
                        <span>view website</span>
                    </a>
                </ButtonSet>
            </TimelineEntry>
        </>
    );
}
