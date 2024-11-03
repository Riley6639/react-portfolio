// a function to return the portfolio page
import Project from '../components/project';

export default function Portfolio() {
    // create an array of project objects
    const projects = [
        {
            name: 'weather service',
            description: 'a weather service that provides weather information for a given location',
            image: '../images/weather.jpg',
            link: 'https://week-9-challenge-4.onrender.com/',
            imageSource: 'https://unsplash.com/photos/silhouette-of-trees-during-daytime-QRBe3Ithczs?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash',
            gitHub: 'https://github.com/Riley6639/week-9-challenge'
        },
        {
            name: 'PlanIt',
            description: 'a to-do list application that allows users to create, set priorty, and delete tasks',
            image: '../images/planit.jpg',
            link: 'https://riley6639.github.io/PlanIT/',
            imageSource: 'https://unsplash.com/photos/5M4v6fR3X4M?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash',
            gitHub: 'https://github.com/Riley6639/PlanIT'
        },
        {
            name: 'study guide',
            description: 'the first project I created in my coding bootcamp, a study guide for the coding bootcamp',
            image: '../images/study-guide.jpg',
            link: 'https://riley6639.github.io/Prework-study-guide/',
            imageSource: 'https://unsplash.com/photos/5M4v6fR3X4M?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash',
            gitHub: 'https://github.com/Riley6639/Prework-study-guide'
        },
        {
            name: 'Bucket List',
            description: 'a bucket list application that allows users to add, delete, and mark items as completed',
            image: '../images/bucket-list.jpg',
            link: 'https://boisterous-panda-344a2c.netlify.app/',
            imageSource: 'https://unsplash.com/photos/5M4v6fR3X4M?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash',
            gitHub: 'https://github.com/Riley6639/week-12-miniproject'
        }
    ]

    // return the portfolio page
    return (
        <div className="container py-5">
            <h2 className="text-center mb-4">
                Portfolio
            </h2>
            <div className="row">
                {projects.map((project, index) => (
                    <div className="col-md-4" key={index}>
                        <Project {...project} />
                    </div>
                ))}
            </div>
        </div>
    )
}