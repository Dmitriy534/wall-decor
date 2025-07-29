import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, MessageCircle, Instagram, Send, Clock, MapPin } from "lucide-react";

const SocialContacts = () => {
  const socialContacts = [
    {
      platform: "WhatsApp",
      icon: MessageCircle,
      contact: "+7 (XXX) XXX-XX-XX",
      description: "Быстрый ответ в течение 5 минут",
      color: "bg-green-500",
      link: "https://wa.me/79XXXXXXXXX"
    },
    {
      platform: "Telegram", 
      icon: Send,
      contact: "@stenmaster_bot",
      description: "Калькулятор стоимости онлайн",
      color: "bg-blue-500",
      link: "https://t.me/stenmaster_bot"
    },
    {
      platform: "Instagram",
      icon: Instagram,
      contact: "@stenmaster_pro",
      description: "Фото наших работ каждый день",
      color: "bg-pink-500",
      link: "https://instagram.com/stenmaster_pro"
    },
    {
      platform: "Телефон",
      icon: Phone,
      contact: "+7 (XXX) XXX-XX-XX",
      description: "Звонки с 8:00 до 20:00 ежедневно",
      color: "bg-primary",
      link: "tel:+79XXXXXXXXX"
    }
  ];

  const workingHours = [
    { day: "Понедельник - Пятница", time: "08:00 - 20:00" },
    { day: "Суббота", time: "09:00 - 18:00" },
    { day: "Воскресенье", time: "10:00 - 16:00" }
  ];

  return (
    <section id="social-contacts" className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-4 md:mb-6">
            Связаться <span className="text-gradient">с нами</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Выберите удобный способ связи. Отвечаем быстро в любое время
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12">
          {socialContacts.map((contact, index) => {
            const IconComponent = contact.icon;
            return (
              <Card key={index} className="group hover:shadow-glow smooth-transition card-shadow">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 ${contact.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 smooth-transition`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-medium mb-2">{contact.platform}</h3>
                  <p className="text-primary font-medium mb-2">{contact.contact}</p>
                  <p className="text-sm text-muted-foreground mb-4">{contact.description}</p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground smooth-transition"
                    onClick={() => window.open(contact.link, '_blank')}
                  >
                    Связаться
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* График работы */}
          <Card className="card-shadow">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Clock className="h-6 w-6 text-primary mr-3" />
                <h3 className="text-xl font-medium">График работы</h3>
              </div>
              <div className="space-y-3">
                {workingHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-b-0">
                    <span className="text-muted-foreground">{schedule.day}</span>
                    <Badge variant="secondary">{schedule.time}</Badge>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-4 bg-primary/10 rounded-lg">
                <p className="text-sm text-center">
                  <strong>Экстренные вызовы:</strong> круглосуточно
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Наш офис */}
          <Card className="card-shadow">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <MapPin className="h-6 w-6 text-primary mr-3" />
                <h3 className="text-xl font-medium">Наш офис</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="font-medium mb-1">Адрес офиса:</p>
                  <p className="text-muted-foreground">г. Город, ул. Строительная, 10</p>
                </div>
                <div>
                  <p className="font-medium mb-1">Склад материалов:</p>
                  <p className="text-muted-foreground">г. Город, пр. Промышленный, 15</p>
                </div>
                <div>
                  <p className="font-medium mb-1">Парковка:</p>
                  <p className="text-muted-foreground">Бесплатная для клиентов</p>
                </div>
              </div>
              <Button 
                variant="outline" 
                className="w-full mt-4"
                onClick={() => window.open('https://maps.google.com', '_blank')}
              >
                Открыть на карте
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Быстрая связь */}
        <div className="text-center mt-8 md:mt-12">
          <div className="bg-dark-surface rounded-lg p-6 md:p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-medium mb-4">Не знаете, что выбрать?</h3>
            <p className="text-muted-foreground mb-6">
              Оставьте заявку, и наш специалист перезвонит в течение 15 минут. 
              Бесплатно проконсультируем и поможем выбрать лучший вариант отделки.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={() => window.open('tel:+79XXXXXXXXX', '_self')}
              >
                <Phone className="mr-2 h-5 w-5" />
                Позвонить сейчас
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.open('https://wa.me/79XXXXXXXXX', '_blank')}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Написать в WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialContacts;