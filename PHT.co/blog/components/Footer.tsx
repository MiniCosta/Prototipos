export default function Footer() {
  return (
    <footer className="bg-pht-black border-t border-gray-800 py-12 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mt-0 mb-6 flex justify-center space-x-6">
          <a 
            href="https://wa.me/558496051854" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-pht-gold hover:text-white transition-colors"
            aria-label="WhatsApp"
          >
            <i className="fab fa-whatsapp text-3xl"></i>
          </a>
          <a 
            href="https://www.instagram.com/pht.co/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-pht-gold hover:text-white transition-colors"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram text-3xl"></i>
          </a>
        </div>
        <div className="text-3xl font-black text-pht-gold mb-4 uppercase tracking-wider">
          PHT
        </div>
        <p className="text-gray-400 text-sm mb-2 uppercase">
          &copy; 2026 PHT. Todos os direitos reservados.
        </p>
        <p className="text-gray-500 text-xs uppercase">
          Marketing Jurídico & Vendas
        </p>
      </div>
    </footer>
  );
}
