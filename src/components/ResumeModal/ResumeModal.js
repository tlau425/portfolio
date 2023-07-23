import './ResumeModal.scss';
import ResumePdf from '../../assets/images/resume.pdf';
function ResumeModal ({ handleResumeClick }){
    return (
        <div className="resume">
            <div className="resume__container">
            <button className="resume__button" onClick={handleResumeClick}>Close</button>
            <embed className="resume__pdf" src={ ResumePdf }/>
            </div>
        </div>
    )
}

export { ResumeModal };