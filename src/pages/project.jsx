import { useState, useEffect } from "react";
import axios from "axios";

import Navbar from "../components/Navbar"
import TextSection from "../components/common/TextSection"
import { motion } from "motion/react";

import { MdOutlineSettingsApplications } from "react-icons/md";
import { projects } from "../utils/projects";
import ProjectCard from "../components/common/ProjectCard";
import Loading from "../components/common/Loading";

export default function project() {

    const [projectData, setProjectData] = useState([])
    const [loading, setLoading] = useState([])

    const fetch = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/project`);
            setProjectData(response.data.projects); 
            setLoading(false); 
        } catch (error) {
            console.error("Error fetching data:", error);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetch();
    })

    if (loading) {
        return (
            <Loading/>
        ); 
    }

    return (
        <div className="bg-fixed bg-center bg-no-repeat bg-cover pb-2 md:pb-5 bg-main-bg">
            <Navbar />
            <div className="mb-10 p-5 md:p-8">
                <TextSection icon={<MdOutlineSettingsApplications />} text="My Projects" />
                <motion.div
                    initial={{ clipPath: 'inset(0% 0% 100% 0%)' }}
                    animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
                    transition={{ duration: 1.5 }}
                    className="flex justify-center mt-4 md:mt-6"
                >
                    <img className="rounded-xl" src="https://media.giphy.com/media/jTNG3RF6EwbkpD4LZx/giphy.gif" alt="Coding GIF"/>
                </motion.div>
                <div className="mb-2 mt-6 flex w-full flex-wrap justify-center gap-4 sm:mb-4 md:mb-5 lg:mb-6 lg:gap-6">
                    {projectData.map((data, index) => (
                        <ProjectCard {...data} key={index} />
                    ))}
                </div>
            </div>
        </div>
    )
}