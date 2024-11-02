// a functino to return the resume page
import '../CSS/resume.css';

export default function Resume() {
    return (
        <div className="container my-5 resume">
            <h1 className="text-center mb-4">My Resume</h1>

            {/* Introduction */}
            <section className="mb-5">
                <h2>Summary</h2>
                <p>
                    Full-stack web developer with experience in HTML, CSS, JavaScript, Node.js, Express.js, SQL, and React. Passionate about building responsive and user-friendly web applications and excited to work in a collaborative, creative team environment.
                </p>
            </section>

            {/* Skills */}
            <section className="mb-5">
                <h2>Skills</h2>
                <ul>
                    <li>HTML, CSS, JavaScript</li>
                    <li>React, Node.js, Express.js</li>
                    <li>SQL</li>
                    <li>Git, GitHub, Agile Development</li>
                    <li>typescript, API calls, Server Implementation</li>
                </ul>
            </section>

            {/* Experience */}
            <section className="mb-5">
                <h2>Experience</h2>
                <h3>Full Stack Developer</h3>
                <p><strong>U of U</strong> – Developer Bootcamp</p>
                <ul>
                    <li>Developed responsive, user-friendly web applications using React and Node.js.</li>
                    <li>Collaborated with team members to design and implement new features.</li>
                    <li>Maintained code quality by performing regular testing and code reviews.</li>
                </ul>
            </section>
        </div>
    );
}