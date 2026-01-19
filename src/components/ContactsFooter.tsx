import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

const ContactsFooter = () => {
  return (
    <>
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
    </>
  );
};

export default ContactsFooter;
