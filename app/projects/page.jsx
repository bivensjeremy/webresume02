import { Image } from "@heroui/image";
import { projectData } from "./projectData";
import { Link } from "@heroui/link";


const page = () => {
    return (
        <div className='flex flex-col'>
            <div className='w-full pb-8'>
                <h2 className="font-bold text-3xl">
                    Projects
                </h2>
            </div>
            
            <div className="">
                {projectData.reverse().map((project, idx) => (
                    <Link color="foreground" href={project.link} key={idx} isExternal isBlock className="flex flex-col md:flex-row gap-8 py-6">
                        <div className="w-full md:w-1/2">
                            <p className="font-bold text-xl pb-4">{project.title}</p>
                            <p className="max-w-md">{project.description}</p>
                        </div>

                        <div className="w-full md:w-1/2 h-48 relative flex flex-col">
                            <Image
                                src={project.icon}
                                alt="Project icon"
                                className="w-full lg:w-3/5 self-end h-full object-cover"
                                removeWrapper
                            />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default page;