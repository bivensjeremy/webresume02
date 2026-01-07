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
                    <p className="text-sm">
                        {siteConfig.footer.phone}
                    </p>
                </div>

                <div>
                    <p className="font-bold">
                        Email
                    </p>
                    <p className="text-sm">
                        {siteConfig.footer.email}
                    </p>
                </div>

                <div>
                    <p className="font-bold">
                        Follow Me
                    </p>

                    <div className="gap-4 flex">
                        <Link href={siteConfig.links.facebook} color="foreground">
                            <FaFacebook className="w-5 h-auto" color="bg-red-500" />
                        </Link>

                        <Link href={siteConfig.links.instagram} color="foreground">
                            <FaInstagram className="w-5 h-auto" />
                        </Link>

                        <Link href={siteConfig.links.website} color="foreground">
                            <FaShop className="w-5 h-auto" />
                        </Link>

                        <Link href={siteConfig.links.business} color="foreground">
                            <FaGlobe className="w-5 h-auto" />
                        </Link>
                    </div>
                </div>

                <div className="my-auto">
                    <p className="text-sm">
                        &copy; {new Date().getFullYear()} Bivens Blueprint, LLC
                    </p>
                    
                </div>
            </div>
        </div>
    );
}

export default Footer;