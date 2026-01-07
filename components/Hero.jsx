import { Button } from "@heroui/button";
import { Link, LinkIcon } from "@heroui/link";
import clsx from "clsx";
import {Image} from "@heroui/image";
import NextImage from "next/image";
import { siteConfig } from "@/config/site";

const Hero = () => {
    // const bgColors = ['bg-yellow-500', 'bg-red-500', 'bg-cyan-500'];
    const bgColors = ['bg-amber-300', 'bg-rose-300', 'bg-sky-300'];
    return (
            <div className="flex lg:flex-row flex-col-reverse flex-1 m-auto gap-6 max-w-5xl">
                <div className="h-56 w-56 md:h-96 md:w-96 xl:h-[32rem] xl:w-[32rem] bg-[rgb(236,234,230)] rounded-full relative overflow-hidden m-auto flex items-center justify-center">
                    <NextImage 
                        src="/profile.jpeg"
                        alt="Worker image"
                        className="bottom-0 object-cover"
                        fill
                    />
                </div>

                <div className='m-auto'>
                    <h1 className='pt-12 pb-6 font-bold text-6xl'>
                        Hello
                    </h1>

                    <h1 className='text-2xl font-bold'>
                        A Bit About Me
                    </h1>

                    <p className='pb-8 max-w-sm text-justify'>
                        I created Blueprint Web Dev to help small businesses stand out with modern, high-quality websites. Too often, business sites are outdated and underperform. My goal is to change that by leveraging the latest technologies to build fast, reliable websites that not only look great but also deliver measurable results.
                    </p>

                    <div className="flex flex-row gap-2 sm:gap-6">
                        {siteConfig.navItems.map(({ label, href }, index) => (
                            <Link
                                key={label}
                                href={href}
                                color="foreground"
                                className={`text-md sm:text-xl font-bold border border-black rounded-full m-auto w-20 h-20 sm:w-32 sm:h-32 hover:text-gray-200 hover:border-gray-200 flex items-center justify-center text-center text-gray-900 ${bgColors[index % bgColors.length]}`}
                            >
                            {label}
                            </Link>
                        ))}
                    </div>
                </div>
                
            </div>
    );
}

export default Hero;