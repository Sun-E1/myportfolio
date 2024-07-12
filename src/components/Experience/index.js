import pairProgramming from "./pair.svg"
import './index.css'



const Experience = () =>(

    <div className="experience-bg-container">

              <div className='experience-start-tag-container'>
            <p className='experience-start-tag'>{`<experience>`}</p>
        </div>

        <div className='experience-inside-container'>

            <div className='experience-description'>
                
                <h1 className="title">Teaching Assistent at NxtWave</h1>
                <p className="duration">
                Feb 2023 - Present 
                </p>
                <p className="title-description">Assist fellow students in clarifying their doubts and building a strong conceptual knowledge base by reviewing their code, identifying and resolving errors, and guiding them to solve their questions. Demonstrate strong problem-solving abilities and effective communication skills.</p>
            </div>

            <div className="experience-image-container">
               <img className="experience-image"src={pairProgramming} alt="pair"/>
            </div>

        </div>

       <div className='experience-start-tag-container'>
            <p className='experience-start-tag'>{`</experience>`}</p>
        </div>

    </div>
)


export default Experience