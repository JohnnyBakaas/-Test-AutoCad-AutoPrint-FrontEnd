import React, { useState } from "react";
import styled from "styled-components";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./Table.css";

const statusOptions = [
  "Levert",
  "Produsert",
  "Under produksjon",
  "Klar for produksjon",
  "Under prosjektering",
  "Venter på svar",
  "Ikke påbegynt",
];

const lekeData = [
  {
    projectNumber: "P-10001",
    projectName: "Slottet",
    revDate: "05.03.2023",
    types: ["Hollow Core Slabs"],
    drawings: [
      {
        name: "Hollow Core Slabs 1.etg",
        status: "Klar for produksjon",
        author: "Johnny Bakaas",
        revDate: "28.04.2023",
      },
      {
        name: "Hollow Core Slabs 2.etg",
        status: "Venter på godkejnning",
        author: "Johnny Bakaas",
        revDate: "26.04.2023",
      },
    ],
  },
  {
    projectNumber: "P-10002",
    projectName: "Stortinget",
    revDate: "05.03.2023",
    types: ["Double Tee Slabs"],
    drawings: [
      {
        name: "Double Tee Slabs 1.etg",
        status: "Klar for produksjon",
        author: "Johnny Bakaas",
        revDate: "28.04.2023",
      },
      {
        name: "Double Tee Slabs 2.etg",
        status: "Venter på godkejnning",
        author: "Johnny Bakaas",
        revDate: "26.04.2023",
      },
    ],
  },
  {
    projectNumber: "P-10003",
    projectName: "Rådhuset",
    revDate: "07.03.2023",
    types: ["Precast Columns"],
    drawings: [
      {
        name: "Precast Columns 1.etg",
        status: "Klar for produksjon",
        author: "Ola Nordmann",
        revDate: "29.04.2023",
      },
      {
        name: "Precast Columns 2.etg",
        status: "Venter på godkejnning",
        author: "Ola Nordmann",
        revDate: "27.04.2023",
      },
      {
        name: "Precast Columns 3.etg",
        status: "Under produksjon",
        author: "Ola Nordmann",
        revDate: "25.04.2023",
      },
    ],
  },
  {
    projectNumber: "P-10004",
    projectName: "Operaen",
    revDate: "09.03.2023",
    types: ["Precast Beams"],
    drawings: [
      {
        name: "Precast Beams 1.etg",
        status: "Klar for produksjon",
        author: "Kari Nordmann",
        revDate: "30.04.2023",
      },
      {
        name: "Precast Beams 2.etg",
        status: "Venter på godkejnning",
        author: "Kari Nordmann",
        revDate: "28.04.2023",
      },
      {
        name: "Precast Beams 3.etg",
        status: "Under produksjon",
        author: "Kari Nordmann",
        revDate: "26.04.2023",
      },
      {
        name: "Precast Beams 4.etg",
        status: "Ferdig produsert",
        author: "Kari Nordmann",
        revDate: "24.04.2023",
      },
    ],
  },
  {
    projectNumber: "P-10005",
    projectName: "Biblioteket",
    revDate: "10.03.2023",
    types: ["Precast Stairs"],
    drawings: [
      {
        name: "Precast Stairs 1.etg",
        status: "Klar for produksjon",
        author: "Erik Nilsen",
        revDate: "01.05.2023",
      },
      {
        name: "Precast Stairs 2.etg",
        status: "Venter på godkejnning",
        author: "Erik Nilsen",
        revDate: "29.04.2023",
      },
      {
        name: "Precast Stairs 3.etg",
        status: "Under produksjon",
        author: "Erik Nilsen",
        revDate: "27.04.2023",
      },
      {
        name: "Precast Stairs 4.etg",
        status: "Ferdig produsert",
        author: "Erik Nilsen",
        revDate: "25.04.2023",
      },
      {
        name: "Precast Stairs 5.etg",
        status: "Venter på levering",
        author: "Erik Nilsen",
        revDate: "23.04.2023",
      },
    ],
  },
];

const StyledTable = styled.table`
  // Add your desired table styles here
`;

const StyledDrawingsTable = styled.table`
  // Add your desired nested table styles here
`;

const StyledTh = styled.th`
  width: 200px;
  border: solid red 1px;
`;

const StyledButton = styled.button`
  width: 100%;
`;

const Table = () => {
  const [expandedProjectIndex, setExpandedProjectIndex] = useState(null);

  const toggleDrawings = (index) => {
    if (expandedProjectIndex === index) {
      setExpandedProjectIndex(null);
    } else {
      setExpandedProjectIndex(index);
    }
  };

  const [drawingStatuses, setDrawingStatuses] = useState({});

  const handleStatusChange = (projectIndex, drawingIndex, newStatus) => {
    setDrawingStatuses((prevStatuses) => {
      const updatedStatuses = { ...prevStatuses };
      const key = `${projectIndex}-${drawingIndex}`;

      updatedStatuses[key] = newStatus;

      return updatedStatuses;
    });
  };

  const [publishingButtons, setPublishingButtons] = useState({});

  const handlePublish = (projectIndex, drawingIndex) => {
    const key = `${projectIndex}-${drawingIndex}`;
    setPublishingButtons((prevButtons) => ({
      ...prevButtons,
      [key]: true,
    }));

    // Simulate the publishing process
    setTimeout(() => {
      setPublishingButtons((prevButtons) => ({
        ...prevButtons,
        [key]: false,
      }));
    }, 3000);
  };

  return (
    <StyledTable>
      <thead>
        <tr>
          <StyledTh>Prosjekt nummer</StyledTh>
          <StyledTh>Prosjekt navn</StyledTh>
          <StyledTh>Rev. dato</StyledTh>
          <StyledTh>Typer</StyledTh>
        </tr>
      </thead>
      <tbody>
        {lekeData.map((project, index) => (
          <React.Fragment key={index}>
            <tr
              onClick={() => toggleDrawings(index)}
              style={{
                cursor: "pointer",
                backgroundColor: expandedProjectIndex === index ? "black" : "",
              }}
            >
              <td>{project.projectNumber}</td>
              <td>{project.projectName}</td>
              <td>{project.revDate}</td>
              <td>{project.types.join(", ")}</td>
            </tr>
            <TransitionGroup component={null}>
              {expandedProjectIndex === index && (
                <CSSTransition
                  classNames="drawings"
                  timeout={{
                    enter: 300,
                    exit: 0,
                  }}
                >
                  <tr>
                    <td colSpan="4">
                      <StyledDrawingsTable>
                        <thead>
                          <tr>
                            <StyledTh>Navn</StyledTh>
                            <StyledTh>Status</StyledTh>
                            <StyledTh>Konstruktør</StyledTh>
                            <StyledTh>Rev. dato</StyledTh>
                            <StyledTh>Publiser</StyledTh>
                          </tr>
                        </thead>
                        <tbody>
                          {project.drawings.map((drawing, drawingIndex) => {
                            const key = `${index}-${drawingIndex}`;
                            const currentStatus =
                              drawingStatuses[key] || drawing.status;
                            const isPublishing = publishingButtons[key]; // Add this variable declaration
                            return (
                              <tr key={drawingIndex}>
                                <td>{drawing.name}</td>
                                <td>
                                  <select
                                    value={currentStatus}
                                    onChange={(e) =>
                                      handleStatusChange(
                                        index,
                                        drawingIndex,
                                        e.target.value
                                      )
                                    }
                                  >
                                    {statusOptions.map((option) => (
                                      <option key={option} value={option}>
                                        {option}
                                      </option>
                                    ))}
                                  </select>
                                </td>
                                <td>{drawing.author}</td>
                                <td>{drawing.revDate}</td>
                                <td>
                                  <StyledButton
                                    disabled={isPublishing}
                                    onClick={() =>
                                      handlePublish(index, drawingIndex)
                                    }
                                  >
                                    {isPublishing ? "Publiserer" : "Publiser"}
                                  </StyledButton>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </StyledDrawingsTable>
                    </td>
                  </tr>
                </CSSTransition>
              )}
            </TransitionGroup>
          </React.Fragment>
        ))}
      </tbody>
    </StyledTable>
  );
};

export default Table;
