import React, { Fragment } from "react";
import GearList from "./GearList";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <Fragment>
      <GearList />
      <br />
      <Link to="/addgear" className="btn btn-primary mt-4 shadow rounded">
        Add Gear
      </Link>
    </Fragment>
  );
}
