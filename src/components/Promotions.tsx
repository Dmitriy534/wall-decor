import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Gift, 
  Percent, 
  Calendar, 
  Home, 
  Clock, 
  Star,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const Promotions = () => {
  const promotions = [
    {
      id: 1,
      type: 'discount',
      title: 'Скидка 10% при заказе от 50 м²',
      description: 'Большие объемы - больше экономия',
      discount: '10%',
      condition: 'от 50 м²',
      validUntil: '31 декабря 2024',
      features: [
        'Действует на все виды работ',
        'Можно комбинировать с материалами',
        'Дополнительная скидка на материалы 5%'
      ],
      isPopular: true,
      icon: Percent,
      bgColor: 'bg-primary/10',
      borderColor: 'border-primary/20'
    },
    {
      id: 2,
      type: 'free_service',
      title: 'Бесплатный выезд замерщика',
      description: 'Точный расчет стоимости без переплат',
      discount: 'Бесплатно',
      condition: 'по городу',
      validUntil: 'постоянно',
      features: [
        'Выезд в удобное время',
        'Консультация по материалам',
        'Составление сметы на месте'
      ],
      isPopular: false,
      icon: Home,
      bgColor: 'bg-secondary/10',
      borderColor: 'border-secondary/20'
    },
    {
      id: 3,
      type: 'winter_promo',
      title: 'Зимняя акция "Уютный дом"',
      description: 'Специальные цены на период до весны',
      discount: '15%',
      condition: 'до 31 марта',
      validUntil: '31 марта 2025',
      features: [
        'Фиксация цен на материалы',
        'Бесплатное хранение материалов',
        'Приоритетная запись'
      ],
      isPopular: false,
      icon: Gift,
      bgColor: 'bg-accent/10',
      borderColor: 'border-accent/20'
    },
    {
      id: 4,
      type: 'quick_response',
      title: 'Экспресс-ремонт за 3 дня',
      description: 'Быстрое выполнение небольших объемов',
      discount: '+0%',
      condition: 'до 30 м²',
      validUntil: 'по договоренности',
      features: [
        'Гарантированные сроки',
        'Работа без выходных',
        'Штраф за просрочку'
      ],
      isPopular: false,
      icon: Clock,
      bgColor: 'bg-muted/10',
      borderColor: 'border-muted/20'
    }
  ];

  const getIconColor = (type: string) => {
    switch (type) {
      case 'discount': return 'text-primary';
      case 'free_service': return 'text-secondary';
      case 'winter_promo': return 'text-accent';
      case 'quick_response': return 'text-muted-foreground';
      default: return 'text-primary';
    }
  };

  return (
    <div className="w-full">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-light mb-4">
          Акции и <span className="text-gradient">спецпредложения</span>
        </h3>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Выгодные предложения для экономии на ремонте
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {promotions.map((promo) => {
          const Icon = promo.icon;
          return (
            <Card 
              key={promo.id}
              className={`relative overflow-hidden hover:shadow-glow smooth-transition card-shadow ${promo.bgColor} ${promo.borderColor}`}
            >
              {promo.isPopular && (
                <div className="absolute top-4 right-4">
                  <Badge variant="default" className="bg-primary text-primary-foreground">
                    <Star className="h-3 w-3 mr-1" />
                    Популярное
                  </Badge>
                </div>
              )}

              <CardHeader className="pb-4">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg ${promo.bgColor}`}>
                    <Icon className={`h-6 w-6 ${getIconColor(promo.type)}`} />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-2">
                      {promo.title}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">
                      {promo.description}
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Условия акции */}
                <div className="flex items-center justify-between p-3 bg-background/50 rounded-lg">
                  <div>
                    <div className="text-2xl font-bold text-primary">
                      {promo.discount}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {promo.condition}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium">
                      Действует до:
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {promo.validUntil}
                    </div>
                  </div>
                </div>

                {/* Особенности */}
                <ul className="space-y-2">
                  {promo.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Кнопка действия */}
                <Button 
                  variant={promo.isPopular ? "default" : "outline"}
                  className="w-full group"
                >
                  Воспользоваться акцией
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 smooth-transition" />
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Дополнительная информация */}
      <Card className="mt-8 card-shadow bg-primary/5 border-primary/20">
        <CardContent className="p-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Calendar className="h-5 w-5 text-primary" />
            <h4 className="text-lg font-medium">Акции можно комбинировать</h4>
          </div>
          <p className="text-muted-foreground mb-4">
            Некоторые акции можно комбинировать между собой для максимальной выгоды. 
            Уточняйте детали у менеджера при оформлении заказа.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <Badge variant="outline">Скидки суммируются</Badge>
            <Badge variant="outline">Без скрытых доплат</Badge>
            <Badge variant="outline">Фиксированные цены</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Promotions;