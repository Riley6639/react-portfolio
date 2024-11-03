// create a project component that will be used to display the projects on the portfolio page
// it will take in a project object as a prop and display the project name, description, and link
import '../CSS/project.css';

function Project(props) {
    return (
        <div className="card shadow-sm mb-4 project">
            <img src={props.image} className="card-img-top" alt={props.name} />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.description}</p>
                <a href={props.link} className="btn btn-primary">
                    View Project
                </a>
                <a href={props.gitHub} className="btn btn-secondary">
                   View Repo
                </a>
            </div>
        </div>
    );
}

export default Project;
