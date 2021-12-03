import { Link, Modal } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./TaskModal.css";

export default function TaskModal(props?: any) {
  return (
    <Modal open={props.open} onClose={props.onClose}>
      <Box className="modal-container">
        <h1>Title</h1>
        <div className="modal-description">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio
            debitis qui repudiandae blanditiis incidunt facilis ratione corrupti
            deleniti soluta dolores dolorum, at exercitationem facere non
            voluptates magnam aliquam officiis. Sed.
          </p>
        </div>
        <div className="modal-links">
          <Link className="modal-links_link" href="#">
            Document 1
          </Link>
          <Link className="modal-links_link" href="#">
            Document 2
          </Link>
        </div>
      </Box>
    </Modal>
  );
}
