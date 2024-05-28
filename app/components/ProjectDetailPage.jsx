// "use client";
// import React, { useEffect, useState } from "react";
// import { useParams } from "next/navigation";
// import axios from "axios";
// import { errorMessage } from "../utils/msg";
// import { useSelector, useDispatch } from "react-redux";
// import { selectLoading, RsetLoading } from "../slices/mainSlices";

// const ProjectDetailPage = () => {
//   const dispatch = useDispatch();
//   const [projectData, setProjectData] = useState();

//   const loading = useSelector(selectLoading);

//   const params = useParams();

//   const fetchProject = async () => {
//     dispatch(RsetLoading(true));
//     const projectRes = await axios.post("/api/projects", { id: params.id });
//     console.log(projectRes);
//     if (projectRes.data.code === 200) {
//       setProjectData(projectRes.data.projects);
//       dispatch(RsetLoading(false));
//     } else {
//       dispatch(RsetLoading(false));
//       errorMessage("Network Error !");
//     }
//   };

//   useEffect(() => {
//     fetchProject();
//   }, []);

//   return (
//     <div>
//       {loading ? (
//         <div>loading...</div>
//       ) : (
//         <div id="Header">
//           <h1>{projectData && projectData.titleEn}</h1>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProjectDetailPage;
