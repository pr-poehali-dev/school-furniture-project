import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

interface PriceListItem {
  name: string;
  price: string;
  unit: string;
}

interface PriceListCategory {
  category: string;
  items: PriceListItem[];
}

interface CalculatorData {
  furniture: string;
  width: number;
  height: number;
  depth: number;
  material: string;
  quantity: number;
}

interface MainContentProps {
  products: Product[];
  priceList: PriceListCategory[];
  calculatorData: CalculatorData;
  setCalculatorData: (data: CalculatorData) => void;
  calculatePrice: () => number;
  scrollToSection: (section: string) => void;
}

const MainContent = ({ 
  products, 
  priceList, 
  calculatorData, 
  setCalculatorData, 
  calculatePrice, 
  scrollToSection 
}: MainContentProps) => {
  return (
    <>
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

      <section id="pricelist" className="py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Прайс-лист</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Актуальные цены на нашу продукцию и услуги
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {priceList.map((section, sectionIndex) => (
              <Card
                key={sectionIndex}
                className="border-2 hover:shadow-xl transition-all animate-fade-in"
                style={{ animationDelay: `${sectionIndex * 100}ms` }}
              >
                <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10">
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Icon name="List" className="text-primary" size={24} />
                    {section.category}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="divide-y">
                    {section.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="p-4 hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex justify-between items-start gap-4">
                          <div className="flex-1">
                            <p className="font-medium text-gray-900">{item.name}</p>
                            <p className="text-sm text-gray-500 mt-1">{item.unit}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-lg font-bold text-primary whitespace-nowrap">
                              {item.price} ₽
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-8 border-2 border-accent bg-gradient-to-r from-accent/5 to-secondary/5">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Icon name="Info" className="text-accent mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-lg mb-2">Важная информация</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Цены указаны в рублях и включают НДС 20%</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>При заказе от 100 000 ₽ — скидка 5%, от 300 000 ₽ — скидка 10%</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Цены действительны до конца текущего месяца</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Возможно изготовление мебели по индивидуальным размерам</span>
                    </li>
                  </ul>
                  <Button className="mt-4 bg-accent hover:bg-accent/90" onClick={() => scrollToSection('contacts')}>
                    <Icon name="Download" className="mr-2" size={18} />
                    Скачать полный прайс-лист
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
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
    </>
  );
};

export default MainContent;
