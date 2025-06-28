import { siteConfig } from '@/config/site';
import ContactForm from '../../components/ContactForm';

const page = () => {
    return (
        <div className='flex flex-col sm:flex-row'>
            <div className='w-full sm:w-1/2'>
                <h2 className="font-bold text-3xl">
                    Contact
                </h2>

                <p>
                    Looking forward to hearing from you
                </p>

                <div className='pt-8'>
                    <p className="font-bold">
                        Phone
                    </p>
                    <p className="text-sm">
                        {siteConfig.footer.phone}
                    </p>
                </div>

                <div className='py-8'>
                    <p className="font-bold">
                        Email
                    </p>
                    <p className="text-sm">
                        {siteConfig.footer.email}
                    </p>
                </div>

            </div>
            
            <div className='w-full sm:w-1/2'>
                <ContactForm />
            </div>



        </div>
    );
}

export default page;