import { siteConfig } from "@/config/site";
import { Divider } from "@heroui/divider";
import { Link } from "@heroui/link";
import { FaFacebook, FaInstagram, FaGlobe, FaShop } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="pt-8">
            <Divider />

            <div className="flex flex-col sm:flex-row justify-between pt-12 pb-5 sm:text-center gap-6">
                <div>
                    <p className="font-bold">
                        Phone
                    </p>
                    <Link href="tel:4782808388" color="foreground" className="text-sm">
                        {siteConfig.footer.phone}
                    </Link>
                </div>

                <div>
                    <p className="font-bold">
                        Email
                    </p>
                    <Link href='mailto:admin@bivensblueprint.com' color="foreground" className="text-sm">
                        {siteConfig.footer.email}
                    </Link>
                </div>

                <div>
                    <p className="font-bold">
                        Follow Me
                    </p>

                    <div className="gap-4 flex">
                        <Link href={siteConfig.links.facebook} color="foreground">
                            <FaFacebook className="w-5 h-auto hover:text-[#1877F2]" color="bg-red-500" />
                        </Link>

                        <Link href={siteConfig.links.instagram} color="foreground">
                            <FaInstagram className="w-5 h-auto hover:text-[#DD2A7B]" />
                        </Link>

                        <Link href={siteConfig.links.website} color="foreground">
                            <FaShop className="w-5 h-auto hover:text-[#1E3A8A]" />
                        </Link>

                        <Link href={siteConfig.links.business} color="foreground">
                            <FaGlobe className="w-5 h-auto hover:text-[#cc0000]" />
                        </Link>
                    </div>
                </div>

                <div className="my-auto">
                    <p className="text-sm">
                        &copy; {new Date().getFullYear()} Blueprint Web Dev
                    </p>
                    
                </div>
            </div>
        </div>
    );
}

export default Footer;