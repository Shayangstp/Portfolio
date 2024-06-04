"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import { errorMessage } from "../utils/msg";
import { useSelector, useDispatch } from "react-redux";
import { selectLoading, RsetLoading } from "../slices/mainSlices";
import { Button } from "@material-tailwind/react";
import { useRouter } from "next/navigation";

const ProjectDetailPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [projectData, setProjectData] = useState();

  const loading = useSelector(selectLoading);

  const params = useParams();

  const fetchProject = async () => {
    const projectRes = await axios.post("/api/projects", { id: params.id });
    console.log(projectRes);
    if (projectRes.data.code === 200) {
      setProjectData(projectRes.data.projects);
      dispatch(RsetLoading(false));
    } else {
      dispatch(RsetLoading(false));
      errorMessage("Network Error !");
    }
  };

  useEffect(() => {
    dispatch(RsetLoading(true));
    fetchProject();
  }, []);

  return (
    <div>
      {loading ? (
        <div>loading...</div>
      ) : (
        <div id="page" className="p-5">
          <div id="Header">
            <h1 className="text-[50px]">
              {projectData && projectData.titleEn}
            </h1>
            <div id="hashtags" className="flex gap-2 mb-3">
              {projectData &&
                projectData.hashtags.map((item, idx) => {
                  return (
                    <p
                      key={idx}
                      className="px-4 py-2 border dark:border-gray-700 border-gray-300 text-gray-700 dark:text-gray-300 rounded-2xl"
                    >
                      {item}
                    </p>
                  );
                })}
            </div>
            <hr />
          </div>
          <div id="desc" className="mt-3">
            <p className="mb-3 leading-6">
              {projectData && projectData.descEn}
            </p>
          </div>
          <div id="keyFeatures">
            <div id="keyFeatureTitle" className="text-[30px] ">
              Key Features and Functionalities:
            </div>
            <div1 className="flex flex-col gap-3 mb-4 leading-6">
              {projectData &&
                projectData.keyFeatures.map((item, idx) => {
                  return (
                    <li key={idx} className="mt-2">
                      {item}
                    </li>
                  );
                })}
            </div1>
          </div>
          <div id="tech">
            <div id="textTitle" className="text-[30px] ">
              Technological Foundation:
            </div>
            <div1 className="flex flex-col gap-3 mb-4">
              {projectData &&
                projectData.techs.map((item, idx) => {
                  return (
                    <li key={idx} className="mt-2">
                      {item}
                    </li>
                  );
                })}
            </div1>
          </div>
          <div id="benefits">
            <div id="textTitle" className="text-[30px] ">
              Benefits of {projectData && projectData.titleEn} :
            </div>
            <div className="flex flex-col gap-3 mb-4 leading-6">
              {projectData && projectData.benefits}
            </div>
          </div>
          <hr />
          <div className="flex justify-end mt-3 gap-3">
            <Button
              className="dark:bg-white text-white bg-black dark:text-black"
              onClick={() => {
                router.push(`${projectData.github}`);
              }}
            >
              GitHub
            </Button>
            <Button className="dark:bg-white text-white bg-black dark:text-black">
              Demo
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetailPage;
