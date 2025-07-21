import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { ChevronDown, ChevronUp, MapPin, Calendar } from "lucide-react";

// Import existing images
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

const ExpandableGallery = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const mainProjects = [
    { image: gallery1, title: 'Квартира на Ленина, 10', type: 'Покраска стен', date: '2024-01-15' },
    { image: gallery2, title: 'ЖК "Солнечный", кв. 45', type: 'Декоративная штукатурка', date: '2024-01-10' },
    { image: gallery3, title: 'ул. Пушкина, 15', type: 'Поклейка обоев', date: '2024-01-05' }
  ];

  const additionalProjects = [
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
      title: 'Коттедж "Березовая роща"',
      type: 'Венецианская штукатурка',
      date: '2023-12-20'
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop",
      title: 'ТЦ "Европа", офис 401',
      type: 'Покраска стен',
      date: '2023-12-15'
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      title: 'ул. Гагарина, 22',
      type: 'Жидкие обои',
      date: '2023-12-10'
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1572041002223-3d898f4cca66?w=400&h=300&fit=crop",
      title: 'ЖК "Парк Хаус", кв. 78',
      type: 'Декоративная штукатурка',
      date: '2023-12-05'
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
      title: 'Дом на Садовой, 8',
      type: 'Поклейка обоев',
      date: '2023-11-28'
    },
    {
      id: 9,
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop",
      title: 'Ресторан "Итальяно"',
      type: 'Фактурная штукатурка',
      date: '2023-11-20'
    }
  ];

  const ProjectCard = ({ project, index }: { project: any, index: number }) => (
    <Card 
      key={index} 
      className="group overflow-hidden hover:shadow-glow smooth-transition card-shadow animate-fade-in"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <CardContent className="p-0">
        <div className="relative overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-64 object-cover group-hover:scale-105 smooth-transition"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          <div className="absolute top-4 left-4">
            <Badge variant="secondary">{project.type}</Badge>
          </div>
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <h3 className="text-lg font-medium mb-2">{project.title}</h3>
            <div className="flex items-center gap-4 text-sm opacity-90">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                Адрес
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                {new Date(project.date).toLocaleDateString('ru-RU')}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div>
      {/* Основные проекты */}
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {mainProjects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>

      {/* Кнопка показать все */}
      <div className="text-center mb-8">
        <Button 
          variant="outline" 
          size="lg"
          onClick={() => setIsExpanded(!isExpanded)}
          className="px-8 py-3 hover:bg-primary hover:text-primary-foreground smooth-transition"
        >
          {isExpanded ? (
            <>
              <ChevronUp className="mr-2 h-5 w-5" />
              Скрыть дополнительные работы
            </>
          ) : (
            <>
              <ChevronDown className="mr-2 h-5 w-5" />
              Показать все работы
            </>
          )}
        </Button>
      </div>

      {/* Дополнительные проекты */}
      <div 
        className={`overflow-hidden smooth-transition ${
          isExpanded ? 'max-h-none opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{ 
          transitionProperty: 'max-height, opacity',
          transitionDuration: '0.5s',
          transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
        }}
      >
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {additionalProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
        
        {/* Статистика */}
        <div className="bg-dark-surface rounded-lg p-8 text-center">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <p className="text-muted-foreground">Выполненных проектов</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">15</div>
              <p className="text-muted-foreground">Лет опыта</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <p className="text-muted-foreground">Довольных клиентов</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <p className="text-muted-foreground">Поддержка</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpandableGallery;