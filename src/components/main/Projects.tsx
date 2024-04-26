import React from 'react'
import ProjectCard from '../sub/ProjectCard'

const Projects = () => {
    return (
        <div className="flex flex-col items-center justify-center py-20" id='projects'>
            <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
                My Projects
            </h1>
            <div className='h-full w-full flex flex-col md:flex-row gap-10 px-10 text-justify'>
                <ProjectCard
                    src="/compro2.png"
                    title="Company Profile Twiscode"
                    description="Sebuah informasi dimana pengguna dapat melihat informasi terkait sebuah perusahaan yang bergerak di bidang IT"
                />
                <ProjectCard
                    src="/new.png"
                    title="Sistem Informasi Perekrutan Pegawai"
                    description="Sebuah Aplikasi Berbasis Web untuk melakukan proses perekrutan pada pegawai"
                />
                <ProjectCard
                    src="/expense.png"
                    title="Expense Tracker"
                    description="Sebuah aplikasi yang digunakan untuk melakukan CRUD pada trackers"
                />
            </div>
        </div>
    )
}

export default Projects