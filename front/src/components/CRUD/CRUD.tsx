import { useState, useEffect } from "react";

export default function CRUD() {
  const http = async () => {
    const response = await fetch("http://localhost:7070/notes/");
    console.log(response);
  };

  http();

  return <div className="crud__container"></div>;
}
