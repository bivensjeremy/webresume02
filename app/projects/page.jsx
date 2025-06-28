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
                {projectData.reverse().map((project) => (
                    <Link color="foreground" href={project.link} key={project.id} isExternal isBlock className="flex flex-col sm:flex-row gap-8 py-6">
                        <div className="w-full sm:w-1/2">
                            <p className="font-bold text-xl pb-8">{project.title}</p>
                            <p className="max-w-md">{project.description}</p>
                        </div>

                        <div className="w-full sm:w-1/2 h-48 relative">
                            <Image
                                src={project.icon}
                                alt="Project icon"
                                className="w-full h-full object-contain"
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