//a function that returns the about page
import '../CSS/about.css';

export default function About() {
    return (
        <div className="about">
            <h2 className="text-center mb-4">
                About Me
            </h2>
            <img src="../../images/profile.jpg" alt="profile picture" />
            <p className="lead text-justify">
            Hey, I'm Riley—a full-stack web developer who’s all about creating thoughtful and effective web applications. With experience in HTML, CSS, JavaScript, SQL, and React, I enjoy building projects that blend solid functionality with a seamless user experience. I’m drawn to roles that value creativity and teamwork, where I can dive into problem-solving and learn from others. My approach to development combines a detail-oriented mindset with a drive for continuous growth—whether I’m tackling a complex JavaScript function, refining API integrations, or styling with Bootstrap. Outside of coding, I'm likely out on a walk with my Australian Shepherd or exploring new ways to bring my ideas to life. I'm always eager to connect with other curious minds in tech!
            </p>
        </div>
    )
}