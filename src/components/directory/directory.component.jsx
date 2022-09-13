import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectDirectorySections } from "../../redux/directory/directory.selectors";
import LoadingComponent from "../loading/loading.component";
import MenuItem from "./menu-item.component";

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections[0] !== undefined || sections[0] !== null ? (
        sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))
      ) : (
        <LoadingComponent />
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});
export default connect(mapStateToProps)(Directory);
