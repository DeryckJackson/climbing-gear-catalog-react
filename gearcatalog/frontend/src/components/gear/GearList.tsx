import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { getGear, deleteGear } from "../../actions/gear-list";
import { Link } from "react-router-dom";
import LinkButton from "../layout/LinkButton";
import { DeleteGear, GetGear } from "../../actions/actions.types";
import { Gear } from "./types";
import { RootReducerState } from "../../reducers/reducer.types";

type GearListProps = {
  deleteGear: DeleteGear,
  getGear: GetGear,
  gearList: Array<Gear>,
  token: string,
};

const GearList = ({ deleteGear, getGear, gearList, token}: GearListProps) => {
  useEffect(() => {
    getGear(token);
  }, [token]);

  if (gearList.length == 0) {
    return (
      <Fragment>
        <div
        className="card card-body justify-content-center shadow mt-2"
        >
          <h2 className="mt-1">Gear List</h2>
          <p>No gear yet.</p>
          <Link to="/addgear">
            <button className="btn btn-primary mt-4 shadow">
              Add Gear
            </button>
          </Link>
        </div>
      </Fragment>
    );
  }
  return (
    <Fragment>
      <div className="card shadow mt-2">
        <div className="card-body">
          <h2 className="mt-1">Gear List</h2>
          {gearList.map((gear) => (
            <div
              className="card border-primary d-inline-flex m-2 shadow"
              key={gear.id}
              style={{ width: "15rem" }}
            >
              <div className="card-header">
                <strong>{gear.name}</strong>
              </div>
              <div className="card-body">
                <p className="card-text">Brand: {gear.brand} </p>
                <hr />
                <Link
                  to={"gear/" + gear.id}
                  className="btn-primary btn-sm btn mr-1"
                >
                  View
                </Link>
                <button
                  onClick={() => deleteGear(gear.id, token)}
                  className="btn-danger btn btn-sm float-right"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
          <br />
          <div>
            <LinkButton to="/addgear" className="btn btn-primary mt-4">
              Add Gear
            </LinkButton>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

type MapStateToProps = {
  gearList: Array<Gear>,
  token: string | null,
};

export const mapStateToProps = (state: RootReducerState): MapStateToProps => {
  return {
    gearList: state.gearList.gearList,
    token: state.auth.token,
  };
};

export default connect(mapStateToProps, { getGear, deleteGear })(
  GearList
);
