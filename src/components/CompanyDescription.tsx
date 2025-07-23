import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Users, Shield, Sparkles, Gift, Award } from 'lucide-react';

const CompanyDescription = () => {
  const features = [
    {
      icon: Heart,
      title: 'Клиенты для нас дороги',
      description: 'Это люди, с которыми мы поддерживаем связь и всегда готовы помочь',
      highlight: true
    },
    {
      icon: Gift,
      title: 'Скидка постоянным клиентам',
      description: 'При повторном обращении предоставляем выгодные условия'
    },
    {
      icon: Shield,
      title: 'Тщательная подготовка',
      description: 'Убираем и укрываем всё защитными покрытиями перед началом работ'
    },
    {
      icon: Sparkles,
      title: 'Идеальная чистота',
      description: 'Стараемся сдать объект в первоначальной чистоте'
    }
  ];

  return (
    <section id="company" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="secondary" className="mb-4 px-4 py-2">
            О нашей компании
          </Badge>
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Мир <span className="text-gradient">отделки стен</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Мы специализируемся на создании уютных и красивых интерьеров. 
            Наша миссия — преобразить ваш дом, сделав его местом, где хочется находиться.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-8 animate-slide-up">
            <div>
              <h3 className="text-2xl font-medium mb-4 flex items-center">
                <Users className="h-6 w-6 text-primary mr-3" />
                Человечный подход
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                В мире современных технологий мы не забываем о главном — о людях. 
                Каждый наш клиент уникален, и мы находим индивидуальный подход к каждому проекту.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-medium mb-4 flex items-center">
                <Award className="h-6 w-6 text-primary mr-3" />
                Профессиональный опыт
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Более 10 лет работы в сфере отделки стен. Мы знаем все тонкости и 
                нюансы различных материалов и техник нанесения.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-fade-in">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className={`card-shadow hover:shadow-glow smooth-transition ${
                  feature.highlight ? 'border-primary/50 bg-primary/5' : ''
                }`}
              >
                <CardContent className="p-6 text-center">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 ${
                    feature.highlight 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-primary/20 text-primary'
                  }`}>
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h4 className="text-lg font-medium mb-3">{feature.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 animate-scale-in">
          <h3 className="text-2xl font-medium mb-4">Работаем в Московской области</h3>
          <p className="text-muted-foreground text-lg mb-6">
            Выезжаем на объекты по всей Московской области. 
            Бесплатный выезд замерщика и консультация на месте.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Badge variant="secondary" className="px-4 py-2">Москва</Badge>
            <Badge variant="secondary" className="px-4 py-2">Московская область</Badge>
            <Badge variant="secondary" className="px-4 py-2">Подмосковье</Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyDescription;