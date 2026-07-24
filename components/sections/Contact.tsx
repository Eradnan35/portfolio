"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "../SectionHeading";
import { Mail, MapPin, Phone } from "lucide-react";
import emailjs from "@emailjs/browser";

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsError(false);
    setIsSuccess(false);

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error("EmailJS environment variables are missing.");
      setIsSubmitting(false);
      setIsError(true);
      return;
    }

    try {
      const templateParams = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setIsSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setIsSuccess(false), 3000);
    } catch (error) {
      console.log("EmailJS Error:", JSON.stringify(error));
      console.log(error);
      setIsError(true);
      setTimeout(() => setIsError(false), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-zinc-950/50">
      <div className="container mx-auto px-6 max-w-5xl">
        <SectionHeading
          title="Get In Touch"
          subtitle="Interested in working together or have a question? Drop a message."
        />

        <div className="grid md:grid-cols-5 gap-12 mt-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 space-y-8"
          >
            <h3 className="text-2xl font-bold text-foreground">Contact Information</h3>
            <p className="text-zinc-400">
              Feel free to reach out to me directly through email or connect with me on social platforms. I'm always open to discussing new projects, creative ideas, or opportunities.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                  <Mail className="text-accent" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-zinc-300">Email</h4>
                  <a href="mailto:adnan.kakar@example.com" className="text-zinc-400 hover:text-accent transition-colors">kakaradnan359@gmail.com</a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                  <Phone className="text-accent" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-zinc-300">Phone</h4>
                  <a href="tel:+1234567890" className="text-zinc-400 hover:text-accent transition-colors">+919284235586</a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                  <MapPin className="text-accent" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-zinc-300">Location</h4>
                  <p className="text-zinc-400">Jalgaon,Maharashtra</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-3 bg-zinc-900 border border-zinc-800 rounded-2xl p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-zinc-300">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-zinc-300">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-zinc-300">Your Message</label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none"
                  placeholder="Hello Adnan, I'd like to discuss..."
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full font-semibold rounded-lg px-4 py-3 transition-all disabled:opacity-50 disabled:cursor-not-allowed ${
                  isError ? "bg-red-500 text-white hover:bg-red-600" : "bg-accent text-accent-foreground hover:bg-accent/90"
                }`}
              >
                {isSubmitting ? "Sending..." : isSuccess ? "Message Sent!" : isError ? "Failed to send message" : "Send Message"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
