import './_group.css';

const BG_URL = "https://images.unsplash.com/photo-1535016120720-40c646be5580?w=1600&h=900&fit=crop";
const PHOTO_URL = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=700&fit=crop&crop=top";

export function FullBleed() {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${BG_URL})`, backgroundSize: 'cover', backgroundPosition: 'center', filter: 'blur(3px) brightness(0.22) saturate(0.6)', transform: 'scale(1.06)' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(24,19,31,0.75) 0%, rgba(34,25,46,0.60) 55%, rgba(43,31,57,0.72) 100%)' }} />
      <div style={{ position: 'absolute', top: '-200px', right: '-160px', width: '680px', height: '680px', background: 'radial-gradient(circle, rgba(184,101,69,0.22) 0%, transparent 62%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-80px', left: '-80px', width: '520px', height: '520px', background: 'radial-gradient(circle, rgba(198,155,99,0.15) 0%, transparent 65%)', pointerEvents: 'none' }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '1180px', margin: '0 auto', padding: '120px 48px 80px', display: 'grid', gridTemplateColumns: '1fr auto', gap: '64px', alignItems: 'center', minHeight: '100vh' }}>
        <div>
          <div style={{ display: 'inline-block', background: 'rgba(184,101,69,0.16)', border: '1px solid rgba(216,141,109,0.28)', color: '#f0ba9b', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', padding: '6px 16px', borderRadius: '2px', marginBottom: '28px' }}>
            Paid Media & Growth Marketing
          </div>
          <h1 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(3rem, 7vw, 5.5rem)', color: '#fffdf9', lineHeight: 1.05, marginBottom: '12px' }}>
            Kim <em style={{ fontStyle: 'italic', color: '#c69b63' }}>Hoggan</em>
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.5)', fontWeight: 300, letterSpacing: '0.04em', marginBottom: '32px' }}>Performance Marketing Leader</p>
          <p style={{ maxWidth: '580px', color: 'rgba(255,255,255,0.75)', fontSize: '1.05rem', lineHeight: 1.75, marginBottom: '44px' }}>
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

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', inset: '-8px', borderRadius: '30px', background: 'linear-gradient(135deg, rgba(198,155,99,0.4) 0%, rgba(184,101,69,0.2) 100%)', filter: 'blur(14px)' }} />
            <img
              src={PHOTO_URL}
              alt="Kim Hoggan"
              style={{ width: 'clamp(180px, 20vw, 260px)', height: 'clamp(200px, 23vw, 300px)', objectFit: 'cover', objectPosition: 'center top', borderRadius: '26px', border: '1px solid rgba(235,200,152,0.36)', boxShadow: '0 24px 80px rgba(10,8,15,0.5)', position: 'relative', display: 'block' }}
            />
          </div>
          <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>Based in Salt Lake City</p>
        </div>
      </div>
    </div>
  );
}
