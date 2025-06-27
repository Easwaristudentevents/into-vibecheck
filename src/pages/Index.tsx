
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import TypewriterText from "@/components/TypewriterText";
import NavigationBar from "@/components/NavigationBar";
import FeedbackPopup from "@/components/FeedbackPopup";
import { Calendar, Github, Linkedin, Mail, Instagram } from "lucide-react";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 text-black font-sans relative overflow-x-hidden">
      {/* Radial gradient overlays for glassmorphism background */}
      <div className="fixed inset-0 bg-gradient-radial from-blue-200/30 via-transparent to-transparent pointer-events-none"></div>
      <div className="fixed top-1/4 left-1/4 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="fixed bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl pointer-events-none"></div>
      
      {/* Navigation Bar */}
      <NavigationBar />

      {/* Hero Section */}
      <section id="home" className={`min-h-screen flex items-center justify-center px-4 pt-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="glass-card p-12 max-w-5xl mx-auto text-center shadow-xl hover-lift">
          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight tracking-tight uppercase text-black">
            <TypewriterText 
              text="Your Campus, Your Stage." 
              speed={80}
              className="block"
            />
          </h1>
          <p className="text-2xl md:text-3xl font-bold mb-6 tracking-wide uppercase text-black">
            Manage. Discover. Participate.
          </p>
          <p className="text-lg mb-4 font-medium max-w-2xl mx-auto uppercase tracking-wider text-black/80">
            All Events, One Place
          </p>
          <p className="text-lg mb-12 font-medium max-w-2xl mx-auto text-black/80">
            SRM Easwari Engineering College
          </p>
          <Button 
            onClick={() => window.open('https://vibe-check-events.netlify.app/', '_blank')}
            className="bg-black text-white px-12 py-4 text-lg font-bold tracking-widest uppercase rounded-2xl hover:bg-gray-800 transition-all duration-300 w-full md:w-auto shadow-lg hover:shadow-xl animate-bounce-gentle"
          >
            Enter Platform
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 px-4 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="glass-card p-12 max-w-6xl mx-auto text-center shadow-xl hover-lift">
          <h2 className="text-4xl md:text-5xl font-black mb-8 uppercase tracking-wide text-black">
            What is<br />Vibe-Check?
          </h2>
          <p className="text-xl md:text-2xl font-bold mb-8 uppercase tracking-wider text-black">
            The Ultimate Events Platform for SRM Easwari Students.
          </p>
          <p className="text-lg font-medium max-w-4xl mx-auto leading-relaxed text-black/80">
            Discover cultural festivals. Join technical workshops. Connect with your campus community. All in one digital hub.
          </p>
        </div>
      </section>

      {/* Goals Section - Why Vibe-Check */}
      <section id="goals" className={`py-20 px-4 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="glass-card p-12 max-w-6xl mx-auto shadow-xl">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-20 uppercase tracking-wide text-black">
            Why Vibe-Check?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="glass-card p-6 text-center hover-lift">
              <h3 className="text-2xl font-black mb-4 uppercase tracking-wider text-black">Centralized</h3>
              <p className="text-lg font-medium text-black/80">All events from cultural to technical in one place</p>
            </div>
            <div className="glass-card p-6 text-center hover-lift">
              <h3 className="text-2xl font-black mb-4 uppercase tracking-wider text-black">Student-Made</h3>
              <p className="text-lg font-medium text-black/80">Made for the student by the student</p>
            </div>
            <div className="glass-card p-6 text-center hover-lift">
              <h3 className="text-2xl font-black mb-4 uppercase tracking-wider text-black">Real-Time</h3>
              <p className="text-lg font-medium text-black/80">Get instant notifications about event changes</p>
            </div>
            <div className="glass-card p-6 text-center hover-lift">
              <h3 className="text-2xl font-black mb-4 uppercase tracking-wider text-black">Discovery</h3>
              <p className="text-lg font-medium text-black/80">Find new events tailored to your interests</p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Developer Section */}
      <section className={`py-20 px-4 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="glass-card p-12 max-w-4xl mx-auto text-center shadow-xl hover-lift">
          <h2 className="text-4xl md:text-5xl font-black mb-16 uppercase tracking-wide text-black">
            Meet the<br />Developer
          </h2>
          <div className="mb-8">
            <div className="w-24 h-24 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <span className="text-2xl font-black">AK</span>
            </div>
            <h3 className="text-2xl font-black mb-2 uppercase tracking-wider text-black">Anish K M</h3>
            <p className="text-lg font-bold mb-6 uppercase tracking-wide text-black">Pre-final Year (AIADS)</p>
            <p className="text-lg font-medium mb-8 max-w-2xl mx-auto text-black/80">
              Passionate about creating digital solutions that bring campus communities together.
            </p>
            <div className="space-y-4 sm:space-y-0 sm:space-x-6 sm:flex sm:justify-center">
              <Button 
                onClick={() => window.open('https://github.com/AnishKMBtech', '_blank')}
                className="bg-white/20 backdrop-blur-sm text-black border border-white/30 px-8 py-3 text-sm font-bold tracking-widest uppercase rounded-2xl hover:bg-black hover:text-white transition-all duration-300 w-full sm:w-auto shadow-lg"
              >
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
              <Button 
                onClick={() => window.open('https://www.linkedin.com/in/anish-k-m-273670319/', '_blank')}
                className="bg-white/20 backdrop-blur-sm text-black border border-white/30 px-8 py-3 text-sm font-bold tracking-widest uppercase rounded-2xl hover:bg-black hover:text-white transition-all duration-300 w-full sm:w-auto shadow-lg"
              >
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </Button>
              <Button 
                onClick={() => window.open('mailto:anishbtechaiads@gmail.com', '_blank')}
                className="bg-white/20 backdrop-blur-sm text-black border border-white/30 px-8 py-3 text-sm font-bold tracking-widest uppercase rounded-2xl hover:bg-black hover:text-white transition-all duration-300 w-full sm:w-auto shadow-lg"
              >
                <Mail className="w-4 h-4 mr-2" />
                Contact
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Support Section */}
      <section id="contact" className={`py-20 px-4 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="glass-card p-12 max-w-4xl mx-auto text-center shadow-xl hover-lift">
          <h2 className="text-4xl md:text-5xl font-black mb-16 uppercase tracking-wide text-black">
            Contact & Support
          </h2>
          <div className="space-y-8 mb-12">
            <div>
              <h3 className="text-2xl font-black mb-4 uppercase tracking-wider text-black">Get in Touch</h3>
              <p className="text-lg font-medium mb-4 text-black/80">
                Have questions, suggestions, or need support? We're here to help!
              </p>
              <Button 
                onClick={() => window.open('mailto:easwaristudentevents@gmail.com', '_blank')}
                className="bg-white/20 backdrop-blur-sm text-black border border-white/30 px-8 py-3 text-sm font-bold tracking-widest uppercase rounded-2xl hover:bg-black hover:text-white transition-all duration-300 shadow-lg mr-4"
              >
                <Mail className="w-4 h-4 mr-2" />
                Email Us
              </Button>
              <Button 
                onClick={() => window.open('https://instagram.com/your_instagram', '_blank')}
                className="bg-white/20 backdrop-blur-sm text-black border border-white/30 px-8 py-3 text-sm font-bold tracking-widest uppercase rounded-2xl hover:bg-black hover:text-white transition-all duration-300 shadow-lg"
              >
                <Instagram className="w-4 h-4 mr-2" />
                Instagram
              </Button>
            </div>
            <div>
              <h3 className="text-2xl font-black mb-4 uppercase tracking-wider text-black">Feedback</h3>
              <p className="text-lg font-medium mb-6 text-black/80">
                Help us improve Vibe-Check by sharing your feedback
              </p>
              <FeedbackPopup />
            </div>
          </div>
        </div>
      </section>

      {/* Support Section (merged with contact) */}
      <section id="support" className={`py-20 px-4 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="glass-card p-12 max-w-4xl mx-auto text-center shadow-xl hover-lift">
          <h2 className="text-4xl md:text-5xl font-black mb-16 uppercase tracking-wide text-black">
            Support
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card p-6">
              <h3 className="text-2xl font-black mb-4 uppercase tracking-wider text-black">Technical Support</h3>
              <p className="text-lg font-medium mb-4 text-black/80">
                Experiencing technical issues? We're here to help resolve them quickly.
              </p>
              <FeedbackPopup 
                buttonText="Report Issue"
                defaultType="Problem"
                buttonClassName="bg-black text-white px-6 py-2 text-sm font-bold tracking-widest uppercase rounded-xl hover:bg-gray-800 transition-all duration-300 shadow-lg"
              />
            </div>
            <div className="glass-card p-6">
              <h3 className="text-2xl font-black mb-4 uppercase tracking-wider text-black">Feature Requests</h3>
              <p className="text-lg font-medium mb-4 text-black/80">
                Have an idea for a new feature? Let us know and help shape Vibe-Check!
              </p>
              <FeedbackPopup 
                buttonText="Suggest Feature"
                defaultType="Suggestion"
                buttonClassName="bg-black text-white px-6 py-2 text-sm font-bold tracking-widest uppercase rounded-xl hover:bg-gray-800 transition-all duration-300 shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-16 px-4 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="glass-card p-12 max-w-4xl mx-auto text-center shadow-xl">
          <div className="flex items-center justify-center space-x-3 mb-8">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
              <Calendar className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-wide text-black">
              Vibe-Check
            </h2>
          </div>
          <p className="text-lg font-medium mb-4 text-black/80">
            Made for SRM Easwari Engineering College, Chennai
          </p>
          <p className="text-lg font-medium mb-6 text-black/80">
            Powered by Supabase
          </p>
          <p className="text-sm font-bold uppercase tracking-widest text-black/60">
            © 2025 Vibe-Check • Stay Tuned for More Updates
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
