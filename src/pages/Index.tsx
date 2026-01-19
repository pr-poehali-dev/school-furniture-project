import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

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
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="text-3xl">🪑</div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                ЭргоМебель
              </span>
            </div>
            <div className="hidden md:flex gap-6">
              {[
                { id: 'home', label: 'Главная', icon: 'Home' },
                { id: 'catalog', label: 'Каталог', icon: 'ShoppingBag' },
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

      <section id="catalog" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Каталог продукции</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Популярные позиции нашего ассортимента
          </p>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
              <TabsTrigger value="all">Все</TabsTrigger>
              <TabsTrigger value="school">Школьная</TabsTrigger>
              <TabsTrigger value="office">Офисная</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product, index) => (
                  <Card
                    key={product.id}
                    className="hover-scale cursor-pointer border-2 hover:border-primary transition-all"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardHeader>
                      <div className="text-6xl mb-4 text-center">{product.image}</div>
                      <CardTitle className="text-xl">{product.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-primary">
                          {product.price.toLocaleString()} ₽
                        </span>
                        <Button size="sm" className="bg-secondary hover:bg-secondary/90">
                          <Icon name="ShoppingCart" size={16} />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="school" className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products
                  .filter((p) => p.category === 'school')
                  .map((product, index) => (
                    <Card
                      key={product.id}
                      className="hover-scale cursor-pointer border-2 hover:border-primary transition-all"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <CardHeader>
                        <div className="text-6xl mb-4 text-center">{product.image}</div>
                        <CardTitle className="text-xl">{product.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <span className="text-2xl font-bold text-primary">
                            {product.price.toLocaleString()} ₽
                          </span>
                          <Button size="sm" className="bg-secondary hover:bg-secondary/90">
                            <Icon name="ShoppingCart" size={16} />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="office" className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products
                  .filter((p) => p.category === 'office')
                  .map((product, index) => (
                    <Card
                      key={product.id}
                      className="hover-scale cursor-pointer border-2 hover:border-primary transition-all"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <CardHeader>
                        <div className="text-6xl mb-4 text-center">{product.image}</div>
                        <CardTitle className="text-xl">{product.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <span className="text-2xl font-bold text-primary">
                            {product.price.toLocaleString()} ₽
                          </span>
                          <Button size="sm" className="bg-secondary hover:bg-secondary/90">
                            <Icon name="ShoppingCart" size={16} />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="calculator" className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-4">Калькулятор стоимости</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Рассчитайте примерную стоимость мебели по вашим параметрам
          </p>

          <Card className="border-2 shadow-xl animate-scale-in">
            <CardHeader>
              <CardTitle className="text-2xl">Параметры изделия</CardTitle>
              <CardDescription>Укажите необходимые характеристики</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="furniture-type">Тип мебели</Label>
                  <Select
                    value={calculatorData.furniture}
                    onValueChange={(value) =>
                      setCalculatorData({ ...calculatorData, furniture: value })
                    }
                  >
                    <SelectTrigger id="furniture-type">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="desk">Стол</SelectItem>
                      <SelectItem value="chair">Стул</SelectItem>
                      <SelectItem value="cabinet">Шкаф</SelectItem>
                      <SelectItem value="shelf">Стеллаж</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="material">Материал</Label>
                  <Select
                    value={calculatorData.material}
                    onValueChange={(value) =>
                      setCalculatorData({ ...calculatorData, material: value })
                    }
                  >
                    <SelectTrigger id="material">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="laminated">ЛДСП</SelectItem>
                      <SelectItem value="wood">Массив дерева</SelectItem>
                      <SelectItem value="metal">Металл</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="width">Ширина (см)</Label>
                  <Input
                    id="width"
                    type="number"
                    value={calculatorData.width}
                    onChange={(e) =>
                      setCalculatorData({ ...calculatorData, width: parseInt(e.target.value) || 0 })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="height">Высота (см)</Label>
                  <Input
                    id="height"
                    type="number"
                    value={calculatorData.height}
                    onChange={(e) =>
                      setCalculatorData({ ...calculatorData, height: parseInt(e.target.value) || 0 })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="depth">Глубина (см)</Label>
                  <Input
                    id="depth"
                    type="number"
                    value={calculatorData.depth}
                    onChange={(e) =>
                      setCalculatorData({ ...calculatorData, depth: parseInt(e.target.value) || 0 })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="quantity">Количество</Label>
                  <Input
                    id="quantity"
                    type="number"
                    min="1"
                    value={calculatorData.quantity}
                    onChange={(e) =>
                      setCalculatorData({ ...calculatorData, quantity: parseInt(e.target.value) || 1 })
                    }
                  />
                </div>
              </div>

              <div className="pt-6 border-t-2">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold">Итоговая стоимость:</span>
                  <span className="text-4xl font-bold text-primary">
                    {calculatePrice().toLocaleString()} ₽
                  </span>
                </div>
                <Button className="w-full bg-secondary hover:bg-secondary/90 text-white" size="lg">
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить заявку
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12">О компании</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h3 className="text-2xl font-bold mb-4 text-primary">ЭргоМебель</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                С 2010 года мы специализируемся на производстве качественной мебели для образовательных
                учреждений и офисов. Наша миссия — создавать комфортные и функциональные пространства.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                За годы работы мы оснастили более 500 школ и 200 офисов по всей России. Каждое изделие
                проходит строгий контроль качества и соответствует всем требованиям безопасности.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '13+', label: 'лет на рынке' },
                  { value: '700+', label: 'реализованных проектов' },
                  { value: '50+', label: 'сотрудников' },
                  { value: '100%', label: 'гарантия качества' },
                ].map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg">
                    <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center text-8xl animate-scale-in">🏢✨🎯</div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-gradient-to-br from-orange-50 to-pink-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-4">Наши услуги</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Полный цикл работ от проектирования до монтажа
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: '✏️',
                title: 'Индивидуальное проектирование',
                description: 'Разработаем уникальный дизайн под ваши требования и помещение',
              },
              {
                icon: '🏭',
                title: 'Собственное производство',
                description: 'Изготовление мебели на современном оборудовании с контролем качества',
              },
              {
                icon: '🚚',
                title: 'Доставка и монтаж',
                description: 'Бережная доставка и профессиональная сборка силами наших специалистов',
              },
              {
                icon: '🛠️',
                title: 'Гарантийное обслуживание',
                description: 'Гарантия 3 года на всю продукцию и бесплатное устранение дефектов',
              },
              {
                icon: '📐',
                title: 'Замер помещений',
                description: 'Выезд специалиста для точных замеров — бесплатно при заказе от 100 000 ₽',
              },
              {
                icon: '💡',
                title: 'Консультация дизайнера',
                description: 'Поможем выбрать оптимальные решения по функциональности и эстетике',
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="hover-scale border-2 hover:border-accent transition-all animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12">Контакты</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="MapPin" className="text-primary" />
                  Адрес производства
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">г. Москва, ул. Промышленная, д. 25, корп. 3</p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Phone" className="text-secondary" />
                  Телефон
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-semibold text-lg">+7 (495) 123-45-67</p>
                <p className="text-sm text-gray-500">Пн-Пт: 9:00 - 18:00</p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Mail" className="text-accent" />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">info@ergomebel.ru</p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Clock" className="text-primary" />
                  Режим работы
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Пн-Пт: 9:00 - 18:00</p>
                <p className="text-gray-600">Сб-Вс: выходной</p>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-8 border-2 border-primary">
            <CardHeader>
              <CardTitle>Отправить сообщение</CardTitle>
              <CardDescription>Мы свяжемся с вами в ближайшее время</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Имя</Label>
                <Input id="name" placeholder="Ваше имя" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contact-phone">Телефон</Label>
                <Input id="contact-phone" placeholder="+7 (___) ___-__-__" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Сообщение</Label>
                <Input id="message" placeholder="Что вас интересует?" />
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90" size="lg">
                <Icon name="Send" className="mr-2" />
                Отправить
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="text-4xl">🪑</div>
            <span className="text-3xl font-bold">ЭргоМебель</span>
          </div>
          <p className="text-gray-400 mb-6">
            Производство школьной и офисной мебели с 2010 года
          </p>
          <div className="flex justify-center gap-6 mb-6">
            <Button variant="ghost" size="icon" className="text-white hover:text-primary">
              <Icon name="Phone" size={24} />
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:text-primary">
              <Icon name="Mail" size={24} />
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:text-primary">
              <Icon name="MessageCircle" size={24} />
            </Button>
          </div>
          <p className="text-sm text-gray-500">© 2024 ЭргоМебель. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
