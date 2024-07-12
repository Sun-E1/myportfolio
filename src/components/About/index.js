import './index.css'
import aboutImage from './about.svg'

const About = () =>(

    <div className='about-container' id="about">
        <div className='about-start-tag-container'>
        <p className='about-start-tag'>{`<about>`}</p>.
        </div>

        <div className='about-inside-container'>
            <div className='about-description-container'>

            <p className='about-description'>I've completed my Bachelor's Degree in Commerce with over all 8.3%. In addition to my academics i have also pursued Full Stack Development in MERN specilization, through out my learning i have developed proficient skills in programming languages such as <span className='span-element'>HTML</span>, <span className='span-element'>CSS</span>, <span className='span-element'>JavaScript</span>, <span className='span-element'>SQL</span>, and <span className='span-element'>Python</span>. In addition to this i have worked on various projects in mentioned languages and gained deeper conceptual knowledge and obtained greater experience in front-end, backend-end languages with problem solving skills. I am a results-driven full stack developer with a keen passion for front-end development. My expertise lies in crafting seamless user experiences through meticulous attention to detail and a deep understanding of modern web technologies.</p>
             <p className='about-description'>With proficiency in <span className='span-element'>HTML</span>, <span className='span-element'>CSS</span>, and <span className='span-element'>JavaScript</span>. I specialize in leveraging cutting-edge frameworks such as <span className='span-element'>React.js</span> to build scalable and responsive applications. My commitment to clean, maintainable code ensures both functionality and aesthetic appeal in every project I undertake.</p>
             <p className='about-description'>Apart from all my skills and adademics i have proficient communication skills <span className='span-element'>Telugu</span>, <span className='span-element'>Hindi</span> and <span className='span-element'>English</span>
</p>

        </div>
    <div className='about-image-container'>
        <img  className="about-image" src={aboutImage} alt="aboutImage"/>
        </div>
    </div>
        <div className='about-start-tag-container'>
        <p className='about-start-tag'>{`</about>`}</p>
        </div>
    </div>
)


export default About 