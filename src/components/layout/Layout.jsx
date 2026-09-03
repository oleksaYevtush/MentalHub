import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-bg text-default transition-colors duration-200">
      <Navbar />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
}
