import React, { useState } from "react";
import toast from "react-hot-toast";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const submit = (e) => {
    e.preventDefault();
    toast.success("تم إرسال الرسالة .");
    setForm({ name: "", phone: "", message: "" });
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-cairo font-bold mb-6 text-center">
        تواصل معنا
      </h1>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="text-xl">
          <h3 className="font-semibold mb-2">معلومات الاتصال</h3>
          <p>هاتف: 19509 </p>
          <p>العنوان: القاهرة، مصر</p>
          <div className="mt-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1757698.6631524425!2d29.418553695229196!3d30.633810977124995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f79dcd62c93fcb%3A0x52207dd78027fc30!2z2YXYt9i52YUg2YPYsdmFINin2YTYtNin2YU!5e0!3m2!1sen!2seg!4v1758314640206!5m2!1sen!2seg"
              className="w-full h-80 rounded-3xl"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <form onSubmit={submit} className="bg-white p-6 rounded-lg shadow">
          <label className="block mb-2">الاسم</label>
          <input
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="border p-2 rounded w-full mb-3"
          />
          <label className="block mb-2">الهاتف</label>
          <input
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="border p-2 rounded w-full mb-3"
          />
          <label className="block mb-2">رسالتك</label>
          <textarea
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="border p-2 rounded w-full mb-4"
            rows="4"
          />
          <button className="bg-[var(--ks-yellow)] text-[var(--ks-brown)] font-semibold px-6 py-2 rounded-lg">
            ارسال
          </button>
        </form>
      </div>
    </div>
  );
}
