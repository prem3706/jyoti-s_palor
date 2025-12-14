export default function ContactInfo() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-12 mt-10">
      
      <div className="bg-white/90 backdrop-blur-md rounded-2xl p-8 shadow-xl border">
        
        <h2 className="text-2xl font-bold text-strong mb-6">
          Contact Information
        </h2>

        {/* DETAILS */}
        <div className="space-y-3 text-gray-700 text-base">

          <p>
            <span className="font-semibold text-strong">Name: </span>  
            Jyoti Ben
          </p>

          <p>
            <span className="font-semibold text-strong">Mobile:</span>  
            <a href="tel:8780439762" className="text-accent font-semibold ml-1">
              +91 8780439762
            </a>
          </p>

          <p>
            <span className="font-semibold text-strong">Address: </span>  
              3/C/55 , Vivekanand nagar, Hathijan, Ahmedabad, Gujarat
          </p>

        </div>

        {/* WHATSAPP BUTTON */}
        <a
          href="https://api.whatsapp.com/send?phone=918780439762&text=Namaste%20🙏%20I%20want%20to%20book%20an%20appointment"
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-6 px-6 py-3 rounded-full bg-accent text-white font-medium shadow-md hover:opacity-90 transition"
        >
          Contact on WhatsApp
        </a>

      </div>
    </section>
  );
}
