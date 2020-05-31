import React from "react";

import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

const DeletarProcesso = () => {
  return (
    <IconButton aria-label="delete">
      <DeleteIcon />
    </IconButton>
  );
};

export default DeletarProcesso;
