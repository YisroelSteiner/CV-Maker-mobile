import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    formControl: {
      display: "block",
      width: "100%",
      padding: ".375rem .75rem",
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: 1.5,
      color: "#212529",
      appearance: "none",
      backgroundColor: "#fff",
      backgroundClip: "padding-box",
      border: "1px solid #dee2e6",
      borderRadius: "0.375rem"
    },
    imgThumbnail: {
      padding: ".25rem",
      backgroundColor: "#fff",
      border: "1px solid #dee2e6",
      borderRadius: "0.375rem",
      maxWidth: "100%",
      height: "auto"
     },
     btn: {
      fontWeight: 400,
      lineHeight: 1.5,
      display: "inline-block",
      textAlign: "center",
      textDecoration: "none",
      cursor: "pointer",
      userSelect: "none"
     },
     inputGroupText: {
      display: "flex",
      alignItems: "center",
      padding: ".375rem .75rem",
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: 1.5,
      textAlign: "center",
      whiteSpace: "nowrap",
      backgroundColor: "#f8f9fa",
      border: "1px solid #dee2e6",
      borderRadius: ".375rem"}
  });
  
export const colors = {
    primary: "#0d6efd",
    success: "#198754",
    danger: "#dc3545"
  };