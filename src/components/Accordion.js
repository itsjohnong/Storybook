import PropTypes from "prop-types"
import { useState } from 'react';

function Accordion({}) {

  const dummyText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
  ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
  fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
  anim id est laborum.`

  const body = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }

  const container = {
    display: "flex",
    flexDirection: "column",
    width: "600px",
  }

  const header = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid #F5F5F5"
  }

  const leftHeader = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start"
  }

  const rightHeader = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end"
  }

  const information = {
    backgroundColor: "#F5F5F5",
    padding: "5px"
  }

  const [openEx1, setOpenEx1] = useState(false);
  const [openEx2, setOpenEx2] = useState(false);
  const [openEx3, setOpenEx3] = useState(false);

  return (
    <div style={body}>

      <div style={container} onClick={() => openEx1 ? setOpenEx1(false) : setOpenEx1(true)}>
        <div style={header}>
          <div style={leftHeader}>
            <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M13 46q-1.2 0-2.1-.9-.9-.9-.9-2.1V5q0-1.2.9-2.1.9-.9 2.1-.9h22q1.2 0 2.1.9.9.9.9 2.1v38q0 1.2-.9 2.1-.9.9-2.1.9Zm0-4.5V43h22v-1.5Zm0-3h22v-29H13Zm0-32h22V5H13Zm0 0V5v1.5Zm0 35V43Z"/></svg>
            <div style={{display: "flex", alignItems: "center", fontSize: "20px"}}>Example 1</div>
          </div>
          <div style={rightHeader}>
            {openEx1 ?
              <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="m24 30.8-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z"/></svg>
              :<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="m18.75 36-2.15-2.15 9.9-9.9-9.9-9.9 2.15-2.15L30.8 23.95Z"/></svg>
            }
          </div>
        </div>
        {
          openEx1 ?
          <div style={information}>
          {dummyText}
          </div>:
          <div></div>
        }
      </div>

      <div style={container} onClick={() => openEx2 ? setOpenEx2(false) : setOpenEx2(true)}>
        <div style={header}>
          <div style={leftHeader}>
            <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M16.4 42H9q-1.2 0-2.1-.9Q6 40.2 6 39V24q0-3.75 1.425-7.025 1.425-3.275 3.85-5.7 2.425-2.425 5.7-3.85Q20.25 6 24 6q3.75 0 7.025 1.425 3.275 1.425 5.7 3.85 2.425 2.425 3.85 5.7Q42 20.25 42 24v15q0 1.2-.9 2.1-.9.9-2.1.9h-7.4V27.2H39V24q0-6.25-4.375-10.625T24 9q-6.25 0-10.625 4.375T9 24v3.2h7.4Zm-3-11.8H9V39h4.4Zm21.2 0V39H39v-8.8Zm0 0H39h-4.4Zm-21.2 0H9Z"/></svg>
            <div style={{display: "flex", alignItems: "center", fontSize: "20px"}}>Example 2</div>
          </div>
          <div style={rightHeader}>
            {openEx2 ?
              <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="m24 30.8-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z"/></svg>
              :<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="m18.75 36-2.15-2.15 9.9-9.9-9.9-9.9 2.15-2.15L30.8 23.95Z"/></svg>
            }
          </div>
        </div>
        {
          openEx2 ?
          <div style={information}>
          {dummyText}
          </div>:
          <div></div>
        }
      </div>

      <div style={container} onClick={() => openEx3 ? setOpenEx3(false) : setOpenEx3(true)}>
        <div style={header}>
          <div style={leftHeader}>
            <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M7.35 29.2q-2.25 0-3.8-1.55Q2 26.1 2 23.85t1.55-3.8q1.55-1.55 3.8-1.55v-6.15q0-1.2.9-2.1.9-.9 2.1-.9h8.3q0-2.25 1.55-3.8Q21.75 4 24 4t3.8 1.55q1.55 1.55 1.55 3.8h8.3q1.2 0 2.1.9.9.9.9 2.1v6.15q2.25 0 3.8 1.55Q46 21.6 46 23.85t-1.55 3.8q-1.55 1.55-3.8 1.55V39q0 1.2-.9 2.1-.9.9-2.1.9h-27.3q-1.2 0-2.1-.9-.9-.9-.9-2.1Zm9.8-5q.85 0 1.425-.575.575-.575.575-1.425 0-.85-.575-1.425Q18 20.2 17.15 20.2q-.85 0-1.425.575-.575.575-.575 1.425 0 .85.575 1.425.575.575 1.425.575Zm13.7 0q.85 0 1.425-.575.575-.575.575-1.425 0-.85-.575-1.425-.575-.575-1.425-.575-.85 0-1.425.575-.575.575-.575 1.425 0 .85.575 1.425.575.575 1.425.575ZM15.6 33.75h16.8v-3H15.6ZM10.35 39h27.3V12.35h-27.3Zm0 0V12.35 39Z"/></svg>
            <div style={{display: "flex", alignItems: "center", fontSize: "20px"}}>Example 3</div>
          </div>
          <div style={rightHeader}>
            {openEx3 ?
              <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="m24 30.8-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z"/></svg>
              :<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="m18.75 36-2.15-2.15 9.9-9.9-9.9-9.9 2.15-2.15L30.8 23.95Z"/></svg>
            }
          </div>
        </div>
        {
          openEx3 ?
          <div style={information}>
          {dummyText}
          </div>:
          <div></div>
        }
      </div>

    </div>
  )
}

Accordion.propTypes = {

}

export default Accordion