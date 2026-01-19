import Icon from '@/components/ui/icon';

interface HeaderProps {
  activeSection: string;
  scrollToSection: (section: string) => void;
}

const Header = ({ activeSection, scrollToSection }: HeaderProps) => {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-3xl">🪑</div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Режевское мебельное производство
            </span>
          </div>
          <div className="hidden md:flex gap-6">
            {[
              { id: 'home', label: 'Главная', icon: 'Home' },
              { id: 'catalog', label: 'Каталог', icon: 'ShoppingBag' },
              { id: 'pricelist', label: 'Прайс-лист', icon: 'FileText' },
              { id: 'calculator', label: 'Калькулятор', icon: 'Calculator' },
              { id: 'about', label: 'О компании', icon: 'Building2' },
              { id: 'services', label: 'Услуги', icon: 'Wrench' },
              { id: 'contacts', label: 'Контакты', icon: 'Phone' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all hover:bg-primary/10 ${
                  activeSection === item.id ? 'text-primary font-semibold' : 'text-gray-700'
                }`}
              >
                <Icon name={item.icon as any} size={18} />
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;