import React, { Fragment } from "react";
import GearList from "./GearList";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <Fragment>
      <GearList />
    </Fragment>
  );
}
