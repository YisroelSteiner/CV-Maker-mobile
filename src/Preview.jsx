import React from "react";
import { View, Text, Image, Button } from "react-native";

export default function Preview (props) {
  return (<View style={{flex: 7}}>
    <View style={{padding: "1rem", border: "solid 1px black", flex: 12}} id={props.id}>
      <View style={{flexDirection: "row"}}>
        {props.state.headshot && <View style={{flex: 3}}>
          <Image src={props.state.headshot} alt="" style={{maxWidth: "90%", maxHeight: "90%"}} />
        </View>}
        <View style={{flex: 12, textAlign: "center"}}>
          <Text style={{fontSize: "3rem", fontWeight: "bold", margin: "1.5rem 0"}}>{props.state.name}</Text>
          <Text style={{fontSize: "3rem", margin: "1.67em 0", fontWeight: 300, lineHeight: 1.2}}>{props.state.specialty}</Text>
          <Text>{props.state.contacts.map((c, i) => {
            const filtered = props.state.contacts.filter(c => {
              if (typeof c === "string") return c.length > 0;
              else return c[0].length > 0;
            });
            if (typeof c === "string") {
            if (c && filtered.indexOf(c) < filtered.length - 1) 
            return (<Text key={i}> {c} |</Text>); else 
            return (<Text key={i}> {c} </Text>);} else {
              if (c[0] && filtered.indexOf(c) < filtered.length - 1) 
                return (<Text key={i}> {c[1]} |</Text>); else 
                return (<Text key={i}> {c[1]} </Text>);}
           })}</Text>
        </View>
      </View>
      <hr />
      <View style={{flexDirection: "row"}}>
        <View style={{flex: 4, paddingRight: "1rem", borderRight: "1px solid black"}} >
          {props.state.courses.length > 0 && <figure style={{margin: "1rem auto"}}>
          <figcaption style={{textAlign: "center", marginBottom: ".5rem", fontSize: "3rem", fontWeight: 300, lineHeight: 1.2}}>Education</figcaption>
          <ul style={{listStyleType: "none"}} >
          {props.state.courses.map((c, i) => {
             return i < props.state.courses.length - 1 ? (<li style={{paddingVertical: "0.5rem", paddingHorizontal: "1rem", marginBottom: ".5rem"}} key={i}>
                 <View>
                    <Text style={{marginBottom: ".25rem"}}>{c.org}</Text>
                    <Text style={{marginBottom: ".25rem", fontWeight: "bold"}} >{c.name}</Text>
                    <Text style={{fontSize: ".875rem", fontStyle: "italic"}} >{c.dates}</Text>
                 </View>
               </li>
             ) : (<li style={{paddingVertical: "0.5rem", paddingHorizontal: "1rem", marginBottom: ".5rem", borderBottom: "1px solid gray"}} key={i}>
              <View>
                 <Text style={{marginBottom: ".25rem"}}>{c.org}</Text>
                 <Text style={{marginBottom: ".25rem", fontWeight: "bold"}} >{c.name}</Text>
                 <Text style={{fontSize: ".875rem", fontStyle: "italic"}} >{c.dates}</Text>
              </View>
            </li>
          );
          })}
          </ul>
          </figure>}
          {props.state.languages.length > 0 && <figure style={{margin: "1rem auto"}} >
            <figcaption style={{textAlign: "center", marginBottom: ".5rem", fontSize: "3rem", fontWeight: 300, lineHeight: 1.2}} >Languages</figcaption>
            <ul>{props.state.languages.map((lang, i) => {
              return (<li style={{marginBottom: ".5rem"}} key={i}><Text style={{fontWeight: "bold"}}>{lang.lang}</Text>  {lang.level}</li>);
            })}</ul>
          </figure>}
        </View>
        <View style={{flex: 8, paddingLeft: "1rem"}}>
          {props.state.bio && <figure style={{margin: "1rem auto"}}>
            <figcaption style={{textAlign: "center", marginBottom: ".5rem", fontSize: "3rem", fontWeight: 300, lineHeight: 1.2}}>Summary</figcaption>
              <View style={{whiteSpace:"pre-wrap"}} >{props.state.bio}</View>
            </figure>}
          {props.state.skills.length > 0 && <figure style={{margin: "1rem auto"}}>
            <figcaption style={{textAlign: "center", marginBottom: ".5rem", fontSize: "3rem", fontWeight: 300, lineHeight: 1.2}}>Skills</figcaption>
            <ul style={{listStyleType: "none", textAlign: "center"}} >{props.state.skills.map((skill, i) => {
              return i < props.state.skills.length - 1 ? (<li style={{paddingVertical: "0.5rem", paddingHorizontal: "1rem", marginLeft: ".5rem"}} key={i}>{skill}</li>) : (<li style={{paddingVertical: "0.5rem", paddingHorizontal: "1rem", marginLeft: ".5rem", borderBottom: "1px solid gray"}} key={i}>{skill}</li>);
            })}</ul>
          </figure>}
          {props.state.workplaces.length > 0 && <figure style={{margin: "1rem auto"}}>
            <figcaption style={{textAlign: "center", marginBottom: ".5rem", fontSize: "3rem", fontWeight: 300, lineHeight: 1.2}}>Work Experience</figcaption>
          <ul style={{listStyleType: "none"}}>
          {props.state.workplaces.map((j, i) => {
             return i < props.state.workplaces ? (<li style={{paddingVertical: "0.5rem", paddingHorizontal: "1rem", marginBottom: ".5rem"}} key={i}>
                 <View>
                    <Text style={{marginBottom: ".25rem", fontStyle: "bold"}}>{j.workplace}</Text>
                    <Text style={{marginBottom: ".5rem", fontSize: "1.25rem", fontWeight: 300}}>{j.position}</Text>
                    <View style={{whiteSpace: "pre-wrap", murginBottom:".5rem"}}>{j.description}</View>
                    <Text style={{fontSize: ".875rem", fontStyle: "italic"}}>{j.dates}</Text>
                 </View>
               </li>) : (<li style={{paddingVertical: "0.5rem", paddingHorizontal: "1rem", marginBottom: ".5rem", borderBottom: "1px solid gray"}} key={i}>
                 <View>
                    <Text style={{marginBottom: ".25rem", fontStyle: "bold"}}>{j.workplace}</Text>
                    <Text style={{marginBottom: ".5rem", fontSize: "1.25rem", fontWeight: 300}}>{j.position}</Text>
                    <View style={{whiteSpace: "pre-wrap", murginBottom:".5rem"}}>{j.description}</View>
                    <Text style={{fontSize: ".875rem", fontStyle: "italic"}}>{j.dates}</Text>
                 </View>
               </li>);
          })}
          </ul>
          </figure>}
        </View>
      </View>
    </View>
    <View style={{textAlign: "center", marginVertical: "3rem"}}>
      <Button style={{paddingVertical: ".5rem", paddingHorizontal: "1rem", fontSize: "1.25rem", borderRadius: ".5rem", backgroundColor: "#0d6efd", fontWeight: 400, lineHeight: "1.5", textAlign: "center"}} onClick={props.state.downloadHtml2Pdf}>Save</Button>
    </View>  
  </View>)
}