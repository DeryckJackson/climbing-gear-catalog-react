import React, { Fragment, useEffect, EffectCallback } from "react";
import { selectGear, deleteGear } from "../../actions/gear-list";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import LinkButton from "../layout/LinkButton";
import { Gear } from "./types";
import { RootReducerState } from "../../reducers/reducer.types";

type GearDetailProps = {
  deleteGear: (id: number, token: string) => void,
  selectGear: (id: number, token: string) => EffectCallback,
  selectedGear: Gear,
  token: string,
  match: {
    params: {
      id: number,
    },
  },
};

const GearDetail = ({
  deleteGear,
  selectGear,
  selectedGear,
  token,
  match: { params }
  }: GearDetailProps
  ) => {

  useEffect(() => {
    selectGear(params.id, token);
  }, [selectedGear.id]);

  return (
    <Fragment>
      <div 
      className="card card-body justify-content-center rounded shadow mt-2"
      >
        <h2 className="my-2">Gear Detail</h2>
        <div
          className="card border-primary rounded shadow mb-3"
          style={{ width: "30rem" }}
          key={selectedGear.id}
        >
          <div className="card-header">
            <strong>{selectedGear.name}</strong>
          </div>
          <div className="card-body">
            <p className="card-text">
              Description: <br />
              {selectedGear.desc}
            </p>
            <hr />
            <p className="card-text">Brand: {selectedGear.brand}</p>
            <hr />
            <p className="card-text">Weight: {selectedGear.weight_grams} g</p>
            <hr />
            <p className="card-text">Length: {selectedGear.length_mm} mm</p>
            <hr />
            <p className="card-text">Width: {selectedGear.width_mm} mm</p>
            <hr />
            <p className="card-text">Depth: {selectedGear.depth_mm} mm</p>
            <hr />
            <p className="card-text">
              Locking: {selectedGear.locking ? "Yes" : "No"}
            </p>
            <hr />
            <Link 
              to={"/editgear/" + selectedGear.id}
              className="btn btn-info rounded"
            >
              Edit
            </Link>
            <button
              onClick={() => deleteGear(selectedGear.id, token)}
              className="btn-danger btn float-right rounded" 
            >
              Delete
            </button>
          </div>
        </div>
        <div>
          <LinkButton to="/" className="btn btn-primary rounded">
            Home
          </LinkButton>
        </div>
      </div>
    </Fragment>
  );
};

type MapStateToProps = {
  selectedGear: Gear,
  token: string | null,
};

export const mapStateToProps = (state: RootReducerState
  ): MapStateToProps => {
  return {
    selectedGear: state.gearList.selectedGear,
    token: state.auth.token
  };
};

export default connect(mapStateToProps, { selectGear, deleteGear })(GearDetail);
