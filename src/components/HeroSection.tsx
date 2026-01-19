import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  scrollToSection: (section: string) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
    <section id="home" className="pt-32 pb-20 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Мебель для <span className="text-primary">школ</span> и{' '}
              <span className="text-secondary">офисов</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Производим качественную мебель с 2010 года. Индивидуальный подход, современный дизайн и
              доступные цены.
            </p>
            <div className="flex gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white"
                onClick={() => scrollToSection('calculator')}
              >
                <Icon name="Calculator" className="mr-2" size={20} />
                Рассчитать стоимость
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2"
                onClick={() => scrollToSection('catalog')}
              >
                <Icon name="ShoppingBag" className="mr-2" size={20} />
                Каталог
              </Button>
            </div>
          </div>
          <div className="flex-1 animate-scale-in">
            <div className="text-9xl text-center">🪑✨</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
