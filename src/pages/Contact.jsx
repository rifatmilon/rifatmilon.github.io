import { MapPin, Mail, Github, Linkedin, BookOpen, Send } from 'lucide-react';
import AnimatedCard from '../components/AnimatedCard';

export default function Contact() {
  return (
    <div className="animate-fade-in">
      {/* Header */}
      <section className="section" style={{ backgroundColor: 'var(--bg-secondary)', paddingBottom: '3rem' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 className="gradient-text" style={{ marginBottom: '1rem' }}>Let's Connect</h1>
          <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
            Open to PhD opportunities, research collaborations, AI industry projects, and networking.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-2">
            {/* Contact Info */}
            <div>
              <h2 style={{ marginBottom: '2.5rem' }}>Contact Information</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
                {[
                  { Icon: Mail, label: 'Email', value: 'rifataknda.r@gmail.com', href: 'mailto:rifataknda.r@gmail.com' },
                  { Icon: MapPin, label: 'Location', value: 'Dhaka, Bangladesh', href: null },
                  { Icon: Github, label: 'GitHub', value: 'github.com/rifatmilon', href: 'https://github.com/rifatmilon' },
                  { Icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/rifatmilon', href: 'https://linkedin.com/in/rifatmilon' },
                  { Icon: BookOpen, label: 'Google Scholar', value: 'scholar.google.com/citations?user=qPC0U2gAAAAJ', href: 'https://scholar.google.com/citations?user=qPC0U2gAAAAJ' },
                ].map(({ Icon, label, value, href }, i) => (
                  <div key={i} style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                    <div style={{ background: 'var(--bg-secondary)', padding: '0.9rem', borderRadius: '50%', color: 'var(--accent-base)', flexShrink: 0 }}>
                      <Icon size={22} />
                    </div>
                    <div>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem', margin: '0 0 0.2rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{label}</p>
                      {href ? (
                        <a href={href} target={href.startsWith('mailto') ? undefined : '_blank'} rel="noopener noreferrer" style={{ color: 'var(--text-primary)', fontWeight: '500', wordBreak: 'break-all' }}>{value}</a>
                      ) : (
                        <p style={{ color: 'var(--text-primary)', fontWeight: '500', margin: 0 }}>{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <AnimatedCard>
              <h2 style={{ marginBottom: '2rem' }}>Send a Message</h2>
              <form action="https://formspree.io/f/xojpwnbw" method="POST">
                <div className="form-group">
                  <label className="form-label" htmlFor="name">Your Name</label>
                  <input type="text" id="name" name="name" className="form-input" required placeholder="Your full name" />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="email">Your Email</label>
                  <input type="email" id="email" name="email" className="form-input" required placeholder="your@email.com" />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="reason">Reason / Purpose for Connection *</label>
                  <select id="reason" name="reason" className="form-select" required defaultValue="">
                    <option value="" disabled>Select a reason…</option>
                    <option value="phd">PhD Opportunity / Research Collaboration</option>
                    <option value="job">Job / Industry AI Opportunity</option>
                    <option value="freelance">Freelance / Consulting Project</option>
                    <option value="networking">Networking / General Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="message">Your Message</label>
                  <textarea id="message" name="message" className="form-textarea" required placeholder="Hello Rifat…" style={{ minHeight: '140px' }}></textarea>
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                  Send Message <Send size={18} />
                </button>
              </form>
            </AnimatedCard>
          </div>
        </div>
      </section>
    </div>
  );
}
