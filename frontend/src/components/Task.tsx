import { Button, Modal } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import TaskModal from "./TaskModal";

export default function Task(props: any) {
  console.log(props.task);
  const [modalOpen, setModalOpen] = useState(false);
  function handleOpen() {}
  return (
    <div>
      <div
        className={"task" + " " + props.className}
        onClick={() => setModalOpen(true)}
      >
        <p>{props.task.title}</p>
      </div>
      <TaskModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        task={props.task}
      ></TaskModal>
    </div>
  );
}
