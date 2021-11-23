import React, { useState, useEffect } from "react";
import MUIDataTable from "mui-datatables";
import { ThemeProvider } from "@mui/material/styles";
import nbaData from "../../server/nba_event.json";
import { getMuiTheme } from "./lib";
/*
  ToDo: add useEffect and useState
  create function to push tradeable objects into an array of objects for the table
*/

function Table() {
  const [entities, setEntities] = useState([]);

  const getEntities = () => {
    const allEntities = nbaData.event.tradeables.map((tradeable) => {
      let entity = {
        playerName: '',
        position: '',
        projectedFantasyPoints: "Projection unavailable",
        actualFantasyPoints: "Earned points unavailable",
        estimatedPrice: "Price unavailable",
      };
      try {
        if (tradeable.entity.name) {
          entity.playerName = tradeable.entity.name;
        }
        if (tradeable.entity.position) {
          entity.position = tradeable.entity.position;
        }
        if (tradeable.points.projected || tradeable.points.projected === 0) {
          entity.projectedFantasyPoints = tradeable.points.projected;
        }
        if (tradeable.points.scored || tradeable.points.scored === 0) {
          entity.actualFantasyPoints = tradeable.points.scored;
        }
        if (tradeable.price.estimated || tradeable.price.estimated === 0) {
          entity.estimatedPrice = tradeable.price.estimated;
        }
        return entity;
      } catch {
        console.log("Failure to retrieve tradeables from server.");
      }
    });
    return allEntities;
  };

  useEffect(() => {
    setEntities(getEntities());
  }, []);

  const columns = [
    {
      name: "playerName",
      label: "Name",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "position",
      label: "Position",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "projectedFantasyPoints",
      label: "Projected fantasy points",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "actualFantasyPoints",
      label: "Actual fantasy points",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "estimatedPrice",
      label: "Estimated price ($)",
      options: {
        filter: true,
        sort: true,
      },
    },
  ];

  const options = {
    filterType: "checkbox",
  };
  return (
    <ThemeProvider theme={getMuiTheme()}>
      <MUIDataTable
        title={nbaData.event.name}
        data={entities}
        columns={columns}
        options={options}
      />
    </ThemeProvider>
  );
}

export { Table };
