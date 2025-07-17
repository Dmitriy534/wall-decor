import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Paintbrush, Palette, Hammer, Phone, Mail, MapPin, Star, CheckCircle } from "lucide-react";
import { useState } from "react";

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
            <Paintbrush className="h-8 w-8 text-primary" />
            <span className="text-xl font-semibold">СтенаМастер</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="smooth-transition hover:text-primary">Услуги</a>
            <a href="#gallery" className="smooth-transition hover:text-primary">Портфолио</a>
            <a href="#contact" className="smooth-transition hover:text-primary">Контакты</a>
          </nav>
          <Button variant="default" className="hidden md:inline-flex">
            <Phone className="mr-2 h-4 w-4" />
            Вызвать мастера
          </Button>
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
              <Button size="lg" className="px-8 py-6 text-lg glow-effect">
                Получить консультацию
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-6 text-lg">
                Посмотреть работы
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-dark-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              Наши <span className="text-gradient">услуги</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полный спектр работ по отделке стен от профессиональных мастеров
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="group hover:shadow-glow smooth-transition card-shadow">
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
                    Профессиональная покраска интерьеров и фасадов. Используем только качественные материалы.
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

            <Card className="group hover:shadow-glow smooth-transition card-shadow">
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
                    Профессиональная поклейка любых типов обоев. Идеальные стыки и долговечный результат.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      <span>Все типы обоев</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      <span>Идеальные стыки</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      <span>Быстрое выполнение</span>
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-border">
                    <span className="text-2xl font-medium text-primary">от 600₽/м²</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-glow smooth-transition card-shadow">
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
                    Создаем уникальные текстуры и фактуры. Венецианская штукатурка, короед, барашек.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      <span>Венецианская штукатурка</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      <span>Фактурные покрытия</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      <span>Авторские техники</span>
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-border">
                    <span className="text-2xl font-medium text-primary">от 1500₽/м²</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              Наши <span className="text-gradient">работы</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Портфолио выполненных проектов - качество, которое говорит само за себя
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[gallery1, gallery2, gallery3].map((image, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-glow smooth-transition card-shadow">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img 
                      src={image} 
                      alt={`Работа ${index + 1}`}
                      className="w-full h-80 object-cover group-hover:scale-110 smooth-transition"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 smooth-transition"></div>
                    <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 smooth-transition">
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" size="lg" className="px-8">
              Посмотреть все работы
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 bg-dark-surface">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-light mb-6">
                Получить <span className="text-gradient">консультацию</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Оставьте заявку и мы рассчитаем стоимость работ бесплатно
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <Card className="card-shadow">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
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
      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Paintbrush className="h-6 w-6 text-primary" />
                <span className="text-lg font-semibold">СтенаМастер</span>
              </div>
              <p className="text-muted-foreground">
                Профессиональная отделка стен в Москве и области. Качество, проверенное временем.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-4">Услуги</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Покраска стен</li>
                <li>Поклейка обоев</li>
                <li>Декоративная штукатурка</li>
                <li>Подготовка поверхности</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Контакты</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>+7 (495) 123-45-67</li>
                <li>info@stenamaster.ru</li>
                <li>г. Москва, ул. Примерная, 123</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
            <p>&copy; 2024 СтенаМастер. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
