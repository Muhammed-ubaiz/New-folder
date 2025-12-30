import React from 'react'

function ContactPage() {
return (
<div className="min-h-screen  from-slate-50 to-slate-100 flex items-center justify-center p-6">
<div className="w-full max-w-5xl grid md:grid-cols-2 gap-8">


{/* Contact Info */}
<div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
<h2 className="text-3xl font-bold">Get in touch</h2>
<p className="text-gray-600">
Have a project in mind or just want to say hello? Fill out the form or
contact me directly.
</p>


<div className="space-y-4">
<div className="flex items-center gap-3">
<span className="font-semibold">Email:</span>
<span>hello@example.com</span>
</div>
<div className="flex items-center gap-3">
<span className="font-semibold">Phone:</span>
<span>+1 (234) 567-890</span>
</div>
<div className="flex items-center gap-3">
<span className="font-semibold">Location:</span>
<span>Remote / Worldwide</span>
</div>
</div>
</div>


{/* Contact Form */}
<div className="bg-white rounded-2xl shadow-lg p-8">
<form className="space-y-5">
<div>
<label className="block text-sm font-medium mb-1">Name</label>
<input
type="text"
placeholder="Your name"
className="w-full rounded-xl border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
/>
</div>


<div>
<label className="block text-sm font-medium mb-1">Email</label>
<input
type="email"
placeholder="you@example.com"
className="w-full rounded-xl border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
/>
</div>


<div>
<label className="block text-sm font-medium mb-1">Message</label>
<textarea
rows={4}
placeholder="Tell me about your project..."
className="w-full rounded-xl border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
></textarea>
</div>


<button
type="submit"
className="w-full bg-black text-white rounded-xl py-3 text-base hover:bg-gray-800 transition"
>
Send Message
</button>
</form>
</div>


</div>
</div>
);
}

export default ContactPage
