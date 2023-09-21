import React, { useState } from "react";
import { Topbar } from "../components/Layouts/Topbar";
import { Grid } from "@mui/material";
// import Boardtab from "../components/Layouts/Boardtab";

export default function VisionsScreen() {
  const statusMap = {
    todos: "ToDos",
    inProgress: "In Progress",
    completed: "Completed",
  };

  const initialImages = {
    todos: [
      "https://plus.unsplash.com/premium_photo-1690205362962-ceb0f0b1d951?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
      "https://images.unsplash.com/photo-1682687982107-14492010e05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=400&q=60",
    ],
    inProgress: [
      "https://images.unsplash.com/photo-1566228015668-4c45dbc4e2f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
      "https://plus.unsplash.com/premium_photo-1680732321258-34db0ae8ab22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJsdWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",
    ],
    completed: [
      "https://images.unsplash.com/photo-1598714673521-98d539a175f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGxhY2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60",
      "https://images.unsplash.com/photo-1568812315803-7f6419ff8d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGxhY2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60",
    ],
  };

  // manage state of images
  const [imageData, setImageData] = useState(initialImages);

  const onDragStart = (e, status, index) => {
    e.dataTransfer.setData("status", status);
    e.dataTransfer.setData("index", index);
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  const onDrop = (e, newStatus, newIndex) => {
    e.preventDefault();
    const status = e.dataTransfer.getData("status");
    const index = e.dataTransfer.getData("index");
    const draggedImage = imageData[status][index];

    // when image is droped in same status map
    if (status === newStatus && index !== newIndex) {
      // Remove the image from the old status
      const updatedOldStatusImages = imageData[status].filter(
        (_, i) => i !== parseInt(index)
      );

      // add image on new index
      const updatedStatusImages = [...updatedOldStatusImages];
      updatedStatusImages.splice(newIndex, 0, draggedImage);

      // update state
      setImageData((prevImageData) => ({
        ...prevImageData,
        [status]: updatedStatusImages,
      }));
    }

    // when dropped in differnt status map
    if (status !== newStatus) {
      // Remove the image from the old status
      const updatedOldStatusImages = imageData[status].filter(
        (_, i) => i !== parseInt(index)
      );

      // Add the image to the new status
      const updatedNewStatusImages = [...imageData[newStatus]];
      updatedNewStatusImages.splice(newIndex, 0, draggedImage);

      // Update old and new state
      setImageData((prevImageData) => ({
        ...prevImageData,
        [status]: updatedOldStatusImages,
        [newStatus]: updatedNewStatusImages,
      }));
    }
  };

  //   move images within status

  const moveImageWithinStatus = (status, fromIndex, toIndex) => {
    const statusImages = [...imageData[status]];
    const [movedImage] = statusImages.splice(fromIndex, 1);
    statusImages.splice(toIndex, 0, movedImage);
    setImageData((prevImageData) => ({
      ...prevImageData,
      [status]: statusImages,
    }));
  };

  return (
    <>
      <Topbar />
      <Grid container px={4} mt={5} spacing={2}>
        {/* {topics.map((topic, index)=>(
            <Grid item xs={12} sm={6} md={4} key={topic}>
                <Stack p={3} bgcolor='#000'>
                    <Stack direction="row" alignItems="center">
                            <Typography fontWeight={700} variant="h6">
                                {topic}
                            </Typography>
                        </Stack>
                </Stack>
            </Grid>
        ))} */}

        {Object.keys(statusMap).map((status) => (
          <div
            key={status}
            onDragOver={onDragOver}
            onDrop={(e) => onDrop(e, status)}
            style={{ flex: "1", minWidth: "200px", padding: "8px" }}
            // name={statusMap[status]}

            // images={imageData[status]}
            // onImageDrop={(newImages) => {
            //   // update images when dropped
            //   setImageData((prevImageData) => ({
            //     ...prevImageData,
            //     [status]: newImages,
            //   }));
            // }}
          >
            <h2>{statusMap[status]}</h2>
            {imageData[status].map((image, index) => (
              <div
                key={index}
                draggable
                onDragStart={(e) => onDragStart(e, status, index)}
                style={{ cursor: "grab" }}
                onDragEnd={() => setImageData(imageData)}
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => {
                  e.preventDefault();
                  const fromIndex = parseInt(e.dataTransfer.getData("index"));
                  moveImageWithinStatus(status, fromIndex, index);
                }}
                style={{
                  cursor: "grab",
                  border: "1px solid #ddd",
                  padding: "8px",
                  marginBottom: "4px",
                }}
              >
                <div
                  style={{
                    paddingBottom: "100%", // 1:1 aspect ratio (adjust as needed)
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={image}
                    alt={`Image ${index}`}
                    style={{
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                  />
                </div>
              </div>
            ))}
          </div>
        ))}
      </Grid>
    </>
  );
}
