import { MapPin, Mail, Send } from 'lucide-react';
import AnimatedCard from '../components/AnimatedCard';

export default function Contact() {
  return (
    <div className="container section animate-fade-in">
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 className="gradient-text">Let's Connect</h1>
        <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
        </p>
      </div>

      <div className="grid-2">
        <div>
          <h2 style={{ marginBottom: '2rem' }}>Contact Information</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
              <div style={{ background: 'var(--bg-secondary)', padding: '1rem', borderRadius: '50%', color: 'var(--accent-base)' }}>
                <Mail size={24} />
              </div>
              <div>
                <h3 style={{ marginBottom: '0.5rem' }}>Email Me</h3>
                <p>contact@rifatmilon.com</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
              <div style={{ background: 'var(--bg-secondary)', padding: '1rem', borderRadius: '50%', color: 'var(--accent-base)' }}>
                <MapPin size={24} />
              </div>
              <div>
                <h3 style={{ marginBottom: '0.5rem' }}>Location</h3>
                <p>Available Worldwide (Remote)</p>
              </div>
            </div>
          </div>
        </div>

        <AnimatedCard>
          <h2 style={{ marginBottom: '2rem' }}>Send a Message</h2>
          {/* Using Formspree endpoint format */}
          <form action="https://formspree.io/f/YOUR_FORMSPREE_ID" method="POST">
            <div className="form-group">
              <label className="form-label" htmlFor="name">Your Name</label>
              <input type="text" id="name" name="name" className="form-input" required placeholder="John Doe" />
            </div>
            
            <div className="form-group">
              <label className="form-label" htmlFor="email">Your Email</label>
              <input type="email" id="email" name="email" className="form-input" required placeholder="john@example.com" />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="reason">Reason / Purpose for Connection *</label>
              <select id="reason" name="reason" className="form-select" required defaultValue="">
                <option value="" disabled>Select a reason</option>
                <option value="job">Job / Recruitment Opportunity</option>
                <option value="freelance">Freelance Project</option>
                <option value="networking">Networking / Collaboration</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div className="form-group">
              <label className="form-label" htmlFor="message">Your Message</label>
              <textarea id="message" name="message" className="form-textarea" required placeholder="Hello Rifat..."></textarea>
            </div>
            
            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
              Send Message <Send size={20} />
            </button>
          </form>
        </AnimatedCard>
      </div>
    </div>
  );
}
