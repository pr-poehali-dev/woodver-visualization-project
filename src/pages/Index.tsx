import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">
            WOODVER.RU
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#production" className="text-foreground hover:text-primary transition-colors">
              Производство
            </a>
            <a href="#products" className="text-foreground hover:text-primary transition-colors">
              Продукция
            </a>
            <a href="#advantages" className="text-foreground hover:text-primary transition-colors">
              Преимущества
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Контакты
            </a>
          </nav>
          <Button className="bg-primary text-white hover:bg-primary/90">
            Заказать звонок
          </Button>
        </div>
      </header>

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url('https://cdn.poehali.dev/projects/021b9ca9-6903-4c24-acf1-98c2378953de/files/c6c0be18-ceca-431d-9da3-585c429ea3ce.jpg')`
          }}
        />
        <div className="container mx-auto px-4 relative z-10 text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
            Полный цикл производства
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            От пиломатериалов до готовых изделий премиум-класса
          </p>
          <Button size="lg" className="bg-primary text-white hover:bg-primary/90 text-lg px-8">
            Узнать больше
          </Button>
        </div>
      </section>

      <section id="production" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 animate-fade-in">
            Наше производство
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg max-w-2xl mx-auto">
            Современное оборудование и профессиональная команда
          </p>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-in">
              <div className="flex gap-4 items-start">
                <div className="bg-primary text-white p-3 rounded-lg">
                  <Icon name="Trees" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Заготовка пиломатериалов</h3>
                  <p className="text-muted-foreground">
                    Качественная древесина от проверенных поставщиков
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-primary text-white p-3 rounded-lg">
                  <Icon name="Cog" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Обработка на станках</h3>
                  <p className="text-muted-foreground">
                    Современное высокоточное оборудование
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-primary text-white p-3 rounded-lg">
                  <Icon name="Hammer" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Сборка изделий</h3>
                  <p className="text-muted-foreground">
                    Ручная работа опытных мастеров
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-primary text-white p-3 rounded-lg">
                  <Icon name="Sparkles" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Финишная отделка</h3>
                  <p className="text-muted-foreground">
                    Покрытие премиум-составами
                  </p>
                </div>
              </div>
            </div>

            <div className="animate-fade-in">
              <img 
                src="https://cdn.poehali.dev/projects/021b9ca9-6903-4c24-acf1-98c2378953de/files/b37fb1f2-9fb5-48b4-a5e4-91830abf9d5b.jpg"
                alt="Производство"
                className="rounded-lg shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Наша продукция
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            Изделия из натурального дерева
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300">
              <div className="h-64 bg-secondary/20 overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/021b9ca9-6903-4c24-acf1-98c2378953de/files/1d052da0-954c-4f07-8ee8-dcd9930cd1bc.jpg"
                  alt="Мебель"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">Мебель</h3>
                <p className="text-muted-foreground mb-4">
                  Столы, стулья, шкафы премиум-класса
                </p>
                <Button variant="outline" className="w-full">
                  Подробнее
                </Button>
              </div>
            </Card>

            <Card className="overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300">
              <div className="h-64 bg-secondary/20 flex items-center justify-center">
                <Icon name="DoorOpen" size={80} className="text-muted-foreground/30" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">Двери</h3>
                <p className="text-muted-foreground mb-4">
                  Межкомнатные и входные двери из массива
                </p>
                <Button variant="outline" className="w-full">
                  Подробнее
                </Button>
              </div>
            </Card>

            <Card className="overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300">
              <div className="h-64 bg-secondary/20 flex items-center justify-center">
                <Icon name="Home" size={80} className="text-muted-foreground/30" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">Отделка</h3>
                <p className="text-muted-foreground mb-4">
                  Вагонка, половая доска, панели
                </p>
                <Button variant="outline" className="w-full">
                  Подробнее
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="advantages" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Почему выбирают нас
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">15+ лет опыта</h3>
              <p className="text-muted-foreground">
                Профессиональная команда мастеров
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="CheckCircle" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Качество</h3>
              <p className="text-muted-foreground">
                Контроль на всех этапах производства
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Truck" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Доставка</h3>
              <p className="text-muted-foreground">
                По всей России в срок
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Гарантия</h3>
              <p className="text-muted-foreground">
                5 лет на все изделия
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Свяжитесь с нами
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Оставьте заявку, и мы свяжемся с вами в течение часа
          </p>

          <Card className="p-8">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Ваше имя</label>
                  <Input placeholder="Иван Иванов" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Телефон</label>
                  <Input placeholder="+7 (___) ___-__-__" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input type="email" placeholder="example@mail.com" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Сообщение</label>
                <Textarea 
                  placeholder="Расскажите о вашем проекте..."
                  rows={5}
                />
              </div>

              <Button className="w-full bg-primary text-white hover:bg-primary/90" size="lg">
                Отправить заявку
              </Button>
            </form>
          </Card>

          <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
            <div>
              <Icon name="Phone" size={32} className="mx-auto mb-3 text-primary" />
              <p className="font-semibold mb-1">Телефон</p>
              <p className="text-muted-foreground">+7 (495) 123-45-67</p>
            </div>
            <div>
              <Icon name="Mail" size={32} className="mx-auto mb-3 text-primary" />
              <p className="font-semibold mb-1">Email</p>
              <p className="text-muted-foreground">info@woodver.ru</p>
            </div>
            <div>
              <Icon name="MapPin" size={32} className="mx-auto mb-3 text-primary" />
              <p className="font-semibold mb-1">Адрес</p>
              <p className="text-muted-foreground">Москва, ул. Производственная, 5</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground/95 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">WOODVER.RU</h3>
              <p className="text-white/70">
                Производство изделий из дерева премиум-класса
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Продукция</h4>
              <ul className="space-y-2 text-white/70">
                <li>Мебель</li>
                <li>Двери</li>
                <li>Отделочные материалы</li>
                <li>Пиломатериалы</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-white/70">
                <li>О нас</li>
                <li>Производство</li>
                <li>Доставка</li>
                <li>Гарантия</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-white/70">
                <li>+7 (495) 123-45-67</li>
                <li>info@woodver.ru</li>
                <li>Пн-Пт: 9:00-18:00</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-white/70">
            <p>© 2024 WOODVER.RU. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
