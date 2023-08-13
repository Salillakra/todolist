
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4 px-2 ">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-sm">© {new Date().getFullYear()} SL Productions. All rights reserved.</div>
        <div className="text-sm">Proudly made in India  🇮🇳 </div>
      </div>
    </footer>
  );
};

export default Footer;