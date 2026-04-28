import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiMail, FiSend, FiMapPin } from 'react-icons/fi';
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
            value: 'khalilladla1213@gmail.com',
            link: 'mailto:khalilladla1213@gmail.com',
        },
        {
            icon: FaWhatsapp,
            title: 'WhatsApp',
            value: '03448657932',
            link: 'https://wa.me/03448657932',
        },
        {
            icon: FiMapPin,
            title: 'Location',
            value: 'Swat, Pakistan',
            link: null,
        },
    ];

    const socialLinks = [
        { icon: FaGithub, url: 'https://github.com/Ladla126', label: 'GitHub' },
        { icon: FaLinkedin, url: 'https://www.linkedin.com/in/khalil-ullah12/', label: 'LinkedIn' },
        { icon: FaTwitter, url: 'https://x.com/KhalilLadla1?t=uNaHbevc5IRYdUTZhKgBrg&s', label: 'Twitter' },
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

        try {
            const response = await fetch('https://formspree.io/f/myklqoyv', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitSuccess(true);
                setFormData({ name: '', email: '', subject: '', message: '' });
                setTimeout(() => setSubmitSuccess(false), 5000);
            } else {
                alert('Something went wrong. Please try again or email me directly.');
            }
        } catch (error) {
            console.error('Submission error:', error);
            alert('Something went wrong. Please check your connection.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="section-container relative">
            <motion.div
                ref={ref}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                variants={containerVariants}
            >
                {/* Section Header */}
                <motion.div variants={itemVariants} className="text-center mb-16">
                    <p className="text-sm font-bold text-primary-600 dark:text-primary-400 uppercase tracking-widest mb-2 font-sans">
                        Get In Touch
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
                        Let's <span className="gradient-text">Connect</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full mx-auto mb-6" />
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Have a project in mind or just want to chat? I'm always open to new opportunities!
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
                    {/* Left: Contact Information */}
                    <motion.div variants={itemVariants} className="space-y-8">
                        <h3 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">
                            Contact Information
                        </h3>

                        {/* Contact Info Cards */}
                        <div className="space-y-4 font-sans">
                            {contactInfo.map((info, index) => {
                                const Icon = info.icon;
                                const content = (
                                    <div className="flex items-center gap-6 p-6 glass-effect dark:glass-effect-dark rounded-3xl border border-white/20 dark:border-slate-800 hover:border-primary-500/50 transition-all duration-500 shadow-sm hover:shadow-2xl group">
                                        <div className="p-4 bg-slate-900 dark:bg-slate-800 rounded-2xl group-hover:scale-110 transition-transform duration-500 shadow-xl">
                                            <Icon className="text-2xl text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-[10px] text-slate-500 dark:text-slate-500 mb-1 font-black uppercase tracking-widest">{info.title}</p>
                                            <p className="text-slate-900 dark:text-white font-bold text-base truncate">{info.value}</p>
                                        </div>
                                    </div>
                                );

                                return info.link ? (
                                    <motion.a
                                        key={index}
                                        href={info.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ x: 10 }}
                                        className="block"
                                    >
                                        {content}
                                    </motion.a>
                                ) : (
                                    <div key={index}>{content}</div>
                                );
                            })}
                        </div>

                        {/* Social Links */}
                        <div className="pt-8">
                            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-6 uppercase tracking-widest text-center md:text-left font-sans">
                                Follow My Digital Footprint
                            </h4>
                            <div className="flex items-center justify-center md:justify-start gap-4">
                                {socialLinks.map((social, index) => {
                                    const Icon = social.icon;
                                    return (
                                        <motion.a
                                            key={index}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.1, y: -5 }}
                                            whileTap={{ scale: 0.9 }}
                                            className="p-5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-primary-500 dark:hover:text-primary-400 transition-all duration-300 shadow-sm"
                                            aria-label={social.label}
                                        >
                                            <Icon className="text-2xl" />
                                        </motion.a>
                                    );
                                })}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Contact Form */}
                    <motion.div variants={itemVariants}>
                        <div className="glass-effect dark:glass-effect-dark rounded-[2.5rem] p-8 md:p-10 shadow-2xl border border-white/40 dark:border-slate-800/50 backdrop-blur-2xl">
                            <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-8 uppercase tracking-tighter font-sans">
                                Send A Message
                            </h3>

                            <form onSubmit={handleSubmit} className="space-y-6 font-sans">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Name Input */}
                                    <div>
                                        <label htmlFor="name" className="block text-xs font-black text-slate-500 dark:text-slate-500 mb-2 uppercase tracking-widest">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className={`w-full px-5 py-4 bg-white/50 dark:bg-slate-900/50 border ${errors.name ? 'border-red-500' : 'border-slate-200 dark:border-slate-800'} rounded-2xl focus:outline-none focus:border-primary-500 transition-all duration-300 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 shadow-inner`}
                                            placeholder="John Doe"
                                        />
                                    </div>

                                    {/* Email Input */}
                                    <div>
                                        <label htmlFor="email" className="block text-xs font-black text-slate-500 dark:text-slate-500 mb-2 uppercase tracking-widest">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className={`w-full px-5 py-4 bg-white/50 dark:bg-slate-900/50 border ${errors.email ? 'border-red-500' : 'border-slate-200 dark:border-slate-800'} rounded-2xl focus:outline-none focus:border-primary-500 transition-all duration-300 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 shadow-inner`}
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                {/* Subject Input */}
                                <div>
                                    <label htmlFor="subject" className="block text-xs font-black text-slate-500 dark:text-slate-500 mb-2 uppercase tracking-widest">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className={`w-full px-5 py-4 bg-white/50 dark:bg-slate-900/50 border ${errors.subject ? 'border-red-500' : 'border-slate-200 dark:border-slate-800'} rounded-2xl focus:outline-none focus:border-primary-500 transition-all duration-300 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 shadow-inner`}
                                        placeholder="Project Collaboration"
                                    />
                                </div>

                                {/* Message Input */}
                                <div>
                                    <label htmlFor="message" className="block text-xs font-black text-slate-500 dark:text-slate-500 mb-2 uppercase tracking-widest">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="4"
                                        className={`w-full px-5 py-4 bg-white/50 dark:bg-slate-900/50 border ${errors.message ? 'border-red-500' : 'border-slate-200 dark:border-slate-800'} rounded-2xl focus:outline-none focus:border-primary-500 transition-all duration-300 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 resize-none shadow-inner`}
                                        placeholder="Hi Khalil, I'd like to talk about..."
                                    />
                                </div>

                                {/* Submit Button */}
                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    whileHover={{ scale: 1.02, y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full btn-primary py-4 rounded-2xl flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed text-base uppercase tracking-widest font-black"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <motion.div
                                                animate={{ rotate: 360 }}
                                                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                                                className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                                            />
                                            Processing...
                                        </>
                                    ) : (
                                        <>
                                            <FiSend className="text-xl" />
                                            Send Now
                                        </>
                                    )}
                                </motion.button>

                                {/* Success Message */}
                                {submitSuccess && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="p-4 bg-emerald-500/10 border border-emerald-500/50 rounded-2xl text-emerald-500 text-center font-bold text-sm"
                                    >
                                        Message sent successfully! I'll reply soon.
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
