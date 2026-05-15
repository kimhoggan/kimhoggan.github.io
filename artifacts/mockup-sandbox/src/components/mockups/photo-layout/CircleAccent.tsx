import './_group.css';

const PHOTO_URL = "/__mockup/kim-hoggan.png";

export function CircleAccent() {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: 'linear-gradient(135deg, #18131f 0%, #22192e 42%, #2b1f39 100%)', minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
      <style>{`
        .ca-inner { max-width: 1180px; margin: 0 auto; padding: 120px 48px 80px; display: grid; grid-template-columns: 1fr clamp(260px, 28vw, 380px); gap: clamp(32px, 6vw, 88px); align-items: center; min-height: 100vh; position: relative; z-index: 1; }
        .ca-photo-wrap { display: flex; justify-content: center; align-items: center; }
        .ca-ring-outer { position: relative; display: inline-block; }
        .ca-ring-1 { position: absolute; inset: -16px; border-radius: 50%; border: 1px solid rgba(198,155,99,0.22); pointer-events: none; }
        .ca-ring-2 { position: absolute; inset: -32px; border-radius: 50%; border: 1px solid rgba(198,155,99,0.10); pointer-events: none; }
        .ca-img { width: clamp(220px, 26vw, 340px); height: clamp(220px, 26vw, 340px); object-fit: cover; object-position: center top; border-radius: 50%; border: 3px solid rgba(198,155,99,0.40); box-shadow: 0 32px 80px rgba(10,8,15,0.50), 0 0 0 1px rgba(235,200,152,0.08); display: block; }
        @media (max-width: 768px) {
          .ca-inner { grid-template-columns: 1fr; gap: 40px; padding: 100px 24px 60px; }
          .ca-photo-wrap { order: -1; }
          .ca-img { width: clamp(160px, 48vw, 220px); height: clamp(160px, 48vw, 220px); }
        }
      `}</style>
      <div style={{ position: 'absolute', top: '-200px', right: '-160px', width: '680px', height: '680px', background: 'radial-gradient(circle, rgba(184,101,69,0.20) 0%, transparent 62%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-80px', left: '-80px', width: '520px', height: '520px', background: 'radial-gradient(circle, rgba(198,155,99,0.13) 0%, transparent 65%)', pointerEvents: 'none' }} />

      <div className="ca-inner">
        <div>
          <div style={{ display: 'inline-block', background: 'rgba(184,101,69,0.16)', border: '1px solid rgba(216,141,109,0.28)', color: '#f0ba9b', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', padding: '6px 16px', borderRadius: '2px', marginBottom: '28px' }}>
            Paid Media & Growth Marketing
          </div>
          <h1 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(2.8rem, 6vw, 5.5rem)', color: '#fffdf9', lineHeight: 1.05, marginBottom: '12px' }}>
            Kim <em style={{ fontStyle: 'italic', color: '#c69b63' }}>Hoggan</em>
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.5)', fontWeight: 300, letterSpacing: '0.04em', marginBottom: '32px' }}>Performance Marketing Leader</p>
          <p style={{ maxWidth: '580px', color: 'rgba(255,255,255,0.72)', fontSize: '1.05rem', lineHeight: 1.75, marginBottom: '44px' }}>
            15+ years driving measurable growth across B2B and consumer brands. I build data-informed paid media systems that scale — from startup to enterprise.
          </p>
          <div style={{ display: 'flex', gap: '40px', marginBottom: '44px', flexWrap: 'wrap' }}>
            {[['$40M+', 'Ad Spend Managed'], ['3.2×', 'Avg. ROAS Lift'], ['60+', 'Campaigns Launched']].map(([num, label]) => (
              <div key={label}>
                <span style={{ fontFamily: "'DM Serif Display', serif", fontSize: '2.2rem', color: '#c69b63', lineHeight: 1, display: 'block' }}>{num}</span>
                <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '4px', display: 'block' }}>{label}</span>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <a href="#" style={{ background: 'linear-gradient(135deg, #b86545 0%, #d88d6d 100%)', color: 'white', padding: '13px 28px', borderRadius: '999px', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase' }}>View Work</a>
            <a href="#" style={{ border: '1px solid rgba(255,255,255,0.20)', color: 'rgba(255,255,255,0.84)', padding: '13px 28px', borderRadius: '999px', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Get In Touch</a>
          </div>
        </div>

        <div className="ca-photo-wrap">
          <div className="ca-ring-outer">
            <div className="ca-ring-1" />
            <div className="ca-ring-2" />
            <img className="ca-img" src={PHOTO_URL} alt="Kim Hoggan" />
          </div>
        </div>
      </div>
    </div>
  );
}
