import { DEFAULT_WTSP_URL } from '@fod/constants/data';
import { Mail, MapPin, Phone } from 'lucide-react'
import Link from 'next/link';
import React from 'react'
import { FaWhatsapp } from "react-icons/fa";

function ContactUs() {
    return (
        <div className='pt-16 p-4'>
            <div className='max-w-7xl mx-auto mb-16'>
                <div className='text-center'>
                    <h2 className='text-3xl font-bold text-fodBlue title-underline-orange'>Contact Our Branch</h2>
                    <p className='pt-8 text-xl font-medium text-fodOrange/80'>You&apos;re welcome to reach out to us by phone, email, or by visiting us in person.
                    </p>
                </div>
                <div className='mt-12 flex flex-col lg:flex-row gap-10 '>
                    <div className='lg:w-1/3 shadow border p-8 flex flex-col gap-8 rounded-lg'>
                        <h2 className='text-3xl font-semibold text-fodBlue'>FOD Hotels</h2>
                        <p className='text-lg flex items-center gap-4'> <MapPin size={40} />House No. - 1501, Sector 2, Bahadurgarh, Jhajjar, Haryana - 124507</p>
                        <p className='text-lg flex items-center gap-4'><Phone />+91 9779464405</p>
                        <p className='text-lg flex items-center gap-4'><Mail />info@fodhotels.com</p>
                        <div className='mt-4 w-full'>
                        <Link href={DEFAULT_WTSP_URL} target='_blank' rel="noopener noreferrer" className='flex gap-2 items-center justify-center p-2 px-4 bg-green-500 text-white font-semibold rounded-lg mx-auto'> <FaWhatsapp size={20} />Whatsapp Us</Link>
                        </div>
                    </div>
                    <div className='w-full'>
                    <iframe title='Google Map iFrame' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14000.130707675944!2d76.88914300486756!3d28.688669104895766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0bf0b05f6d0d%3A0xd130ab14c68e46c3!2sSector-02%2C%20Bahadurgarh%2C%20Haryana%20124507!5e0!3m2!1sen!2sin!4v1763490180469!5m2!1sen!2sin" className='rounded-lg w-full' width="700" height="450"  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs