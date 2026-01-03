import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiMail, FiSend, FiMapPin, FiPhone } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const contactInfo = [
        {
            icon: FiMail,
            title: 'Email',
            value: 'samiullahsamikhan290@gmail.com',
            link: 'mailto:samiullahsamikhan290@gmail.com',
        },
        {
            icon: FaWhatsapp,
            title: 'WhatsApp',
            value: '03499272290',
            link: 'https://wa.me/03499272290',
        },
        {
            icon: FiMapPin,
            title: 'Location',
            value: 'swat, Pakistan',
            link: null,
        },
    ];

    const socialLinks = [
        { icon: FaGithub, url: 'https://github.com/Samihaiderkhan', label: 'GitHub' },
        { icon: FaLinkedin, url: 'https://www.linkedin.com/in/samiullahsami/', label: 'LinkedIn' },
        { icon: FaTwitter, url: 'https://www.facebook.com/sami.ullah.sami.442522', label: 'Twitter' },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: 'easeOut' },
        },
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: '' }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }
        if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
        if (!formData.message.trim()) newErrors.message = 'Message is required';
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = validateForm();

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            console.log('Form submitted:', formData);
            setIsSubmitting(false);
            setSubmitSuccess(true);
            setFormData({ name: '', email: '', subject: '', message: '' });

            setTimeout(() => setSubmitSuccess(false), 3000);
        }, 1500);
    };

    return (
        <section id="contact" className="section-container">
            <motion.div
                ref={ref}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                variants={containerVariants}
            >
                {/* Section Header */}
                <motion.div variants={itemVariants} className="text-center mb-16">
                    <p className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-2">
                        Contact
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                        Get In <span className="gradient-text">Touch</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full mx-auto mb-6" />
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Have a project in mind or just want to chat? Feel free to reach out!
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {/* Left: Contact Information */}
                    <motion.div variants={itemVariants} className="space-y-6">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">
                            Contact Information
                        </h3>

                        {/* Contact Info Cards */}
                        <div className="space-y-6">
                            {contactInfo.map((info, index) => {
                                const Icon = info.icon;
                                const content = (
                                    <div className="flex items-start gap-5 p-6 bg-white rounded-xl border border-gray-200 hover:border-primary-300 transition-all duration-300 shadow-xl hover:shadow-2xl">
                                        <div className="p-4 bg-gradient-to-br from-gray-800 to-black rounded-xl shadow-lg">
                                            <Icon className="text-2xl text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-sm text-gray-500 mb-1 font-medium uppercase tracking-wide">{info.title}</p>
                                            <p className="text-gray-900 font-semibold text-base">{info.value}</p>
                                        </div>
                                    </div>
                                );

                                return info.link ? (
                                    <motion.a
                                        key={index}
                                        href={info.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ x: 5, y: -2 }}
                                    >
                                        {content}
                                    </motion.a>
                                ) : (
                                    <motion.div key={index}>{content}</motion.div>
                                );
                            })}
                        </div>

                        {/* Social Links */}
                        <div className="pt-8">
                            <h4 className="text-lg font-semibold text-gray-900 mb-4">
                                Follow Me
                            </h4>
                            <div className="flex items-center gap-4">
                                {socialLinks.map((social, index) => {
                                    const Icon = social.icon;
                                    return (
                                        <motion.a
                                            key={index}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.15, y: -5 }}
                                            whileTap={{ scale: 0.9 }}
                                            className="p-4 bg-white rounded-xl border border-gray-200 hover:border-primary-300 transition-all duration-300 shadow-lg hover:shadow-xl"
                                            aria-label={social.label}
                                        >
                                            <Icon className="text-2xl text-gray-700 hover:text-primary-600 transition-colors duration-300" />
                                        </motion.a>
                                    );
                                })}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Contact Form */}
                    <motion.div variants={itemVariants}>
                        <div className="card bg-white">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">
                                Send me a message
                            </h3>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                {/* Name Input */}
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 bg-gray-50 border ${errors.name ? 'border-red-500' : 'border-gray-200'
                                            } rounded-lg focus:outline-none focus:border-primary-500 transition-colors duration-300 text-gray-900`}
                                        placeholder="Your name"
                                    />
                                    {errors.name && (
                                        <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                                    )}
                                </div>

                                {/* Email Input */}
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 bg-gray-50 border ${errors.email ? 'border-red-500' : 'border-gray-200'
                                            } rounded-lg focus:outline-none focus:border-primary-500 transition-colors duration-300 text-gray-900`}
                                        placeholder="your.email@example.com"
                                    />
                                    {errors.email && (
                                        <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                                    )}
                                </div>

                                {/* Subject Input */}
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 bg-gray-50 border ${errors.subject ? 'border-red-500' : 'border-gray-200'
                                            } rounded-lg focus:outline-none focus:border-primary-500 transition-colors duration-300 text-gray-900`}
                                        placeholder="Subject"
                                    />
                                    {errors.subject && (
                                        <p className="mt-1 text-sm text-red-500">{errors.subject}</p>
                                    )}
                                </div>

                                {/* Message Input */}
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="5"
                                        className={`w-full px-4 py-3 bg-gray-50 border ${errors.message ? 'border-red-500' : 'border-gray-200'
                                            } rounded-lg focus:outline-none focus:border-primary-500 transition-colors duration-300 text-gray-900 resize-none`}
                                        placeholder="Your message..."
                                    />
                                    {errors.message && (
                                        <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                                    )}
                                </div>

                                {/* Submit Button */}
                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <motion.div
                                                animate={{ rotate: 360 }}
                                                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                                                className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                                            />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <FiSend />
                                            Send Message
                                        </>
                                    )}
                                </motion.button>

                                {/* Success Message */}
                                {submitSuccess && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-center"
                                    >
                                        Message sent successfully! I'll get back to you soon.
                                    </motion.div>
                                )}
                            </form>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;
