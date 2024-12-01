import React, {useState} from "react";
import Preview from "./Preview.jsx";

export default function App () {
    // hero section data
    const [name, setName] = useState("");
    const [specialty, setSpecialty] = useState("");
    const [headshot, setHeadshot] = useState();
    
    // contacts data
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [website, setWebsite] = useState("");
    const [location, setLocation] = useState("");
    const contacts = [email, phoneNumber, [website, (<a className="text-decoration-none text-dark" target="_blank" href={website}>{website}</a>)], location];
    
    // bio
    const [bio, setBio] = useState("");

    // skills
    const [skill, setSkill] = useState("");
    const [skills, setSkills] = useState([]);

    // languages
    const [lang, setLang] = useState("");
    const [level, setLevel] = useState("");
    const [languages, setLanguages] = useState([]); 
    
    // education
    const [courseOrg, setCourseOrg] = useState(""); 
    const [courseStart, setCourseStart] = useState("");
    const [courseEnd, setCourseEnd] = useState("");
    const [course, setCourse] = useState("");
    const [courses, setCourses] = useState([]);

    // work experience
    const [workplace, setWorkplace] = useState("");
    const [position, setPosition] = useState("");
    const [jobStart, setJobStart] = useState("");
    const [jobEnd, setJobEnd] = useState("");
    const [jobDescription, setJobDescription] = useState(""); 
    const [workplaces, setWorkplaces] = useState([]);

    
    function handleHeadshotUpload(e) {
      setHeadshot(URL.createObjectURL(e.target.files[0]));  
    }
    
    function addSkill() { 
      if (skill && !skills.includes(skill)) {
        const currentSkills = [...skills];
        currentSkills.push(skill);
      setSkills(currentSkills);
      setSkill("");
      } else alert (skill ? "You already added this skill" : "Please, name the skill");
    }

    function removeSkill(i) {
      const currentSkills = [...skills];
      currentSkills.splice(i, 1);
      setSkills(currentSkills);
    }
    
    function addLanguage() { 
      if (lang && !languages.find(l => l.lang === lang)) {
      const currentLanguages = [...languages];
      currentLanguages.push({
        lang,
        level
      });
      setLanguages(currentLanguages);
      setLang("");
      setLevel("");
      } else alert(lang ? "You already added this language" : "Please, name the language");
    }
    
    function removeLanguage(i) {
      const currentLanguages = [...languages];
      currentLanguages.splice(i, 1);
      setLanguages(currentLanguages);
    }
    
    function addCourse() {
      const currentCourses = [...courses];
      currentCourses.push({
        name: course,
        org: courseOrg,
        dates: `${courseStart} - ${courseEnd}`
      });
      setCourses(currentCourses);
      setCourse("");
      setCourseOrg("");
      setCourseStart("");
      setCourseEnd("");
    }
    
    function removeCourse(i) {
      const currentCourses = [...courses];
      currentCourses.splice(i, 1);
      setCourses(currentCourses);
    }
    
    function addWorkplace() {
      const currentWorkplaces = [...workplaces];
      currentWorkplaces.push({
        workplace: workplace,
        position: position,
        dates: `${jobStart} - ${jobEnd}`,
        description: jobDescription
      });
      setWorkplaces(currentWorkplaces);
      setWorkplace("");
      setPosition("");
      setJobStart("");
      setJobEnd("");
      setJobDescription("");
    }

    function removeWorkplace(i) {
      const currentWorkplaces = [...workplaces];
      currentWorkplaces.splice(i, 1);
      setWorkplaces(currentWorkplaces);
    }
    
    async function downloadHtml2Pdf () {
      const html2pdf = await require("html2pdf.js");
      const element = document.querySelector("#dynamicPreview");
      html2pdf(element, {
        margin: 0,
        padding: 0,
        filename: "CV.pdf"
      });
    }

    const previewState = {headshot, name, specialty, contacts, courses, languages, bio, skills, workplaces, downloadHtml2Pdf};

    return (
        <div className="container-xxl p-1">
            <h1>Free CV Maker</h1>
            <p className="lead fst-italic mb-3">Write your CV from scratch in 5 minutes!</p>
            <p className="mb-4">Enter your data on the left, see your CV template dynamically changing. Click "Save" once you're done to download your resume in PDF!</p>
            <div className="row">
                <div className="col-md-5 overflow-scroll" id="editor">
                  <figure className="my-4">
                    <figcaption className="mb-3 lead">Hero section</figcaption>
                    <div className="row">
                      <div className="col col-md-7">
                        <div className="mb-3">
                          <label htmlFor="name-input" className="form-label">Your full name</label>
                          <input value={name} onChange={e => setName(e.target.value)} type="text" className="form-control" id="name-input" required/>
                        </div>
                        <div className="mb-3">
                          <label htmlFor="specialty-input" className="form-label">Your specialty</label>
                          <input value={specialty} onChange={e => setSpecialty(e.target.value)} type="text" className="form-control" id="specialty-input" required/>
                        </div>
                      </div>
                      <div className="col col-md-5">
                        <div className="mb-3">
                          <label htmlFor="headshot-input" className="form-label">Photo(headshot)</label>
                          <input type="file" className="form-control" id="headshot-input" onChange={handleHeadshotUpload}/>
                        </div> 
                        <div className="mb-3">
                          <img className="img-fluid img-thumbnail img-small" src={headshot} alt="" />
                        </div>
                      </div>
                    </div>
                  </figure>
                  <figure className="my-4">
                    <figcaption className="mb-3 lead">Contacts</figcaption>
                      <div className="mb-3">
                        <label htmlFor="email-input" className="form-label">Email</label>
                        <input value={email} onChange={e => setEmail(e.target.value)} type="email" className="form-control" id="email-input"/>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="phone-number-input" className="form-label">Phone number</label>
                        <input value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} type="tel" className="form-control" id="phone-number-input"/>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="website-input" className="form-label">Personal website</label>
                        <input value={website} onChange={e => setWebsite(e.target.value)} type="url" className="form-control" id="website-input"/>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="location-input" className="form-label">Location</label>
                        <input value={location} onChange={e => setLocation(e.target.value)} type="text" className="form-control" id="location-input"/>
                      </div>
                  </figure>
                  <figure className="my-4">
                    <figcaption className="mb-3 lead">Bio</figcaption>
                      <div className="mb-3">
                        <label htmlFor="bio-textarea" className="form-label">Tell your potential employers / clients about yourself</label>
                        <textarea value={bio} onChange={e => setBio(e.target.value)} name="bio" id="bio-textarea" className="form-control" rows="4"></textarea>
                      </div>
                  </figure>
                  <figure className="my-4">
                    <figcaption className="mb-3 lead">Skills</figcaption>
                      {skills.length > 0 && <ul className="mb-3 list-group list-group-numbered list-group-flush">
                        {skills.map((s, i) => {
                          return (<li className="list-group-item d-flex justify-content-between align-items-start" key={i}><p className="d-inline ms-2 me-auto">{s}</p>
                            <button className="btn btn-danger text-center" onClick={() => removeSkill(i)}>x</button>
                          </li>);})}
                      </ul> }
                      <div className="mb-3 row">
                        <div className="col col-sm-10"><input value={skill} onChange={e => setSkill(e.target.value)} type="text" className="form-control" id="skill-input" placeholder="Add a skill" /></div>
                        <div className="col col-sm-2">
                          <button className="btn btn-lg btn-success text-center" onClick={addSkill}>+</button>
                        </div>
                      </div>
                  </figure>
                  <figure className="my-4">
                    <figcaption className="mb-3 lead">Languages</figcaption>
                      {languages.length > 0 && <ol className="mb-3 list-group list-group-numbered">
                      {languages.map((lang, i) => {
                        return (<li className="list-group-item d-flex justify-content-between align-items-start" key={i} >
                          <div className="ms-2 me-auto">
                            <div className="fw-bold">{lang.lang}</div>
                            {lang.level ? lang.level : ""}
                          </div>
                          <button className="btn btn-danger my-auto text-center" onClick={() => removeLanguage(i)}>x</button>
                        </li> );})}
                      </ol>}
                      <div className="mb-3 row">
                        <div className="col col-sm-5"><input value={lang} onChange={e => setLang(e.target.value)} type="text" className="form-control" id="lang-input" placeholder="Add a language" /></div>
                        <div className="col col-sm-5"><input value={level} onChange={e => setLevel(e.target.value)} type="text" className="form-control" id="level-input" placeholder="Rate your proficiency" /></div>
                        <div className="col col-sm-2">
                          <button className="btn btn-lg btn-success text-center" onClick={addLanguage}>+</button>
                        </div>
                      </div>
                  </figure>
                  <figure className="my-4">
                    <figcaption className="mb-3 lead">Education</figcaption>
                    {courses.length > 0 && <ul className="mb-3 list-group">
                      {courses.map((c, i) => {
                         return (<li className="list-group-item bg-light mb-3 border border-1 rounded" key={i}>
                             <div className="row gap-1">
                               <div className="col-8">
                                <p className="mb-1">{c.org}</p>
                                <p className="mb-1 fw-bold">{c.name}</p>
                               </div>
                               <div className="col-2"><small>{c.dates}</small></div>
                               <div className="col-1 d-flex flex-column justify-content-center align-items-center">
                                <button className="btn btn-sm text-center" onClick={() => removeCourse(i)}>x</button>
                               </div>
                             </div>
                           </li>
                         );
                      })}
                      </ul>}
                      <div className="mb-3 p-2 border border-1 gap-2">
                        <input value={courseOrg} onChange={e => setCourseOrg(e.target.value)} id="ed-org-input" type="text" className="form-control mb-1" placeholder="Organization" required/>  
                        <input value={course} onChange={e => setCourse(e.target.value)} id="ed-name-input" type="text" className="form-control mb-1" placeholder="Name of the degree/course" required/>        
                        <div className="input-group">
                          <span className="input-group-text">From</span>
                          <input value={courseStart} onChange={e => setCourseStart(e.target.value)} type="text" className="form-control" placeholder="Month, year"/>
                          <span className="input-group-text">to</span>
                          <input value={courseEnd} onChange={e => setCourseEnd(e.target.value)} type="text" className="form-control" placeholder="Month, year"/>
                        </div>
                      </div>
                      <div className="text-center">
                        <button onClick={addCourse} className="btn btn-success btn-lg">Add</button>
                      </div>  
                  </figure>
                  <figure className="my-4">
                    <figcaption className="mb-3 lead">Work Experience</figcaption>
                    {workplaces.length > 0 && <ul className="mb-3 list-group">
                      {workplaces.map((j, i) => {
                         return (
                           <li className="list-group-item bg-light mb-3 border border-1 rounded" key={i}>
                             <div className="row gap-1">
                               <div className="col-7">
                                <p className="mb-1 fw-bold">{j.workplace}</p>
                                <p className="mb-1 lead">{j.position}</p>
                                <p>{j.description}</p>
                               </div>
                               <div className="col-2"><small>{j.dates}</small></div>
                               <div className="col-1 d-flex flex-column justify-content-center align-items-center">
                                <button className="btn btn-sm btn-danger text-center" onClick={() => removeWorkplace(i)}>x</button>
                               </div>
                             </div>
                           </li>
                         );
                      })}
                      </ul>}
                      <div className="mb-3 p-2 border border-1 gap-2">
                        <input value={workplace} onChange={e => setWorkplace(e.target.value)} id="workplace-input" type="text" className="form-control mb-1" placeholder="Organization" required/>  
                        <input value={position} onChange={e => setPosition(e.target.value)} id="position-input" type="text" className="form-control mb-1" placeholder="Position" required/>
                        <textarea value={jobDescription} onChange={e => setJobDescription(e.target.value)} name="job-description" id="job-description-textarea" className="form-control" rows="4" placeholder="Tell about your experience"></textarea>        
                        <div className="input-group">
                          <span className="input-group-text">From</span>
                          <input value={jobStart} onChange={e => setJobStart(e.target.value)} type="text" className="form-control" placeholder="Month, year"/>
                          <span className="input-group-text">to</span>
                          <input value={jobEnd} onChange={e => setJobEnd(e.target.value)} type="text" className="form-control" placeholder="Month, year"/>
                        </div>
                      </div>
                      <div className="text-center">
                        <button onClick={addWorkplace} className="btn btn-success btn-lg">Add</button>
                      </div>  
                  </figure>
                </div>
                <Preview state={previewState} id="dynamicPreview"/>
            </div>
            <footer className="text-center mt-3"><p>©2024 by Yisroel Steiner</p></footer>
        </div>
    );
}