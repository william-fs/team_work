import { useEffect, useState } from "react";
import "./App.scss";
import { Header } from "./components/Header/Header";
import { Section1 } from "./components/Section1/Section1";
import { Section2 } from "./components/Section2/Section2";

export function App() {

  const [load, setLoad] = useState("");

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 500)
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setLoad("load");
    }, 700)
  }, [])

  return (
    <>
      <div className={`app ${load}`}>
        <Header />
        <Section1 />
        <Section2 />
      </div>
    </>
  )
}
