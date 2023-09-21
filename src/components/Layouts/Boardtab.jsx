// import React from 'react'
// import {Grid, Stack, Typography} from "@mui/material"




// export default function Boardtab({name, images, onImageDrop}) {

//     const [{canDrop, isOver}, drop] = useDrop({
//         accept: "IMAGE", 
//         drop: (item) => {
//             // image drop
//             const newImages = [...images, item.src]
//             onImageDrop(newImages)
//         },
//         collect: (monitor) => ({
//             isOver: monitor.isOver(),
//             canDrop: monitor.canDrop(),
//         })
//     })
//   return (
    
//          <Grid item xs={12} sm={6} md={4} ref={drop} >
//                 <Stack p={3} bgcolor='#000'>
//                     <Stack direction="row" alignItems="center">
//                             <Typography fontWeight={700} variant="h6">
//                                 {name}
//                             </Typography>
//                     </Stack>
//                     <div
//                         style={{
//                             border: canDrop ? "2px dashed #fff" : "2px solid transparent",
//                             minHeight: "100px",
//                             display: "flex",
//                             flexWrap: "wrap",
//                             justifyContent: "center",
//                             alignItems: "center",
//                         }}
//                         >
                        
//                         {images.map((image, index) => (
//                             <div key={index} style={{margin: "5px"}}>
//                                 <img src={image} alt={`Image ${index}`} draggable="true" onDragStart={(e) => onDragStart(e, image)}/>
//                             </div>
//                         ))}

//                     </div>
//                 </Stack>
//         </Grid>
    
//   )
// }
