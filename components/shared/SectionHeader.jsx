export default function SectionHeader({ title, subtitle, centered = true }) {
  return (
    <div className={`max-w-2xl mb-12 ${centered ? 'mx-auto text-center' : ''}`}>
      <h2 className="text-3xl sm:text-4xl font-light tracking-tight" style={{ color: 'var(--foreground)' }}>
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
