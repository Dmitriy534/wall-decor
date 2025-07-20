import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ComparisonItem {
  id: number;
  title: string;
  location: string;
  beforeImage: string;
  afterImage: string;
  description: string;
}

const BeforeAfterComparison = () => {
  const [isAfter, setIsAfter] = useState(false);
  const [currentItem, setCurrentItem] = useState(0);

  // Заглушечные данные - в реальном проекте заменить на настоящие изображения
  const comparisons: ComparisonItem[] = [
    {
      id: 1,
      title: 'Декоративная штукатурка в гостиной',
      location: 'ЖК "Солнечный", кв. 45',
      beforeImage: '/placeholder.svg',
      afterImage: '/placeholder.svg',
      description: 'Венецианская штукатурка с эффектом мрамора'
    },
    {
      id: 2,
      title: 'Покраска стен в спальне',
      location: 'ул. Ленина, 15',
      beforeImage: '/placeholder.svg',
      afterImage: '/placeholder.svg',
      description: 'Покраска акриловой краской премиум класса'
    },
    {
      id: 3,
      title: 'Поклейка обоев в детской',
      location: 'ЖК "Радуга", кв. 78',
      beforeImage: '/placeholder.svg',
      afterImage: '/placeholder.svg',
      description: 'Флизелиновые обои с детским рисунком'
    }
  ];

  const nextItem = () => {
    setCurrentItem((prev) => (prev + 1) % comparisons.length);
    setIsAfter(false);
  };

  const prevItem = () => {
    setCurrentItem((prev) => (prev - 1 + comparisons.length) % comparisons.length);
    setIsAfter(false);
  };

  const current = comparisons[currentItem];

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-light mb-4">
          <span className="text-gradient">До</span> и <span className="text-gradient">После</span>
        </h3>
        <p className="text-muted-foreground">
          Посмотрите на результаты нашей работы
        </p>
      </div>

      <Card className="overflow-hidden card-shadow">
        <CardContent className="p-0">
          <div className="relative">
            {/* Изображение */}
            <div className="relative h-96 overflow-hidden">
              <img
                src={isAfter ? current.afterImage : current.beforeImage}
                alt={isAfter ? 'После ремонта' : 'До ремонта'}
                className="w-full h-full object-cover smooth-transition"
              />
              
              {/* Переключатель ДО/ПОСЛЕ */}
              <div className="absolute top-4 left-4">
                <Badge 
                  variant={isAfter ? "default" : "secondary"}
                  className="text-sm font-medium"
                >
                  {isAfter ? 'ПОСЛЕ' : 'ДО'}
                </Badge>
              </div>

              {/* Кнопка переключения */}
              <button
                onClick={() => setIsAfter(!isAfter)}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm border border-border rounded-full p-3 hover:bg-background smooth-transition"
              >
                {isAfter ? <ChevronLeft className="h-6 w-6" /> : <ChevronRight className="h-6 w-6" />}
              </button>

              {/* Навигация между проектами */}
              <div className="absolute top-4 right-4 flex gap-2">
                <button
                  onClick={prevItem}
                  className="bg-background/80 backdrop-blur-sm border border-border rounded-full p-2 hover:bg-background smooth-transition"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={nextItem}
                  className="bg-background/80 backdrop-blur-sm border border-border rounded-full p-2 hover:bg-background smooth-transition"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Информация о проекте */}
            <div className="p-6">
              <h4 className="text-xl font-medium mb-2">{current.title}</h4>
              <p className="text-primary mb-2">{current.location}</p>
              <p className="text-muted-foreground">{current.description}</p>
              
              <div className="flex justify-center mt-4">
                <div className="flex gap-2">
                  {comparisons.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setCurrentItem(index);
                        setIsAfter(false);
                      }}
                      className={`w-2 h-2 rounded-full smooth-transition ${
                        index === currentItem ? 'bg-primary' : 'bg-muted'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BeforeAfterComparison;