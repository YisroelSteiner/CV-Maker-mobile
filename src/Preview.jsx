import React from "react";
import { View, Text, Image, Button, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 12
    },
    previewContainer: {
        padding: "1rem",
        border: "solid 1px black",
        flex: 12
    },
    row: {
        flexDirection: "row"
    },
    col1: {
        flex: 1
    },
    col2: {
        flex: 2
    },
    col3: {
        flex: 3
    },
    col4: {
        flex: 4
    },
    col5: {
        flex: 5
    },
    col6: {
        flex: 6
    },
    col7: {
        flex: 7
    },
    col8: {
        flex: 8
    },
    col9: {
        flex: 9
    },
    col10: {
        flex: 10
    },
    col11: {
        flex: 11
    },
    col12: {
        flex: 12
    },
    imageFluid: {
        maxWidth: "90%",
        maxHeight: "90%"
    },
    textCenter: {
        textAlign: "center"
    },
    nameText: {
        fontSize: "3rem",
        fontWeight: "bold",
        margin: "1.5em 0"
    },
    specialtyText: { 
        fontSize: "3rem",
        fontWeight: 300,
        margin: "1.67em 0" 
    },
    figCaption: {
        textAlign: "center",
        marginBottom: ".5rem",

    },
    figure: {
        margin: "1rem auto"
    },
    leftBottomView: {
        flex: 4,
        paddingRight: "1rem",
        borderRight: "1px solid black"
    },
    listGroup:{
        listStyleType: "none"
    },
    listGroupItem: {
        paddingVertical: "0.5rem",
        paddingHorizontal: "1rem",
        marginBottom: ".5rem"
    },
    skillsListGroupItem: {
        paddingVertical: "0.5rem",
        paddingHorizontal: "1rem",
        marginLeft: ".5rem"
    },
    languagesListItem: {
        marginBottom: ".5rem"
    }
});

export default function Preview (props) {
  return (<View style={styles.col7}>
    <View style={styles.previewContainer} id={props.id}>
      <View style={styles.row}>
        {props.state.headshot && <View style={styles.col3}>
          <Image src={props.state.headshot} alt="" style={styles.imageFluid} />
        </View>}
        <View style={StyleSheet.compose(styles.col12, styles.textCenter)}>
          <Text style={styles.nameText}>{props.state.name}</Text>
          <Text style={styles.specialtyText}>{props.state.specialty}</Text>
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
      <View style={styles.row}>
        <View style={styles.leftBottomView} >
          {props.state.courses.length > 0 && <figure style={styles.figure}>
            <figcaption style={styles.figCaption}>Education</figcaption>
          <ul style={styles.listGroup} >
          {props.state.courses.map((c, i) => {
             return (<li style={styles.listGroupItem} key={i}>
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
          {props.state.languages.length > 0 && <figure className="my-3">
            <figcaption className="display-6 mb-2 text-center">Languages</figcaption>
            <ul className="">{props.state.languages.map((lang, i) => {
              return (<li className="mb-2" key={i}><strong>{lang.lang}</strong>  {lang.level}</li>);
            })}</ul>
          </figure>}
        </View>
        <div className="col-8 ps-3">
          {props.state.bio && <figure className="my-3">
            <figcaption className="display-6 mb-2 text-center">Summary</figcaption>
              <div className="multiline">{props.state.bio}</div>
            </figure>}
          {props.state.skills.length > 0 && <figure className="my-3">
            <figcaption className="display-6 mb-2 text-center">Skills</figcaption>
            <ul className="list-group list-group-flush text-center">{props.state.skills.map((skill, i) => {
              return (<li className="list-group-item ms-2" key={i}>{skill}</li>);
            })}</ul>
          </figure>}
          {props.state.workplaces.length > 0 && <figure className="my-3">
            <figcaption className="display-6 mb-2 text-center">Work Experience</figcaption>
          <ul className="list-group list-group-flush">
          {props.state.workplaces.map((j, i) => {
             return (<li className="list-group-item mb-2" key={i}>
                 <div>
                    <p className="mb-1 fw-bold">{j.workplace}</p>
                    <p className="mb-2 lead">{j.position}</p>
                    <div className="multiline mb-2">{j.description}</div>
                    <small className="fst-italic">{j.dates}</small>
                 </div>
               </li>
             );
          })}
          </ul>
          </figure>}
        </div>
      </View>
    </View>
    <div className="text-center my-5">
      <button className="btn btn-primary btn-lg" onClick={props.state.downloadHtml2Pdf}>Save</button>
    </div>  
  </View>)
}