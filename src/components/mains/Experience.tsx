import styled from "styled-components";

const StyledMain = styled.main`
    background-color: #b3e5fc;
    height: 225vh;
    width: 70%;
    display: flex;
    flex-direction: column;
    
    p {
        color: #2C2A4A;
        font-family: lexend, serif;
        font-size: calc(1px + 1.5vw);
        padding: 2vw;
        text-align: left;
    }
    
    h3 {
        color: #2C2A4A;
        font-family: lexend, serif;
        padding-top: 2vw;
        padding-left: 2vw;
        font-size: calc(3px + 2vw);
        text-align: left;
    }

    ul {
        color: #2C2A4A;
        font-family: lexend, serif;
        font-size: calc(1px + 1vw);
        padding-left: 4vw;
        text-align: left;
    }
    
    @media (max-width: 750px){
        width: 100%;
    }
`;

export default function Experience() {
    return (
        <StyledMain>
            <title>Experience | Resume</title>
            <div id="sub-text">
                <h3> Professional Experience </h3>
                <p>
                    <b> Computer Science and AI Program Coordinator </b> <br/>
                    <i>The Stateless Collective IDEAcademy</i> <br/>
                    June 2025 - August 2025 <br/>
                    Boston, MA <br />
                </p>
                <ul>
                    <li>Led and coordinated a summer Computer Science and AI program for 10 high school students, focusing on hands-on
                        learning in computing basics, Python and Java programming, AI concepts, and ethical considerations in technology.</li>
                    <li>Mentored students on coding projects, helping them apply their programming skills to real-world problem-solving.</li>
                    <li>Managed daily program logistics, including scheduling, curriculum pacing, and team communication.</li>
                    <li>Collaborated with staff and guest speakers to ensure a cohesive and engaging learning experience.</li>
                </ul>
                <p>
                    <b> User Experience (UX) Design Intern </b> <br/>
                    <i>PIT-NE Impact Technology Fellowship</i> <br/>
                    May 2025 - June 2025 <br/>
                    Boston, MA <br />
                </p>
                <ul>
                    <li>Led UX design for a proprietary web tool that visualizes community data to support safety initiatives and legal
                        advocacy in Massachusetts.</li>
                    <li>Designed wireframes, prototypes, and responsive UI components in Figma based on stakeholder goals and user
                        feedback.</li>
                    <li>Conducted user research and informal usability testing with community members and legal observers to improve
                        accessibility and functionality.</li>
                </ul>
                <p>
                    <b> Computer Science Teaching Assistant </b> <br/>
                    <i>Girls Who Code Summer Immersion Program</i> <br/>
                    May 2024 - August 2024 <br/>
                    Virtual <br />
                </p>
                <ul>
                    <li>Assisted in mentoring and creating an engaging virtual classroom environment for 50 to 60 high school students.</li>
                    <li>Facilitated virtual breakout groups and advisory meetings, co-led student hours, and supported partner events.</li>
                    <li>Taught students JavaScript for projects focused on game design to enhance their creativity in game development.</li>
                </ul>

                <h3> Leadership Experience </h3>
                <p>
                    <b> Lead Hackathon Ambassador </b> <br/>
                    <i>Computing and Data Science (CDS) Spark! Ambassador Program, BU </i> <br/>
                    January 2025 - Present <br/>
                    Boston, MA <br />
                </p>
                <ul>
                    <li>Collaborate with 8 team members to organize, plan, and execute hackathons for college students from across the U.S.</li>
                    <li>Coordinate events to introduce participants to coding, problem-solving, and interdisciplinary collaboration.</li>
                    <li>Organized two hackathons in Spring 2025: CivicHacks (~200 participants) and Art + Computing Mini-Hack (~40
                        participants).</li>
                </ul>
                <p>
                    <b> Secretary </b> <br/>
                    <i>Girls Who Code (GWC), BU Chapter</i> <br/>
                    December 2024 - Present <br/>
                    Boston, MA <br />
                </p>
                <ul>
                    <li>Record and distribute minutes from all meetings and maintain membership information.</li>
                    <li>Prepare and send updates, information, and other communications to the eBoard and other GWC members.</li>
                    <li>Assist in organizing and promoting activities by reserving spaces for meetings and events.</li>
                </ul>
            </div>
        </StyledMain>
    )
}