import './AnimatedCard.css';

export default function AnimatedCard({ children, onClick, className = '' }) {
  return (
    <div 
      className={`animated-card ${className}`} 
      onClick={onClick}
      role={onClick ? 'button' : 'region'}
      tabIndex={onClick ? 0 : undefined}
    >
      <div className="card-content">
        {children}
      </div>
    </div>
  );
}
