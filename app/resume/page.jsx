import { resumeData } from './resumeData';
import { ResumeLottie } from '../../components/ResumeLottie';

const page = () => {
    return (
        <div className='flex flex-col sm:flex-row'>
            <div className='w-full sm:w-1/2 pb-8'>
                <h2 className="font-bold text-3xl">
                    Resume
                </h2>

                <div className='pt-8'>
                    <p className="text-xl font-bold">
                        Work Experience
                    </p>
                </div>

                <div>
                    <ResumeLottie />
                </div>
            </div>
            
            <div className="w-full sm:w-1/2">
                {resumeData.map(({ id, year, jobTitle, desc }) => (
                    <div key={id} className="flex flex-col sm:flex-row gap-3 pb-8 w-full">
                        {/* Year block: doesn't grow */}
                        <div className="flex-shrink-0 min-w-24">
                            <p className="line-clamp-1 italic">{year}</p>
                        </div>

                        {/* Job info block: fills remaining space */}
                        <div className="flex-grow">
                            <p className="font-bold text-lg">{jobTitle}</p>
                            <p>{desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default page;