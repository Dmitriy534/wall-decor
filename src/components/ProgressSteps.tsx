import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ClipboardList, 
  ShoppingCart, 
  Hammer, 
  CheckCircle2, 
  Phone,
  Calendar,
  Palette,
  Trophy
} from 'lucide-react';

const ProgressSteps = () => {
  const steps = [
    {
      id: 1,
      icon: Phone,
      title: 'Заявка',
      description: 'Оставляете заявку на сайте или звоните',
      details: ['Консультация по телефону', 'Уточнение пожеланий', 'Предварительная оценка'],
      duration: '5 минут'
    },
    {
      id: 2,
      icon: Calendar,
      title: 'Замер',
      description: 'Выезд мастера для замера и консультации',
      details: ['Бесплатный выезд', 'Точные измерения', 'Подбор материалов'],
      duration: '1 час'
    },
    {
      id: 3,
      icon: ClipboardList,
      title: 'Договор',
      description: 'Составление сметы и подписание договора',
      details: ['Детальная смета', 'Фиксированные цены', 'Гарантийные обязательства'],
      duration: '30 минут'
    },
    {
      id: 4,
      icon: ShoppingCart,
      title: 'Материалы',
      description: 'Закупка качественных материалов',
      details: ['Проверенные поставщики', 'Сертифицированные материалы', 'Доставка на объект'],
      duration: '1-2 дня'
    },
    {
      id: 5,
      icon: Palette,
      title: 'Подготовка',
      description: 'Подготовка поверхности к отделке',
      details: ['Защита мебели', 'Очистка стен', 'Грунтовка поверхности'],
      duration: '1-2 дня'
    },
    {
      id: 6,
      icon: Hammer,
      title: 'Работы',
      description: 'Выполнение отделочных работ',
      details: ['Профессиональное выполнение', 'Контроль качества', 'Без пыли и грязи'],
      duration: '2-5 дней'
    },
    {
      id: 7,
      icon: CheckCircle2,
      title: 'Проверка',
      description: 'Контроль качества и приемка работ',
      details: ['Детальный осмотр', 'Устранение замечаний', 'Уборка объекта'],
      duration: '1 день'
    },
    {
      id: 8,
      icon: Trophy,
      title: 'Гарантия',
      description: 'Сдача объекта с гарантией',
      details: ['Гарантия 2 года', 'Сертификат качества', 'Послегарантийное обслуживание'],
      duration: 'до 2 лет'
    }
  ];

  return (
    <div className="w-full">
      <div className="text-center mb-8 md:mb-12">
        <h3 className="text-2xl md:text-3xl font-light mb-4">
          Этапы <span className="text-gradient">работы</span>
        </h3>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Прозрачный процесс от заявки до гарантии. Каждый этап под контролем.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <Card 
              key={step.id} 
              className="relative overflow-hidden group hover:shadow-glow smooth-transition card-shadow"
            >
              <CardContent className="p-6">
                {/* Номер этапа */}
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="text-xs">
                    {step.id}/8
                  </Badge>
                </div>

                {/* Иконка */}
                <div className="mb-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 smooth-transition">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                </div>

                {/* Заголовок и описание */}
                <h4 className="text-lg font-medium mb-2">{step.title}</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  {step.description}
                </p>

                {/* Детали */}
                <ul className="space-y-1 mb-4">
                  {step.details.map((detail, idx) => (
                    <li key={idx} className="text-xs text-muted-foreground flex items-start">
                      <div className="w-1 h-1 bg-primary rounded-full mt-2 mr-2 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>

                {/* Время */}
                <div className="flex items-center justify-between pt-3 border-t border-border">
                  <span className="text-xs text-muted-foreground">Длительность:</span>
                  <Badge variant="outline" className="text-xs">
                    {step.duration}
                  </Badge>
                </div>

                {/* Соединительная линия */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border transform -translate-y-1/2" />
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Общее время */}
      <div className="text-center mt-6 md:mt-8">
        <Card className="inline-block card-shadow">
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <ClipboardList className="h-5 w-5 text-primary" />
              <span className="font-medium">Общее время проекта:</span>
              <Badge variant="default" className="ml-2">
                От 7 до 14 дней
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProgressSteps;