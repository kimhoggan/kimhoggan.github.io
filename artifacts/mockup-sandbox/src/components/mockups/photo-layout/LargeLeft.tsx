import './_group.css';

const PHOTO_URL = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=top";

export function LargeLeft() {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: 'linear-gradient(135deg, #18131f 0%, #22192e 42%, #2b1f39 100%)', minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '-200px', right: '-160px', width: '680px', height: '680px', background: 'radial-gradient(circle, rgba(184,101,69,0.20) 0%, transparent 62%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-80px', left: '-80px', width: '520px', height: '520px', background: 'radial-gradient(circle, rgba(198,155,99,0.13) 0%, transparent 65%)', pointerEvents: 'none' }} />

      <div style={{ display: 'grid', gridTemplateColumns: '340px 1fr', minHeight: '100vh', position: 'relative', zIndex: 1 }}>
        <div style={{ position: 'relative', overflow: 'hidden' }}>
          <img
            src={PHOTO_URL}
            alt="Kim Hoggan"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, transparent 60%, rgba(26,21,35,0.8) 100%)' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(26,21,35,0.4) 0%, transparent 40%)' }} />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', padding: '80px 72px 80px 56px' }}>
          <div>
            <div style={{ display: 'inline-block', background: 'rgba(184,101,69,0.16)', border: '1px solid rgba(216,141,109,0.28)', color: '#f0ba9b', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', padding: '6px 16px', borderRadius: '2px', marginBottom: '28px' }}>
              Paid Media & Growth Marketing
            </div>
            <h1 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(2.8rem, 5vw, 4.8rem)', color: '#fffdf9', lineHeight: 1.05, marginBottom: '12px' }}>
              Kim <em style={{ fontStyle: 'italic', color: '#c69b63' }}>Hoggan</em>
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.5)', fontWeight: 300, letterSpacing: '0.04em', marginBottom: '32px' }}>
              Performance Marketing Leader
            </p>
            <p style={{ maxWidth: '540px', color: 'rgba(255,255,255,0.72)', fontSize: '1rem', lineHeight: 1.75, marginBottom: '44px' }}>
              15+ years driving measurable growth across B2B and consumer brands. I build data-informed paid media systems that scale — from startup to enterprise.
            </p>
            <div style={{ display: 'flex', gap: '48px', marginBottom: '44px', flexWrap: 'wrap' }}>
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
        </div>
      </div>
    </div>
  );
}
