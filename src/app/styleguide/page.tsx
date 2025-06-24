const navLinks = [
  { href: "#brand", label: "Brand Colors" },
  { href: "#typography", label: "Typography" },
  { href: "#buttons", label: "Buttons" },
  { href: "#inputs", label: "Inputs" },
  { href: "#spacing", label: "Spacing" },
  { href: "#radius", label: "Border Radius" },
  { href: "#links", label: "Links" },
];

const colorSwatches = [
  { name: "Primary", className: "bg-primary text-white" },
  { name: "Secondary", className: "bg-secondary text-white" },
  { name: "Accent", className: "bg-accent text-white" },
  { name: "Neutral", className: "bg-neutral text-neutral-foreground" },
  { name: "Background", className: "bg-background text-neutral-foreground border" },
  { name: "Surface", className: "bg-surface text-neutral-foreground border" },
  { name: "Success", className: "bg-success text-white" },
  { name: "Warning", className: "bg-warning text-white" },
  { name: "Error", className: "bg-error text-white" },
];

const spacingTokens = [
  { name: "xs", value: "0.5rem" },
  { name: "sm", value: "1rem" },
  { name: "md", value: "2rem" },
  { name: "lg", value: "4rem" },
  { name: "xl", value: "8rem" },
];

const radiusTokens = [
  { name: "sm", value: "0.25rem" },
  { name: "md", value: "0.5rem" },
  { name: "lg", value: "1rem" },
];

export default function StyleGuide() {
  return (
    <div className="min-h-screen bg-surface flex">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-64 border-r border-border bg-white/90 backdrop-blur px-6 py-10 sticky top-0 h-screen">
        <h2 className="text-2xl font-bold mb-8">Style Guide</h2>
        <nav className="flex flex-col gap-4">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} className="text-base font-medium text-muted hover:text-primary transition-colors">
              {link.label}
            </a>
          ))}
        </nav>
      </aside>
      {/* Main Content */}
      <main className="flex-1 px-4 md:px-16 py-10 max-w-5xl mx-auto">
        {/* Brand Colors */}
        <section id="brand" className="mb-16">
          <h3 className="text-xl font-bold mb-4">Brand Colors</h3>
          <div className="flex flex-wrap gap-6">
            {colorSwatches.map((swatch) => (
              <div key={swatch.name} className="flex flex-col items-center">
                <div className={`w-16 h-16 rounded-lg border shadow ${swatch.className}`} />
                <span className="mt-2 text-sm font-medium">{swatch.name}</span>
              </div>
            ))}
          </div>
        </section>
        {/* Typography */}
        <section id="typography" className="mb-16">
          <h3 className="text-xl font-bold mb-4">Typography</h3>
          <div className="space-y-2">
            <h1 className="text-5xl font-bold">Heading 1</h1>
            <h2 className="text-4xl font-bold">Heading 2</h2>
            <h3 className="text-3xl font-bold">Heading 3</h3>
            <h4 className="text-2xl font-bold">Heading 4</h4>
            <h5 className="text-xl font-bold">Heading 5</h5>
            <h6 className="text-lg font-bold">Heading 6</h6>
            <p className="text-base">Body text - This is a sample of the base body text style.</p>
            <p className="text-sm text-muted">Muted text - This is a sample of muted text.</p>
          </div>
        </section>
        {/* Buttons */}
        <section id="buttons" className="mb-16">
          <h3 className="text-xl font-bold mb-4">Buttons</h3>
          <div className="flex gap-4 flex-wrap">
            <button className="bg-primary text-white px-6 py-2 rounded-lg shadow">Primary Button</button>
            <button className="bg-secondary text-white px-6 py-2 rounded-lg shadow">Secondary Button</button>
            <button className="bg-accent text-white px-6 py-2 rounded-lg shadow">Accent Button</button>
            <button className="bg-neutral text-neutral-foreground px-6 py-2 rounded-lg shadow">Neutral Button</button>
            <button className="bg-success text-white px-6 py-2 rounded-lg shadow">Success Button</button>
            <button className="bg-warning text-white px-6 py-2 rounded-lg shadow">Warning Button</button>
            <button className="bg-error text-white px-6 py-2 rounded-lg shadow">Error Button</button>
          </div>
        </section>
        {/* Inputs */}
        <section id="inputs" className="mb-16">
          <h3 className="text-xl font-bold mb-4">Inputs</h3>
          <div className="flex flex-col gap-4 max-w-md">
            <input className="border border-border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Text input" />
            <input type="email" className="border border-border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Email input" />
            <textarea className="border border-border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Textarea input" />
            <select className="border border-border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary">
              <option>Option 1</option>
              <option>Option 2</option>
            </select>
          </div>
        </section>
        {/* Spacing */}
        <section id="spacing" className="mb-16">
          <h3 className="text-xl font-bold mb-4">Spacing Tokens</h3>
          <div className="flex gap-8 flex-wrap">
            {spacingTokens.map(token => (
              <div key={token.name} className="flex flex-col items-center">
                <div className="bg-primary/10 w-16" style={{ height: token.value }} />
                <span className="mt-2 text-sm font-medium">{token.name} ({token.value})</span>
              </div>
            ))}
          </div>
        </section>
        {/* Border Radius */}
        <section id="radius" className="mb-16">
          <h3 className="text-xl font-bold mb-4">Border Radius Tokens</h3>
          <div className="flex gap-8 flex-wrap">
            {radiusTokens.map(token => (
              <div key={token.name} className="flex flex-col items-center">
                <div className="bg-primary/10 w-16 h-16" style={{ borderRadius: token.value }} />
                <span className="mt-2 text-sm font-medium">{token.name} ({token.value})</span>
              </div>
            ))}
          </div>
        </section>
        {/* Links */}
        <section id="links" className="mb-16">
          <h3 className="text-xl font-bold mb-4">Links</h3>
          <div className="space-x-6">
            <a href="#" className="text-primary underline">Primary Link</a>
            <a href="#" className="text-secondary underline">Secondary Link</a>
            <a href="#" className="text-accent underline">Accent Link</a>
            <a href="#" className="text-muted underline">Muted Link</a>
          </div>
        </section>
      </main>
    </div>
  );
} 