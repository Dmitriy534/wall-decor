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
    <section id="company" className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12 lg:mb-16 animate-fade-in">
          <Badge variant="secondary" className="mb-3 md:mb-4 px-3 md:px-4 py-1 md:py-2 text-xs md:text-sm">
            О нашей компании
          </Badge>
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light mb-4 md:mb-6">
            Мир <span className="text-gradient">отделки стен</span>
          </h2>
          <p className="text-sm md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            Мы специализируемся на создании уютных и красивых интерьеров. 
            Наша миссия — преобразить ваш дом, сделав его местом, где хочется находиться.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-8 md:mb-12 lg:mb-16">
          <div className="space-y-6 md:space-y-8 animate-slide-up">
            <div>
              <h3 className="text-lg md:text-xl lg:text-2xl font-medium mb-3 md:mb-4 flex items-center">
                <Users className="h-5 w-5 md:h-6 md:w-6 text-primary mr-2 md:mr-3" />
                Человечный подход
              </h3>
              <p className="text-muted-foreground text-sm md:text-base lg:text-lg leading-relaxed">
                В мире современных технологий мы не забываем о главном — о людях. 
                Каждый наш клиент уникален, и мы находим индивидуальный подход к каждому проекту.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg md:text-xl lg:text-2xl font-medium mb-3 md:mb-4 flex items-center">
                <Award className="h-5 w-5 md:h-6 md:w-6 text-primary mr-2 md:mr-3" />
                Профессиональный опыт
              </h3>
              <p className="text-muted-foreground text-sm md:text-base lg:text-lg leading-relaxed">
                Более 10 лет работы в сфере отделки стен. Мы знаем все тонкости и 
                нюансы различных материалов и техник нанесения.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 animate-fade-in mt-8 lg:mt-0">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className={`card-shadow hover:shadow-glow smooth-transition ${
                  feature.highlight ? 'border-primary/50 bg-primary/5' : ''
                }`}
              >
                <CardContent className="p-4 md:p-6 text-center">
                  <div className={`w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center mx-auto mb-3 md:mb-4 ${
                    feature.highlight 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-primary/20 text-primary'
                  }`}>
                    <feature.icon className="h-5 w-5 md:h-6 md:w-6" />
                  </div>
                  <h4 className="text-base md:text-lg font-medium mb-2 md:mb-3">{feature.title}</h4>
                  <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl md:rounded-2xl p-6 md:p-8 animate-scale-in">
          <h3 className="text-lg md:text-xl lg:text-2xl font-medium mb-3 md:mb-4">Работаем в Московской области</h3>
          <p className="text-muted-foreground text-sm md:text-base lg:text-lg mb-4 md:mb-6">
            Выезжаем на объекты по всей Московской области. 
            Бесплатный выезд замерщика и консультация на месте.
          </p>
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            <Badge variant="secondary" className="px-3 md:px-4 py-1 md:py-2 text-xs md:text-sm">Москва</Badge>
            <Badge variant="secondary" className="px-3 md:px-4 py-1 md:py-2 text-xs md:text-sm">Московская область</Badge>
            <Badge variant="secondary" className="px-3 md:px-4 py-1 md:py-2 text-xs md:text-sm">Подмосковье</Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyDescription;