import React, { useState } from "react";
import Preview from "./Preview.jsx";
import { View, Text, Image, Button, StyleSheet } from "react-native";
import { styles, colors } from "./styles/main.js";
 
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
    const contacts = [email, phoneNumber, [website, (<a style={{textDecoration: "none", color: "#212529" }} target="_blank" href={website}>{website}</a>)], location];
    
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
        <View style={{padding: ".25rem", flex: 12}}>
            <Text style={{ fontSize: "2rem", margin: ".67rem .67rem", fontWeight: 500, lineHeight: 1.2 }}>Free CV Maker</Text>
            <Text style={{ fontSize: "1.25rem", fontStyle: "italic", marginBottom: "1rem", fontWeight: 300 }} >Write your CV from scratch in 5 minutes!</Text>
            <Text style={{marginBottom: "1.5rem"}}>Enter your data on the left, see your CV template dynamically changing. Click "Save" once you're done to download your resume in PDF!</Text>
            <View style={{ display: "flex", flexDirection: "row" }}>
                <View style={{ flex:5, overflow: "scroll", maxHeight: "80vh" }}>
                  <figure style={{marginVertical: "1.5rem"}}>
                    <figcaption style={{marginBottom: "1rem", fontSize:"1.25rem", fontWeight: 300}}>Hero section</figcaption>
                    <View style={{display: "flex", flexDirection: "row"}}>
                      <View style={{flex:7}} >
                        <View style={{marginBottom: "1rem"}} >
                          <Text style={{marginBottom: ".5rem", display: "inline-block"}} htmlFor="name-input">Your full name</Text>
                          <input value={name} onChange={e => setName(e.target.value)} type="text" style={styles.formControl} id="name-input" required/>
                        </View>
                        <View style={{marginBottom: "1rem"}} >
                          <Text style={{marginBottom: ".5rem", display: "inline-block"}} htmlFor="specialty-input">Your specialty</Text>
                          <input value={specialty} onChange={e => setSpecialty(e.target.value)} type="text" style={styles.formControl} id="specialty-input" required/>
                        </View>
                      </View>
                      <View style={{flex: 5}} >
                        <View style={{marginBottom: "1rem"}} >
                          <Text style={{marginBottom: ".5rem", display: "inline-block"}} htmlFor="headshot-input" >Photo(headshot)</Text>
                          <input type="file" style={styles.formControl} id="headshot-input" onChange={handleHeadshotUpload}/>
                        </View> 
                        <View style={{marginBottom: "1rem"}} >
                          <Image style={styles.imgThumbnail} src={headshot} alt="" />
                        </View>
                      </View>
                    </View>
                  </figure>
                  <figure style={{marginBottom: "1.5rem"}} >
                    <figcaption style={{marginBottom: "1rem", fontSize:"1.25rem", fontWeight: 300}}>Contacts</figcaption>
                      <View style={{marginBottom: "1rem"}} >
                        <Text style={{marginBottom: ".5rem", display: "inline-block"}} htmlFor="email-input">Email</Text>
                        <input value={email} onChange={e => setEmail(e.target.value)} type="email" style={styles.formControl} id="email-input"/>
                      </View>
                      <View style={{marginBottom: "1rem"}}>
                        <Text htmlFor="phone-number-input" style={{marginBottom:".5rem", display: "inline-block"}}>Phone number</Text>
                        <input value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} type="tel" style={styles.formControl} id="phone-number-input"/>
                      </View>
                      <View style={{marginBottom: "1rem"}}>
                        <Text htmlFor="website-input" style={{marginBottom:".5rem", display: "inline-block"}}>Personal website</Text>
                        <input value={website} onChange={e => setWebsite(e.target.value)} type="url" style={styles.formControl} id="website-input"/>
                      </View>
                      <View style={{marginBottom: "1rem"}}>
                        <Text htmlFor="location-input" style={{marginBottom:".5rem", display: "inline-block"}}>Location</Text>
                        <input value={location} onChange={e => setLocation(e.target.value)} type="text" style={styles.formControl} id="location-input"/>
                      </View>
                  </figure>
                  <figure style={{marginVertical: "1.5rem"}}>
                    <figcaption style={{marginBottom: "1rem", fontSize:"1.25rem", fontWeight: 300}}>Bio</figcaption>
                      <View style={{marginBottom: "1rem"}}>
                        <Text htmlFor="bio-textarea" style={{marginBottom:".5rem", display: "inline-block"}}>Tell people about yourself</Text>
                        <textarea value={bio} onChange={e => setBio(e.target.value)} name="bio" id="bio-textarea" style={styles.formControl} rows="4"></textarea>
                      </View>
                  </figure>
                  <figure style={{marginVertical: "1.5rem"}} >
                    <figcaption style={{marginBottom: "1rem", fontSize:"1.25rem", fontWeight: 300}}>Skills</figcaption>
                      {skills.length > 0 && <ol style={{marginBottom: "1rem", listStyleType: "none", counterReset: "section"}} >
                        {skills.map((s, i) => {
                          return i < skills.length - 1 ? (<li style={{padding: "0.5rem 1rem", display: "flex", justifyContent: "space-between", alignItems: "start"}} key={i}><Text style={{display: "inline", marginLeft: ".5rem", marginRight: "auto"}} >{s}</Text>
                            <Button style={StyleSheet.compose(styles.btn, {backgroundColor: colors.danger,  paddingHorizontal: "0.75rem", paddingVertical: "0.375rem", fontSize: "1rem", borderRadius: ".375rem"})} onClick={() => removeSkill(i)}>x</Button>
                          </li>) : (<li style={{padding: "0.5rem 1rem", display: "flex", justifyContent: "space-between", alignItems: "start", borderBottom: "1 solid #dee2e6"}} key={i}><Text style={{display: "inline", marginLeft: ".5rem", marginRight: "auto"}} >{s}</Text>
                            <Button style={StyleSheet.compose(styles.btn, {backgroundColor: colors.danger,  paddingHorizontal: "0.75rem", paddingVertical: "0.375rem", fontSize: "1rem", borderRadius: ".375rem"})} onClick={() => removeSkill(i)}>x</Button>
                          </li>);})}
                      </ol> }
                      <View style={{marginBottom: "1rem", display: "flex", flexDirection: "row"}} >
                        <View style={{flex: 10}} ><input value={skill} onChange={e => setSkill(e.target.value)} type="text" style={styles.formControl} id="skill-input" placeholder="Add a skill" /></View>
                        <View style={{flex: 2}} >
                          <Button style={StyleSheet.compose(styles.btn, {backgroundColor: colors.success, paddingVertical: ".5rem", paddingHorizontal: "1rem", fontSize: "1.25rem", borderRadius: ".5rem"})} onClick={addSkill}>+</Button>
                        </View>
                      </View>
                  </figure>
                  <figure style={{marginVertical: "1.5rem"}} >
                    <figcaption style={{marginBottom: "1rem", fontSize:"1.25rem", fontWeight: 300}}>Languages</figcaption>
                      {languages.length > 0 && <ol style={{marginBottom: "1rem", listStyleType: "none", counterReset: "section", border:"1 px solid #dee2e6", borderRadius: ".375rem"}}>
                      {languages.map((lang, i) => {
                        return i < languages.length - 1 ? (<li style={{padding: "0.5rem 1rem", display: "flex", justifyContent: "space-between", alignItems: "start"}} key={i} >
                          <View style={{marginLeft: ".5rem", marginRight: "auto"}}>
                            <View style={{fontWeight: "bold"}} >{lang.lang}</View>
                            {lang.level ? lang.level : ""}
                          </View>
                          <Button style={StyleSheet.compose(styles.btn, {backgroundColor: colors.danger, paddingHorizontal: "0.75rem", paddingVertical: "0.375rem", fontSize: "1rem", borderRadius: ".375rem", marginVertical: "auto"})} onClick={() => removeLanguage(i)}>x</Button>
                        </li> ) : (<li style={{padding: "0.5rem 1rem", display: "flex", justifyContent: "space-between", alignItems: "start", borderBottom: "1 solid #dee2e6"}} key={i} >
                          <View style={{marginLeft: ".5rem", marginRight: "auto"}}>
                            <View style={{fontWeight: "bold"}} >{lang.lang}</View>
                            {lang.level ? lang.level : ""}
                          </View>
                          <Button style={StyleSheet.compose(styles.btn, {backgroundColor: colors.danger, paddingHorizontal: "0.75rem", paddingVertical: "0.375rem", fontSize: "1rem", borderRadius: ".375rem", marginVertical: "auto"})} onClick={() => removeLanguage(i)}>x</Button>
                        </li> );})}
                      </ol>}
                      <View style={{marginBottom: "1rem", display: "flex", flexDirection :"row"}}>
                        <View style={{flex: 5}}><input value={lang} onChange={e => setLang(e.target.value)} type="text" style={styles.formControl} id="lang-input" placeholder="Add a language" /></View>
                        <View style={{flex: 5}}><input value={level} onChange={e => setLevel(e.target.value)} type="text" style={styles.formControl} id="level-input" placeholder="Rate your proficiency" /></View>
                        <View style={{flex: 2}}>
                          <Button style={StyleSheet.compose(styles.btn, {backgroundColor: colors.success, paddingVertical: ".5rem", paddingHorizontal: "1rem", fontSize: "1.25rem", borderRadius: ".5rem"})} onClick={addLanguage}>+</Button>
                        </View>
                      </View>
                  </figure>
                  <figure style={{marginVertical: "1.5rem"}}>
                    <figcaption style={{marginBottom: "1rem", fontSize:"1.25rem", fontWeight: 300}}>Education</figcaption>
                    {courses.length > 0 && <ul style={{marginBottom: "1rem", listStyleType: "none"}}>
                      {courses.map((c, i) => {
                         return (<li style={{padding: ".5rem 1rem", backgroundColor: rgba(248, 249, 250, 1), marginBottom: "1rem", border: "1 solid #dee2e6", borderRadius: ".375rem"}}  key={i}>
                             <View style={{display: "flex", flexDirection: "row", gap: ".25rem"}}>
                               <View style={{flex: 8}}>
                                <Text style={{marginBottom: ".25rem"}} >{c.org}</Text>
                                <Text style={{marginBottom: ".25rem", fontWeight: "bold"}} >{c.name}</Text>
                               </View>
                               <View style={{flex: 2}}><Text style={{fontSize: ".875rem", fontStyle: "italic"}}>{c.dates}</Text></View>
                               <View style={{flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                                <Button style={StyleSheet.compose(styles.btn, {backgroundColor: "#dee2e6", padding: ".25rem .5rem", fontSize: ".875rem", borderRadius: ".25rem"})} onClick={() => removeCourse(i)}>x</Button>
                               </View>
                             </View>
                           </li>
                         );
                      })}
                      </ul>}
                      <View style={{marginBottom: "1rem", padding: ".5rem", border:"1 solid #dee2e6"}}>
                        <input value={courseOrg} onChange={e => setCourseOrg(e.target.value)} id="ed-org-input" type="text" style={StyleSheet.compose(styles.formControl, {marginBottom: ".25rem"})} placeholder="Organization" required/>  
                        <input value={course} onChange={e => setCourse(e.target.value)} id="ed-name-input" type="text" style={StyleSheet.compose(styles.formControl, {marginBottom: ".25rem"})} placeholder="Name of the degree/course" required/>        
                        <View style={{position: "relative", display: "flex", flexWrap: "wrap", alignItems: "stretch", width: "100%"}} >
                          <View style={styles.inputGroupText}>From</View>
                          <input value={courseStart} onChange={e => setCourseStart(e.target.value)} type="text" style={styles.formControl} placeholder="Month, year"/>
                          <View style={styles.inputGroupText}>to</View>
                          <input value={courseEnd} onChange={e => setCourseEnd(e.target.value)} type="text" style={styles.formControl} placeholder="Month, year"/>
                        </View>
                      </View>
                      <View style={{textAlign: "center"}} >
                        <Button style={StyleSheet.compose(styles.btn, {backgroundColor: colors.success, paddingVertical: ".5rem", paddingHorizontal: "1rem", fontSize: "1.25rem", borderRadius: ".5rem"})} onClick={addCourse} >Add</Button>
                      </View>  
                  </figure>
                  <figure style={{marginVertical: "1.5rem"}} >
                    <figcaption style={{marginBottom: "1rem", fontSize:"1.25rem", fontWeight: 300}}>Work Experience</figcaption>
                    {workplaces.length > 0 && <ul style={{marginBottom: "1rem", listStyleType: "none"}}>
                      {workplaces.map((j, i) => {
                         return (
                           <li style={{padding: ".5rem 1rem", backgroundColor: rgba(248, 249, 250, 1), marginBottom: "1rem", border: "1 solid #dee2e6", borderRadius: ".375rem"}} key={i}>
                             <View style={{display: "flex", flexDirection: "row", gap: ".25rem"}}>
                               <View style={{flex: 7}}>
                                <Text style={{marginBottom: ".25rem", fontWeight: "bold"}}>{j.workplace}</Text>
                                <Text style={{marginBottom: ".25rem", fontWeight: 300, fontSize: "1.25rem"}}>{j.position}</Text>
                                <Text>{j.description}</Text>
                               </View>
                               <View style={{flex: 2}}><Text style={{fontSize: ".875rem", fontStyle: "italic"}}>{j.dates}</Text></View>
                               <View style={{flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}} >
                                <Button style={StyleSheet.compose(styles.btn, {backgroundColor: colors.danger, padding: ".25rem .5rem", fontSize: ".875rem", borderRadius: ".25rem"})} onClick={() => removeWorkplace(i)}>x</Button>
                               </View>
                             </View>
                           </li>
                         );
                      })}
                      </ul>}
                      <View style={{marginBottom: "1rem", padding: ".5rem", border: "1 solid #dee2e6"}}>
                        <input value={workplace} onChange={e => setWorkplace(e.target.value)} id="workplace-input" type="text" style={StyleSheet.compose(styles.formControl, {marginBottom: ".25rem"})} placeholder="Organization" required/>  
                        <input value={position} onChange={e => setPosition(e.target.value)} id="position-input" type="text" style={StyleSheet.compose(styles.formControl, {marginBottom: ".25rem"})} placeholder="Position" required/>
                        <textarea value={jobDescription} onChange={e => setJobDescription(e.target.value)} name="job-description" id="job-description-textarea" style={styles.formControl} rows="4" placeholder="Tell about your experience"></textarea>        
                        <View style={{position: "relative", display: "flex", flexWrap: "wrap", alignItems: "stretch", width: "100%"}}>
                          <View style={styles.inputGroupText}>From</View>
                          <input value={jobStart} onChange={e => setJobStart(e.target.value)} type="text" style={styles.formControl} placeholder="Month, year"/>
                          <View style={styles.inputGroupText}>to</View>
                          <input value={jobEnd} onChange={e => setJobEnd(e.target.value)} type="text" style={styles.formControl} placeholder="Month, year"/>
                        </View>
                      </View>
                      <View style={{textAlign: "center"}}>
                        <Button onClick={addWorkplace} style={StyleSheet.compose(styles.btn, {backgroundColor: colors.success, paddingVertical: ".5rem", paddingHorizontal: "1rem", fontSize: "1.25rem", borderRadius: ".5rem"})}>Add</Button>
                      </View>  
                  </figure>
                </View>
                <Preview state={previewState} id="dynamicPreview"/>
            </View>
            <footer style={{textAlign: "center", marginTop: "1rem"}}><Text>©2024 by Yisroel Steiner</Text></footer>
        </View>
    );
}