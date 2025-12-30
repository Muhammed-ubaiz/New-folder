import React from 'react'

function ContactPage() {
  return (
   <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 p-6">
<motion.div
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}
className="w-full max-w-5xl grid md:grid-cols-2 gap-8"
>
{/* Left info section */}
<Card className="rounded-2xl shadow-lg">
<CardContent className="p-8 space-y-6">
<h2 className="text-3xl font-bold">Get in touch</h2>
<p className="text-muted-foreground">
Have a project in mind or just want to say hello? Fill out the form
or reach me through the details below.
</p>


<div className="space-y-4">
<div className="flex items-center gap-3">
<Mail className="w-5 h-5 text-primary" />
<span>hello@example.com</span>
</div>
<div className="flex items-center gap-3">
<Phone className="w-5 h-5 text-primary" />
<span>+1 (234) 567‑890</span>
</div>
<div className="flex items-center gap-3">
<MapPin className="w-5 h-5 text-primary" />
<span>Remote / Worldwide</span>
</div>
</div>
</CardContent>
</Card>


{/* Right form section */}
<Card className="rounded-2xl shadow-lg">
<CardContent className="p-8">
<form className="space-y-5">
<div>
<label className="block text-sm font-medium mb-1">Name</label>
<input
type="text"
placeholder="Your name"
className="w-full rounded-xl border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
/>
</div>


<div>
<label className="block text-sm font-medium mb-1">Email</label>
<input
type="email"
placeholder="you@example.com"
className="w-full rounded-xl border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
/>
</div>


<div>
<label className="block text-sm font-medium mb-1">Message</label>
<textarea
rows={4}
placeholder="Tell me about your project..."
className="w-full rounded-xl border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
/>
</div>


<Button className="w-full rounded-xl text-base py-6">
Send Message
</Button>
</form>
</CardContent>
</Card>
</motion.div>
</div>
);
}

export default ContactPage
