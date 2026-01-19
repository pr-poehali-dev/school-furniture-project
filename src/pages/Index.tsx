import { useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import MainContent from '@/components/MainContent';
import ContactsFooter from '@/components/ContactsFooter';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [calculatorData, setCalculatorData] = useState({
    furniture: 'desk',
    width: 120,
    height: 75,
    depth: 60,
    material: 'laminated',
    quantity: 1,
  });

  const products = [
    {
      id: 1,
      name: 'Школьная парта регулируемая',
      price: 8500,
      image: '📚',
      category: 'school',
    },
    {
      id: 2,
      name: 'Офисный стол Premium',
      price: 15000,
      image: '💼',
      category: 'office',
    },
    {
      id: 3,
      name: 'Стул ученический',
      price: 3200,
      image: '🪑',
      category: 'school',
    },
    {
      id: 4,
      name: 'Кресло руководителя',
      price: 18500,
      image: '🏢',
      category: 'office',
    },
    {
      id: 5,
      name: 'Шкаф для документов',
      price: 12000,
      image: '🗄️',
      category: 'office',
    },
    {
      id: 6,
      name: 'Доска настенная',
      price: 6500,
      image: '📋',
      category: 'school',
    },
  ];

  const priceList = [
    {
      category: 'Школьная мебель',
      items: [
        { name: 'Парта одноместная регулируемая', price: '8 500', unit: 'шт' },
        { name: 'Парта двухместная регулируемая', price: '14 200', unit: 'шт' },
        { name: 'Стул ученический регулируемый', price: '3 200', unit: 'шт' },
        { name: 'Стул ученический (фиксированный)', price: '2 800', unit: 'шт' },
        { name: 'Доска маркерная настенная 120×90 см', price: '6 500', unit: 'шт' },
        { name: 'Доска меловая настенная 120×90 см', price: '5 800', unit: 'шт' },
        { name: 'Шкаф для учебных пособий', price: '18 900', unit: 'шт' },
        { name: 'Стол учительский', price: '12 500', unit: 'шт' },
        { name: 'Кресло учительское', price: '8 900', unit: 'шт' },
      ],
    },
    {
      category: 'Офисная мебель',
      items: [
        { name: 'Стол офисный Standard 120×60 см', price: '12 000', unit: 'шт' },
        { name: 'Стол офисный Premium 140×70 см', price: '15 000', unit: 'шт' },
        { name: 'Стол офисный Executive 180×80 см', price: '22 500', unit: 'шт' },
        { name: 'Кресло офисное (эконом)', price: '6 800', unit: 'шт' },
        { name: 'Кресло офисное (стандарт)', price: '11 200', unit: 'шт' },
        { name: 'Кресло руководителя', price: '18 500', unit: 'шт' },
        { name: 'Шкаф для документов 80×40×180 см', price: '12 000', unit: 'шт' },
        { name: 'Тумба приставная 3 ящика', price: '5 400', unit: 'шт' },
        { name: 'Стеллаж офисный 5 полок', price: '9 600', unit: 'шт' },
      ],
    },
    {
      category: 'Мебель для переговорных',
      items: [
        { name: 'Стол для переговоров на 6 человек', price: '28 000', unit: 'шт' },
        { name: 'Стол для переговоров на 8-10 человек', price: '38 500', unit: 'шт' },
        { name: 'Стул конференц-зала', price: '7 200', unit: 'шт' },
        { name: 'Кресло конференц-зала', price: '9 800', unit: 'шт' },
        { name: 'Доска для презентаций мобильная', price: '12 300', unit: 'шт' },
      ],
    },
    {
      category: 'Дополнительные услуги',
      items: [
        { name: 'Доставка по Москве (в пределах МКАД)', price: '2 500', unit: 'заказ' },
        { name: 'Доставка за МКАД', price: '50', unit: 'км' },
        { name: 'Сборка и монтаж (простая мебель)', price: '10%', unit: 'от стоимости' },
        { name: 'Сборка и монтаж (сложная мебель)', price: '15%', unit: 'от стоимости' },
        { name: 'Замер помещения специалистом', price: 'Бесплатно', unit: 'при заказе от 100 000 ₽' },
        { name: 'Индивидуальное проектирование', price: 'от 15 000', unit: 'проект' },
      ],
    },
  ];

  const calculatePrice = () => {
    const basePrices: Record<string, number> = {
      desk: 10000,
      chair: 5000,
      cabinet: 15000,
      shelf: 8000,
    };

    const materialMultipliers: Record<string, number> = {
      laminated: 1,
      wood: 1.5,
      metal: 1.3,
    };

    const basePrice = basePrices[calculatorData.furniture] || 10000;
    const materialMultiplier = materialMultipliers[calculatorData.material] || 1;
    const sizeMultiplier = (calculatorData.width * calculatorData.height * calculatorData.depth) / 540000;

    return Math.round(basePrice * materialMultiplier * sizeMultiplier * calculatorData.quantity);
  };

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-purple-50">
      <Header activeSection={activeSection} scrollToSection={scrollToSection} />
      <HeroSection scrollToSection={scrollToSection} />
      <MainContent
        products={products}
        priceList={priceList}
        calculatorData={calculatorData}
        setCalculatorData={setCalculatorData}
        calculatePrice={calculatePrice}
        scrollToSection={scrollToSection}
      />
      <ContactsFooter />
    </div>
  );
};

export default Index;
