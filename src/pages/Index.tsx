import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Paintbrush, Palette, Hammer, Phone, Mail, MapPin, Star, CheckCircle, Shield, Award, Users, Clock } from "lucide-react";
import { useState } from "react";

// Import new components
import PriceCalculator from "@/components/PriceCalculator";
import BeforeAfterComparison from "@/components/BeforeAfterComparison";
import ProgressSteps from "@/components/ProgressSteps";
import FAQ from "@/components/FAQ";
import CallbackWidget from "@/components/CallbackWidget";
import Promotions from "@/components/Promotions";
import Team from "@/components/Team";
import Partners from "@/components/Partners";
import Reviews from "@/components/Reviews";
import SocialContacts from "@/components/SocialContacts";
import ExpandableGallery from "@/components/ExpandableGallery";
import MobileMenu from "@/components/MobileMenu";
import CompanyDescription from "@/components/CompanyDescription";

// Import images
import heroBg from "@/assets/hero-bg.jpg";
import servicePainting from "@/assets/service-painting.jpg";
import serviceWallpaper from "@/assets/service-wallpaper.jpg";
import servicePlaster from "@/assets/service-plaster.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Здесь будет интеграция с Supabase для отправки формы
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    
    // Очистить форму
    setFormData({
      name: "",
      phone: "",
      email: "",
      service: "",
      message: ""
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Paintbrush className="h-6 w-6 md:h-8 md:w-8 text-primary" />
            <span className="text-lg md:text-xl font-semibold">СтенаМастер</span>
          </div>
          <nav className="hidden lg:flex space-x-6 xl:space-x-8">
            <a href="#services" className="smooth-transition hover:text-primary text-sm lg:text-base">Услуги</a>
            <a href="#portfolio" className="smooth-transition hover:text-primary text-sm lg:text-base">Портфолио</a>
            <a href="#prices" className="smooth-transition hover:text-primary text-sm lg:text-base">Цены</a>
            <a href="#company" className="smooth-transition hover:text-primary text-sm lg:text-base">О нас</a>
            <a href="#contact" className="smooth-transition hover:text-primary text-sm lg:text-base">Контакты</a>
          </nav>
          <Button 
            variant="default" 
            className="hidden lg:inline-flex text-sm px-4 py-2"
            onClick={() => {
              const widget = document.querySelector('[data-callback-widget]');
              if (widget) {
                (widget as HTMLElement).click();
              } else {
                // Scroll to contact form as fallback
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <Phone className="mr-2 h-4 w-4" />
            Вызвать мастера
          </Button>
          <MobileMenu />
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="absolute inset-0 bg-gradient-overlay"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <Badge variant="secondary" className="mb-6 px-4 py-2">
              Профессиональная отделка стен
            </Badge>
            <h1 className="text-5xl md:text-7xl font-light mb-6 leading-tight">
              Преобразим ваши
              <br />
              <span className="text-gradient font-medium">стены</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto font-light">
              Качественная покраска, поклейка обоев и декоративная отделка. 
              Гарантия на все виды работ.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="px-8 py-6 text-lg glow-effect"
                onClick={() => {
                  document.getElementById('prices')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <Phone className="mr-2 h-5 w-5" />
                Рассчитать стоимость
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="px-8 py-6 text-lg"
                onClick={() => {
                  const widget = document.querySelector('[data-callback-widget]');
                  if (widget) {
                    (widget as HTMLElement).click();
                  } else {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Вызвать замерщика
              </Button>
            </div>
            
            {/* Преимущества */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 max-w-4xl mx-auto">
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-3 bg-background/10 backdrop-blur-sm rounded-lg p-4 text-center sm:text-left">
                <Shield className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-base sm:text-lg">Без пыли и грязи</span>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-3 bg-background/10 backdrop-blur-sm rounded-lg p-4 text-center sm:text-left">
                <Award className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-base sm:text-lg">Гарантия 2 года</span>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-3 bg-background/10 backdrop-blur-sm rounded-lg p-4 text-center sm:text-left">
                <Clock className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-base sm:text-lg">Точно в срок</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 md:py-20 bg-dark-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-4 md:mb-6">
              Наши <span className="text-gradient">услуги</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Полный спектр работ по отделке стен от профессиональных мастеров
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            <Card className="group hover:shadow-glow smooth-transition card-shadow animate-slide-in-left">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={servicePainting} 
                    alt="Покраска стен" 
                    className="w-full h-64 object-cover group-hover:scale-105 smooth-transition"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <Paintbrush className="h-6 w-6 text-primary mr-3" />
                    <h3 className="text-xl font-medium">Покраска стен</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Водоэмульсионная и акриловая покраска. Подготовка поверхности включена.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      <span>Подготовка поверхности</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      <span>Качественные краски</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      <span>Гарантия 2 года</span>
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-border">
                    <span className="text-2xl font-medium text-primary">от 800₽/м²</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-glow smooth-transition card-shadow animate-fade-in">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={serviceWallpaper}
                    alt="Поклейка обоев" 
                    className="w-full h-64 object-cover group-hover:scale-105 smooth-transition"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <Palette className="h-6 w-6 text-primary mr-3" />
                    <h3 className="text-xl font-medium">Поклейка обоев</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Флизелиновые, виниловые, жидкие обои. Идеальные стыки и долговечный результат.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      <span>Флизелиновые обои</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      <span>Виниловые обои</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      <span>Жидкие обои</span>
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-border">
                    <span className="text-2xl font-medium text-primary">от 600₽/м²</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-glow smooth-transition card-shadow animate-slide-in-right">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={servicePlaster}
                    alt="Декоративная штукатурка" 
                    className="w-full h-64 object-cover group-hover:scale-105 smooth-transition"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <Hammer className="h-6 w-6 text-primary mr-3" />
                    <h3 className="text-xl font-medium">Декоративная штукатурка</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Декоративная и гипсовая штукатурка. Венецианская, короед, барашек.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      <span>Венецианская штукатурка</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      <span>Гипсовая штукатурка</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      <span>Фактурные покрытия</span>
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-border">
                    <span className="text-2xl font-medium text-primary">от 1500₽/м²</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Дополнительные услуги */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 animate-slide-up">
            <Card className="hover:shadow-glow smooth-transition card-shadow animate-bounce-in">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Palette className="h-6 w-6 text-primary" />
                </div>
                <h4 className="text-lg font-medium mb-2">Шпаклевка стен</h4>
                <p className="text-muted-foreground text-sm mb-4">Стартовая и финишная шпаклевка под покраску</p>
                <span className="text-primary font-medium">от 400₽/м²</span>
              </CardContent>
            </Card>

            <Card className="hover:shadow-glow smooth-transition card-shadow animate-bounce-in" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Hammer className="h-6 w-6 text-primary" />
                </div>
                <h4 className="text-lg font-medium mb-2">Грунтовка стен</h4>
                <p className="text-muted-foreground text-sm mb-4">Подготовка поверхности под любые покрытия</p>
                <span className="text-primary font-medium">от 200₽/м²</span>
              </CardContent>
            </Card>

            <Card className="hover:shadow-glow smooth-transition card-shadow animate-bounce-in" style={{ animationDelay: '0.4s' }}>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h4 className="text-lg font-medium mb-2">Утепление стен</h4>
                <p className="text-muted-foreground text-sm mb-4">Монтаж утеплителя и пароизоляции</p>
                <span className="text-primary font-medium">от 1200₽/м²</span>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section with Before/After */}
      <section id="portfolio" className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-4 md:mb-6">
              Наши <span className="text-gradient">работы</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Портфолио выполненных проектов с указанием адресов
            </p>
          </div>

          {/* Before/After Comparison */}
          <div className="mb-8 md:mb-16">
            <BeforeAfterComparison />
          </div>

          {/* Expandable Gallery */}
          <ExpandableGallery />
        </div>
      </section>

      {/* Progress Steps Section */}
      <section className="py-12 md:py-20 bg-dark-surface">
        <div className="container mx-auto px-4">
          <ProgressSteps />
        </div>
      </section>

      {/* Prices Section */}
      <section id="prices" className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-4 md:mb-6">
              Цены и <span className="text-gradient">калькулятор</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Прозрачное ценообразование и удобный расчет стоимости
            </p>
          </div>

          {/* Price Calculator */}
          <div className="mb-8 md:mb-16">
            <PriceCalculator />
          </div>

          {/* Price Table */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 animate-fade-in">
            {[
              { service: 'Покраска стен', price: 'от 800₽/м²', details: ['Подготовка поверхности', 'Грунтовка', 'Покраска в 2 слоя'] },
              { service: 'Поклейка обоев', price: 'от 600₽/м²', details: ['Подготовка стен', 'Поклейка', 'Подгонка рисунка'] },
              { service: 'Штукатурка декоративная', price: 'от 1500₽/м²', details: ['Подготовка', 'Нанесение', 'Финишная обработка'] },
              { service: 'Шпаклевка стен', price: 'от 400₽/м²', details: ['Стартовая шпаклевка', 'Финишная шпаклевка', 'Шлифовка'] },
              { service: 'Грунтовка стен', price: 'от 200₽/м²', details: ['Очистка поверхности', 'Грунтовка глубокого проникновения', 'Высушивание'] },
              { service: 'Утепление стен', price: 'от 1200₽/м²', details: ['Монтаж каркаса', 'Утеплитель', 'Пароизоляция'] }
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-glow smooth-transition card-shadow animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium mb-3">{item.service}</h3>
                  <div className="text-2xl font-bold text-primary mb-4">{item.price}</div>
                  <ul className="space-y-2">
                    {item.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Description Section */}
      <CompanyDescription />

      {/* Promotions Section */}
      <section className="py-12 md:py-20 bg-dark-surface">
        <div className="container mx-auto px-4">
          <Promotions />
        </div>
      </section>

      {/* Team Section */}
      <Team />

      {/* Partners Section */}
      <Partners />

      {/* Reviews Section */}
      <Reviews />

      {/* FAQ Section */}
      <section className="py-12 md:py-20 bg-dark-surface">
        <div className="container mx-auto px-4">
          <FAQ />
        </div>
      </section>

      {/* Social Contacts Section */}
      <SocialContacts />

      {/* Contact Form Section */}
      <section id="contact" className="py-12 md:py-20 bg-dark-surface">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 md:mb-16 animate-fade-in">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-4 md:mb-6">
                Получить <span className="text-gradient">консультацию</span>
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Оставьте заявку и мы рассчитаем стоимость работ бесплатно
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
              <Card className="card-shadow">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Ваше имя</label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Введите ваше имя"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Телефон</label>
                        <Input
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+7 (999) 999-99-99"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.ru"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Тип услуги</label>
                      <select 
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 bg-input border border-border rounded-md"
                        required
                      >
                        <option value="">Выберите услугу</option>
                        <option value="painting">Покраска стен</option>
                        <option value="wallpaper">Поклейка обоев</option>
                        <option value="plaster">Декоративная штукатурка</option>
                        <option value="complex">Комплексная отделка</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Сообщение</label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Опишите ваш проект..."
                        rows={4}
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full glow-effect">
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <div className="space-y-8">
                <Card className="card-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="bg-primary/20 p-3 rounded-lg">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Телефон</h3>
                        <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="bg-primary/20 p-3 rounded-lg">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Email</h3>
                        <p className="text-muted-foreground">info@stenamaster.ru</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="bg-primary/20 p-3 rounded-lg">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Адрес</h3>
                        <p className="text-muted-foreground">г. Москва, ул. Примерная, д. 123</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="bg-gradient-primary p-6 rounded-lg text-gold-foreground">
                  <h3 className="text-xl font-medium mb-2">Бесплатная консультация</h3>
                  <p className="mb-4">Выезд мастера и расчет стоимости работ</p>
                  <Badge variant="secondary" className="bg-black/20 text-white">
                    Работаем без выходных
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 md:py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="col-span-1 sm:col-span-2 lg:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <Paintbrush className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                <span className="text-base md:text-lg font-semibold">СтенаМастер</span>
              </div>
              <p className="text-muted-foreground mb-4 text-sm md:text-base leading-relaxed">
                Профессиональная отделка стен в Москве и области. Качество, проверенное временем.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-xs md:text-sm">WhatsApp</Badge>
                <Badge variant="secondary" className="text-xs md:text-sm">Telegram</Badge>
              </div>
            </div>
            <div>
              <h4 className="font-medium mb-3 md:mb-4 text-sm md:text-base">Услуги</h4>
              <ul className="space-y-1 md:space-y-2 text-muted-foreground text-xs md:text-sm">
                <li>Покраска стен</li>
                <li>Поклейка обоев</li>
                <li>Декоративная штукатурка</li>
                <li>Шпаклевка стен</li>
                <li>Грунтовка стен</li>
                <li>Утепление стен</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-3 md:mb-4 text-sm md:text-base">Зона работы</h4>
              <ul className="space-y-1 md:space-y-2 text-muted-foreground text-xs md:text-sm">
                <li>Москва (все районы)</li>
                <li>Московская область</li>
                <li>Радиус до 50 км от МКАД</li>
                <li>Выезд замерщика бесплатно</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-3 md:mb-4 text-sm md:text-base">Контакты</h4>
              <ul className="space-y-1 md:space-y-2 text-muted-foreground text-xs md:text-sm">
                <li>📞 +7 (495) 123-45-67</li>
                <li>📧 info@stenamaster.ru</li>
                <li>📍 г. Москва, ул. Примерная, 123</li>
                <li>🕒 Ежедневно 8:00 - 20:00</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-border text-center text-muted-foreground">
            <p className="text-xs md:text-sm">&copy; 2024 СтенаМастер. Все права защищены. | 
              <button className="ml-2 hover:text-primary smooth-transition">Политика конфиденциальности</button>
            </p>
          </div>
        </div>
      </footer>

      {/* Callback Widget */}
      <CallbackWidget />
    </div>
  );
};

export default Index;
